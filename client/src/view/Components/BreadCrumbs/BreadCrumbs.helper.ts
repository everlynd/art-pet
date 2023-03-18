export const linkStyles = {
	'& a': {
		transition: 'color var(--base-transition)',
		'&:hover': {
			color: 'var(--color-accent-1)',
			'&::before': {
				content: '"|"',
				padding: '0 5px',
				color: 'white',
			},
		},
		'&:first-of-type': {
			'&::before': {
				padding: '0',
				content: '""',
			},
		},
		'&::before': {
			content: '"|"',
			padding: '0 5px',
			color: 'white',
		},
	},
}

export const backgroundStyles = {
	backgroundSize: 'contain',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '90px 0',
	marginBottom: '40px',
	color: 'white',
}