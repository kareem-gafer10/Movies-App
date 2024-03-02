import { useEffect, useState } from "react";
import baseInstance from "../Networking/baseInstance";

const useFetch = (url) => {
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(0);

  const ApiKey = "c0a753282bdc2008ffe4d6e4e1d6462c";

  const getAllDetails = async () => {
    try {
      setLoading(true);
      const { data } = await baseInstance.get(`${url}/week?api_key=${ApiKey}`);
      setLoading(false);
      setDataList(data.results);
      setpageCount(data.total_pages);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getPage = async (page) => {
    try {
      const { data } = await baseInstance.get(
        `${url}/week?api_key=${ApiKey}&page=${page}`
      );
      setDataList(data.results);
      setpageCount(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  return { dataList, loading, pageCount, getPage };
};

export default useFetch;
