import axios from 'axios';

const apiUrl = 'http://10.104.1.49:4000/api/v1/';

export const fetchShopItems = () => {
	return axios.get(`${apiUrl}catalog/list`)
};

export const createNewItem = (item) => {
	return axios.post(`${apiUrl}catalog/new`, item)
};

export const getItemById = (id) => {
	return axios.get(`${apiUrl}catalog/${id}`)
};
