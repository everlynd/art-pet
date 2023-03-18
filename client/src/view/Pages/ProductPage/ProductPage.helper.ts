import { useAxios } from '../../../data/api/useAxios'

export const ProductPageLoader = async ({ _, params }: any) => {
	const { id } = params;
	const { data }: any = await useAxios({ url: 'product/get-product', method: 'POST', data: { id: id } })
	return data;
}

export const localePrice = (price: string) =>
	new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+price);
	
export const titleStyle = {
	wordBreak: 'break-word',
	fontSize: '20px',
	fontWeight: '400',
	textTransform: 'capitalize',
};

export const priceStyle = {
	fontWeight: '600',
	fontSize: '20px',
};

export const descriptionStyle = {
	fontSize: '14px',
	color: '#949494',
	overflow: 'hidden',
	letterSpacing: '0.5px',
	lineHeight: '24px',
	textOverflow: 'ellipsis',
	WebkitLineClamp: '3',
	display: '-webkit-box',
	WebkitBoxOrient: 'vertical',
};

export const infoBlockStyle = {
	fontWeight: '500',
	textTransform: 'capitalize',
	fontSize: '14px',
	letterSpacing: '0.5px',
	lineHeight: '24px',
}

export const infoBlockGridStyle = {
	display: 'grid',
	gridTemplateColumns: '0.3fr 1fr'
}

export const quantityStyles = {
	padding: '5px 15px',
	borderRadius: '6px',
	border: '1px solid var(--color-base-border)',
	display: 'flex',
	gap: '20px',
	width: 'fit-content',
	alignItems: 'center',
}