<?php

// CORS header
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// OPTIONS preflight request (very important for React fetch)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

// Include config
$configMySQL = "../../../config.php";
include_once $configMySQL;

// Query inputs
$request = $_GET['key'] ?? '';
$post = $_GET['post'] ?? '';

// Load server JSON
$jsonFile = '../../src/server.json';
if (!file_exists($jsonFile)) {
    echo json_encode(["error" => "JSON file not found!"]);
    exit();
}

$jsonData = file_get_contents($jsonFile);
$serverApiKeyData = json_decode($jsonData, true);

if ($serverApiKeyData === null) {
    echo json_encode(["error" => "Invalid JSON data!"]);
    exit();
}

// Validate API Key
if (isset($serverApiKeyData['apikey']) && $request === $serverApiKeyData['apikey']) {

    
    if ($post === "category") {

        $rawData = file_get_contents("php://input");
        $inputData = json_decode($rawData, true);

        
        if ($inputData === null) {
            echo json_encode(["error" => "Invalid JSON input!", "raw" => $rawData]);
            exit();
        }

        if (isset($inputData['name'])) {

            $categoryName = $inputData['name'];


            if ($conn->connect_error) {
                echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
                exit();
            }

            
            $stmt = $conn->prepare("INSERT INTO category (name) VALUES (?)");
            $stmt->bind_param("s", $categoryName);

            if ($stmt->execute()) {
                echo json_encode([
                    "success" => true,
                    "message" => "Category '$categoryName' added successfully."
                ]);
            } else {
                echo json_encode(["error" => "Failed to add category: " . $stmt->error]);
            }

            $stmt->close();
            $conn->close();
            exit();
        }

        echo json_encode(["error" => "Name field missing!"]);
        exit();
    }

} else {
    // Wrong API key response
    $jsonErrorData = file_get_contents('../../src/error.json');
    $jsonErrorOutput = json_decode($jsonErrorData, true);
    echo json_encode($jsonErrorOutput, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit();
}
?>
