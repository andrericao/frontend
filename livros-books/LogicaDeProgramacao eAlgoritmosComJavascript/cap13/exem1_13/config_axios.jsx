import axios from "axios";
// Cria uma istance Axios com URL base do Web Service acessado pelo app
export const inAxios = axios.create({ baseURL: 'http://localhost:5173/'});