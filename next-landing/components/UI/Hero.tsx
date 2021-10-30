import React from "react";
import styles from "./Hero.module.css";
import Heroimage from "../../public/yellow-hero.jpg";
import Image from "next/image";
import Button from "../utils/Button";
import { motion } from "framer-motion";

import WifiIcon from "../../public/icons/wifi-line.svg";
import ChartIcon from "../../public/icons/line-chart-fill.svg";
import ShirtIcon from "../../public/icons/shirt-fill.svg";

const Hero = (): JSX.Element => {
  const parentVariant = {
    hidden: {
      x: 50,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const parentVariant2 = {
    hidden: {
      x: -50,
    },
    visible: {
      x: 0,
      transition: {
        delay: 2,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const childVariant = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const childVariant2 = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className={styles.hero_section}>
      <Image priority src={Heroimage} alt="Hero" />
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className={styles.hero_text_div}
      >
        <motion.h1 variants={childVariant}>Hello There!</motion.h1>
        <motion.h3 variants={childVariant}>
          We are Fast Banana, Viral Marketing Company.
        </motion.h3>
        <motion.p variants={childVariant}>
          Our Goal is to Let the Whole World Know About Your Ideas.
        </motion.p>
      </motion.div>
      <motion.div
        variants={parentVariant2}
        initial="hidden"
        animate="visible"
        className={styles.hero_lower_text}
      >
        <motion.h1 variants={childVariant2}>What We Can Do For You:</motion.h1>
        <motion.ul
          variants={parentVariant2}
          initial="hidden"
          animate="visible"
          className={styles.services}
        >
          <motion.li variants={childVariant2}>
            <Image src={WifiIcon} alt="Wifi"></Image>
            <p>Make Your Presence Known in the Internet!</p>
          </motion.li>
          <motion.li variants={childVariant2}>
            <Image src={ChartIcon} alt="Chart"></Image>
            <p>Skyrocket your Reach Across Many Platforms!</p>
          </motion.li>
          <motion.li variants={childVariant2}>
            <Image src={ShirtIcon} alt="Shirt-Icon"></Image>
            <p>Help You Become The Best Marketer You can Be!</p>
          </motion.li>
          <Button scroll="#services">Explore Our Service</Button>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Hero;
