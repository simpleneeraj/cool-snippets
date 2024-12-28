import React from 'react';

const WebFooter = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
          <svg fill="none" height={44} viewBox="0 0 32 32" width={44}>
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-medium font-medium">ACME</span>
        </div>
        <span
          aria-hidden="true"
          className="w-px h-px block"
          style={{ marginLeft: '0.25rem', marginTop: '1rem' }}
        />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Home
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            About
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Services
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Projects
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contact
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Careers
          </a>
        </div>
        <span
          aria-hidden="true"
          className="w-px h-px block"
          style={{ marginLeft: '0.25rem', marginTop: '1.5rem' }}
        />
        <div className="flex justify-center gap-x-4">
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Facebook</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-5 iconify iconify--fontisto"
              width="0.5em"
              height="1em"
              viewBox="0 0 12 24"
            >
              <path
                fill="currentColor"
                d="M12.462.173v3.808h-2.265a2.11 2.11 0 0 0-1.675.521l.002-.002a2.368 2.368 0 0 0-.432 1.566v-.008v2.726h4.229l-.56 4.27H8.098V24H3.681V13.053H.001V8.784h3.68V5.639a5.56 5.56 0 0 1 1.502-4.162l-.003.003A5.418 5.418 0 0 1 9.185.002h-.013a24.124 24.124 0 0 1 3.406.185l-.117-.012z"
              />
            </svg>
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-5 iconify iconify--fontisto"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16 12a4 4 0 1 0-1.172 2.829A3.843 3.843 0 0 0 16 12.06l-.001-.063zm2.16 0a6.135 6.135 0 1 1-1.797-4.359a5.922 5.922 0 0 1 1.798 4.256l-.001.109zm1.687-6.406v.002a1.44 1.44 0 1 1-.422-1.018c.256.251.415.601.415.988v.029v-.001zm-7.84-3.44l-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014a4.117 4.117 0 0 0-2.272 2.254l-.01.027a5.975 5.975 0 0 0-.284 1.083l-.005.037a11.76 11.76 0 0 0-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649t.008 1.195t-.008 1.195t0 1.649t.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043a4.117 4.117 0 0 0 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024l1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014a4.117 4.117 0 0 0 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649t-.008-1.195t.008-1.195t0-1.649t-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073a6.254 6.254 0 0 0-.303-1.163l.014.043a4.117 4.117 0 0 0-2.254-2.272l-.027-.01a5.975 5.975 0 0 0-1.083-.284l-.037-.005a11.76 11.76 0 0 0-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zM24 12q0 3.578-.08 4.953a6.64 6.64 0 0 1-6.985 6.968l.016.001q-1.375.08-4.953.08t-4.953-.08a6.64 6.64 0 0 1-6.968-6.985l-.001.016q-.08-1.375-.08-4.953t.08-4.953A6.64 6.64 0 0 1 7.061.079L7.045.078q1.375-.08 4.953-.08t4.953.08a6.64 6.64 0 0 1 6.968 6.985l.001-.016Q24 8.421 24 12"
              />
            </svg>
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-5 iconify iconify--fontisto"
              width="1.25em"
              height="1em"
              viewBox="0 0 30 24"
            >
              <path
                fill="currentColor"
                d="M29.55 2.85a12.813 12.813 0 0 1-3.004 3.106l-.036.025q.018.262.018.787a17.203 17.203 0 0 1-.745 4.987l.032-.122a17.56 17.56 0 0 1-2.206 4.724l.04-.065a18.49 18.49 0 0 1-3.435 3.927l-.024.02a15.333 15.333 0 0 1-4.73 2.704l-.108.033c-1.765.648-3.803 1.022-5.928 1.022H9.29h.007h-.127c-3.41 0-6.584-1.015-9.234-2.76l.063.039c.419.048.904.075 1.396.075h.07h-.004l.126.001c2.807 0 5.386-.975 7.417-2.606l-.023.018a6.073 6.073 0 0 1-5.65-4.157l-.012-.043c.342.057.738.091 1.141.094h.003a6.26 6.26 0 0 0 1.637-.216l-.044.01a5.98 5.98 0 0 1-3.47-2.08l-.008-.011a5.816 5.816 0 0 1-1.379-3.773l.001-.084v.004v-.075a5.922 5.922 0 0 0 2.727.768h.011a6.094 6.094 0 0 1-1.953-2.129l-.016-.031a6 6 0 0 1-.731-2.889c0-1.126.306-2.18.84-3.084l-.015.028a17.29 17.29 0 0 0 5.425 4.427l.095.045c2.022 1.067 4.402 1.743 6.927 1.864l.038.001a6.548 6.548 0 0 1-.149-1.382v-.001a6.062 6.062 0 0 1 10.477-4.147l.003.003A11.857 11.857 0 0 0 28.772.415l-.053.03a5.913 5.913 0 0 1-2.635 3.323l-.028.015a12.045 12.045 0 0 0 3.569-.967l-.077.031z"
              />
            </svg>
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-5 iconify iconify--fontisto"
              width="1.05em"
              height="1em"
              viewBox="0 0 25 24"
            >
              <path
                fill="currentColor"
                d="M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.351 12.351 0 0 1 4.449 4.422l.031.058a12.182 12.182 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.724.724 0 0 1-.642-.113l.002.001a.624.624 0 0 1-.208-.466v-.014v.001l.008-1.226q.008-1.178.008-2.154a2.844 2.844 0 0 0-.833-2.274a10.918 10.918 0 0 0 1.718-.305l-.076.017a6.508 6.508 0 0 0 1.537-.642l-.031.017a4.52 4.52 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.888 7.888 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.095 2.095 0 0 0-1.31.181l.012-.005a8.622 8.622 0 0 0-1.512.726l.038-.022l-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9.103 9.103 0 0 0-1.272-.595l-.066-.022A2.174 2.174 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.723 4.723 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.35 4.35 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3.056 3.056 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066h.003a1.882 1.882 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.603 2.603 0 0 0-.768-.827l-.009-.006a2.331 2.331 0 0 0-.776-.38l-.016-.004l-.32-.048a1.048 1.048 0 0 0-.471.074l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002l.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024l.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002c.261 0 .517-.021.767-.062l-.027.004l.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.717.717 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.351 12.351 0 0 1 4.422-4.449l.058-.031a11.898 11.898 0 0 1 6.073-1.645h.098h-.005zm-7.64 17.666q.048-.112-.112-.192q-.16-.048-.208.032q-.048.112.112.192q.144.096.208-.032m.497.545q.112-.08-.032-.256q-.16-.144-.256-.048q-.112.08.032.256q.159.157.256.047zm.48.72q.144-.112 0-.304q-.128-.208-.272-.096q-.144.08 0 .288t.272.112m.672.673q.128-.128-.064-.304q-.192-.192-.32-.048q-.144.128.064.304q.192.192.32.044zm.913.4q.048-.176-.208-.256q-.24-.064-.304.112t.208.24q.24.097.304-.096m1.009.08q0-.208-.272-.176q-.256 0-.256.176q0 .208.272.176q.256.001.256-.175zm.929-.16q-.032-.176-.288-.144q-.256.048-.224.24t.288.128t.225-.224z"
              />
            </svg>
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
            tabIndex={0}
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">YouTube</span>
            <span />
          </a>
        </div>
        <span
          aria-hidden="true"
          className="w-px h-px block"
          style={{ marginLeft: '0.25rem', marginTop: '1rem' }}
        />
        <p className="mt-1 text-center text-small text-default-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default WebFooter;
