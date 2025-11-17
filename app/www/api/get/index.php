<?php

// CORS & JSON header
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Include config
$configMySQL = "../../../config.php";
include_once $configMySQL;

$request = isset($_GET['key']) ? $_GET['key'] : '';
$get = isset($_GET['get']) ? $_GET['get'] : '';

// Load server JSON
$jsonFile = '../../src/server.json';
if (!file_exists($jsonFile)) {
    die(json_encode(["error" => "JSON file not found!"]));
}

$jsonData = file_get_contents($jsonFile);
$serverApiKeyData = json_decode($jsonData, true);
if ($serverApiKeyData === null) {
    die(json_encode(["error" => "Invalid JSON data!"]));
}

// Check API key
if (isset($serverApiKeyData['apikey']) && $request === $serverApiKeyData['apikey']) {
    if($get === "category"){
       include_once "../../src/category.php";
    }
} else {
    $jsonErrorData = file_get_contents('../../src/error.json');
    $jsonErrorOutput = json_decode($jsonErrorData, true);
    echo json_encode($jsonErrorOutput, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}
?>
