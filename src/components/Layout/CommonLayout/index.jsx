import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTopBtn from "../ScrollToTopBtn";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="relative">
        {children}
        <ScrollToTopBtn />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
