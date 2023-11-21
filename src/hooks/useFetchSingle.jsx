import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseInstance from "../Networking/baseInstance";


const useFetchSingle = (url) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
const ApiKey = "c0a753282bdc2008ffe4d6e4e1d6462c";

  const { id } = useParams();

  const getSingleDetails = async () => {
    try {
        setLoading(true);
        const { data } = await baseInstance.get(`${url}/${id}?api_key=${ApiKey}`);

        setDetails(data);
        setLoading(false);

    } catch (error) {
        setLoading(false);
    }

  };

  useEffect(() => {
    getSingleDetails();
  }, []);

  return { details, loading };
};

export default useFetchSingle;
