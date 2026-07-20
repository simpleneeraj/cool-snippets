import React from 'react';
import WindowChrome from './templates/window-chrome';
import { HEADER_TEMPLATES } from './templates/registry';
import { SlideHeaderType } from '@features/studio/model/editor';
import { HeadersProps } from '@features/studio/model/templates';

type CodeHeaderWidgetProps = {
  header: SlideHeaderType | null;
};

/**
 * Renders the code-block header for the active style. Every style is described
 * once in `HEADER_TEMPLATES`; this component looks the entry up, merges its
 * defaults under the slide's background, and hands the shared `WindowChrome` the
 * matching decoration. Adding a style never touches this file.
 */
const CodeHeaderWidget: React.FC<CodeHeaderWidgetProps> = ({ header }) => {
  const templateType = header?.type;
  const preset = templateType ? HEADER_TEMPLATES[templateType] : undefined;
  if (!preset) return null;

  const props: HeadersProps = {
    style: { ...preset.defaultStyle, background: header?.style?.background },
    colors: preset.colors,
    name: header?.properties?.title?.text,
    variant: header?.variant,
    position: header?.position,
    inputType: header?.input,
    iconSource: header?.properties?.title?.icon,
  };

  const Decoration = preset.decoration;

  return (
    <WindowChrome
      {...props}
      decorationSide={preset.decorationSide}
      decoration={Decoration ? <Decoration {...props} /> : null}
    />
  );
};

export default CodeHeaderWidget;
