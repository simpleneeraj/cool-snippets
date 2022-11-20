import React from "react";
import Image from "next/image";
import shadowCss from "styles/shadow.module.scss";

const GlowShadow = () => {
  return (
    <section className={shadowCss.container}>
      <Image
        src={"/glow-images/violet-with-lines.png"}
        alt="violet-with-lines"
        fill={true}
        className={shadowCss.image}
      />
      <Image
        src={"/glow-images/pink-with-lines.png"}
        alt="pink-with-lines"
        fill={true}
        className={shadowCss.image}
      />
    </section>
  );
};
export default GlowShadow;
