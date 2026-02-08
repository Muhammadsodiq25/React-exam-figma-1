import "./Sellers.css"

const Sellers = ({title, cont, heart, eye, arrow, card}) => {
  return (
    <div className="sellers">
      <div className="sellers__top">
        <h3 className="sellers--title">{title}</h3>
        <div style={{display:'flex', gap:'20px'}}>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>‹</button>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>›</button>
        </div>
      </div>
      <div className="sellers__cont">
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

export default Sellers
