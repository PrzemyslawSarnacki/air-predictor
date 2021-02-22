import React from 'react';
import { useD3 } from './hooks/useD3';
import * as d3 from 'd3';
import { Line } from '@reactchartjs/react-chart.js';
import { ChartOptions, ChartData } from 'chart.js'



const LineChart: React.FC<{labels: Array<[string]>, xdata: Array<[number]>}> = ({labels, xdata}) => {

    const options: ChartOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
      
    const data: ChartData = {
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data: xdata,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }

      return(
        <div>
            <Line data={data} options={options} type={'line'}/>
        </div>

      );


}

export default LineChart;
