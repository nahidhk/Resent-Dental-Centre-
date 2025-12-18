<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include_once "../../config.php";
$api_key = $_GET['key'] ?? '';
$table   = $_GET['get'] ?? '';

$apikey = "../../apikey.json";

$data = json_decode(file_get_contents($apikey), true);

$valid_key = $data['api_key'];

if ($api_key !== $valid_key) {
    echo json_encode(["status" => "error", "message" => "Invalid API key"]);
    exit();
}

if (!$table) {
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit();
}


$sql = "SELECT * FROM `$table`";
$result = mysqli_query($conn, $sql);

$outjsondata = [];
while($row = mysqli_fetch_assoc($result)) {
    $outjsondata[] = $row;
}

echo json_encode($outjsondata, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
