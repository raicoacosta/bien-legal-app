import axios from "axios"

let url = "";
let defaultHeaders = {};

const httpGet = (baseUrl = url, config = defaultHeaders) => {
	return axios.get(baseUrl, config);
}

const httpPost = (baseUrl = url, data, config = defaultHeaders) => {
	return axios.post(baseUrl, data, config);
}

const httpDelete = (baseUrl = url, config = defaultHeaders) => {
	return axios.get(baseUrl, config);
}


export const api = {
	httpGet,
	httpPost,
	httpDelete
}