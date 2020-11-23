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
    const { sushi } =  this.props
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={/* Give me a callback! */ null}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            false ?
              null
            :
              <img src={sushi.img_url } alt={sushi} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price} - {sushi.id}
        </h4>
      </div>
    )

  }
}

export default Sushi