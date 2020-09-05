import React from 'react'
import PageWraper from './components/PageWraper'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class Application extends React.Component {


     render() {

          return (
               <Router>
                    <PageWraper>

                         <Route
                              exact={true}
                              path="/"
                              component={Home}
                         />

                         <Route
                              path="/about"
                              component={About}
                         />
                         <Route
                              path="/contact"
                              component={Contact}
                         />

                    </PageWraper>
               </Router>
          )
     }
}
export default Application