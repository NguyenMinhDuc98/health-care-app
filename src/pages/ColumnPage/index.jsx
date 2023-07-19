import React from "react";
import { Spin } from "antd";
import styles from "./index.module.scss";
import useFetchData from "../../customHook/useFetchData";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import { columnService } from "../../services/columnPageService";
import Item from "./components/Item";
import CommonLayout from "../../components/Layout/CommonLayout";
import { recommends } from "../../constant/columnePage";
import Recommend from "./components/Recommend";

const ColumnPage = () => {
  const { loading, data, loadMore } = useFetchData({
    api: columnService.getList,
  });

  return (
    <CommonLayout>
      <div className={styles.columnPage}>
        {loading ? (
          <div className="spinner">
            <Spin size="large" />
          </div>
        ) : (
          <div className="column-page">
            <div className="flex flex-row justify-between">
              {recommends.map((item, index) => (
                <Recommend key={index} {...item} />
              ))}
            </div>
            <div className="column-data">
              {data.map((item, index) => (
                <Item key={index} {...item} />
              ))}
            </div>
          </div>
        )}
        <div className="w-full flex justify-center mt-7 mb-16">
          <LoadMoreBtn onClick={loadMore} />
        </div>
      </div>
    </CommonLayout>
  );
};

export default ColumnPage;
