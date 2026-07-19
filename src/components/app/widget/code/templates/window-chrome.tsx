import React from 'react';
import InputWithIcon from './input';
import { template, headerJustify } from './style';
import { HeaderInputType, HeadersProps } from '@shared/types/templates';

type Props = HeadersProps & {
  /** The window "personality" — traffic lights, caption buttons, etc. */
  decoration?: React.ReactNode;
  /** Which edge the decoration sits on relative to the filename. */
  decorationSide?: 'start' | 'end';
};

/**
 * The single window-chrome frame every header style shares.
 *
 * It owns the row: the background, the alignment (`justify-content`) and the
 * filename input; the caller passes a `decoration` for the part that differs.
 * This replaces three near-identical template components (iOS / Windows / Unix)
 * that differed only in what filled the dot slot and on which side it sat.
 */
const WindowChrome: React.FC<Props> = ({
  position,
  decoration,
  decorationSide = 'start',
  ...rest
}) => {
  const { base } = template();

  const input =
    rest.inputType !== HeaderInputType.NONE ? <InputWithIcon {...rest} /> : null;

  return (
    <div
      className={base()}
      style={{
        background: rest.style.background,
        justifyContent: headerJustify(position),
      }}
    >
      {decorationSide === 'start' ? (
        <>
          {decoration}
          {input}
        </>
      ) : (
        <>
          {input}
          {decoration}
        </>
      )}
    </div>
  );
};

export default WindowChrome;
