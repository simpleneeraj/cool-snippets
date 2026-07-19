'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ELEMENTS } from '@features/studio/model/enums';
import UIView from '@shared/uikit/UIView';
import {
  AssetRefType,
  ElementType,
  QrCodePropertiesType,
  UserInfoPropertiesType,
  WatermarkPropertiesType,
} from '@features/studio/model/editor';
import { Extension } from '@uiw/react-codemirror';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { LanguagesEnum } from '@vendor/codemirror/languages';
import { ThemesEnum } from '@vendor/codemirror/themes';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import { dynamicTheme, dynamicLanguage } from '@vendor/codemirror/utils';
import { ElementToolbar } from './toolbar';
import useImageUpload from '@features/studio/lib/assets/use-image-upload';

const TextElement = dynamic(() => import('./text'), { ssr: false });
const CodeElement = dynamic(() => import('./code'), { ssr: false });
const ImageElement = dynamic(() => import('./image'), { ssr: false });
const QrCodeElement = dynamic(() => import('./qr-code'), { ssr: false });
const UserInfoElement = dynamic(() => import('./user-info'), { ssr: false });
const WatermarkElement = dynamic(() => import('./watermark'), { ssr: false });

type Props = {
  item: ElementType;
  /** Position in the slide's element array — this is the stacking order. */
  index: number;
};

const EditorComponents: React.FC<Props> = ({ item, index }) => {
  const { element, updateElement } = useActiveElement();
  const { onChangeSlideElement, onReplaceElementProperties } = useSlideEditor();
  const { pickImage } = useImageUpload();

  const isSelected = element === item.id;

  const onUploadImage = React.useCallback(async () => {
    updateElement(item.id!);
    const asset = await pickImage();
    if (!asset) return;
    onReplaceElementProperties(asset);
  }, [item.id, onReplaceElementProperties, pickImage, updateElement]);

  /**
   * anchorRef — points to the element's outermost DOM node.
   * Passed to ElementToolbar so it can measure position via
   * getBoundingClientRect() and portal itself to document.body,
   * escaping any overflow:hidden ancestor.
   */
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    updateElement(item.id!);
  };

  const wrapperStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    ...item.style,
    ...extra,
    position: 'absolute',
    zIndex: index + 1,
    ...(item.hidden && { display: 'none' }),
  });

  const renderBody = () => {
    switch (item.type) {
      case ELEMENTS.CODE:
        return (
          <CodeElement
            value={item.content}
            header={item?.header || null}
            editorOptions={item?.properties?.editor}
            onChange={(content) => onChangeSlideElement({ content })}
            theme={dynamicTheme(
              item?.properties?.theme as ThemesEnum | undefined,
              item?.properties?.glassmorphism?.enabled
                ? item?.properties?.glassmorphism?.opacity
                : 1,
            )}
            language={
              dynamicLanguage(
                item?.properties?.language as LanguagesEnum,
              ) as Extension
            }
          />
        );

      // `properties` is a shared loose bag; each element type owns a different
      // slice of it, so the shape is narrowed here at the dispatch point.
      case ELEMENTS.IMAGE:
      case ELEMENTS.ICON:
        return (
          <ImageElement
            properties={item.properties as AssetRefType}
            style={item.style}
            onUpload={onUploadImage}
          />
        );

      case ELEMENTS.QRCODE:
        return (
          <QrCodeElement properties={item.properties as QrCodePropertiesType} />
        );

      case ELEMENTS.USERINFO:
        return (
          <UserInfoElement
            properties={item.properties as UserInfoPropertiesType}
            style={item.style}
          />
        );

      case ELEMENTS.WATERMARK:
        return (
          <WatermarkElement
            properties={item.properties as WatermarkPropertiesType}
            style={item.style}
          />
        );

      case ELEMENTS.TEXT:
        return (
          <TextElement
            content={item.content}
            onChange={(content) => onChangeSlideElement({ content })}
          />
        );

      default:
        return null;
    }
  };

  if (!item.type) return null;

  // Text grows with its content; everything else honours its stored box.
  const extraStyle =
    item.type === ELEMENTS.TEXT ? { height: 'auto' } : undefined;

  return (
    <UIView
      ref={anchorRef}
      id={`element-${item.id}`}
      style={wrapperStyle(extraStyle)}
      onPointerDown={onPointerDown}
    >
      {isSelected && (
        <ElementToolbar
          item={item}
          anchorRef={anchorRef as React.RefObject<HTMLElement | null>}
        />
      )}
      {renderBody()}
    </UIView>
  );
};

export default EditorComponents;
