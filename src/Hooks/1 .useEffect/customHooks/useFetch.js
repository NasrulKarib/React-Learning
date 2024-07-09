import React,{useState,useEffect} from 'react'
import axios from 'axios';

const useFetch = (urls) => {
    const [countries, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(urls);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [urls]);
    return {countries, loading, error};
}

export default useFetch
