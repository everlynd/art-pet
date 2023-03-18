import { CardSliderProps } from './CardSlider.props';
import s from './CardSlider.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { ExpiresTimer } from './ExpiresTimer/ExpiresTimer';

export const CardSlider = ({
    title = 'Default title',
    tabs = [],
    countElements = 4,
    bordered = true,
    children,
    expiresIn,
}: CardSliderProps) => {
    const childNodesRef = useRef<null | HTMLDivElement>(null);
    const [test, setTest] = useState(0);
    const [shift, setShift] = useState(0);
    useEffect(() => {
        const elementsGap = +window.getComputedStyle(childNodesRef?.current as HTMLElement).gap.replace(/[^0-9]/g, '');
        setShift((childNodesRef?.current?.childNodes?.[0] as HTMLElement)?.offsetWidth + elementsGap);
    }, []);
    const swipeList = (direction: number) => {
        const maxValue = React.Children.count(children) * shift - countElements * shift;
        if (direction === 1) {
            Math.abs(test) === maxValue ? null : setTest((prev) => prev - shift);
        }
        if (direction === -1) {
            test === 0 ? null : setTest((prev) => prev + shift);
        }
    };
    return (
        <div className={s['card-slider']}>
            <div className={s['card-slider__top']}>
                <div className={s['card-slider__top-heading']}>
                    {tabs.length ? (
                        <div className={s.tabs}>
                            {tabs.map((el) => (
                                <span key={el}>{el}</span>
                            ))}
                        </div>
                    ) : (
                        title
                    )}
                </div>
                {expiresIn ? (
                    <div className={s['card-slider__expires']}>
                        <ExpiresTimer deadline={expiresIn} />
                    </div>
                ) : null}
                <div className={s['card-slider__top-pointers']}>
                    <button
                        className={`${s['top__pointer']} ${s['top__pointer-prev']}`}
                        onClick={() => swipeList(-1)}
                    ></button>
                    <button
                        className={`${s['top__pointer']} ${s['top__pointer-next']}`}
                        onClick={() => swipeList(1)}
                    ></button>
                </div>
            </div>
            <div className={`${s['card-slider__content-wrapper']} ${!bordered ? s['card-slider__content-wb'] : ''}`}>
                <div
                    ref={childNodesRef}
                    style={{ transform: `translateX(${test}px)` }}
                    className={`${s['card-slider__content']} ${!bordered ? s['gapped'] : ''}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
