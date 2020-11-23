import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    start: 0,
    end: 4
  }

  updateState = (start, end) => {
    this.setState({
      start: start,
      end: end
    })
  }

  renderSushis = () => {
    return this.props.sushis.slice(this.state.start, this.state.end).map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} tableStack={this.props.tableStack} moneyLeftOver={this.props.moneyLeftOver} />)
  }

  render(){
    
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton start={this.state.start} end={this.state.end} updateState={this.updateState} />
        </div>

      </Fragment>
    )
  }
}

export default SushiContainer