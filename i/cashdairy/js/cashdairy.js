$(document).ready(function () {
    var bIncome = document.getElementById('income');
    var bOutcome = document.getElementById('outcome');
    var money = $('#money').val();
    var reason = $('#reason').val();
    var oOl = document.getElementById('ol');
    var id = 0;
    var jiesuan = document.getElementById('jiesuan');
    var out = document.getElementById('out');
    var get = document.getElementById('get');
    var allin = 0;
    var allout = 0;
    var bill = [];//[{id:1,money:money,reason:reason},{}]
    var htmltxt = '<a href="#">' + '【 ' + '<%= time %>' + '】' + '<%= reason %>' + '  ' + '<span >' + '￥:' + '<%= money %>' + '</span>' + '</a>';


    bOutcome.onclick = function () {
        var money = $('#money').val();
        var reason = $('#reason').val();
        addRecord(money, reason, '-');
    };
    bIncome.onclick = function () {
        var money = $('#money').val();
        var reason = $('#reason').val();
        addRecord(money, reason);
    };
    $("#showList").click(function () {
        $(oOl).children().remove();
        for (let i = 0; i < bill.length; i++) {
            if (bill[i].money < 0) {
                allout += bill[i].money
            }
            if (bill[i].money > 0) {
                allin += bill[i].money
            }
            var oli = document.createElement('li');
            oli.innerHTML = common.tmpl(htmltxt, bill[i]);
            oOl.appendChild(oli);
        }

    });


    function addRecord(money, reason, type) {
        let date = new Date();
        let time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        if (type == '-') {
            bill.push({id: id++, money: 0 - money, reason: reason || '无', time: time})
        } else {
            bill.push({id: id++, money: money, reason: reason || '无', time: time})
        }
    }


    var common = {
            tmpl: function tmpl(str, data) {
                var fn;
                if (!/\W/.test(str)) {
                    cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML);
                } else {
                    fn = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('" + str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
                }
                return data ? fn(data) : fn;
            }
        }
        ;

    //
    //bOutcome.onclick = function () {
    //    aIn[i] = parseFloat(-money.value);
    //    i++;
    //    aOut[n] = parseFloat(-money.value);
    //    n++;
    //    var total = 0;
    //    for (var j = 0; j < aIn.length; j++) {
    //        total = parseFloat(aIn[j] + total);
    //    }
    //
    //    jiesuan.innerHTML = total;
    //    var allOut = 0;
    //    for (var k = 0; k < aOut.length; k++) {
    //        allOut = parseFloat(aOut[k] + allOut);
    //    }
    //    out.innerHTML = allOut;
    //
    //    var oLi = document.createElement('li');
    //    var myDate = new Date();
    //
    //    oLi.innerHTML = '<a href="#">' + '【' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
    //        + ' ' + myDate.getHours() + ':' + myDate.getMinutes()
    //        + '】' + reason.value + '  ' + '<span  style="color:red">' + '￥：-' + money.value + '</span>' + '</a>';
    //
    //    oOl.appendChild(oLi);
    //    $("#ol").listview("refresh");
    //
    //};
    //
    //bIncome.onclick = function () {
    //    aIn[i] = parseFloat(money.value);
    //    i++;
    //
    //    aGet[m] = parseFloat(money.value);
    //    m++;
    //    var total = 0;
    //    for (var j = 0; j < aIn.length; j++) {
    //        total = parseFloat(aIn[j] + total)
    //    }
    //    ;
    //    jiesuan.innerHTML = total;
    //    var allGet = 0;
    //    for (var q = 0; q < aGet.length; q++) {
    //        allGet = parseFloat(aGet[q] + allGet);
    //    }
    //    ;
    //    get.innerHTML = allGet;
    //    var oLi = document.createElement('li');
    //    var myDate = new Date();
    //    oLi.innerHTML = '<a href="#">' + '【' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
    //        + ' ' + myDate.getHours() + ':' + myDate.getMinutes()
    //        + '】' + reason.value + '  ' + '<span  style="color:green">' + '￥：+' + money.value + '</span>' + '</a>';
    //
    //    oOl.appendChild(oLi);
    //    $("#ol").listview("refresh");
    //
    //}


});