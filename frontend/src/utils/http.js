import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://lit-refuge-57719.herokuapp.com/graphql";

const useAxios = () => {
  const [response, setResponse] = useState(() => null);
  const [error, setError] = useState(() => null);
  const [loading, setloading] = useState(() => false);

  const makeRequest = ({ url, body = null, headers = null }) => {
    setloading(true);
    axios
      .post(url, body, {
        headers,
      })
      .then((res) => {
        console.dir(res);
        setResponse(res.data);
      })
      .catch((err) => {
        console.dir(err);
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return { response, error, loading, makeRequest };
};

export default useAxios;
