<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abalon RPG</title>
    <link rel="stylesheet" href="../site.abalon/style.css">
    <link rel="shortcut icon" href="../site.abalon/imagens/favicon-rpg.png" type="image/x-icon">
</head>
<body>
    <script src="cabecalho.js"></script>
    <main>
        <?php 
            $nome = $_REQUEST['nome']?? 0;
            $login = $_REQUEST['login']?? 0;
            $senha = $_REQUEST['senha']?? 0;
            print "<p>Bem vindo a LUPIDA $nome!, aqui você encontrará diversos itens raros, poder e histórias para contar, mas primeiro que tal um acordo?</p>";
        ?>
    </main>
    
</body>
</html>