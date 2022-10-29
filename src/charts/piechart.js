export const pieChart=()=>{
return {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        spacingTop: 3,
        height: "80px",
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Energy Sources',
        colorByPoint: true,
        data: [{
            name: 'diesel gen',
            y: 0.67,
            sliced: true,
            selected: true,
        
        }, {
            name: 'Electricity',
            y:95.09,
            sliced: true,
            selected: true
        },]
    }]
  }
}