import axios from 'axios';
const API_URL='https://apigestionl4l.herokuapp.com'
export class APIService{
    constructor(){}
    getPisos() {
        const url=`${API_URL}/piso`;
        return axios.get(url).then(response=>response.data);
    }
    getInquilinos(){
        const url=`${API_URL}/inquilino`;
        return axios.get(url).then(response=>response.data);
    }
    getInmuebles(){
        const url=`${API_URL}/inmueble`;
        return axios.get(url).then(response=>response.data);
    }
    getPropietarios(){
        const url=`${API_URL}/propietario`;
        return axios.get(url).then(response=>response.data);
    }
    getPiso(ids){
        const url=`${API_URL}/piso/${ids}`;
        return axios.get(url).then(response=>response.data);
    }
    getInquilino(ids){
        const url=`${API_URL}/inquilino/${ids}`;
        return axios.get(url).then(response=>response);
    }
    postPiso(data){
        const url=`${API_URL}/piso`;
        return axios.post(url,data).then(response=>response.data);
    }
    postInquilino(data){
        const url=`${API_URL}/inquilino`;
        return axios.post(url,data).then(response=>response.data);
    }
}