import React from "react";
import Graph from "./components/Graph";
import MyDiary from "./components/MyDiary";
import Record from "./components/Record";
import styles from "./index.module.scss";
import MyExercise from "./components/MyExercise";

const records = [
  {
    image: "/assets/images/MyRecommend-1.jpg",
    text: "BODY RECORD",
    btnText: "自分のカラダの記録",
  },
  {
    image: "/assets/images/MyRecommend-2.jpg",
    text: "MY EXERCISE",
    btnText: "自分の運動の記録",
  },
  {
    image: "/assets/images/MyRecommend-3.jpg",
    text: "MY DIARY",
    btnText: "自分の日記",
  },
];

const MyRecord = () => {
  return (
    <div className={styles.myRecord}>
      <div className="record-list">
        {records.map((item, index) => (
          <Record key={index} item={item} />
        ))}
      </div>
      <Graph />
      <MyExercise />
      <MyDiary />
    </div>
  );
};

export default MyRecord;
