import { Product } from '../../../data/store/productStore';

export const localePrice = (price: string) =>
	new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+price);

export const iconsStyles = {
	alignItems: 'center',
	justifyContent: 'center',
	width: '30px',
	height: '30px',
	borderRadius: '50px',
	background: 'var(--color-accent-2)',
	transition: 'background var(--base-transition), color var(--base-transition)',
	'&:hover': {
		background: 'var(--color-accent-1)',
		color: 'white'
	}
};

export const productCartStylesBlock = {
	position: 'relative',
	padding: '15px',
	border: '1px solid var(--color-base-border)',
	borderRadius: '6px',
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	width: '192px',
	'& img': {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
	'&:hover': {
		'.icon-block': {
			opacity: '1',
		},
		'& > .sale': {
			background: '#7e7e7e',
			'&::after': {
				content: 'attr(data-content)',
			},
		},
		'.hidden-img': {
			width: '192px',
			height: '218px',
			'& img': {
				objectFit: 'contain',
				opacity: '1',
			}
		}
	},
}

export const saleBlock = {
	position: 'absolute',
	background: 'var(--color-accent-1)',
	padding: '2px 8px',
	borderRadius: '3px',
	color: 'white',
	fontSize: '12px',
	lineHeight: '13px',
	transition: 'all var(--base-transition)',
	zIndex: '2',
	'&::after': { content: '"Sale"' },
}

export const soldOutBlock = {
	position: 'absolute',
	background: 'var(--color-accent-1)',
	padding: '2px 8px',
	borderRadius: '3px',
	color: 'white',
	fontSize: '12px',
	lineHeight: '13px',
	transition: 'all var(--base-transition)',
	zIndex: '2',
	'&::after': { content: '"Sold out"' },
}

export interface ProductCartProps {
	product: Product;
}