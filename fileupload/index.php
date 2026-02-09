<?php
session_start();
$uploadedFile = "";

if (isset($_POST['upload'])) {

    if (isset($_FILES['myfile']) && $_FILES['myfile']['error'] == 0) {

        $fileName = $_FILES['myfile']['name'];
        $tempName = $_FILES['myfile']['tmp_name'];
        $uploadDir = "uploads/";

        if (move_uploaded_file($tempName, $uploadDir . $fileName)) {
            $_SESSION['uploadedFile'] = $fileName;
$_SESSION['success_msg'] = "File uploaded successfully!";
header("Location: index.php");
exit();


        } else {
            echo "<p style='color:red;'>File upload failed.</p>";
        }

    } else {
        echo "<p style='color:red;'>Please select a file.</p>";
    }
}
if (isset($_SESSION['uploadedFile'])) {
    $uploadedFile = $_SESSION['uploadedFile'];
}
if (isset($_GET['download'])) {

    $file = "uploads/" . $_GET['download'];

    if (file_exists($file)) {

        header("Content-Description: File Transfer");
        header("Content-Type: application/octet-stream");
        header("Content-Disposition: attachment; filename=" . basename($file));
        header("Content-Length: " . filesize($file));

       readfile($file);
header("Location: index.php");
exit();

    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>File Upload & Download</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
if (isset($_SESSION['success_msg'])) {
    echo "<p style='color:green;'>" . $_SESSION['success_msg'] . "</p>";
    unset($_SESSION['success_msg']); 
}
?>

<h2>File Upload & Download</h2>

<form method="POST" enctype="multipart/form-data">
    <input type="file" name="myfile" required>
    <br><br>
    <button type="submit" name="upload">Upload File</button>
</form>

<br>

<!-- DOWNLOAD LINK -->
<?php if ($uploadedFile != "") { ?>
    <a href="?download=<?php echo $uploadedFile; ?>">
        Download Uploaded File
    </a>
<?php 
unset($_SESSION['uploadedFile']);
} ?>

</body>
</html>
