import React, { useEffect, useState } from 'react'


import ReactApexChart from 'react-apexcharts';

import img from '../../Assets/icons8-person-48.png'

export default function PurchasePartyWise() {


	let seriesData = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
	let xaxiscategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	// let imagearr =[]

	const [imagearr,setImageArr] = useState([])

	function imagepoint(){

		let temp = []

		for (let index = 0; index < seriesData.length; index++) {

			temp.push({

				x:xaxiscategories[index],
				y:seriesData[index],
				marker:{
                    size:15,
                },
				image: {
                    path: img,
                }

			})
		}
		setImageArr(temp)
	}

	useEffect(()=>{
		imagepoint()
		console.log(imagearr)
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
          position: 'bottom',
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
            show: true
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            formatter: function (val) {
              return val + "%";
            }
          }
        },

		annotations: {
			points: imagearr
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
