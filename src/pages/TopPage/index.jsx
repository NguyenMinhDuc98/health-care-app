import { Image } from "antd";
import React from "react";
import MainGraph from "./components/Graph";
import MealHistory from "./components/MealHistory";
import styles from "./index.module.scss";

const TopPage = () => {
  return (
    <div className={styles.topPage}>
      <div className="main-info">
        <Image
          width={540}
          height={312}
          src={"/assets/images/main_photo.png"}
          preview={false}
        />
        <MainGraph />
      </div>
      <div>
        <MealHistory />
      </div>
    </div>
  );
};

export default TopPage;
