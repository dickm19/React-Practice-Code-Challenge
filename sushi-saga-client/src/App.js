import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: []
  }

  componentDidMount(){
    return fetch(API).then(resp=>resp.json()).then(sushis => this.setState({sushiList: sushis}))
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushiList} />
        <Table />
      </div>
    );
  }
}

export default App;