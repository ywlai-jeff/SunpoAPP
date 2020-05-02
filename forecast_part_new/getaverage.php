<?php


if ($_POST['dropdownValue']){
    //call the function or execute the code
    processDrpdown($_POST['dropdownValue']);
}

function processDrpdown($selectedVal) {
	$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
	mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));	
    $key = $selectedVal;

		if($key == ffeb ){
			$q = "2020-02-01";
			$p = "2020-02-08";
		}
		if($key == sfeb ){
			$q = "2020-02-09";
			$p = "2020-02-15";
		}
		if($key == tfeb ){
			$q = "2020-02-16";
			$p = "2020-02-22";
		}
		if($key == frfeb ){
			$q = "2020-02-23";
			$p = "2020-02-29";
		}
		if($key == fmar ){
			$q = "2020-03-01";
			$p = "2020-03-07";
		}
		if($key == smar ){
			$q = "2020-03-08";
			$p = "2020-03-14";
		}
		if($key == tmar ){
			$q = "2020-03-15";
			$p = "2020-03-21";
		}
		if($key == frmar ){
			$q = "2020-03-22";
			$p = "2020-03-28";
		}
		if($key == fapr ){
			$q = "2020-03-29";
			$p = "2020-04-04";
		}
		if($key == sapr ){
			$q = "2020-04-05";
			$p = "2020-04-11";
		}
		if($key == tapr ){
			$q = "2020-04-12";
			$p = "2020-04-18";
		}
		if($key == frapr ){
			$q = "2020-04-19";
			$p = "2020-04-25";
		}
		if($key == frrapr ){
			$q = "2020-04-26";
			$p = "2020-04-30";
		}
		if($key == feb){
			$q = "2020-02-01";
			$p = "2020-02-29";
		}
		if($key == mar){
			$q = "2020-03-01";
			$p = "2020-03-30";
		}
		if($key == apr){
			$q = "2020-04-01";
			$p = "2020-04-29";
		}
		if($key == "2020"){
			$q = "2020-01-01";
			$p = "2020-12-31";
		}
		$query = "SELECT AVG(Sales) from Sunposales WHERE Date >= '".$q."' AND Date <= '".$q."' ";
     	$exec = mysqli_query($conn,$query);
     	while($row = mysqli_fetch_array($exec)){
     		echo round($row['AVG(Sales)']);
      	}
		  mysqli_close($conn);
}

?>
