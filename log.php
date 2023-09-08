<?php
$ip = $_SERVER['REMOTE_ADDR'];
$logFile = 'log.txt';
$logMessage = date('Y-m-d H:i:s') . " - IP: $ip entered the chat\n";

file_put_contents($logFile, $logMessage, FILE_APPEND);
?>
