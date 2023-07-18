import React from "react";
import { Spin } from "antd";
import Filter from "../Filter";
import useFetchData from "../../../../customHook/useFetchData";
import { topPageService } from "../../../../services/topPageService";
import Item from "../Item";

const filters = [
  "/assets/images/morning_filter.png",
  "/assets/images/lunch_filter.png",
  "/assets/images/dinner_filter.png",
  "/assets/images/snack_filter.png",
];

const MealHistory = () => {
  const { loading, data } = useFetchData({ api: topPageService.getList });
  return (
    <div>
      <div className="filter">
        {filters.map((item, index) => (
          <Filter key={index} item={item} />
        ))}
      </div>
      {true ? (
        <Spin size="large" />
      ) : (
        data.map((item, index) => <Item key={index} />)
      )}
    </div>
  );
};

export default MealHistory;
