// Write your code here
import {Component} from 'react'
import './index.css'

// class RandomNumber extends Component {
//   state = {count: 0}

//   getRandomNumber = () => Math.ceil(Math.random() * 100)

//   onGenerate = () => {
//     const randomNumber = this.getRandomNumber()
//     this.setState(prevState => ({count: randomNumber}))
//   }

//   render() {
//     const {count} = this.state
//     return (
//       <div>
//         <h1>Random Number</h1>
//         <p>Generate a random number in the range of 0 to 100</p>
//         <button type="button" onClick={this.onGenerate}>
//           Generate
//         </button>
//         <p>{count}</p>
//       </div>
//     )
//   }
// }
// export default RandomNumber

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
