
import { toast } from "react-toastify"
import api from "../../api/api.json";

export async function drop(JsonData) {
  try {
    const url = `${api.request}://${api.server}${api.dropPath}?key=${api.apikey}&drop=${JsonData.action}&id=${JsonData.id}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
   window.location.reload();
    return data;
  } catch (error) {
    toast.error("Api Problem and try agin!");
    
    return null;
  }

}
