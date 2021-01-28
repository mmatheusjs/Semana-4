// function isNumberKey(event) {
//     if (event.keyCode >= 48 && event.keyCode <= 57) {
//         return true;
//     } else {
//         event.preventDefault();
//     }
// }

 
function formatar_valor(event){
    if(event.target.value.length == 3){
         event.target.value += ".";
    }
}

var serialnumber = document.getElementById('sn').addEventListener('input', formatar_valor);



var produtos = JSON.parse(localStorage.getItem("produtos"));

if(produtos == null){
    produtos = [];
}

function salvar(){
    produtos.push({
        'func_name': document.getElementById('func_name').value,
        'carne_select': document.getElementById('carne_select').value,
        'quilos': document.getElementById('quilos').value,
        'sn': document.getElementById('sn').value
    });

    const json_produtos = JSON.stringify(produtos);

    localStorage.setItem("produtos", json_produtos);
   

}