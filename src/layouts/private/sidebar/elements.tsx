import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { MenuItem } from '@/typings/layout';
import { usePathname } from 'next/navigation';
import { Button, cn } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  title?: string;
  divider?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export const Section = ({ title, children, divider }: Props) => {
  return (
    <div className="flex gap-2 flex-col">
      {title && <span className="text-xs font-normal pl-2">{title}</span>}
      {divider && <hr className="border-default-100" />}
      {children}
    </div>
  );
};

type SidebarItemProps = {
  href?: string;
  name?: string;
  active?: boolean;
  submenus?: MenuItem[];
  children?: React.ReactNode;
  startContent?: React.ReactNode;
};

export const ItemButton: React.FC<SidebarItemProps> = ({
  href,
  active,
  children,
  submenus,
  startContent,
}) => {
  const pathname = usePathname();
  const isPressable = React.useMemo(
    () => submenus && submenus.length > 0,
    [submenus]
  );
  const [isOpen, setIsOpen] = React.useState(active || false);

  React.useEffect(() => {
    if (active) {
      setIsOpen(active);
    } else {
      setIsOpen(false);
    }
  }, [active]);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-1">
      <Button
        href={href}
        as={href ? Link : 'button'}
        variant={active ? 'flat' : 'light'}
        className={cn(
          'justify-between',
          active &&
            `bg-gradient-to-l from-lavender-frost/20 to-periwinkle-glow/20`
        )}
        onPress={isPressable ? toggleSubMenu : undefined}
      >
        <div className="flex items-center gap-2 ">
          {startContent}
          {children}
        </div>
        {isPressable && (
          <div className="flex items-center justify-center">
            <Icon
              icon={'solar:alt-arrow-down-line-duotone'}
              className={`h-4 w-4 text-default-400 ${
                isOpen ? 'transform rotate-180 text-app-lime' : ''
              }`}
            />
          </div>
        )}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full flex flex-col"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-1">
              {submenus?.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <motion.li
                    key={index}
                    className="flex-1 ml-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Button
                      size="sm"
                      as={Link}
                      variant={active ? 'flat' : 'light'}
                      className={cn(
                        'w-full justify-start',
                        active && `text-app-lime bg-app-lime/15`
                      )}
                      href={item.href}
                      startContent={
                        <span
                          className={cn(
                            'bg-default-200 h-[6px] w-[6px] rounded-lg',

                            active && 'bg-app-lime'
                          )}
                        />
                      }
                    >
                      {item.name}
                    </Button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
