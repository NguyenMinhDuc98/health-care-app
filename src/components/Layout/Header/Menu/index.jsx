import { Dropdown, Image, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { routesObj } from "../../../../routes";

const Menu = () => {
  const items = [
    {
      label: <Link to={routesObj.myRecord.path}>自分の記録</Link>,
      key: "0",
    },
    {
      label: "体重グラフ",
      key: "1",
    },
    {
      label: "目標",
      key: "2",
    },
    {
      label: "選択中のコース",
      key: "3",
    },
    {
      label: <Link to={routesObj.columnPage.path}>コラム一覧</Link>,
      key: "4",
    },
    {
      label: "設定",
      key: "5",
    },
  ];

  return (
    <div className={styles.styles}>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Space onClick={(e) => e.preventDefault()}>
          <Image
            className="ml-4 cursor-pointer"
            width={32}
            height={32}
            src="/assets/icons/icon_menu.png"
            preview={false}
          />
        </Space>
      </Dropdown>
    </div>
  );
};

export default Menu;
