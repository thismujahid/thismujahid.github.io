<?php
$to = "admin@webdesginer.me";
$user_name = $POST["username"];
$subject = $POST["subject"];
$txt = $POST["msg"];
$headers = "From: ".$POST["email"] . "\r\n";

mail($to,$subject,$txt,$headers);
echo "HI". $to. "this " . $txt;
?>