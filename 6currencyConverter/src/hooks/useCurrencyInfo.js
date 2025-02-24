import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({ rates: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hn0uUnMirhAxLr702zTtZaPoTPuVOuLhQLzCAI8W`;
        const res = await fetch(api);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const D = await res.json();
        setData(D);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
}

export default useCurrencyInfo;
