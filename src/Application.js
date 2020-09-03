import React from 'react'
import HighScore from './HighScore'
import './styles.css'
class Application extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               count: 0,
               overTen: false
          }
     }
     handleClick = () => {
          this.setState({
               count: this.state.count + 1
          })
     }
     resetCount = (e) => {
          console.log(e)
          this.setState({
               count: 0,
               overTen: false
          })
     }
     componentDidUpdate(props, state) {
          if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
               console.log('overten')
               this.setState({ overTen: true })
          }
     }
     render() {
          let { count } = this.state;
          return <div>
               <h1> you clicked {count} times  </h1>
               <HighScore
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
               />
               <span><button onClick={() => this.handleClick()}>Click me</button></span>
          </div>;
     }
}
export default Application