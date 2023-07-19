import { Spin } from "antd";
import React from "react";
import LoadMoreBtn from "../../../../components/LoadMoreBtn";
import useFetchData from "../../../../customHook/useFetchData";
import Item from "./Item";
import { myRecordService } from "../../../../services/myRecordService";

const MyDiary = () => {
  const { loading, data, loadMore } = useFetchData({
    api: myRecordService.getListDiary,
  });

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <div className="diary-title">MY DIARY</div>
          <div className="diary-list w-full">
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
  );
};

export default MyDiary;
