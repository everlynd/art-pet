import axios, { AxiosError, AxiosRequestConfig } from 'axios';
export const BASE_URL = '/api/';

export const $api = axios.create({
	baseURL: BASE_URL,
})

export const useAxios = (options: AxiosRequestConfig) => {
	try {
		const response = $api(options)
		return response
	} catch (error) {
		const err = error as AxiosError
		console.log(err.response?.data)
	}
}