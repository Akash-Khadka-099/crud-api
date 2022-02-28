import axios from "axios"

const instance = axios.create({
    baseURL : " http://173.249.45.237:8081/ims/product"
})

export default instance;