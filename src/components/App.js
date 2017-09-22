import React from 'react';
import Average from './Average.js'
import Bitcoin from './Bitcoin.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bitcoin Price Monitor</h1>
        </div>
        <Average />
        <Bitcoin exchange="BitSquare"/>
        <Bitcoin exchange="Coinbase"/>
        <Bitcoin exchange="Poloniex"/>
        <Bitcoin exchange="Gemini"/>
        <Bitcoin exchange="Bitstamp"/>
        <Bitcoin exchange="Gatecoin"/>
        <Bitcoin exchange="BitTrex"/>
        <Bitcoin exchange="Bitfinex"/>
      </div>
    );
  }
}

export default App;
