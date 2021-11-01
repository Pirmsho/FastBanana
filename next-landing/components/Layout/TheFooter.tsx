import React from "react";
import Image from "next/image";

import styles from "./TheFooter.module.css";

import Facebook from "../../public/Logos/facebook-circle-fill.svg";
import Twitter from "../../public/Logos/twitter-fill.svg";
import Youtube from "../../public/Logos/youtube-fill.svg";
import Github from "../../public/Logos/github-fill.svg";

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_div}>
        <div>
          <h1>Contact Us on Social Media!</h1>
        </div>
        <div>
          <Image src={Facebook} alt="Facebook" />
          <Image src={Twitter} alt="Twitter" />
          <Image src={Youtube} alt="Youtube" />
          <Image src={Github} alt="Github" />
        </div>
      </div>
      <div className={styles.newsletter}>
        <h2>
          Sign Up For Our Newsletter to Get Promotions and New Tech-Focused
          Articles From Our Weekly Blog!
        </h2>
        <form>
          <label htmlFor="newsletter">Your E-mail</label>
          <input type="text" id="newsletter" />
        </form>
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default TheFooter;
