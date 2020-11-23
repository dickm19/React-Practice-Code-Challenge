import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    eatenSushi: [],
    moneyLeftOver: 100
  }

  componentDidMount(){
    return fetch(API).then(resp=>resp.json()).then(sushis => this.setState({sushiList: sushis}))
  }
   
  tableStack = (sushiObj) => {
    //for every eaten sushi, add to an array
    this.setState((prevState) => ({
      eatenSushi: [...prevState.eatenSushi, sushiObj],
      moneyLeftOver: prevState.moneyLeftOver - sushiObj.price
    }))
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer
        tableStack={this.tableStack}
        sushis={this.state.sushiList}
        moneyLeftOver={this.state.moneyLeftOver}
        />
        {console.log(this.state.eatenSushi)}
        <Table eatenSushi={this.state.eatenSushi} moneyLeftOver={this.state.moneyLeftOver} />
      </div>
    );
  }
}

export default App;