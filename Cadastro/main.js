// function  formatar_valor(e){
//     console.log(e);
//     var charCode = e.data.charCodeAt(0);
//     console.log(charCode);
//     if(charCode != 8 && charCode != 9) {
//         if(charCode < 48 || charCode > 57) {
//             return false;
//         }
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
        'sn': document.getElementById('sn').value
    });

    const json_produtos = JSON.stringify(produtos);

    localStorage.setItem("produtos", json_produtos);
   

}