export interface SliderProps {
	images: string[];
	text?: SliderText[]
	actionBtn: boolean
	width?: string;
	height?: string;
	timer?: number;
	pointers?: boolean
}

interface SliderText {
	title: string,
	subTitle: string
}