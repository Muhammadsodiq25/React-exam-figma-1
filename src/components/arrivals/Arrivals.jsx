import "./Arrivals.css"

const Arrivals = ({bg, cart}) => {
  return (
    <div style={{backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="arrivals">
      <h1 className="arrivals--title">New <span>Arrivals</span></h1>
      <div className="arrivals__cart">
        <p className="arrivals__cart--toptext">{cart[0]}</p>
        <h3 className="arrivals__cart--title">{cart[1]}</h3>
        <p className="arrivals__cart--des">{cart[2]}</p>
        <button className="arrivals__cart--btn">{cart[3]}</button>
      </div>
    </div>
  )
}

export default Arrivals
