import React from 'react';
import axios from 'axios';

class Coin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  pullFromApi() {
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${this.props.type}&tsyms=USD&e=${this.props.exchange}`)
    .then((response) => {
      const price = response.data['USD']
      this.setState({price})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.pullFromApi()
    setInterval(()=> this.pullFromApi(), 30000)
  }

  render() {
    return (
      <div>
        <h1>{this.props.exchange} Price: ${this.state.price}</h1>
      </div>
    )
  }
}

export default Coin;
