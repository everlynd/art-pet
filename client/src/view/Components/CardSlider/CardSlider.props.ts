import { ReactNode } from 'react';

export interface CardSliderProps {
	children: ReactNode;
	title?: string;
	tabs?: string[];
	bordered?: boolean;
	countElements?: number;
	expiresIn?: string
}