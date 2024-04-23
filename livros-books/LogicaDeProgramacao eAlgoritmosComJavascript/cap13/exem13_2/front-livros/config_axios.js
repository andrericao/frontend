import axios from "axios";

// cria uma instância Axios com a URL base do web Service a ser acessado pelo app
export const inAxios = axios.create({ baseURL: "http://localhost:3001"});