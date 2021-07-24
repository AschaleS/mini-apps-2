import React from 'react';
import Chart from 'chart.js';


class ChartJS extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
   const props = this.props.result;
    let ctx = document.getElementById("myChart");
    let myChart = new Chart (ctx, {
      type: 'line',
      data: {
        labels: props.date,
        datasets: [{
            label: 'Value in USD',
            data: props.price,
            backgroundColor: '#fef7e4',
            borderColor: '#fa9705',
            borderWidth: 1.5
        }]
    }
 });
}

  render() {
    return (
      <div>
        <canvas id="myChart" ></canvas>
      </div>
    )
  }

}

export default ChartJS;