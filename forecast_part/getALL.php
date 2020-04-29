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

      $q = "2020-02-02";
      $p = "2020-02-08";

      $query = "SELECT * from SUNPO WHERE date >= '".$q."' AND date <= '".$p."' ORDER BY date";
        $exec = mysqli_query($conn,$query);
        $result = array();
        $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
          '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
        while($row = mysqli_fetch_array($exec)){
          $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
         (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
         (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
         (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
         (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

         }
				echo json_encode($result);
				mysqli_close($conn);
		}

    if($key == sfeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-09";
				$p = "2020-02-15";

        $query = "SELECT * from SUNPO WHERE date >= '".$q."' AND date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == tfeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-16";
				$p = "2020-02-22";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == frfeb ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-02-23";
				$p = "2020-02-29";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == fmar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-03-01";
				$p = "2020-03-07";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == smar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-03-08";
			$p = "2020-03-14";

      $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
     $exec = mysqli_query($conn,$query);
     $result = array();
     $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
       '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
     while($row = mysqli_fetch_array($exec)){
       $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
      (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
      (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
      (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
      (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

      }

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == tmar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-03-15";
			$p = "2020-03-21";

      $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
     $exec = mysqli_query($conn,$query);
     $result = array();
     $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
       '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
     while($row = mysqli_fetch_array($exec)){
       $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
      (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
      (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
      (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
      (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

      }

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == frmar ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

			$q = "2020-03-22";
			$p = "2020-03-28";

      $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
     $exec = mysqli_query($conn,$query);
     $result = array();
     $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
       '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
     while($row = mysqli_fetch_array($exec)){
       $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
      (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
      (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
      (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
      (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

      }

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == fapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-03-29";
				$p = "2020-04-04";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == sapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-04-05";
				$p = "2020-04-11";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == tapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-04-12";
				$p = "2020-04-18";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}
				echo json_encode($result);
				mysqli_close($conn);
		}

		if($key == frapr ){
			$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
			mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

				$q = "2020-04-19";
				$p = "2020-04-25";

        $query = "SELECT * from SUNPO WHERE Date >= '".$q."' AND Date <= '".$p."' ORDER BY date";
 			 $exec = mysqli_query($conn,$query);
 			 $result = array();
       $result[0] = array('Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
         '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜');
       while($row = mysqli_fetch_array($exec)){
         $result[] = array($row['date'],(int)$row['yujak'],(int)$row['yuyun'],
        (int)$row['yukyun'],(int)$row['wuntun'],(int)$row['suigao'],(int)$row['jusao'],
        (int)$row['jajueng'],(int)$row['yupei'],(int)$row['yupeigao'],(int)$row['ngaolam'],
        (int)$row['ngaotou'],(int)$row['magun'],(int)$row['yudan'],(int)$row['yupin'],(int)$row['yugok'],
        (int)$row['ngoyun'],(int)$row['ngaogenyun'],(int)$row['ngaojap']);

 				}

				echo json_encode($result);
				mysqli_close($conn);
		}

}

?>
