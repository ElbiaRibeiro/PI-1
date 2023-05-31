<?php
// Get form data
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

// Connect to MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbpi";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement and bind parameters
$stmt = $conn->prepare("INSERT INTO ORÇAMENTOS (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nome, $email, $assunto, $mensagem);

// Execute SQL statement
if ($stmt->execute()) {
  echo "Data inserted successfully";
} else {
  echo "Error inserting data: " . $conn->error;
}

// Close database connection
$stmt->close();
$conn->close();
?>
