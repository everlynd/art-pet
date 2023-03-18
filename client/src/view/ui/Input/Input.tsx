import { InputProps } from './Input.props';
import style from './Input.module.scss';
export const Input = ({ children, ...props }: InputProps) => {
    return (
        <div style={{ position: 'relative' }}>
            <input className={style.input} {...props} placeholder=" " />
            <label className={style['input-label']}>{children}</label>
        </div>
    );
};
