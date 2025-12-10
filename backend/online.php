<?php
// ---------- CORS FIX ----------
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
// ------------------------------

// DB config
 include "config.php";

$sql = "SELECT * FROM onileTest";
$result = mysqli_query($conn, $sql);

$categories = [];
while($row = mysqli_fetch_assoc($result)) {
    $categories[] = $row;
}

header("Content-Type: application/json");
echo json_encode($categories, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>
