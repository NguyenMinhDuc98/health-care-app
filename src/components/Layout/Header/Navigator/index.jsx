import { Image } from "antd";
import React from "react";

const Navigator = ({ icon, text }) => {
  return (
    <div className="navigator">
      <Image
        width={32}
        height={32}
        src={icon}
        preview={false}
        // onClick={() => navigate(routesObj.home.path)}
      />
      <div className="ml-2 text-base">{text}</div>
    </div>
  );
};

export default Navigator;
