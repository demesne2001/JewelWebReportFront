import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function HbarFilled() {

    const series = [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]

    const options = {
        chart: {
          type: 'bar',
          height: 350,

        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            columnWidth: '5%',
            nodeWidth: 20
            
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        },
        grid: {
            position: 'back',
            column: {
              colors: ['#f2f2f2'],
          }
        }
      }
      
  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" height={410} />
    </>
  )
}
