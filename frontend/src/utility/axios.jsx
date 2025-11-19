import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:5000"

    baseURL: "https://booking-mern-backend.onrender.com/"
});

export default API;