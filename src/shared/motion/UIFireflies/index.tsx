import React from 'react';

type UIFirefliesProps = {
  counts?: number;
  color?: string;
};

const COUNTS = 25;

const UIFireflies: React.FC<UIFirefliesProps> = ({
  counts = COUNTS,
  color = 'white',
}) => {
  return (
    <React.Fragment>
      {Array.from({ length: counts }).map((_, index) => (
        <div key={index} className="firefly"></div>
      ))}
      <style>{generateStyles(color)}</style>
    </React.Fragment>
  );
};

export default UIFireflies;

const generateStyles = (color: string) => {
  let base = `
      .firefly {
        position: fixed;
        left: 50%;
        top: 50%;
        width: 0.4vw;
        height: 0.4vw;
        margin: -0.2vw 0 0 9.8vw;
        animation: ease 200s alternate infinite;
        pointer-events: none;
      }

      .firefly::before,
      .firefly::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: -10vw;
      }

      .firefly::before {
        background: black;
        opacity: 0.4;
        animation: drift ease alternate infinite;
      }

      .firefly::after {
        background: white;
        opacity: 0;
        box-shadow: 0 0 0vw 0vw ${color};
        animation: drift ease alternate infinite, flash ease infinite;
      }

      @keyframes drift {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes flash {
        0%, 30%, 100% {
          opacity: 0;
          box-shadow: 0 0 0vw 0vw ${color};
        }
        5% {
          opacity: 1;
          box-shadow: 0 0 2vw 0.4vw ${color};
        }
      }
    `;

  for (let i = 1; i <= COUNTS; i++) {
    const steps = Math.floor(Math.random() * 12) + 16;
    const rotationSpeed = Math.random() * 10 + 8;

    base += `
        .firefly:nth-child(${i}) {
          animation-name: move${i};
        }

        .firefly:nth-child(${i})::before {
          animation-duration: ${rotationSpeed}s;
        }

        .firefly:nth-child(${i})::after {
          animation-duration: ${rotationSpeed}s, ${Math.random() * 6000 + 5000}ms;
          animation-delay: 0ms, ${Math.random() * 8000 + 500}ms;
        }

        @keyframes move${i} {
      `;
    for (let step = 0; step <= steps; step++) {
      base += `
          ${(step * 100) / steps}% {
            transform: translateX(${Math.random() * 100 - 50}vw) translateY(${Math.random() * 100 - 50}vh) scale(${Math.random() * 0.75 + 0.25});
          }
        `;
    }
    base += `}`;
  }

  return base;
};
