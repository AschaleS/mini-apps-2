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
        this.setState({
          results: response.data,
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
    return (
      <div>
        <div>
          <div style={{ color: "#6200FF", padding: "25px", fontWeight: "bold", background: "#81C784", align: "center" }}>
            <h1>Historical Events Finder</h1>
            <div style={{ padding: "5px", fontWeight: "bold", fontSize: "25px" }}>

              <input onChange={this.handleChange} />
              <input type='Submit' onClick={this.getData} />

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
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            onPageChange={this.handleClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>


      </div>



    )
  }
}

export default App;
