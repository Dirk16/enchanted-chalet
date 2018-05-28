(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.sunrise_banner = function() {
	this.initialize(img.sunrise_banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,175);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("5\nTips\nTo\nHelp\nYou\nEvolve", "33px 'Arial'", "#F1B78D");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 148;
	this.text.parent = this;
	this.text.setTransform(-19,-227.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text, new cjs.Rectangle(-95,-229.9,152,275.1), null);


(lib.Sunrise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sunrise_banner();
	this.instance.parent = this;
	this.instance.setTransform(-80,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sunrise, new cjs.Rectangle(-80,-87.5,160,175), null);


(lib.ClickHere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Click Here", "14px 'Arial'", "#DBCF5E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(1,-9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22000B").s().rr(-76.5,-24.5,153,49,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().rr(-76.5,-24.5,153,49,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"14px 'Arial'",lineHeight:35.6}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"bold 20px 'Arial'",lineHeight:42.35}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{font:"bold 20px 'Arial'",lineHeight:42.35}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"bold 20px 'Arial'",lineHeight:42.35}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-24.5,153,49);


// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("banner.html", "_self");
		}
	}
	this.frame_71 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(47).call(this.frame_71).wait(1));

	// Button
	this.button_1 = new lib.ClickHere();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(81,473.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.ClickHere(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(24).to({_off:false},0).wait(48));

	// Photo
	this.instance = new lib.Sunrise();
	this.instance.parent = this;
	this.instance.setTransform(80,87.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24,cjs.Ease.cubicIn).wait(48));

	// Type
	this.instance_1 = new lib.Text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.5,813);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.92,x:99.5,y:407},24,cjs.Ease.quadInOut).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,257.5,160,858.2);
// library properties:
lib.properties = {
	id: '493AC76FF37B4756A9112D7E68E9443C',
	width: 160,
	height: 515,
	fps: 24,
	color: "#050006",
	opacity: 1.00,
	manifest: [
		{src:"images/sunrise_banner.jpg", id:"sunrise_banner"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['493AC76FF37B4756A9112D7E68E9443C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;