// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mango: 0, banana: 0}

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="imageContainer">
            <div className="mangoContainer">
              <img
                className="mangoImage"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="mangoButton"
                onClick={this.onMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="mangoContainer">
              <img
                className="mangoImage"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="mangoButton"
                onClick={this.onBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
