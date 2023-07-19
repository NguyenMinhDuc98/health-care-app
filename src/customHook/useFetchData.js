import { useEffect, useRef, useState } from "react";

const useFetchData = ({ api }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dataRef = useRef();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await api();

      const prevData = dataRef.current || [];
      dataRef.current = [...prevData, ...res];
      setData([...prevData, ...res]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const loadMore = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, setData, loadMore, dataRef };
};

export default useFetchData;
