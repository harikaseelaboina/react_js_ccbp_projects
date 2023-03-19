// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {data: ''}

  changeHandler = e => {
    this.setState({data: e.target.value})
  }

  render() {
    const {data} = this.state

    return (
      <div className="maindiv container">
        <div className="row ">
          <div
            className="col-6"
            style={{marginTop: '5rem', paddingRight: '5rem'}}
          >
            <h1>
              Calculate the
              <br></br> Letters you Enter
            </h1>
            <br></br>
            <label for="inputid">Enter the phrase</label>
            <br></br>
            <input
              id="inputid"
              type="text"
              value={data}
              onChange={this.changeHandler}
            />
            <p>No.of letters: {data.length}</p>
          </div>

          <div className="col-6" style={{marginTop: '5rem'}}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              style={{width: '30rem'}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
