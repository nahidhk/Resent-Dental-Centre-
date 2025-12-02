import { useEffect, useState } from "react";
import api from "../../api/api.json";



export default function useCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const url = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=category`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => setCategories(data))
                .catch((error) => console.error(
                    "Error fetching api data, Page reload and try again!\nThis is a MySQL API Problem:",
                    error
                ));

        };


        fetchCategories();

        const interval = setInterval(fetchCategories, 1000);
        return () => clearInterval(interval);

    }, []);

    return categories;
}
