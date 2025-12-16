
import { toast } from "react-toastify"
import api from "../../api/api.json";

export async function drop(JsonData) {
  try {
    const url = `${api.request}://${api.server}${api.dropPath}?key=${api.apikey}&grop=${JsonData.action}&id=${JsonData.id}`;

    const res = await fetch(url);
    const data = await res.json();

    return data; 
    toast.success(data)
  } catch (error) {
    toast.error("not Deleate")
    return null;
  }
}
