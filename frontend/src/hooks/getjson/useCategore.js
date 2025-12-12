import { useEffect, useState } from "react";
import api from "../../api/api.json";
 import {loading} from "../../components/system/Loading";



export default function useCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
         loading(false)
        const fetchCategories = async () => {
            try {
                const url = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=category`;
                const response = await fetch(url);
                const data = await response.json();
                setCategories(data);

            } catch (error) {
                console.log(error);
            } finally {
                loading(true)
            }
        }
        fetchCategories();

    }, []);

    return categories;
}
