var produtos = JSON.parse(localStorage.getItem('produtos'));

if (produtos == null) {
    produtos = [];
}

var tabel = document.getElementById('tabela');

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    var func_name = produto['func_name'];
    var carne_select = produto['carne_select'];
    var sn = produto['sn'];

    var th = tabela.insertRow(1);
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2)];
    td[0].innerHTML = func_name;
    td[1].innerHTML = carne_select;
    td[2].innerHTML = sn;
}


// th.insertCell(3)