<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

  $array = array("yujak","yuyun","yukyun","wuntun","suigao","jusao","jajueng","yupei","yupeigao","ngaolam","ngaotou","magun","yudan","yupin","yugok","ngoyun","ngaogenyun");

  $aDoor = $_POST['formDoor'];
  $N = count($aDoor);

  for($i=0; $i < $N; $i++)
  {
    echo(" \" .");
    echo('$row[\'');
    echo( "$aDoor[$i]");
    echo("'].\", ");
  }



print_r($array);


?>
