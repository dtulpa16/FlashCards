import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, cardId) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (er) {
        setError(er);
      }
    };
    fetchData();
  }, [url, cardId]);
  const refetch = async () => {
    setLoading(true);
    try {
      let response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (er) {
      setError(er);
    }
  };
  return { loading, data, error, refetch };
};
export default useFetch;
