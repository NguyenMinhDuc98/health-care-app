import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
