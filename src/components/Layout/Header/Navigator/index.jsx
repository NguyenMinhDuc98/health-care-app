import { Image } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const Navigator = ({ icon, text, path }) => {
  const navigate = useNavigate();

  return (
    <div className="navigator " onClick={() => navigate(path)}>
      <Image width={32} height={32} src={icon} preview={false} />
      <div className="ml-2 text-base">{text}</div>
    </div>
  );
};

export default Navigator;
