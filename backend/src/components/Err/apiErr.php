<?php
header('Content-Type: application/json');

$info = [
      "status"=>"404",
       "messege"=>"Sorry, This api key is not requst"
];

echo json_encode($info);

?>