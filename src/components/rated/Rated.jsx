import "./Rated.css"

const Rated = ({title, cont}) => {
  return (
    <div className="rated">
      <div className="newArrivals__top">
        <h3 className="newArrivals--title rated--title">{title}</h3>
        <div style={{display:'flex', gap:'20px'}}>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>‹</button>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>›</button>
        </div>
      </div>
      <div className="rated__bottom">
        <div className="rated__cont">
          {
            cont.map((cart,index) => {
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
    </div>
  )
}

export default Rated
