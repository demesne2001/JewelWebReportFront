import React, { useContext, useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import img from '../../Assets/icons8-person-48.png'
import API from '../../Utility/API';
import post from '../../Utility/APIHandle'
import contex from '../../contex/Contex';
import '../../Assets/css/Custom.css'



export default function PurchasePartyWise() {


  // const contexData = useContext(contex)

  // let seriesData = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  // let xaxiscategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // let imagearr =[]

  const [imagearr, setImageArr] = useState([])

  const [flag, setflag] = useState("bar")
  const [check, setcheck] = useState("bar")


  function handleclick(e) {
    setflag(e.target.id)
    setcheck(e.target.className)
  }


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

  //   post(postData, API.GetPurchasePartywise, 'post')
  //     .then((res) => {

  //       for (let index = 0; index < res.data.lstResult.length; index++) {

  //         temp1.push({

  //         })

  //       }

  //     })
  // }

  const contexData = useContext(contex);
  const [name, setName] = useState([])
  const [weight, setweight] = useState([])
  let inputdata = contexData.state;

  useEffect(() => {
    getdata()

  }, [inputdata])
  useEffect(() => {
    imagepoint()

  }, [imagearr])

  function getdata() {

    inputdata = { ...inputdata, ['Grouping']: 'g.DesigncodeID,g.DesignCode' }
    console.log("branchwise data", inputdata);
    post(inputdata, API.CommonChart, {}, 'post')
      .then((res) => {
        let name = [];
        let weight = [];
        console.log(res.data.lstResult)
        for (let index = 0; index < res.data.lstResult.length; index++) {
          if (res.data.lstResult[index]['DesignCode'] === null) {
            name.push("null")
          } else {
            name.push(res.data.lstResult[index]['DesignCode'])
          }
          weight.push(res.data.lstResult[index]['FineWt'])
        }
        setName(name)
        setweight(weight)
        console.log("itemgroup", weight);
        inputdata = { ...inputdata, ['Grouping']: '' }
      })
  }

  function imagepoint() {

    let temp = []

    for (let index = 0; index < weight.length; index++) {

      temp.push({

        x: name[index],
        y: weight[index],
        marker: {
          size: 15,
        },
        image: {
          path: img,
        }

      })
    }
    // setImageArr(temp)
  }


  if (flag === 'barl') {
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
					horizontal: false,
					columnWidth: '5%',
					borderRadius: 1,
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
				offsetY: -18,
				style: {
					fontSize: '14px',
					colors: ["#25e1fa"],
				},
				background: {
					enabled: true,
					foreColor: '#000000',
					padding: 10,
					borderRadius: 50,
					borderWidth: 2,
					borderColor: '#26a0fc',
					opacity: 1,

				}
			},

			xaxis: {
				categories: name,
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
					show: false,
					formatter: function (val) {
						return val;
					}
				}

			},
      annotations: {
        points: undefined,
        tooltip: {
          enabled: false,
        }
      }
		}
  }

  else if (flag === 'bar') {

    var series = [{
      data: weight
    }]

    var options = {
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
        enabled: false,
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
        categories: name,
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
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
            return val;
          }
        }
      },

      annotations: {
        // points: imagearr,
        tooltip: {
          enabled: true,
        }
      }
    }

  }

  // function handledropdownMenu() {
  //   document.getElementById("myDropdownPurchase").style.display === "block" ? document.getElementById("myDropdownPurchase").style.display = "none" : document.getElementById("myDropdownPurchase").style.display = "block";
  // }

  // function handleSelectedChart(num) {
  //   // setBranchWiseChart(num)
  // }

  function handleonchangeCurrency() {
    console.log("innn")
    document.getElementById("myDropdowniconPurchase").style.display === "block" ? document.getElementById("myDropdowniconPurchase").style.display = "none" : document.getElementById("myDropdowniconPurchase").style.display = "block";
  }

  window.onclick = function (event) {
    console.log('evennnn', event.target.className)

    if (!event.target.matches('.dropbtn') && !event.target.matches('#donut') && !event.target.matches('#radialBar') && !event.target.matches('#bar')) {
      // console.log("hii");
      console.log('branchhh', document.getElementsByClassName("dropdown-contenticon")[7])
      if (document.getElementsByClassName("dropdown-contenticon")[7] !== undefined) {
        document.getElementsByClassName("dropdown-contenticon")[7].style.display = "none";
      }
    }
  }


  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="graph-card">
        <div href="#" target="_self" className="card-title-graph">
          <p><i className="fas fa-people-carry"></i>
            Purchase Party Wise</p>
          {/* <div className='btnicons'>
            <img src={drop} className='dropbtn' onClick={handleonchangeCurrency}></img>

            <div id="myDropdowniconPurchase" className="dropdown-contenticon" onClick={handleclick}>
              <a id='bar' className='bar'>bar</a><hr className='custom-hr' />
              <a id='barl' className='bar'>lollipop chart </a><hr className='custom-hr' />
            </div>
            <i class="fas fa-external-link-alt"></i>
          </div> */}

          <i class="fas fa-external-link-alt"></i>
          {/* <p class="geex-content__header__quickaction__link  geex-btn__customizer dots" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu} >
            <img src={BlackDots} className='dropbtn' />
          </p>
          <div id="myDropdownPurchase" class="dropdown-content" onMouseEnter={handledropdownMenu} onMouseLeave={handledropdownMenu}>
            <a id='option1' onClick={() => handleSelectedChart(1)}>Tree Map</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(2)}>Radial Bar</a><hr class="custom-hr" />
            <a id='option2' onClick={() => handleSelectedChart(3)}>Semi Doughnut</a><hr class="custom-hr" />
          </div> */}
        </div>
        <div className="crancy-progress-card card-contain-graph">
          <ReactApexChart options={options} series={series} type={check} height={350} />
        </div>
      </div>
    </div>
  )
}
