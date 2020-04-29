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
  .toptabs{
        margin:auto;
        margin-top:30px;
        width:300px;
        height:40px;
        background-color:#041E8A;
      }

      .toptabsbutton{
        background-color:white;
        border-color:black;
        text-align: center;
        width:130px;
        height: 40px;
        padding-top:5px;
      }

      .monthweekbutton{
        background-color:white;
        color: #9083a6;
        border-color:#9083a6;
        text-align: center;
        float:right;
        margin:6px;
        padding: 4px 20px;
        border-radius: 8px;
      }

      .monthweekbutton:hover {
        background-color: #9083a6;
        color: white;
      }

      .monthweekbutton:focus{
        background-color: #9083a6;
        color: white;
      }

      .button{
        background-color:white;
        color: #9083a6;
        border-color:#9083a6;
        text-align: center;
        float:right;
        margin:6px;
        padding: 4px 20px;
        border-radius: 8px;
      }

      .button:hover {
        background-color: #9083a6;
        color: white;
      }

      .button:focus{
        background-color: #9083a6;
        color: white;
      }


      .container{
        width: 80%;
        background-color:white;"
      }

      .container5{
        width: 1000px;
        height:770px ;
        margin:70px;
        margin-top: 40px;
        background-color:white;
        float:left;
      }

      .container1{
        width: 1000px;
        height:770px ;
        margin:auto;
        margin-top: 40px;
        background-color:white;
      }

      .container2{
        width: 50px;
        height:770px ;
        margin:50px;
        margin-top: 40px;
        background-color: white;
        float:left;
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

      .graph{
        width: 85%;
        height:570px ;
        background-color:white;
      }

      .card1{
        background-color:white;
        margin-left:30px;
        margin-top:30px;
        margin-bottom: 100px;
        transition: 0.3s;
        width:90%;
        height:40%;
        padding: 25px;
      }

      .card2{
        background-color:white;
        margin-left:30px;
        margin-top:30px;
        margin-bottom: 100px;
        transition: 0.3s;
        width:90%;
        height:40%;
        padding: 25px;
      }

      .checkbox{
        width:25px;
        height:25px;
      }

      .heading{
        padding-top: 20px;
        margin-left: 20px;
        width:100%;
        background-color:white;
      }

      .carddropdown{
        float:left;
        width:100px;
        height:50px;
        font-size:25px;
        margin-right:6px;
        font-weight:bold;
      }

      .data{
        font-size:40px;
        font-weight:bold;
        float: left;
      }


      @keyframes example {
        from {background-color: red;left:150px; top:0px;}
        to {background-color: yellow;left:1000px; top:0px;}
      }

      .nav_bar{
        background-color: darkgrey;
        height: 100px;
        color: rgb(118, 118, 218);
        padding:10px;
        position: relative;
        z-index: 3;
        /* color: white; */
      }
      .nav_bar ul{
        width:100%;
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

      .card3{
        margin-left:20px;
        float:right;
        margin:5px;
        width:30%;
      }

      .week_bar{
        float:right;
        width:100%;
      }

      .toppart{
        width: 90%;
        height:180px;
        background-color:white;
      }

      .card5{
        margin-left:100px;
        float:right;
        margin:5px;
        width:35%;
        padding-left: 80px;
      }

      .dropdown1{
      width:80px;
      height:45px;
      font-size:25px;
      margin-right:6px;
      font-weight:bold;
      }

      .dropdown2{
      width:160px;
      height:45px;
      font-size:25px;
      margin-right:6px;
      font-weight:bold;
      }


  </style>
 <script type="text/javascript">

 google.load("visualization", "1", {packages:["corechart"]});
 google.setOnLoadCallback(drawChart1);
 google.setOnLoadCallback();
 google.setOnLoadCallback(drawTrendlines);

function drawChart1() {

  var jsonData = $.ajax({
      url: "getData1.php",
      dataType: "json",
      async: false
      }).responseText;

var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));


 var options = {  title: '' };
 var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
 chart.draw(data,options);
 }

function drawTrendlines() {
    var array = ['Date','鮮味魚扎','鮮墨魚丸','鮮豬肉丸','鮮蝦雲吞','自製水餃','南乳豬手','秘製炸醬','鮮炸魚皮','鮮魚皮餃',
      '原汁牛腩','金錢牛肚','秘製孖筋','自製魚蛋','雙滑魚片','黃金魚角','手打牛丸','牛筋丸','五香牛雜'];

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
              ".$row['ngaogenyun'].",".$row['ngaojap']."],";

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


$(document).ready(function(){
   $('#selectweek_feb').change(function(){
           //Selected value
           var inputValue = $(this).val();

           //Ajax for calling php function
           $.post('getData.php', { dropdownValue: inputValue }, function(data){
               var jsonData = data;
               var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

              var options = {  title: '' };
              var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
              chart.draw(data,options);

           });
       });
       });


$(document).ready(function(){
  $('#selectweek_mar').change(function(){
    //Selected value
    var inputValue = $(this).val();

    //Ajax for calling php function
    $.post('getData.php', { dropdownValue: inputValue }, function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '' };
       var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
       chart.draw(data,options);

    });
});
});


$(document).ready(function(){
  $('#selectweek_apr').change(function(){
    //Selected value
    var inputValue = $(this).val();

    //Ajax for calling php function
    $.post('getData.php', { dropdownValue: inputValue }, function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '' };
       var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
       chart.draw(data,options);

    });
});
});

$(document).ready(function(){
   $('#selectweek_feb_1').change(function(){
           //Selected value
           var inputValue = $(this).val();

           //Ajax for calling php function
           $.post('getALL.php', { dropdownValue: inputValue }, function(data){
               var jsonData = data;
               var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

               var options = {  width:800, height:570,
                      bar: { groupWidth: '75%' },
                      isStacked: true,};
              var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
              chart.draw(data,options);

           });
       });
       });


$(document).ready(function(){
  $('#selectweek_mar_1').change(function(){
    //Selected value
    var inputValue = $(this).val();

    //Ajax for calling php function
    $.post('getALL.php', { dropdownValue: inputValue }, function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = { width:800, height:570,
               bar: { groupWidth: '75%' },
               isStacked: true,};

       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
       chart.draw(data,options);

    });
});
});


$(document).ready(function(){
  $('#selectweek_apr_1').change(function(){
    //Selected value
    var inputValue = $(this).val();

    //Ajax for calling php function
    $.post('getALL.php', { dropdownValue: inputValue }, function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = { width:800, height:570,
               bar: { groupWidth: '75%' },
               isStacked: true,};

       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
       chart.draw(data,options);

    });
});
});

$(document).ready(function(){
  $('#selectmonth').change(function(){
    //Selected value
    var inputValue = $(this).val();

    //Ajax for calling php function
    $.post('getALL.php', { dropdownValue: inputValue }, function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '' };
       var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
       chart.draw(data,options);

    });

    //Ajax for calling php function
    $.post('gettotal.php', { dropdownValue: inputValue }, function(data_1){
        document.getElementById("total").innerHTML = data_1;
    });


    $.post('getavg.php', { dropdownValue: inputValue }, function(data_2){
        document.getElementById("average").innerHTML = data_2;
    });
});
});

$(document).ready(function(){
$('#selectmonth').click(function(){
    //Selected value
    var inputValue = $(this).val();

    //Ajax for calling php function
    $.post('getData.php', { dropdownValue: inputValue }, function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '' };
       var chart = new google.visualization.LineChart(document.getElementById("columnchart1"));
       chart.draw(data,options);

    });
});
});

$(document).ready(function(){
$('#checkbox_yujak').click(function(){

    $('#chart_div_3').show();
    $('#chart_div').hide();
    $('#week_bar').hide();

    //Selected value
    //Ajax for calling php function
    $.post('getingred.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '鮮味魚扎本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yuyun').click(function(){

  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();

    //Selected value
    //Ajax for calling php function
    $.get('getingred_yuyun.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '鮮墨魚丸本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yuyun_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yuyun_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yukyun').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_yukyun.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '鮮豬肉丸本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yukyun_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yukyun_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_wuntun').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_wuntun.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '鮮蝦雲吞本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_wuntun_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_wuntun_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_suigao').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_suigao.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '自製水餃本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_suigao_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_suigao_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_jusao').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_jusao.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '南乳豬手本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_jusao_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_jusao_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_jajueng').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_jajueng.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '秘製炸醬 本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_jajueng_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_jajueng_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yupei').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_yupei.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '鮮炸魚皮本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yupei_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yupei_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yupeigao').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_yupeigao.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '鮮魚皮餃本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yupeigao_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yupeigao_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_ngaolam').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_ngaolam.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '原汁牛腩本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_ngaolam_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_ngaolam_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_ngaotou').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_ngaotou.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '金錢牛肚本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_ngaotou_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_ngaotou_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_magun').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_magun.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '秘製孖筋本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_magun_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_magun_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yudan').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_yudan.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '自製魚蛋本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yudan_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yudan_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yupin').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_yupin.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '雙滑魚片本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yupin_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yupin_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_yugok').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_yugok.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '黃金魚角本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_yugok_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_yugok_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_ngoyun').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_ngoyun.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '手打牛丸本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_ngoyun_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_ngoyun_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_ngaogenyun').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_ngaogenyun.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '牛筋丸本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_ngaogenyun_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_ngaogenyun_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});

$(document).ready(function(){
$('#checkbox_ngaojap').click(function(){
  $('#chart_div_3').show();
  $('#chart_div').hide();
  $('#week_bar').hide();
    //Selected value
    //Ajax for calling php function
    $.get('getingred_ngaojap.php', function(data){
        var jsonData = data;
        var data = google.visualization.arrayToDataTable($.parseJSON(jsonData));

       var options = {  title: '五香牛雜本週銷量', height:300 };
       var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_4"));
       chart.draw(data,options);

    });

    $.get('getingred_ngaojap_1.php', function(data_1){
      document.getElementById("used").innerHTML = data_1;
    });

    $.get('getingred_ngaojap_2.php', function(data_2){
      document.getElementById("forecast_usage").innerHTML = data_2;
    });

  });
});



function showsales() { //function to show each dashboard
  var x = document.getElementById("sales dashboard");
  x.style.display = "block";

  var y = document.getElementById("food dashboard");
  y.style.display = "none";
}

function showingred() { //function to show each dashboard
  var z = document.getElementById("food dashboard");
  z.style.display = "block";
  var k = document.getElementById("sales dashboard");
  k.style.display = "none";

  }

function toggle(source) //function to select all checkboxes
  {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
  }



function showchart(){ //default function to show all sales
  drawChart1();
}

function showmonth(str) { //function to show corresponding week bar
    if (str == "feb") {
      var k = document.getElementById("feb_week");
        k.style.display = "block";
      var ry = document.getElementById("mar_week");
        ry.style.display = "none";
      var rz = document.getElementById("apr_week");
        rz.style.display = "none";
    }

    if (str == "mar") {
      var ax = document.getElementById("mar_week");
        ax.style.display = "block";
      var ay = document.getElementById("feb_week");
        ay.style.display = "none";
      var az = document.getElementById("apr_week");
        az.style.display = "none";
    }

    if (str == "apr") {
      var cx = document.getElementById("apr_week");
        cx.style.display = "block";
      var cy = document.getElementById("mar_week");
        cy.style.display = "none";
      var cz = document.getElementById("feb_week");
        cz.style.display = "none";
    }
}

function showmonth_1(str) { //function to show corresponding week bar
    if (str == "feb") {
      var ka = document.getElementById("feb_week_1");
        ka.style.display = "block";
      var rya = document.getElementById("mar_week_1");
        rya.style.display = "none";
      var rza = document.getElementById("apr_week_1");
        rza.style.display = "none";
    }

    if (str == "mar") {
      var axy = document.getElementById("mar_week_1");
        axy.style.display = "block";
      var ayg = document.getElementById("feb_week_1");
        ayg.style.display = "none";
      var azh = document.getElementById("apr_week_1");
        azh.style.display = "none";
    }

    if (str == "apr") {
      var cxk = document.getElementById("apr_week_1");
        cxk.style.display = "block";
      var cyk = document.getElementById("mar_week_1");
        cyk.style.display = "none";
      var czk = document.getElementById("feb_week_1");
        czk.style.display = "none";
    }
}



function loadtotal(){
  var data =
  <?php
   $conn=mysqli_connect('sophia.cs.hku.hk','ywlai','YZjNGaaa') or die ('Failed to Connect '.mysqli_error($conn));
   mysqli_select_db($conn, 'ywlai') or die ('Failed to Access DB'.mysqli_error($conn));

     $query = "SELECT SUM(Sales) from Sunposales WHERE Date >= '2020-04-01' AND Date <= '2020-04-30' ";
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

     $query = "SELECT AVG(Sales) from Sunposales WHERE Date >= '2020-04-01' AND Date <= '2020-04-30' ";
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


$(document).ready(function(){
$('#show_overview').click(function(){
  $('#chart_div_3').hide();
  $('#chart_div').show();
  $('#week_bar').show();
  });
});

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
  <div class="toppart">
    <div class="heading">
          <card class="card3" >
            <h4 style="color:red;">總銷售額</h4>
            <div id="total" class=data></div>
          </card>
          <card class="card3">
            <h4 style="color:red;">平均銷售額</h4>
            <div id="average" class=data></div>
          </card>
          <card class="card5" >
          <select class="dropdown1" id="selectmonth" onchange=showmonth(this.value)>
            <option value="">月:</option>
            <option value="feb">二月</option>
            <option value="mar">三月</option>
            <option value="apr" selected="selected">四月</option>
          </select>
          <h1>銷售額</h1>
          </card>
    </div>

    <div class="week_bar">
    <div id="feb_week">
      <select class="dropdown2" id="selectweek_feb" style="float:right;">
      <option value="">星期:</option>
      <option value="ffeb">2/2-8/2</option>
      <option value="sfeb">9/2-15/2</option>
      <option value="tfeb">16/2-22/2</option>
      <option value="frfeb">23/2-29/2</option>
      </select>
      </div>
    <div id="mar_week" style ="display:none;">
      <select class="dropdown2" id="selectweek_mar" style="float:right;">
      <option value="">星期:</option>
      <option value="fmar">1/3-7/3</option>
      <option value="smar">8/3-14/3</option>
      <option value="tmar">15/3-21/3</option>
      <option value="frmar">22/3-28/3</option>
      </select></div>
    <div id="apr_week" style ="display:none;">
      <select class="dropdown2" id="selectweek_apr" style="float:right;">
      <option value="">星期:</option>
      <option value="fapr">29/3-4/4</option>
      <option value="sapr">5/4-11/4</option>
      <option value="tapr">12/4-18/4</option>
      <option value="frapr">19/4-25/4</option>
      </select></div>
    <button class="button" ><h5>星期</h5></button>
    <button onclick="showchart()" class="button" ><h5>月</h5></button>
  </div>
  </div>

 <div class="container" style="width: 85%; height:570px ; background-color:white;">
 <div id="columnchart1" style="width: 100%; height: 100%;" ></div>
 </div>
</div>

</div>

<div id="food dashboard" style="display:none;">
  <div class="container5">

    <div class="container" style="width: 80%; height:150px;background-color:white;">
      <div class="heading" style="margin-left: 20px;margin-top:40px;padding-top:40px;width:30%;"><h1>銷售量</h1></div>

      <div id="week_bar" style="float:right;width:30%;">
      <select class="dropdown1" id="selectmonth" onchange=showmonth_1(this.value) style="float:right;">
        <option value="">月:</option>
        <option value="feb">二月</option>
        <option value="mar">三月</option>
        <option value="apr">四月</option>
      </select>
      <div style="float:right;width:30%;">
      <div id="feb_week_1">
        <select class="dropdown2" id="selectweek_feb_1" style="float:right;">
        <option value="">星期:</option>
        <option value="ffeb">2/2-8/2</option>
        <option value="sfeb">9/2-15/2</option>
        <option value="tfeb">16/2-22/2</option>
        <option value="frfeb">23/2-29/2</option>
        </select>
        </div>
      <div id="mar_week_1" style ="display:none;">
        <select class="dropdown2" id="selectweek_mar_1" style="float:right;">
        <option value="">星期:</option>
        <option value="fmar">1/3-7/3</option>
        <option value="smar">8/3-14/3</option>
        <option value="tmar">15/3-21/3</option>
        <option value="frmar">22/3-28/3</option>
        </select></div>
      <div id="apr_week_1" style ="display:none;">
        <select class="dropdown2" id="selectweek_apr_1" style="float:right;">
        <option value="">星期:</option>
        <option value="fapr">29/3-4/4</option>
        <option value="sapr">5/4-11/4</option>
        <option value="tapr">12/4-18/4</option>
        <option value="frapr">19/4-25/4</option>
        </select></div>
    </div>
  </div>
  <button id="show_overview" style="float:right;display:none;">銷售量總覽</button>
    </div>

   <div class="container" style="width: 85%; height:570px ; background-color:white;">


  <div id="overview">
   <div id="chart_div" style="width: 100%; height: 100%; " ></div> <!--container for all ingredient stacked table-->
   <div id="chart_div_2" style="width: 100%; height: 100%; display:none;"></div> <!--container for top8 ingredient stacked table-->
  </div>
   <div id="chart_div_3" style="width: 100%; height: 100%; display:none; "> <!--container for each ingredient forecast-->

      <div id="chart_div_4" style="width: 100%; height: 50%; "></div>
           <br></br>
      <div id="ingred_table" style="width:400px;">
          <table style="margin:auto;">
            <tr>
              <th style="width:400px;" >本週用量</th>
              <th style="width:400px;">預計下周用量</th>
              <th style="width:400px;">存量</th>
              <th style="width:400px;">建議入貨日</th>
            </tr>
            <tr>
              <td><div id="used"></div></td>
              <td><div id="forecast_usage"></div></td>
              <td><div id="stock"></div></td>
              <td><div id="suggested_refill_date"></div></td>
            </tr>
         </table></div>
       </div>

   </div>
   </div>



  <div class="container3" >

    <div class="column1" style="width:50%; float:left;" >
    <h3>鮮味魚扎 <button  class="checkbox" id="checkbox_yujak" ></h3>
    <h3>鮮墨魚丸 <button  class="checkbox" id="checkbox_yuyun"></h3>
    <h3>鮮豬肉丸 <button  class="checkbox" id="checkbox_yukyun"></h3>
    <h3>鮮蝦雲吞 <button  class="checkbox" id="checkbox_wuntun"></h3>
    <h3>自製水餃 <button  class="checkbox" id="checkbox_suigao"></h3>
    <h3>南乳豬手 <button  class="checkbox" id="checkbox_jusao"></h3>
    <h3>秘製炸醬 <button  class="checkbox" id="checkbox_jajueng"></h3>
    <h3>鮮炸魚皮 <button  class="checkbox" id="checkbox_yupei"></h3>
    <h3>鮮魚皮餃 <button  class="checkbox" id="checkbox_yupeigao"></h3>
    <h3>原汁牛腩 <button  class="checkbox" id="checkbox_ngaolam"></h3>
    </div>
    <div class="column2" style="width:50% ;float:left;">
    <h3>金錢牛肚 <button  class="checkbox" id="checkbox_ngaotou"></h3>
    <h3>秘製孖筋 <button  class="checkbox" id="checkbox_magun"></h3>
    <h3>自製魚蛋 <button  class="checkbox" id="checkbox_yudan"></h3>
    <h3>雙滑魚片 <button  class="checkbox" id="checkbox_yupin"></h3>
    <h3>黃金魚角 <button  class="checkbox" id="checkbox_yugok"></h3>
    <h3>手打牛丸 <button  class="checkbox" id="checkbox_ngoyun"></h3>
    <h3>牛筋丸 <button  class="checkbox" id="checkbox_ngaogenyun"></h3>
    <h3>五香牛雜 <button  class="checkbox" id="checkbox_ngaojap"></h3>
    <br></br>

    </div>



  </div>


</div>

</body>
</html>
