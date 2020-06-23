var region_selAll=document.getElementById('region_selAll'),
    region_sel=document.getElementById('region_sel').children,
    cargo_selAll=document.getElementById('cargo_selAll'),
    cargo_sel=document.getElementById('cargo_sel').children,
    oTab=document.getElementsByTagName("table")[0],
    oTHead = oTab.tHead;
    oTBody = oTab.tBodies[0],
    regionSelected=['华东'],
    cargoSelected=['手机'];

// console.log(cargo_selAll)

for(let i=0,len=region_sel.length;i<len;i++){
    region_sel[i].addEventListener('change',sel_regionchange)
}

for(let i=0,len=cargo_sel.length;i<len;i++){
    cargo_sel[i].addEventListener('change',sel_cargochange)
}
// console.log(oTBody)
region_selAll.addEventListener('click',function(){                
    for (let i = 0; i < region_sel.length; i++) {//多个选项时
        if(region_sel[i].checked !== this.checked){
            region_sel[i].checked=this.checked
            sel_regionchange.call(region_sel[i])
        }
    }
    // console.log(regionSelected)
},false);

cargo_selAll.addEventListener('click',function(){
    for(let i=0,len=cargo_sel.length;i<len;i++){
        if(cargo_sel[i].checked!==this.checked){
            cargo_sel[i].checked=this.checked
            sel_cargochange.call(cargo_sel[i])
        }
        // cargo_sel[i].checked=this.checked
    }
    console.log(cargoSelected)
},false)

function data_pro(region,cargo){
    var regionData=[];
    for(let i=0,len=sourceData.length;i<len;i++){
        if(region.indexOf(sourceData[i]['region'])!==-1  && cargo.indexOf(sourceData[i]['product'])!==-1){
            regionData.push(sourceData[i])
        }
    }
    return regionData
}

function sel_regionchange(){
    // console.log(this)
    if(this.checked && regionSelected.indexOf(this.value)===-1){
        regionSelected.push(this.value)
    }
    if(!this.checked && region_selAll.checked){
        region_selAll.checked=!region_selAll.checked
    }
    let isallchecked=true
    for(let i=0,len=region_sel.length;i<len;i++){
        if(!region_sel[i].checked){
            isallchecked=false
        }
    }
    if(isallchecked){
        region_selAll.checked='checked'
    }

    if(!this.checked && regionSelected.indexOf(this.value)!==-1){
        let index=regionSelected.indexOf(this.value)
        regionSelected.splice(index,1)
    }
    // var regiondata=region2data(regionSelected)
    // console.log(regionSelected)
    tbody_pro(data_pro(regionSelected,cargoSelected))
}

function sel_cargochange(){
    if(this.checked && cargoSelected.indexOf(this.value)===-1){
        cargoSelected.push(this.value)
    }
    if(!this.checked && cargo_selAll.checked){
        cargo_selAll.checked=!cargo_selAll.checked
    }

    let isallchecked=true
    for(let i=0,len=cargo_sel.length;i<len;i++){
        if(!cargo_sel[i].checked){
            isallchecked=false
        }
    }
    if(isallchecked){
        cargo_selAll.checked='checked'
    }

    if(!this.checked && cargoSelected.indexOf(this.value)!==-1){
        let index=cargoSelected.indexOf(this.value)
        cargoSelected.splice(index,1)
    }
    // var regiondata=region2data(regionSelected)
    // console.log(regionSelected)
    tbody_pro(data_pro(regionSelected,cargoSelected))
}

function thead_pro(){
    var xTr = document.createElement("tr");
    xTr.innerHTML += "<td>地区</td>" +
                    "<td>商品</td>" +
					"<td>1月</td>" +
					"<td>2月</td>" +
                    "<td>3月</td>" +
                    "<td>4月</td>" +
                    "<td>5月</td>" +
                    "<td>6月</td>" +
                    "<td>7月</td>" +
                    "<td>8月</td>" +
                    "<td>9月</td>" +
                    "<td>10月</td>" +
                    "<td>11月</td>" +
                    "<td>12月</td>";
    oTHead.appendChild(xTr);
}

function thead_onecargo(){
    oTHead.innerHTML=''
    var xTr = document.createElement("tr");
    xTr.innerHTML += "<td>商品</td>" +
                    "<td>地区</td>" +
					"<td>1月</td>" +
					"<td>2月</td>" +
                    "<td>3月</td>" +
                    "<td>4月</td>" +
                    "<td>5月</td>" +
                    "<td>6月</td>" +
                    "<td>7月</td>" +
                    "<td>8月</td>" +
                    "<td>9月</td>" +
                    "<td>10月</td>" +
                    "<td>11月</td>" +
                    "<td>12月</td>";
    oTHead.appendChild(xTr);
}

function tbody_pro(region_data){
    if(regionSelected.length===1){
        tbody_oneregion(region_data)
    }else if(cargoSelected.length===1){
        tbody_onecargo(region_data)
    }else{
        oTBody.innerHTML=''
        for(let i=0,len=region_data.length;i<len;i++){
            var xTr = document.createElement("tr"),
                sale=region_data[i]['sale'];
            xTr.innerHTML += "<td>"+region_data[i]['region']+"</td>" +
                            "<td>"+region_data[i]['product']+"</td>" +
                            "<td>"+sale[0]+"</td>" +
                            "<td>"+sale[1]+"</td>" +
                            "<td>"+sale[2]+"</td>" +
                            "<td>"+sale[3]+"</td>" +
                            "<td>"+sale[4]+"</td>" +
                            "<td>"+sale[5]+"</td>" +
                            "<td>"+sale[6]+"</td>" +
                            "<td>"+sale[7]+"</td>" +
                            "<td>"+sale[8]+"</td>" +
                            "<td>"+sale[9]+"</td>" +
                            "<td>"+sale[10]+"</td>" +
                            "<td>"+sale[11]+"</td>";
            oTBody.appendChild(xTr)
        }
    }
}

function tbody_onecargo(region_data){ 
    thead_onecargo()
    oTBody.innerHTML=''
    for(let i=0,len=region_data.length;i<len;i++){
        var xTr = document.createElement("tr"),
            sale=region_data[i]['sale'];
        xTr.innerHTML += "<td>"+region_data[i]['product']+"</td>" +
                        "<td>"+region_data[i]['region']+"</td>" +
                        "<td>"+sale[0]+"</td>" +
                        "<td>"+sale[1]+"</td>" +
                        "<td>"+sale[2]+"</td>" +
                        "<td>"+sale[3]+"</td>" +
                        "<td>"+sale[4]+"</td>" +
                        "<td>"+sale[5]+"</td>" +
                        "<td>"+sale[6]+"</td>" +
                        "<td>"+sale[7]+"</td>" +
                        "<td>"+sale[8]+"</td>" +
                        "<td>"+sale[9]+"</td>" +
                        "<td>"+sale[10]+"</td>" +
                        "<td>"+sale[11]+"</td>";
        oTBody.appendChild(xTr)
    }
    mergeCell('table',1,0,0)
}

function tbody_oneregion(region_data){
    oTBody.innerHTML=''
    for(let i=0,len=region_data.length;i<len;i++){
        var xTr = document.createElement("tr"),
            sale=region_data[i]['sale'];
        xTr.innerHTML += "<td>"+region_data[i]['region']+"</td>" +
                        "<td>"+region_data[i]['product']+"</td>" +
                        "<td>"+sale[0]+"</td>" +
                        "<td>"+sale[1]+"</td>" +
                        "<td>"+sale[2]+"</td>" +
                        "<td>"+sale[3]+"</td>" +
                        "<td>"+sale[4]+"</td>" +
                        "<td>"+sale[5]+"</td>" +
                        "<td>"+sale[6]+"</td>" +
                        "<td>"+sale[7]+"</td>" +
                        "<td>"+sale[8]+"</td>" +
                        "<td>"+sale[9]+"</td>" +
                        "<td>"+sale[10]+"</td>" +
                        "<td>"+sale[11]+"</td>";
        oTBody.appendChild(xTr)
    }
    mergeCell('table',1,0,0)
}

function init(){
    thead_pro()
    // console.log(regiondata)
    tbody_pro(data_pro(regionSelected,cargoSelected))
}

function mergeCell(table1, startRow, endRow, col) {
    var tb = document.querySelector(table1);
    if(!tb || !tb.rows || tb.rows.length <= 0) {
        return;
    }
    if(col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) {
        return;
    }
    if(endRow == 0) {
        endRow = tb.rows.length - 1;
    }
    for(var i = startRow; i < endRow; i++) {
        if(tb.rows[startRow].cells[col].innerHTML == tb.rows[i + 1].cells[col].innerHTML) { //如果相等就合并单元格,合并之后跳过下一行
            tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col]);
            tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1;
        } else {
            mergeCell(table1, i + 1, endRow, col);
            break;
        }
    }
}
