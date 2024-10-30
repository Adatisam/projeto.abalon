<?php 
    $servenome = "";
    $usernome = "";
    $cdsenha = "";
    $bdnome = "";

    $conn = new mysqli($servenome, $usernome, $cdsenha, $bdnome );

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = $_POST[''];
        $login = $_POST[''];
        $senha = $_POST[''];

        if (!empty($nome) && !empty($login) && !empty($senha)) {
            $senha_hash = password_hash($senha, PASSWORD_DEFAULT);
    
            $sql = "INSERT INTO usuarios (nome, login, senha) VALUES (?, ?, ?)";
            $stmt = $conn -> prepare($sql);
            $stmt -> bind_param("sss", $nome, $login, $senha_hash);

            if ($stmt -> execute()) {
                echo "Cadastro realizado com sucesso!";
            } else {
                echo "Erro: " . $sql . "<br>" . $conn -> error;
            }
            $stmt->close();
        } else {
            echo "Por favor, preencha todos os campos.";
        }
    }
$conn->close();
?>