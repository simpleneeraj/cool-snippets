import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Brand favicon: a rounded tile carrying three code-lines — the "snippet"
 * motif — on the product's violet→blue gradient. Reads clearly down to 16px.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24">
          <rect x="5" y="6.5" width="9" height="2.6" rx="1.3" fill="#ffffff" />
          <rect
            x="5"
            y="10.7"
            width="14"
            height="2.6"
            rx="1.3"
            fill="#ffffff"
          />
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
