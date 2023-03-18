import { useEffect, useState } from 'react';
// import { Icon } from '../Icons';
import { RatingProps } from './Rating.props';
import s from './Rating.module.scss';
import { Icon } from '../Icons/Icons';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return <Icon name="star" className={`${i < currentRating ? s.filled : ''}`} />;
    });
    setRatingArray(updatedArray);
  };
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props} className={s['rating']}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
