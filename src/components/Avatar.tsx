import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    
    
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { /* Utilizando a desestruturação de código, busco nas propriedades apenas duas delas (src e hasBorder), e defino true como valor inicial */
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}