<?php

//////////////////////////////////////////////////////////////////////////////////////////
// Show JS based on TEST variable
//////////////////////////////////////////////////////////////////////////////////////////

$str = "";

if ($TEST == 1){
	// load all external js files
	foreach($JS["external"] as $path){
		$str .= '<script type="text/javascript" src="'.$PATH.$path.'?v='.$VERSION.'"></script>';
	}
	// load original js files
	foreach($JS["core"] as $path){
		$str .= '<script type="text/javascript" src="'.$PATH.$path.'?v='.$VERSION.'"></script>';
	}
	// load page specific js files
	foreach($JS["page"][$ID] as $path){
		$str .= '<script type="text/javascript" src="'.$PATH.$path.'?v='.$VERSION.'"></script>';
	}
}else if ($TEST == 0){
	$str .= '<script type="text/javascript" src="'.$PATH.'js/min/external.min.js"></script>';
	$str .= '<script type="text/javascript" src="'.$PATH.'js/min/core.min.js"></script>';
	$str .= '<script type="text/javascript" src="'.$PATH.'js/min/'.$ID.'.min.js?v='.$VERSION.'"></script>';
}

$str .= '
	<script type="text/javascript">
		Global.host = "'.$HOST.'";
		Global.path = "'.$PATH.'";
		Global.id = "'.$ID.'";
		Global.test = "'.$TEST.'";
		Global.appDataTest = "'.$APP_DATA_TEST.'";
	</script>
';

echo($str);

?>
