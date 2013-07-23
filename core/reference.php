<?php

/*////////////////////////////////////////////////////////////////////////////////////////////
SETUP PAGE REFERENCES
- based on page id
- each value refers to an id associated to each of the associated reference files
- to create a new page just add a new reference
////////////////////////////////////////////////////////////////////////////////////////////*/

$PAGES = array(
	'home' => array(
		'js' => 'home'
	),
	'404' => array(
		'js' => '404'
	),
	'learn' => array(
		'js' => 'about'
	),
	'experience' => array(
		'js' => 'about'
	),
	'participate' => array(
		'js' => 'about'
	)
);


/*////////////////////////////////////////////////////////////////////////////////////////////
JS REFERENCES
- based on page id referenced above
////////////////////////////////////////////////////////////////////////////////////////////*/

$JS = array(
	'head' => array(
		'js/lib/modernizr.js'
	),
	'external' => array(
		'js/lib/jquery/jquery.min.js',
		'js/lib/jquery/jquery.waitforimages.js',
		'js/lib/tweenmax/TweenMax.min.js',
		'js/lib/tweenmax/plugins/ColorPropsPlugin.min.js',
		'js/lib/tweenmax/plugins/CSSPlugin.min.js',
		'js/lib/tweenmax/easing/EasePack.min.js',
		'js/lib/enquire.min.js',
		'js/lib/soundjs/soundjs-0.4.0.min.js',
		'js/lib/soundjs/soundjs.flashplugin-0.4.0.min.js'
	),
	'core' => array(
		'js/src/core/Class.js',
		'js/src/core/PageCore.js',
		'js/src/core/ObjectCore.js',
		'js/src/page/Page.js',
		'js/src/object/Header.js',
		'js/src/Global.js'
	),
	'page' => array(
		'home' => array(
			'js/src/page/Home.js'
		),
		'404' => array(
			'js/src/page/404.js'
		),
		'experience' => array(
			'js/src/page/Experience.js'
		),
		'learn' => array(
			'js/src/page/Learn.js'
		),
		'participate' => array(
			'js/src/page/Participate.js'
		)
	)
);


/*////////////////////////////////////////////////////////////////////////////////////////////
OTHER REFERENCES
- by default this framework compiles all CSS into one main.css
- by default this framework searches for a model in the /build/model/page/ dir to 
  determine what content goes on a page, all other dependencies are listed in this file
- if you wish to add additional references to this framework you may
////////////////////////////////////////////////////////////////////////////////////////////*/


?>