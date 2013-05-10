/*////////////////////////////////////////////////////////////////////////////////
// HOME PAGE
////////////////////////////////////////////////////////////////////////////////*/

var Home = Page.extend({
	// init function fires automatically from PageCore on document ready
	init:function(){
		this.loadURL = "data/app/home.ajax.php";
		
		// call super to load
		arguments.callee.$.init.call(this); 
		
		// test console log
		console.log("THIS IS THE HOME PAGE");
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
