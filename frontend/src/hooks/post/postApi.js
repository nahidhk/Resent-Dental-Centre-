import { toast } from "react-toastify";
import api from "../../api/api.json";

export async function postApi(jsonData) {
    try {
        const url = `${api.request}://${api.server}${api.postPath}?key=${api.apikey}`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        });

        const data = await res.json();

        if (data.status === "success") {
            toast.success(data.message);
        }
        if (data.status === "error") {
            toast.error(data.message);
        }
        return data;
    } catch (error) {
        console.log(error)
        toast.error("API problem, try again!");
        return null;
    }
}
