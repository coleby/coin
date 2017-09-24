import React from 'react';
import axios from 'axios';

class Average extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  pullFromApi() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=CCCAGG')
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
    setInterval(()=> this.pullFromApi(), 10000)
  }

  render() {
    return (
      <div>
        <h1>Average Price: ${this.state.price}</h1>
      </div>
    )
  }
}

export default Average;
