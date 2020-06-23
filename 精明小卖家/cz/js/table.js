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