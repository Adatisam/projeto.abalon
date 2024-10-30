<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
echo "Bem-vindo(a), " . $_SESSION['user_nome'] . "!";
?>
