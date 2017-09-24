import React from 'react';
import Average from './Average.js'
import Coin from './Coin.js'

class BitcoinList extends React.Component {
  render() {
    return (
      <div className="BitcoinList">
        <div className="BitcoinList-header">
          <h1>Bitcoin Price Monitor</h1>
        </div>
        <Average />
        <Coin type="BTC" exchange="BitSquare"/>
        <Coin type="BTC" exchange="Coinbase"/>
        <Coin type="BTC" exchange="Poloniex"/>
        <Coin type="BTC" exchange="Gemini"/>
        <Coin type="BTC" exchange="Bitstamp"/>
        <Coin type="BTC" exchange="Gatecoin"/>
        <Coin type="BTC" exchange="BitTrex"/>
        <Coin type="BTC" exchange="Bitfinex"/>
      </div>
    );
  }
}

export default BitcoinList;
