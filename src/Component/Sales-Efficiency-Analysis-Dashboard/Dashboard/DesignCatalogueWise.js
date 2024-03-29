import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { patternedPieOptions } from '../../ChartOptions/PatternedPie';
import BlackDots from '../../Assets/image/Dots.png'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import contex from '../../contex/Contex';


export default function DesignCatalogueWise() {

  // const contexData = useContext(contex)

  // const series = [44, 55, 41, 17, 15]

  // const label = ["Comedy", "Action", "SciFi", "Drama", "Horror"]

  // const pieOptions = patternedPieOptions(label)

  // const [postData, setPostData] = useState({
  //   "strBranch": "",
  //   "strState": "",
  //   "strCity": "",
  //   "strItem": "",
  //   "strSubItem": "",
  //   "strItemGroup": "",
  //   "strItemSubitem": "",
  //   "strPurchaseParty": "",
  //   "strSalesParty": "",
  //   "strSaleman": "",
  //   "strProduct": "",
  //   "strDesignCatalogue": "",
  //   "strSaleAging": "",
  //   "strModeofSale": "",
  //   "strTeamModeofSale": "",
  //   "FromDate": "",
  //   "ToDate": "",
  //   "strMetalType": "",
  //   "strDayBook": "",
  //   "PageNo": 0,
  //   "PageSize": 0,
  //   "Search": ""
  // })


  // useEffect(()=>{

	// 	setPostData(contexData.state)

	// },[contexData.state])

	// useEffect(()=>{
	// 	getdata()
	// },[postData])


  // function getdata() {

  //   let temp1 = []

  //   post(postData, API.GetDesignCatalogueWise, 'post')
  //     .then((res) => {

  //       for (let index = 0; index < res.data.lstResult.length; index++) {

  //         temp1.push({

  //         })

  //       }

  //     })
  // }

  // function handledropdownMenu() {
  //   document.getElementById("myDropdownDesign").style.display === "block" ? document.getElementById("myDropdownDesign").style.display = "none" : document.getElementById("myDropdownDesign").style.display = "block";
  // }


  // function handleSelectedChart(num) {
  //   // setBranchWiseChart(num)
  // }

  const contexData = useContext(contex);
	const [name, setName] = useState([])
	const [weight, setweight] = useState([])
	let inputdata = contexData.state;

  useEffect(() => {
		getdata()
	}, [inputdata])

	function getdata() {

        inputdata = { ...inputdata, ['Grouping']: 'j.designCatalogID,j.DesignNo' }
		console.log("branchwise data", inputdata);
		post(inputdata, API.CommonChart, {}, 'post')
			.then((res) => {
				let name = [];
				let weight = [];
				console.log(res.data.lstResult)
				for (let index = 0; index < res.data.lstResult.length; index++) {
					if (res.data.lstResult[index]['DesignNo'] === null) {
						name.push("null")
					} else {
            name.push(res.data.lstResult[index]['DesignNo'])
					}
					weight.push(res.data.lstResult[index]['FineWt'])
				}
				setName(name)
				setweight(weight)
				inputdata = { ...inputdata, ['Grouping']: '' }
			})
    }

    const series = weight;
    const options= {
      legend:{
        position: 'bottom'
      },
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
          },
  
        },
        width: 380,
        type: 'donut',
        dropShadow: {
          enabled: true,
          color: '#111',
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: name,
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
      type: 'pattern',
        opacity: 1,
        pattern: {
          enabled: true,
          style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
        },
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      theme: {
        palette: 'palette2'
      },
      // responsive: [{
      //   breakpoint: 480,
      //   options: {
      //     chart: {
      //       width: 200
      //     },
      //     legend: {
      //       position: 'bottom'
      //     }
      //   }
      // }]
    }

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="graph-card">
        <div href="#" target="_self" className="card-title-graph">
          <p><i className="fas fa-gem"></i>
            Design Catalogue Wise</p>
          <i className="fas fa-external-link-alt"></i>
          {/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownDesign" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Pie</a><hr class="custom-hr" />
          </div> */}
        </div>
        <div className="crancy-progress-card card-contain-graph">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  )
}
