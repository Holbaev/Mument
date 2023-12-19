import $api from "../http/api";


export async function getTracks(data){
    return $api.get(`/tracks/` , data);
}