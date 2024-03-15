import React from 'react'
import ReactApexChart from 'react-apexcharts';



export default function Piegraph1() {

    const series = [44, 55]
    
    const options = {
              chart: {
                type: 'donut',
              },
              colors:['#8458b0','#da3e00'],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      name: {
                        
                      },
                      value: {
                    
                      }
                    }
                  }
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
    return (


        <div className="col-xl-2 col-lg-4 col-md-4 col-12">
            <div className="graph-card">
                <div className="crancy-progress-card top-graph-card">
                    <div className="text-center">
                        
                    <ReactApexChart options={options} series={series} type="donut"  />
                    </div>
                </div>

            </div>
        </div>
    )
}
