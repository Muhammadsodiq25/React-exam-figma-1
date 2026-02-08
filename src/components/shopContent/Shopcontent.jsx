import "./Shopcontent.css"

const Shopcontent = ({price, color, rated, cont, heart, eye, arrow, card}) => {
  return (
    <div className="shopcontent">
      <div className="shopcontent__left">
        <div className="shopcontnet__tech">
            <h3 className="shopcontent--title">Categories</h3>
            <div style={{display:'flex', flexDirection:"column", gap:'10px', alignItems:'start'}}>
            <button className="shopcontent__tech--btn">Smartphone (35) <span>›</span></button>
            <button className="shopcontent__tech--btn">Laptop (42) <span>›</span></button>
            <button className="shopcontent__tech--btn">TV (25) <span>›</span></button>
            <button className="shopcontent__tech--btn">Audio (12) <span>›</span></button>
            <button className="shopcontent__tech--btn">Table (18) <span>›</span></button>
            <button className="shopcontent__tech--btn">Accessory (21) <span>›</span></button>
 
            </div>
        </div>
        <div className="shopcontent__price">
            <h3 className="shopcontent--title">Price</h3>
            <img src={price} alt="" />
            <p>Range: <span style={{color:'#00FAEB'}}>25.00$ - 350.00$</span></p>
        </div>
        <div className="shopcontent__color">
            <h3 className="shopcontent--title">Color</h3>
            <img src={color} alt="" />
        </div>
        <div className="shopconent__brands">
            <h3 className="shopcontent--title">Brands</h3>
            <div style={{display:'flex', alignItems:'start', flexWrap:'wrap', width:'400px', gap:'20px'}}>
                <button className="shopcontent__brands--btn">Apple (16)</button>
                <button className="shopcontent__brands--btn">Dell (16)</button>
                <button className="shopcontent__brands--btn">Nokia (16)</button>
                <button className="shopcontent__brands--btn">Samsung (16)</button>
                <button className="shopcontent__brands--btn">Lenovo (16)</button>
            </div>
        </div>
        <div className="shopconent__memory">
            <h3 className="shopcontent--title">Memory</h3>
            <div style={{display:'flex', alignItems:'start', flexWrap:'wrap', width:'300px', gap:'20px'}}>
                <button className="shopcontent__brands--btn">64GB</button>
                <button className="shopcontent__brands--btn">128GB</button>
                <button className="shopcontent__brands--btn">256GB</button>
                <button className="shopcontent__brands--btn">512GB</button>
                <button className="shopcontent__brands--btn">1TB</button>
            </div>
        </div>
        <div className="shopcontent__rated">
            <h3 className="shopcontent--title">Top Rated Products</h3>
            {
            rated.map((cart,index) => {
              return <div key={index} className="rated__cart">
                <img src={cart.img} alt="" />
                <div className="rated__cart__text">
                  <h3 className="rated__cart--price">{cart.price} <span className="rated__cart--price--span">{cart.priceSpan}</span></h3>
                  <p className="rated__cart--title">{cart.title}</p>
                  <p className="rated__cart--stars">{cart.stars}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className="newArrivals__cont">
        {
          cont.map((cart,index) => {
            return <div key={index} className="newArrivals__cart">
              <div className="newArrivals__cart__images" id="newArrivals__images">
                <img className="newArrivals__cart--img" src={cart.img} alt="" />
                <div className="newArrivals__cart__images__btns" id="cart__btns">
                    <button className="newArrivals__cart__btn"><img src={heart} alt="" /></button>
                    <button className="newArrivals__cart__btn"><img src={eye} alt="" /></button>
                    <button className="newArrivals__cart__btn"><img src={arrow} alt="" /></button>
                    <button className="newArrivals__cart__btn"><img src={card} alt="" /></button>
                </div>
              </div>
              <div className="newArrivals__cart__text">
                <p className="newArrivals__cart--price">{cart.price}</p>
                <h3 className="newArrivals__cart--title">{cart.title}</h3>
                <p className="newArrivals__cart--stars">{cart.stars}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Shopcontent
