<?php
echo "<h2>PHP File Functions </h2>";
$file = "sample.txt";
//file read/write

echo "<h3>File Read / Write</h3>";
$handle = fopen($file, "a");
fwrite($handle, "\nNew line added ");
fclose($handle);
echo "Data written using fwrite()<br>";

$handle = fopen($file, "r");
$content = fread($handle, filesize($file));
fclose($handle);
echo "File Content :</b><br>$content<br><br>";

// file_get_contents
echo "<b>file_get_contents():</b><br>";
echo file_get_contents($file) . "<br><br>";

// file_put_contents
file_put_contents($file, "\nLine added using file_put_contents()", FILE_APPEND);
echo "Data written using file_put_contents()<br>";

// file()
$lines = file($file);
echo "<b>file() output:</b><br>";
foreach ($lines as $line) {
    echo $line . "<br>";
}

echo "<h3>File Information</h3>";

echo "File exists: " . (file_exists($file) ? "Yes" : "No") . "<br>";
echo "File size: " . filesize($file) . " bytes<br>";
echo "File type: " . filetype($file) . "<br>";
echo "Last accessed: " . date("d-m-Y H:i:s", fileatime($file)) . "<br>";
echo "Last modified: " . date("d-m-Y H:i:s", filemtime($file)) . "<br>";
echo "Created time: " . date("d-m-Y H:i:s", filectime($file)) . "<br>";
echo "Permissions: " . substr(sprintf('%o', fileperms($file)), -4) . "<br>";
echo "Owner ID: " . fileowner($file) . "<br>";
echo "Group ID: " . filegroup($file) . "<br>";
echo "Inode number: " . fileinode($file) . "<br>";


echo "<h3>File & Folder Management</h3>";

// copy
copy($file, "copy_sample.txt");
echo "File copied using copy()<br>";

// rename
rename("copy_sample.txt", "renamed_sample.txt");
echo "File renamed using rename()<br>";

// unlink
unlink("renamed_sample.txt");
echo "File deleted using unlink()<br>";

// mkdir
if (!is_dir("testDir")) {
    mkdir("testDir");
    echo "Directory created using mkdir()<br>";
}

// is_file & is_dir
echo "Is sample.txt a file? " . (is_file($file) ? "Yes" : "No") . "<br>";
echo "Is testDir a directory? " . (is_dir("testDir") ? "Yes" : "No") . "<br>";

// rmdir
rmdir("testDir");
echo "Directory removed using rmdir()<br>";

//directory handling

echo "<h3>Directory Handling</h3>";
echo "Current directory: " . getcwd() . "<br>";

// scandir
$files = scandir(".");
echo "<b>Files using scandir():</b><br>";
foreach ($files as $f) {
    echo $f . "<br>";
}

// opendir, readdir, closedir
echo "<br><b>Files using opendir():</b><br>";
$dir = opendir(".");
while ($fileName = readdir($dir)) {
    echo $fileName . "<br>";
}
closedir($dir);

//flock

echo "<h3>File Locking</h3>";

$handle = fopen($file, "r+");
if (flock($handle, LOCK_EX)) {
    fwrite($handle, "\nFile locked and written safely.");
    flock($handle, LOCK_UN);
    echo "File locked using flock() and written successfully.<br>";
}
fclose($handle);
?>