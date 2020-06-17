var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
arr1.sort(function (a,b) {
    if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
        return 1;
    }
    if (a > b ) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
// console.log(arr);

var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr2.sort(function(a,b){
    if(a.charCodeAt(0)<b.charCodeAt(0)){
        return -1
    }else if(a.charCodeAt(0)===b.charCodeAt(0)){
        return 1
    }else{
        return 0
    }
})
// console.log(arr2)

var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
arr3.sort(function(a,b){
    if(a[1]<b[1]){
        return 1
    }else if(a[1]>b[1]){
        return -1
    }else{
        return 0
    }
})
// console.log(arr3)

var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
arr4.sort(function(a,b){
    if(a['value']<b['value']){
        return -1
    }else if(a['value']>b['value']){
        return 1
    }else{
        return 0
    }
})
// console.log(arr4)

