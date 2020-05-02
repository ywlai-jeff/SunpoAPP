<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

$food = $_GET['food'];
$id = $_GET['id'];

   $query = "Select SUM(T.quantity) FROM ((SELECT quantity,date FROM `SUNPO2`WHERE Date >= \"2020-04-24\" AND Date <= \"2020-04-30\"";
    $query .= "AND food = \"$food[$id]\") AS T)";

    // if(count($filters) > 0){
    //     $query .= "AND (";
    //     for($i = 0; $i < count($filters); $i++) {
    //         if($i>0)
    //             $query .= "OR ";
    //         $query .= "food = \"$filters[$i]\" AS T";
    //      }
    //      $query .= ")";
    // }
   //Select SUM(T.quantity) FROM ((SELECT quantity,date FROM `SUNPO2`WHERE Date >= "2020-03-29" AND Date <= "2020-04-04" AND food = "ngaolam") AS T)
   //line for getting sum of quantity
   //Select AVG(T.quantity) FROM ((SELECT quantity,date FROM `SUNPO2` WHERE food = "ngaolam") AS T)
   //line for getting average of quantity
   //projected quantity = average * 7 ?

   $exec = mysqli_query($conn,$query);
   while($row = mysqli_fetch_array($exec)){
    echo "".$row['SUM(T.quantity)'] ."";
    }

    mysqli_close($conn);


?>
