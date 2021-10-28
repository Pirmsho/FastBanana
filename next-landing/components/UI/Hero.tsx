import React from "react";
import styles from "./Hero.module.css";
import Heroimage from "../../public/yellow-hero.jpg";
import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <section className={styles.hero_section}>
      <Image priority src={Heroimage} alt="Hero" />
      <div className={styles.hero_text_div}>
        <h1>Hello There</h1>
        <h3>We are Fast Banana, Viral Marketing Company.</h3>
        <p>Our Goal is to Let the Whole World Know About Your Ideas</p>
      </div>
    </section>
  );
};

export default Hero;
