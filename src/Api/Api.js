import axios from "axios";

const apiBase =  axios.create({baseURL:'https://pokeapi.co/api/v2'});

export default apiBase;