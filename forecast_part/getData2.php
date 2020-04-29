<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

$q = "2020-03-08";
$p = "2020-03-14";

$query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
 $exec = mysqli_query($conn,$query);
 $result = array();
 $result[0] = array('date','Sales');
 while($row = mysqli_fetch_array($exec)){
 	$result[] = array($row['Date'],(int)$row['Sales']);
	}

	echo json_encode($result);
	mysqli_close($conn);
?>
