import React from 'react'
import '../css/styles.css'
class Button extends React.Component {

     render() {
          return (
               <div className={`column-${this.props.col}`}>
                    <button className="calc-btn" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
               </div>
          )
     }
}
export default Button