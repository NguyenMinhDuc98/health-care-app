import React from "react";
import dayjs from "dayjs";
import { myRecordData } from "../../../../mockData/myRecord";
import Exercise from "./Exercise";

const MyExercise = () => {
  return (
    <div className="my-exercise">
      <div className="flex flex-row">
        <div className="section-title">MY EXERCISE</div>
        <div className="section-date">{dayjs().format("YYYY.MM.DD")}</div>
      </div>
      <div>
        <div className="my-exercise-list">
          {myRecordData.myExercises.map((item, index) => (
            <Exercise key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExercise;
