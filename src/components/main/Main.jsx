import "./Main.css"

const Main = ({icon, bg, title, des, btn1, btn2}) => {
  
  return (
    <main className="main" style={{display:'flex', flexDirection:'column', gap:'10px', alignItems:'start', padding:'100px', backgroundImage:`url('${bg}')`, backgroundPosition:'center', backgroundSize:"cover"}}>
      <img src={icon} alt=""  style={{marginBottom:"20px"}}/>
      <p className="main--top" style={{fontFamily:'Montserrat, sans-serif', fontWeight:'500', fontSize:'20px', lineHeight:'24px', letterSpacing:'0.15%', color:'white'}}>Bluetooth headphone</p>
      <h1 style={{color:'white', fontFamily:'Montserrat, sans-serif', fontSize:'60px', fontWeight:'700', letterSpacing:'-0.5%'}}>{title}</h1>
      <p style={{color:'#CFCFCF', fontFamily:'Montserrat, sans-serif', fontSize:'14px', fontWeight:'400', lineHeight:'20px', letterSpacing:'0.25%'}}>{des}</p>
      <div style={{border:'1px solid #CFCFCF', borderRadius:'8px', padding:'12px 16px', display:'flex', flexDirection:'column', gap:'10px'}}>
        <p style={{color:'#CFCFCF', fontSize:'14px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', lineHeight:'20px', letterSpacing:'1%'}}>Battery capacity 6 hours - charging box 30 hours</p>
        <p style={{color:'#CFCFCF', fontSize:'14px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', lineHeight:'20px', letterSpacing:'1%'}}>Bluetooth 5.3</p>
        <p style={{color:'#CFCFCF', fontSize:'14px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', lineHeight:'20px', letterSpacing:'1%'}}>Chip H2</p>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'20px', marginTop:'20px'}}>
        <button style={{background:'#00FAEB', fontSize:'16px', fontFamily:'Montserrat, sans-serif', cursor:'pointer', fontWeight:'600', color:'#2E2E2E0', lineHeight:'20px', letterSpacing:'0px', padding:'16px 32px', borderRadius:'8px'}}>{btn1}</button>
        <button style={{background:'#FFFFFF', fontSize:'16px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', cursor:'pointer', lineHeight:'20px', borderRadius:'8px', padding:'16px 32px'}}>{btn2}</button>
      </div>
    </main>
  )
}

export default Main
