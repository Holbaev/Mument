import api from "../api/api";
    import axios from "axios";


    export  function register(data){
        return axios.post(`http://127.0.0.1:8000/api/users/sing_up/` , data);
    }
export function login(data){
    return api.post(`/users/auth/` , data);
}

export function loguot(data){
    return api.post(`/users/logout/` , data);
}