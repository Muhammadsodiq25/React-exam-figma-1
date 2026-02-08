import './Apple.css'

const Apple = ({title, bg, left__des, right__title, right__des, btn}) => {
  return (
    <div className='apple' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div className="apple__left">
        <h3>{title}</h3>
        <ul className='apple__left__dess'>
          {
            left__des.map((des,index) => {
              return <li key={index}>
                <p className='apple__let--des'>{des}</p>
              </li>
            })
          }
        </ul>
      </div>
      <div className="apple__right">
        <h3>{right__title}</h3>
        <p>{right__des}</p>
        <button>{btn}</button>
      </div>
    </div>
  )
}

export default Apple
