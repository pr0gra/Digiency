import styles from "./Button.module.css";
import cx from "classnames";

interface ButtonProps {
  children: string;
  buttonType: string;
}

export function Button({ children, buttonType }: ButtonProps) {
  return (
    <button className={cx(styles["button"], styles[`${buttonType}`])}>
      {children}
    </button>
  );
}
