<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

// =====================
// Database Config
// =====================
$host = "eu-host-1.championstack.com";
$user = "ndsqltop";       
$pass = "(N@hid123$##)";   
$db   = "ndsqltop_rds";     

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode([]);
    exit;
}

$getID = $_GET["id"];
 

$sql = "SELECT * FROM patient_records WHERE rpid = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $getID); 
$stmt->execute();

$result = $stmt->get_result();
$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

if (!$data){
    $data = null;
};

echo json_encode($data, JSON_UNESCAPED_UNICODE);