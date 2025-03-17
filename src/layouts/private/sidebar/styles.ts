import { tv } from '@heroui/react';

export const SidebarWrapper = tv({
  base: 'bg-background transition-transform h-full fixed -translate-x-full w-64 shrink-0 z-[202] overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0 slim-scroll',

  variants: {
    collapsed: {
      true: 'translate-x-0 ml-0 [display:inherit]',
    },
  },
});
export const Overlay = tv({
  base: 'bg-[rgb(15_23_42/0.3)] fixed inset-0 z-[201] opacity-80 transition-opacity md:hidden md:z-auto md:opacity-100',
});

export const Header = tv({
  base: 'flex gap-8 items-center',
});

export const Body = tv({
  base: 'flex flex-col gap-2 mt-4',
});

export const Footer = tv({
  base: 'flex items-center justify-center gap-2 pt-16 pb-4 px-8 md:pt-10',
});

const Icon = tv({
  base: 'h-5 w-5 text-xl text-default-500 pointer-events-none',
  variants: {
    active: {
      true: 'text-app-lime',
    },
    rotate: {
      true: 'transform rotate-180',
    },
  },
});
export const Sidebar = Object.assign(SidebarWrapper, {
  Header,
  Body,
  Overlay,
  Footer,
  Icon,
});
