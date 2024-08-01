var regra = document.getElementById('textoregra')
var botao = document.getElementById('botao')
regra.addEventListener('click', clicar)

function clicar() {
    if (botao.style.display === 'none') {
        botao.style.display = 'block'
        regra.innerHTML = '<p>Clique aqui para ver a regra!</p>'
        //regra.classList.remove('hovered')
    } else {
        botao.style.display = 'none'
        regra.innerHTML = '<h1>Como Funciona a Rolagem de Dados</h1><p>Bem-vindo à nossa ferramenta de rolagem de dados online! Aqui você pode simular a rolagem de vários tipos de dados utilizados em jogos de RPG e outros jogos de mesa. Veja como funciona:</p><h2>1. Escolha o Tipo de Dado</h2><p>Você verá um menu suspenso onde pode selecionar o tipo de dado que deseja rolar. Os dados disponíveis incluem:</p><ul><li><strong>D4</strong>: Um dado de 4 lados.</li><li><strong>D6</strong>: Um dado de 6 lados (o dado tradicional).</li><li><strong>D8</strong>: Um dado de 8 lados.</li><li><strong>D10</strong>: Um dado de 10 lados.</li><li><strong>D12</strong>: Um dado de 12 lados.</li><li><strong>D20</strong>: Um dado de 20 lados, comumente usado em jogos como Dungeons & Dragons.</li></ul><h2>2. Selecione a Quantidade de Dados</h2><p>No campo de quantidade, você pode escolher quantos dados deseja rolar ao mesmo tempo. Por exemplo, se você quiser rolar dois dados de 6 lados, basta escolher "D6" no menu suspenso e inserir "2" no campo de quantidade.</p><h2>3. Rolar os Dados</h2><p>Depois de selecionar o tipo de dado e a quantidade desejada, clique no botão "Rolar Dados". Nosso sistema irá gerar números aleatórios simulando os resultados dos dados escolhidos.</p><h2>4. Veja os Resultados</h2><p>Os resultados da rolagem aparecerão logo abaixo do botão. Se você rolou vários dados, os resultados serão listados e separados por vírgulas.</p>'
        //regra.classList.add('hovered')
    }
}

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
