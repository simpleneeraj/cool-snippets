"use client";

import React from "react";
import css from "styles/web/landing.module.scss";
import GlowShadow from "components/glow-shadow";
import Link from "next/link";
import ArrowRight from "lib/icons/ArrowRight";

const LandingPage = () => {
  return (
    <React.Fragment>
      <GlowShadow />
      <div className={css["container"]}>
        <div className={css["inner-container"]}>
          <h1>
            Write <span className={css["color-gradient"]}>better code</span>{" "}
            collaboratively
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <div className={css["controls"]}>
            <Link href="/pricing">
              Get started for free
              <span>
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/contact">
              <div className="link-text">Book a demo</div>
              <span>
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LandingPage;
