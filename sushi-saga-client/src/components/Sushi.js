import React, {Component} from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({
      eaten: true
    })
  }

  clickHandler = () => {
    if (this.state.eaten === false && this.props.moneyLeftOver - this.props.sushi.price > 0) {
      this.eatSushi()
    // console.log(this.props.sushi)
      this.props.tableStack(this.props.sushi)
    }
  }

  render(){
    const { sushi } =  this.props
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={
               this.clickHandler
               }>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.eaten === true ?
              null
            :
              <img src={sushi.img_url } alt={sushi.name} id={sushi.id} width="100%" />
          }
          {/* {console.log(this.state.eaten)} */}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price} - {sushi.id}
        </h4>
      </div>
    )
  }
}

export default Sushi