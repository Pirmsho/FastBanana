import type { NextPage } from "next";
import Customers from "../components/UI/Customers";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import SignUp from "../components/UI/SignUp";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Customers />
      <SignUp />
    </>
  );
};

export default Home;
