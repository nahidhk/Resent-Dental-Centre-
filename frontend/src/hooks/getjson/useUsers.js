import { useEffect, useState } from "react";
import api from "../../api/api.json";
import { loading } from "../../components/system/Loading";

const buildGetUrl = (config) => {
    const { request, server, getPath, ...query } = config;
    const queryString = new URLSearchParams(query).toString();
    return `${request}://${server}${getPath}?${queryString}`;
};

export default function useUsera() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        loading(false);

        const fetchJsonData = async () => {
            try {
                const getConfig = {
                    request: api.request,
                    server: api.server,
                    getPath: api.getPath,
                    key: api.apikey,
                    get: "users"
                };

                const url = buildGetUrl(getConfig);
                const response = await fetch(url);
                const data = await response.json();

                setJsonData(data);
            } catch (error) {
                console.log(error);
            } finally {
                loading(true);
            }
        };

        fetchJsonData();
    }, []);

    return jsonData;
}
