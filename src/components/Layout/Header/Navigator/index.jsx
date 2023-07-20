import { Image } from "antd";
import React from "react";
import { useNavigate, useLocation } from "react-router";

const Navigator = ({ icon, text, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navigator" onClick={() => navigate(path)}>
      <Image width={32} height={32} src={icon} preview={false} />
      <div className={`ml-2 text-base ${path === location.pathname ? "navigator-selected" : ""}`}>{text}</div>
    </div>
  );
};

export default Navigator;
