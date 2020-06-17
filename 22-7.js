var scoreArray =[],
    scoreObject = {
        "Tony": {
            "Math": 95,
            "English": 79,
            "Music": 68
        }, 
        "Simon": {
            "Math": 100,
            "English": 95,
            "Music": 98
        }, 
        "Annie": {
            "Math": 54,
            "English": 65,
            "Music": 88
        }
    };
for(let key in scoreObject){
    let tmp=[]
    tmp.push(key)
    for(let score in scoreObject[key]){
        tmp.push(scoreObject[key][score])
    }
    scoreArray.push(tmp)
}
// console.log(scoreArray)

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
var menuObject ={};
for(let value of menuArr){
    if(value[2]<0){
        menuObject[value[0]]=conObject(value)
    }
}
function conObject(item){ 
    var obj={}
    obj.name=item[1]
    for(let val of menuArr){
        if(val[2]===item[0]){
            if(!obj.subMenu){
                obj.subMenu={}
            }
            obj.subMenu[val[0]]=conObject(val)
        }
    }
    return obj
}
console.log(menuObject.toString())