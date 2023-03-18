import s from './BannerBlock.module.scss'
import baner1 from '../.../../../../assets/img/sub-banner-1.jpg'
import baner2 from '../.../../../../assets/img/sub-banner-2.jpg'
import baner3 from '../.../../../../assets/img/sub-banner-3.jpg'
import { Button } from '../../ui/Button/Button'

export const BannerBlock = () => {
	return (
		<div className={s["banner-block"]}>
			<div className={s["banner-1"]}>
				<a>
					<div className={s["banner-inner"]}>
						<img src={baner1} alt="" />
					</div>
					<div className={s["banner-description"]}>
						<div className={s["banner-custom"]}>
							<div className={s["banner-title"]}>Flat Discount 30%</div>
							<div className={s["banner-subtitle"]}>Knitted Cord <br />Coasters</div>
						</div>
						<Button appearance='primary'>Shop now</Button>
					</div>
				</a>
			</div>
			<div className={s["banner-2"]}>
				<a>
					<div className={s["banner-inner"]}>
						<img src={baner2} alt="" />
					</div>
					<div className={s["banner-description"]}>
						<div className={s["banner-custom"]}>
							<div className={s["banner-title"]}>Flat Discount 30%</div>
							<div className={s["banner-subtitle"]}>Knitted Cord <br />Coasters</div>
						</div>
						<span>Shop now</span>
					</div>
				</a>
			</div>
			<div className={s["banner-3"]}>
				<a>
					<div className={s["banner-inner"]}>
						<img src={baner3} alt="" />
					</div>
					<div className={s["banner-description"]}>
						<div className={s["banner-custom"]}>
							<div className={s["banner-title"]}>Flat Discount 30%</div>
							<div className={s["banner-subtitle"]}>Knitted Cord <br />Coasters</div>
						</div>
						<span>Shop now</span>
					</div>
				</a>
			</div>
		</div>
	)
}