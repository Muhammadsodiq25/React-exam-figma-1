import "./Blogcontent.css"

const Blogcontent = ({posts, cont}) => {
  return (
    <div className="blogcontent">
      <div className="blogcontent__left">
        <div className="shopcontnet__tech">
            <h3 className="shopcontent--title">Categories</h3>
            <div style={{display:'flex', flexDirection:"column", gap:'10px', alignItems:'start'}}>
                <button className="shopcontent__tech--btn">Tips (96)<span>›</span></button>
                <button className="shopcontent__tech--btn">Technology Knowledge (56) <span>›</span></button>
                <button className="shopcontent__tech--btn">News (16) <span>›</span></button>
                <button className="shopcontent__tech--btn">iPad (34) <span>›</span></button>
                <button className="shopcontent__tech--btn">MacBook (54) <span>›</span></button>
                <button className="shopcontent__tech--btn">Laptop (12) <span>›</span></button>
            </div>
        </div>
        <div className="blogcontent__posts">
            <h3 className="shopcontent--title">New Posts</h3>
            {
                posts.map((post,index) => {
                    return <div className="blogcontent__post" key={index}>
                        <div className="blogcontent__post__images">
                            <img src={post.img} alt="" />
                            <button>READ MORE →</button>
                        </div>
                        <div className="blogcontent__post__text">
                            <p>{post.title}</p>
                        </div>
                    </div>
                })
            }
        </div>
      </div>
      <div className="blogcontent__cont">
        {
            cont.map((cart,index) => {
                return <div className="blogcontent__cart" key={index}>
                        <div className="blogcontent__cart__images">
                            <img src={cart.img} alt="" />
                            <button>READ MORE →</button>
                        </div>
                        <div className="blogcontent__cart__text">
                            <p>{cart.title}</p>
                        </div>
                    </div>
            })
        }
      </div>
    </div>
  )
}

export default Blogcontent
