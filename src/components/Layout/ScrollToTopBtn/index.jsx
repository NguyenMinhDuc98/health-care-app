import { UpCircleOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./index.module.scss";

const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.scrollToTopBtn}>
      <UpCircleOutlined onClick={scrollToTop} style={{ fontSize: 48 }} />
    </div>
  );
};

export default ScrollToTopBtn;
