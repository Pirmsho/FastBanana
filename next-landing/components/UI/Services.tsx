import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/dist/client/link";
import styles from "./Services.module.css";

import TeamImage from "../../public/team-working.jpg";

const divVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section id="services" className={styles.service_section}>
      <motion.div
        variants={divVariant}
        initial="hidden"
        animate={controls}
        className={styles.service_text}
        ref={ref}
      >
        <h1>Services We Provide</h1>
        <h3>Our Team of Experienced Marketers are ready to assist you with:</h3>
        <ul className={styles.service_list}>
          <li>&#10004; Website SEO Optimization</li>
          <li>&#10004; Social Media Ad Campaigns</li>
          <li>&#10004; On Demand Courses About Marketing</li>
        </ul>
        <h3>
          Sounds good? Explore Our Pricing Plans and Boost Your Business Today!
        </h3>
        <Link href="pricing">See Our Prices!</Link>
      </motion.div>
      <motion.div
        ref={ref}
        variants={divVariant}
        initial="hidden"
        animate={controls}
        className={styles.image_div}
      >
        <Image src={TeamImage} alt="Image of our staff working" />
      </motion.div>
    </section>
  );
};

export default Services;
