import type { MetaFunction } from "@remix-run/react";

import { GridWrapper } from "~/components/grid-wrapper";
import { ExternalLink } from "~/components/external-link";

import styles from "./route.module.css";

export const meta: MetaFunction = () => [
  { title: "Carlos Umaña" },
  { property: "og:title", content: "Carlos Umaña" },
  {
    name: "description",
    content:
      "Hi, I’m Carlos Umaña (Ceur), passionate Software Engineer currently based in Cali, Colombia. Focused on the web and building great stuff with code. Volleyball player (Opposite Hitter), writer, gamer and a proud Chimuelo’s father.",
  },
];

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
              <ExternalLink href="https://www.github.com/DevCeur">GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/dev-carlos-umana/">
                LinkedIn
              </ExternalLink>
            </div>
          </div>
        </GridWrapper>
      </div>
    </GridWrapper>
  );
}
