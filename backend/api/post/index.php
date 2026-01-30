<?php
include_once "../../config.php";

// API KEY CHECK
$api_key = $_GET['key'] ?? '';
$dataKey = json_decode(file_get_contents("../../apikey.json"), true);

if ($api_key !== $dataKey['api_key']) {
    echo json_encode(["status" => "error", "message" => "Invalid API key"]);
    exit;
}

// INPUT
$input = json_decode(file_get_contents("php://input"), true);

if (
    !$input ||
    !isset($input['db_name']) ||
    !isset($input['data']) ||
    !is_array($input['data'])
) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid input format"
    ]);
    exit;
}

$table = $conn->real_escape_string($input['db_name']);
$data  = $input['data'];

// 🔥 FIX: encode array → JSON
foreach ($data as $key => $value) {
    if (is_array($value)) {
        $data[$key] = json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}

// BUILD QUERY
$columns = implode(", ", array_keys($data));
$placeholders = implode(", ", array_fill(0, count($data), "?"));
$values = array_values($data);

$sql = "INSERT INTO `$table` ($columns) VALUES ($placeholders)";
$stmt = $conn->prepare($sql);

$types = str_repeat("s", count($values));
$stmt->bind_param($types, ...$values);

// EXECUTE
if ($stmt->execute()) {
    echo json_encode([
        "status" => "success",
        "message" => "Data inserted successfully"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();
