import { useEffect, useState } from "react";
import api from "../../api/api.json";
import { toast } from "react-toastify";


export default function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const url = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=users`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => setUsers(data))
                .catch((error) => console.error(error));
        };


        fetchCategories();

        const interval = setInterval(fetchCategories, 1000);
        return () => clearInterval(interval);

    }, []);

    return users;
}
