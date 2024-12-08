/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { template } from './style';
import { HeaderInputType, HeadersProps } from '@/typings/templates';

const InputWithIcon = ({
  inputType,
  iconSource,
  name,
}: HeadersProps & React.ComponentPropsWithoutRef<'input'>) => {
  const { inputContainer, input, iconBase, iconContainer, image } = template();

  return (
    <div className={inputContainer()}>
      <div className={iconBase()}>
        {inputType === HeaderInputType.ICON_AND_INPUT && (
          <React.Fragment>
            <span className={iconContainer()}>
              <img className={image()} src={iconSource} alt="icon" />
            </span>
            <input
              type="text"
              maxLength={50}
              placeholder="index.tsx"
              className={input()}
              value={name}
              readOnly
            />
          </React.Fragment>
        )}
        {inputType === HeaderInputType.ICON && (
          <span className={iconContainer()}>
            <img className={image()} src={iconSource} alt="icon" />
          </span>
        )}
        {inputType === HeaderInputType.INPUT && (
          <input
            type="text"
            maxLength={50}
            placeholder="index.tsx"
            className={input()}
            value={name}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default InputWithIcon;
