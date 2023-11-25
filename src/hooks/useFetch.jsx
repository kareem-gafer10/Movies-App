import { useEffect, useState } from "react";
import baseInstance from "../Networking/baseInstance";


const useFetch = (url) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const ApiKey = "c0a753282bdc2008ffe4d6e4e1d6462c";
 
  const getAllDetails = async () => {
    try {
        setLoading(true)
        const {data}= await baseInstance.get(`${url}/week?api_key=${ApiKey}`)
        setLoading(false)
        setDataList(data.results);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  return { dataList, loading};
};

export default useFetch;


