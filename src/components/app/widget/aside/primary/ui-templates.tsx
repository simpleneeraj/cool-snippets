import WindowChrome from '@/components/app/widget/code/templates/window-chrome';
import { HEADER_TEMPLATE_LIST } from '@/components/app/widget/code/templates/registry';
import { HeaderInputType, HeadersProps } from '@shared/types/templates';

/**
 * Header-style options for the picker, derived from the one registry so a new
 * style shows up here the moment it is added — no parallel list to maintain.
 * A chrome-less style previews its filename so the swatch isn't blank.
 */
const uiTemplates = HEADER_TEMPLATE_LIST.map((template) => {
  const Decoration = template.decoration;

  const props: HeadersProps = {
    style: template.preview.style,
    colors: template.colors,
    variant: template.preview.variant,
    inputType: Decoration ? HeaderInputType.NONE : HeaderInputType.INPUT,
  };

  return {
    name: template.name,
    value: template.type,
    codeHeader: (
      <WindowChrome
        {...props}
        decorationSide={template.decorationSide}
        decoration={Decoration ? <Decoration {...props} /> : null}
      />
    ),
  };
});

export default uiTemplates;
