import { Outlet } from "@remix-run/react";

import styles from "./layout.module.css";

export default function GeneralLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.guides_wrapper}>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div key={index} className={styles.guide_col} />
          ))}
      </div>

      <div className={styles.content_wrapper}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
