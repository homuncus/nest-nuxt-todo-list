import axios from "axios";
import { useUserStore } from "stores/userStore";

const store = useUserStore()

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers['Authorization'] = store.access_token ? `bearer ${useUserStore().access_token}` : null

export default axios