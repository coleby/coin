import React from 'react';
import axios from 'axios';

class Bitcoin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  pullFromApi() {
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=${this.props.exchange}`)
    .then((response) => {
      const test = response.data['USD']
      this.setState({test})
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
        <h1>{this.props.exchange} Price: ${this.state.test}</h1>
      </div>
    )
  }
}

export default Bitcoin;
