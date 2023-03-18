import { useState } from 'react';
import s from './Paginator.module.scss';

interface PaginatorProps {
    total: number;
    customEvent: (arg0: number) => void;
}

export const Paginator = ({ total, customEvent }: PaginatorProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <div className={s['paginator']}>
            {new Array(total).fill(<></>).map((_, index) => (
                <div
                    className={`${currentPage === index ? s['paginator--active'] : ''}`}
                    aria-hidden
                    onClick={() => {
                        customEvent(index);
                        setCurrentPage(index);
                    }}
                    key={Math.random()}
                >
                    {index}
                </div>
            ))}
        </div>
    );
};
