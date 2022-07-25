import React from "react";
import Link from "next/link";
import css from "styles/footer.module.scss";
/**************************
Footer
***************************/
const Footer = () => {
  return (
    <footer className={css.container}>
      <section className={css.content}>
        <div className={css.grid}>
          {linkdata.map((data, i) => (
            <List key={i} {...data} />
          ))}
        </div>
      </section>
      {/* <section className={css.bottom}>
        <div className={css.wraper}>
          <div className={css.text}>
            <p>
              &copy;{new Date().getFullYear()} {`icanpost`}
            </p>
            <Link href="legal/terms">Terms</Link>
            <Link href="legal/privacy">Privacy</Link>
          </div>
          <div className={css.text}>
            <select>
              <option value="auto">Auto</option>
              <option value="dark">Dark Mode</option>
              <option value="light">Light Mode</option>
            </select>
          </div>
        </div>
      </section> */}
    </footer>
  );
};
export default Footer;

interface LinkProps {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

const List = ({ title, links }: LinkProps) => {
  return (
    <div className={css.list}>
      <h1 className={css.heading}>{title}</h1>
      <ul>
        {links.map(({ name, path }, i) => (
          <li key={i}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const linkdata = [
  {
    title: "Discover",
    links: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Features",
        path: "/features",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Pricing",
        path: "/pricing",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Feedback",
        path: "/feedback",
      },
      {
        name: "Contact us",
        path: "/contact",
      },
      {
        name: "Request a bug",
        path: "/request/bug",
      },
      // {
      //   name: "Request a feature",
      //   path: "/request/feature",
      // },
    ],
  },
  {
    title: "Social",
    links: [
      {
        name: "Twitter",
        path: "/home",
      },
      {
        name: "Instagram",
        path: "/home",
      },
      {
        name: "Facebook",
        path: "/home",
      },
      // {
      //   name: "Youtube",
      //   path: "/home",
      // },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        name: "API",
        path: "/developers/api",
      },
      {
        name: "Forum",
        path: "/developers/forum",
      },
      {
        name: "Open Source",
        path: "/developers/opne-source",
      },
    ],
  },
];
