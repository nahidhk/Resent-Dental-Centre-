<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
// Include config
include_once "../../config.php";
// GET params
$api_key = $_GET['key'] ?? '';
$table   = $_GET['drop'] ?? '';
$id      = $_GET['id'] ?? '';
$apikey = "../../apikey.json";
$data = json_decode(file_get_contents($apikey), true);

$valid_key = $data['api_key'];

if ($api_key !== $valid_key) {
    echo json_encode(["status" => "error", "message" => "Invalid API key"]);
    exit();
}

// Validation
if (!$table || !$id) {
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit();
}

// Prepare DELETE
$stmt = $conn->prepare("DELETE FROM `$table` WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode([
        "status" => "success",
        "message" => "Data deleted",
        "id" => $id
    ]);
} else {
    echo json_encode(["status" => "success", "message" => "Delete failed"]);
}

$stmt->close();
$conn->close();


