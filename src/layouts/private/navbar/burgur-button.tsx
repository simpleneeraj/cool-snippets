import React from 'react';
import useSidebarStore from '../store/sidebar';
import { StyledBurgerButton } from './navbar.styles';

export const BurgurButton = () => {
  const { updateSidebar } = useSidebarStore((state) => state);
  return (
    <div className={StyledBurgerButton()} onClick={() => updateSidebar(true)}>
      <div />
      <div />
    </div>
  );
};
