import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import headerLogo from "./assets/header-logo.png"
import headerSearchIcon from "./assets/header-search-icon.png"
import headerTopIconsIcon2 from "./assets/header-top-icons-icon2.png"
import headerLocation from "./assets/header-bottom-location.png"
import mainAppleIcon from "./assets/main-apple-icon.png"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import mainBg from "./assets/main-bg-img.png"
import footerIcons from "./assets/footer-icons.png"
import footerLogo from "./assets/footer-logo.png"
import Shop from "./pages/shop/Shop"
import Blog from "./pages/blog/Blog"

const header__links = ['Best Sellers','Specials Offers','Specials Offers','About Us','Contact Us']

const footer__cont = [
  {
    title: 'Customer Service',
    links: ['My Account','Payments','Term of Use','Deliveries & Returns','Gift Card','Refund & Returns Policy','FAQs']
  },
  {
    title: 'About Us',
    links: ['Product','Our Story','Job Opportunities','Store Locator','Blog','Reviewsicy','Trending Search']
  },
  {
    title: 'Customer Service',
    links: ['Contact Us','600 N Washington Ave Suite C203','+008 0642 118','bestxtore@gmail.com']
  },
]

const responsiveNavbar__contact = ['600 N Washington Ave Suite C203','+008 0642 118','bestxtore@gmail.com']


const App = () => {
  return (
    <div className="container">
      <Header responsiveContact={'Contact Us'} responsive={responsiveNavbar__contact} location={headerLocation} logo={headerLogo} search={'Search...'} searchIcon={headerSearchIcon} icon2={headerTopIconsIcon2} allCategories={'All Categories'} links={header__links}/>
      <Routes>
        <Route path="/" element={<Home mainApple={mainAppleIcon} mainBg={mainBg}/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer logo={footerLogo} btn={'Submit'} icons={footerIcons} cont={footer__cont}/>
    </div>
  )
}

export default App
