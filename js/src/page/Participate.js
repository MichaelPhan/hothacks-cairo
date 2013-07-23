/*////////////////////////////////////////////////////////////////////////////////
// PARTICIPATE PAGE
////////////////////////////////////////////////////////////////////////////////*/

var Participate = Page.extend({
	// _this:null,
	color:null,
	soundArray:null,
	
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
		this.initScene();
	},
	
	// called on page resize
	resize:function(){
		arguments.callee.$.resize.call(this); // call super to load
	},
	
	changeResolution:function(){
		arguments.callee.$.changeResolution.call(this); // call super to load
	},
	
	initScene:function(){
		var _this = this;
		_this.soundArray = [];
		$("#inner-content").html('<div id = "CreateCairo"></div>');
		$("#CreateCairo").append('<div id = "CairoBackgroundHolder"></div>');
		// $("#CreateCairo").append('<canvas id = "SoundPulseHolder" width = "1920" height = "1080"></canvas>');
		$("#CreateCairo").append('<div id = "SoundPulseHolder"></div>');
		$("#CreateCairo").append('<div id = "AudioHolder"></div>');
		$("#CreateCairo").css({"position":"absolute", "width":"100%", "height":"100%", "overflow-x":"hidden", "overflow-y":"hidden"});
		$("#CairoBackgroundHolder").css({"position":"absolute", "width":"100%", "height":"100%"});
		var audioEmbed = "";
		audioEmbed += '<audio id ="ambientNoise">';
		audioEmbed += '<source src="asset/sound/create/ambient.mp3" type="audio/mpeg">';
		audioEmbed += '<source src="asset/sound/create/ambient.ogg" type="audio/ogg">';
		audioEmbed += '<embed src="asset/sound/create/ambient.mp3">';
		audioEmbed += '</audio>';
		$("#AudioHolder").append(audioEmbed);
		var audioObj = $("#ambientNoise").get(0);
		audioObj.addEventListener("ended", this.audioEnded);
		audioObj.play();
		audioObj.volume = 1;
		
		document.body.style.background = '#fbfbfb';
		this.loadImage();
		
		$("#CairoBackgroundHolder").css({"position":"absolute"});
		$("#CreateCairo").click(function(e){_this.spawnSound(e)});
	},
	
	audioEnded:function(e){
		//just looping	
		e.currentTarget.currentTime = 0;
		e.currentTarget.play();
	},
	
	loadImage:function(){
		// $("#CairoBackgroundHolder").append('<img src = "asset/img/bg1.png"></img>');
		$("#CairoBackgroundHolder").css({'background-image':'url("asset/img/Cairo_0'+Math.round(Math.random()*3+1)+'.png")','background-size':'100%','background-repeat':'no-repeat','background-position':'center bottom'});
	},
	
	spawnSound:function(e){
		var _this = this;
		
		if(_this.soundArray.length > 20){
			_this.soundArray[_this.soundArray.length-1].pause();
			_this.soundArray.splice(_this.soundArray.length-1,1);
		}
		console.log("sounds are",_this.soundArray.length);
		// TweenLite.to(audioObj, 2, {scaleX:190, scaleY:190, alpha:0});
		
		var audioID = Math.round(Math.random()*12)+1;
		var id = new Date().getTime();
		var audioEmbed = "";
		audioEmbed += '<audio id ="'+id+'">';
		audioEmbed += '<source src="asset/sound/create/'+audioID+'.mp3" type="audio/mpeg">';
		audioEmbed += '<source src="asset/sound/create/'+audioID+'.ogg" type="audio/ogg">';
		audioEmbed += '<embed src="asset/sound/create/'+audioID+'.mp3">';
		audioEmbed += '</audio>';
		$("#AudioHolder").append(audioEmbed);
		
		var audioObj = $("#"+id).get(0);
		audioObj.play();
		audioObj.volume = .5;
		setTimeout(function(){
			_this.createPulse(e.pageX,e.pageY, "#"+id);
		},0)
		_this.soundArray.push(audioObj);
		
		$(".instructions").fadeOut();
	},
	
	
	createPulse:function(__mouseX, __mouseY, __id){
		var _this = this;
		// $(this).delay(__delay) {
       var  pointer = $('<dom>.</dom>');
		
		$("#SoundPulseHolder").append(pointer);
		//temporary color
		// _this.color = Math.round(0xffffff *Math.random()).toString(16);
		_this.color = (0x3ec8dd).toString(16);
		var finalRadius = 600;
		pointer.css({	
			width:'10px',
			height:'10px',
			opacity: 1,
			position:"absolute",
			'background-color':'#'+_this.color,
			'border-radius':'2000px',
			'-moz-border-radius': '2000px',	
			'-webkit-border-radius': '2000px',
			'z-index':-1,	
			top: __mouseY,//offsets
			left: __mouseX//offsets	
		}).show().animate({
				height: (finalRadius+'px'),
				width: (finalRadius+'px'),
				'border-radius': (finalRadius+'px'),
				'-moz-border-radius': (finalRadius+'px'),
				'-webkit-border-radius': (finalRadius+'px'),
				opacity: 0,
				top: __mouseY-finalRadius/2,	//offsets
				left:__mouseX-finalRadius/2
					
		}, 2000, function(){ 
			$(this).remove(); 
			console.log("is paused?!",$(__id).get(0).paused);
			if(!$(__id).get(0).paused) _this.createPulse(__mouseX, __mouseY, __id);
			else $(__id).remove();
		});
	}
});

// initialize the page
Global.page = new Participate();
