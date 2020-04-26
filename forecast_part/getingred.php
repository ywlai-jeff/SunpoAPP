<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

$q = "2020-04-12";
$p = "2020-04-18";

$query = "SELECT date, quantity from SUNPO2 WHERE Date >= "2020-04-12" AND Date <= "2020-04-18" AND food = "ngaolam" ORDER BY Date";



echo ("dllm!")
mysqli_close($conn);


?>
