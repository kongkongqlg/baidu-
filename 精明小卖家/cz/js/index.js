var region_selAll=document.getElementById('region_selAll'),
    region_sel=document.getElementById('region_sel').children,
    cargo_selAll=document.getElementById('cargo_selAll'),
    cargo_sel=document.getElementById('cargo_sel').children,
    oTab=document.getElementsByTagName("table")[0],
    oTHead = oTab.tHead;
    oTBody = oTab.tBodies[0],
    regionSelected=['华东'],
    cargoSelected=['手机'],
    effectList=document.getElementById('effectList'),
    main=document.querySelector('svg'),
    colWidth = 650 /25,
    data = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270],
    KEY = "LOCAL_DATA";


