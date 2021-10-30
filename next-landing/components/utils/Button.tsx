import React from "react";

import styles from "./Button.module.css";

import { motion } from "framer-motion";

interface ChildrenProp {
  children: React.ReactNode;
  scroll: string;
}

const Button = (props: ChildrenProp): JSX.Element => {
  return (
    <motion.a
      initial={{
        x: -40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 4,
        },
      }}
      className={styles.button}
      href={props.scroll}
    >
      {props.children}
    </motion.a>
  );
};

export default Button;
