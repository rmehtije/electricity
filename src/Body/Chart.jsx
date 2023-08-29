import React from 'react';
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

function Chart({ electricityPrice }) {

    const data = electricityPrice?.ee.map(
        price => ({ ...price, hour: moment.unix(price.timestamp).format('HH') })
    );

    const now = moment().format('HH');
  
    return (
        <div className="chartContainer">
            <ResponsiveContainer height="100%" width="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <ReferenceLine x={data?.findIndex(({hour}) => hour === now)} stroke={'red'} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
