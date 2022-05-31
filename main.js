// variantes principais //

var salario = 0;
var horas = 0;
var valorH = 0;


// função que calcula //
function calcular() {
  var salario = document.getElementById("salario").value;
  var horas = document.getElementById("horasextras").value;
  var valorH = document.getElementById("valorHora").value;

  // check de campos obrigatórios//

  if (salario === "") {
    console.log("aaa")
    document.getElementById("salario").placeholder = "campo necessário!";
  }
  if (horas === "") {
    document.getElementById("horasextras").placeholder = "campo necessário!";
  }
  if (valorH === "") {
    document.getElementById("valorHora").placeholder = "campo necessário!";
  }

  // fim do check de campos //

  // calculando // 

  if (salario != "" && horas != "" && valorH != "") {
    var salarioInt = parseInt(salario);
    var resultado = horas * valorH + salarioInt;
    // mostrando na tela //

    document.getElementById("resultado").placeholder = "Seu salario total será de: R$ " + formatarValor(resultado);
  }
}


// função para converter em R$ //

function formatarValor(valor) {
  return valor.toLocaleString("pt-br")
}

// FIM :) //
