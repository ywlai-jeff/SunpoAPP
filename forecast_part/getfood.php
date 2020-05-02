<?php

$food = $_GET['food'];
$id = $_GET['id'];
$item;

    if($food[$id] == "yujak")
        $item = "鮮味魚扎";
    else if($food[$id] == "yuyun")
        $item = "鮮墨魚丸";
    else if($food[$id] == "yukyun")
        $item = "鮮豬肉丸";
    else if($food[$id] == "wuntun")
        $item = "鮮蝦雲吞";
    else if($food[$id] == "suigao")
        $item = "自製水餃";
    else if($food[$id] == "jusao")
        $item = "南乳豬手";
    else if($food[$id] == "jajueng")
        $item = "秘製炸醬";
    else if($food[$id] == "yupei")
        $item = "鮮炸魚皮";
    else if($food[$id] == "yupeigao")
        $item = "鮮魚皮餃";
    else if($food[$id] == "ngaolam")
        $item = "原汁牛腩";
    else if($food[$id] == "ngaotou")
        $item = "金錢牛肚";
    else if($food[$id] == "magun")
        $item = "秘製孖筋";
    else if($food[$id] == "yudan")
        $item = "自製魚蛋";
    else if($food[$id] == "yupin")
        $item = "雙滑魚片";
    else if($food[$id] == "yugok")
        $item = "黃金魚角";
    else if($food[$id] == "ngoyun")
        $item = "手打牛丸";
    else if($food[$id] == "ngaogenyun")
        $item = "牛筋丸";
    else if($food[$id] == "ngauzharp")
        $item = "五香牛雜";


    $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
    mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));
        
    $query = "Select SUM(T.quantity) FROM ((SELECT quantity,date FROM `SUNPO2`WHERE Date >= \"2020-04-24\" AND Date <= \"2020-04-30\"";
    $query .= "AND food = \"$food[$id]\") AS T)";
        
    $usage;

    $exec = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($exec)){
        $usage = $row['SUM(T.quantity)'];
    }
        
    $query = "Select AVG(T.quantity)*7 AS AVERAGE FROM ((SELECT quantity,date FROM `SUNPO2` WHERE food = \"$food[$id]\") AS T)";

    $average;

    $exec = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($exec)){
        $average = $row['AVERAGE'];
    }

    mysqli_close($conn);

    echo '<tr id="'.$item.'_row"><td style="width:20%;text-align:center;">'.$item.'</td>'.'<td style="width:20%;text-align:center;">'.$usage.'</td><td style="width:20%;text-align:center;">'.$average.'</td></tr>';
 
?>
