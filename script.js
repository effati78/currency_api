const url = 'https://www.megaweb.ir/api/money';
var ajax;
var table = document.querySelector('.tbody');
var count = 1;

if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest()
} else {
    ajax = new ActiveXObject('Microsoft.XMLHTTP')
}

ajax.open('GET', url, true);
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);
        console.log(res);
        debugger;
        for (i in res) {
            table.innerHTML += `<tr> <td>${count}</td> <td>${res[i].title}</td> <td>${res[i].price}</td> <td>${[res[i].jdate]}</td></tr>`;
            count++;
        }
    } else if (this.readyState != 4 && this.status != 200) {
        console.log(`Error ${this.status} ❌ `)
    }
}
ajax.send();