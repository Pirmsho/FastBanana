import React from "react";
import TheHeader from "./TheHeader";
import styles from "./Layout.module.css";
import { motion } from "framer-motion";

interface ChildrenProp {
  children: React.ReactNode;
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Layout = (props: ChildrenProp): JSX.Element => {
  return (
    <div>
      <TheHeader />
      <motion.main
        variants={variants}
        animate="enter"
        initial="hidden"
        exit="exit"
        className={styles.main}
      >
        {props.children}
      </motion.main>
    </div>
  );
};

export default Layout;
