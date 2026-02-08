import { AiOutlineBars, AiOutlineShoppingCart } from "react-icons/ai"
import { FaHeart, FaRegUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Header.css"
import { useState } from "react"

const Header = ({logo, search,searchIcon, icon2, allCategories, links, location}) => {
  const [open,setOpen] = useState(false)
  return (
      <div>
        <div className="responsivenavbar" style={{flexDirection:'column', gap:'30px', display: `${!open ? 'none' : 'flex'}`, height:'100%', overflow:'scroll', padding:'50px', zIndex:'1000', background:'white', position:'fixed', left:'0%', width:'80%'}}>
          <Link to={'/'} style={{cursor:'pointer'}}><img className="header-logo" src={logo} alt="" /></Link>
         <nav className="navbar">
          <ul style={{display:'flex', alignItems:'start', flexDirection:'column', gap:'40px'}}>
            <li>
              <Link  style={{fontSize:'25px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', color:'#5C5C5C'}} to={'/shop'}>Product</Link>
            </li>
            <li>
              <Link style={{fontSize:'25px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', color:'#5C5C5C'}} to={'/blog'}>Flash Sale</Link>
            </li>
            {links.map((link, index) => {
              return <li key={index}>
                <Link  style={{fontSize:'25px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', color:'#5C5C5C'}}>{link}</Link>
              </li>
            })}
          </ul>
        </nav>
          <hr />
        </div>
        <header className="header2" style={{display: 'none', padding:'20px', alignItems:'center', justifyContent:'space-between'}}>
          <Link to={'/'} style={{cursor:'pointer'}}><img className="header-logo" src={logo} alt="" /></Link>
          <AiOutlineBars onClick={()=> setOpen(!open)} style={{fontSize:'40px', cursor:'pointer'}}/>
        </header>
      <header className="header1" style={{width:'100%', padding:'10px 100px', display:'flex', marginBottom:'20px', flexDirection:'column', gap:'10px', alignItems:'center', justifyContent:'center',}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}} className="">
        <Link to={'/'} style={{cursor:'pointer'}}><img className="header-logo" src={logo} alt="" /></Link>
        <div className="header__input" style={{display:'flex', gap:"20px", alignItems:'center'}}>
          <input className="header--input" type="text" placeholder={search} style={{border:'none', background:'#0000000A', padding:'10px 60px 10px 20px', borderRadius:'8px', outline:'none'}} />
          <button style={{padding:'10px', background:'#1E1E1E', borderRadius:'8px', cursor:'pointer'}}><img style={{width:'20px', height:'20px'}} src={searchIcon} alt="" /></button>
        </div>
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
          <FaHeart className="header--heart" style={{width:'25px', height:'30px', cursor:'pointer'}}/>
          <img className="header--heartt" src={icon2} style={{cursor:'pointer'}} alt="" />
          <AiOutlineShoppingCart className="header--heart" style={{width:'25px', height:'30px', cursor:'pointer'}}/>
          <FaRegUser className="header--heart" style={{width:'20px', height:'30px', cursor:'pointer', marginLeft:'10px'}}/>
        </div>
      </div>
      <div className="header--links" style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
        <button className="header__bottom--btn" style={{display:'flex', background:'#1E1E1E', borderRadius:'8px', cursor:'pointer', fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'16px', color:'white', justifyContent:'space-between', padding:'10px 50px'}}>{allCategories}</button>
        <nav className="navbar">
          <ul style={{display:'flex', alignItems:'center', gap:'30px'}}>
            <li>
              <Link className="header--link" style={{fontSize:'16px', fontFamily:'Montserrat, sans-serif', color:'#5C5C5C'}} to={'/shop'}>Product</Link>
            </li>
            <li>
              <Link className="header--link" style={{fontSize:'16px', fontFamily:'Montserrat, sans-serif', color:'#5C5C5C'}} to={'/blog'}>Flash Sale</Link>
            </li>
            {links.map((link, index) => {
              return <li key={index}>
                <Link className="header--link" style={{fontSize:'16px', fontFamily:'Montserrat, sans-serif', color:'#5C5C5C'}}>{link}</Link>
              </li>
            })}
          </ul>
        </nav>
        <img src={location} className="location" style={{cursor:'pointer'}} alt="" />
      </div>
    </header>
      </div>
  )
}

export default Header
