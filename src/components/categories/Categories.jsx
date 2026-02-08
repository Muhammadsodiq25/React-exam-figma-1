import { Link } from "react-router-dom"
import "./Categories.css"

const Categories = ({title, cont}) => {
  return (
    <div className="categories" style={{flexDirection:'column'}}>
      <div className="categories__top">
        <h3 className="categories--title">{title}</h3>
        <div style={{display:'flex', gap:'20px'}}>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>‹</button>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>›</button>
        </div>
      </div>
      <div className="categories__cont">
          {
            cont.map((cart,index) => {
              return <div key={index} className="categories__cart">
                <img src={cart.img} alt="" />
                <div className="categories__cart__text">
                  <h3 className="categories__cart--title">{cart.title}</h3>
                  <ul className="categories__cart__links">
                    {
                      cart.links.map((link,index) => {
                        return <li key={index}>
                          <Link className="categories__cart--link">{link}</Link>
                        </li>
                      })
                    }
                  </ul>
                  <button className="categories__cart--btn">{cart.btn}</button>
                </div>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Categories
