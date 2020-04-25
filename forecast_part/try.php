<?php  
session_start();
$_SESSION['color']=array();
array_push($_SESSION['color'],"blue");
$_SESSION['color']=array_diff($_SESSION['color'],"blue");
$colors = array();
array_push($colors,"blue","yellow","green","black");
//unset($colors['blue']);
$colors = array_diff($colors, array('blue'));


?>


<!DOCTYPE html>
<html>
<head>
<script>
function myFunction($color) {
  var checkBox1 = document.getElementById("myCheck1");
  var checkBox2 = document.getElementById("myCheck2");
  var text = document.getElementById("text");
  if (checkBox1.checked == true || checkBox2.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
  
  text.innerHTML = $color;
  array_push($colors, $color);

}
</script>
</head>
<body>
<?php 
//foreach ($colors as $value) {
//foreach ($x as $colors){
//$string = join(',', $colors);
//for ($x = 0; $x <= count($colors); $x++) {

 
//};
echo "<p>";
for($i=0;$i<count($colors);$i++){
 echo $colors[$i];
}
echo "</p>";
?>


Checkbox1: <input type="checkbox" id="myCheck1"  onclick="myFunction('red')">
Checkbox2: <input type="checkbox" id="myCheck2"  onclick="myFunction('blue')">


<p id="text" style="display:none">Checkbox is CHECKED!</p>








</body>
</html>

 <?php

foreach ($colors as $value) {
  echo "$value <br>";
}

unset($_SESSION['color']);
?> 



