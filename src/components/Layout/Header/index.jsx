import React from "react";
import styles from "./index.module.scss";
import { Row, Col, Image } from "antd";
import { useNavigate } from "react-router";
import { routesObj } from "../../../routes";
import Navigator from "./Navigator";

const Header = () => {
  const navigate = useNavigate();

  const items = [
    { icon: "/assets/icons/icon_memo.png", text: "自分の記録" },
    { icon: "/assets/icons/icon_challenge.png", text: "チャレンジ" },
    { icon: "/assets/icons/icon_info.png", text: "お知らせ" },
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
        />
      </Col>
      <Col span={12} className="flex flex-row justify-between items-center">
        {items.map((item, index) => (
          <Navigator key={index} {...item} />
        ))}
        <Image
          className="ml-4"
          width={32}
          height={32}
          src="/assets/icons/icon_menu.png"
          preview={false}
          // onClick={() => navigate(routesObj.home.path)}
        />
      </Col>
    </Row>
  );
};

export default Header;
