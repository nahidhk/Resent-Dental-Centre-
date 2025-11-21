import { useEffect, useState } from "react";
import api from "../api/api.json";

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const url = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=category`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => setCategories(data))
                .catch((error) => console.error("Error fetching data:", error));
        };

        // প্রথমে একবার রান করাই
        fetchCategories();

        // প্রতি ১ সেকেন্ডে auto reload
        const interval = setInterval(fetchCategories, 1000);

        // Cleanup
        return () => clearInterval(interval);

    }, []);

    return categories;
}
