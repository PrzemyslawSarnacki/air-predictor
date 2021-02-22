import React from 'react';
import { useD3 } from './hooks/useD3';
import * as d3 from 'd3';
import { Line } from '@reactchartjs/react-chart.js';
import { ChartOptions, ChartData } from 'chart.js'



const LineChart: React.FC<{ labels: Array<[string]>, xdata: Array<[number]> }> = ({ labels, xdata }) => {

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
                label: 'History',
                data: xdata.slice(0,50),
                fill: false,
                backgroundColor: 'rgb(0, 255, 0)',
                pointBorderWidth: 0.1,
                borderWidth: 5,
                borderColor: 'rgba(0, 255, 0, 0.2)',
            },
            {
                label: 'Predictions',
                data: xdata,
                fill: false,
                borderDash: [20, 30],
                pointBorderWidth: 0.1,
                backgroundColor: 'rgb(152, 255, 152)',
                borderColor: 'rgba(152, 255, 152, 0.2)',
            },
        ],
    }

    return (
        <div>
            <Line data={data} options={options} type={'line'} />
        </div>

    );


}

export default LineChart;
