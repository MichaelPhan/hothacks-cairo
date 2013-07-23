/*////////////////////////////////////////////////////////////////////////////////
// EXPERIENCE PAGE
////////////////////////////////////////////////////////////////////////////////*/

var Experience = Page.extend({
	_this:null,
	audioArray:null,
	proximityInfo:{id:0, progress:0},
	minimumVol:.2,
	minimumDist:200,
	waitTime:1,
	copyDiv:null,
	
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
		arguments.callee.$.start.call(this); // call super to load
		
		var _this = this;
		_this.audioArray = [];
		
		document.body.style.background = 'black';
		//this.setupCopy();
		this.setupAudioPoint();
		
		$(document).mousemove(function(e){
			_this.onMouseMove(e);
		});
		// console.log(window.mouseXPos);
		// console.log($('body').html());
		//todo calculate minimum distanceo n window resize
		console.log(this);
		
		setTimeout(function(){
			$(".instructions").fadeOut();
		}, 3000);
	},
	
	// called on page resize
	resize:function(){
		arguments.callee.$.resize.call(this); // call super to load
	},
	
	setupAudioPoint:function(){
		var _this = this;
		
		//setup holder
		var audioArray = _this.audioArray;
		$("#inner-content").html('<div id = "audioHolder"></div>');
		$("#inner-content").append('<div id = "imgHolder" ></div>');
		$("#inner-content").append('<div id = "cursorTrailHolder" ></div>');
		$("#inner-content").css({"overflow-y":"hidden"});
		$(document.body).css({"overflow-y":"hidden","overflow-x":"hidden"});
		$("#audioHolder").css({"height":"100%","width":"100%","position":"absolute","float":"left"});
		// console.log($("#imgHolder img").attr("src"));
		for(var i = 1;i <= 10; i++) {
			var audioEmbed = "";
			var audioObj ={
				id:"#audio0"+i,
				divid:"#divaudio0"+i,
				idImg:"#img0"+i,
				img:"asset/img/00"+i+".jpg"
			};
			
			//embedding audio
			audioEmbed += '<div id="'+'divaudio0'+i+'"><audio id ="'+'audio0'+i+'">';
			audioEmbed += '<source src="asset/sound/experience/'+'audio0'+i+'.mp3" type="audio/mpeg">';
			audioEmbed += '<source src="asset/sound/experience/'+'audio0'+i+'.ogg" type="audio/ogg">';
			audioEmbed += '<embed src="asset/sound/experience/'+'audio0'+i+'.mp3">';
			audioEmbed += '</audio></div>';
			$("#audioHolder").append(audioEmbed);
			audioObj.obj = $(audioObj.id).get(0);
			//playing audio
			// audioObj.obj.play();
			audioObj.obj.addEventListener("ended", this.audioEnded);
			audioObj.obj.play();
			audioObj.obj.volume = _this.minimumVol;
			// $(audioObj.id).click(_this.onClick);
			
			$("#imgHolder").append('<img id = "'+'img0'+i+'" src = "'+audioObj.img+'"></img>');
			$(audioObj.id).on('mouseleave', _this.onMouseOut)
			// $(audioObj.id).prepend('<img src = "asset/img/mouseTrail.png"></img>');
			//$(audioObj.id).css({"opacity":1});
			audioArray.push(audioObj);
			
		}
		$("#audioHolder").append('<img id = "bgImg" src = "asset/img/bg2.png"></img>');
		$("#audioHolder").append('<img id = "staticImg" src = "asset/img/bg.jpg"></img>');
		$("#bgImg").css({"width":"100%","height":"100%","float":"left", "position":"absolute"});
		$("#staticImg").css({"width":"100%","height":"100%","float":"left", "position":"absolute"});
		$("#imgHolder").css({"height":"100%","width":"100%","position":"absolute","float":"left", "overflow-y":"hidden"});
		$("#imgHolder img").css({"width":"100%","position":"absolute","float":"left", "opacity":"0"});
		TweenLite.to($("#bgImg"), 0, {css:{opacity:0}});
		
		$(audioArray[0].divid).css({'top':"23%", 'left':"11%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")', "background-position":"50px 50px","background-size":"50px 50px", "opacity":0, "z-index":"9999", "position":"absolute"});
		$(audioArray[1].divid).css({'top':"30%", 'left':"23%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[2].divid).css({'top':"52%", 'left':"31%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[3].divid).css({'top':"67%", 'left':"49%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[4].divid).css({'top':"60%", 'left':"61%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[5].divid).css({'top':"72%", 'left':"65%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[6].divid).css({'top':"82%", 'left':"67%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[7].divid).css({'top':"36%", 'left':"72%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[8].divid).css({'top':"14%", 'left':"77%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		$(audioArray[9].divid).css({'top':"29%", 'left':"58%",display:"block",width:"50px", height:"50px", "margin-left":"-75px", "background":'url("'+Global.path+'asset/img/mouseTrail.png")',  "background-position":"50px 50px","background-size":"50px 50px", "opacity":0,"z-index":"9999", "position":"absolute"});
		
		
		$(document).click(function(event){
			console.log("WWWWWWWWWWWWWWWWWWWWWW");
			_this.onClick(event);
		});
	},
	
	audioEnded:function(e){
		//just looping	
		e.currentTarget.currentTime = 0;
		e.currentTarget.play();
	},
	
	onMouseMove:function(e){
		var _this = this;
		
		console.log("moving",e.pageX,e.pageY);
		// console.log(_this)
		_this.setAllVolumes(e.pageX,e.pageY);
		_this.setMouseTrails(e.pageX,e.pageY);
	},
	
	setMouseTrails:function(__mouseX, __mouseY){
		var _this = this;
		
		if(_this.waitTime <= 0) {
			_this.waitTime = 1;
			return;
		}
		// console.log("drawu");
		_this.waitTime -= 1;
		pointer = $('<img src = "asset/img/mouseTrail.png"></img>').attr({'class': 'drawingpix'});
			  // pointer.delay(800).css({	

		$("#cursorTrailHolder").append(pointer);
				// var color = Math.round(0xffffff *Math.random()).toString(16);
					 
			  pointer.css({	
				width:'10px',
				height:'10px',
				opacity: 0.4,
				'z-index':9999,	
				top: __mouseY,//offsets
				left: __mouseX, //offsets	
				position:'absolute'
			}).show().animate({
					height:'150px',
					width:'150px',
					opacity: 0,
					top: __mouseY-75,	//offsets
					left: __mouseX-75
						
			}, 1000, function(){ 
				$(this).remove(); 
			});
                   
	},
	
	onClick:function(e){
		console.log("ttttttttttt");
		
		var _this = this;
		var audioArray = _this.audioArray;
		
		if(_this.proximityInfo.progress > 0) {
			//alpha calculated by a minimum of 20%, and at 85% or up, it goes to max alpha
			var newAlpha = Math.max(.2, (_this.proximityInfo.progress >= .75 ? 1 : _this.proximityInfo.progress));
			
			//hide all other images
			for( var i = 0; i < audioArray.length;i++){
				// $(audioArray[i].idImg).fadeTo(2000, i == _this.proximityInfo.id ? newAlpha : 0 );
				TweenLite.to($(audioArray[i].idImg), 2, {overwrite:true, css:{opacity:i == _this.proximityInfo.id ? newAlpha : 0}});
				TweenLite.to($(audioArray[i].divid), 2, {overwrite:true, css:{opacity:0}});
			}
			// $("#bgImg").fadeTo(2000, 0);
			TweenLite.to($("#bgImg"), 2, {overwrite:true, css:{opacity:0}});
			TweenLite.to($("#staticImg"), 2, {overwrite:true, css:{opacity:0}});
			console.log("222222222");
		} else {
			// $("#imgHolder img").fadeTo(2000, 0);
			for( var i = 0; i < audioArray.length;i++){
				// $(audioArray[i].idImg).fadeTo(2000, 0 );
				TweenLite.to($(audioArray[i].idImg), 2, {overwrite:true, css:{opacity:0}});
				TweenLite.to($(audioArray[i].divid), 3, {overwrite:true, css:{opacity:.4}});
			}
			// $("#bgImg").fadeTo(2000, 1);
			TweenLite.to($("#bgImg"), 3, {overwrite:true, css:{opacity:1}});
			TweenLite.to($("#staticImg"), 3, {overwrite:true, css:{opacity:0}});
			console.log("3333333333");
		}
	},
	
	onMouseOut:function(e){
		// $("#imgHolder img").fadeTo("fast", 0);
	},
	
	setAllVolumes:function(__mouseX, __mouseY){
		var _this = this;
		
		var audioArray = _this.audioArray;
		var currentVol = _this.minimumVol;
		var progress;
		var currentDist;
		
		// _this.proximityInfo.id = -1;
		_this.proximityInfo.progress =0;
		// _this.proximityInfo.currentID;
		var tempItem = -1;
		
		//finding the closest item in the proximity
		for(var i = 0; i < audioArray.length;i++){
			currentDist = Math.min(_this.minimumDist, _this.calculateDistanceFromMouse(audioArray[i].divid, __mouseX, __mouseY));
			progress = (1-currentDist/_this.minimumDist);
			if(_this.proximityInfo.progress < progress){
				_this.proximityInfo.progress = progress;
				tempItem = i;
			}
		}
		console.log(progress);
		if(_this.proximityInfo.id != tempItem){
			if(_this.proximityInfo.id != -1) 
				// $(audioArray[_this.proximityInfo.id].idImg).fadeTo(2000, 0 );
				TweenLite.to($(audioArray[_this.proximityInfo.id].idImg), 2, {css:{opacity:0}});
				TweenLite.to($("#staticImg"), 2, {overwrite:true, css:{opacity:1}});
			_this.proximityInfo.id = tempItem;
		}
				
		if(_this.proximityInfo.progress > 0) {
			//set volume for everything elseto be uniform
			var otherVolumes = _this.minimumVol * (1-_this.proximityInfo.progress)*.2;
			
			//precedural fadein
			
			for(i = 0; i < audioArray.length;i++){
				if(i != _this.proximityInfo.id){
					// audioArray[i].obj.volume = otherVolumes;
					TweenLite.to(audioArray[i].obj, .1, {overwrite:true, volume:otherVolumes});
				} else {
					// audioArray[i].obj.volume = Math.max(_this.proximityInfo.progress, _this.minimumVol);
					TweenLite.to(audioArray[i].obj, 1, {overwrite:true, volume:Math.max(_this.proximityInfo.progress, _this.minimumVol)});
				}
			}
			
		} else {
			//set uniform volume for everything
			for(i = 0; i < audioArray.length;i++){
				// audioArray[i].obj.volume = _this.minimumVol;
				TweenLite.to(audioArray[i].obj, .1, {overwrite:true, volume:_this.minimumVol});
			}
			// $("#imgHolder img").css({'opacity':closestProgress.progress});
		}
		
	},
	
	calculateDistanceFromMouse:function(__element1, __mouseX, __mouseY){
		// console.log(window.mouseXPos);
		var o1 = $(__element1).offset();
		console.log("LOGGG: ", __element1, o1);
		// var o2 = $(element2).offset();
		var dx = o1.left - __mouseX;
		var dy = o1.top - __mouseY;
		var distance = Math.sqrt(dx * dx + dy * dy);
		
		//console.log(distance);
		return distance;
	}
});

// initialize the page
Global.page = new Experience();
