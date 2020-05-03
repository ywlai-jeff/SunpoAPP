<?php

$food = $_GET['food'];
$id = $_GET['id'];
$item;

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

    $query = "Select inventory FROM SunpoInventory WHERE food = \"$food[$id]\"";

    $inventory;

    $exec = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($exec)){
        $inventory = $row['inventory'];
    }

    $forecast;

    if($food[$id] == "yujak"){
        $item = "鮮味魚扎";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yuyun"){
        $item = "鮮墨魚丸";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yukyun"){
        $item = "鮮豬肉丸";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "wuntun"){
        $item = "鮮蝦雲吞";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "suigao"){
        $item = "自製水餃";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "jusao"){
        $item = "南乳豬手";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "jajueng"){
        $item = "秘製炸醬";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yupei"){
        $item = "鮮炸魚皮";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yupeigao"){
        $item = "鮮魚皮餃";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "ngaolam"){
        $item = "原汁牛腩";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "ngaotou"){
        $item = "金錢牛肚";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "magun"){
        $item = "秘製孖筋";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yudan"){
        $item = "自製魚蛋";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yupin"){
        $item = "雙滑魚片";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "yugok"){
        $item = "黃金魚角";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "ngoyun"){
        $item = "手打牛丸";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "ngaogenyun"){
        $item = "牛筋丸";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7)-1)));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }
    else if($food[$id] == "ngauzharp"){
        $item = "五香牛雜";
        // $forecast = date("Y-m-d", time() + floor(86400*($inventory/($usage/7))));
        if(floor($inventory/($usage/7)) == 1)
            $forecast = "今天!!!";
        else if (floor($inventory/($usage/7)) < 1)
            $forecast = "請馬上入貨!!!";
        else if (floor($inventory/($usage/7)) == 2)
            $forecast = "明天!!!";
        else
            $forecast = date("Y-m-d", time() + floor(86400*(($inventory/($usage/7))-1)));
        if ($inventory <= 0)
            $forecast = "請馬上入貨!!!";
        }

    $red;
    // if($forecast <= date("Y-m-d"))
    //     $forecast = "NOW!";
    if($forecast == "請馬上入貨!!!"){
        $red = 'class="forecast_red"';
    }else{
        $red = '';
    }

    $average = number_format($average, 1);

    mysqli_close($conn);

    echo '<tr id="'.$item.'_row"><td style="width:20%;text-align:center;">'.$item.'</td>'.'<td style="width:20%;text-align:center;">'.$usage.' 磅</td><td style="width:20%;text-align:center;">'.$average.' 磅</td><td style="width:20%;text-align:center;">'.$inventory.' 磅</td><td '.$red.' style="width:20%;text-align:center;font-weight:bold;">'.$forecast.'</td></tr>';
 
?>
