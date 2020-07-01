// 全局变量，用于查询存储在localStorage中的数据
// var KEY = "LOCAL_DATA";

//初始化LocalStorage
function initLocalStorage(){
    if(!getLocalStorage()){
        let data = [];
        data = sourceData1.slice();
        data = JSON.stringify(data); 
        localStorage.setItem(KEY,data)
    }

}
//获得localStorage的值
function getLocalStorage(){
    return JSON.parse(localStorage.getItem(KEY))
}

//更新localStorage的值
function updateLocalStorage(product,region,index,value){
    let localData = getLocalStorage();
    // let dataLength = 0 ;
    // for(let i = 0;i<localData.length;i++){
    //     if(localData[i]["product"] === product 
    //         && localData[i]["region"] === region
    //     ){
    //         dataLength++;
    //     }
    // }
    console.log(index);
    let data= updataSelectLocalStorage(localData,product,region,index,value);
    localStorage.setItem(KEY,JSON.stringify(data))
    sourceData=getLocalStorage() || sourceData1
}


function updataSelectLocalStorage(localData,product,region,index,value){
    console.log('update storage')
    // let times = 0 ; 
    // console.log(localData.length)
    for(let i = 0;i<localData.length;i++){
        if(localData[i]["product"] === product 
            && localData[i]["region"] === region
        ){ 
            // times++;     
            // if(times == length  ){
                localData[i]["sale"][index] = Number(value);
                // console.log(i);
                // console.log(index);
                // console.log(localData[i]["sale"][index]);
                break;
            // }     
           
        }
    }
    return localData;
}