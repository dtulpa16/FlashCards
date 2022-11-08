import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await axios.get(url);
        setData(response.data);
        setLoading(false)
      } catch (er) {
        setError(er);
      }
    };
    fetchData()
  }, [url]);
  return { loading, data, error };
};
export default useFetch;
