<?php

$_test = (isset($_GET["test"]) ? $_GET["test"] : 0);

if ($_test == 0){
	// include your code to reference your app file here
	// reference the file in the /app/ folder that outputs this expected data
}else{
	// echo your test app data here
	echo('
	{
		"copy":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
	');
}

?>
