import React, { useEffect } from 'react'


import ReactApexChart from 'react-apexcharts';

import img from '../../Assets/icons8-person-48.png'

export default function PurchasePartyWise() {


	let seriesData = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
	let xaxiscategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	let imagearr =[]

	function imagepoint(){
		for (let index = 0; index < seriesData.length; index++) {
			imagearr.push({
				x:xaxiscategories[index],
				y:seriesData[index],
				marker:{
                    size:15,
                },
				image: {
                    path: img,
                },
			})
			
		}
	}
	useEffect(()=>{
		imagepoint()
	},[])
	const series = [{
        name: 'Inflation',
        data: seriesData
      }]

    const options = {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
		  offsetY: 20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: xaxiscategories,
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: false,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        },
        // annotations: {
        //     points:[{
        //         x:'Feb',
        //         y:3.1,
        //         marker:{
        //             size:15,
        //         },
        //         // label:{
        //         //     text:'XY Point Annotation'
        //         // },
        //         image: {
        //             path: img,
        //           }
        //     }]
        //   }
		// annotations: {
		// 	yaxis: [
		// 	  {
		// 		y: 8800,
		// 	  }
		annotations: {
            points:[
				{
				  x: 'Jan',
				  y: 2.3,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Feb',
				  y: 3.1,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Mar',
				  y: 4,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Apr',
				  y: 10.1,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'May',
				  y: 4,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Jun',
				  y: 3.6,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Jul',
				  y: 3.2,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Aug',
				  y: 2.3,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Sep',
				  y: 1.4,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Oct',
				  y: 0.8,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Nov',
				  y: 0.5,
				  marker: { size: 15 },
				  image: { path: img }
				},
				{
				  x: 'Dec',
				  y: 0.2,
				  marker: { size: 15 },
				  image: { path: img }
				}
			  ]
		}
      }
  return (
    
      <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-people-carry"></i>
											Purchase Party Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="bar" height={350} />
									</div>
								</div>
							</div>
    
  )
}
