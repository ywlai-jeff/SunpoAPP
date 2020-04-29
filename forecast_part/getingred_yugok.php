<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

   $query = "SELECT date,quantity FROM SUNPO2 WHERE Date >= \"2020-03-29\" AND Date <= \"2020-04-04\" AND food = \"yugok\" ";

   $exec = mysqli_query($conn,$query);
   $result = array();
   $result[0] = array('date','quantity');
   while($row = mysqli_fetch_array($exec)){
    $result[] = array($row['date'],(int)$row['quantity']);
    }

    echo json_encode($result);
    mysqli_close($conn);


?>
