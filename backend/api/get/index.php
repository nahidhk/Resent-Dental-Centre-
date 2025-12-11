<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$request = isset($_GET['key']) ? $_GET['key'] : '';
$get = isset($_GET['get']) ? $_GET['get'] : '';


$jsonFile = '../../src/server.json';
if (!file_exists($jsonFile)) {
    die(json_encode(["error" => "JSON file not found!"]));
}

$jsonData = file_get_contents($jsonFile);
$serverApiKeyData = json_decode($jsonData, true);
if ($serverApiKeyData === null) {
    die(json_encode(["error" => "Invalid JSON data!"]));
}


if (isset($serverApiKeyData['apikey']) && $request === $serverApiKeyData['apikey']) {
    if ($get === null) {
        include_once "../../src/components/Err/getErr.php";
    }
    if ($get === "category") {
        include_once "../../src/components/category/get/category.php";
    }
    if ($get === "users") {
        include_once "../../src/components/user/get/users.php";
    }
} else {
    include_once "../../src/components/Err/apiErr.php";
}
