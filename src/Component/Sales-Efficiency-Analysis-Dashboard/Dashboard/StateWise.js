import React from 'react'
import ReactApexChart from 'react-apexcharts';


export default function StateWise() {

	const series = [
		{
		  data: [
			{
			  x: 'New Delhi',
			  y: 218
			},
			{
			  x: 'Kolkata',
			  y: 149
			},
			{
			  x: 'Mumbai',
			  y: 184
			},
			{
			  x: 'Ahmedabad',
			  y: 55
			},
			{
			  x: 'Bangaluru',
			  y: 84
			},
			{
			  x: 'Pune',
			  y: 31
			},
			{
			  x: 'Chennai',
			  y: 70
			},
			{
			  x: 'Jaipur',
			  y: 30
			},
			{
			  x: 'Surat',
			  y: 44
			},
			{
			  x: 'Hyderabad',
			  y: 68
			},
			{
			  x: 'Lucknow',
			  y: 28
			},
			{
			  x: 'Indore',
			  y: 19
			},
			{
			  x: 'Kanpur',
			  y: 29
			}
		  ]
		}
	  ]
	  const options = {
		legend: {
		  show: false
		},
		chart: {
		  height: 350,
		  type: 'treemap',
		  toolbar: {
			show: false,
		},
		},
		title: {
		  text: '',
		  align: 'center'
		},
		colors: [
		  '#3B93A5',
		  '#F7B844',
		  '#ADD8C7',
		  '#EC3C65',
		  '#CDD7B6',
		  '#C1F666',
		  '#D43F97',
		  '#1E5D8C',
		  '#421243',
		  '#7F94B0',
		  '#EF6537',
		  '#C0ADDB'
		],
		plotOptions: {
		  treemap: {
			distributed: true,
			enableShades: false
		  }
		}
	  }
  return (
    <div className="col-lg-4 col-md-6 col-12">
								<div className="graph-card">
									<a href="#" target="_self" className="card-title-graph">
										<p><i className="fas fa-map-marker-alt"></i>
											 State Wise</p>
										<i className="fas fa-external-link-alt"></i>
									</a>
									<div className="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="treemap" height={390} />
									</div>
								</div>
							</div>
  )
}