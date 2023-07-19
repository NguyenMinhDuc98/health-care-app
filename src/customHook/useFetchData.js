import { useEffect, useRef, useState } from "react";
import { topPageData } from "../mockData/topPage";

const useFetchData = ({ api }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dataRef = useRef();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await api();

      setData(res);
      dataRef.current = res;
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const loadMore = () => {
    const temp = [...dataRef.current, ...topPageData.mealHistory];
    dataRef.current = temp;
    setData(temp);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, setData, loadMore, dataRef };
};

export default useFetchData;
