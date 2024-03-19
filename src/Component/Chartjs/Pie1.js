import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'


export default function Pie1() {
    Chart.register(ArcElement);

    // ChartJS.register(
    //     BarElement,
    //     CategoryScale,
    //     LinearScale,
    //     Title,
    //     Tooltip,
    //     Legend,
    // );

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
    };

    return (


        <div className="col-xl-2 col-lg-4 col-md-4 col-12">
            <div className="graph-card">
                <div className="crancy-progress-card top-graph-card">
                    {/* <div className="text-center"> */}

                    <Pie options={config} data={data} width={300} height={300}/>

                    {/* </div> */}
                </div>

            </div>
        </div>


    )
}
