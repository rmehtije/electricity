import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';
import moment from 'moment';
import { NOW_TIMESTAMP, ELE, GAS } from '../constants';

function Chart({ electricityPrice, activeEnergy, gasPrice }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (!electricityPrice || !gasPrice) return;

        const energy = {
            [ELE]: {
                data: electricityPrice.ee,
                format: 'HH',
            },
            [GAS]: {
                data: gasPrice.common,
                format: 'DD',
            },
        };

        const data = energy[activeEnergy].data.map(data =>
            ({
                ...data,
                interval: moment
                    .unix(data.timestamp)
                    .format(energy[activeEnergy].format)
            })
        );

        setChartData(data);
    }, [electricityPrice, gasPrice, activeEnergy]);

    return (
        <div className="chartContainer">
            <ResponsiveContainer height="100%" width="100%">
                <LineChart
                    data={chartData}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="interval" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <ReferenceLine
                        x={chartData.findIndex(({ timestamp }) => timestamp === NOW_TIMESTAMP)}
                        stroke={'red'}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
