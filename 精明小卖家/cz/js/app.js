var lineChart = new LineChart();

function init(){
    thead_pro()
    // console.log(regiondata)
    tbody_pro(data_pro(regionSelected,cargoSelected))
}

lineChart.init(data);
bar(data)