/*////////////////////////////////////////////////////////////////////////////////
// HEADER CLASS
////////////////////////////////////////////////////////////////////////////////*/

var Header = ObjectCore.extend({
	init:function(){
		var _this = this;
		
		var _id = Global.id;
		if (_id == "home"){
			$(".menu-title").html("Interactive Triptych");
		}else if (_id == "learn"){
			$(".menu-title").html("Discover");
		}else if (_id == "experience"){
			$(".menu-title").html("Experience");
		}else if (_id == "participate"){
			$(".menu-title").html("Create");
		}
		
		this.transIn();
		
		$("#header-menu").click(function(){
			_this.transOut(Global.id);
		});
	},
	
	transIn:function(){
		TweenLite.to($("#site-overlay"), 5, {css:{"opacity":0}});
		$("#header-menu").css("display", "block");
		$("#header-menu").css("margin-top", -130);
		var time = 2000;
		if (Global.id == "home"){
			time = 5000;
		}
		setTimeout(function(){
			TweenLite.to($("#header-menu"), 2, {css:{"margin-top":0}, ease:Quint.easeOut});
		}, time);
	},
	
	transOut:function(_id){
		TweenLite.to($("#site-overlay"), 2, {css:{"opacity":1}});
		TweenLite.to($("#header-menu"), 2, {css:{"margin-top":-130}, ease:Quint.easeOut});
		setTimeout(function(){
			if (_id == "home"){
				window.location = "experience";
			}else if (_id == "learn"){
				window.location = "participate";
			}else if (_id == "experience"){
				window.location = "learn";
			}else if (_id == "participate"){
				window.location = "home";
			}
		}, 2000);
	}
});


