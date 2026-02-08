import "./Blogmain.css"

const Shopmain = ({title, subtitle, bg}) => {
  return (
    <main className='shopmain' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </main>
  )
}

export default Shopmain
