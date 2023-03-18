import { useAxios } from '../../../data/API';

export const fetchUsers = async (page = 0): Promise<any> => {
	const payload = {
		url: `users?page=${page}&limit=5`,
	};
	// const request = await useAxios(payload)
	// console.log(request)
	return await useAxios(payload)
}

export interface User {
	banReason?: string | null;
	banned: boolean;
	createdAt: string;
	email: string;
	id: number;
	password: string;
	posts: Post[];
	roles: Role[];
	updatedAt: string;
}

interface Post {
	content: string;
	createdAt: string;
	updatedAt: string;
	id: number;
	title: string;
	image: string;
	userId: number;
}

interface Role {
	createdAt: string;
	updatedAt: string;
	description?: string | null;
	id: number;
	value: string;
}