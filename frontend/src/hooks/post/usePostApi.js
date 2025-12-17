
import { toast } from "react-toastify";
import api from "../../api/api.json";


export function usePostApi(jsonData){

    toast.success(JSON.stringify(jsonData));

}