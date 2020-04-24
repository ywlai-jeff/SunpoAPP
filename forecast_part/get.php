<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));


  echo(" \"['");
  echo(" \" .");
  echo('$row[\'');
  echo( "date");
  echo("'].\", ");

  $aDoor = $_POST['formDoor'];
    $N = count($aDoor);
    for($i=0; $i < $N; $i++)
    {
      echo(" \" .");
      echo('$row[\'');
      echo( "$aDoor[$i]");
      echo("'].\", ");
    }

  echo("],\"")

?>
