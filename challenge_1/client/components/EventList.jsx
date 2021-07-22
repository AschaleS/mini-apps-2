import React from 'react';


const EventList = (props) => (

  <div>
    {

      props.results.map((result, index) => {
        let date = result.date
        if(date < 0) {
          date = date * -1 + ' BC'
        } else {
          date =  'AD ' + date
        }
        return (
          <div key={index} >
            <div>{date}</div>
            <div id={index}>{result.description}</div>
            <br />
            <br />
          </div>
        )
      })
    }

  </div>
)

export default EventList;