
import { toast } from "react-toastify"
import api from "../../api/api.json";
import { loading } from "../../components/system/Loading";

export async function drop(JsonData) {
  loading(false);
  try {
    const url = `${api.request}://${api.server}${api.dropPath}?key=${api.apikey}&drop=${JsonData.action}&id=${JsonData.id}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "success") {
      toast.success(data.message);
      loading(true);
     setTimeout(1000,window.location.reload())
    } else {
      toast.error(data.message);
      loading(true);
    }
    return data;
  } catch (error) {
    toast.error("Api Problem and try agin!");
    return null;
  }

}
