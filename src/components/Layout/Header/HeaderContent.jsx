import { createPortal } from "react-dom";

import styles from "./HeaderContent.module.scss";
import ShowCart from "./ShowCart";

const HeaderTab = () => {
  return (
    <div className={`${styles.flex} ${styles.sticky}`}>
      <div className={styles.__item1}>
        <h1>Happily Fresh</h1>
      </div>
      <div className={styles.__item2}>
        <ShowCart />
      </div>
    </div>
  );
};

const HeaderContent = () => {
  return createPortal(<HeaderTab />, document.querySelector("#sticky"));
};

export default HeaderContent;
