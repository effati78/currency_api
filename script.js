var table = document.querySelector('.tbody');
var mySelect = document.getElementById("mySelect");
var myOption = document.getElementsByTagName("option");

function get_val(x) {
    return x.value;
}

if (window.XMLHttpRequest) {
    var ajax = new XMLHttpRequest()
} else {
    var ajax = new ActiveXObject('Microsoft.XMLHTTP')
}


const api_key = '55KO4PkTT5qGzBxgr7i9TsseYcYp72hX';
const url = `http://api.navasan.tech/latest/?api_key=${api_key}`;

ajax.open('GET', url, true);
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);

        mySelect.addEventListener('change', function () {
            let m = get_val(this);

            for (let i = 0; i < myOption.length; i++) {
                if (myOption[i].value == m)
                    var myText = myOption[i].innerHTML;
            }

            for (x in res) {
                if (x == m) {
                    console.log(x);
                    console.log(res[x]);
                    table.innerHTML += `<tr> <td style="direction: rtl;">${myText}</td> <td>${x}</td> <td>${res[x].value}</td> <td>${[res[x].change]}</td> <td>${[res[x].date]}</td></tr>`;
                }
            }
        });
    } else if (this.readyState != 4 && this.status != 200) {
        alert(`Error ${this.status} ❌ `)
    }
}
ajax.send();