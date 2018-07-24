var inputs = document.querySelectorAll('input');
var botao = document.querySelector('button');

botao.onclick = formulario;

function formulario() {
    
    // if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    //     alert("Insira valores nos campos")
    // }

    if(inputs[0].value == ""){
        alert("Não tem valor no campo nome...");
    }else if(inputs[1].value == ""){
        alert("Não tem valor no campo sobrenome...");
    }else if(inputs[2].value == ""){
        alert("Não tem valor no campo email...");
    }else{
        alert("Cadastro realizado!");
    }
}


