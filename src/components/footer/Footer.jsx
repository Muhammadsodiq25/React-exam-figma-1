import { SiNdr } from "react-icons/si"
import "./Footer.css"

const Footer = ({logo, btn, icons, cont}) => {
  return (
    <footer className='footer'>
      <div className='footer__left'>
        <img src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur. Ultricies viverra id egestas pharetra fermentum. Lorem ipsum dolor sit amet consectetur. Ultricies viverra id</p>
        <div className='footer__left__email'>
          <input type="email" placeholder='Your email' className='footer__left--email' />
          <button>{btn}</button>
        </div>
          <img src={icons} alt="" />
          <p style={{color:'#CFCFCF'}}>Copyright 2023 BESTXTORE. Designed By BZOTech.com</p>
      </div>
      <div className="footer__cont">
        {
          cont.map((cart,index) => {
            return <div className="footer__cart" key={index}>
              <p className="footer__cart--title">{cart.title}</p>
              <ul className="footer__cart__links">
                {
                  cart.links.map((link,index) => {
                    return <li key={index}>
                      <p className="footer__cart--link">{link}</p>
                    </li>
                  })
                }
              </ul>
            </div>
          })
        }
      </div>
    </footer>
  )
}

export default Footer
