<?php

/*////////////////////////////////////////////////////////////////////////////////////////////
TEST
- Set to 1 to source non-compiled files
- Set to 0 to source compiled files
- TEST is automatically set to 0 in any environment that is not "local" or "dev"
- APP_DATA_TEST is used in the common data files to reference json data
////////////////////////////////////////////////////////////////////////////////////////////*/

$TEST = 1;
$APP_DATA_TEST = 1;


/*////////////////////////////////////////////////////////////////////////////////////////////
VERSION
- Set the version number for cache clearing
////////////////////////////////////////////////////////////////////////////////////////////*/

$VERSION = "1.0";


/*////////////////////////////////////////////////////////////////////////////////////////////
HOST_VARS
- put all environment specific variables here
- please fill out the appropriate variables for each environment in order for it to run correctly
////////////////////////////////////////////////////////////////////////////////////////////*/

$HOST_VARS = array(
	'local' => array(
		'url'	=> 'localhost',
		'path'	=> '/HACK-CAIR/www/',
		'cdn'	=> '',
		'db'	=> ''
	),
	'dev' => array(
		'url'	=> 'dev.thesecretlocation.com',
		'path'	=> '/HOTHACKS/cairo/',
		'cdn'	=> '',
		'db'	=> ''
	),
	'stage' => array(),
	'uat' => array(),
	'prod' => array()
);


?>
