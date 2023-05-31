<?php
// Connect to MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbpi";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare SQL statement and bind parameters
$stmt = $conn->prepare("INSERT INTO depoimentos (nome, mensagem) VALUES (?, ?)");
$stmt->bind_param("ss", $nome, $mensagem);

// Execute SQL statement
// if ($stmt->execute()) {
//   echo "Data inserted successfully";
// } else {
//   echo "Error inserting data: " . $conn->error;
// }

// Close database connection
$stmt->close();
$conn->close();