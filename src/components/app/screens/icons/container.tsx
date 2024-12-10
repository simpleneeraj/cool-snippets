import React from 'react';
import dynamic from 'next/dynamic';
import { IconCategory, PickerProps } from '@/typings/icon-picker';

const EmojiPicker = dynamic(() => import('./emoji-picker'));
const SymbolsPicker = dynamic(() => import('./symbols-picker'));
const FluentEmoji = dynamic(() => import('./fluentui-emoji'));
const MaterialIconsPicker = dynamic(() => import('./material-icons'));

const IconContainer: React.FC<{ type: IconCategory } & PickerProps> = (
  props
) => {
  const EmojiComponent = React.useMemo(
    () => <EmojiPicker {...props} />,
    [props]
  );
  const FluentComponent = React.useMemo(
    () => <FluentEmoji {...props} />,
    [props]
  );
  const MaterialComponent = React.useMemo(
    () => <MaterialIconsPicker {...props} />,
    [props]
  );
  const SymbolsComponent = React.useMemo(
    () => <SymbolsPicker {...props} />,
    [props]
  );

  switch (props.type) {
    case IconCategory.TWITTER:
      return EmojiComponent;
    case IconCategory.FLUENT:
      return FluentComponent;
    case IconCategory.GOOGLE:
      return MaterialComponent;
    case IconCategory.ICONS:
      return SymbolsComponent;
    default:
      return null;
  }
};

export default IconContainer;
