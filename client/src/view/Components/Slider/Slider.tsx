import { useCallback, useEffect, useState } from 'react';
import { SliderProps } from './Slider.props';
import s from './Slider.module.scss';
import { Button } from '../../ui/Button/Button';

export const Slider = ({
    images,
    text,
    width = '100%',
    height = '100%',
    pointers = false,
    timer = 5000,
    actionBtn = false,
}: SliderProps) => {
    const [count, setCount] = useState(0);
    const changeSlide = useCallback(
        (direction: number) => {
            if (direction === 1) {
                if (count + 1 === images.length) {
                    setCount(0);
                } else {
                    setCount((prev) => prev + 1);
                }
            }
            if (direction === -1) {
                if (count === 0) {
                    setCount(images.length);
                }
                setCount((prev) => prev - 1);
            }
        },
        [count, setCount],
    );

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, timer);
        return () => clearInterval(interval);
    }, [changeSlide]);
    return (
        <div className={s.slider} style={{ width: width, height: height }}>
            <button
                className={`${s['slider__pointers']} ${s['slider__pointers-next']}`}
                onClick={() => changeSlide(1)}
            ></button>
            <button
                className={`${s['slider__pointers']} ${s['slider__pointers-prev']}`}
                onClick={() => changeSlide(-1)}
            ></button>
            <div className={s['slider__container']}>
                {images.map((img, idx) => (
                    <img key={img} className={count === idx ? s.showed : ''} src={img} alt="kartinka" />
                ))}
            </div>
            {text?.map((item, idx) => (
                <div key={item.title} className={`${s['slider__text']} ${count === idx ? s['showed-text'] : ''}`}>
                    <div className={s['slider__text-title']}>{item.title}</div>
                    <div className={s['slider__text-subtitle']}>{item.subTitle}</div>
                    {actionBtn ? <Button appearance="primary">Shop now</Button> : null}
                </div>
            ))}
            <div className={s['slider__dots']}>
                {pointers
                    ? new Array(images.length).fill(<></>).map((elem, idx) => (
                          <button
                              key={idx}
                              onClick={() => {
                                  setCount(idx);
                              }}
                              className={count === idx ? s['slider__dots--active'] : ''}
                          >
                              {elem}
                          </button>
                      ))
                    : null}
            </div>
        </div>
    );
};
