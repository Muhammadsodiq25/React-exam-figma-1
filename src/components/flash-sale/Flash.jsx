import "./Flash.css"

const Flash = ({title, cont}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'150px', width:'100%', gap:'20px'}}>
      <div style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
        <h2 style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'34px'}}>{title}</h2>
        <div style={{display:'flex', gap:'20px'}}>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>‹</button>
          <button style={{fontSize:'40px', cursor:'pointer', borderRadius:'50px', background:'inherit', color:'black', padding:'10px 20px', paddingTop:'0px'}}>›</button>
        </div>
      </div>
      <div className="flash__cont">
        {
          cont.map((cart,index) => {
            return <div key={index} className="flash--cart">
              <img src={cart.img} alt="" />
              <div style={{display:'flex', flexDirection:'column', alignItems:'start', gap:'20px'}}>
                <h3 className="flash__cart--title">{cart.title}</h3>
                <p className="flash__cart--price">{cart.price}</p>
                <p className="flash--stars">{cart.stars}</p>
                <div className="flash__cart--sold">
                  <p>{cart.sold}</p>
                  <p>{cart.available}</p>
                </div>
                <div>
                  <div className="flash__cart--time" style={{display:'flex', gap:'20px', alignItems:'start'}}>
                    {
                      cart.time.map((t,index) => {
                        return <p className="flash__cart--time--text" style={{alignItems:'center', textAlign:'center', padding:'10px 15px 10px 15px', borderRadius:'8px', background:'#00FAEB'}} key={index}>{t}</p>
                      })
                    }
                  </div>
                  <div style={{display:'flex', gap:'38px', alignItems:'center'}} className="flash__cart--timetext">
                    {
                      cart.timeText.map((t,index) => {
                        return <p key={index}>{t}</p>
                      })
                    }
                  </div>
                </div>
              <button className="flash__cart--btn">{cart.btn}</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Flash
