import React from "react";
import styles from "./TheHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import bananaLogo from "../../public/bananaLogo.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

const TheHeader = (): JSX.Element => {
  const router = useRouter();
  const navigationHandler = () => {
    router.push("/");
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={styles.image_div}
        >
          <Image
            onClick={navigationHandler}
            src={bananaLogo}
            alt="Company Logo"
          />
        </motion.div>
        <div className={styles.link_div}>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default TheHeader;
