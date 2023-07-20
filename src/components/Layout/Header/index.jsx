import { Col, Image, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { routesObj } from "../../../routes";
import Menu from "./Menu";
import Navigator from "./Navigator";
import styles from "./index.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      icon: "/assets/icons/icon_memo.png",
      text: "自分の記録",
      path: routesObj.myRecord.path,
    },
    { icon: "/assets/icons/icon_challenge.png", text: "チャレンジ", path: "" },
    { icon: "/assets/icons/icon_info.png", text: "お知らせ", path: "" },
  ];

  return (
    <Row className={styles.header}>
      <Col span={12} className="logo">
        <Image
          width={109}
          height={40}
          src={"/assets/logo.png"}
          preview={false}
          onClick={() => navigate(routesObj.home.path)}
          className="cursor-pointer"
        />
      </Col>
      <Col span={12} className="flex flex-row justify-between items-center">
        {items.map((item, index) => (
          <Navigator key={index} {...item} />
        ))}
        <Menu />
      </Col>
    </Row>
  );
};

export default Header;
