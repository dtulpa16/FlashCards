import React from "react";
import axios from "axios";
export default function RequestHandler(url, method) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    const sendReq = async () => {
      try {
        var response = await axios[method](url);
        setData(response.data);
      } catch (er) {
        setError(er);
        console.log("ERROR IN REQUEST HANDLER: ", er);
      }
    };
    sendReq();
  }, [url]);

  return { data, error };
}
