import React from 'react';
import Image from 'next/image';
import css from '@/styles/shadow.module.scss';

const GlowShadow = () => {
  return (
    <section className={css.container}>
      <Image
        src={'/glow-images/violet-with-lines.png'}
        alt="violet-with-lines"
        fill={true}
        className={css.image}
      />
      <Image
        src={'/glow-images/pink-with-lines.png'}
        alt="pink-with-lines"
        fill={true}
        className={css.image}
      />
    </section>
  );
};
export default GlowShadow;
