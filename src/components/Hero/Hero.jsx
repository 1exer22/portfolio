import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Salut, Moi c'est Faure</h1>
        <p className={styles.description}>
        Développeur Fullstack spécialiste des technologies Web et Mobile. Expert en conception de sites web
        et applications, alliant organisation et autonomie pour des projets internationaux.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Me contacter
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="ma personne "
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
