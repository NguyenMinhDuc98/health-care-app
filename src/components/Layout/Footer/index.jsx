import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
  const links = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];
  return (
    <div className={styles.footer}>
      {links.map((link, index) => (
        <div key={index} className="mr-[45px]">
          {link}
        </div>
      ))}
    </div>
  );
};

export default Footer;
