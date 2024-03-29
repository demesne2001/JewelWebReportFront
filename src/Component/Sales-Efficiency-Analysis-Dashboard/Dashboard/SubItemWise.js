import React, { useContext } from 'react'

import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import { useEffect, useState } from 'react';


import ReactApexChart from 'react-apexcharts';
import RoundedBar from '../../CustomCharts/RoundedBar';

import BlackDots from '../../Assets/image/Dots.png'

import { rounBarOptions } from '../../ChartOptions/RoundedBar';
import contex from '../../contex/Contex';
import drop from '../../Assets/img/svg/dropdown.svg'
import '../../Assets/css/Custom.css'

export default function SubItemWise() {

  const contexData = useContext(contex);
  const [name, setName] = useState([])
  const [weight, setweight] = useState([])
  let inputdata = contexData.state;

  const [flag, setflag] = useState("bar")


  function handleclick(e) {
    console.log('aaaaaa', e.target.id)
    setflag(e.target.id)
  }




  useEffect(() => {
    getdata()
  }, [inputdata])

  function getdata() {

    inputdata = { ...inputdata, ['Grouping']: 'e.subitemID,e.subItemName' }
    console.log("branchwise data", inputdata);
    post(inputdata, API.CommonChart, {}, 'post')
      .then((res) => {
        let name = [];
        let weight = [];
        console.log(res.data.lstResult)
        for (let index = 0; index < res.data.lstResult.length; index++) {
          if (res.data.lstResult[index]['subItemName'] === null) {
            name.push("null")
          } else {
            name.push(res.data.lstResult[index]['subItemName'])
          }
          weight.push(res.data.lstResult[index]['FineWt'])
        }
        setName(name)
        setweight(weight)
        inputdata = { ...inputdata, ['Grouping']: '' }
      })
  }


  if (flag === 'bar') {
    var series = [{
      name: 'Weight',
      data: weight
    }]

    var options = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: '15',
          borderRadiusApplication: 'end',
          dataLabels: {
            position: 'top', // top, center, bottom
          },

        },
      },
      colors: ['#07b1f7'],
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val;
        },
        offsetY: -35,
        style: {
          fontSize: '14px',
          colors: ["#87CEEB"],
          // colors: ['#b55dc4', '#d4d4d4', '#e86867', '#78c37b', '#ffd142']
        },
        background: {
          enabled: true,
          foreColor: '#304758',
          borderRadius: 10,
          padding: 6,
          opacity: 1,
          borderWidth: 0,
          borderColor: ''
        }
      },

      xaxis: {
        categories: name,
        labels: {
          show: true,
          formatter: function (val) {
            
            if (val.length > 7) {
              return val.slice(0, 6) + "..."
            } else {
              return val
            }
          }
        },
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
          enabled: true,
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
          show: true,
          formatter: function (val) {
            return val;
          }
        }
      },
    }
  }


  else {
    var series = weight

    var options = {
      chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: name,
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
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
			],
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
     
    }
  }


  function handleonchangeCurrency() {
    console.log("innn")
    document.getElementById("myDropdowniconsubitem").style.display === "block" ? document.getElementById("myDropdowniconsubitem").style.display = "none" : document.getElementById("myDropdowniconsubitem").style.display = "block";
  }

  window.onclick = function (event) {
    
    if (!event.target.matches('.dropbtn') && !event.target.matches('#donut') && !event.target.matches('#radialBar') && !event.target.matches('#bar') && !event.target.matches('#donut')) {
      // console.log("hii");
      if (document.getElementsByClassName("dropdown-contenticon")[5] !== undefined) {
        document.getElementsByClassName("dropdown-contenticon")[5].style.display = "none";
      }

    }
  }



  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="graph-card">
        <div className="card-title-graph">
          <p><i className="fas fa-th-list"></i>
            Sub-Item Wise</p>
          {/* <div className='btnicons'>
            <img src={drop} className='dropbtn' onClick={handleonchangeCurrency} id='iconidcity'></img>

            <div id="myDropdowniconsubitem" className="dropdown-contenticon" onClick={handleclick}>
              <a id='bar' >Bar </a><hr className='custom-hr' />
              <a id='polarArea' >polar area</a><hr className='custom-hr' />
              <a id='bar' >Heatmap</a><hr className='custom-hr' />
              <a id='bar' >chart</a><hr className='custom-hr' />
            </div>
            <i class="fas fa-external-link-alt"></i>
          </div> */}

          <i class="fas fa-external-link-alt"></i>
        </div>



        <div className="crancy-progress-card card-contain-graph">
          {/* <ReactApexChart options={options} series={series} type="polarArea" height={390} /> */}
          {/* <RoundedBar/> */}
          <ReactApexChart options={options} series={series} type={flag} height={350} />
        </div>
      </div>
    </div>
  )
}
