<?php
session_start();

if (!isset($_SESSION['user'])) {
    die("Access Denied ❌");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Welcome <?php echo $_SESSION['user']; ?> 👋</h2>
    <a href="logout.php">Logout</a>
</div>

</body>
</html>
