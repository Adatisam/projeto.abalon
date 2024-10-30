<?php 
session_start();

// Configurações do banco de dados
$servername = "localhost";
$username = "root"; // Seu nome de usuário do banco de dados
$password = ""; // Sua senha do banco de dados
$dbname = "nome_do_banco"; // Nome do banco de dados que você criou

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $login = $_POST['login'];
    $senha = $_POST['senha'];

    // Consulta para verificar o login do usuário
    $sql = "SELECT id, nome, senha FROM usuarios WHERE login = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $login);
    $stmt->execute();
    $result = $stmt->get_result();

    // Verifica se encontrou o usuário
    if ($result->num_rows > 0) {
        // Pega os dados do usuário
        $user = $result->fetch_assoc();

        // Verifica a senha
        if (password_verify($senha, $user['senha'])) {
            // Armazena informações do usuário na sessão
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_nome'] = $user['nome'];

            // Redireciona para a página restrita
            header("Location: area_restrita.php");
            exit;
        } else {
            echo "<p style='color:red'>Senha incorreta!</p>";
        }
    } else {
        echo "<p style='color:red'>Usuário não encontrado!</p>";
    }

    // Fecha o statement
    $stmt->close();
}

// Fecha a conexão
$conn->close();
?>