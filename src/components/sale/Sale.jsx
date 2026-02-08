import "./Sale.css"

const Sale = ({cont}) => {
  return (
    <div className="sale">
      {
        cont.map((cart,index) => {
          return <div className="sale__cart" key={index}>
            <p>{cart.top}</p>
            <h3>{cart.title}</h3>
            <button>{cart.btn}</button>
          </div>
        })
      }
    </div>
  )
}

export default Sale
