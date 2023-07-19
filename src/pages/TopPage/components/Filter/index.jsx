import React from "react";
import { Image } from "antd";

const Filter = ({ item, handleFilter }) => {
  return (
    <Image
      width={136}
      height={136}
      src={item.link}
      preview={false}
      onClick={() => handleFilter(item.value)}
      className="cursor-pointer"
    />
  );
};

export default Filter;
