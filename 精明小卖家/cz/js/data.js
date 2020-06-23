function data_pro(region,cargo){
    var regionData=[];
    for(let i=0,len=sourceData.length;i<len;i++){
        if(region.indexOf(sourceData[i]['region'])!==-1  && cargo.indexOf(sourceData[i]['product'])!==-1){
            regionData.push(sourceData[i])
        }
    }
    return regionData
}