import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./IconText.module.css";

interface IconNameProps {
  icon: IconProp | React.ReactNode;
  children: React.ReactNode;
  href?: string;
}

export default function IconText(props: IconNameProps) {
  const child = (
    <>
      {React.isValidElement(props.icon) ? (
        props.icon
      ) : (
        <FontAwesomeIcon
          className={styles.icon}
          icon={props.icon as IconProp}
        />
      )}
      {props.children}
    </>
  );
  return props.href ? (
    <a
      className={`${styles.link} ${styles.container}`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {child}
    </a>
  ) : (
    <span className={styles.container}>child</span>
  );
}
