import React, { useRef, useState } from "react";
import Image from "next/image";

import styles from "./SignUp.module.css";
import { motion, useAnimation } from "framer-motion";

import checkbox from "../../public/icons/Checkbox.svg";

const isEmpty = (value: string | undefined): boolean => value?.trim() === "";

const SignUp = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,

    password: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPasswordIsValid = !isEmpty(enteredPassword);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
    });
    const formIsValid =
      enteredEmailIsValid && enteredNameIsValid && enteredPasswordIsValid;

    if (!formIsValid) {
      return;
    }
    setFormSubmitted(true);
  };
  const control = useAnimation();
  const control2 = useAnimation();

  return (
    <section className={styles.signup_section}>
      {!formSubmitted && (
        <motion.div animate={control} className={styles.outer_div}>
          <h1>
            Sign Up Right Now For Exclusive 20% off on Your First Consultation!
          </h1>
          <h3>
            Just By Creating And Veryfing Your First Account, You Will Receive
            One-Time Discount For Your First Order.
          </h3>
          <p>What Are You Waiting For? Start Growing Your Business Now!</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              control.start({
                x: 600,
                rotate: 360,
                borderRadius: [15, 100, 70, 50, 15],
                transition: { duration: 1, type: "spring", stiffness: 60 },
              });
              control2.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.5 },
              });
            }}
          >
            Sign Up
          </motion.button>
        </motion.div>
      )}
      {!formSubmitted && (
        <motion.div
          animate={control2}
          initial={{ opacity: 0, y: -50 }}
          className={styles.inner_div}
        >
          <form onSubmit={submitHandler}>
            <h2>Please Enter Your Details</h2>
            <div
              className={`${styles.control} ${
                formInputValidity.name ? "" : styles.invalid
              }`}
            >
              <label htmlFor="name">Your Name</label>
              <input type="text" ref={nameInputRef} />
            </div>
            <div
              className={`${styles.control} ${
                formInputValidity.email ? "" : styles.invalid
              }`}
            >
              <label htmlFor="email">Your Email Address</label>
              <input type="email" ref={emailInputRef} />
            </div>
            <div
              className={`${styles.control} ${
                formInputValidity.password ? "" : styles.invalid
              }`}
            >
              <label htmlFor="password">Your Password</label>
              <input type="password" ref={passwordInputRef} />
            </div>
            {!formInputValidity.name &&
              !formInputValidity.email &&
              !formInputValidity.password && (
                <p className={styles.err}>Please Enter Valid Information!</p>
              )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      )}
      {formSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.success_div}
        >
          <div>
            <Image src={checkbox} alt="Checkbox" />
            <h1> You Have Registered Successfully!</h1>
          </div>
          <h3>You Will Receive Our Discount Voucher Shortly on your E-mail</h3>
          <p>Our Customer Representative Will Contact You Shortly!</p>
        </motion.div>
      )}
    </section>
  );
};

export default SignUp;
