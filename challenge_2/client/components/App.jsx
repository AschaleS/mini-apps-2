import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';



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
      console.log(response)
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

      return (
        <div>
          <h1 style={{textAlign: "center"}}>Cryptocurrency Charting Tool</h1>
                    <p style={{textAlign: "center"}}>Chart Data will be displayed here</p>
          <h4 style={{textAlign: "center"}}>Powered by CoinDesk</h4>
        </div>
      )
    }
}
export default App;
