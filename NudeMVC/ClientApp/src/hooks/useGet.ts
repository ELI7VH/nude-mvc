import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import { message } from 'antd';

type Props = {
  url: string;
};

type UseGetResponse<T> =
  | { data: T; loading: false; error: false; reFetch: () => Promise<void> }
  | { data: null; loading: true; error: false; reFetch: () => Promise<void> }
  | { data: null; loading: false; error: true; reFetch: () => Promise<void> };

export const useGet = <T>(url: string): UseGetResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);

  const get = useCallback(async () => {
    try {
      const res = await Axios.get(url);
      setData(res.data);
      setError(false);
      console.log('Getting', url, res.data);
    } catch (err) {
      setData(null);
      setError(true);
      message.error(`Error fetching data from ${url}`);
    }
  }, [url]);

  useEffect(() => {
    get();
  }, [get]);

  return data
    ? { data, loading: false, error: false, reFetch: get }
    : error
    ? { data: null, loading: false, error: true, reFetch: get }
    : { data: null, loading: true, error: false, reFetch: get };
};
