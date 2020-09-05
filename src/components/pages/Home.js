import React, { Component } from 'react'
import Header from '../common/Header'
import image from '../img/header-bg.jpg'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'

class Home extends Component {
     render() {
          return (

               <div><Header
                    title="It's  nice to meet you !"
                    subTitle='Welcome to our studio'
                    buttonText='Tell me More'
                    showButton={true}
                    image={image}
                    link='/services'

               />
                    <Services />
                    <Portfolio />
                    <Contact />
               </div>
          )
     }
}
export default Home