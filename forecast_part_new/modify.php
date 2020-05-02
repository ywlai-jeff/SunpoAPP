<?php


$id = $_POST['id'];
$inventory = $_POST['quantity'];
$food; 

if($id == 1)
    $food = "yujak";
else if ($id == 2)
    $food = "yuyun";
else if ($id == 3)
    $food = "yukyun";
else if ($id == 4)
    $food = "wuntun";
else if ($id == 5)
    $food = "suigao";
else if ($id == 6)
    $food = "jusao";
else if ($id == 7)
    $food = "jajueng";
else if ($id == 8)
    $food = "yupei";
else if ($id == 9)
    $food = "yupeigao";
else if ($id == 10)
    $food = "ngaolam";
else if ($id == 11)
    $food = "ngaotou";
else if ($id == 12)
    $food = "magun";
else if ($id == 13)
    $food = "yudan";
else if ($id == 14)
    $food = "yupin";
else if ($id == 15)
    $food = "yugok";
else if ($id == 16)
    $food = "ngoyun";
else if ($id == 17)
    $food = "ngaogenyun";
else if ($id == 18)
    $food = "ngauzharp";

    $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
    mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));
    
    $query = "UPDATE SunpoInventory set inventory = \"$inventory\" where food = \"$food\"";

    $exec = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($exec)){
        echo $inventory;
    }
    mysqli_close($conn);

    echo $inventory;
 
?>
