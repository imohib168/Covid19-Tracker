import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: '',
    datasets: [{}, {}],
};

// export default React.createClass({
//     displayName: 'DoughnutExample',

//     render() {
//         return (
//         );
//     }
// });

export default function Pie() {
    return (
        <div>
            <h2>Doughnut Example</h2>
            <Doughnut data={data} />
        </div>
    )
}