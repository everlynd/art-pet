import { Slider } from '../../Components/Slider/Slider';
import slide1 from '../../../assets/img/slide1.jpg';
import slide2 from '../../../assets/img/slide2.jpg';
import slide3 from '../../../assets/img/slide3.jpg';
import { CardSlider } from '../../Components/CardSlider/CardSlider';
import { CategoryCard } from '../../ui/CategoryCard/CategoryCard';
import { BannerBlock } from '../../Components/BannerBlock/BannerBlock';
import { ProductCart } from '../../ui/ProductCart/ProductCart';
import { DiscountBlock } from '../../Components/DiscountBlock/DiscountBlock';
import { ProductPromoCart } from '../../ui/ProductPromoCart/ProductPromoCart';
import { BlogCart } from '../../ui/BlogCart/BlogCart';
import { SponsorBlock } from '../../Components/SponsorBlock/SponsorBlock';
import { blogCartFakeData } from '../../ui/BlogCart/BlogCart.helper';
import { useContext } from 'react';
import { Context } from '../../../App';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
    const { rootStore } = useContext(Context);
    const {
        categoriesStore: { hotCategories },
        productsStore: { products, salesProducts },
    } = rootStore;
    return (
        <>
            <div style={{ marginBottom: '40px' }}>
                <Slider
                    pointers={true}
                    images={[slide1, slide2, slide3]}
                    height="500px"
                    actionBtn={true}
                    text={[
                        { title: 'Top Trending Products', subTitle: 'Best Modern Wood Collection' },
                        {
                            title: 'Best Wooden Products',
                            subTitle: 'New Sell Handmade Collection',
                        },
                        {
                            title: 'Lorem Ipsum',
                            subTitle: 'это текст-"рыба", часто используемый в печати и вэб-дизайне',
                        },
                    ]}
                />
            </div>
            <div className="main-container">
                {hotCategories.length ? (
                    <CardSlider countElements={5} title={'Shop By Category'}>
                        {hotCategories
                            ? hotCategories.map((elem) => <CategoryCard category={elem} key={elem.id} />)
                            : null}
                    </CardSlider>
                ) : null}
                <BannerBlock />
                {products.length ? (
                    <CardSlider countElements={5} bordered={false} title={'Products'}>
                        {products.map((elem) => (
                            <ProductCart product={elem} key={Math.random()} />
                        ))}
                    </CardSlider>
                ) : null}
                <DiscountBlock />
                {salesProducts.length ? (
                    <CardSlider
                        countElements={2}
                        bordered={false}
                        title={'Deal Of The Day'}
                        expiresIn="December, 31, 2023"
                    >
                        {salesProducts.map((elem) => (
                            <ProductPromoCart product={elem} key={Math.random()} />
                        ))}
                    </CardSlider>
                ) : null}
                {products.length ? (
                    <CardSlider countElements={5} bordered={false} title={'Featured Products'}>
                        {products.map((elem) => (
                            <ProductCart product={elem} key={Math.random()} />
                        ))}
                    </CardSlider>
                ) : null}
                {blogCartFakeData.length ? (
                    <CardSlider countElements={3} title={'Latest blogs'}>
                        {blogCartFakeData.map((elem) => (
                            <BlogCart blog={elem} key={Math.random()} />
                        ))}
                    </CardSlider>
                ) : null}
                <SponsorBlock />
            </div>
        </>
    );
});
