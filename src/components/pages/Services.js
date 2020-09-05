import React, { Component } from 'react'
import SingleService from '../common/SingleService'
const serv = [
     { title: 'E-commerce', description: 'bschbc cjsncjnscc cscnsjcn', icon: 'fa-shopping-cart' },
     { title: 'Responsive Design', description: 'bschbc cjsncjnscc cscnsjcn', icon: 'fa-laptop' },
     { title: 'Security', description: 'bschbc cjsncjnscc cscnsjcn', icon: 'fa-security' },
]
class Services extends Component {

     render() {
          return (
               <section className="page-section" id="services">
                    <div className="container">

                         <div className="row">
                              <div className="col-lg-12 text-center">
                                   <h2 className="section-heading text-uppercase">Services</h2>
                                   <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                              </div>
                         </div>
                         <div className='row text-center mx-a'>
                              {serv.map((service, index) => {
                                   return <SingleService {...service} key={index} />
                              })}
                         </div>
                    </div>



               </section>
          )
     }
}
export default Services