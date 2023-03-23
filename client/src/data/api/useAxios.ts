import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
export const BASE_URL = '/api/'

export const $api = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbUBhZG0uYWRtIiwiaWQiOjIsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXRpb24iOiJUVVJCT0FETUlOIiwiY3JlYXRlZEF0IjoiMjAyMC0wMS0wMVQxMDoxMDoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMC0wMS0wMVQxMDoxMDoxMC4wMDBaIiwiVXNlclJvbGVzIjp7ImlkIjoxLCJyb2xlSWQiOjEsInVzZXJJZCI6Mn19XSwiaWF0IjoxNjc5NTYzNjMyLCJleHAiOjE2Nzk2NTAwMzJ9.VKAdD2XQ97cA2A354iNb5nxxzBMExNr6r00mvKledL4'
	}
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