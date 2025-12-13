<?php
include_once "../../config.php";
$sql = "SELECT * FROM medicine";
$result = mysqli_query($conn, $sql);

$categories = [];
while($row = mysqli_fetch_assoc($result)) {
    $categories[] = $row;
}

echo json_encode($categories, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>