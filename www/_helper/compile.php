<?php
	//////////////////////////////////////////////////////////////////////////////////////////
	// Compile all of the css
	//////////////////////////////////////////////////////////////////////////////////////////
	
	// init
	include('../core/config.php');
	include('../core/reference.php');
	include('../core/inc/setup.php');
	
	// compile scripts
	include ("script/lessc.inc.php");
	include ("script/jsmin.php");
	
	// compile css
	autoCompileLess("../css/src/main.less", "../css/min/main/main.css");
	
	// compile js
	drawMinJS('../js/min/headjs.min.js', $JS["head"]);
	drawMinJS('../js/min/external.min.js', $JS["external"]);
	drawMinJS('../js/min/core.min.js', $JS["core"]);
	foreach($JS["page"] as $key => $value){
		drawMinJS('../js/min/'.$key.'.min.js', $value);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Compile Functions
	//////////////////////////////////////////////////////////////////////////////////////////
	
	// function to compile css from less files
	function autoCompileLess($inputFile, $outputFile) {
		// load the cache
		$cacheFile = $inputFile.".cache";
		
		if (file_exists($cacheFile)) {
			$cache = unserialize(file_get_contents($cacheFile));
		} else {
			$cache = $inputFile;
		}
		
		$less = new lessc;
		$newCache = $less->cachedCompile($cache);
		file_put_contents($outputFile, $newCache['compiled']);
		
		echo("Succefully created:  ".$inputFile."<br/>");
	}
	
	// compile js
	function drawMinJS($final_file, $js_files){
		$contents = '';
		foreach($js_files as $src){
			$contents .= JSMin::minify(file_get_contents("../".$src)) . ';';
		}
		file_put_contents($final_file, $contents);
		
		echo("Succefully created:  ".$final_file."<br/>");
	}
?>