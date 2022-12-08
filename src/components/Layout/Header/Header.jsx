import React, { Fragment as Frag} from "react";

//components
import ShowCart from "./ShowCart";

import mealsImage from "../../../assets/meals.jpg";

// styles
import styles from "../../../styles/layout-styles/Header.module.scss";

const Header = () => {
  return (
    <Frag>
      <header className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.__item1}>
            <h1>Food App</h1>
          </div>
          <div className={styles.__item2}>
            <ShowCart />
          </div>
        </div>
        <div className={styles.img}>
          <img src={mealsImage} alt="" />
          <div className={styles.__wave}>
            <svg
              id={styles.svg}
              className={styles.svg}
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.shape_fill}
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </Frag>
  );
};

export default Header;
