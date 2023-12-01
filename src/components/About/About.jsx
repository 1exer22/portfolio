import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>A PROPOS DE MOI</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Developpeur Frontend</h3>
              <p>
              Je suis un développeur front-end avec de l'expérience dans la construction de sites réactifs et optimisés.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Developpeur Backend</h3>
              <p>
              J'ai de l'expérience dans le développement de systèmes back-end rapides et optimisés
                et des API
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              J'ai conçu plusieurs pages intuitives d'applications et j'ai également créé des systèmes de conception.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Visuel designer</h3>
              <p>
              Auteur deja de plusieurs logo, de conception d'affiche publicitaire pour un emploi a grande échelle.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
