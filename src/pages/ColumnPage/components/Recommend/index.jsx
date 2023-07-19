import React from "react";
import { Divider } from "antd";

const Recommend = ({ title, text }) => {
  return (
    <div className="recommend">
      <div className="title">{title}</div>
      <div className="w-14">
        <Divider className="bg-white" />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Recommend;
