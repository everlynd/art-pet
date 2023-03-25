import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
export const BASE_URL = '/api/'

export const $api = axios.create({
	baseURL: BASE_URL,
})

export const useAxios = async (options: AxiosRequestConfig) => {
	try {
		const response = await $api(options.url as string, {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			method: `${options.method}`,
			data: options.data
		})
		return response
	} catch (error) {
		const err = error as AxiosError
		if (err?.response?.status === 401) {
			localStorage.removeItem('token')
		}
	}
}