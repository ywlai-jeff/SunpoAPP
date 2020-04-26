<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

  $aDoor = $_POST['formDoor'];

  if($aDoor[0] == yujak){

   $query = "SELECT date,quantity FROM SUNPO2 WHERE Date >= \"2020-03-29\" AND Date <= \"2020-04-04\" AND food = \"ngaolam\" ";
   //Select SUM(T.quantity) FROM ((SELECT quantity,date FROM `SUNPO2`WHERE Date >= "2020-03-29" AND Date <= "2020-04-04" AND food = "ngaolam") AS T)
   //line for getting sum of quantity
   //Select AVG(T.quantity) FROM ((SELECT quantity,date FROM `SUNPO2` WHERE food = "ngaolam") AS T)
   //line for getting average of quantity
   //projected quantity = average * 7 ?

   $exec = mysqli_query($conn,$query);
   $result = array();
   while($row = mysqli_fetch_array($exec)){
    $result[] = array($row['date'],(int)$row['quantity']);
    }

    echo json_encode($result);
    mysqli_close($conn);
  }

?>
