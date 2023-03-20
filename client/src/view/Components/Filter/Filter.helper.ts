export const customCheckboxStyles = {
	display: 'flex',
	flexDirection: 'column',
	gap: '15px',
	'& label': {
		display: 'flex',
		gap: '5px',
		alignItems: 'center',
		transition: 'color var(--base-transition)',
		'&:hover': {
			color: 'var(--color-accent-1)',
		},
		'input:checked ~ span': {
			border: '1px solid var(--color-accent-1);',
			'&::before': {
				content: '""',
				width: '4px',
				height: '1px',
				display: 'block',
				background: 'var(--color-accent-1)',
				position: 'absolute',
				transform: 'rotate(225deg)',
				top: '5px',
				left: '1px',
			},
			'&::after': {
				content: '""',
				width: '1px',
				height: '7px',
				display: 'block',
				background: 'var(--color-accent-1)',
				position: 'absolute',
				transform: 'rotate(45deg)',
				right: '3px',
				top: '1px'
			}
		}
	},
	'& span': {
		display: 'block',
		width: '10px',
		height: '10px',
		border: '1px solid var(--color-accent-1);',
		position: 'relative'
	},
	'& input': { display: 'none' }
}

export const customInputStyles = {
	padding: '5px 20px 10px',
	'& input': {
		outline: 'none',
		border: '1px solid var(--color-base-border)',
		padding: '10px 15px',
		borderRadius: '3px',
	},
	'& label': {
		display: 'flex',
		gap: '5px',
		alignItems: 'center',
		position: 'relative',
		'& input:focus ~ span': {
			fontSize: '9px',
			top: '-11px',
		},
		'& input:not(:placeholder-shown) ~ span': {
			fontSize: '9px',
			top: '-11px',
		},
		'& span': {
			position: 'absolute',
			top: '10px',
			transition: 'all var(--base-transition)',
			left: '20px',
		},
	},
}