import Main from "../../components/main/Main"
import mainBg from "../../assets/main-bg-img.png"
import Shopping from "../../components/shipping/Shopping"
import Flash from "../../components/flash-sale/Flash"
import flashImg from "../../assets/flash-img.png"
import Categories from "../../components/categories/Categories"
import categoriesImg from "../../assets/categories-cart-img.webp"
import Arrivals from "../../components/arrivals/Arrivals"
import arrivalsBg from "../../assets/arrivals-bg.png"
import Newarrivals from "../../components/news-arrivals/Newarrivals"
import newArrifalsImg from '../../assets/newArrivals-cart-img.avif'
import heart from "../../assets/heart.png"
import eye from "../../assets/eye.png"
import arrow from "../../assets/arrow.png"
import cart from "../../assets/cart.png"
import Sale from "../../components/sale/Sale"
import Sellers from "../../components/sellers/Sellers"
import Apple from "../../components/apple/Apple"
import appleBg from "../../assets/apple-bg.png"
import Rated from "../../components/rated/Rated"
import ratedApple from "../../assets/main-apple-icon.png"
import ratedBottomLeftImg from "../../assets/rated-bottom-left-img.png"
import ratedContImg from "../../assets/rated-cont-img.avif"
import Feedback from "../../components/feedback/Feedback"
import  feedbackCartImg1 from '../../assets/feedback-cart-img1.avif'
import  feedbackCartImg2 from '../../assets/feedback-cart-img2.jpg'
import shipping from "../../assets/shipping.png"

const flash__cont = [
  {
    title: 'MX MASTER 3S Performance Wireless Mouse',
    price: '$29.99',
    img: flashImg,
    stars: '⭐⭐⭐⭐⭐  12 Reviews',
    sold: 'Sold: 16',
    available: 'Available: 64',
    time: ['02','23','14','56'],
    timeText: ['Days','Hour','Mins','Secs'],
    btn: 'Add To Cart'
  },
  {
    title: 'MX MASTER 3S Performance Wireless Mouse',
    price: '$29.99',
    img: flashImg,
    stars: '⭐⭐⭐⭐⭐  12 Reviews',
    sold: 'Sold: 16',
    available: 'Available: 64',
    time: ['02','23','14','56'],
    timeText: ['Days','Hour','Mins','Secs'],
    btn: 'Add To Cart'
  },
]

const categories__cont = [
  {
    img: categoriesImg,
    title: 'Smartphones',
    btn: 'All Smartphones ->',
    links: ['iPhone','iPhone Accessories','Postpaids Phones','Sale off']
  },
    {
    img: categoriesImg,
    title: 'Camera',
    btn: 'All Camera ->',
    links: ['Professional','Camera Accessories','Cheap Camera','Sale off']
  },
    {
    img: categoriesImg,
    title: 'Wristwatch',
    btn: 'All Wristwatch ->',
    links: ['Sports Watch','Fashion Watches','Smart Watch','Sale off']
  },
    {
    img: categoriesImg,
    title: 'Headphones',
    btn: 'All Headphones ->',
    links: ['iPhone','iPhone Accessories','Postpaids Phones','Sale off']
  },
    {
    img: categoriesImg,
    title: 'Tablets',
    btn: 'All Tablets ->',
    links: ['iPad','iPad Accessories','Postpaids iPad','Sale off']
  },
    {
    img: categoriesImg,
    title: 'Laptop',
    btn: 'All Laptop ->',
    links: ['Gaming laptop','Laptop Accessories','Office Laptop','Sale off']
  },
]

const arrivals__cart = ['New Collection 2023', 'Apple Watch Series 8', "Fine workmanship is waterproof and dustproof. The watch is improved with many features to ensure accuracy when monitoring users' health.", 'Shop Now']


const newArrivals__cont = [
  {
    img: newArrifalsImg,
    title: 'Macbook Air 2020 13 inch Apple M1 -  8GB RAM - 256GB SSD',
    price: '$25.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'AirPods (3rd generation) with Lightning Charging Case',
    price: '$45.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Iphone 14 - 128GB Midnight - Genuine Product',
    price: '$825.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Canon Eos 450D Lens Kit 18-55Mm F/3.5-5.6 Is',
    price: '$165.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple iPad Pro 11 inch M1 2021 Wifi 128GB|8GB',
    price: '$$425.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Smart Tivi Samsung 4K 75 inch 75AU7000 UHD',
    price: '$465.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'JBL WH-CH520 Wireless Bluetooth Earphones Headset',
    price: '$105.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
]

const sale__cont = [
  {
    top: 'Keyboard',
    title: 'Sale 20% off',
    btn: 'Shop Now'
  },
  {
    top: 'Keyboard',
    title: 'Sale 20% off',
    btn: 'Shop Now'
  },
]

const sellers__cont = [
  {
    img: newArrifalsImg,
    title: 'Macbook Air 2020 13 inch Apple M1 -  8GB RAM - 256GB SSD',
    price: '$25.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'AirPods (3rd generation) with Lightning Charging Case',
    price: '$45.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Iphone 14 - 128GB Midnight - Genuine Product',
    price: '$825.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Canon Eos 450D Lens Kit 18-55Mm F/3.5-5.6 Is',
    price: '$165.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
]

const apple__left__des = ['24 months warranty','Interest installment payment','100% original seal']

const rated__cont = [
  {
    img: ratedContImg,
    title: 'JBL Bluetooth...',
    price: '$55.00',
    priceSpan: '$85.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'Mac mini M2 512GB...',
    price: '$895.00',
    priceSpan: '$985.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'Logitech Wireless...',
    price: '$65.00',
    priceSpan: '$85.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'C270 HD Webcam...',
    price: '$155.00',
    priceSpan: '$185.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'Iphone 14 Pro Max 128GB...',
    price: '$855.00',
    priceSpan: '$885.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'JBL Bluetooth Speaker...',
    price: '$45.00',
    priceSpan: '$85.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'JBL Gaming Headset...',
    price: '$125.00',
    priceSpan: '$185.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'Marine Camera...',
    price: '$105.00',
    priceSpan: '$125.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
    {
    img: ratedContImg,
    title: 'Beats Solo3 Wireless...',
    price: '$145.00',
    priceSpan: '$185.00',
    stars: '⭐⭐⭐⭐⭐ 120 Reviews'
  },
]

const feedback__cont = [
  {
    img: feedbackCartImg1,
    title: 'Anna Jean',
    des: '‘’Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper tortor id maecenas pharetra. Dignissim sed vitae tristique risus interdum viverra odio. Et mauris sollicitudin amet sed amet. Urna sed aliquam velit lectus sagittis a aliquam vel. Et mauris sollicitudin.’’'
  },
  {
    img: feedbackCartImg2,
    title: 'Albert Flores',
    des: '‘’Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper tortor id maecenas pharetra. Dignissim sed vitae tristique risus interdum viverra odio. Et mauris sollicitudin amet sed amet. Urna sed aliquam velit lectus sagittis a aliquam vel. Et mauris sollicitudin.’’'
  },
]

const Home = ({mainApple}) => {
  return (
    <div>
      <Main icon={mainApple} bg={mainBg} title={'AirPods Pro 2023'} des={'Delivers vivid sound quality with outstanding 3-D sound reproduction'} btn1={'Shop Now'} btn2={'▶️ Video'}/>
      <Shopping img={shipping}/>
      <Flash title={'Flash Sale'} cont={flash__cont}/>
      <Categories title={'Categories'} cont={categories__cont}/>
      <Arrivals bg={arrivalsBg} cart={arrivals__cart}/>
      <Newarrivals title={'New Arrivals'} cont={newArrivals__cont} heart={heart} eye={eye} arrow={arrow} card={cart}/>
      <Sale cont={sale__cont}/>
      <Sellers cont={sellers__cont} title={'Best Sellers'} heart={heart} eye={eye} arrow={arrow} card={cart}/>
      <Apple title={'Apple MacBook Air M1 256GB 2023'} bg={appleBg} left__des={apple__left__des} right__title={'$655.00'} btn={'Shop Now'} right__des={'10% off when paying by credit card'}/>
      <Rated cont={rated__cont} title={'Top Rated Products'} apple={ratedApple} bottom__title={'Iphone 14 Plus'} bottom__des={'Available in Stock!'} bottom__left__img={ratedBottomLeftImg}/>
      <Feedback title={'Feedbacks'} cont={feedback__cont}/>
    </div>
  )
}

export default Home
