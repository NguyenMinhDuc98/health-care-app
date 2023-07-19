import React from "react";
import { Image } from "antd";

const Record = ({ item }) => {
  return (
    <div className="record">
      <Image
        width={264}
        height={264}
        src={item.image}
        preview={false}
        className="grayscale pt-6 pl-6"
      />
      <div className="record-info">
        <div className="record-text">{item.text}</div>
        <div className="record-btn-text">{item.btnText}</div>
      </div>
    </div>
  );
};

export default Record;
