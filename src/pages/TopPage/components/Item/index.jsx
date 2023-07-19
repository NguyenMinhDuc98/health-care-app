import { Image } from "antd";
import dayjs from "dayjs";
import React from "react";

const Item = ({ image, date, status }) => {
  return (
    <div className="item">
      <Image width={234} height={234} src={image} preview={false} />
      <div className="item-info">
        {dayjs(date).format("MM.DD")}.{status}
      </div>
    </div>
  );
};

export default Item;
