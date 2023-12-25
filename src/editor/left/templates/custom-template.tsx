import { CustomTemplateProps } from '@/typings/templates';
import css from '@/styles/templates.module.scss';
import Add from '@/lib/icons/Add';

const CustomTemplateCard = ({ ...rest }: CustomTemplateProps) => {
  return (
    <div className={`template-background ${css.background}`} {...rest}>
      <div className={css['custom-box']}>
        <Add size={35} />
        <p className={css['custom-text']}>Custom Header</p>
      </div>
    </div>
  );
};

export default CustomTemplateCard;
