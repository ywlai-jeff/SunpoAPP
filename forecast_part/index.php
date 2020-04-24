<!DOCTYPE HTML>
<html>
<head>
 <meta charset="utf-8">
 <title>Sunpo Forecast</title>
 <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    .button{
      float:right;
      background-color:white;
      border-color:#9083a6;
      margin:6px;
      padding:2px;
    }

    .title{

    }

    .welcome {
      width: 500px;
      height: 100px;
      background-color: red;
      text-align:center;
      padding:10px;
      position: relative;
      animation-name: example;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    @keyframes example {
      from {background-color: red;left:150px; top:0px;}
      to {background-color: yellow;left:1000px; top:0px;}
    }

    .container1{
      width: 50%;
      height:770px ;
      margin:70px;
      margin-top: 40px;
      background-color:white;
      float:left;
    }

    .button1{
      background-color:white;
      border-color:black;
      width:130px;
    }

    .container2{
      width: 30%;
      height:770px ;
      margin:50px;
      background-color:#041E8A;
      float:left;
    }

    .card{
      margin-left:30px;
      margin-top:30px;
      margin-bottom: 100px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width:80%;
      height:200px;
      padding: 25px;
    }

    .container3{
      padding:20px;
      width: 30%;
      height:770px ;
      margin:50px;
      background-color:white;
      float:left;
      padding: 30px;
    }

    .checkbox{
      width:25px;
      height:25px;
    }

    .nav_bar{
      background-color: rgba(0,0,0,.7);
      height: 100px;
      color: rgb(118, 118, 218);
      padding:10px;
      position: relative;
      z-index: 3;
      /* color: white; */
    }
    .nav_bar ul{
      list-style-type: none;
      background-color: #282c34;
      margin: 0;
    }

    .nav_bar ul li{
      display: inline-block;
      width: 20%;
      text-align: center;
      background-color: lightgrey;
      padding: 10px;
      border-right: 2px solid rgba(227,225,225, .8);
      float:left;
    }

    .nav_bar ul li:hover{
      cursor: pointer;
      background-color: grey;
    }

    .data{
      font-size:40px;
      font-weight:bold;
    }


  </style>
 <script type="text/javascript">

 google.load("visualization", "1", {packages:["corechart","controls"]});
 google.setOnLoadCallback(drawChart1);
 google.setOnLoadCallback(drawChart2);
 google.setOnLoadCallback(drawChart3);
 google.setOnLoadCallback(drawChart4);
 google.setOnLoadCallback(drawTrendlines);
 google.setOnLoadCallback(drawTrendlines2);

function drawChart1() {

  var jsonData = $.ajax({
      url: "getData.php",
      dataType: "json",
      async: false
      }).responseText;

var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));


 var options = {  title: '' , width:850, height:570};
 var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
 chart.draw(data,options);
 }

function drawChart2() {

   var jsonData = $.ajax({
       url: "getData1.php",
       dataType: "json",
       async: false
       }).responseText;

       var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));


       var options = { title: '' , width:800, height:570,
       hAxis:{
         textStyle:{
           fontSize : 12
   }
  }
  };
  var chart = new google.visualization.LineChart(document.getElementById("columnchart2"));
  chart.draw(data,options);
  }

function drawChart3() {

    var jsonData = $.ajax({
        url: "getData2.php",
        dataType: "json",
        async: false
        }).responseText;

        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));


        var options = { title: '' , width:800, height:570,
        hAxis:{
          textStyle:{
            fontSize : 12
          }
        }
      };
   var chart = new google.visualization.LineChart(document.getElementById("columnchart3"));
   chart.draw(data,options);
   }

   function drawChart4() {

     var jsonData = $.ajax({
         url: "getData3.php",
         dataType: "json",
         async: false
         }).responseText;

   var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));


    var options = { title: '' , width:800, height:570,
    hAxis:{
      textStyle:{
        fontSize : 12
      }
    }
   };
    var chart = new google.visualization.LineChart(document.getElementById("columnchart4"));
    chart.draw(data,options);
    }

function drawTrendlines() {
    var array = ['Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
      '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸'];

      var data = google.visualization.arrayToDataTable([
        array,
        <?php
        $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
        mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

        	$query = "SELECT * from SUNPO ORDER BY date";
        	$exec = mysqli_query($conn,$query);
        	while($row = mysqli_fetch_array($exec)){
        	echo "['".$row['date']."',
              ".$row['yujak'].",".$row['yuyun'].",".$row['yukyun'].",".$row['wuntun'].",
              ".$row['suigao'].",".$row['jusao'].",".$row['jajueng'].",".$row['yupei'].",
              ".$row['yupeigao'].",".$row['ngaolam'].",".$row['ngaotou'].",".$row['magun'].",
              ".$row['yudan'].",".$row['yupin'].",".$row['yugok'].",".$row['ngoyun'].",
              ".$row['ngaogenyun']."],";

        	 }
        ?> ]);

      var options = {
        width:800, height:570,
        bar: { groupWidth: '75%' },
        isStacked: true,
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

function drawTrendlines2() {
       var array = ['Date','原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸'];

         var data = google.visualization.arrayToDataTable([
           array,
           <?php
           $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
           mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

           	$query = "SELECT * from SUNPO ORDER BY date";
           	$exec = mysqli_query($conn,$query);
           	while($row = mysqli_fetch_array($exec)){
           	echo "['".$row['date']."',
                 ".$row['ngaolam'].",".$row['ngaotou'].",".$row['magun'].",
                 ".$row['yudan'].",".$row['yupin'].",".$row['yugok'].",".$row['ngoyun'].",
                 ".$row['ngaogenyun']."],";

           	 }
           ?> ]);

         var options = {
           width:800, height:570,
           bar: { groupWidth: '75%' },
           isStacked: true,
         };

         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div_2'));
         chart.draw(data, options);
       }

function showweek() {
  var k = document.getElementById("columnchart4");
  if (k.style.display === "none") {
    k.style.display = "block";
  }
  var ky = document.getElementById("columnchart1");
  ky.style.display = "none";
  var kz = document.getElementById("columnchart3");
  kz.style.display = "none";
  var kz = document.getElementById("columnchart2");
  kz.style.display = "none";
}

function showmonth() {
    var k = document.getElementById("columnchart1");
    if (k.style.display === "none") {
      k.style.display = "block";
    }
    var ky = document.getElementById("columnchart3");
    ky.style.display = "none";
    var kz = document.getElementById("columnchart4");
    kz.style.display = "none";
    var kz = document.getElementById("columnchart2");
    kz.style.display = "none";

}

function showsales() {
  var x = document.getElementById("sales dashboard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("food dashboard");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function showingred() {
  var z = document.getElementById("food dashboard");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  var k = document.getElementById("sales dashboard");
    if (k.style.display === "none") {
      k.style.display = "block";
    } else {
      k.style.display = "none";
    }
  }

function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function loadtotal(){
  var data =
  <?php
   $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
   mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

     $query = "SELECT SUM(Sales) from Sunposales";
     $exec = mysqli_query($conn,$query);
     while($row = mysqli_fetch_array($exec)){
     echo "[".$row['SUM(Sales)']."]";
      }
   ?>;
    document.getElementById("total").innerHTML = data;
}

function loadaverage(){
  var average =
  <?php
   $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
   mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

     $query = "SELECT AVG(Sales) from Sunposales";
     $exec = mysqli_query($conn,$query);
     while($row = mysqli_fetch_array($exec)){
     echo "[".$row['AVG(Sales)']."]";
      }
   ?>;
    document.getElementById("average").innerHTML = average;
}

function loaddata(){
  loadtotal();
  loadaverage();
}

function showtop8() {
  var x = document.getElementById("chart_div");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("chart_div_2");
    if (y.style.display === "block") {
    y.style.display = "none";
    } else {
      y.style.display = "block";
      }
}

function showall() {
  var x = document.getElementById("chart_div_2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("chart_div");
    if (y.style.display === "block") {
    y.style.display = "none";
    } else {
      y.style.display = "block";
      }
}

function showuser(str) {
    if (str == "1") {
      var kx = document.getElementById("columnchart2");
        if (kx.style.display === "none") {
          kx.style.display = "block";
        }
        var ky = document.getElementById("columnchart3");
        ky.style.display = "none";
        var kz = document.getElementById("columnchart4");
        kz.style.display = "none";
        var kz = document.getElementById("columnchart1");
        kz.style.display = "none";

    }

    if (str == "2") {
      var yx = document.getElementById("columnchart3");
        if (yx.style.display === "none") {
          yx.style.display = "block";
        }

        var yy = document.getElementById("columnchart2");
        yy.style.display = "none";

        var zy = document.getElementById("columnchart4");
        zy.style.display = "none";

        var yz = document.getElementById("columnchart1");
        yz.style.display = "none";

    }

    if (str == "3") {
      var yx = document.getElementById("columnchart4");
        if (yx.style.display === "none") {
          yx.style.display = "block";
        }

        var yy = document.getElementById("columnchart1");
        yy.style.display = "none";

        var zy = document.getElementById("columnchart2");
        zy.style.display = "none";

        var yz = document.getElementById("columnchart3");
        yz.style.display = "none";

    }
    }


    </script>

</head>
<body style="background-color:#041E8A" onload="loaddata()">

<div class="nav_bar">
              <h4 class="fas fa-home"> SUN PO</h4>
              <ul>
                <li><div class="fas fa-user"></div>又係你呀陳生</li>
                <li onClick={this.OrderClick}><a class="function_btn fas fa-shopping-bag"> 點餐</a></li>
                <li onClick={this.PaybillsClick}><a class="function_btn fas fa-money-bill-wave"> 查閱/結賬</a></li>
                <li onClick={this.ForecastClick}><a class="function_btn fas fa-atom"> 銷量預測</a></li>
                <li onClick={this.LogoutClick}><a class="function_btn fas fa-power-off"> 登出</a></li>
              </ul>
            </div>
<div class="container" style="margin:auto;margin-top:30px;width:300px;height:40px;background-color:#041E8A;">
  <button  onclick="showsales()" class="button1" ><h5>銷售額</h5></button>
  <button  onclick="showingred()" class="button1" ><h5>食材</h5></button>
</div>
<div id="sales dashboard">



<div class="container1">
  <div class="container" style="width: 80%; height:150px;background-color:white;">
    <div class="heading" style="margin-left: 20px;margin-top:40px;padding-top:40px;"><h1>銷售額</h1></div>
    <select name="users" onchange="showuser(this.value)" style="float:right;">
      <option value="">揀個禮拜:</option>
      <option value="1">1/3-7/3</option>
      <option value="2">8/3-14/3</option>
      <option value="3">15/3-21/3</option>
      </select>
    <button onclick="showweek()" class="button" ><h5>星期</h5></button>
    <button onclick="showmonth()" class="button" ><h5>月</h5></button>
  </div>

 <div class="container" style="width: 85%; height:570px ; background-color:white;">
 <div id="columnchart1" style="width: 100%; height: 100%;" ></div>
  <div id="columnchart2" style="width: 100%; height: 100%; display:none;"></div>
   <div id="columnchart3" style="width: 100%; height: 100%; display:none;"></div>
 <div id="columnchart4" style="width: 100%; height: 100%; display:none;"></div>



 </div>
</div>

<div class="container2" >
<div class="card">
  <h3 style="color:red;">總銷售額</h3>
  <div id="total" class=data></div>
</div>
<div class="card">
  <h3 style="color:red;">平均銷售額</h3>
  <div id="average" class=data></div>
</div>
</div>
</div>

<div id="food dashboard" style="display:none;">
  <div class="container1">
    <div class="container" style="width: 80%; height:150px;background-color:white;">
      <div class="heading" style="margin-left: 20px;margin-top:40px;padding-top:40px;"><h1>Product Comparison</h1></div>
      <button onclick="showtop8()" class="button" ><h5>top8</h5></button>
      <button onclick="showall()" class="button" ><h5>all</h5></button>
    </div>

   <div class="container" style="width: 85%; height:570px ; background-color:white;">
   <div id="chart_div" style="width: 100%; height: 100%;" ></div>
   <div id="chart_div_2" style="width: 100%; height: 100%; display:none;"></div>
   </div>
  </div>

  <div class="container3" >
    <form action="get.php" method="post">
    <div class="column1" style="width:50%; float:left;" >
    <h3>鮮味魚扎 <input type="checkbox" class="checkbox" value="yujak" name="formDoor[]"></h3>
    <h3>鮮墨魚丸 <input type="checkbox" class="checkbox" value="yuyun" name="formDoor[]"></h3>
    <h3>鮮豬肉丸 <input type="checkbox" class="checkbox" value="yukyun" name="formDoor[]"></h3>
    <h3>鮮蝦雲吞 <input type="checkbox" class="checkbox" value="wuntun" name="formDoor[]"></h3>
    <h3>自製水餃 <input type="checkbox" class="checkbox" value="suigao" name="formDoor[]"></h3>
    <h3>南乳豬手 <input type="checkbox" class="checkbox" value="jusao" name="formDoor[]"></h3>
    <h3>秘製炸醬 <input type="checkbox" class="checkbox" value="jajueng" name="formDoor[]"></h3>
    <h3>鮮炸魚皮 <input type="checkbox" class="checkbox" value="yupei" name="formDoor[]"></h3>
    <h3>鮮魚皮餃 <input type="checkbox" class="checkbox" value="yupeigao" name="formDoor[]"></h3>
    <h3>原汁牛腩 <input type="checkbox" class="checkbox" value="ngaolam" name="formDoor[]"></h3>
    </div>
    <div class="column2" style="width:50% ;float:left;">
    <h3>金錢牛肚 <input type="checkbox" class="checkbox" value="ngaotou" name="formDoor[]"></h3>
    <h3>秘製孖筋 <input type="checkbox" class="checkbox" value="magun" name="formDoor[]"></h3>
    <h3>自製魚蛋 <input type="checkbox" class="checkbox" value="yudan" name="formDoor[]"></h3>
    <h3>雙滑魚片 <input type="checkbox" class="checkbox" value="yupin" name="formDoor[]"></h3>
    <h3>黃金魚角 <input type="checkbox" class="checkbox" value="yugok" name="formDoor[]"></h3>
    <h3>手打牛丸 <input type="checkbox" class="checkbox" value="ngoyun" name="formDoor[]"></h3>
    <h3>牛筋丸 <input type="checkbox" class="checkbox" value="ngaogenyun" name="formDoor[]"></h3>
    <br></br>
    <h3>全選<input type="checkbox" class="checkbox" onclick="toggle(this);"/></h3>
    </div>

    <input type="submit" name="formSubmit" value="Submit" />
  </form>
  </div>


</div>

</body>
</html>
