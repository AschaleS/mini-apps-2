import React from 'react';


const EventList = (props) => (

  <div>
      {
            props.results.map((result, index) => {
              return (
                <div key={index} >
                  <div>{result.date}</div>
                  <div id={index}>{result.description}</div>
                  <br/>
                  <br/>
                </div>
              )
            })
          }

  </div>
)

export default EventList;