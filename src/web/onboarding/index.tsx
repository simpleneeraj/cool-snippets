/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useCookie from '@/hooks/usecookie';
import css from 'styles/onboarding.module.scss';

const OnBording = () => {
  const { isCookie, setCookies } = useCookie('ONBOARDING');
  return (
    <React.Fragment>
      {isCookie && (
        <div className={css.container}>
          <div className={css.slider}>
            <div className={css.mask}>
              <Card
                onSet={() =>
                  setCookies('COMPLETED', { path: '/', expires: 100 })
                }
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default OnBording;

const Card = ({ onSet }: any) => {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src="images/web.jpg" loading="lazy" alt="" />
      </div>
      <div className={css.content}>
        <div className={css.base}>
          <span>Getting Started</span>
          <h6>Welcome to Codebase Webflow UI Kit</h6>
          <p>
            A multipurpose template crafted for technology and software
            businesses. In dark mode with vivid gradients and shapes.
          </p>
        </div>
        <div className={css.caption}>
          <span>1/3</span>
          <div className={css.line}></div>
        </div>
        <div className={css.bottom}>
          <div className={css.radio}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={css.nextbutton}>
            <div onClick={onSet}>Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
};
