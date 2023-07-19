import React from "react";
import { Image } from "antd";

const Record = ({ item }) => {
  return (
    <div>
      <Image
        width={136}
        height={136}
        src={item.image}
        preview={false}
        // onClick={() => handleFilter(item.value)}
        className="cursor-pointer"
      />
      <div>
        {item.text}
        {item.btnText}
      </div>
    </div>
  );
};

export default Record;
