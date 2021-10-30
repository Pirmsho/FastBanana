import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Customers.module.css";

import Customer1 from "../../public/Customers/Customer1.jpeg";
import Customer2 from "../../public/Customers/Customer2.jpg";
import Customer3 from "../../public/Customers/Customer3.jpg";

const Customers = () => {
  return (
    <section className={styles.customer_section}>
      <header className={styles.customer_header}>
        <h1>Over 10,000 Satisfied Customers Worldwide</h1>
        <h3>See Their Testimonials Below!</h3>
      </header>
      <div className={styles.customer_comments}>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)",
          }}
          className={styles.customer_item}
        >
          <div className={styles.customer_item_header}>
            <div className={styles.customer_img}>
              <Image
                width={100}
                height={100}
                src={Customer1}
                alt="Customer"
              ></Image>
            </div>
            <div className={styles.customer_info}>
              <h3>Joshua Long</h3>
              <p>
                Works At: <span>Unsplash</span>
              </p>
            </div>
          </div>
          <div className={styles.customer_message}>
            <p>
              I have Used Fast Banana&#39;s Services For A Year Now, And My
              Business Has Never Been More Successfull!
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)",
          }}
          className={styles.customer_item}
        >
          <div className={styles.customer_item_header}>
            <div className={styles.customer_img}>
              <Image
                width={100}
                height={100}
                src={Customer2}
                alt="Customer"
              ></Image>
            </div>
            <div className={styles.customer_info}>
              <h3>Guri Singh</h3>
              <p>
                Works At: <span>Netlify</span>
              </p>
            </div>
          </div>
          <div className={styles.customer_message}>
            <p>
              Because of Fast Banana, I now Work as a Marketer in Major Tech
              Firm! 10/10 Rating.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "5px 5px 18px 5px rgba(0,0,0,0.4)",
          }}
          className={styles.customer_item}
        >
          <div className={styles.customer_item_header}>
            <div className={styles.customer_img}>
              <Image
                width={100}
                height={100}
                src={Customer3}
                alt="Customer"
              ></Image>
            </div>
            <div className={styles.customer_info}>
              <h3>Samuel Parker</h3>
              <p>
                Works At: <span>ShutterStock</span>
              </p>
            </div>
          </div>
          <div className={styles.customer_message}>
            <p>
              Fast Banana is Definitely The Most Efficient and Proffesional
              Service I Have Used.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
