import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./FAQ.module.css";
const FAQ = () => {
  const [item1Open, setItem1Open] = useState(false);
  const [item2Open, setItem2Open] = useState(false);
  const [item3Open, setItem3Open] = useState(false);

  const item1Handler = () => {
    setItem1Open(!item1Open);
  };
  const item2Handler = () => {
    setItem2Open(!item2Open);
  };
  const item3Handler = () => {
    setItem3Open(!item3Open);
  };
  return (
    <motion.section
      whileHover={{ boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)" }}
      className={styles.faq_section}
    >
      <h2>Frequently Asked Questions:</h2>
      <motion.div className={styles.accordion}>
        <div className={styles.accordion_item}>
          <h3 onClick={item1Handler}>
            How Do I Contact Fast Banana For Corporate Training?{" "}
            <span>&gt;&gt;</span>
          </h3>
          {item1Open && (
            <motion.p initial={{ y: -30 }} animate={{ y: 0 }}>
              You Can Use Our Official Mail Address, Just Be Sure To Add
              &quot;Corporate&quot; in The Subject Line!
            </motion.p>
          )}
        </div>
        <div className={styles.accordion_item}>
          <h3 onClick={item2Handler}>
            Which Course Should I take To Get The Official Certificate?{" "}
            <span>&gt;&gt;</span>
          </h3>
          {item2Open && (
            <motion.p initial={{ y: -30 }} animate={{ y: 0 }}>
              Official Certificate is Issued After You Take Our Marketing
              Masterclass Course, Which Comes with Gold Package!
            </motion.p>
          )}
        </div>
        <div className={styles.accordion_item}>
          <h3 onClick={item3Handler}>
            Are Fast Banana Services Available Worldwide? <span>&gt;&gt;</span>
          </h3>
          {item3Open && (
            <motion.p initial={{ y: -30 }} animate={{ y: 0 }}>
              Yes, Our Diverse Group Guarantees That Your Services Can Be
              Provided In Every Part Of The World.
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FAQ;
