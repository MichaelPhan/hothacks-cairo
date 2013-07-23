<?php

//////////////////////////////////////////////////////////////////////////////////////////
// Show CSS based on TEST variable
//////////////////////////////////////////////////////////////////////////////////////////

$str = '<link rel="stylesheet" href="'.$PATH.'css/min/main/main.css?v='.$VERSION.'" type="text/css"/>';
if ($TEST == 1){
	$str = '<link rel="stylesheet/less" href="'.$PATH.'css/src/main.less?v='.$VERSION.'"/>';
	$str .= '<script type="text/javascript" src="'.$PATH.'js/lib/less.min.js"></script>';
}

echo($str);

?>