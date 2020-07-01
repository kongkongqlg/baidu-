function thead_pro(){
    oTHead.innerHTML=''
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
    for(let i=0,len=oTHead.rows[0].cells.length;i<len;i++){
        oTHead.rows[0].cells[i].setAttribute("edittype","TextBox")       
        // 注意属性名都最好是小写
    }
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
    for(let i=0,len=oTHead.rows[0].cells.length;i<len;i++){
        oTHead.rows[0].cells[i].setAttribute("edittype","TextBox")
    }
}

function tbody_pro(region_data){
    if(regionSelected.length===1){
        tbody_oneregion(region_data)
    }else if(cargoSelected.length===1){
        tbody_onecargo(region_data)
    }else{
        thead_pro()
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
        for(let i=0,len1=oTBody.rows.length;i<len1;i++){
            for(let j=2,len2=oTBody.rows[0].cells.length;j<len2;j++){
                oTBody.rows[i].cells[j].setAttribute("editstate",'false')
            }
        }
        EditTables(oTab);
    }
    // console.log('tbody_pro')
    // EditTables(oTab);
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
    for(let i=0,len1=oTBody.rows.length;i<len1;i++){
        for(let j=2,len2=oTBody.rows[0].cells.length;j<len2;j++){
            oTBody.rows[i].cells[j].setAttribute("editstate",'false')
        }
    }
    EditTables(oTab);
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
    for(let i=0,len1=oTBody.rows.length;i<len1;i++){
        for(let j=2,len2=oTBody.rows[0].cells.length;j<len2;j++){
            oTBody.rows[i].cells[j].setAttribute("editstate",'false')
        }
    }
    EditTables(oTab);
    mergeCell('table',1,0,0)
}

// function set_ownAtrribute(tablebody){
//     for(let i=0,len1=tablebody.rows.length;i<len1;i++){
//         for(let j=0,len2=tablebody.rows[0].cells.length;j<len2;j++){
//             tablebody.rows[i].cells[j].setAttribute("editstate",'false')
//         }
//     }
// }


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

function mouseoverhandle(ev){
    var event=ev || window.event,
        target= event .target || event .srcElement,
        tmpData=[];
    // data=[]
    // lineChart.init(data)
    if(target.nodeName.toLowerCase() === 'td'){
        var trNode=target.parentNode,
            len=trNode.children.length;
        // console.log(len)
        if(len===14){
            for(let i=2;i<len;i++){
                tmpData.push(Number(trNode.cells[i].textContent))
            }
        }
        if(len===13){
            for(let i=1;i<len;i++){
                tmpData.push(Number(trNode.cells[i].textContent))
            }
        }
    }
    data=tmpData
    // tbody_pro(data)
    lineChart.init(data);
    secbar(data)

}

//设置多个表格可编辑
function EditTables() {
    // console.log('编辑表格')
    for (var i = 0; i < arguments.length; i++) {
        SetTableCanEdit(arguments[i]);
    }
}

//设置表格是可编辑的
function SetTableCanEdit(table) {
    // console.log('设置表格是可编辑的')
    for (var i = 1; i < table.rows.length; i++) {
        // console.log(i)
        SetRowCanEdit(table.rows[i]);
    }
}
 
function SetRowCanEdit(row) {
    for (let j = 2; j < row.cells.length; j++) {
        //如果当前单元格指定了编辑类型，则表示允许编辑
        var editType = row.cells[j].getAttribute("edittype");
        // console.log(row.parentNode.parentNode.rows[0].cells[j].getAttribute("edittype"))
        if (!editType) {
            //如果当前单元格没有指定，则查看当前列是否指定
            editType = row.parentNode.parentNode.rows[0].cells[j].getAttribute("edittype");
        }
        // console.log(editType)
        if (editType) {
            // console.log(row.cells[j])
            row.cells[j].onclick = function () {
                // console.log(j)
                var index=j
                oTBody.removeEventListener('mouseover',mouseoverhandle)
                EditCell(this,index);
            }
            // console.log(row.cells.onclick)
        }
    }
 
}
 
//设置指定单元格可编辑
function EditCell(element, index1) {
    // console.log(element.parentNode.parentNode)
 
    var editType = element.getAttribute("edittype");
    if (!editType) {
        //如果当前单元格没有指定，则查看当前列是否指定
        editType = element.parentNode.parentNode.parentNode.rows[0].cells[element.cellIndex].getAttribute("edittype");
    }
 
    switch (editType) {
        case "TextBox":
            CreateTextBox(element, element.innerHTML,index1);
            break;
        // case "DropDownList":
        //     CreateDropDownList(element);
        //     break;
        default:
            break;
    }
}
 
//为单元格创建可编辑输入框
function CreateTextBox(element, value,index2) {
    //检查编辑状态，如果已经是编辑状态，跳过
    var editState = element.getAttribute("editstate");
    if (editState != "true") {
        //创建文本框
        var textBox = document.createElement('input');
        textBox.type = "text";
        textBox.className = "EditCell_TextBox";
 
 
        //设置文本框当前值
        if (!value) {
            value = element.getAttribute("value");
        }
        textBox.value = value;
 
        //设置文本框的失去焦点事件
        textBox.onblur = function () {
            // console.log(index2)
            let val=this.value,
                pattern=/\d+/,
                patternvoid=/\s*/;
            if(pattern.test(val)){
                CancelEditCell(this.parentNode,this.value,index2);
                // console.log(this.parentNode.parentNode)
                // init(data)
                oTBody.addEventListener('mouseover',mouseoverhandle)
                // this.parentNode.onmouseover()
            }else if(patternvoid.test(val)){
                this.parentNode.setAttribute("value", value);
                this.parentNode.innerHTML=value
            }else{
                // this.focus()
                alert('请输入数字')
            }
            
        }
        //向当前单元格添加文本框
        ClearChild(element);
        element.appendChild(textBox);
        textBox.focus();
        // textBox.select();
 
        //改变状态变量
        element.setAttribute("editstate", "true");
        // element.parentNode.parentNode.setAttribute("CurrentRow", element.parentNode.rowIndex);
    }
}


//取消单元格编辑状态
function CancelEditCell(element, value, index3) {
    // console.log(index3)
    element.setAttribute("value", value);
    // if (text) {
    //     element.innerHTML = text;
    // } else {
        element.innerHTML = value;
    // }
    // console.log(element.innerHTML)
    element.setAttribute("editstate", "false");
    data[index3-2]=value
    lineChart.init(data);
    secbar(data)

    // console.log(value)
    let arr=getregandpro(element),
        region_cell=arr[0],
        product_cell=arr[1];

    updateLocalStorage(product_cell,region_cell,index3-2,value)
}
 
//清空指定对象的所有字节点
function ClearChild(element) {
    element.innerHTML = "";
}


//提取表格的值,JSON格式
function GetTableData(table) {
    var tableData = new Array();
    alert("行数：" + table.rows.length);
    for (var i = 1; i < table.rows.length; i++) {
        tableData.push(GetRowData(tabProduct.rows[i]));
    }
 
    return tableData;
 
}
//提取指定行的数据，JSON格式
function GetRowData(row) {
    var rowData = {};
    for (var j = 0; j < row.cells.length; j++) {
        name = row.parentNode.rows[0].cells[j].getAttribute("Name");
        if (name) {
            var value = row.cells[j].getAttribute("Value");
            if (!value) {
                value = row.cells[j].innerHTML;
            }
 
            rowData[name] = value;
        }
    }
    //alert("ProductName:" + rowData.ProductName);
    //或者这样：alert("ProductName:" + rowData["ProductName"]);
    return rowData;
 
}


function getregandpro(cellelement){
    let res=new Array(2)
    if(regionSelected.length===1 && cargoSelected.length===1){
        res[0]=regionSelected[0]
        res[1]=cargoSelected[0]
    }else if(regionSelected.length!==1 && cargoSelected.length===1){
        if(cellelement.parentNode.cells.length===13){
            res[0]=cellelement.parentNode.cells[0].innerHTML
        }else{
            res[0]=cellelement.parentNode.cells[1].innerHTML
        }
        res[1]=cargoSelected[0]
    }else if(regionSelected.length===1 && cargoSelected.length!==1){
        res[0]=regionSelected[0]
        if(cellelement.parentNode.cells.length===13){
            res[1]=cellelement.parentNode.cells[0].innerHTML
        }else{
            res[1]=cellelement.parentNode.cells[1].innerHTML
        }
    }else{
        res[0]=cellelement.parentNode.cells[0].innerHTML
        res[1]=cellelement.parentNode.cells[1].innerHTML
    }
    return res
}

// function getproduct(cellelement){
//     let res=''
//     if(cargoSelected.length===1){
//         res=cargoSelected[0]
//     }else if(cargoSelected.length!==1  && regionSelected.length===1){
//         res=cellelement.parentNode.cells[0].innerHTML
//     }else{
//         res=cellelement.parentNode.cells[1].innerHTML
//     }
//     return res
// }

// reference:https://blog.csdn.net/easybjy/article/details/7696498