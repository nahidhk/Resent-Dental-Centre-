<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


function customUniqueId($length = 30) {
    return substr(bin2hex(random_bytes($length)), 0, $length);
}

echo customUniqueId(40);
?>
