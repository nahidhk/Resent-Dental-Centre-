import { useEffect, useState } from "react";
import api from "../../api/api.json";
import { loading } from "../../components/system/Loading";

const buildGetUrl = (config) => {
  const { request, server, getPath, ...query } = config;
  const queryString = new URLSearchParams(query).toString();
  return `${request}://${server}${getPath}?${queryString}`;
};
export function useRestApi(tableName) {
  const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!tableName) return;

    try {
      loading(false);

      const getConfig = {
        request: api.request,
        server: api.server,
        getPath: api.getPath,
        key: api.apikey,
        get: tableName
      };

      const url = buildGetUrl(getConfig);
      const response = await fetch(url);

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setJsonData(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      loading(true);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [tableName]);

  return { jsonData, error, refetch: fetchData }; 
}
