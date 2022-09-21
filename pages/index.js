import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <>
      <Navbar/>
<div className="card w-10 m-5" style={{width: '18rem'}}>

  <div className="view overlay">
    <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
      alt="Card image cap"/>
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  <div className="card-body">

    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
      content.</p>
    <a href="#" className="btn btn-primary">Button</a>

  </div>

</div>
    </>
  )
}