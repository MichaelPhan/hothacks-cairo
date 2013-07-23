<?php

//////////////////////////////////////////////////////////////////////////////////////////
// Show JS based on TEST variable
//////////////////////////////////////////////////////////////////////////////////////////

$str = "";

if ($TEST == 1){
	// load all external js files
	foreach($JS["head"] as $path){
		$str .= '<script type="text/javascript" src="'.$PATH.$path.'?v='.$VERSION.'"></script>';
	}
}else if ($TEST == 0){
	$str .= '<script type="text/javascript" src="'.$PATH.'js/min/headjs.min.js"></script>';
}

echo($str);

?>
