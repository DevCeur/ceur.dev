import { GridWrapper } from "~/components/grid-wrapper";
import { ExternalLink } from "~/components/external-link";

import styles from "./route.module.css";

export default function HomeRoute() {
  return (
    <GridWrapper>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.name}>Carlos Umaña</h1>
          <p className={styles.role}>Software Engineer</p>
        </div>

        <GridWrapper>
          <h2 className={styles.under_construction_heading}>Under construction</h2>
          <div className={styles.more_info_container}>
            <p className={styles.under_construction_message}>
              This website is under construction, all features will be available soon.
            </p>

            <div className={styles.social_links}>
              <ExternalLink href="https://github.com/DevCeur">GitHub</ExternalLink>
              <ExternalLink href="https://github.com/DevCeur">LinkedIn</ExternalLink>
            </div>
          </div>
        </GridWrapper>
      </div>
    </GridWrapper>
  );
}
