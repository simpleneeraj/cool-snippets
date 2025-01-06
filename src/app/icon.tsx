import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

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
          padding: '4px',
          borderRadius: '8px',
          background: 'rgba(0,0,0,0.5)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <g fill="none">
            <path fill="#d2e2da" d="M12 5.636V2L2.303 22l3.03-2.424z" />
            <path fill="#7e8b92" d="M12 5.636V2l9.697 20l-3.03-2.424z" />
            <path fill="#5a687a" d="M18.666 19.576H5.333L2.303 22h19.394z" />
            <path fill="#6a7c8b" d="M5.333 19.576L12 5.636l6.666 13.94z" />
            <path
              fill="#8ac4de"
              d="M12 10.485V6.242l-3.03 6.061l.908.91l-1.818.908l-2.121 5.152l2.424-2.121z"
            />
            <path
              fill="#58779f"
              d="M12 10.485V6.242l3.03 6.061l-.909.91l1.818.908l2.122 5.152l-2.425-2.121z"
            />
            <path
              fill="#475985"
              d="M15.636 17.152H8.363l-2.424 2.12h4.545l.91-.908h1.212l.909.909h4.545z"
            />
            <path
              fill="url(#tokenBrandedCrystal0)"
              d="M8.364 17.152L12 10.485l3.636 6.667z"
            />
            <defs>
              <linearGradient
                id="tokenBrandedCrystal0"
                x1="10.182"
                x2="15.636"
                y1="13.818"
                y2="17.152"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#d2edfb" />
                <stop offset="1" stop-color="#91cce5" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
