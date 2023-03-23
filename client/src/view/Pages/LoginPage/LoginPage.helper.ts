import { useAxios } from '../../../data/api/useAxios';

interface IUserLogin {
	email: string;
	password: string;
}

export const loginStyles = {
	border: '1px solid var(--color-base-border)',
	padding: '20px',
	borderRadius: '6px',
	margin: '0 auto',
	maxWidth: '470px',
	marginBottom: '40px',
	'& h3': { margin: '0', textAlign: 'center' },
	'& form': {
		display: 'flex', flexDirection: 'column', gap: '20px',
		'& label': {
			position: 'relative',
			'& span': {
				position: 'absolute',
				top: '10px',
				left: '7px',
				transition: 'font-size var(--base-transition), top var(--base-transition)',
				color: 'var(--color - base - body - text)',
				fontSize: '12px',
			}
		},
		'& input': {
			outline: 'none',
			border: '1px solid var(--color-base-border)',
			borderRadius: 'var(--base-radius)',
			padding: 'var(--base-padding)',
			width: '100%',
			boxSizing: 'border-box',
			"&:focus~span, &:not(:placeholder-shown)~span": {
				top: '0px',
				fontSize: '9px',
			}
		}
	}
}

export const login = async(user: IUserLogin) => {
	const res = await useAxios({url: 'auth/login', method: "POST", data: {...user}})
	return res?.data;
}