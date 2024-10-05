import React from 'react';
import UnixNeon from './templates/unix-neon';
import IOSTermainal from './templates/ios-terminal';
import WindowsTen from './templates/windows-terminal';
import templatesData from '@/json/templates.json';
/**
 * State Should be dynamic and comes from server
 */

import { HeaderInputType, HeaderVariants } from '@/typings/templates';
import { trafficLights, unixColors } from './templates/colors';
import { SlideHeaderType } from '@/typings/editor';

type CodeHeaderWidgetProps = {
  header: SlideHeaderType | null;
};

const CodeHeaderWidget: React.FC<CodeHeaderWidgetProps> = ({ header }) => {
  switch (header?.type) {
    case templatesData.ios:
      return (
        <IOSTermainal
          colors={trafficLights}
          variant={HeaderVariants.FILLED}
          style={{
            gap: '8px',
            size: '14px',
            borderWidth: '2px',
            borderRadius: '20px',
            padding: '0.8rem 0 0.8rem 0.8rem',
            background: header?.style?.background,
          }}
        />
      );

    case templatesData.windows:
      return (
        <WindowsTen
          variant={HeaderVariants.OUTLINE}
          inputType={HeaderInputType.ICON_AND_INPUT}
          iconSource="https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg"
          style={{
            gap: '8px',
            size: '16px',
            padding: '12px',
            background: header?.style?.background,
          }}
        />
      );
    case templatesData.unix:
      return (
        <UnixNeon
          colors={unixColors}
          variant={HeaderVariants.OUTLINE}
          inputType={HeaderInputType.ICON}
          iconSource="https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg"
          style={{
            gap: '8px',
            size: '16px',
            padding: '12px',
            background: header?.style?.background,
          }}
        />
      );
    default:
      return null;
  }
};

export default CodeHeaderWidget;

// background={header.background}
// theme={header['theme']}
// lightsStyle={{
//   size: 14,
//   iconGap: '8px',
//   padding: `0.8rem 0 0.8rem 0.8rem`,
// }}
// size={16}
// iconGap="0.7rem"
// padding={`0.8rem`}
// icon={header.icon}
// inputStyle={header.input}
// background={header.background}
// theme={HeaderVariants.FILLED}
// size={14}
// iconGap=".8rem"
// padding={`0.8rem`}
// icon={header.icon}
// inputStyle={header.input}
// background={header.background}
