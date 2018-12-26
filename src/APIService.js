import axios from 'axios';
const API_URL='http://192.168.1.18:3000'
export class APIService{
    constructor(){}
    getPisos() {
        const url=`${API_URL}/piso`;
        return axios.get(url).then(response=>response.data);
    }
}