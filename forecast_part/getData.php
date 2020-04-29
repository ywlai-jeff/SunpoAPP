<?php
if ($_POST['dropdownValue']){
    //call the function or execute the code
    processDrpdown($_POST['dropdownValue']);
}

function processDrpdown($selectedVal) {
    $key = $selectedVal;

		if($key == ffeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-01";
				$p = "2020-02-08";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == sfeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-09";
				$p = "2020-02-15";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == tfeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-16";
				$p = "2020-02-22";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == frfeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-23";
				$p = "2020-02-29";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == fmar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-03-01";
				$p = "2020-03-07";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
			 	$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == smar ){
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
		}

		if($key == tmar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-03-15";
			$p = "2020-03-21";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == frmar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-03-22";
			$p = "2020-03-28";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == fapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-03-29";
				$p = "2020-04-04";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == sapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-04-05";
				$p = "2020-04-11";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == tapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-04-12";
				$p = "2020-04-18";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == frapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-04-19";
				$p = "2020-04-25";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == feb){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-02-01";
			$p = "2020-02-29";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == mar){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-03-01";
			$p = "2020-03-30";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == apr){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-04-01";
			$p = "2020-04-29";

			 $query = "SELECT * from Sunposales WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY Date";
			 $exec = mysqli_query($conn,$query);
			 $result = array();
			 $result[0] = array('date','Sales');
			 while($row = mysqli_fetch_array($exec)){
				$result[] = array($row['Date'],(int)$row['Sales']);
				}

				echo json_encode($result);
				mysqli_close($conn);
		}

}

?>
