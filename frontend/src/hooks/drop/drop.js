
import { toast } from "react-toastify"
import api from "../../api/api.json";

export async function drop(JsonData) {
  try {
    const url = `${api.request}://${api.server}${api.dropPath}?key=${api.apikey}&drop=${JsonData.action}&id=${JsonData.id}`;
    console.log(url)

    const res = await fetch(url);
    const data = await res.json();

    // return data; 
    toast.success(JSON.stringify(data));
    console.log(data)
  } catch (error) {
    toast.error("not Deleate")
    return null;
  }
}
