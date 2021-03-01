import React, { useEffect, useState } from 'react';
import { Line } from '@reactchartjs/react-chart.js';
import { ChartOptions, ChartData } from 'chart.js'
import { csv } from 'd3';

var xdata: Array<[number]> = [];
var xlabels: Array<[string]> = [];

const LineChart: React.FC<{ city: string }> = ({ city }) => {

    const [dataLabels, setDataLabels] = useState<Array<[string]>>([]);
    const [dataValues, setDataValues] = useState<Array<[number]>>([]);

    const options: ChartOptions = {
        elements: {
            point: {
                radius: 0
            }
        },
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
        labels: dataLabels,
        datasets: [
            {
                label: 'History',
                data: dataValues.slice(0, 50),
                fill: false,
                backgroundColor: 'rgb(0, 255, 0)',
                pointBorderWidth: 0.1,
                borderWidth: 5,
                borderColor: 'rgba(0, 255, 0, 0.2)',
            },
            {
                label: 'Predictions',
                data: dataValues,
                fill: false,
                pointBorderWidth: 0.1,
                backgroundColor: 'rgb(152, 255, 152)',
                borderColor: 'rgba(152, 255, 152, 0.2)',
            },
        ],
    }

    const row = (d: any) => {
        d.y_pred = +d.y_pred;
        d.y_pred_std = +d.y_pred_std;
        d.aqi = +d.aqi;
        d.errors = +d.errors;
        return d;
    };

    const getPredictionData = (city: string) => csv(`https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/history-${city}.csv`, row).then(
        (data) => {
            data.forEach((row) => xlabels.push(row[""]));
            data.forEach((row) => xdata.push(row["y_pred"]));
            setDataLabels(xlabels);
            setDataValues(xdata);
        }
    );

    const getHistoricData = (city: string) => csv(`https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/prediction-${city}.csv`, row).then(
        (data) => {
            data.forEach((row) => xlabels.push(row[""]));
            data.forEach((row) => xdata.push(row["aqi"]));
        }
    );

    useEffect(() => {
        xlabels = [];
        xdata = [];
        getHistoricData(city);
        getPredictionData(city);
    }, [city]);



    return (
        <div>
            <Line data={data} options={options} type={'line'} />
        </div>

    );


}

export default LineChart;
