import React from 'react';
import dynamic from 'next/dynamic';
import { IconProviders, PickerProps } from '@/typings/icon-picker';

const IconGrid = dynamic(() => import('./grid'));
const EmojiPicker = dynamic(() => import('./emoji-picker'));

const IconContainer: React.FC<{ provider: IconProviders } & PickerProps> = (
  props
) => {
  const EmojiComponent = React.useMemo(
    () => <EmojiPicker {...props} />,
    [props]
  );

  switch (props.provider) {
    case IconProviders.TWITTER:
      return EmojiComponent;
    case IconProviders.FLUENTUI:
    case IconProviders.MATERIAL_ICONS:
    case IconProviders.VSCODE_SYMBOLS:
      return <IconGrid {...props} provider={props.provider} />;
    default:
      return null;
  }
};

export default IconContainer;
