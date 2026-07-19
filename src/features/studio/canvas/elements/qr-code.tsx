'use client';

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCodePropertiesType } from '@features/studio/model/editor';
import { QR_ERROR_LEVEL } from '@features/studio/model/enums';

type Props = {
  properties?: QrCodePropertiesType;
};

/**
 * Rendered as SVG rather than canvas: the export pipeline clones the DOM, and
 * a canvas would have to be redrawn and awaited before capture, whereas SVG
 * serialises as-is and stays sharp at any pixel ratio.
 */
const QrCodeElement: React.FC<Props> = ({ properties }) => (
  <QRCodeSVG
    value={properties?.value || ' '}
    size={properties?.size ?? 128}
    fgColor={properties?.fgColor ?? '#000000'}
    bgColor={properties?.bgColor ?? '#ffffff'}
    level={properties?.level ?? QR_ERROR_LEVEL.MEDIUM}
    marginSize={properties?.marginSize ?? 2}
  />
);

export default QrCodeElement;
