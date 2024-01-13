// app.js
define(['axios'], function (axios) {
    // // 在这里编写您的应用程序逻辑
    // axios.get('http://zmapp.tf/api/smapp/schedule/getDoctor?doctorCode=iTLeeXoUvIEqbgCFzjk1000047&deptCode=A05.01.001').then(res => {
    //     console.log(res.data);
    //     document.body.innerHTML = JSON.stringify(res.data);
    // })

    // $('body').css('background-color', 'red');
    // $('body').css('color', 'white');


    // console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    const obj = {
        index() {
            console.log("add..............");
            $('body').css('background-color', 'skyblue');
            // $('body').css('color', 'white');
        },
        other() {
            console.log("other..............");
            axios.get('http://zmapp.tf/api/smapp/schedule/getDoctor?doctorCode=iTLeeXoUvIEqbgCFzjk1000047&deptCode=A05.01.001').then(res => {
                console.log(res.data);
                Object.entries(res.data.data).forEach(item => {
                    $("body").append(`<div>${item[0]}:${item[1]}</div>`);
                })
            })
        },
        canvas() {
            const canvas = document.createElement('canvas');
            // 获取 2D 渲染上下文
            var ctx = canvas.getContext('2d');

            // 绘制矩形
            ctx.fillStyle = '#FF0000'; // 设置填充颜色为红色
            ctx.fillRect(0, 0, 100, 100); // 绘制矩形，起始坐标 (10, 10)，宽度 100，高度 50
            ctx.fillStyle = '#ffffff'; // 设置填充颜色为蓝色
            ctx.fillText('Hello World多多的', 0, 10); // 绘制文字，起始坐标 (10, 50)


            document.body.appendChild(canvas);

        },
        getUrlParam(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
            let url = window.location.href.split('#')[0]
            let search = url.split('?')[1]
            if (search) {
                var r = search.substr(0).match(reg)
                if (r !== null)
                    return unescape(r[2])
                return null
            } else
                return null
        }
    };

    return obj;
});