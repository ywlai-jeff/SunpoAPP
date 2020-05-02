<?php

function processDrpdown($selectedVal) {
    $q = $selectedVal;

    if($q == feb){
      $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
      mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));
      $query = "SELECT AVG(Sales) from Sunposales WHERE Date >= '2020-02-01' AND Date <= '2020-02-29' ";
      $exec = mysqli_query($conn,$query);
      while($row = mysqli_fetch_array($exec)){
      echo "".$row['AVG(Sales)']."";
         }
    }

    if($q == mar){
      $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
      mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));
      $query = "SELECT AVG(Sales) from Sunposales WHERE Date >= '2020-03-01' AND Date <= '2020-03-30' ";
      $exec = mysqli_query($conn,$query);
      while($row = mysqli_fetch_array($exec)){
      echo "".$row['AVG(Sales)']."";
         }
    }

    if($q == apr){
      $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
      mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));
      $query = "SELECT AVG(Sales) from Sunposales WHERE Date >= '2020-04-01' AND Date <= '2020-04-31' ";
      $exec = mysqli_query($conn,$query);
      while($row = mysqli_fetch_array($exec)){
      echo "".$row['AVG(Sales)']."";
         }
    }



}

if ($_POST['dropdownValue']){
    //call the function or execute the code
    processDrpdown($_POST['dropdownValue']);
}
?>
