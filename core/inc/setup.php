<?php

/*////////////////////////////////////////////////////////////////////////////////////////////
GLOBAL VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////*/

$HOST = NULL;
$PATH = NULL;
$ID = NULL;

// These variables are not set in this file but are useful in other sections
$DATA = NULL;


/*////////////////////////////////////////////////////////////////////////////////////////////
SET HOST AND PATH
- Set the host value to use (based on environment)
////////////////////////////////////////////////////////////////////////////////////////////*/

$hostType = "local";
foreach($HOST_VARS as $key => $value){
	if ($_SERVER['HTTP_HOST'] == $value['url']){
		$HOST = $value;
		$hostType = $key;
		break;
	}
}
// set TEST variable to 0 if it is not on 'local' or 'dev'
if ($TEST == 1 && $hostType != 'local' && $hostType != 'dev') $TEST = 0;
// set path
$PATH = $HOST["path"];


/*////////////////////////////////////////////////////////////////////////////////////////////
SET PAGE ID
- Set the page ID (pagename) based on the URL
////////////////////////////////////////////////////////////////////////////////////////////*/

$pageID = explode($HOST["path"], $_SERVER['REQUEST_URI']);
$ID = rtrim($pageID[1], "/");
$ID = str_replace("/", "-", $ID);
// exception for home
if ($ID == "") $ID = "home";

// set the ID to 404 if the page doesn't exist int he page array
if (!isset($PAGES[$ID])) $ID = "404";

?>