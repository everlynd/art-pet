export interface ProductCharacteristics {
	[key: string]: string
}
export const overcoverStyles = {
	position: 'fixed',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	zIndex: '5',
	background: 'black',
	opacity: '.5',
}

export const cartPopupStyles = {
	position: 'fixed',
	top: '0',
	bottom: '0',
	right: '-500px',
	zIndex: '6',
	background: 'white',
	minWidth: '420px',
	transition: 'all var(--base-transition)',
}

export const cartPopupFooter = {
	background: '#f5f5f5',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: '20px',
	position: 'fixed',
	bottom: '0',
	width: '100%',
	gap: '10px',
}

export const emptyCart = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px',
	'& svg': { width: '150px', height: '150px' },
}