import dayjs from "dayjs";
import React from "react";

const Item = ({ description, date }) => {
  return (
    <div className="diary">
      <div className="diary-date-time">
        {dayjs(date).format("YYYY.MM.DD HH:MM")}
      </div>
      <div className="diary-des">{description}</div>
    </div>
  );
};

export default Item;
