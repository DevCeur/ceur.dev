import { ExternalLink as LinkIcon } from "react-feather";

import styles from "./external-link.module.css";

import type { AnchorHTMLAttributes } from "react";

interface ExternalLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const ExternalLink = ({ children, ...anchorProps }: ExternalLink) => {
  return (
    <a
      {...anchorProps}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.external_link}
    >
      {children}
      <LinkIcon width={12} />
    </a>
  );
};
