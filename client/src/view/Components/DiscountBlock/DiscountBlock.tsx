import s from './DiscountBlock.module.scss';
// import baner1 from '../.../../../../assets/img/sub-banner-1.jpg'
import baner2 from '../.../../../../assets/img/sub-banner-2.jpg';
import baner3 from '../.../../../../assets/img/sub-banner-3.jpg';

export const DiscountBlock = () => {
    return (
        <div className={s['discount-block']}>
            <div className={s['discount-2']}>
                <a href="/#">
                    <div className={s['discount-inner']}>
                        <img src={baner2} alt="" />
                    </div>
                    <div className={s['discount-description']}>
                        <div className={s['discount-custom']}>
                            <div className={s['discount-title']}>Flat Discount 30%</div>
                            <div className={s['discount-subtitle']}>
                                Knitted Cord <br />
                                Coasters
                            </div>
                        </div>
                        <span>Shop now</span>
                    </div>
                </a>
            </div>
            <div className={s['discount-3']}>
                <a href="/#">
                    <div className={s['discount-inner']}>
                        <img src={baner3} alt="" />
                    </div>
                    <div className={s['discount-description']}>
                        <div className={s['discount-custom']}>
                            <div className={s['discount-title']}>Flat Discount 30%</div>
                            <div className={s['discount-subtitle']}>
                                Knitted Cord <br />
                                Coasters
                            </div>
                        </div>
                        <span>Shop now</span>
                    </div>
                </a>
            </div>
        </div>
    );
};
