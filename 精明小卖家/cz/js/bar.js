function bar(data){
    // 
    // var colWidth = 650 / (2 * data.length + 1);
    var y = 50;
    var sale = 400;
    for (var i = 0; i < 3; i++) {
        y += 100;
        sale -= 100;
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        var text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        line.setAttribute('x1', '50');
        line.setAttribute('y1', y);
        line.setAttribute('x2', '55');
        line.setAttribute('y2', y);
        line.setAttribute('stroke', "#000");
        text1.setAttribute('x', '20');
        text1.setAttribute('y', y+5);
        text1.innerHTML = sale;
        main.appendChild(line);
        main.appendChild(text1);
    }

    for (var i = 0; i < data.length; i++) {
        var d = data[i]; //遍历每个数据对象
        var cw = colWidth; //柱子的宽
        var ch = d; //柱子的高
        var x = (2 * i + 1) * colWidth + 50;
        var y = 450 - ch;
        //动态添加渐变对象
        var c = rc(); //渐变颜色
        
        //样式列表
        effectList.innerHTML += `
    <linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0" stop-color="${c}"></stop>
        <stop offset="100%" stop-color="${c}" stop-opacity="0"></stop>
    </linearGradient>`;

        //动态创建矩形
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', cw);
        rect.setAttribute('height', ch);
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('fill', `url(#g${i})`);
        main.appendChild(rect);

        // 动态添加数据具体项名称
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', (2 * i + 1) * colWidth + 50);
        text.setAttribute('y', 470);
        text.innerHTML = (i+1)+'月';
        main.appendChild(text);

        // 动态添加数据具体项的值
        var val = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        val.setAttribute('x', x );
        val.setAttribute('y', y - 5);
        val.innerHTML = data[i];
        main.appendChild(val);

    }

    // 设置y轴刻度

    // 随机颜色
}

function rc() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

function secbar(data){
    var childs=main.children,
        index=0,
        i=9; 

    while(i>=9 && i<=44){
        // let x = (2 * i + 1) * colWidth + 50;
        let y = 450 - data[index];
        // let x=(2 * i + 1) * colWidth + 50,
        //     y=450-data[index];

        main.children[i].setAttribute('height',data[index])
        main.children[i].setAttribute('y',y)
        main.children[i+2].innerHTML = data[index]
        main.children[i+2].setAttribute('y',y-5)

        i+=3
        index+=1
    }
}