import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T[];
  isLoading: boolean;
  addData: (newData: T) => void;
}

const useFetch = <T,>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData: T[] = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const addData = (newData: T) => {
    setData((prevData) => [...prevData, newData]);
  };

  return { data, isLoading, addData };
};

export default useFetch;
