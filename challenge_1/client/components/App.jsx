import React from 'react';
import axios from 'axios';
import EventList from './EventList.jsx';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      term: '',
      results: []
    }

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  getData() {
    axios.get(`/events`)
    .then((response) => {
      this.setState({
        results: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    return(
      <div style={{padding: "25px"}}>
          <h1>Historical Events Finder</h1>
      <div style={{padding: "5px", fontWeight:"bold", fontSize: "25px"}}>

        <input onChange={this.handleChange}/>
        <input type='Submit' onClick={this.getData}/>
        < EventList results={this.state.results} />
      </div>
      </div>

    )
  }
}

export default App;
