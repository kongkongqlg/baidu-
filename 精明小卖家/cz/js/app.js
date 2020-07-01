var lineChart = new LineChart();

function firstinit(){
    thead_pro()
    // console.log(regiondata)
    tbody_pro(data_pro(regionSelected,cargoSelected))
    lineChart.init(data);
    bar(data)
}  

function init(){
    thead_pro()
    // console.log(regiondata)
    tbody_pro(data_pro(regionSelected,cargoSelected))
    lineChart.init(data);
    secbar(data)

}



localStorage.clear()
initLocalStorage()
sourceData=getLocalStorage() || sourceData1
// EditTables(oTab)





// lineChart.init(data);
// bar(data)

