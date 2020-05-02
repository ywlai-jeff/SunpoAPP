<?php


$item;



    $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
    mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));
        
    
    $query = "Select * FROM SunpoInventory";

    $inventory;

    $exec = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($exec)){

    if($row['food'] == "yujak"){
        $item = "鮮味魚扎";
        $id = 1;
    }
    else if($row['food'] == "yuyun"){
        $item = "鮮墨魚丸";
        $id = 2;
    }
    else if($row['food'] == "yukyun"){
        $item = "鮮豬肉丸";
        $id = 3;
    }
    else if($row['food'] == "wuntun"){
        $item = "鮮蝦雲吞";
        $id = 4;
    }
    else if($row['food'] == "suigao"){
        $item = "自製水餃";
        $id = 5;
    }
    else if($row['food'] == "jusao"){
        $item = "南乳豬手";
        $id = 6;
    }
    else if($row['food'] == "jajueng"){
        $item = "秘製炸醬";
        $id = 7;
    }
    else if($row['food'] == "yupei"){
        $item = "鮮炸魚皮";
        $id = 8;
    }
    else if($row['food'] == "yupeigao"){
        $item = "鮮魚皮餃";
        $id = 9;
    }
    else if($row['food'] == "ngaolam"){
        $item = "原汁牛腩";
        $id = 10;
    }
    else if($row['food'] == "ngaotou"){
        $item = "金錢牛肚";
        $id = 11;
    }
    else if($row['food'] == "magun"){
        $item = "秘製孖筋";
        $id = 12;
    }
    else if($row['food'] == "yudan"){
        $item = "自製魚蛋";
        $id = 13;
    }
    else if($row['food'] == "yupin"){
        $item = "雙滑魚片";
        $id = 14;
    }
    else if($row['food'] == "yugok"){
        $item = "黃金魚角";
        $id = 15;
    }
    else if($row['food'] == "ngoyun"){
        $item = "手打牛丸";
        $id = 16;
    }
    else if($row['food'] == "ngaogenyun"){
        $item = "牛筋丸";
        $id = 17;    
    }
    else if($row['food'] == "ngauzharp"){
        $item = "五香牛雜";
        $id = 18;
    }

    $inventory .= '<tr ><td style="width:20%;text-align:center;">'.$item.'</td><td id="inventory'.$id.'" style="width:20%;text-align:center;">'.$row['inventory'].'</td><td style="width:20%;text-align:center;"><input value="" id="item'.$id.'"type="text"></td><td style="width:20%;text-align:center;"><button id="item_btn_'.$id.'" onClick="modifyinventory('.$id.')">變更</button></td></tr>';

    }

    mysqli_close($conn);

    echo $inventory;
 
?>
