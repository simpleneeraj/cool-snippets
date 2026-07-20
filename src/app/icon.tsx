/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

const source =
  'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={source}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '100%',
        }}
      />
    </div>,
    size,
  );
}
