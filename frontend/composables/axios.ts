import axios from "axios";
import { useUserStore } from "stores/userStore";

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers['Authorization'] = `bearer ${useUserStore().access_token}`

export default axios