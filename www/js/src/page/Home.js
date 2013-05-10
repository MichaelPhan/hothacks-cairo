/*////////////////////////////////////////////////////////////////////////////////
// HOME PAGE
////////////////////////////////////////////////////////////////////////////////*/

var Home = Page.extend({
	// init function fires automatically from PageCore on document ready
	init:function(){
		//this.loadURL = "data/app/home.ajax.php";
		
		// call super to load
		arguments.callee.$.init.call(this); 
	},
	
	// called after load is complete
	buildObjects:function(){
		arguments.callee.$.buildObjects.call(this); 
	},
	
	// called after build is complete
	buildHandlers:function(){
		arguments.callee.$.buildHandlers.call(this); 
	},
	
	// called after buildHandlers is complete
	start:function(){
		console.log(Global.pageData);
		arguments.callee.$.start.call(this); // call super to load
		
		$("#first-title").fadeIn();
		setTimeout(function(){
			$("#first-title").fadeOut();
		}, 5000);
		setTimeout(function(){
			$("#second-title").fadeIn();
		}, 6000);
		console.log("asdfasdf");
	},
	
	// called on page resize
	resize:function(){
		arguments.callee.$.resize.call(this); // call super to load
	},
	
	changeResolution:function(){
		arguments.callee.$.changeResolution.call(this); // call super to load
	}
});

// initialize the page
Global.page = new Home();
