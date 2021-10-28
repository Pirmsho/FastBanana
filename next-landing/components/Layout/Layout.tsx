import React from "react";
import TheHeader from "./TheHeader";
import styles from "./Layout.module.css";

interface ChildrenProp {
  children: React.ReactNode;
}

const Layout = (props: ChildrenProp): JSX.Element => {
  return (
    <div>
      <TheHeader />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
