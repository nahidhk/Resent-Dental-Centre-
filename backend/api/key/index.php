<?php
header("Content-Type: application/json");

$file = "../../apikey.json";

// ✅ যদি ফাইল থাকে
if (file_exists($file)) {

    $data = json_decode(file_get_contents($file), true);

    if (!empty($data['api_key'])) {
        echo json_encode([
            "status" => "success",
            "message" => "API key already exists",
            "api_key" => $data['api_key']
        ]);
        exit();
    }
}

// ❌ ফাইল নাই বা key নাই → নতুন key বানাও
$api_key = bin2hex(random_bytes(20)); // secure key

$data = [
    "api_key" => $api_key,
    "created_at" => date("Y-m-d H:i:s")
];

// JSON file create
file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

echo json_encode([
    "status" => "success",
    "message" => "New API key created",
    "api_key" => $api_key
]);
