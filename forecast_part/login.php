<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));


$uname = $_POST['username'];
$pword = $POST['post password'];
$username;
$password;

 $query = "SELECT * from Users";
 $exec = mysqli_query($conn,$query);
 $result = array();
//  $result[0] = array('date','Sales');
 while($row = mysqli_fetch_array($exec)){
     // $result[] = array($row['username'],$row['password']);
     $uname = $row['username'];
     $pword = $row['password'];
	}
if($username == $uname){
    if($pword == $password){
        echo json_encode("Sucessfully login!");
    }
    else
        echo json_encode("Username and Password not found!");
}else
    echo json_encode("Username and Password not found!");

	echo json_encode($result);
	mysqli_close($conn);
?>