import React from 'react'

class MoreButton extends React.Component {
  clickHandler = () => {
    console.log("You clicked me")
    const start = this.props.start + 4
    const end = this.props.end + 4
    
    this.props.updateState(start, end)
  }
  /* 
  
    let prevEnd = end
    this.setState(
    start: (prevEnd), 
    end: (prevEnd+4)
    )
    
  */

  render() {
    return (
      <button onClick={this.clickHandler}>
        More sushi!
      </button>
    )
  }
}

export default MoreButton