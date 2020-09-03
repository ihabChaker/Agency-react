import React from 'react'
import Button from './components/Button'
import './css/styles.css'
class Application extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               current: '0',
               previous: []
          }
     }
     reset = () => { this.setState({ current: '0' }) }
     addToCurrent = (car) => {
          console.log(car)
          this.setState({ current: this.state.current + car })
     }
     render() {
          const buttons = [
               { symbol: 'C', cols: 3, action: this.reset },
               { symbol: '/', cols: 1, action: this.addToCurrent },
               { symbol: '7', cols: 1, action: this.addToCurrent },
               { symbol: '8', cols: 1, action: this.addToCurrent },
               { symbol: '9', cols: 1, action: this.addToCurrent },
               { symbol: '+', cols: 1, action: this.addToCurrent },
               { symbol: '4', cols: 1, action: this.addToCurrent },
               { symbol: '5', cols: 1, action: this.addToCurrent },
               { symbol: '6', cols: 1, action: this.addToCurrent },
               { symbol: '-', cols: 1, action: this.addToCurrent },
               { symbol: '1', cols: 1, action: this.addToCurrent },
               { symbol: '2', cols: 1, action: this.addToCurrent },
               { symbol: '3', cols: 1, action: this.addToCurrent },
               { symbol: '*', cols: 1, action: this.addToCurrent },
               { symbol: '0', cols: 2, action: this.addToCurrent },
               { symbol: '.', cols: 1, action: this.addToCurrent },
               { symbol: '=', cols: 1, action: this.addToCurrent },
          ]
          return (
               <div className="Application">
                    <input className="result" value={this.state.current}></input><br />
                    {buttons.map((btn, i) => {
                         return (
                              <Button key={i} symbol={btn.symbol} col={btn.cols} action={(symbol) => btn.action(symbol)} />
                         )
                    })}
               </div>
          )
     }
}
export default Application