import { useEffect, useState } from "react";
import api from "../../api/api.json";
import { toast } from "react-toastify";

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const url = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=category`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => setCategories(data))
                .catch((error) => toast.error("Error fetching api data:", error));
        };


        fetchCategories();

        const interval = setInterval(fetchCategories, 1000);
        return () => clearInterval(interval);

    }, []);

    return categories;
}
