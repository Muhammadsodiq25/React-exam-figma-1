import Shopmain from "../../components/shopMain/Shopmain"
import shopmainBg from '../../assets/shopmain-bg.jpg'
import Shopcontent from "../../components/shopContent/shopcontent"
import shopcontentPriceImg from "../../assets/shopcontent-price-img.png"
import shopcontentColorImg from "../../assets/shopcontent-color-img.png"
import ratedContImg from "../../assets/rated-cont-img.avif"
import newArrifalsImg from '../../assets/newArrivals-cart-img.avif'
import heart from "../../assets/heart.png"
import eye from "../../assets/eye.png"
import arrow from "../../assets/arrow.png"
import cart from "../../assets/cart.png"

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
]

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
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
    {
    img: newArrifalsImg,
    title: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    price: '$205.00',
    stars: '⭐⭐⭐⭐⭐ 12 Reviews'
  },
]

const Shop = () => {
  return (
    <div>
      <Shopmain title={'Shop'} subtitle={'Home > Shop'} bg={shopmainBg}/>
      <Shopcontent heart={heart} eye={eye} arrow={arrow} card={cart} cont={newArrivals__cont} price={shopcontentPriceImg} color={shopcontentColorImg} rated={rated__cont}/>
    </div>
  )
}

export default Shop
