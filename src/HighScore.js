import React from 'react'

class HighScore extends React.Component {
     render() {
          if (this.props.overTen) {
               return (
                    <h2>
                         Beat high score of 10
                         <button onClick={this.props.onReset}>Reset</button>
                    </h2>
               )
          } else {
               return null;
          }
     }
}
export default HighScore