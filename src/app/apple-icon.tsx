import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/**
 * Apple touch icon — full-bleed gradient (iOS applies its own mask/rounding)
 * with the same code-lines snippet mark as the favicon.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
        }}
      >
        <svg width="118" height="118" viewBox="0 0 24 24">
          <rect x="5" y="6.5" width="9" height="2.6" rx="1.3" fill="#ffffff" />
          <rect x="5" y="10.7" width="14" height="2.6" rx="1.3" fill="#ffffff" />
          <rect
            x="5"
            y="14.9"
            width="7"
            height="2.6"
            rx="1.3"
            fill="#ffffff"
            opacity="0.7"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
