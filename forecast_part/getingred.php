<?php
$conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

$filters = $_POST['filters'];

   $query = "SELECT *FROM SUNPO2 WHERE Date >= \"2020-03-29\" AND Date <= \"2020-04-04\"";
//    $query .= "AND food = \"$filters[0]\" ";
 
if(count($filters) > 0){
    $query .= "AND (";
    for($i = 0; $i < count($filters); $i++) {
        if($i>0)
            $query .= "OR ";
        $query .= "food = \"$filters[$i]\"";
     }
     $query .= ")";
}

    $combined = array('date');
    $combined = array_merge($combined, $filters);

   $exec = mysqli_query($conn,$query);
   $result = array();
//    $result[0] = array('date','quantity');
    $result[0] = $combined;

   while($row = mysqli_fetch_array($exec)){
    $resulta = array($row['Date']
    // ,(int)$row['quantity']
    // ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    );

    $temp = array();
    for($i = 0; $i < count($filters); $i++){
        if($filters[$i] == $row['food']){
            $temp = array_merge($temp, array((int)$row['quantity']));
        }else{
            $temp = array_merge($temp, array(0));
        }
    }
    $resulta = array_merge($resulta, $temp);

    $result[] = $resulta;
    }
    for($i = 0; $i<count($combined); $i++){
        if($combined[$i] == "yujak")
            $combined[$i] = "鮮味魚扎";
        else if($combined[$i] == "yuyun")
            $combined[$i] = "鮮墨魚丸";
        else if($combined[$i] == "yukyun")
            $combined[$i] = "鮮豬肉丸";
        else if($combined[$i] == "wuntun")
            $combined[$i] = "鮮蝦雲吞";
        else if($combined[$i] == "suigao")
            $combined[$i] = "自製水餃";
        else if($combined[$i] == "jusao")
            $combined[$i] = "南乳豬手";
        else if($combined[$i] == "jajueng")
            $combined[$i] = "秘製炸醬";
        else if($combined[$i] == "yupei")
            $combined[$i] = "鮮炸魚皮";
        else if($combined[$i] == "yupeigao")
            $combined[$i] = "鮮魚皮餃";
        else if($combined[$i] == "ngaolam")
            $combined[$i] = "原汁牛腩";
        else if($combined[$i] == "ngaotou")
            $combined[$i] = "金錢牛肚";
        else if($combined[$i] == "magun")
            $combined[$i] = "秘製孖筋";
        else if($combined[$i] == "yudan")
            $combined[$i] = "自製魚蛋";
        else if($combined[$i] == "yupin")
            $combined[$i] = "雙滑魚片";
        else if($combined[$i] == "yugok")
            $combined[$i] = "黃金魚角";
        else if($combined[$i] == "ngoyun")
            $combined[$i] = "手打牛丸";
        else if($combined[$i] == "ngaogenyun")
            $combined[$i] = "牛筋丸";
        else if($combined[$i] == "ngauzharp")
            $combined[$i] = "五香牛雜";
    }
    $result[0] = $combined;

    echo json_encode($result);
    mysqli_close($conn);

?>
