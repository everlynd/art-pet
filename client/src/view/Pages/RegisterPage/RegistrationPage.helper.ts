import { useAxios } from '../../../data/api/useAxios'

interface IUserCreate {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export const createUser = async (user: IUserCreate) => {
	await useAxios({ url: 'auth/registration', method: 'POST', data: { ...user }})
}