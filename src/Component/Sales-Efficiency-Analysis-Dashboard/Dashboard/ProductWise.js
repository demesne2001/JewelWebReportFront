import React,{useContext} from 'react'
import contex from '../../contex/Contex';
import ReactApexChart from 'react-apexcharts';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Radialbar from '../../Radialbar/Radialbar'
import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API';
import { useEffect,useState } from 'react';
import post from '../../Utility/APIHandle'



export default function ProductWise() {

	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownProduct").style.display === "block" ? document.getElementById("myDropdownProduct").style.display = "none" : document.getElementById("myDropdownProduct").style.display = "block";
	// }

	// function handleSelectedChart(num) {
	// 	// setBranchWiseChart(num)
	// }
	const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

	useEffect(() => {
		getdata()
	}, [inputdata])

    function getdata() {

		inputdata = { ...inputdata, ['Grouping']: 'i.ProductId,i.ProductName' }
		console.log(inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['ProductName'] === null) {
						name.push("null")
					} else {
						name.push(res.data.lstResult[index]['ProductName'])
					}
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				console.log("product name",name)
				console.log("product weight", weight);
			})
    }
	
	// function handledropdownMenu() {
	// 	document.getElementById("myDropdownCity").style.display === "block" ? document.getElementById("myDropdownCity").style.display = "none" : document.getElementById("myDropdownCity").style.display = "block";
	// }
	
	

	// function handleSelectedChart(num) {
	// 	// setBranchWiseChart(num)
	// }
	const series = [{
		data: weight
	  }]
	  const options = {
		colors : ['#003fad'],
		chart: {
		  type: 'bar',
		  height: 350
		},
		plotOptions: {
		  bar: {
			borderRadius: 4,
			horizontal: true,
		  }
		},
		dataLabels: {
			enabled: false,
		  },
		
		xaxis: {
		  categories: name,
		}
	  }
	return (
		<div class="col-lg-4 col-md-6 col-12">
			<div class="graph-card">
				<div href="#" target="_self" class="card-title-graph">
					<p><i class="fas fa-boxes"></i>
						Product Wise </p>
					<i class="fas fa-external-link-alt"></i>
					{/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
						<img src={BlackDots} className='dropbtn' />
					</p>
					<div id="myDropdownProduct" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
						<a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
						<a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
					</div> */}
				</div>
				<div class="crancy-progress-card card-contain-graph">

					{/* <ParentSize>{({ width, height }) => <Radialbar width={width} height={350} />}</ParentSize> */}
					<ReactApexChart options={options} series={series}  type="bar" height={390} />
				</div>
			</div>
		</div>
	)
}
