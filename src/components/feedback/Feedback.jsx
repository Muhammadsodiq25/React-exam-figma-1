import "./Feedback.css"

const Feedback = ({title, cont}) => {
  return (
    <div className="feedback">
      <div className="newArrivals__top">
        <h3 className="newArrivals--title">{title}</h3>
        <div style={{display:'flex', gap:'20px'}}>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>‹</button>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>›</button>
        </div>
      </div>
      <div className="feedback__cont">
        {
          cont.map((cart,index) => {
            return <div key={index} className="feedback__cart">
              <img src={cart.img} alt="" />
              <div className="feedback__cart__text">
                <h3 className="feedback__cart--title">{cart.title}</h3>
                <div className="feedback__cart--line"></div>
                <p className="feedback__cart--des">{cart.des}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Feedback
