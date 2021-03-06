import React, {Component} from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({
      eaten: !this.state.eaten
    })
  }

  render(){

    return (
      <div className="sushi">
        <div className="plate" 
             onClick={/* Give me a callback! */ null}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            false ?
              null
            :
              <img src={this.props.sushi.img_url } width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {/* Give me a name! */} - ${/* Give me a price! */}
        </h4>
      </div>
    )

  }
}

export default Sushi