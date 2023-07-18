import React from "react";
import { Image } from "antd";

const Filter = ({ item }) => {
  return <Image width={136} height={136} src={item} preview={false} />;
};

export default Filter;
