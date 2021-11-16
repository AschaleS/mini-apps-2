import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import ChartJs from './ChartJS.jsx';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      date: [],
      price: []
    }
  }
  componentDidMount() {
    axios.get('/priceData')
    .then((response) => {
      this.setState({
       date: Object.keys(response.data.bpi),
       price: Object.values(response.data.bpi)
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }



  render() {
    if (this.state.date.length === 0) {
      return "Bitcoin Price Index Data is not Availavle";
    } else {
      return (
        <div>
          <h1 style={{textAlign: "center"}}>Bitcoin Price Index</h1>
          <ChartJs result={this.state} />
          <h4 style={{textAlign: "center"}}> Powered by <a style={{textDecoration: "none"}} href={'https://www.coindesk.com/price/bitcoin'} > CoinDesk </a> </h4>
        </div>
      )
    }
  }
}
export default App;
