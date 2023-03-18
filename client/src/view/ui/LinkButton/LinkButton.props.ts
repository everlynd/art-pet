import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LinkButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	children: ReactNode;
	targetLink?: string;
	appearance: 'primary' | 'secondary' | 'other'
}