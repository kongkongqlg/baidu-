// var region_selAll=document.getElementById('region_selAll'),
//     region_sel=document.getElementById('region_sel').children,
//     cargo_selAll=document.getElementById('cargo_selAll'),
//     cargo_sel=document.getElementById('cargo_sel').children,
//     oTab=document.getElementsByTagName("table")[0],
//     oTHead = oTab.tHead;
//     oTBody = oTab.tBodies[0],
//     regionSelected=['华东'],
//     cargoSelected=['手机'];

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
    // console.log(cargoSelected)
},false)

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
    init()
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
    init()
}