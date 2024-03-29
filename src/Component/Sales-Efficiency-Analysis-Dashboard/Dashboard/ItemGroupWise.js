import React, { useContext } from 'react'
import API from '../../Utility/API';
import { useEffect, useState } from 'react';
import post from '../../Utility/APIHandle'


import ReactApexChart from 'react-apexcharts';
import { pieOptions } from '../../ChartOptions/Pie';

import BlackDots from '../../Assets/image/Dots.png'
import contex from '../../contex/Contex';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'



export default function ItemGroupWise() {
  const contexData = useContext(contex);
  const [name, setName] = useState([])
  const [weight, setweight] = useState([])
  const [finalarr, setarr] = useState([])

  let inputdata = contexData.state;

  const [flag, setflag] = useState("radialBar")


  function handleclick(e) {
    setflag(e.target.className)
    console.log("effect", e.target.className)
  }

  useEffect(() => {
    getdata()
  }, [inputdata])





  function getdata() {

    inputdata = { ...inputdata, ['Grouping']: 'o.ItemGroupId,o.GroupName' }
    console.log("branchwise data", inputdata);
    post(inputdata, API.CommonChart, {}, 'post')
      .then((res) => {
        let name = [];
        let weight = [];
        let finalarr = [];

        console.log(res.data.lstResult)
        for (let index = 0; index < res.data.lstResult.length; index++) {
          if (res.data.lstResult[index]['GroupName'] === null) {
            name.push("null")
          } else {
            name.push(res.data.lstResult[index]['GroupName'])
          }
          finalarr.push({ x: res.data.lstResult[index]['GroupName'], y: res.data.lstResult[index]['FineWt'] })
          weight.push(res.data.lstResult[index]['FineWt'])
        }
        setName(name)
        setweight(weight)
        setarr(finalarr)
        console.log("itemgroup", weight);
        inputdata = { ...inputdata, ['Grouping']: '' }
      })
  }



  console.log("fffffffffffffinal ", finalarr)



  if (flag === 'treemap') {

    var series =[
      {
        data: finalarr
      }
    ]

    console.log("treemap", finalarr)

    var options = {
      dataLabels: {
        style: {
          colors: '#ffffff'
        },
  			enabled: true
  		},
  		legend: {
  			show: false
  		},
  		chart: {
  			height: 350,
  			type: 'treemap',
  			toolbar: {
  				show: true,
  			},
  		},
  		title: {
  			text: '',
  			align: 'center'
  		},
  		colors: [
  			'#3B93A5',
  			'#F7B844',

  		],
  		plotOptions: {
  			treemap: {
  				distributed: true,
  				enableShades: false,
  				dataLabels: {
  					format: 'scale'
  				}
  			}
  		}
    }
  }

  else if(flag === 'radialBar'){
    console.log("in radiallllllllllll")

  let percarray = []

  let sum = 0;
  for (let i = 0; i < weight.length; i++) {
    sum += weight[i];
  }

  console.log("Summmmm", sum)
  for (let index = 0; index < weight.length; index++) {
    percarray.push((weight[index] / sum) * 100)
  }
  var series = percarray

  console.log("radialllllllbar", percarray)

  var options = {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
        },

      },
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 270,
        dataLabels: {
          name: {
            fontSize: '22px',
          },

          // value: {
          //   formatter: function (val) {
          //     return parseInt(val) + ('%');
          //   },
          //   color: '#111',
          //   fontSize: '16px',
          //   show: true
          // },
          total: {
            show: true,
            label: 'Total',
            // formatter: function (w) {
            //   return 249  
            // }
          }
        }
      }
    },
    labels: name,
  }

  }



  // const series = weight;
  // const options = {
  //   legend:{
  //     position: 'bottom'
  //   },
  //   colors: ['#28568e', '#a8322f', '#6f8d31', '#644788', '#2d97b2', '#2c93ae', '#e97d23'],

  //   chart: {
  //     width: 380,
  //     type: 'pie',
  //   },

  //   labels: name,

  //   dataLabels: {
  //     enabled: true,
  //     textAnchor: 'start',
  //     // formatter: function(val, opt) {
  //     // 	return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
  //     // },
  //     stroke: {
  //       width: 0,
  //     },



  //     responsive: [{
  //       breakpoint: 480,
  //       options: {
  //         chart: {
  //           width: 200
  //         },
  //         legend: {
  //           position: 'bottom'
  //         },

  //       },

  //     }]
  //   }
  // }


  function handleonchangeCurrency() {
    // console.log("innn")
    document.getElementById("myDropdowniconigroup").style.display === "block" ? document.getElementById("myDropdowniconigroup").style.display = "none" : document.getElementById("myDropdowniconigroup").style.display = "block";
  }

  window.onclick = function (event) {
    console.log('matchhhh', event.target.matches('.dropbtn'))
    if (!event.target.matches('.dropbtn') && !event.target.matches('#treemap') && !event.target.matches('#radialBar') && !event.target.matches('#scatter')) {
      // console.log("hii");
      console.log('stateee', document.getElementsByClassName("dropdown-contenticon")[6])
      if (document.getElementsByClassName("dropdown-contenticon")[6] !== undefined) {
        document.getElementsByClassName("dropdown-contenticon")[6].style.display = "none";
      }
    }
  }





  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="graph-card">
        <div href="#" target="_self" className="card-title-graph">
          <p><i className="fas fa-chart-area"></i> Item Group Wise</p>

          {/* <div className='btnicons'>
            <img src={drop} className='dropbtn' onClick={handleonchangeCurrency} id='iconidstate'></img>
            <div id="myDropdowniconigroup" className="dropdown-contenticon" onClick={handleclick}>
              <a className='radialBar'>radial Bar</a><hr className='custom-hr' />
              <a className='treemap'>treemap</a><hr className='custom-hr' />
            </div>
            <i class="fas fa-external-link-alt"></i>
          </div> */}

          <i class="fas fa-external-link-alt"></i>
          
        </div>
        <div className="crancy-progress-card card-contain-graph">
          <ReactApexChart options={options} series={series} type='radialBar' height={390} />
        </div>
      </div>
    </div>
  )
}
