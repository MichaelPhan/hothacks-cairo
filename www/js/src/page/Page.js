/*////////////////////////////////////////////////////////////////////////////////
// BASE PAGE - put all functionality you want to maintain for each page
////////////////////////////////////////////////////////////////////////////////*/

var Page = PageCore.extend({
	// init function fires automatically from PageCore on document ready
	init:function(){
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
		arguments.callee.$.start.call(this); // call super to load
		
		var header = Global.header = new Header();
		header.init();
	},
	
	// called on page resize
	resize:function(){
		arguments.callee.$.resize.call(this); // call super to load
	},
	
	changeResolution:function(){
		arguments.callee.$.changeResolution.call(this); // call super to load
	}
});
