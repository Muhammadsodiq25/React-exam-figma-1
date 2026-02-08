import Blogmain from "../../components/blogMain/Blogmain"
import shopmainBg from '../../assets/shopmain-bg.jpg'
import Blogcontent from "../../components/blogContent/Blogcontent"
import postImg from '../../assets/blogContent-post-img.jpg'

const blogContent__post = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
]

const blogContent__cont = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
        {
        title: 'Lorem ipsum dolor sit amet consectetur ulla pretium.',
        img: postImg,
    },
]

const Blog = () => {
  return (
    <div>
        <Blogmain bg={shopmainBg} title={'Blog'} subtitle={'Home > Blog'}/>
        <Blogcontent posts={blogContent__post} cont={blogContent__cont}/>
    </div>
  )
}

export default Blog
