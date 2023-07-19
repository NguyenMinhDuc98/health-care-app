import { Spin } from "antd";
import React from "react";
import LoadMoreBtn from "../../../../components/LoadMoreBtn";
import { mealType } from "../../../../constant/topPage";
import useFetchData from "../../../../customHook/useFetchData";
import { topPageService } from "../../../../services/topPageService";
import Filter from "../Filter";
import Item from "../Item";

const filters = [
  { link: "/assets/images/morning_filter.png", value: mealType.morning },
  { link: "/assets/images/lunch_filter.png", value: mealType.lunch },
  { link: "/assets/images/dinner_filter.png", value: mealType.dinner },
  { link: "/assets/images/snack_filter.png", value: mealType.snack },
];

const MealHistory = () => {
  const { loading, data, setData, loadMore, dataRef } = useFetchData({
    api: topPageService.getList,
  });

  const handleFilter = (value) => {
    const filteredData = dataRef.current.filter(
      (item) => item.status === value
    );
    setData(filteredData);
  };

  return (
    <div>
      <div className="filter">
        {filters.map((item, index) => (
          <Filter key={index} item={item} handleFilter={handleFilter} />
        ))}
      </div>
      {loading ? (
        <div className="spinner">
          <Spin size="large" />
        </div>
      ) : (
        <div className="meal-history m-auto">
          {data.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      )}
      <div className="w-full flex justify-center mt-7 mb-16">
        <LoadMoreBtn onClick={loadMore} />
      </div>
    </div>
  );
};

export default MealHistory;
