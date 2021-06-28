import axios from "axios";

const instance = axios.create({
    baseURL: "https://whats-app-backend-ankur9669.herokuapp.com/"
});

export default instance;