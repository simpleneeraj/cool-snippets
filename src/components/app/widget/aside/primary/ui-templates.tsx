import templatesData from '@/json/templates.json';
import { HeaderInputType, HeaderVariants } from '@/typings/templates';
import { trafficLights, unixColors } from '../../code/templates/colors';
import UnixNeon from '@/components/app/widget/code/templates/unix-neon';
import IOSTermainal from '@/components/app/widget/code/templates/ios-terminal';
import WindowsTen from '@/components/app/widget/code/templates/windows-terminal';

const uiTemplates = [
  {
    name: 'iOS Traffic',
    // description: 'iOS traffic light colors.',
    value: templatesData.ios,
    codeHeader: (
      <IOSTermainal
        inputType={HeaderInputType.NONE}
        colors={trafficLights}
        variant={HeaderVariants.FILLED}
        style={{
          gap: '6px',
          size: '12px',
          borderRadius: '20px',
        }}
      />
    ),
  },
  {
    name: 'Unix Neon',
    // description: 'Neon-themed inspired by Unix systems.',
    value: templatesData.unix,
    codeHeader: (
      <UnixNeon
        inputType={HeaderInputType.NONE}
        colors={unixColors}
        variant={HeaderVariants.OUTLINE}
        style={{
          gap: '6px',
          size: '14px',
        }}
      />
    ),
  },
  {
    name: 'Windows Terminal',
    // description: 'Minimal Windows Terminal.',
    value: templatesData.windows,
    codeHeader: (
      <WindowsTen
        inputType={HeaderInputType.NONE}
        style={{
          gap: '6px',
          size: '14px',
        }}
      />
    ),
  },
];

export default uiTemplates;
