type Section = {
  name: string;
};
export type MenuItem = {
  icon: string;
  name: string;
  href: string;
  active: string[];
  submenus?: MenuItem[];
};
export type MenuData = {
  section: Section;
  menus: MenuItem[];
};
