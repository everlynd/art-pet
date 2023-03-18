import { LinkButtonProps } from './LinkButton.props';
import style from './LinkButton.module.scss';

export const LinkButton = ({ appearance, targetLink = '/#', children, ...props }: LinkButtonProps) => {
    return (
        <a href={targetLink} className={`${style['link-button']} ${style[`link-button__${appearance}`]}`} {...props}>
            {children}
        </a>
    );
};
