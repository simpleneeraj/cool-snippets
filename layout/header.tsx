import React from "react";
import Link from "next/link";
import css from "styles/header.module.scss";
import useOnClickOutside from "hooks/useclick";
import CircleDotted from "lib/icons/CircleDotted";
import Add from "lib/icons/Add";
import { useCTX } from "lib/mini-state";
import { HeaderContext } from "context/header";

interface HeaderProps {
  state: boolean;
  dispatch?: any;
}

/**************************
Header
***************************/
const Header = () => {
  const { state, dispatch } = useCTX<boolean>(HeaderContext);
  // const ref = useOnClickOutside(() => dispatch(false));
  return (
    <header className={css["container"]}>
      <section className={css["backdrop"]}>
        <div className={css["menubar"]}>
          <div className={css["navbutton"]}>
            <Link href="/">
              <a className={css["logo"]}>
                <CircleDotted />
              </a>
            </Link>
            <MenuBar state={!state} />
          </div>
        </div>
        <NavigationBar state={!state} />
      </section>
    </header>
  );
};

export default Header;

const NavigationBar = ({ state }: HeaderProps) => {
  return (
    <nav className={`${css["navigation"]} ${state ? css["mobile"] : null}`}>
      <div className={css["navbar"]}>
        {navigationdata.map((l, i) => (
          <Link key={i} href={l.path}>
            <a className={css["links"]}>{l.title}</a>
          </Link>
        ))}
      </div>
      <div className={css["login"]}>
        <Link href="/login">
          <a>Sign in</a>
        </Link>
        <Link href="/editor">
          <a>Editor</a>
        </Link>
      </div>
    </nav>
  );
};

const MenuBar = ({ state, dispatch }: HeaderProps) => {
  return (
    <i onClick={dispatch}>
      <Add
        size={20}
        style={{
          transform: `rotate(${state ? 45 : 0}deg)`,
          transition: "transform 100ms ease-in-out",
        }}
      />
    </i>
  );
};

const navigationdata = [
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Showcase",
    path: "/showcase",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
