export const areaChart=()=>{
    return {
        chart: {
            type: 'area',
          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            categories: []
          },
          yAxis: {
            title: {
              text: 'TWh'
            }
          },
          legend:{
y:30
          },
          credits: {
            enabled: false
          },
          series: [{
            name: 'Total production',
            data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
            ]
          }, {
            name: 'Gross consumption',
            data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
            ]
          }]
    }
}