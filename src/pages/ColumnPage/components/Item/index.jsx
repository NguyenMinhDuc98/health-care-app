import React from "react";
import { Image } from "antd";
import dayjs from "dayjs";

const Item = ({ image, date, title, hastag }) => {
  return (
    <div className="item">
      <Image width={334} height={334} src={image} preview={false} />
      <div className="item-info">{dayjs(date).format("MM.DD")}</div>
      <div className="title">{title}</div>
      <div className="hastag">{hastag}</div>
    </div>
  );
};

export default Item;
