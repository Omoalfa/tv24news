import React from "react";
import Header from "./Header";
import MainSection from "./mainSection";
import { makerequest } from "../testaxios";

const ContactUs = () => {
  useEffect(() => {
    makerequest();
  }, []);

  return (
    <>
      <Header />
      <MainSection />
    </>
  );
};

export default ContactUs;
