import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: resData} = await axios.get(url);
      setData(resData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {error, loading, data};
}
export default useFetch;
