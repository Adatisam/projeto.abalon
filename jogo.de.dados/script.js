/*function rolarDados() {
    // Obter o tipo de dado e a quantidade de dados
    var tipoDado = document.getElementById("dado").value;
    var quantidade = document.getElementById("quantidade").value;
    
    // Converter a quantidade para número inteiro
    quantidade = parseInt(quantidade);

    // Variável para armazenar os resultados
    var resultados = [];

    // Rolar os dados e armazenar os resultados
    for (var i = 0; i < quantidade; i++) {
        var resultado = Math.floor(Math.random() * tipoDado) + 1;
        resultados.push(resultado);
    }

    // Exibir os resultados
    document.getElementById("resultado").innerText = "Resultados: " + resultados.join(", ");
}*/

function rolarDados() {
    var tipoDado = document.getElementById('dado').value
    var quantidade = document.getElementById('quantidade').value
    quantidade = parseInt(quantidade)
    var resultados = []
    for (var i = 0; i < quantidade; i++) {
        var resultado = Math.floor(Math.random() * tipoDado) + 1
        resultados.push(resultado)
    }
    document.getElementById('resultado').innerHTML = "Resultado: " + resultados.join(", ")
}
