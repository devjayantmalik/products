import axios from "axios";

const production = "https://fake-json-products-data.herokuapp.com";
const developement = "http://localhost:3000";

export default axios.create({
    baseURL: process.env.NODE_ENV === "development" ? developement : production,
});
