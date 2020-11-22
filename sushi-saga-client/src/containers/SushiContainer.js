import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    counter: 0,
    clicked: false
  }


  renderSushis = () => {
    return this.props.sushis.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj}/>)
  }

  render(){
    
    return (
      <Fragment>
        <div className="belt">
          <MoreButton />
        </div>

      </Fragment>
    )

  }
}

export default SushiContainer