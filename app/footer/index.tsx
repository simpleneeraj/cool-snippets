import React from "react";
import css from "styles/main.module.scss";
import LinkIcon from "lib/icons/LinkIcon";

const AppFooter = () => {
  return (
    <div className={css.footer}>
      <div className={css.text}>
        <p>
          <a
            target="_"
            href="https://twitter.com/intent/tweet?text=
            Feature Request for @icanpostapp
            %0A
            "
          >
            Feature Request <LinkIcon size={7} />
          </a>
        </p>
      </div>
      <div className={css.text}>
        <p>
          Made with 💖
          <a target="_" href="https://www.instagram.com/simpleneeraj">
            Neeraj
          </a>
        </p>
      </div>
      <div className={css.text}>
        <p>
          Follow us on{" "}
          <a target="_" href="https://twitter.com/icanpostapp">
            Twitter <LinkIcon size={7} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AppFooter;
