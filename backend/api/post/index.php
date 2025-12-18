<?php
include_once "../../config.php";
$api_key = $_GET['key'] ?? '';

$apikey = "../../apikey.json";

$data = json_decode(file_get_contents($apikey), true);

$valid_key = $data['api_key'];

if ($api_key !== $valid_key) {
    echo json_encode(["status" => "error", "message" => "Invalid API key"]);
    exit();
}

$input = json_decode(file_get_contents("php://input"), true);

if (!$input || !isset($input['db_name'])) {
    echo json_encode(["status"=>false,"message"=>"No data or table name received"]);
    exit;
}

$table = $conn->real_escape_string($input['db_name']);
unset($input['db_name']);

$columns = implode(", ", array_keys($input));
$placeholders = implode(", ", array_fill(0, count($input), "?"));
$values = array_values($input);

$stmt = $conn->prepare("INSERT INTO $table ($columns) VALUES ($placeholders)");

$types = str_repeat("s", count($values));
$stmt->bind_param($types, ...$values);

if ($stmt->execute()) {
    echo json_encode(["status"=>"success","message"=>"Data inserted successfully","data"=>$input]);
} else {
    echo json_encode(["status"=>"error","message"=>"Insert failed: ".$stmt->error]);
}

$stmt->close();
$conn->close();
