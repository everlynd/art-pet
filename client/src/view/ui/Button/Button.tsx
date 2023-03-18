import { ButtonProps } from './Button.props';
import style from './Button.module.scss';

export const Button = ({ appearance, children, ...props }: ButtonProps) => {
    return (
        <button className={`${style.btn} ${style[`btn__${appearance}`]}`} {...props}>
            {children}
        </button>
    );
};
