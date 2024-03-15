import React from 'react'
import ReactApexChart from 'react-apexcharts';

import bracnchh from '../../Assets/image/branchh.png'
import item from '../../Assets/image/item.png'
import salesaginwise from '../../Assets/image/salesaging wise.png'


export default function BranchWise() {

	const series = [76, 67, 61, 90]
	const options = {
		chart: {
			height: 390,
			type: 'radialBar',
		},

		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '30%',
					background: 'transparent',
					image: undefined,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						show: false,
					}
				}
			}
		},
		colors: ['#b55dc4', '#d4d4d4', '#e86867', '#78c37b', '#ffd142'],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
		legend: {
			show: true,
			floating: true,
			fontSize: '16px',
			position: 'right',
			offsetX: 240,
			offsetY: 15,
			labels: {
				useSeriesColors: true,
			},
			markers: {
				size: 0
			},
			formatter: function (seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				vertical: 3
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}]
	}

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="graph-card">
				<a href="#" target="_self" className="card-title-graph">
					<p><i className="fas fa-chart-pie"></i>
						Branch Wise</p>
					<i className="fas fa-external-link-alt"></i>
				</a>
				<div className="crancy-progress-card card-contain-graph">
					<div className="small-images">
						<a href="#" className="active">Option 1</a>
						<a href="#">Option 2</a>
						<a href="#">Option 3</a>
					</div>
					<div id="big-image">
						<div id="chart">
							<ReactApexChart options={options} series={series} type="radialBar" height={390} />
						</div>
						<div id="html-dist"></div>
						{/* <img src={item} alt=""/>
											<img src={salesaginwise} alt=""/> */}

					</div>
				</div>
			</div>
		</div>
	)
}
