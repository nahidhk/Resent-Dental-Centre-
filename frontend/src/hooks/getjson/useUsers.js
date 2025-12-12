import { useEffect, useState } from "react";
import api from "../../api/api.json";
import { loading } from "../../components/system/Loading";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loading(false);
        const fetchUsers = async () => {
            try {
                const url = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=users`;
                const response = await fetch(url);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                loading(true);
            }
        };

        fetchUsers();
    }, []);

    return { users }; 
}
