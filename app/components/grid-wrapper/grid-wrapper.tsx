import styles from "./grid-wrapper.module.css";

interface GridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const GridWrapper = ({ children }: GridWrapperProps) => {
  return <div className={styles.grid_wrapper}>{children}</div>;
};
