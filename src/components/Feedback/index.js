import {Component} from 'react'

class Feedback extends Component {
  state = {clicked: true}

  clickHandler = () => {
    this.setState({clicked: false})
  }

  render() {
    const {resources} = this.props
    const {clicked} = this.state

    return (
      <div>
        {clicked ? (
          <div>
            <center>
              <div>
                <h1>
                  How satisfied are you with our customer support performance?
                </h1>
                <ul style={{display: 'flex', justifyContent: 'center'}}>
                  {resources.emojis.map(item => (
                    <li key={item.id} style={{margin: '15px'}}>
                      <button onClick={this.clickHandler}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          type="button"
                          style={{height: '100px', width: '100px'}}
                        />
                      </button>
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </center>
          </div>
        ) : (
          <div>
            <img src={resources.loveEmojiUrl} alt="love emoji" />
            <h1>Thank you</h1>
            <p>We will use your feedback to improve</p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
