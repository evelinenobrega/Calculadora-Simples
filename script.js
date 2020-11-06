var valor;
var resultado;


function botao(num){
    valor=document.calc.visor.value += num;
}

function reseta(){
    document.calc.visor.value = '';
}

  function executa() {
    if(!valor.includes('%')) {
        resultado = calcula(valor);
    } else {
        valor = valor.replace("%", "") + "/100";
        resultado = calcula(valor);
    }
    document.calc.visor.value = resultado.toLocaleString("pt-BR");
}

function calcula(valor) {
    return eval(valor);
}
