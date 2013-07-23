/*////////////////////////////////////////////////////////////////////////////////
// PAGECORE CLASS
// - Do not edit this class
////////////////////////////////////////////////////////////////////////////////*/

var PageCore = CoreClass.extend({
	loadURL:null,
	resolution:null,
	pageVals:null,
	
	// init function fires automatically
	init:function(){
		var _this  = this;
		
		if (this.loadURL){
			this.load(); // start loading data
		}else{
			this.begin();
		}
	},
	
	// load data
	load:function(){
		var _this = this;
		
		var url = Global.path+_this.loadURL;
		if (Global.appDataTest) url = url+"?test=1";
		
		$.ajax({
			type: "POST",
			url: url,
			//data: args,
			dataType: "json",
			success: function(_data) {
				// set the page data loaded
				Global.pageData = _data;
				
				// start any functions that rely on the loaded data
				_this.begin();
			},
			error:function(msg, textStatus){
				alert("It appears there may have been an error loading this page. Please try again.");
			}
		});
	},
	
	resize:function(){
		Global.winWidth = $(window).width();
		Global.winHeight = $(window).height();
		
		// define resolutions
		var oldResolution = this.resolution;
		if (Global.winWidth<768){
			this.resolution = "mobile";
		}else if (Global.winWidth<980){
			this.resolution = "tablet";
		}else if (Global.winWidth>=980){
			this.resolution = "desktop";
		}
		
		// resize
		if (Global.objArr){
			for (var i=0; i<Global.objArr.length; i++){
				Global.objArr[i].resize();
			}
		}
		
		if (oldResolution!=this.resolution){
			this.changeResolution();
		}
	},
	
	changeResolution:function(){
		// resize
		if (Global.objArr){
			for (var i=0; i<Global.objArr.length; i++){
				Global.objArr[i].changeResolution();
			}
		}
	},
	
	begin:function(){
		var _this = this;
		$("body").waitForImages({
			finished: function() {
				_this.beginAfterLoad();
				$("#main-loader").hide();
			},
			waitForAll: true
		});
	},
	
	beginAfterLoad:function(){
		var _this = this;
		
		// build
		this.buildObjects();
		this.buildHandlers();
		
		// Resize listener
		$(window).resize(function(){
			_this.resize();
		});
		this.resize();
		
		// start
		this.start();
	},
	
	// override classes
	buildObjects:function(){},
	buildHandlers:function(){},
	start:function(){}
});


/*////////////////////////////////////////////////////////////////////////////////
// AUTO START WHEN READY
////////////////////////////////////////////////////////////////////////////////*/

// when the page is ready call init
$(document).ready(function(){
	Global.page.init();
});

