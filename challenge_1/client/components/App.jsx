import React from 'react';
import axios from 'axios';
import EventList from './EventList.jsx';
import ReactPaginate from 'react-paginate';
import './style.scss';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      term: '',
      results: [],
      totalCount: 0
    }

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  getData() {
    axios.get(`/events?q=${this.state.term}&_page=1&_limit=10`)
      .then((response) => {
        let count = response.headers["x-total-count"];
        this.setState({
          results: response.data,
          totalCount: count
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }



  handleClick(event) {
    axios.get(`/events?q=${this.state.term}&_page=${event.selected + 1}&_limit=10`)
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
    if (this.state.results.length === 0) {
      return (
        <div style={{ color: "#511904", padding: "35px", fontWeight: "bold", background: "#0b96a8", textAlign: "center" }}>
          <h1>Historical Events Finder</h1>
          <div style={{ color: "#040e13", padding: "35px", fontWeight: "bold", fontSize: "30px", textAlign: "left" }}>

            Enter a serach key here:<input style={{ width: "300px", height: "30px", fontSize: "22px" }} onChange={this.handleChange} />
            <button style={{ fontSize: "14px", fontWeight: "bold", height: "35px" }} onClick={this.getData}> Get Events </button>

          </div>
        </div>)
    } else {
      return (
        <div>
          <div>
            <div style={{ color: "#511904", padding: "35px", fontWeight: "bold", background: "#0b96a8", textAlign: "center" }}>
              <h1>Historical Events Finder</h1>
              <div style={{ color: "#040e13", padding: "35px", fontWeight: "bold", fontSize: "30px", textAlign: "left" }}>

                Enter a serach key here:<input style={{ width: "300px", height: "30px", fontSize: "22px" }} onChange={this.handleChange} />
                <button style={{ fontSize: "14px", fontWeight: "bold", height: "35px" }} onClick={this.getData}> Get Events </button>

              </div>
            </div >
            <div style={{ padding: "15px" }}>
              < EventList results={this.state.results} />
            </div>

          </div>
          <div id="react-paginate">
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={Math.ceil(this.state.totalCount / 10)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>


        </div>



      )
    }

  }
}

export default App;
