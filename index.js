function converter() {
    var numeroDecimal = parseInt(document.getElementById("numeroDecimal").value);
    var numeroOriginal = numeroDecimal;
    let tamanho = 0;
    let resto = 0;

    while (numeroDecimal > 0) {
        numeroDecimal = Math.floor(numeroDecimal / 2);
        tamanho++;
    }
    
    var digitosBinarios = new Array(tamanho);
    numeroDecimal = numeroOriginal;
    var indice = tamanho - 1;                    

    while (numeroDecimal > 0) {
        resto = numeroDecimal % 2;
        digitosBinarios[indice] = resto;
        numeroDecimal = Math.floor(numeroDecimal / 2);
        indice--;
    }

    var representacaoBinaria = digitosBinarios.join('');

    document.getElementById("resultado").innerHTML = "" + numeroOriginal + " (dec) = " + representacaoBinaria;
}


function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {

    case "soma":
        resultado = numero1 + numero2;
    break;
    case "subtracao":
        resultado = numero1 - numero2;
    break;
    case "multiplicacao":
        resultado = numero1 * numero2;
    break;
    case "divisao":
        resultado = numero1 / numero2;
    break;
    default:
        resultado = "Operação inválida";
    }

    document.getElementById("resultadocalculadora").innerHTML = "Resultado: " + resultado;
}

