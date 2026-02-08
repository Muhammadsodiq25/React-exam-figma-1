import "./Shopping.css"

const Shopping = ({img}) => {
  return (
    <div className="shopping" style={{display:'flex', justifyContent:'space-around', width:'100%', alignItems:'center', marginTop:'100px'}}>
      <img src={img} alt="" style={{width:'100%',}}/>
    </div>
  )
}

export default Shopping
