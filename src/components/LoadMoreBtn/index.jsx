import { Button } from "antd";
import React from "react";
import styles from "./index.module.scss";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button className={styles.loadMoreBtn} onClick={onClick}>
      記録をもっと見る
    </Button>
  );
};

export default LoadMoreBtn;
