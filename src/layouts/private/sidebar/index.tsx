import React from 'react';
import { MenuData } from '@/typings/layout';
import { usePathname } from 'next/navigation';
import useSidebarStore from '../store/sidebar';
import { ItemButton, Section } from './elements';
import { Sidebar as SidebarStyles } from './styles';

type Props = {
  menus: MenuData[];
};

const Sidebar = ({ menus }: Props) => {
  const pathname = usePathname();
  const { open, updateSidebar } = useSidebarStore((state) => state);

  return (
    <aside className="border">
      {open ? (
        <div
          className={SidebarStyles.Overlay()}
          onClick={() => updateSidebar(!open)}
        />
      ) : null}
      <div
        className={SidebarStyles({
          collapsed: open,
        })}
      >
        <div className="flex flex-col justify-between h-full">
          <div className={SidebarStyles.Body()}>
            {menus.map(({ section, menus }, parentIndex) => {
              return (
                <Section title={section?.name} key={parentIndex}>
                  {menus &&
                    menus?.map((menu, childIndex) => {
                      const active = menu?.active?.some((str) =>
                        pathname?.includes(str)
                      );
                      return (
                        <ItemButton
                          key={childIndex}
                          href={menu.href}
                          submenus={menu?.submenus}
                          active={active}
                          // startContent={
                          //   <Icon
                          //     icon={menu.icon!}
                          //     className={SidebarStyles.Icon({
                          //       active: active,
                          //     })}
                          //   />
                          // }
                        >
                          {menu.name}
                        </ItemButton>
                      );
                    })}
                </Section>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
