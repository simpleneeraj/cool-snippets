import React from 'react';
import css from '@/styles/web/elements.module.scss';

interface HeadingProps {
  title: string;
  paragraph: string;
}

const Heading = ({ paragraph, title }: HeadingProps) => {
  return (
    <div className={css['container']}>
      <div className={css['max-width']}>
        <div className={css['heading']}>
          <h2>{title}</h2>
        </div>
        <div className={css['description']}>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
export default Heading;
