import React from 'react';
import Span from '@/ui/span';
import IconButton from '@/ui/button/icon';
import css from '@/styles/app.module.scss';
// ICONS
import ImageOutline from '@/lib/icons/ImageOutline';
import AddCircleOutline from '@/lib/icons/AddCircleOutline';
import ColorFilterOutline from '@/lib/icons/ColorFilterOutline';
import SparklesOutline from '@/lib/icons/sparkles-outline';
import EllipsisHorizontalCircle from '@/lib/icons/EllipsisHorizontalCircle';

const BottomTabs = () => {
  return (
    <div className={css.bottomcover}>
      <div className={css.tabs}>
        {bottomTabArray.map(({ Icon, text, value }, index) => {
          return (
            <IconButton
              key={index}
              size="40px"
              direction="column"
              // onClick={() => updateBottomTab('name', value)}
              // disabled={bottom.name.includes(value) ? null : 'reduce-opacity'}
            >
              <Icon size={16} />
              <Span>{text}</Span>
            </IconButton>
          );
        })}
        <IconButton
          title="Simple AI"
          size="square"
          direction="column"
          active="clicked"
        >
          <SparklesOutline height={16} width={16} />
        </IconButton>
      </div>
    </div>
  );
};
export default BottomTabs;

const bottomTabArray = [
  {
    text: `Edit`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: EllipsisHorizontalCircle,
  },
  {
    text: `Insert`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: AddCircleOutline,
  },
  {
    text: `Filter`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: ColorFilterOutline,
  },
  {
    text: `Images`,
    get value() {
      return `CODE::${this.text.toUpperCase()}`;
    },
    Icon: ImageOutline,
  },
];
