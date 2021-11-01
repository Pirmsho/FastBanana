import React from "react";

import { motion } from "framer-motion";

import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.price_section}>
      <h1>Take a Look at Our Pricing Packages!</h1>
      <div className={styles.price_div}>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)",
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.price_component}
        >
          <h3>Standard Package</h3>
          <p>$299/Month</p>
          <ul className={styles.price_features}>
            <li>Weekly Consultation With Experts</li>
            <li>Marketing Campaign Mainly Targetting Google Ads</li>
            <li>Access To Our Beginner-Level Tutorials</li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)",
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={`${styles.price_component} ${styles.price_component_inter}`}
        >
          <h3>Intermediate Package</h3>
          <p>$699/Month</p>
          <ul className={styles.price_features}>
            <li>Daily Consultation With Experts</li>
            <li>Marketing Campaign Mainly Targetting Social Media</li>
            <li>Access To Our Intermediate-Level Courses</li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)",
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={`${styles.price_component_gold} ${styles.price_component}`}
        >
          <h3>Gold Package</h3>
          <p>$999/Month</p>
          <ul className={styles.price_features}>
            <li>Unlimited Consultation With Experts</li>
            <li>Marketing Campaign Covers Every Platform</li>
            <li>Access To Our Certified Courses</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
