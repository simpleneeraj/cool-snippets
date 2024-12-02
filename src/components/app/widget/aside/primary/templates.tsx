import React from 'react';
import templatesData from '@/json/templates.json';
import { HeaderVariants } from '@/typings/templates';
import { trafficLights, unixColors } from '../../code/templates/colors';
import UnixNeon from '@/components/app/widget/code/templates/unix-neon';
import IOSTermainal from '@/components/app/widget/code/templates/ios-terminal';
import WindowsTen from '@/components/app/widget/code/templates/windows-terminal';

export const templates = [
  {
    name: 'Nothing',
    value: 'nothing',
    codeHeader: null,
  },
  {
    name: 'ios Traffic Light',
    value: templatesData.ios,
    codeHeader: (
      <IOSTermainal
        colors={trafficLights}
        variant={HeaderVariants.FILLED}
        style={{
          gap: '4px',
          size: '8px',
          padding: '6px',
          borderRadius: '20px',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    ),
  },
  {
    name: 'ios Traffic Light',
    value: templatesData.unix,
    codeHeader: (
      <UnixNeon
        colors={unixColors}
        variant={HeaderVariants.OUTLINE}
        style={{
          gap: '4px',
          size: '8px',
          padding: '6px',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    ),
  },

  {
    name: 'Windows Terminal Border',
    value: templatesData.windows,
    codeHeader: (
      <WindowsTen
        style={{
          gap: '4px',
          size: '8px',
          padding: '6px',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    ),
  },
];
