import { ImageResponse } from 'next/og';
import appConfig from '@shared/config/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${appConfig.name} — ${appConfig.tagline}`;

/** Default social card for every route: brand mark, name, tagline, positioning. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 18% 22%, #1e1b4b 0%, #0a0a0a 60%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '112px',
              height: '112px',
              borderRadius: '26px',
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            }}
          >
            <svg width="66" height="66" viewBox="0 0 24 24">
              <rect x="5" y="6.5" width="9" height="2.6" rx="1.3" fill="#fff" />
              <rect
                x="5"
                y="10.7"
                width="14"
                height="2.6"
                rx="1.3"
                fill="#fff"
              />
              <rect
                x="5"
                y="14.9"
                width="7"
                height="2.6"
                rx="1.3"
                fill="#fff"
                opacity="0.7"
              />
            </svg>
          </div>
          <div style={{ fontSize: '66px', fontWeight: 700, color: '#ffffff' }}>
            {appConfig.name}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '44px',
            color: '#e5e7eb',
            maxWidth: '960px',
            lineHeight: 1.25,
          }}
        >
          {appConfig.tagline}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '52px',
            fontSize: '26px',
            color: '#9ca3af',
          }}
        >
          Free · Open source · No account · a ray.so & Carbon alternative
        </div>
      </div>
    ),
    { ...size },
  );
}
