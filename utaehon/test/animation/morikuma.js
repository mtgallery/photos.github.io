(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"morikuma_atlas_", frames: [[0,2862,1372,180],[0,3966,1334,17],[0,3985,1334,17],[1889,3960,1372,55],[1889,4017,1372,55],[2588,3635,1334,100],[1374,3496,1366,132],[1222,2644,88,199],[2402,2748,70,207],[2592,1263,88,199],[1336,1020,62,177],[2376,3128,94,200],[2115,3941,112,10],[1987,3941,126,10],[2229,3941,112,10],[1336,3828,100,9],[2343,3941,112,10],[2672,3839,974,119],[1374,3128,1000,147],[1497,3330,75,24],[1407,3330,88,21],[1574,3330,75,24],[1651,3330,68,19],[1889,3941,96,16],[2200,1263,194,198],[3603,3275,221,195],[2396,1263,194,198],[2483,2489,176,173],[3826,3275,202,201],[0,3044,1332,158],[0,1772,1325,201],[0,2415,1351,227],[1332,3630,1254,130],[2682,1263,51,67],[2483,2664,58,80],[2543,2664,29,78],[2402,3055,70,62],[2748,3451,85,54],[2748,3356,71,93],[1987,3953,26,5],[2043,3953,23,5],[2015,3953,26,5],[2472,3134,9,12],[2472,3119,9,13],[1312,2790,52,66],[1312,2705,59,83],[1374,3277,31,77],[1336,3762,65,64],[1496,2694,85,51],[2402,2957,72,96],[2735,752,1334,750],[1336,3941,551,195],[3089,2747,512,378],[2588,3737,1334,100],[0,3762,1334,100],[2742,3507,1330,126],[0,1020,1334,750],[3089,3127,512,378],[1336,3839,1334,100],[0,3864,1334,100],[0,3624,1330,126],[2914,1504,1116,553],[0,1975,369,87],[2735,0,1334,750],[1496,2415,145,277],[0,2644,1220,216],[0,3204,1372,138],[0,3344,1372,138],[1374,3356,1372,138],[0,3484,1372,138],[3924,3635,159,306],[3603,2667,224,606],[3829,2667,224,606],[1400,758,798,744],[1374,2748,512,378],[1888,2748,512,378],[1353,2415,141,288],[3599,2059,225,606],[3826,2059,225,606],[2483,2064,423,423],[2200,758,504,503],[2483,2747,604,607],[2914,2059,683,686],[1799,2064,682,682],[0,2064,1797,349],[1336,1504,1576,558],[0,0,1398,1018],[1400,0,1333,756]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg1_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg1_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg1sDropShadow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg1sDropShadow_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg3sDropShadow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.body_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.body_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.body_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.body_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cheak = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cheak_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cheak_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cheak_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cheak_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cloudsDropShadow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eye = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eye_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eye_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eye_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eye_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.face = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.face_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.face_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.face_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.face_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.flower = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.flower_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.flowersOuterGlow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.flower2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.leftHand = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.leftHand_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.leftHand_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.leftHand_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.leftHand_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.leftHandsOuterGlow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.mouse = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.mouse_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.mouse_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.mouse_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.mouse_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.rightHand = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.rightHand_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.rightHand_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.rightHand_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.rightHand_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.rightHandsOuterGlow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.sky = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト1aiアセット = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_4 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_5 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_6 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_7 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_8 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_9 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_10 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_11 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_12 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_13 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクトsDropShadow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクトsDropShadow_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクトsDropShadow_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクトsDropShadow_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクトsOuterGlow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_1_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_1_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_1_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_2_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_2_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_2_3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_3_1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクト_3_2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.回転1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.回転1sDropShadow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.回転2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.回転2sDropShadow = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.回転3 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.山々1 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.山々2 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.幕 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.森 = function() {
	this.spriteSheet = ss["morikuma_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.rightHand_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance = new lib.rightHand_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightHand_5, new cjs.Rectangle(0,0,65,64), null);


(lib.mouse_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance = new lib.mouse_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouse_5, new cjs.Rectangle(0,0,9,12), null);


(lib.leftHand_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leftHand
	this.instance = new lib.leftHand_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftHand_5, new cjs.Rectangle(0,0,70,62), null);


(lib.face_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// face
	this.instance = new lib.face_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_5, new cjs.Rectangle(0,0,176,173), null);


(lib.eye_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance = new lib.eye_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_5, new cjs.Rectangle(0,0,68,19), null);


(lib.cheak_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cheak
	this.instance = new lib.cheak_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheak_5, new cjs.Rectangle(0,0,100,9), null);


(lib.body_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_5, new cjs.Rectangle(0,0,62,177), null);


(lib.ベクトルスマートオブジェクト_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_14, new cjs.Rectangle(0,0,1330,126), null);


(lib.回転3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 回転3
	this.instance = new lib.回転3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.回転3_1, new cjs.Rectangle(0,0,682,682), null);


(lib.回転2sDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.回転2sDropShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.回転2sDropShadow_1, new cjs.Rectangle(0,0,683,686), null);


(lib.回転1sDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.回転1sDropShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.回転1sDropShadow_1, new cjs.Rectangle(0,0,504,503), null);


(lib.ベクトルスマートオブジェクト_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_1 = new lib.ベクトルスマートオブジェクト_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_15, new cjs.Rectangle(0,0,1334,750), null);


(lib.rightHand_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance_1 = new lib.rightHand_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightHand_6, new cjs.Rectangle(0,0,85,51), null);


(lib.mouse_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance_1 = new lib.mouse_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouse_6, new cjs.Rectangle(0,0,9,13), null);


(lib.leftHand_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leftHand
	this.instance_1 = new lib.leftHand_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftHand_6, new cjs.Rectangle(0,0,85,54), null);


(lib.face_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// face
	this.instance_1 = new lib.face_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_6, new cjs.Rectangle(0,0,202,201), null);


(lib.eye_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance_1 = new lib.eye_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_6, new cjs.Rectangle(0,0,96,16), null);


(lib.cheak_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cheak
	this.instance_1 = new lib.cheak_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheak_6, new cjs.Rectangle(0,0,112,10), null);


(lib.body_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance_1 = new lib.body_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_6, new cjs.Rectangle(0,0,94,200), null);


(lib.ベクトルスマートオブジェクト_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_3
	this.instance = new lib.ベクトルスマートオブジェクト_3_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_3_3, new cjs.Rectangle(0,0,225,606), null);


(lib.ベクトルスマートオブジェクト_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_2
	this.instance = new lib.ベクトルスマートオブジェクト_2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_2_4, new cjs.Rectangle(0,0,512,378), null);


(lib.ベクトルスマートオブジェクト_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_1
	this.instance = new lib.ベクトルスマートオブジェクト_1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_1_4, new cjs.Rectangle(0,0,224,606), null);


(lib.ベクトルスマートオブジェクト_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_2 = new lib.ベクトルスマートオブジェクト();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_16, new cjs.Rectangle(0,0,512,378), null);


(lib.flowersOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.flowersOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flowersOuterGlow_1, new cjs.Rectangle(0,0,1351,227), null);


(lib.ベクトルスマートオブジェクトsDropShadow_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ベクトルスマートオブジェクトsDropShadow_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクトsDropShadow_4, new cjs.Rectangle(0,0,1372,138), null);


(lib.ベクトルスマートオブジェクトsDropShadow_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.ベクトルスマートオブジェクトsDropShadow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクトsDropShadow_5, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg1sDropShadow_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg1sDropShadow_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1sDropShadow_2, new cjs.Rectangle(0,0,1372,55), null);


(lib.森_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.森();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.森_1, new cjs.Rectangle(0,0,1333,756), null);


(lib.ベクトルスマートオブジェクト_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_3 = new lib.ベクトルスマートオブジェクト_8();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_17, new cjs.Rectangle(0,0,1330,126), null);


(lib.ベクトルスマートオブジェクト_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_4 = new lib.ベクトルスマートオブジェクト_11();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_18, new cjs.Rectangle(0,0,1334,750), null);


(lib.rightHand_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance_2 = new lib.rightHand_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightHand_7, new cjs.Rectangle(0,0,31,77), null);


(lib.mouse_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance_2 = new lib.mouse_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouse_7, new cjs.Rectangle(0,0,26,5), null);


(lib.leftHand_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leftHand
	this.instance_2 = new lib.leftHand_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftHand_7, new cjs.Rectangle(0,0,29,78), null);


(lib.face_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.face_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_7, new cjs.Rectangle(0,0,194,198), null);


(lib.eye_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance_2 = new lib.eye_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_7, new cjs.Rectangle(0,0,75,24), null);


(lib.cheak_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cheak
	this.instance_2 = new lib.cheak_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheak_7, new cjs.Rectangle(0,0,112,10), null);


(lib.body_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.body_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_7, new cjs.Rectangle(0,0,88,199), null);


(lib.ベクトルスマートオブジェクト_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_3
	this.instance_1 = new lib.ベクトルスマートオブジェクト_3_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_3_4, new cjs.Rectangle(0,0,225,606), null);


(lib.ベクトルスマートオブジェクト_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_2
	this.instance_1 = new lib.ベクトルスマートオブジェクト_2_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_2_5, new cjs.Rectangle(0,0,512,378), null);


(lib.ベクトルスマートオブジェクト_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_1
	this.instance_1 = new lib.ベクトルスマートオブジェクト_1_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_1_5, new cjs.Rectangle(0,0,224,606), null);


(lib.ベクトルスマートオブジェクト_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_5 = new lib.ベクトルスマートオブジェクト_5();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_19, new cjs.Rectangle(0,0,512,378), null);


(lib.flowerコピー = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower
	this.instance = new lib.flower();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flowerコピー, new cjs.Rectangle(0,0,1332,158), null);


(lib.ベクトルスマートオブジェクト_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_6 = new lib.ベクトルスマートオブジェクト_10();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_20, new cjs.Rectangle(0,0,369,87), null);


(lib.ベクトルスマートオブジェクトsDropShadow_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.ベクトルスマートオブジェクトsDropShadow_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクトsDropShadow_6, new cjs.Rectangle(0,0,1372,138), null);


(lib.ベクトルスマートオブジェクトsDropShadow_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_3 = new lib.ベクトルスマートオブジェクトsDropShadow_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクトsDropShadow_7, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg1sDropShadow_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.bg1sDropShadow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1sDropShadow_3, new cjs.Rectangle(0,0,1372,55), null);


(lib.ベクトルスマートオブジェクト_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_7 = new lib.ベクトルスマートオブジェクト_9();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_21, new cjs.Rectangle(0,0,1116,553), null);


(lib.rightHandsOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.rightHandsOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightHandsOuterGlow_1, new cjs.Rectangle(0,0,72,96), null);


(lib.leftHandsOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.leftHandsOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftHandsOuterGlow_1, new cjs.Rectangle(0,0,71,93), null);


(lib.mouse_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance_3 = new lib.mouse_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouse_8, new cjs.Rectangle(0,0,23,5), null);


(lib.face_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// face
	this.instance_3 = new lib.face_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_8, new cjs.Rectangle(0,0,221,195), null);


(lib.eye_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance_3 = new lib.eye_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_8, new cjs.Rectangle(0,0,88,21), null);


(lib.cheak_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cheak
	this.instance_3 = new lib.cheak_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheak_8, new cjs.Rectangle(0,0,126,10), null);


(lib.body_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance_3 = new lib.body_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_8, new cjs.Rectangle(0,0,70,207), null);


(lib.山々2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 山々2
	this.instance = new lib.山々2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.山々2_1, new cjs.Rectangle(0,0,1576,558), null);


(lib.山々1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 山々1
	this.instance = new lib.山々1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.山々1_1, new cjs.Rectangle(0,0,1797,349), null);


(lib.ベクトルスマートオブジェクト_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_8 = new lib.ベクトルスマートオブジェクト_13();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_22, new cjs.Rectangle(0,0,1220,216), null);


(lib.cloudsDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.cloudsDropShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloudsDropShadow_1, new cjs.Rectangle(0,0,1000,147), null);


(lib.bg3sDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg3sDropShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3sDropShadow_1, new cjs.Rectangle(0,0,1366,132), null);


(lib.sky_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sky
	this.instance = new lib.sky();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky_1, new cjs.Rectangle(0,0,1334,750), null);


(lib.ベクトルスマートオブジェクト_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.ベクトルスマートオブジェクト_1_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_1_6, new cjs.Rectangle(0,0,798,744), null);


(lib.ベクトルスマートオブジェクト_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_9 = new lib.ベクトルスマートオブジェクト_12();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_23, new cjs.Rectangle(0,0,145,277), null);


(lib.ベクトルスマートオブジェクトsOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ベクトルスマートオブジェクトsOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクトsOuterGlow_1, new cjs.Rectangle(0,0,159,306), null);


(lib.rightHand_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance_3 = new lib.rightHand();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightHand_8, new cjs.Rectangle(0,0,52,66), null);


(lib.mouse_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance_4 = new lib.mouse();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouse_9, new cjs.Rectangle(0,0,26,5), null);


(lib.leftHand_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leftHand
	this.instance_3 = new lib.leftHand();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftHand_8, new cjs.Rectangle(0,0,51,67), null);


(lib.face_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// face
	this.instance_4 = new lib.face();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_9, new cjs.Rectangle(0,0,194,198), null);


(lib.eye_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance_4 = new lib.eye();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_9, new cjs.Rectangle(0,0,75,24), null);


(lib.cheak_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cheak
	this.instance_4 = new lib.cheak();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheak_9, new cjs.Rectangle(0,0,112,10), null);


(lib.body_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance_4 = new lib.body();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_9, new cjs.Rectangle(0,0,88,199), null);


(lib.flower2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.flower2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower2_1, new cjs.Rectangle(0,0,1254,130), null);


(lib.bg1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_3, new cjs.Rectangle(0,0,1372,180), null);


(lib.幕_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.幕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.幕_1, new cjs.Rectangle(0,0,1398,1018), null);


(lib.シンボル24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ベクトルスマートオブジェクト1aiアセット();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.614,1.614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル24, new cjs.Rectangle(0,0,889.5,314.8), null);


(lib.シンボル23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C3C0").s().p("AEBH0IgPAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIANAAIAdgPQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIggAQIgEABIAAAAgAjpHzIgIgEQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAHADIAmAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgpAAIAAAAIgFgBgAB6H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAACH0QgDgBgDgCQgDgDAAgEQAAgFADgCQADgDADAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAh1H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAkwHQIgtgWQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAtAWQAEABACAEQABAEgCAEQgCAEgEABIgDABIgFgBgAFcHEQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIgtAXIgFABIgDgBgAmbGbIgtgXQgEgCgBgEQgBgEACgDQABgEAFgBQADgCAEACIAtAXQAEACABAEQABADgBAEQgCAEgFABIgDABIgEgBgAHHGNQgEgBgCgEQgCgEACgDQABgEAEgCIAsgXQAEgCADABQAFABACAEQABAEgBAEQgBAEgEACIgsAXIgFABIgDgBgAn4FYQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAIdE/QgDgDAAgEQgBgEADgDIAhgmQADgEAEAAQAEAAADADQADACABAEQAAAEgDAEIghAmQgDADgEAAIAAAAQgEAAgDgCgAo5DzQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAJsDkQgEgCAAgEQgBgFADgDIADgFIAAglQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAoQAAADgDADIgFAIQgDADgEABIgBAAQgEAAgCgCgAp3CPQgEgBgDgDQgDgDABgEIACgyQAAgEADgDQADgDAEABQAEAAADADQADADgBAEIgBAyQgBAEgDADQgDADgEAAIAAAAgAJxBtQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApyAXQgEgBgDgDQgDgDABgEIACgxQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAxQgBAEgDADQgDADgEAAIAAAAgAJxgKQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApthgQgEgBgDgDQgDgDABgEIABgfIAAgCIAHgTQABgEAEgCQADgCAEACQAEABACAEQACADgBAEIgGARIgCAeQAAAEgDADQgDADgDAAIgBAAgAJxiCQgDgDgBgEIAAgqIAAgBQgCgDABgEQABgEADgDQADgCAEABQAEABADADIACADQABADABADIAAAtQgBAEgCADQgDADgFAAQgEAAgCgDgApRjUQgEgCgCgDQgCgEACgEIAQgvQABgEAEgCQAEgCAEACQAEABABAEQACADgBAEIgQAvQgCAEgDACIgFABIgDAAgAJJjmQgEgBgCgDIgfgoQgDgEABgEQAAgEADgCQAEgDAEABQAEAAADAEIAeAoQADADAAAEQgBAEgDADQgDACgDAAIgCAAgAH/lGQgEgBgDgDIgZghIgFgCQgEgBgCgEQgBgEABgDQACgEAEgCQADgCAEACIAIADQADABACACIAbAjQACADgBAEQAAAEgDADQgDACgDAAIgCAAgAnCl4QgEgCgBgDQgBgEACgEQABgEAEgBIAvgRQAEgCAEACQAEACABAEQABADgBAEQgCAEgEACIgvARIgDAAIgFgBgAGYmCIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABACAEQABADgBAEQgBAEgEACIgEABIgEAAgAlQmhQgEgCgCgDQgBgEACgEQABgEAEgBIAvgSQAEgBAEACQADABACAEQABAEgCAEQgBADgEACIgvARIgDABIgEgBgAEnmoIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABABAEQACADgBAEQgBAEgEACIgEABIgEAAgAjgnBQgDgCAAgEQgBgFADgDQACgDAFAAIAxgFQAFgBADADQADACABAFQAAAEgDADQgCADgEABIgyAFIgCAAQgDAAgDgDgAhonNQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACABAFQAAAEgDADQgCADgEABIgzAFIgBAAQgDAAgDgDgAC2nPIgvgQQgEgBgBgEQgCgEABgEQABgEAEgBQAEgCAEABIAvAQQAEABACAEQABAEgBAEQgBAEgEACIgEABIgEgBgAAPnaQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACAAAFQABAEgDADQgCADgFABIgxAFIgCAAQgDAAgDgDg");
	this.shape.setTransform(68.2,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E7C3C0").ss(2,1,1).p("AgSATIAJgbIAcgK");
	this.shape_1.setTransform(14.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E34B2B").s().p("AjwIeIkUiJIilj+IANknIBRjwIE3hyIGZgrIF/CCICmDWIAAGuIiUCuIkJCHg");
	this.shape_2.setTransform(68.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル23, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.シンボル22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgEA0QgWgCgOgRQgOgQACgVQACgWARgOQARgOAVACQAWACAOARQAOARgDAVQgCAWgRAOQgOAMgSAAIgFgBg");
	this.shape.setTransform(5.3,58.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AglD0IgogIIgHmSQADgjAbgXQAcgWAiADQAjADAWAcQAXAbgDAjIhTGJIggABIgHAAg");
	this.shape_1.setTransform(10.1,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル22, new cjs.Rectangle(0,0,18.6,64.1), null);


(lib.シンボル21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgKA0QgWgFgLgTQgMgSAEgVQAFgVATgLQASgMAVAEQAVAFAMATQALASgEAUQgFAWgSALQgOAJgPAAIgKgBg");
	this.shape.setTransform(5.3,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AhDDuIgmgNIArmPQAIgjAdgTQAdgTAjAIQAiAIATAdQATAegHAjIiDF8QgbgCgNgDg");
	this.shape_1.setTransform(14.2,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル21, new cjs.Rectangle(0,0,24.8,63.1), null);


(lib.シンボル19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0A265").s().p("AEBH0IgPAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIANAAIAdgPQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIggAQIgEABIAAAAgAjpHzIgIgEQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAHADIAmAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgpAAIAAAAIgFgBgAB6H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAACH0QgDgBgDgCQgDgDAAgEQAAgFADgCQADgDADAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAh1H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAkwHQIgtgWQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAtAWQAEABACAEQABAEgCAEQgCAEgEABIgDABIgFgBgAFcHEQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIgtAXIgFABIgDgBgAmbGbIgtgXQgEgCgBgEQgBgEACgDQABgEAFgBQADgCAEACIAtAXQAEACABAEQABADgBAEQgCAEgFABIgDABIgEgBgAHHGNQgEgBgCgEQgCgEACgDQABgEAEgCIAsgXQAEgCADABQAFABACAEQABAEgBAEQgBAEgEACIgsAXIgFABIgDgBgAn4FYQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAIdE/QgDgDAAgEQgBgEADgDIAhgmQADgEAEAAQAEAAADADQADACABAEQAAAEgDAEIghAmQgDADgEAAIAAAAQgEAAgDgCgAo5DzQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAJsDkQgEgCAAgEQgBgFADgDIADgFIAAglQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAoQAAADgDADIgFAIQgDADgEABIgBAAQgEAAgCgCgAp3CPQgEgBgDgDQgDgDABgEIACgyQAAgEADgDQADgDAEABQAEAAADADQADADgBAEIgBAyQgBAEgDADQgDADgEAAIAAAAgAJxBtQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApyAXQgEgBgDgDQgDgDABgEIACgxQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAxQgBAEgDADQgDADgEAAIAAAAgAJxgKQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApthgQgEgBgDgDQgDgDABgEIABgfIAAgCIAHgTQABgEAEgCQADgCAEACQAEABACAEQACADgBAEIgGARIgCAeQAAAEgDADQgDADgDAAIgBAAgAJxiCQgDgDgBgEIAAgqIAAgBQgCgDABgEQABgEADgDQADgCAEABQAEABADADIACADQABADABADIAAAtQgBAEgCADQgDADgFAAQgEAAgCgDgApRjUQgEgCgCgDQgCgEACgEIAQgvQABgEAEgCQAEgCAEACQAEABABAEQACADgBAEIgQAvQgCAEgDACIgFABIgDAAgAJJjmQgEgBgCgDIgfgoQgDgEABgEQAAgEADgCQAEgDAEABQAEAAADAEIAeAoQADADAAAEQgBAEgDADQgDACgDAAIgCAAgAH/lGQgEgBgDgDIgZghIgFgCQgEgBgCgEQgBgEABgDQACgEAEgCQADgCAEACIAIADQADABACACIAbAjQACADgBAEQAAAEgDADQgDACgDAAIgCAAgAnCl4QgEgCgBgDQgBgEACgEQABgEAEgBIAvgRQAEgCAEACQAEACABAEQABADgBAEQgCAEgEACIgvARIgDAAIgFgBgAGYmCIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABACAEQABADgBAEQgBAEgEACIgEABIgEAAgAlQmhQgEgCgCgDQgBgEACgEQABgEAEgBIAvgSQAEgBAEACQADABACAEQABAEgCAEQgBADgEACIgvARIgDABIgEgBgAEnmoIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABABAEQACADgBAEQgBAEgEACIgEABIgEAAgAjgnBQgDgCAAgEQgBgFADgDQACgDAFAAIAxgFQAFgBADADQADACABAFQAAAEgDADQgCADgEABIgyAFIgCAAQgDAAgDgDgAhonNQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACABAFQAAAEgDADQgCADgEABIgzAFIgBAAQgDAAgDgDgAC2nPIgvgQQgEgBgBgEQgCgEABgEQABgEAEgBQAEgCAEABIAvAQQAEABACAEQABAEgBAEQgBAEgEACIgEABIgEgBgAAPnaQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACAAAFQABAEgDADQgCADgFABIgxAFIgCAAQgDAAgDgDg");
	this.shape.setTransform(68.2,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0A265").ss(2,1,1).p("AgSATIAKgbIAbgK");
	this.shape_1.setTransform(14.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7BF7E").s().p("AjwIeIkUiJIilj+IANknIBRjwIE3hyIGZgrIF/CCICmDWIAAGuIiUCuIkJCHg");
	this.shape_2.setTransform(68.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル19, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.シンボル18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5B30").s().p("AgtDiQgIg4AIgSQAHgRAvhSQAthLABgHQAFgUgDgYQgGgmgdgQQgigUgRgBQgVgBgeAVQAjATAAAhQAAAbgaATQgZATgkAAQgkAAgZgTQgZgTAAgbQgFghAcgnQAbgmAkgRQAkgQA+gEQA+gFArALQA6AOAmAdQAnAeALAoQAJAkgQAtQgNAigWAYIhIBFQg4A1gDAKQgFARgDAqg");
	this.shape.setTransform(22,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5B30").s().p("Ag1ApQgWgRAAgYQAAgXAWgRQAWgQAfAAQAfAAAXAQQAWARAAAXQAAAYgWARQgXAQgfAAQgfAAgWgQg");
	this.shape_1.setTransform(21.5,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル18, new cjs.Rectangle(0,0,44,61), null);


(lib.シンボル17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0A265").s().p("AjoHzIgJgEQgEgCgBgEQgCgEACgEQACgDADgCQAEgCAEACIAHADIAmAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgoAAIAAAAIgEAAgAEBHzIgQAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAOAAIAcgOQADgCAEACQAEABACAEQACAEgCAEQgBADgDACIgfAPIgEABIAAAAgAB5HzQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAyAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAABHzQgDAAgDgDQgDgDAAgEQAAgEADgDQADgDADAAIAyAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAh2HzQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAyAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAkxHPIgtgWQgDgCgBgDQgCgEACgEQACgEAEgBQAEgCADACIAtAWQAEACACAEQABAEgCAEQgCADgEACIgDAAIgFgBgAFaHEQgEgCgCgDQgCgEACgEQABgEAEgCIAtgWQADgCAEACQAEABACAEQACAEgBAEQgCADgDACIgtAWIgFABIgDAAgAmcGaIgtgWQgEgCgBgEQgBgEACgEQABgDAEgCQAEgBAEACIAtAWQAEACABAEQABADgBAEQgCAEgEABIgEABIgEgBgAHFGOQgEgCgBgDQgCgEABgEQABgEAEgCIAtgWQAEgCAEABQAEACACADQABAEgBAEQgBAEgEACIgtAWIgEABIgEAAgAn4FXQgEgBgCgEIgbgqQgCgDABgEQABgEADgDQAEgCAEABQAEABACADIAbAqQACAEgBAEQgBAEgDACQgDACgCAAIgDAAgAIdFAQgDgDAAgEQgBgFADgDIAggmQADgDAEAAQAEgBADADQADADABAEQAAAEgDADIggAmQgDADgEABIgBAAQgDAAgDgCgAo4DyQgEgBgDgEIgcgqQgCgDABgEQABgEADgCQADgDAEABQAEABADADIAcAqQACAEgBAEQgBAEgDACQgDACgCAAIgCAAgAJqDlQgDgDAAgEQgBgEADgDIAEgHIAAgiQABgEADgDQACgDAEAAQAFAAACADQADADABAEIAAAmQAAADgDADIgGAJQgDADgEABIgCAAQgDAAgDgCgAp3CNQgEAAgDgDQgDgEABgEIABgyQABgEADgCQADgDAEAAQAEAAADADQADADgBAEIgCAyQAAAEgDADQgDADgEAAIAAAAgAJxBvQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAACADQADADABAEIAAAyQgBAEgDADQgCADgFAAQgEAAgCgDgApyAVQgEAAgDgDQgDgEABgEIACgxQAAgEADgCQADgDAEAAQAEAAADADQADADAAAEIgCAxQgBAEgDADQgDADgEAAIAAAAgAJxgIQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAACADQADADABAEIAAAyQgBAEgDADQgCADgFAAQgEAAgCgDgApshiQgEAAgDgDQgDgDAAgEIABgdIABgEIAHgTQABgEAEgBQAEgCAEABQAEACABAEQACADgBAEIgGASIgCAbQAAAEgDADQgDADgDAAIgBAAgAJxiAQgDgDgBgEIAAgsIAAgBQgCgDABgEQABgEADgCQADgDAEABQAEABADADIACADQABADABADIAAAvQgBAEgDADQgCADgFAAQgEAAgCgDgApRjVQgEgCgBgDQgCgEABgEIAQgvQABgEAEgCQAEgCAEACQAEABABAEQACAEgBAEIgQAvQgBADgEACIgEABIgEAAgAJJjmQgEgBgCgDIgfgoQgCgEABgEQAAgEADgCQAEgDAEABQAEAAADAEIAdAoQADADAAAEQgBAEgDADQgDACgEAAIgBAAgAIAlFQgEgBgCgDIgaghIgEgBQgEgBgCgEQgCgEABgDQABgEAEgCQADgCAEABIAHACQADABACACIAcAkQADADgBAEQAAAEgDADQgDACgDAAIgCAAgAnBl4QgEgCgBgEQgCgEACgDQACgEADgCIAwgRQADgBAEACQAEABACAEQABAEgCAEQgCAEgEABIguARIgEABIgEgBgAGZmCIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABACAEQABAEgBAEQgBADgEACIgEABIgEAAgAlQmhQgEgCgCgEQgBgEACgDQACgEAEgCIAvgRQADgBAEACQAEABACAEQABAEgCAEQgCAEgDABIgvARIgEABIgEgBgAEomoIgvgQQgEgCgCgDQgBgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABACAEQABAEgBAEQgBADgEACIgEABIgEAAgAjfnAQgDgDAAgEQgBgEADgDQACgEAFAAIAygFQAEgBADADQADADABAEQAAAEgDADQgCADgEABIgzAFIgBAAQgDAAgDgCgAhnnMQgDgDgBgEQAAgEADgDQACgEAEAAIAzgFQAEgBADADQADADABAEQAAAEgDADQgCADgEABIgyAFIgCAAQgDAAgDgCgAC3nPIgvgQQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIAvAQQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAAQnZQgDgDAAgEQgBgEADgDQACgEAFAAIAxgFQAFgBADADQADADAAAEQABAEgDADQgCADgFABIgxAFIgCAAQgDAAgDgCg");
	this.shape.setTransform(68.2,54.4,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0A265").ss(2,1,1).p("AgSATIAJgbIAcgK");
	this.shape_1.setTransform(122.1,20.5,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjwIeIkUiJIilj+IANknIBRjwIE3hyIGagrIF+CCICmDWIAAGuIiTCuIkKCHg");
	this.shape_2.setTransform(68.2,54.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル17, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.シンボル16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33ACE0").s().p("AieCMQgLgBgIgNQgIgOADgKQATg3BohYQBphbA8gGQAigEAbArQAbArgRAfQgeAyh9A8QhxA3g7AAIgIAAg");
	this.shape.setTransform(18.4,14,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル16, new cjs.Rectangle(0,0,36.8,28), null);


(lib.シンボル15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33ACE0").s().p("AgHBoQgjgTgJhPQgJhPAfgaQAKgJAaAHQAbAGAIALQASAbgKA/QgLA9gYAdQgDAEgIADQgEACgEAAIgDgBg");
	this.shape.setTransform(5.4,10.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル15, new cjs.Rectangle(0,0,10.8,21), null);


(lib.シンボル14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33ACE0").s().p("AACAxQh2gPglgkQgEgEADgIQADgHAFgEQAkgVBXgGQBbgGArAVQATAJAQAbQARAbgKAKQgUASg6AAQgfAAgqgFg");
	this.shape.setTransform(15.7,5.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル14, new cjs.Rectangle(0,0,31.3,10.8), null);


(lib.シンボル12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgnEdIh8o5IFHAAIhfI5g");
	this.shape.setTransform(16.4,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル12, new cjs.Rectangle(0,0,32.9,57.1), null);


(lib.シンボル11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("Ah5DmIBsnLICIBaIi9Fxg");
	this.shape.setTransform(12.3,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル11, new cjs.Rectangle(0,0,24.5,46), null);


(lib.シンボル10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("ABDDmIi9lxICIhaIBtHLg");
	this.shape.setTransform(12.3,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル10, new cjs.Rectangle(0,0,24.5,46), null);


(lib.シンボル9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5B30").s().p("AipERQgbgPgCgoQgCgjASggQAIgQAUgKQATgKAXgDQg4hRgdg9QgphWARgmQAdhBCLgoQCJgoA+AlQAnAYANCGQAGBDgCA9QAVALADAcQAEAbgPAcQgPAbglANQgkALgVgLQgUgLgEgcQgEgcAQgcQAJgQAUgMQASgLAVgEIgWidIkEBxIBFCQQAdAQAJAgQAKAggQAdQgQAdg0APQgaAIgUAAQgVAAgPgIg");
	this.shape.setTransform(22.7,28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル9, new cjs.Rectangle(0,0,45.4,56.2), null);


(lib.シンボル8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgICgQgUgOgDgQQgCgPANgNQANgNAUgEQAMgCAPAGQANAFAKAJIBLhMIilhaIgxBfQAEAWgNARQgNASgWAEQgWAEgdgWQgegVgDgWQgEgUAUgRQASgPAYgEQAYgDAZAYQAyibAugLQAugLBOA4QBNA5AGAwQADAdhBA9IhCA3QACAQgNANQgNANgVADIgIABQgRAAgQgMg");
	this.shape.setTransform(20.6,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル8, new cjs.Rectangle(0,0,41.2,34.4), null);


(lib.シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgEA0QgWgCgOgRQgOgQACgVQACgWARgOQARgOAVACQAWACAOARQAOARgDAVQgCAWgRAOQgOAMgSAAIgFgBg");
	this.shape.setTransform(5.3,58.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AglD0IgogIIgHmSQADgjAbgXQAcgWAiADQAjADAWAcQAXAbgDAjIhTGJIggABIgHAAg");
	this.shape_1.setTransform(10.1,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル6, new cjs.Rectangle(0,0,18.6,64.1), null);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgKA0QgWgFgLgTQgMgSAEgVQAFgVATgLQASgMAVAEQAVAFAMATQALASgEAUQgFAWgSALQgOAJgPAAIgKgBg");
	this.shape.setTransform(5.3,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AhDDuIgmgNIArmPQAIgjAdgTQAdgTAjAIQAiAIATAdQATAegHAjIiDF8QgbgCgNgDg");
	this.shape_1.setTransform(14.2,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル5, new cjs.Rectangle(0,0,24.8,63.1), null);


(lib.シンボル3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC3F").s().p("AgKA0QgWgFgLgTQgMgSAEgVQAFgVATgLQASgMAVAEQAVAFAMATQALASgEAUQgFAWgSALQgOAJgPAAIgKgBg");
	this.shape.setTransform(72.5,81.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AhDDuIgmgNIArmPQAIgjAdgTQAdgTAjAIQAiAIATAdQATAegHAjIiDF8QgbgCgNgDg");
	this.shape_1.setTransform(81.5,48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBEC3F").s().p("AgEA0QgWgCgOgRQgOgQACgVQACgWARgOQARgOAVACQAWACAOARQAOARgDAVQgCAWgRAOQgOAMgSAAIgFgBg");
	this.shape_2.setTransform(55,79.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBEC3F").s().p("AglD0IgogIIgHmSQADgjAbgXQAcgWAiADQAjADAWAcQAXAbgDAjIhTGJIggABIgHAAg");
	this.shape_3.setTransform(59.8,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7C3C0").s().p("AEBH0IgPAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIANAAIAdgPQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIggAQIgEABIAAAAgAjpHzIgIgEQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAHADIAmAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgpAAIAAAAIgFgBgAB6H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAACH0QgDgBgDgCQgDgDAAgEQAAgFADgCQADgDADAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAh1H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAkwHQIgtgWQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAtAWQAEABACAEQABAEgCAEQgCAEgEABIgDABIgFgBgAFcHEQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIgtAXIgFABIgDgBgAmbGbIgtgXQgEgCgBgEQgBgEACgDQABgEAFgBQADgCAEACIAtAXQAEACABAEQABADgBAEQgCAEgFABIgDABIgEgBgAHHGNQgEgBgCgEQgCgEACgDQABgEAEgCIAsgXQAEgCADABQAFABACAEQABAEgBAEQgBAEgEACIgsAXIgFABIgDgBgAn4FYQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAIdE/QgDgDAAgEQgBgEADgDIAhgmQADgEAEAAQAEAAADADQADACABAEQAAAEgDAEIghAmQgDADgEAAIAAAAQgEAAgDgCgAo5DzQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAJsDkQgEgCAAgEQgBgFADgDIADgFIAAglQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAoQAAADgDADIgFAIQgDADgEABIgBAAQgEAAgCgCgAp3CPQgEgBgDgDQgDgDABgEIACgyQAAgEADgDQADgDAEABQAEAAADADQADADgBAEIgBAyQgBAEgDADQgDADgEAAIAAAAgAJxBtQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApyAXQgEgBgDgDQgDgDABgEIACgxQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAxQgBAEgDADQgDADgEAAIAAAAgAJxgKQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApthgQgEgBgDgDQgDgDABgEIABgfIAAgCIAHgTQABgEAEgCQADgCAEACQAEABACAEQACADgBAEIgGARIgCAeQAAAEgDADQgDADgDAAIgBAAgAJxiCQgDgDgBgEIAAgqIAAgBQgCgDABgEQABgEADgDQADgCAEABQAEABADADIACADQABADABADIAAAtQgBAEgCADQgDADgFAAQgEAAgCgDgApRjUQgEgCgCgDQgCgEACgEIAQgvQABgEAEgCQAEgCAEACQAEABABAEQACADgBAEIgQAvQgCAEgDACIgFABIgDAAgAJJjmQgEgBgCgDIgfgoQgDgEABgEQAAgEADgCQAEgDAEABQAEAAADAEIAeAoQADADAAAEQgBAEgDADQgDACgDAAIgCAAgAH/lGQgEgBgDgDIgZghIgFgCQgEgBgCgEQgBgEABgDQACgEAEgCQADgCAEACIAIADQADABACACIAbAjQACADgBAEQAAAEgDADQgDACgDAAIgCAAgAnCl4QgEgCgBgDQgBgEACgEQABgEAEgBIAvgRQAEgCAEACQAEACABAEQABADgBAEQgCAEgEACIgvARIgDAAIgFgBgAGYmCIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABACAEQABADgBAEQgBAEgEACIgEABIgEAAgAlQmhQgEgCgCgDQgBgEACgEQABgEAEgBIAvgSQAEgBAEACQADABACAEQABAEgCAEQgBADgEACIgvARIgDABIgEgBgAEnmoIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABABAEQACADgBAEQgBAEgEACIgEABIgEAAgAjgnBQgDgCAAgEQgBgFADgDQACgDAFAAIAxgFQAFgBADADQADACABAFQAAAEgDADQgCADgEABIgyAFIgCAAQgDAAgDgDgAhonNQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACABAFQAAAEgDADQgCADgEABIgzAFIgBAAQgDAAgDgDgAC2nPIgvgQQgEgBgBgEQgCgEABgEQABgEAEgBQAEgCAEABIAvAQQAEABACAEQABAEgBAEQgBAEgEACIgEABIgEgBgAAPnaQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACAAAFQABAEgDADQgCADgFABIgxAFIgCAAQgDAAgDgDg");
	this.shape_4.setTransform(68.2,54.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E7C3C0").ss(2,1,1).p("AgSATIAJgbIAcgK");
	this.shape_5.setTransform(14.3,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E34B2B").s().p("AjwIeIkUiJIilj+IANknIBRjwIE3hyIGZgrIF/CCICmDWIAAGuIiUCuIkJCHg");
	this.shape_6.setTransform(68.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.change_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhoNA6mMAAAh1LMDQbAAAMAAAB1Lg");
	this.shape.setTransform(667,375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.change_scene, new cjs.Rectangle(0,0,1334,750), null);


(lib.汗1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.シンボル14();
	this.instance.parent = this;
	this.instance.setTransform(67.3,74.3,1,1,0,0,0,31.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.7,scaleX:0.93,scaleY:0.93,x:52.8,y:74.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:53.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:55,y:74.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:54.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:53.9,y:74.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:53.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:52.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:52.3},0).wait(1).to({scaleX:1,scaleY:1,x:51.7,y:74.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:50.8,y:74.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:50},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:49.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:48.2},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:47.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:48.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:49.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:50},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:50.8},0).wait(1).to({scaleX:1,scaleY:1,x:51.7,y:74.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:52.3,y:74.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:52.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:53.4,y:74.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:53.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:54.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:53.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:53.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:52.8,y:74.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:52.3},0).wait(1).to({scaleX:1,scaleY:1,x:51.7,y:74.3},0).wait(1));

	// 2
	this.instance_1 = new lib.シンボル15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.8,60.3,1,1,0,0,0,5.4,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:10.5,scaleX:1.04,scaleY:1.04,x:96.7,y:49.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:48.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:96.8,y:48.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:48.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:48.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:96.7,y:48.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:49.3},0).wait(1).to({scaleX:1,scaleY:1,x:96.8,y:49.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:96.7,y:50},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:96.8,y:50.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:96.7,y:50.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:96.8,y:50.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:96.7,y:51},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:51.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:96.8,y:51.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:96.7,y:51.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:96.8,y:50.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:96.7,y:50.2},0).wait(1).to({scaleX:1,scaleY:1,x:96.8,y:49.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:96.7,y:49.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:96.8,y:48.5},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:96.7,y:47.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:96.8,y:47.2},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:96.7,y:46.6},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:96.8,y:46},0).wait(1).to({scaleX:1.27,scaleY:1.27,y:46.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:96.7,y:47.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:96.8,y:48.8},0).wait(1).to({scaleX:1,scaleY:1,y:49.8},0).wait(1));

	// 3
	this.instance_2 = new lib.シンボル16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85,64,1,1,0,0,0,36.8,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:18.4,regY:14,scaleX:0.92,scaleY:0.92,x:68.2,y:51.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:69.7,y:52.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:71.3,y:53.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:69.7,y:52.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:68.1,y:51.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:66.4,y:49.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:64.8,y:48.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:65.2,y:48.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:65.5,y:49.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:65.9,y:49.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:66.2,y:49.7},0).wait(1).to({scaleX:1,scaleY:1,x:66.6,y:50},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:67.7,y:50.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:68.8,y:51.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:69.9,y:52.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:71,y:53.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:72,y:54.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:71,y:53.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:69.9,y:52.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:68.8,y:51.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:67.7,y:50.8},0).wait(1).to({scaleX:1,scaleY:1,x:66.6,y:50},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:65.8,y:49.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:65,y:48.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:64.2,y:48.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:63.4,y:47.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:64.5,y:48.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:65.5,y:49.2},0).wait(1).to({scaleX:1,scaleY:1,x:66.6,y:50},0).wait(1));

	// 枠
	this.instance_3 = new lib.シンボル17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.2,54.1,1,1,0,0,0,68.2,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:54.2,y:54.2},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.4,108.4);


(lib.cat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance = new lib.rightHand_5();
	this.instance.parent = this;
	this.instance.setTransform(66.4,177.6,0.999,0.999,0,154.4,-25.6,53.9,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.5,regY:32,scaleX:1,scaleY:0.93,skewX:155.2,skewY:-24.8,x:54,y:202},0).wait(1).to({scaleY:0.87,skewX:156,skewY:-24,x:53.2,y:200.7},0).wait(1).to({scaleY:0.8,skewX:156.9,skewY:-23.1,x:52.3,y:199.4},0).wait(1).to({scaleY:0.73,skewX:157.7,skewY:-22.3,x:51.5,y:198.2},0).wait(1).to({scaleY:0.67,skewX:158.6,skewY:-21.4,x:50.7,y:196.9},0).wait(1).to({scaleY:0.6,skewX:159.4,skewY:-20.6,x:50,y:195.5},0).wait(1).to({scaleY:0.53,skewX:160.3,skewY:-19.7,x:49.3,y:194.2},0).wait(1).to({scaleY:0.47,skewX:161.2,skewY:-18.8,x:48.7,y:192.8},0).wait(1).to({scaleY:0.4,skewX:162,skewY:-18,x:48,y:191.4},0).wait(1).to({scaleY:0.33,skewX:162.9,skewY:-17.1,x:47.4,y:190},0).wait(1).to({scaleY:0.27,skewX:163.7,skewY:-16.3,x:46.9,y:188.6},0).wait(1).to({scaleY:0.2,skewX:164.6,skewY:-15.4,x:46.4,y:187.2},0).wait(1).to({scaleY:0.13,skewX:165.4,skewY:-14.6,x:46,y:185.7},0).wait(1).to({scaleY:0.07,skewX:166.3,skewY:-13.7,x:45.5,y:184.3},0).wait(1).to({scaleX:0,scaleY:0,skewX:0,skewY:0,x:18.3,y:-197.3},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:-12,x:44.8,y:181.4},0).wait(1).to({scaleY:0.13,rotation:-11.1,x:44.5,y:179.9},0).wait(1).to({scaleY:0.2,rotation:-10.3,x:44.3,y:178.4},0).wait(1).to({scaleY:0.27,rotation:-9.4,x:44,y:177},0).wait(1).to({scaleY:0.33,rotation:-8.6,x:43.8,y:175.5},0).wait(1).to({scaleY:0.4,rotation:-7.7,x:43.7,y:174},0).wait(1).to({scaleY:0.47,rotation:-6.9,x:43.6,y:172.5},0).wait(1).to({scaleY:0.53,rotation:-6,x:43.5,y:170.9},0).wait(1).to({scaleY:0.6,rotation:-5.1,y:169.5},0).wait(1).to({scaleY:0.67,rotation:-4.3,y:167.9},0).wait(1).to({scaleY:0.73,rotation:-3.4,x:43.6,y:166.4},0).wait(1).to({scaleY:0.8,rotation:-2.6,x:43.7,y:164.9},0).wait(1).to({scaleY:0.87,rotation:-1.7,x:43.9,y:163.4},0).wait(1).to({scaleY:0.93,rotation:-0.9,x:44,y:161.9},0).wait(1).to({scaleY:1,rotation:0,x:44.3,y:160.4},0).wait(1).to({regX:55.6,regY:51.6,x:65.6,y:178.6},0).wait(1).to({regX:32.5,regY:32,rotation:6.4,x:44.8,y:156.6},0).wait(1).to({rotation:12.8,x:47.4,y:154.4},0).wait(1).to({rotation:19.2,x:50.2,y:152.5},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:32,x:56.4,y:149.8},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:12.8,x:47.4,y:154.3},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-12.8,x:38.8,y:164.6},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-18.5,x:37.5,y:167.4},0).wait(1).to({rotation:-11.4,x:39.1,y:163.9},0).wait(1).to({rotation:-4.3,x:41.1,y:160.8},0).wait(1).to({rotation:2.9,x:43.5,y:157.8},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:17.1,x:49.3,y:153.1},0).wait(1).to({rotation:24.2,x:52.6,y:151.3},0).wait(1).to({rotation:31.3,x:56,y:149.9},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:12.8,x:47.4,y:154.3},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-12.8,x:38.8,y:164.6},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-20.5,x:37.2,y:168.3},0).wait(1).to({rotation:-15.4,x:38.2,y:165.8},0).wait(1).to({rotation:-10.2,x:39.4,y:163.4},0).wait(1).to({rotation:-5.1,x:40.8,y:161.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({regX:55.6,regY:51.6,x:65.6,y:178.6},0).wait(1).to({regX:32.5,regY:32,rotation:6.4,x:44.8,y:156.6},0).wait(1).to({rotation:12.8,x:47.4,y:154.4},0).wait(1).to({rotation:19.2,x:50.2,y:152.5},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:32,x:56.4,y:149.8},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:12.8,x:47.4,y:154.3},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-12.8,x:38.8,y:164.6},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-18.5,x:37.5,y:167.4},0).wait(1).to({rotation:-11.4,x:39.1,y:163.9},0).wait(1).to({rotation:-4.3,x:41.1,y:160.8},0).wait(1).to({rotation:2.9,x:43.5,y:157.8},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:17.1,x:49.3,y:153.1},0).wait(1).to({rotation:24.2,x:52.6,y:151.3},0).wait(1).to({rotation:31.3,x:56,y:149.9},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:12.8,x:47.4,y:154.3},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-12.8,x:38.8,y:164.6},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-20.5,x:37.2,y:168.3},0).wait(1).to({rotation:-15.4,x:38.2,y:165.8},0).wait(1).to({rotation:-10.2,x:39.4,y:163.4},0).wait(1).to({rotation:-5.1,x:40.8,y:161.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({regX:55.6,regY:51.6,x:65.6,y:178.6},0).wait(1).to({regX:32.5,regY:32,rotation:5,x:44.3,y:157.1},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:15,x:48.3,y:153.7},0).wait(1).to({rotation:20,x:50.6,y:152.2},0).wait(1).to({rotation:25,x:52.9,y:151.1},0).wait(1).to({rotation:30,x:55.4,y:150.1},0).wait(1).to({rotation:25,x:52.9,y:151.1},0).wait(1).to({rotation:20,x:50.6,y:152.2},0).wait(1).to({rotation:15,x:48.3,y:153.7},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:5,x:44.3,y:157.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-5,x:40.9,y:161.1},0).wait(1).to({rotation:-10,x:39.4,y:163.3},0).wait(1).to({rotation:-15,x:38.3,y:165.6},0).wait(1).to({rotation:-20,x:37.3,y:168.1},0).wait(1).to({rotation:-25,x:36.4,y:170.6},0).wait(1).to({rotation:-30,x:35.9,y:173.2},0).wait(1).to({rotation:-25,x:36.4,y:170.6},0).wait(1).to({rotation:-20,x:37.3,y:168.1},0).wait(1).to({rotation:-15,x:38.3,y:165.6},0).wait(1).to({rotation:-10,x:39.4,y:163.3},0).wait(1).to({rotation:-5,x:40.9,y:161.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({regX:55.6,regY:51.6,x:65.6,y:178.6},0).wait(1).to({regX:32.5,regY:32,rotation:6.4,x:44.8,y:156.6},0).wait(1).to({rotation:12.8,x:47.4,y:154.4},0).wait(1).to({rotation:19.2,x:50.2,y:152.5},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:32,x:56.4,y:149.8},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:12.8,x:47.4,y:154.3},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-12.8,x:38.8,y:164.6},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-18.5,x:37.5,y:167.4},0).wait(1).to({rotation:-11.4,x:39.1,y:163.9},0).wait(1).to({rotation:-4.3,x:41.1,y:160.8},0).wait(1).to({rotation:2.9,x:43.5,y:157.8},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:17.1,x:49.3,y:153.1},0).wait(1).to({rotation:24.2,x:52.6,y:151.3},0).wait(1).to({rotation:31.3,x:56,y:149.9},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:12.8,x:47.4,y:154.3},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-12.8,x:38.8,y:164.6},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-20.5,x:37.2,y:168.3},0).wait(1).to({rotation:-15.4,x:38.2,y:165.8},0).wait(1).to({rotation:-10.2,x:39.4,y:163.4},0).wait(1).to({rotation:-5.1,x:40.8,y:161.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({regX:55.6,regY:51.6,x:65.6,y:178.6},0).wait(1).to({regX:32.5,regY:32,rotation:5,x:44.3,y:157.1},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:15,x:48.3,y:153.7},0).wait(1).to({rotation:20,x:50.6,y:152.2},0).wait(1).to({rotation:25,x:52.9,y:151.1},0).wait(1).to({rotation:30,x:55.4,y:150.1},0).wait(1).to({rotation:25,x:52.9,y:151.1},0).wait(1).to({rotation:20,x:50.6,y:152.2},0).wait(1).to({rotation:15,x:48.3,y:153.7},0).wait(1).to({rotation:10,x:46.2,y:155.3},0).wait(1).to({rotation:5,x:44.3,y:157.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({rotation:-5,x:40.9,y:161.1},0).wait(1).to({rotation:-10,x:39.4,y:163.3},0).wait(1).to({rotation:-15,x:38.3,y:165.6},0).wait(1).to({rotation:-20,x:37.3,y:168.1},0).wait(1).to({rotation:-25,x:36.4,y:170.6},0).wait(1).to({rotation:-30,x:35.9,y:173.2},0).wait(1).to({rotation:-25,x:36.4,y:170.6},0).wait(1).to({rotation:-20,x:37.3,y:168.1},0).wait(1).to({rotation:-15,x:38.3,y:165.6},0).wait(1).to({rotation:-10,x:39.4,y:163.3},0).wait(1).to({rotation:-5,x:40.9,y:161.1},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1).to({regX:55.6,regY:51.6,x:65.6,y:178.6},0).wait(1).to({regX:32.5,regY:32,rotation:4.3,x:44,y:157.3},0).wait(1).to({rotation:8.5,x:45.7,y:155.8},0).wait(1).to({rotation:12.8,x:47.4,y:154.4},0).wait(1).to({rotation:17.1,x:49.2,y:153.1},0).wait(1).to({rotation:21.4,x:51.2,y:151.9},0).wait(1).to({rotation:25.6,x:53.2,y:150.9},0).wait(1).to({rotation:29.9,x:55.3,y:150.1},0).wait(1).to({rotation:34.2,x:57.5,y:149.4},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:30.4,x:55.6,y:150},0).wait(1).to({rotation:22.4,x:51.7,y:151.7},0).wait(1).to({rotation:14.4,x:48.1,y:153.9},0).wait(1).to({rotation:6.4,x:44.9,y:156.6},0).wait(1).to({rotation:-1.6,x:42,y:159.7},0).wait(1).to({rotation:-9.6,x:39.6,y:163.1},0).wait(1).to({rotation:-17.6,x:37.8,y:166.9},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-20.7,x:37.1,y:168.4},0).wait(1).to({rotation:-15.8,x:38.1,y:166},0).wait(1).to({rotation:-10.8,x:39.2,y:163.7},0).wait(1).to({rotation:-5.9,x:40.6,y:161.5},0).wait(1).to({rotation:-1,x:42.2,y:159.4},0).wait(1).to({rotation:3.9,x:43.9,y:157.4},0).wait(1).to({rotation:8.9,x:45.8,y:155.6},0).wait(1).to({rotation:13.8,x:47.8,y:154.1},0).wait(1).to({rotation:18.7,x:50,y:152.6},0).wait(1).to({rotation:23.7,x:52.3,y:151.4},0).wait(1).to({rotation:28.6,x:54.7,y:150.3},0).wait(1).to({rotation:33.5,x:57.2,y:149.5},0).wait(1).to({rotation:38.4,x:59.7,y:148.9},0).wait(1).to({rotation:30.4,x:55.6,y:150},0).wait(1).to({rotation:22.4,x:51.7,y:151.7},0).wait(1).to({rotation:14.4,x:48.1,y:153.9},0).wait(1).to({rotation:6.4,x:44.9,y:156.6},0).wait(1).to({rotation:-1.6,x:42,y:159.7},0).wait(1).to({rotation:-9.6,x:39.6,y:163.1},0).wait(1).to({rotation:-17.6,x:37.8,y:166.9},0).wait(1).to({rotation:-25.6,x:36.4,y:170.9},0).wait(1).to({rotation:-22,x:36.9,y:169.1},0).wait(1).to({rotation:-18.3,x:37.6,y:167.3},0).wait(1).to({rotation:-14.6,x:38.4,y:165.5},0).wait(1).to({rotation:-11,x:39.2,y:163.7},0).wait(1).to({rotation:-7.3,x:40.2,y:162.1},0).wait(1).to({rotation:-3.7,x:41.3,y:160.6},0).wait(1).to({rotation:0,x:42.5,y:159},0).wait(1));

	// leftHand
	this.instance_1 = new lib.leftHand_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110,176.1,0.999,0.999,0,-150.1,29.9,12,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:35,regY:31,scaleX:1,scaleY:1,skewX:-151.5,skewY:28.5,x:121.2,y:203.5},0).wait(1).to({skewX:-153,skewY:27,x:122,y:203.2},0).wait(1).to({skewX:-154.5,skewY:25.5,x:122.7,y:202.9},0).wait(1).to({skewX:-156,skewY:24,x:123.3,y:202.5},0).wait(1).to({skewX:-157.4,skewY:22.6,x:124,y:202.1},0).wait(1).to({skewX:-158.9,skewY:21.1,x:124.7,y:201.8},0).wait(1).to({skewX:-160.4,skewY:19.6,x:125.4,y:201.4},0).wait(1).to({skewX:-161.9,skewY:18.1,x:126,y:201},0).wait(1).to({skewX:-163.4,skewY:16.6,x:126.7,y:200.6},0).wait(1).to({skewX:-164.9,skewY:15.1,x:127.3,y:200.1},0).wait(1).to({skewX:-166.4,skewY:13.6,x:127.9,y:199.6},0).wait(1).to({skewX:-167.9,skewY:12.1,x:128.5,y:199.2},0).wait(1).to({skewX:-169.4,skewY:10.6,x:129.1,y:198.7},0).wait(1).to({skewX:-170.8,skewY:9.2,x:129.7,y:198.2},0).wait(1).to({skewX:-172.3,skewY:7.7,x:130.3,y:197.7},0).wait(1).to({skewX:-170.8,skewY:9.2,x:129.7,y:198.2},0).wait(1).to({skewX:-169.4,skewY:10.6,x:129.1,y:198.7},0).wait(1).to({skewX:-167.9,skewY:12.1,x:128.5,y:199.2},0).wait(1).to({skewX:-166.4,skewY:13.6,x:127.9,y:199.6},0).wait(1).to({skewX:-164.9,skewY:15.1,x:127.3,y:200.1},0).wait(1).to({skewX:-163.4,skewY:16.6,x:126.7,y:200.6},0).wait(1).to({skewX:-161.9,skewY:18.1,x:126,y:201},0).wait(1).to({skewX:-160.4,skewY:19.6,x:125.4,y:201.4},0).wait(1).to({skewX:-158.9,skewY:21.1,x:124.7,y:201.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:124,y:202.1},0).wait(1).to({skewX:-156,skewY:24,x:123.3,y:202.5},0).wait(1).to({skewX:-154.5,skewY:25.5,x:122.7,y:202.9},0).wait(1).to({skewX:-153,skewY:27,x:122,y:203.2},0).wait(1).to({skewX:-151.5,skewY:28.5,x:121.2,y:203.5},0).wait(1).to({skewX:-150,skewY:30,x:120.5,y:203.8},0).wait(1).to({regX:11.8,regY:48.6,scaleX:1,scaleY:1,skewX:-150.1,skewY:29.9,x:109.8,y:176.1},0).wait(1).to({regX:35,regY:31,scaleX:1,scaleY:0.93,skewX:-152.4,skewY:27.6,x:122.8,y:201.4},0).wait(1).to({scaleY:0.87,skewX:-154.8,skewY:25.2,x:124.5,y:199.9},0).wait(1).to({scaleY:0.8,skewX:-157.2,skewY:22.8,x:125.9,y:198.2},0).wait(1).to({scaleY:0.73,skewX:-159.6,skewY:20.4,x:127.4,y:196.5},0).wait(1).to({scaleY:0.67,skewX:-162,skewY:18,x:128.6,y:194.7},0).wait(1).to({scaleY:0.6,skewX:-164.4,skewY:15.6,x:129.7,y:192.8},0).wait(1).to({scaleY:0.53,skewX:-166.8,skewY:13.2,x:130.7,y:190.9},0).wait(1).to({scaleY:0.47,skewX:-169.2,skewY:10.8,x:131.6,y:188.9},0).wait(1).to({scaleY:0.4,skewX:-171.6,skewY:8.4,x:132.3,y:186.9},0).wait(1).to({scaleY:0.33,skewX:-174,skewY:6,x:133,y:184.9},0).wait(1).to({scaleY:0.27,skewX:-176.4,skewY:3.6,x:133.4,y:182.8},0).wait(1).to({scaleY:0.2,skewX:-178.8,skewY:1.2,x:133.8,y:180.8},0).wait(1).to({scaleY:0.13,skewX:-181.2,skewY:-1.2,x:133.9,y:178.6},0).wait(1).to({scaleY:0.07,skewX:-183.6,skewY:-3.6,x:134,y:176.6},0).wait(1).to({scaleX:0,scaleY:0,skewX:-360,skewY:0,x:-64.2,y:-181.8},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:-8.4,x:133.7,y:172.5},0).wait(1).to({scaleY:0.13,rotation:-7.8,x:133.6,y:171.6},0).wait(1).to({scaleY:0.2,rotation:-7.2,y:170.7},0).wait(1).to({scaleY:0.27,rotation:-6.6,y:169.8},0).wait(1).to({scaleY:0.33,rotation:-6,y:169},0).wait(1).to({scaleY:0.4,rotation:-5.4,y:168.1},0).wait(1).to({scaleY:0.47,rotation:-4.8,x:133.7,y:167.2},0).wait(1).to({scaleY:0.53,rotation:-4.2,x:133.8,y:166.3},0).wait(1).to({scaleY:0.6,rotation:-3.6,x:133.9,y:165.4},0).wait(1).to({scaleY:0.67,rotation:-3,x:134.1,y:164.5},0).wait(1).to({scaleY:0.73,rotation:-2.4,x:134.2,y:163.7},0).wait(1).to({scaleY:0.8,rotation:-1.8,x:134.4,y:162.8},0).wait(1).to({scaleY:0.87,rotation:-1.2,x:134.6,y:161.9},0).wait(1).to({scaleY:0.93,rotation:-0.6,x:134.8,y:161.1},0).wait(1).to({scaleY:1,rotation:0,x:135,y:160.2},0).wait(1).to({regX:11.9,regY:48.8,x:111.9,y:177.8},0).wait(1).to({regX:35,regY:31,rotation:2.3,x:135.7,y:160.9},0).wait(1).to({rotation:4.6,x:136.4,y:161.9},0).wait(1).to({rotation:6.9,x:137,y:162.9},0).wait(1).to({rotation:9.2,x:137.5,y:163.9},0).wait(1).to({rotation:11.6,x:138.1,y:165},0).wait(1).to({rotation:13.9,x:138.6,y:166.1},0).wait(1).to({rotation:16.2,x:139,y:167.1},0).wait(1).to({rotation:18.5,x:139.4,y:168.2},0).wait(1).to({rotation:9.7,x:137.7,y:164.1},0).wait(1).to({rotation:0.9,x:135.3,y:160.4},0).wait(1).to({rotation:-7.9,x:132.3,y:157},0).wait(1).to({rotation:-16.7,x:128.9,y:154.1},0).wait(1).to({rotation:-12.9,x:130.4,y:155.2},0).wait(1).to({rotation:-9.2,x:131.9,y:156.6},0).wait(1).to({rotation:-5.4,x:133.2,y:157.9},0).wait(1).to({rotation:-1.6,x:134.5,y:159.4},0).wait(1).to({rotation:2.1,x:135.7,y:160.9},0).wait(1).to({rotation:5.9,x:136.7,y:162.5},0).wait(1).to({rotation:9.7,x:137.6,y:164.1},0).wait(1).to({rotation:3.8,x:136.1,y:161.6},0).wait(1).to({rotation:-2.1,x:134.4,y:159.2},0).wait(1).to({rotation:-8,x:132.3,y:157},0).wait(1).to({rotation:-13.8,x:130.1,y:155},0).wait(1).to({rotation:-19.7,x:127.7,y:153.3},0).wait(1).to({rotation:-16.4,x:129,y:154.2},0).wait(1).to({rotation:-13.1,x:130.4,y:155.2},0).wait(1).to({rotation:-9.8,x:131.6,y:156.3},0).wait(1).to({rotation:-6.6,x:132.8,y:157.5},0).wait(1).to({rotation:-3.3,x:133.9,y:158.7},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1).to({regX:11.9,regY:48.8,x:111.9,y:177.8},0).wait(1).to({regX:35,regY:31,rotation:-6.2,x:133,y:157.6},0).wait(1).to({rotation:-12.4,x:130.7,y:155.5},0).wait(1).to({rotation:-18.6,x:128.1,y:153.6},0).wait(1).to({rotation:-24.8,x:125.4,y:151.9},0).wait(1).to({rotation:-31,x:122.5,y:150.6},0).wait(1).to({rotation:-37.2,x:119.6,y:149.7},0).wait(1).to({rotation:-31,x:122.5,y:150.6},0).wait(1).to({rotation:-24.8,x:125.4,y:151.9},0).wait(1).to({rotation:-18.6,x:128.1,y:153.6},0).wait(1).to({rotation:-12.4,x:130.7,y:155.5},0).wait(1).to({rotation:-6.2,x:133,y:157.6},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1).to({rotation:5,x:136.4,y:162.1},0).wait(1).to({rotation:10,x:137.7,y:164.3},0).wait(1).to({rotation:15,x:138.8,y:166.6},0).wait(1).to({rotation:20,x:139.7,y:169},0).wait(1).to({rotation:25,x:140.3,y:171.4},0).wait(1).to({rotation:30,x:140.8,y:173.9},0).wait(1).to({rotation:25,x:140.3,y:171.4},0).wait(1).to({rotation:20,x:139.7,y:169},0).wait(1).to({rotation:15,x:138.8,y:166.6},0).wait(1).to({rotation:10,x:137.7,y:164.3},0).wait(1).to({rotation:5,x:136.4,y:162.1},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1).to({regX:11.9,regY:48.8,x:111.9,y:177.8},0).wait(1).to({regX:35,regY:31,rotation:2.3,x:135.7,y:160.9},0).wait(1).to({rotation:4.6,x:136.4,y:161.9},0).wait(1).to({rotation:6.9,x:137,y:162.9},0).wait(1).to({rotation:9.2,x:137.5,y:163.9},0).wait(1).to({rotation:11.6,x:138.1,y:165},0).wait(1).to({rotation:13.9,x:138.6,y:166.1},0).wait(1).to({rotation:16.2,x:139,y:167.1},0).wait(1).to({rotation:18.5,x:139.4,y:168.2},0).wait(1).to({rotation:9.7,x:137.7,y:164.1},0).wait(1).to({rotation:0.9,x:135.3,y:160.4},0).wait(1).to({rotation:-7.9,x:132.3,y:157},0).wait(1).to({rotation:-16.7,x:128.9,y:154.1},0).wait(1).to({rotation:-12.9,x:130.4,y:155.2},0).wait(1).to({rotation:-9.2,x:131.9,y:156.6},0).wait(1).to({rotation:-5.4,x:133.2,y:157.9},0).wait(1).to({rotation:-1.6,x:134.5,y:159.4},0).wait(1).to({rotation:2.1,x:135.7,y:160.9},0).wait(1).to({rotation:5.9,x:136.7,y:162.5},0).wait(1).to({rotation:9.7,x:137.6,y:164.1},0).wait(1).to({rotation:3.8,x:136.1,y:161.6},0).wait(1).to({rotation:-2.1,x:134.4,y:159.2},0).wait(1).to({rotation:-8,x:132.3,y:157},0).wait(1).to({rotation:-13.8,x:130.1,y:155},0).wait(1).to({rotation:-19.7,x:127.7,y:153.3},0).wait(1).to({rotation:-16.4,x:129,y:154.2},0).wait(1).to({rotation:-13.1,x:130.4,y:155.2},0).wait(1).to({rotation:-9.8,x:131.6,y:156.3},0).wait(1).to({rotation:-6.6,x:132.8,y:157.5},0).wait(1).to({rotation:-3.3,x:133.9,y:158.7},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1).to({regX:11.9,regY:48.8,x:111.9,y:177.8},0).wait(1).to({regX:35,regY:31,rotation:-6.2,x:133,y:157.6},0).wait(1).to({rotation:-12.4,x:130.7,y:155.5},0).wait(1).to({rotation:-18.6,x:128.1,y:153.6},0).wait(1).to({rotation:-24.8,x:125.4,y:151.9},0).wait(1).to({rotation:-31,x:122.5,y:150.6},0).wait(1).to({rotation:-37.2,x:119.6,y:149.7},0).wait(1).to({rotation:-31,x:122.5,y:150.6},0).wait(1).to({rotation:-24.8,x:125.4,y:151.9},0).wait(1).to({rotation:-18.6,x:128.1,y:153.6},0).wait(1).to({rotation:-12.4,x:130.7,y:155.5},0).wait(1).to({rotation:-6.2,x:133,y:157.6},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1).to({rotation:5,x:136.4,y:162.1},0).wait(1).to({rotation:10,x:137.7,y:164.3},0).wait(1).to({rotation:15,x:138.8,y:166.6},0).wait(1).to({rotation:20,x:139.7,y:169},0).wait(1).to({rotation:25,x:140.3,y:171.4},0).wait(1).to({rotation:30,x:140.8,y:173.9},0).wait(1).to({rotation:25,x:140.3,y:171.4},0).wait(1).to({rotation:20,x:139.7,y:169},0).wait(1).to({rotation:15,x:138.8,y:166.6},0).wait(1).to({rotation:10,x:137.7,y:164.3},0).wait(1).to({rotation:5,x:136.4,y:162.1},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1).to({regX:11.9,regY:48.8,x:111.9,y:177.8},0).wait(1).to({regX:35,regY:31,rotation:1.5,x:135.5,y:160.6},0).wait(1).to({rotation:3.1,x:135.9,y:161.3},0).wait(1).to({rotation:4.6,x:136.4,y:161.9},0).wait(1).to({rotation:6.2,x:136.8,y:162.6},0).wait(1).to({rotation:7.7,x:137.2,y:163.2},0).wait(1).to({rotation:9.2,x:137.5,y:163.9},0).wait(1).to({rotation:10.8,x:137.9,y:164.6},0).wait(1).to({rotation:12.3,x:138.3,y:165.3},0).wait(1).to({rotation:13.9,x:138.6,y:166.1},0).wait(1).to({rotation:15.4,x:138.9,y:166.8},0).wait(1).to({rotation:16.9,x:139.2,y:167.5},0).wait(1).to({rotation:18.5,x:139.4,y:168.2},0).wait(1).to({rotation:12.6,x:138.3,y:165.5},0).wait(1).to({rotation:6.8,x:136.9,y:162.8},0).wait(1).to({rotation:0.9,x:135.3,y:160.4},0).wait(1).to({rotation:-5,x:133.4,y:158.1},0).wait(1).to({rotation:-10.8,x:131.3,y:156},0).wait(1).to({rotation:-16.7,x:128.9,y:154.1},0).wait(1).to({rotation:-14.3,x:129.9,y:154.8},0).wait(1).to({rotation:-11.9,x:130.9,y:155.7},0).wait(1).to({rotation:-9.5,x:131.7,y:156.4},0).wait(1).to({rotation:-7.1,x:132.7,y:157.2},0).wait(1).to({rotation:-4.7,x:133.5,y:158.1},0).wait(1).to({rotation:-2.3,x:134.2,y:159.1},0).wait(1).to({rotation:0.1,x:135,y:160},0).wait(1).to({rotation:2.5,x:135.7,y:161},0).wait(1).to({rotation:4.9,x:136.4,y:162},0).wait(1).to({rotation:7.3,x:137.1,y:163},0).wait(1).to({rotation:9.7,x:137.6,y:164.1},0).wait(1).to({rotation:5.5,x:136.6,y:162.3},0).wait(1).to({rotation:1.3,x:135.4,y:160.5},0).wait(1).to({rotation:-2.9,x:134.1,y:158.8},0).wait(1).to({rotation:-7.1,x:132.7,y:157.2},0).wait(1).to({rotation:-11.3,x:131.1,y:155.8},0).wait(1).to({rotation:-15.5,x:129.5,y:154.5},0).wait(1).to({rotation:-19.7,x:127.7,y:153.3},0).wait(1).to({rotation:-17.5,x:128.6,y:153.8},0).wait(1).to({rotation:-15.3,x:129.5,y:154.5},0).wait(1).to({rotation:-13.1,x:130.4,y:155.2},0).wait(1).to({rotation:-10.9,x:131.2,y:155.9},0).wait(1).to({rotation:-8.8,x:132,y:156.7},0).wait(1).to({rotation:-6.6,x:132.8,y:157.5},0).wait(1).to({rotation:-4.4,x:133.6,y:158.3},0).wait(1).to({rotation:-2.2,x:134.3,y:159.1},0).wait(1).to({rotation:0,x:135,y:160},0).wait(1));

	// eye
	this.instance_2 = new lib.eye_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88,129.5,1,1,0,0,0,34,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({rotation:0.4,x:88.3},0).wait(1).to({rotation:0.7,x:88.6},0).wait(1).to({rotation:1.1,x:88.8},0).wait(1).to({rotation:1.4,x:89.1},0).wait(1).to({rotation:1.8,x:89.4},0).wait(1).to({rotation:2.1,x:89.6},0).wait(1).to({rotation:2.5,x:89.9},0).wait(1).to({rotation:2.8,x:90.2},0).wait(1).to({rotation:3.2,x:90.4},0).wait(1).to({rotation:3.6,x:90.7},0).wait(1).to({rotation:3.9,x:90.9},0).wait(1).to({rotation:4.3,x:91.2},0).wait(1).to({rotation:4.6,x:91.5},0).wait(1).to({rotation:5,x:91.8},0).wait(1).to({rotation:5.3,x:92},0).wait(1).to({rotation:5.7,x:92.3},0).wait(1).to({rotation:5.3,x:92},0).wait(1).to({rotation:4.9,x:91.7},0).wait(1).to({rotation:4.5,x:91.4},0).wait(1).to({rotation:4.1,x:91.1},0).wait(1).to({rotation:3.7,x:90.8},0).wait(1).to({rotation:3.3,x:90.5},0).wait(1).to({rotation:2.8,x:90.2},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2,x:89.5},0).wait(1).to({rotation:1.6,x:89.3},0).wait(1).to({rotation:1.2,x:88.9},0).wait(1).to({rotation:0.8,x:88.6},0).wait(1).to({rotation:0.4,x:88.3},0).wait(1).to({rotation:0,x:88},0).wait(27).to({rotation:0.4,x:88.3},0).wait(1).to({rotation:0.7,x:88.6},0).wait(1).to({rotation:1.1,x:88.8},0).wait(1).to({rotation:1.4,x:89.1},0).wait(1).to({rotation:1.8,x:89.4},0).wait(1).to({rotation:2.1,x:89.6},0).wait(1).to({rotation:2.5,x:89.9},0).wait(1).to({rotation:2.8,x:90.2},0).wait(1).to({rotation:3.2,x:90.4},0).wait(1).to({rotation:3.6,x:90.7},0).wait(1).to({rotation:3.9,x:90.9},0).wait(1).to({rotation:4.3,x:91.2},0).wait(1).to({rotation:4.6,x:91.5},0).wait(1).to({rotation:5,x:91.8},0).wait(1).to({rotation:5.3,x:92},0).wait(1).to({rotation:5.7,x:92.3},0).wait(1).to({rotation:5.3,x:92},0).wait(1).to({rotation:4.9,x:91.7},0).wait(1).to({rotation:4.5,x:91.4},0).wait(1).to({rotation:4.1,x:91.1},0).wait(1).to({rotation:3.7,x:90.8},0).wait(1).to({rotation:3.3,x:90.5},0).wait(1).to({rotation:2.8,x:90.2},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2,x:89.5},0).wait(1).to({rotation:1.6,x:89.3},0).wait(1).to({rotation:1.2,x:88.9},0).wait(1).to({rotation:0.8,x:88.6},0).wait(1).to({rotation:0.4,x:88.3},0).wait(1).to({rotation:0,x:88},0).wait(27).to({rotation:0.2,x:88.2},0).wait(1).to({rotation:0.5,x:88.3},0).wait(1).to({rotation:0.7,x:88.6},0).wait(1).to({rotation:0.9,x:88.7},0).wait(1).to({rotation:1.2,x:88.9},0).wait(1).to({rotation:1.4,x:89.1},0).wait(1).to({rotation:1.7,x:89.2},0).wait(1).to({rotation:1.9,x:89.5},0).wait(1).to({rotation:2.1,x:89.6},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2.6,x:89.9},0).wait(1).to({rotation:2.8,x:90.2},0).wait(1).to({rotation:3.1,x:90.3},0).wait(1).to({rotation:3.3,x:90.5},0).wait(1).to({rotation:3.6,x:90.7},0).wait(1).to({rotation:3.8,x:90.9},0).wait(1).to({rotation:4,x:91},0).wait(1).to({rotation:4.3,x:91.2},0).wait(1).to({rotation:4.5,x:91.4},0).wait(1).to({rotation:4.7,x:91.6},0).wait(1).to({rotation:5,x:91.8},0).wait(1).to({rotation:5.2,x:91.9},0).wait(1).to({rotation:5.5,x:92.1},0).wait(1).to({rotation:5.7,x:92.3},0).wait(1).to({rotation:5.4,x:92.1},0).wait(1).to({rotation:5.1,x:91.9},0).wait(1).to({rotation:4.9,x:91.7},0).wait(1).to({rotation:4.6,x:91.5},0).wait(1).to({rotation:4.3,x:91.3},0).wait(1).to({rotation:4.1,x:91.1},0).wait(1).to({rotation:3.8,x:90.9},0).wait(1).to({rotation:3.5,x:90.7},0).wait(1).to({rotation:3.3,x:90.5},0).wait(1).to({rotation:3,x:90.2},0).wait(1).to({rotation:2.7,x:90},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2.2,x:89.7},0).wait(1).to({rotation:1.9,x:89.5},0).wait(1).to({rotation:1.6,x:89.3},0).wait(1).to({rotation:1.4,x:89.1},0).wait(1).to({rotation:1.1,x:88.8},0).wait(1).to({rotation:0.8,x:88.6},0).wait(1).to({rotation:0.5,x:88.4},0).wait(1).to({rotation:0.3,x:88.2},0).wait(1).to({rotation:0,x:88},0).wait(1));

	// mouse
	this.instance_3 = new lib.mouse_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.5,143,1,1,0,0,0,4.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({rotation:0.4,x:88.7},0).wait(1).to({rotation:0.7,x:88.9},0).wait(1).to({rotation:1.1,x:89.1},0).wait(1).to({rotation:1.4,x:89.3},0).wait(1).to({rotation:1.8,x:89.4},0).wait(1).to({rotation:2.1,x:89.7},0).wait(1).to({rotation:2.5,x:89.8},0).wait(1).to({rotation:2.8,x:90},0).wait(1).to({rotation:3.2,x:90.2},0).wait(1).to({rotation:3.6,x:90.4},0).wait(1).to({rotation:3.9,x:90.6},0).wait(1).to({rotation:4.3,x:90.8},0).wait(1).to({rotation:4.6,x:90.9},0).wait(1).to({rotation:5,x:91.2},0).wait(1).to({rotation:5.3,x:91.3},0).wait(1).to({rotation:5.7,x:91.5},0).wait(1).to({rotation:5.3,x:91.3},0).wait(1).to({rotation:4.9,x:91.1},0).wait(1).to({rotation:4.5,x:90.9},0).wait(1).to({rotation:4.1,x:90.6},0).wait(1).to({rotation:3.7,x:90.4},0).wait(1).to({rotation:3.3,x:90.2},0).wait(1).to({rotation:2.8,x:90},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2,x:89.6},0).wait(1).to({rotation:1.6,x:89.4},0).wait(1).to({rotation:1.2,x:89.1},0).wait(1).to({rotation:0.8,x:88.9},0).wait(1).to({rotation:0.4,x:88.7},0).wait(1).to({rotation:0,x:88.5},0).wait(27).to({rotation:0.4,x:88.7},0).wait(1).to({rotation:0.7,x:88.9},0).wait(1).to({rotation:1.1,x:89.1},0).wait(1).to({rotation:1.4,x:89.3},0).wait(1).to({rotation:1.8,x:89.4},0).wait(1).to({rotation:2.1,x:89.7},0).wait(1).to({rotation:2.5,x:89.8},0).wait(1).to({rotation:2.8,x:90},0).wait(1).to({rotation:3.2,x:90.2},0).wait(1).to({rotation:3.6,x:90.4},0).wait(1).to({rotation:3.9,x:90.6},0).wait(1).to({rotation:4.3,x:90.8},0).wait(1).to({rotation:4.6,x:90.9},0).wait(1).to({rotation:5,x:91.2},0).wait(1).to({rotation:5.3,x:91.3},0).wait(1).to({rotation:5.7,x:91.5},0).wait(1).to({rotation:5.3,x:91.3},0).wait(1).to({rotation:4.9,x:91.1},0).wait(1).to({rotation:4.5,x:90.9},0).wait(1).to({rotation:4.1,x:90.6},0).wait(1).to({rotation:3.7,x:90.4},0).wait(1).to({rotation:3.3,x:90.2},0).wait(1).to({rotation:2.8,x:90},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2,x:89.6},0).wait(1).to({rotation:1.6,x:89.4},0).wait(1).to({rotation:1.2,x:89.1},0).wait(1).to({rotation:0.8,x:88.9},0).wait(1).to({rotation:0.4,x:88.7},0).wait(1).to({rotation:0,x:88.5},0).wait(27).to({rotation:0.2,x:88.6},0).wait(1).to({rotation:0.5,x:88.7},0).wait(1).to({rotation:0.7,x:88.9},0).wait(1).to({rotation:0.9,x:89},0).wait(1).to({rotation:1.2,x:89.2},0).wait(1).to({rotation:1.4,x:89.3},0).wait(1).to({rotation:1.7,x:89.4},0).wait(1).to({rotation:1.9,x:89.5},0).wait(1).to({rotation:2.1,x:89.7},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2.6,x:89.9},0).wait(1).to({rotation:2.8,x:90},0).wait(1).to({rotation:3.1,x:90.2},0).wait(1).to({rotation:3.3,x:90.3},0).wait(1).to({rotation:3.6,x:90.4},0).wait(1).to({rotation:3.8,x:90.5},0).wait(1).to({rotation:4,x:90.7},0).wait(1).to({rotation:4.3,x:90.8},0).wait(1).to({rotation:4.5,x:90.9},0).wait(1).to({rotation:4.7,x:91},0).wait(1).to({rotation:5,x:91.2},0).wait(1).to({rotation:5.2,x:91.3},0).wait(1).to({rotation:5.5,x:91.4},0).wait(1).to({rotation:5.7,x:91.5},0).wait(1).to({rotation:5.4,x:91.4},0).wait(1).to({rotation:5.1,x:91.2},0).wait(1).to({rotation:4.9,x:91.1},0).wait(1).to({rotation:4.6,x:90.9},0).wait(1).to({rotation:4.3,x:90.8},0).wait(1).to({rotation:4.1,x:90.6},0).wait(1).to({rotation:3.8,x:90.5},0).wait(1).to({rotation:3.5,x:90.4},0).wait(1).to({rotation:3.3,x:90.2},0).wait(1).to({rotation:3,x:90.1},0).wait(1).to({rotation:2.7,x:89.9},0).wait(1).to({rotation:2.4,x:89.8},0).wait(1).to({rotation:2.2,x:89.6},0).wait(1).to({rotation:1.9,x:89.5},0).wait(1).to({rotation:1.6,x:89.4},0).wait(1).to({rotation:1.4,x:89.2},0).wait(1).to({rotation:1.1,x:89.1},0).wait(1).to({rotation:0.8,x:88.9},0).wait(1).to({rotation:0.5,x:88.8},0).wait(1).to({rotation:0.3,x:88.6},0).wait(1).to({rotation:0,x:88.5},0).wait(1));

	// cheak
	this.instance_4 = new lib.cheak_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(88,144.5,1,1,0,0,0,50,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({rotation:0.4,x:88.2},0).wait(1).to({rotation:0.7,x:88.4},0).wait(1).to({rotation:1.1,x:88.5},0).wait(1).to({rotation:1.4,x:88.7},0).wait(1).to({rotation:1.8,x:88.9},0).wait(1).to({rotation:2.1,x:89.1},0).wait(1).to({rotation:2.5,x:89.2},0).wait(1).to({rotation:2.8,x:89.4},0).wait(1).to({rotation:3.2,x:89.6},0).wait(1).to({rotation:3.6,x:89.7},0).wait(1).to({rotation:3.9,x:89.9},0).wait(1).to({rotation:4.3,x:90.1},0).wait(1).to({rotation:4.6,x:90.3},0).wait(1).to({rotation:5,x:90.4},0).wait(1).to({rotation:5.3,x:90.7},0).wait(1).to({rotation:5.7,x:90.8},0).wait(1).to({rotation:5.3,x:90.6},0).wait(1).to({rotation:4.9,x:90.4},0).wait(1).to({rotation:4.5,x:90.2},0).wait(1).to({rotation:4.1,x:90},0).wait(1).to({rotation:3.7,x:89.8},0).wait(1).to({rotation:3.3,x:89.6},0).wait(1).to({rotation:2.8,x:89.4},0).wait(1).to({rotation:2.4,x:89.2},0).wait(1).to({rotation:2,x:89},0).wait(1).to({rotation:1.6,x:88.8},0).wait(1).to({rotation:1.2,x:88.6},0).wait(1).to({rotation:0.8,x:88.4},0).wait(1).to({rotation:0.4,x:88.2},0).wait(1).to({rotation:0,x:88},0).wait(27).to({rotation:0.4,x:88.2},0).wait(1).to({rotation:0.7,x:88.4},0).wait(1).to({rotation:1.1,x:88.5},0).wait(1).to({rotation:1.4,x:88.7},0).wait(1).to({rotation:1.8,x:88.9},0).wait(1).to({rotation:2.1,x:89.1},0).wait(1).to({rotation:2.5,x:89.2},0).wait(1).to({rotation:2.8,x:89.4},0).wait(1).to({rotation:3.2,x:89.6},0).wait(1).to({rotation:3.6,x:89.7},0).wait(1).to({rotation:3.9,x:89.9},0).wait(1).to({rotation:4.3,x:90.1},0).wait(1).to({rotation:4.6,x:90.3},0).wait(1).to({rotation:5,x:90.4},0).wait(1).to({rotation:5.3,x:90.7},0).wait(1).to({rotation:5.7,x:90.8},0).wait(1).to({rotation:5.3,x:90.6},0).wait(1).to({rotation:4.9,x:90.4},0).wait(1).to({rotation:4.5,x:90.2},0).wait(1).to({rotation:4.1,x:90},0).wait(1).to({rotation:3.7,x:89.8},0).wait(1).to({rotation:3.3,x:89.6},0).wait(1).to({rotation:2.8,x:89.4},0).wait(1).to({rotation:2.4,x:89.2},0).wait(1).to({rotation:2,x:89},0).wait(1).to({rotation:1.6,x:88.8},0).wait(1).to({rotation:1.2,x:88.6},0).wait(1).to({rotation:0.8,x:88.4},0).wait(1).to({rotation:0.4,x:88.2},0).wait(1).to({rotation:0,x:88},0).wait(27).to({rotation:0.2,x:88.1},0).wait(1).to({rotation:0.5,x:88.2},0).wait(1).to({rotation:0.7,x:88.4},0).wait(1).to({rotation:0.9,x:88.5},0).wait(1).to({rotation:1.2,x:88.6},0).wait(1).to({rotation:1.4,x:88.7},0).wait(1).to({rotation:1.7,x:88.8},0).wait(1).to({rotation:1.9,x:88.9},0).wait(1).to({rotation:2.1,x:89.1},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.6,x:89.3},0).wait(1).to({rotation:2.8,x:89.4},0).wait(1).to({rotation:3.1,x:89.5},0).wait(1).to({rotation:3.3,x:89.6},0).wait(1).to({rotation:3.6,x:89.7},0).wait(1).to({rotation:3.8,x:89.9},0).wait(1).to({rotation:4,x:90},0).wait(1).to({rotation:4.3,x:90.1},0).wait(1).to({rotation:4.5,x:90.2},0).wait(1).to({rotation:4.7,x:90.4},0).wait(1).to({rotation:5},0).wait(1).to({rotation:5.2,x:90.6},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:5.7,x:90.8},0).wait(1).to({rotation:5.4,x:90.7},0).wait(1).to({rotation:5.1,x:90.5},0).wait(1).to({rotation:4.9,x:90.4},0).wait(1).to({rotation:4.6,x:90.3},0).wait(1).to({rotation:4.3,x:90.1},0).wait(1).to({rotation:4.1,x:90},0).wait(1).to({rotation:3.8,x:89.9},0).wait(1).to({rotation:3.5,x:89.7},0).wait(1).to({rotation:3.3,x:89.6},0).wait(1).to({rotation:3,x:89.5},0).wait(1).to({rotation:2.7,x:89.4},0).wait(1).to({rotation:2.4,x:89.2},0).wait(1).to({rotation:2.2,x:89.1},0).wait(1).to({rotation:1.9,x:88.9},0).wait(1).to({rotation:1.6,x:88.8},0).wait(1).to({rotation:1.4,x:88.7},0).wait(1).to({rotation:1.1,x:88.5},0).wait(1).to({rotation:0.8,x:88.4},0).wait(1).to({rotation:0.5,x:88.3},0).wait(1).to({rotation:0.3,x:88.2},0).wait(1).to({rotation:0,x:88},0).wait(1));

	// face
	this.instance_5 = new lib.face_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88,86.5,1,1,0,0,0,88,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({rotation:0.4,x:88.5,y:86.6},0).wait(1).to({rotation:0.7,x:89.1},0).wait(1).to({rotation:1.1,x:89.6},0).wait(1).to({rotation:1.4,x:90.1,y:86.5},0).wait(1).to({rotation:1.8,x:90.6,y:86.6},0).wait(1).to({rotation:2.1,x:91.2},0).wait(1).to({rotation:2.5,x:91.7,y:86.5},0).wait(1).to({rotation:2.8,x:92.3},0).wait(1).to({rotation:3.2,x:92.8},0).wait(1).to({rotation:3.6,x:93.4,y:86.6},0).wait(1).to({rotation:3.9,x:93.9,y:86.5},0).wait(1).to({rotation:4.3,x:94.4},0).wait(1).to({rotation:4.6,x:95},0).wait(1).to({rotation:5,x:95.5},0).wait(1).to({rotation:5.3,x:96,y:86.6},0).wait(1).to({rotation:5.7,x:96.5,y:86.5},0).wait(1).to({rotation:5.3,x:96,y:86.6},0).wait(1).to({rotation:4.9,x:95.4},0).wait(1).to({rotation:4.5,x:94.7},0).wait(1).to({rotation:4.1,x:94.1},0).wait(1).to({rotation:3.7,x:93.5,y:86.5},0).wait(1).to({rotation:3.3,x:92.9},0).wait(1).to({rotation:2.8,x:92.3},0).wait(1).to({rotation:2.4,x:91.6},0).wait(1).to({rotation:2,x:91.1},0).wait(1).to({rotation:1.6,x:90.4},0).wait(1).to({rotation:1.2,x:89.8},0).wait(1).to({rotation:0.8,x:89.2,y:86.6},0).wait(1).to({rotation:0.4,x:88.6,y:86.5},0).wait(1).to({rotation:0,x:88},0).wait(27).to({rotation:0.4,x:88.5,y:86.6},0).wait(1).to({rotation:0.7,x:89.1},0).wait(1).to({rotation:1.1,x:89.6},0).wait(1).to({rotation:1.4,x:90.1,y:86.5},0).wait(1).to({rotation:1.8,x:90.6,y:86.6},0).wait(1).to({rotation:2.1,x:91.2},0).wait(1).to({rotation:2.5,x:91.7,y:86.5},0).wait(1).to({rotation:2.8,x:92.3},0).wait(1).to({rotation:3.2,x:92.8},0).wait(1).to({rotation:3.6,x:93.4,y:86.6},0).wait(1).to({rotation:3.9,x:93.9,y:86.5},0).wait(1).to({rotation:4.3,x:94.4},0).wait(1).to({rotation:4.6,x:95},0).wait(1).to({rotation:5,x:95.5},0).wait(1).to({rotation:5.3,x:96,y:86.6},0).wait(1).to({rotation:5.7,x:96.5,y:86.5},0).wait(1).to({rotation:5.3,x:96,y:86.6},0).wait(1).to({rotation:4.9,x:95.4},0).wait(1).to({rotation:4.5,x:94.7},0).wait(1).to({rotation:4.1,x:94.1},0).wait(1).to({rotation:3.7,x:93.5,y:86.5},0).wait(1).to({rotation:3.3,x:92.9},0).wait(1).to({rotation:2.8,x:92.3},0).wait(1).to({rotation:2.4,x:91.6},0).wait(1).to({rotation:2,x:91.1},0).wait(1).to({rotation:1.6,x:90.4},0).wait(1).to({rotation:1.2,x:89.8},0).wait(1).to({rotation:0.8,x:89.2,y:86.6},0).wait(1).to({rotation:0.4,x:88.6,y:86.5},0).wait(1).to({rotation:0,x:88},0).wait(27).to({rotation:0.2,x:88.4},0).wait(1).to({rotation:0.5,x:88.7,y:86.6},0).wait(1).to({rotation:0.7,x:89.1},0).wait(1).to({rotation:0.9,x:89.4},0).wait(1).to({rotation:1.2,x:89.8,y:86.5},0).wait(1).to({rotation:1.4,x:90.1},0).wait(1).to({rotation:1.7,x:90.5},0).wait(1).to({rotation:1.9,x:90.9},0).wait(1).to({rotation:2.1,x:91.2,y:86.6},0).wait(1).to({rotation:2.4,x:91.5,y:86.5},0).wait(1).to({rotation:2.6,x:91.9},0).wait(1).to({rotation:2.8,x:92.3},0).wait(1).to({rotation:3.1,x:92.6},0).wait(1).to({rotation:3.3,x:93},0).wait(1).to({rotation:3.6,x:93.4,y:86.6},0).wait(1).to({rotation:3.8,x:93.7,y:86.5},0).wait(1).to({rotation:4,x:94.1,y:86.6},0).wait(1).to({rotation:4.3,x:94.4,y:86.5},0).wait(1).to({rotation:4.5,x:94.8,y:86.6},0).wait(1).to({rotation:4.7,x:95.1,y:86.5},0).wait(1).to({rotation:5,x:95.5},0).wait(1).to({rotation:5.2,x:95.9,y:86.6},0).wait(1).to({rotation:5.5,x:96.2,y:86.5},0).wait(1).to({rotation:5.7,x:96.5},0).wait(1).to({rotation:5.4,x:96.2},0).wait(1).to({rotation:5.1,x:95.8,y:86.6},0).wait(1).to({rotation:4.9,x:95.4},0).wait(1).to({rotation:4.6,x:94.9,y:86.5},0).wait(1).to({rotation:4.3,x:94.5},0).wait(1).to({rotation:4.1,x:94.1,y:86.6},0).wait(1).to({rotation:3.8,x:93.7,y:86.5},0).wait(1).to({rotation:3.5,x:93.3,y:86.6},0).wait(1).to({rotation:3.3,x:92.9,y:86.5},0).wait(1).to({rotation:3,x:92.5},0).wait(1).to({rotation:2.7,x:92.1},0).wait(1).to({rotation:2.4,x:91.6},0).wait(1).to({rotation:2.2,x:91.3,y:86.6},0).wait(1).to({rotation:1.9,x:90.9,y:86.5},0).wait(1).to({rotation:1.6,x:90.4},0).wait(1).to({rotation:1.4,x:90},0).wait(1).to({rotation:1.1,x:89.6,y:86.6},0).wait(1).to({rotation:0.8,x:89.2},0).wait(1).to({rotation:0.5,x:88.8},0).wait(1).to({rotation:0.3,x:88.4,y:86.5},0).wait(1).to({rotation:0,x:88},0).wait(1));

	// body
	this.instance_6 = new lib.body_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(88,232.5,1,1,0,0,0,31,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,321);


(lib.茂み = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_14();
	this.instance.parent = this;
	this.instance.setTransform(665,63,1,1,0,0,0,665,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.茂み, new cjs.Rectangle(0,0,1330,126), null);


(lib.回転2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 回転2
	this.instance = new lib.回転2();
	this.instance.parent = this;
	this.instance.setTransform(39,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 回転2's Drop Shadow
	this.instance_1 = new lib.回転2sDropShadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(341.5,343,1,1,0,0,0,341.5,343);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.回転2_1, new cjs.Rectangle(0,0,683,686), null);


(lib.回転1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 回転1
	this.instance = new lib.回転1();
	this.instance.parent = this;
	this.instance.setTransform(40,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 回転1's Drop Shadow
	this.instance_1 = new lib.回転1sDropShadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252,251.5,1,1,0,0,0,252,251.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.回転1_1, new cjs.Rectangle(0,0,504,503), null);


(lib.sky_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_1 = new lib.ベクトルスマートオブジェクト_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(667,375,1,1,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky_2, new cjs.Rectangle(0,0,1334,750), null);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance = new lib.mouse_6();
	this.instance.parent = this;
	this.instance.setTransform(100.5,158.5,1,1,0,0,0,4.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eye
	this.instance_1 = new lib.eye_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101,150,1,1,0,0,0,48,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cheak
	this.instance_2 = new lib.cheak_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100,164,1,1,0,0,0,56,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// rightHand
	this.instance_3 = new lib.rightHand_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.5,193.5,1,1,0,0,0,42.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// leftHand
	this.instance_4 = new lib.leftHand_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.5,195,1,1,0,0,0,42.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// face
	this.instance_5 = new lib.face_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101,100.5,1,1,0,0,0,101,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.body_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101,244,1,1,0,0,0,47,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(0,0,202,344), null);


(lib.forward_tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_16();
	this.instance.parent = this;
	this.instance.setTransform(256,189,1,1,0,0,0,256,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ベクトルスマートオブジェクト_3
	this.instance_1 = new lib.ベクトルスマートオブジェクト_3_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(277.5,512,1,1,0,0,0,112.5,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ベクトルスマートオブジェクト_2
	this.instance_2 = new lib.ベクトルスマートオブジェクト_2_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1571,194,1,1,0,0,0,256,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ベクトルスマートオブジェクト_1
	this.instance_3 = new lib.ベクトルスマートオブジェクト_1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1572,514,1,1,0,0,0,112,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.forward_tree, new cjs.Rectangle(0,0,1827,817), null);


(lib.flowerコピー_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower
	this.instance_1 = new lib.flower_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// flower's Outer Glow
	this.instance_2 = new lib.flowersOuterGlow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(675.5,113.5,1,1,0,0,0,675.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.flowerコピー_1, new cjs.Rectangle(0,0,1351,227), null);


(lib.flower_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower
	this.instance = new lib.flowerコピー_1();
	this.instance.parent = this;
	this.instance.setTransform(675.5,113.5,1,1,0,0,0,675.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower_2, new cjs.Rectangle(0,0,1351,227), null);


(lib.ベクトルスマートオブジェクト_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_10 = new lib.ベクトルスマートオブジェクト_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// ベクトルスマートオブジェクト's Drop Shadow
	this.instance_11 = new lib.ベクトルスマートオブジェクトsDropShadow_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_24, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_24();
	this.instance.parent = this;
	this.instance.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(0,0,1372,138), null);


(lib.ベクトルスマートオブジェクト_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_12 = new lib.ベクトルスマートオブジェクト_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// ベクトルスマートオブジェクト's Drop Shadow
	this.instance_13 = new lib.ベクトルスマートオブジェクトsDropShadow_5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_25, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_25();
	this.instance.parent = this;
	this.instance.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg1コピー = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance = new lib.bg1_2();
	this.instance.parent = this;
	this.instance.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg1's Drop Shadow
	this.instance_1 = new lib.bg1sDropShadow_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686,27.5,1,1,0,0,0,686,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1コピー, new cjs.Rectangle(0,0,1372,55), null);


(lib.bg1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance_1 = new lib.bg1コピー();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686,27.5,1,1,0,0,0,686,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_4, new cjs.Rectangle(0,0,1372,55), null);


(lib.茂み_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_1 = new lib.ベクトルスマートオブジェクト_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(665,63,1,1,0,0,0,665,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.茂み_1, new cjs.Rectangle(0,0,1330,126), null);


(lib.sky_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_2 = new lib.ベクトルスマートオブジェクト_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(667,375,1,1,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky_3, new cjs.Rectangle(0,0,1334,750), null);


(lib.girl_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance_7 = new lib.rightHand_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(74.5,189,0.998,0.998,37.6,0,0,15.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:38.5,scaleX:1,scaleY:1,rotation:45.2,x:58.5,y:204.8},0).wait(1).to({rotation:52.7,x:56.6,y:202.7},0).wait(1).to({rotation:60.2,x:54.9,y:200.2},0).wait(1).to({rotation:67.6,x:53.6,y:197.6},0).wait(1).to({rotation:61.7,x:54.6,y:199.7},0).wait(1).to({rotation:55.7,x:55.9,y:201.7},0).wait(1).to({rotation:49.7,x:57.3,y:203.5},0).wait(1).to({rotation:43.7,x:58.9,y:205.3},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({regY:16,scaleX:1,scaleY:1,rotation:37.6,x:74.5,y:189},0).wait(1).to({regY:38.5,scaleX:1,scaleY:1,rotation:42.7,x:59.2,y:205.5},0).wait(1).to({rotation:47.7,x:57.8,y:204.1},0).wait(1).to({rotation:52.7,x:56.5,y:202.7},0).wait(1).to({rotation:57.7,x:55.4,y:201},0).wait(1).to({rotation:62.7,x:54.4,y:199.3},0).wait(1).to({rotation:67.7,x:53.6,y:197.6},0).wait(1).to({rotation:72.7,x:52.9,y:195.7},0).wait(1).to({rotation:77.6,x:52.4,y:193.8},0).wait(1).to({rotation:82.6,x:52.1,y:191.9},0).wait(1).to({rotation:78.1,x:52.4,y:193.6},0).wait(1).to({rotation:73.6,x:52.8,y:195.3},0).wait(1).to({rotation:69.2,x:53.4,y:197},0).wait(1).to({rotation:64.7,x:54.1,y:198.6},0).wait(1).to({rotation:60.2,x:54.9,y:200.2},0).wait(1).to({rotation:55.7,x:55.9,y:201.7},0).wait(1).to({rotation:51.2,x:56.9,y:203.1},0).wait(1).to({rotation:46.7,x:58.1,y:204.4},0).wait(1).to({rotation:42.2,x:59.4,y:205.6},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({rotation:42.2,x:59.4,y:205.6},0).wait(1).to({rotation:46.7,x:58.1,y:204.4},0).wait(1).to({rotation:51.2,x:56.9,y:203.1},0).wait(1).to({rotation:55.7,x:55.9,y:201.7},0).wait(1).to({rotation:60.2,x:54.9,y:200.2},0).wait(1).to({rotation:64.7,x:54.1,y:198.6},0).wait(1).to({rotation:69.2,x:53.4,y:197},0).wait(1).to({rotation:73.6,x:52.8,y:195.3},0).wait(1).to({rotation:78.1,x:52.4,y:193.6},0).wait(1).to({rotation:82.6,x:52.1,y:191.9},0).wait(1).to({rotation:79.8,x:52.3,y:193},0).wait(1).to({rotation:77,x:52.5,y:194},0).wait(1).to({rotation:74.2,x:52.7,y:195.1},0).wait(1).to({rotation:71.4,x:53.1,y:196.2},0).wait(1).to({rotation:68.6,x:53.5,y:197.2},0).wait(1).to({rotation:65.8,x:53.9,y:198.2},0).wait(1).to({rotation:63,x:54.4,y:199.2},0).wait(1).to({rotation:60.2,x:54.9,y:200.2},0).wait(1).to({rotation:57.4,x:55.4,y:201.1},0).wait(1).to({rotation:54.6,x:56.1,y:202},0).wait(1).to({rotation:51.8,x:56.8,y:203},0).wait(1).to({rotation:49,x:57.5,y:203.8},0).wait(1).to({rotation:46.2,x:58.2,y:204.6},0).wait(1).to({rotation:43.4,x:59,y:205.4},0).wait(1).to({rotation:40.5,x:59.8,y:206.1},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({regY:16,scaleX:1,scaleY:1,rotation:37.6,x:74.5,y:189},0).wait(1).to({regY:38.5,scaleX:1,scaleY:1,rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:3.5,x:73.1,y:211.5},0).wait(1).to({rotation:-0.3,x:74.6},0).wait(1).to({rotation:3.5,x:73.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:3.5,x:73.1,y:211.5},0).wait(1).to({rotation:-0.3,x:74.6},0).wait(1).to({rotation:3.5,x:73.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({regY:16,scaleX:1,scaleY:1,rotation:37.6,x:74.5,y:189},0).wait(1).to({regY:38.5,scaleX:1,scaleY:1,rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:3.5,x:73.1,y:211.5},0).wait(1).to({rotation:-0.3,x:74.6},0).wait(1).to({rotation:3.5,x:73.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({regY:16,scaleX:1,scaleY:1,rotation:37.6,x:74.5,y:189},0).wait(1).to({regY:38.5,scaleX:1,scaleY:1,rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:3.5,x:73.1,y:211.5},0).wait(1).to({rotation:-0.3,x:74.6},0).wait(1).to({rotation:3.5,x:73.1},0).wait(1).to({rotation:7.3,x:71.6,y:211.3},0).wait(1).to({rotation:11.1,x:70.2,y:211.1},0).wait(1).to({rotation:14.9,x:68.7,y:210.7},0).wait(1).to({rotation:18.7,x:67.3,y:210.3},0).wait(1).to({rotation:22.5,x:65.8,y:209.8},0).wait(1).to({rotation:26.3,x:64.5,y:209.1},0).wait(1).to({rotation:30.1,x:63.1,y:208.5},0).wait(1).to({rotation:33.9,x:61.9,y:207.7},0).wait(1).to({rotation:37.7,x:60.7,y:206.8},0).wait(1).to({regX:11.6,regY:12.9,scaleX:1,scaleY:1,rotation:37.6,x:69.5,y:189.1},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:0.67,rotation:23.4,x:66.2,y:206.3},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:9,x:72,y:198.1},0).wait(1).to({scaleY:0,rotation:-5.3,x:73.3,y:188.7},0).wait(1).to({scaleY:0.33,rotation:0,skewX:160.3,skewY:-19.7,x:70.3,y:179.8},0).wait(1).to({scaleY:0.67,skewX:146,skewY:-34,x:63.2,y:172.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:131.6,skewY:-48.4,x:53,y:169.2},0).wait(1).to({skewX:126.3,skewY:-53.7,x:51.1,y:170.8},0).wait(1).to({skewX:120.9,skewY:-59.1,x:49.6,y:172.6},0).wait(1).to({skewX:115.6,skewY:-64.4,x:48.1,y:174.5},0).wait(1).to({skewX:110.2,skewY:-69.8,x:46.8,y:176.6},0).wait(1).to({skewX:104.9,skewY:-75.1,x:45.7,y:178.8},0).wait(1).to({skewX:110.2,skewY:-69.8,x:46.8,y:176.6},0).wait(1).to({skewX:115.6,skewY:-64.4,x:48.1,y:174.5},0).wait(1).to({skewX:120.9,skewY:-59.1,x:49.6,y:172.6},0).wait(1).to({skewX:126.3,skewY:-53.7,x:51.1,y:170.8},0).wait(1).to({skewX:131.6,skewY:-48.4,x:53,y:169.2},0).wait(1).to({skewX:126.3,skewY:-53.7,x:51.1,y:170.8},0).wait(1).to({skewX:120.9,skewY:-59.1,x:49.6,y:172.6},0).wait(1).to({skewX:115.6,skewY:-64.4,x:48.1,y:174.5},0).wait(1).to({skewX:110.2,skewY:-69.8,x:46.8,y:176.6},0).wait(1).to({skewX:104.9,skewY:-75.1,x:45.7,y:178.8},0).wait(1).to({skewX:110.2,skewY:-69.8,x:46.8,y:176.6},0).wait(1).to({skewX:115.6,skewY:-64.4,x:48.1,y:174.5},0).wait(1).to({skewX:120.9,skewY:-59.1,x:49.6,y:172.6},0).wait(1).to({skewX:126.3,skewY:-53.7,x:51.1,y:170.8},0).wait(1).to({skewX:131.6,skewY:-48.4,x:53,y:169.2},0).wait(1).to({scaleX:1,scaleY:0.6,skewX:148.9,skewY:-31.1,x:64.9,y:173.3},0).wait(1).to({scaleY:0.2,skewX:166.1,skewY:-13.9,x:72,y:181.9},0).wait(1).to({scaleY:0.2,rotation:3.3,skewX:0,skewY:0,x:73,y:192.5},0).wait(1).to({scaleX:1,scaleY:0.6,rotation:20.5,x:67.7,y:202.3},0).wait(1).to({scaleY:1,rotation:37.7,x:56.9,y:208.5},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:71.9,x:46.4,y:197.5},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:37.7,x:56.9,y:208.5},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:71.9,x:46.4,y:197.5},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:37.7,x:56.9,y:208.5},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:71.9,x:46.4,y:197.5},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:37.7,x:56.9,y:208.5},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:71.9,x:46.4,y:197.5},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:37.7,x:56.9,y:208.5},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:71.9,x:46.4,y:197.5},0).wait(1).to({rotation:68.4,x:47.1,y:198.8},0).wait(1).to({rotation:65,x:47.9,y:200.2},0).wait(1).to({rotation:61.6,x:48.8,y:201.4},0).wait(1).to({rotation:58.2,x:49.7,y:202.7},0).wait(1).to({rotation:54.8,x:50.8,y:203.8},0).wait(1).to({rotation:51.4,x:51.8,y:204.8},0).wait(1).to({rotation:48,x:53.1,y:205.8},0).wait(1).to({rotation:44.6,x:54.3,y:206.8},0).wait(1).to({rotation:41.2,x:55.5,y:207.7},0).wait(1).to({rotation:37.7,x:56.9,y:208.5},0).wait(10).to({regX:11.5,regY:13.1,scaleX:1,scaleY:1,rotation:37.6,x:69.5,y:185.8},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:1,rotation:41.2,x:55.7,y:207.6},0).wait(1).to({rotation:44.6,x:54.5,y:206.8},0).wait(1).to({rotation:48,x:53.3,y:205.8},0).wait(1).to({rotation:51.4,x:52.1,y:204.8},0).wait(1).to({rotation:54.8,x:51,y:203.7},0).wait(1).to({rotation:58.2,x:49.9,y:202.6},0).wait(1).to({rotation:61.6,x:49,y:201.4},0).wait(1).to({rotation:65,x:48.1,y:200.2},0).wait(1).to({rotation:68.4,x:47.3,y:198.9},0).wait(1).to({rotation:71.9,x:46.6,y:197.6},0).wait(1).to({rotation:68.4,x:47.3,y:198.9},0).wait(1).to({rotation:65,x:48.1,y:200.2},0).wait(1).to({rotation:61.6,x:49,y:201.4},0).wait(1).to({rotation:58.2,x:49.9,y:202.6},0).wait(1).to({rotation:54.8,x:51,y:203.7},0).wait(1).to({rotation:51.4,x:52.1,y:204.8},0).wait(1).to({rotation:48,x:53.3,y:205.8},0).wait(1).to({rotation:44.6,x:54.5,y:206.8},0).wait(1).to({rotation:41.2,x:55.7,y:207.6},0).wait(1).to({rotation:37.7,x:57.1,y:208.4},0).wait(10).to({regX:11.5,regY:13.1,scaleX:1,scaleY:1,rotation:37.6,x:69.5,y:185.8},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:1,rotation:41.2,x:55.7,y:207.6},0).wait(1).to({rotation:44.6,x:54.5,y:206.8},0).wait(1).to({rotation:48,x:53.3,y:205.8},0).wait(1).to({rotation:51.4,x:52.1,y:204.8},0).wait(1).to({rotation:54.8,x:51,y:203.7},0).wait(1).to({rotation:58.2,x:49.9,y:202.6},0).wait(1).to({rotation:61.6,x:49,y:201.4},0).wait(1).to({rotation:65,x:48.1,y:200.2},0).wait(1).to({rotation:68.4,x:47.3,y:198.9},0).wait(1).to({rotation:71.9,x:46.6,y:197.6},0).wait(1).to({rotation:68.4,x:47.3,y:198.9},0).wait(1).to({rotation:65,x:48.1,y:200.2},0).wait(1).to({rotation:61.6,x:49,y:201.4},0).wait(1).to({rotation:58.2,x:49.9,y:202.6},0).wait(1).to({rotation:54.8,x:51,y:203.7},0).wait(1).to({rotation:51.4,x:52.1,y:204.8},0).wait(1).to({rotation:48,x:53.3,y:205.8},0).wait(1).to({rotation:44.6,x:54.5,y:206.8},0).wait(1).to({rotation:41.2,x:55.7,y:207.6},0).wait(1).to({rotation:37.7,x:57.1,y:208.4},0).wait(10).to({regX:11.5,regY:13.1,scaleX:1,scaleY:1,rotation:37.6,x:69.5,y:185.8},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:1,rotation:41.2,x:55.7,y:207.6},0).wait(1).to({rotation:44.6,x:54.5,y:206.8},0).wait(1).to({rotation:48,x:53.3,y:205.8},0).wait(1).to({rotation:51.4,x:52.1,y:204.8},0).wait(1).to({rotation:54.8,x:51,y:203.7},0).wait(1).to({rotation:58.2,x:49.9,y:202.6},0).wait(1).to({rotation:61.6,x:49,y:201.4},0).wait(1).to({rotation:65,x:48.1,y:200.2},0).wait(1).to({rotation:68.4,x:47.3,y:198.9},0).wait(1).to({rotation:71.9,x:46.6,y:197.6},0).wait(1).to({rotation:68.4,x:47.3,y:198.9},0).wait(1).to({rotation:65,x:48.1,y:200.2},0).wait(1).to({rotation:61.6,x:49,y:201.4},0).wait(1).to({rotation:58.2,x:49.9,y:202.6},0).wait(1).to({rotation:54.8,x:51,y:203.7},0).wait(1).to({rotation:51.4,x:52.1,y:204.8},0).wait(1).to({rotation:48,x:53.3,y:205.8},0).wait(1).to({rotation:44.6,x:54.5,y:206.8},0).wait(1).to({rotation:41.2,x:55.7,y:207.6},0).wait(1).to({rotation:37.7,x:57.1,y:208.4},0).wait(10).to({regX:11.3,regY:13.5,scaleX:1,scaleY:1,rotation:37.6,x:69.4,y:185.8},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:1,rotation:41.2,x:56.1,y:207.4},0).wait(1).to({rotation:44.6,x:54.9,y:206.6},0).wait(1).to({rotation:48,x:53.7,y:205.6},0).wait(1).to({rotation:51.4,x:52.5,y:204.6},0).wait(1).to({rotation:54.8,x:51.4,y:203.6},0).wait(1).to({rotation:58.2,x:50.3,y:202.5},0).wait(1).to({rotation:61.6,x:49.4,y:201.3},0).wait(1).to({rotation:65,x:48.5,y:200.1},0).wait(1).to({rotation:68.4,x:47.7,y:198.8},0).wait(1).to({rotation:71.9,x:47,y:197.6},0).wait(1).to({rotation:68.4,x:47.7,y:198.8},0).wait(1).to({rotation:65,x:48.5,y:200.1},0).wait(1).to({rotation:61.6,x:49.4,y:201.3},0).wait(1).to({rotation:58.2,x:50.3,y:202.5},0).wait(1).to({rotation:54.8,x:51.4,y:203.6},0).wait(1).to({rotation:51.4,x:52.5,y:204.6},0).wait(1).to({rotation:48,x:53.7,y:205.6},0).wait(1).to({rotation:44.6,x:54.9,y:206.6},0).wait(1).to({rotation:41.2,x:56.1,y:207.4},0).wait(1).to({rotation:37.7,x:57.4,y:208.1},0).wait(10).to({regX:11.1,regY:14.3,scaleX:1,scaleY:1,rotation:37.6,x:69.6,y:185.8},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:1,rotation:39.7,x:57.4,y:207.2},0).wait(1).to({rotation:41.7,x:56.7,y:206.8},0).wait(1).to({rotation:43.7,x:56,y:206.4},0).wait(1).to({rotation:45.7,x:55.2,y:205.9},0).wait(1).to({rotation:47.7,x:54.6,y:205.3},0).wait(1).to({rotation:49.7,x:53.9,y:204.8},0).wait(1).to({rotation:51.7,x:53.2,y:204.3},0).wait(1).to({rotation:53.7,x:52.6,y:203.7},0).wait(1).to({rotation:55.7,x:52,y:203.1},0).wait(1).to({rotation:57.7,x:51.4,y:202.5},0).wait(1).to({rotation:59.7,x:50.8,y:201.9},0).wait(1).to({rotation:61.7,x:50.3,y:201.2},0).wait(1).to({rotation:63.6,x:49.8,y:200.5},0).wait(1).to({rotation:65.6,x:49.3,y:199.8},0).wait(1).to({rotation:67.6,x:48.8,y:199.1},0).wait(1).to({rotation:64.3,x:49.6,y:200.3},0).wait(1).to({rotation:61,x:50.5,y:201.4},0).wait(1).to({rotation:57.7,x:51.4,y:202.5},0).wait(1).to({rotation:54.4,x:52.4,y:203.5},0).wait(1).to({rotation:51,x:53.4,y:204.5},0).wait(1).to({rotation:47.7,x:54.6,y:205.3},0).wait(1).to({rotation:44.4,x:55.7,y:206.2},0).wait(1).to({rotation:41.1,x:56.9,y:207},0).wait(1).to({rotation:37.8,x:58.1,y:207.7},0).wait(1).to({rotation:34.5,x:59.4,y:208.3},0).wait(1).to({rotation:31.5,x:60.6,y:208.8},0).wait(1).to({rotation:28.5,x:61.8,y:209.2},0).wait(1).to({rotation:25.6,x:63.1,y:209.6},0).wait(1).to({rotation:22.6,x:64.3,y:209.8},0).wait(1).to({rotation:19.6,x:65.5,y:210.1},0).wait(1).to({rotation:16.7,x:66.8,y:210.3},0).wait(1).to({rotation:13.7,x:68,y:210.4},0).wait(1).to({rotation:10.8,x:69.3},0).wait(1).to({rotation:7.8,x:70.6},0).wait(1).to({rotation:4.8,x:71.9,y:210.3},0).wait(1).to({rotation:9.8,x:69.7,y:210.4},0).wait(1).to({rotation:14.7,x:67.6},0).wait(1).to({rotation:19.7,x:65.5,y:210.1},0).wait(1).to({rotation:24.6,x:63.4,y:209.6},0).wait(1).to({rotation:29.5,x:61.4,y:209.1},0).wait(1).to({rotation:34.5,x:59.5,y:208.3},0).wait(1).to({rotation:39.4,x:57.5,y:207.3},0).wait(1).to({rotation:44.4,x:55.7,y:206.2},0).wait(1).to({rotation:49.3,x:54,y:204.9},0).wait(1).to({rotation:54.3,x:52.4,y:203.6},0).wait(1).to({rotation:52.5,x:53,y:204.1},0).wait(1).to({rotation:50.7,x:53.6,y:204.5},0).wait(1).to({rotation:49,x:54.1,y:205},0).wait(1).to({rotation:47.2,x:54.8,y:205.5},0).wait(1).to({rotation:45.5,x:55.3,y:205.9},0).wait(1).to({rotation:43.7,x:56,y:206.4},0).wait(1).to({rotation:41.9,x:56.6,y:206.8},0).wait(1).to({rotation:40.2,x:57.3,y:207.1},0).wait(1).to({rotation:38.4,x:57.9,y:207.5},0).wait(1).to({rotation:36.7,x:58.6,y:207.9},0).wait(1).to({rotation:38.7,x:57.8,y:207.5},0).wait(1).to({rotation:40.7,x:57.1,y:207},0).wait(1).to({rotation:42.7,x:56.3,y:206.6},0).wait(1).to({rotation:44.7,x:55.6,y:206.1},0).wait(1).to({rotation:46.7,x:54.9,y:205.6},0).wait(1).to({rotation:48.7,x:54.2,y:205.1},0).wait(1).to({rotation:50.8,x:53.6,y:204.5},0).wait(1).to({rotation:52.8,x:52.9,y:204},0).wait(1).to({rotation:54.8,x:52.3,y:203.4},0).wait(1).to({rotation:56.8,x:51.7,y:202.8},0).wait(1).to({rotation:58.8,x:51.1,y:202.1},0).wait(1).to({rotation:60.8,x:50.5,y:201.5},0).wait(1).to({rotation:62.8,x:50,y:200.8},0).wait(1).to({rotation:64.9,x:49.5,y:200.1},0).wait(1).to({rotation:66.9,x:49,y:199.4},0).wait(1).to({rotation:64.5,x:49.6,y:200.3},0).wait(1).to({rotation:62,x:50.2,y:201.1},0).wait(1).to({rotation:59.6,x:50.9,y:201.8},0).wait(1).to({rotation:57.2,x:51.6,y:202.7},0).wait(1).to({rotation:54.8,x:52.3,y:203.4},0).wait(1).to({rotation:52.4,x:53,y:204.1},0).wait(1).to({rotation:50,x:53.8,y:204.7},0).wait(1).to({rotation:47.6,x:54.6,y:205.4},0).wait(1).to({rotation:45.2,x:55.5,y:206},0).wait(1).to({rotation:42.2,x:56.5,y:206.7},0).wait(1).to({rotation:39.2,x:57.6,y:207.3},0).wait(1).to({rotation:36.3,x:58.8,y:207.9},0).wait(1).to({rotation:33.3,x:59.9,y:208.5},0).wait(1).to({rotation:30.3,x:61.1,y:208.9},0).wait(1).to({rotation:27.3,x:62.3,y:209.3},0).wait(1).to({rotation:24.4,x:63.5,y:209.7},0).wait(1).to({rotation:21.4,x:64.8,y:209.9},0).wait(1).to({rotation:18.4,x:66.1,y:210.2},0).wait(1).to({rotation:15.4,x:67.3,y:210.3},0).wait(1).to({rotation:12.5,x:68.6,y:210.4},0).wait(1).to({rotation:13.8,x:68},0).wait(1).to({rotation:15.1,x:67.4,y:210.3},0).wait(1).to({rotation:16.5,x:66.9,y:210.2},0).wait(1).to({rotation:17.8,x:66.3},0).wait(1).to({rotation:19.1,x:65.8},0).wait(1).to({rotation:20.5,x:65.2,y:210},0).wait(1).to({rotation:21.8,x:64.6,y:209.9},0).wait(1).to({rotation:23.1,x:64.1,y:209.8},0).wait(1).to({rotation:24.4,x:63.5,y:209.7},0).wait(1).to({rotation:25.8,x:62.9,y:209.5},0).wait(1).to({rotation:27.1,x:62.4,y:209.3},0).wait(1).to({rotation:28.4,x:61.9,y:209.2},0).wait(1).to({rotation:29.8,x:61.3,y:209},0).wait(1).to({rotation:31.1,x:60.7,y:208.8},0).wait(1).to({rotation:32.4,x:60.3,y:208.6},0).wait(1).to({rotation:33.8,x:59.7,y:208.4},0).wait(1).to({rotation:35.1,x:59.2,y:208.1},0).wait(1).to({rotation:36.4,x:58.7,y:207.9},0).wait(1).to({rotation:37.7,x:58.2,y:207.7},0).wait(1).to({regX:11.1,regY:14.4,scaleX:1,scaleY:1,rotation:37.6,x:69.5,y:185.8},0).wait(1).to({regX:15.5,regY:38.5,scaleX:1,scaleY:1,rotation:37.7,x:58.2,y:207.6},0).wait(29));

	// leftHand
	this.instance_8 = new lib.leftHand_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(123.5,184.9,0.999,0.999,-29.9,0,0,14.5,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:39,scaleX:1,scaleY:1,rotation:-37.5,x:139.4,y:205.6},0).wait(1).to({rotation:-44.9,x:141.9,y:203.4},0).wait(1).to({rotation:-52.4,x:144.2,y:200.8},0).wait(1).to({rotation:-59.9,x:146.1,y:198},0).wait(1).to({rotation:-53.9,x:144.6,y:200.3},0).wait(1).to({rotation:-47.9,x:142.9,y:202.4},0).wait(1).to({rotation:-41.9,x:141,y:204.3},0).wait(1).to({rotation:-36,x:138.9,y:206},0).wait(1).to({rotation:-30,x:136.6,y:207.5},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:-29.9,x:123.5,y:185},0).wait(1).to({regY:39,scaleX:1,scaleY:1,rotation:-35,x:138.5,y:206.4},0).wait(1).to({rotation:-40,x:140.3,y:205},0).wait(1).to({rotation:-45,x:141.9,y:203.4},0).wait(1).to({rotation:-49.9,x:143.5,y:201.8},0).wait(1).to({rotation:-54.9,x:144.9,y:200},0).wait(1).to({rotation:-59.9,x:146.1,y:198},0).wait(1).to({rotation:-64.9,x:147.1,y:196},0).wait(1).to({rotation:-69.9,x:148,y:193.9},0).wait(1).to({rotation:-74.9,x:148.7,y:191.8},0).wait(1).to({rotation:-70.4,x:148.1,y:193.7},0).wait(1).to({rotation:-65.9,x:147.4,y:195.6},0).wait(1).to({rotation:-61.4,x:146.5,y:197.5},0).wait(1).to({rotation:-56.9,x:145.3,y:199.2},0).wait(1).to({rotation:-52.4,x:144.2,y:200.9},0).wait(1).to({rotation:-47.9,x:142.9,y:202.5},0).wait(1).to({rotation:-43.4,x:141.5,y:204},0).wait(1).to({rotation:-38.9,x:139.9,y:205.3},0).wait(1).to({rotation:-34.4,x:138.3,y:206.5},0).wait(1).to({rotation:-30,x:136.5,y:207.6},0).wait(1).to({rotation:-34.4,x:138.3,y:206.5},0).wait(1).to({rotation:-38.9,x:139.9,y:205.3},0).wait(1).to({rotation:-43.4,x:141.5,y:204},0).wait(1).to({rotation:-47.9,x:142.9,y:202.5},0).wait(1).to({rotation:-52.4,x:144.2,y:200.9},0).wait(1).to({rotation:-56.9,x:145.3,y:199.2},0).wait(1).to({rotation:-61.4,x:146.5,y:197.5},0).wait(1).to({rotation:-65.9,x:147.4,y:195.6},0).wait(1).to({rotation:-70.4,x:148.1,y:193.7},0).wait(1).to({rotation:-74.9,x:148.7,y:191.8},0).wait(1).to({rotation:-72.1,x:148.3,y:193},0).wait(1).to({rotation:-69.2,x:147.9,y:194.2},0).wait(1).to({rotation:-66.4,x:147.5,y:195.4},0).wait(1).to({rotation:-63.6,x:146.9,y:196.5},0).wait(1).to({rotation:-60.8,x:146.3,y:197.7},0).wait(1).to({rotation:-58,x:145.7,y:198.8},0).wait(1).to({rotation:-55.2,x:145,y:199.9},0).wait(1).to({rotation:-52.4,x:144.2,y:200.9},0).wait(1).to({rotation:-49.6,x:143.4,y:201.9},0).wait(1).to({rotation:-46.8,x:142.5,y:202.9},0).wait(1).to({rotation:-44,x:141.7,y:203.7},0).wait(1).to({rotation:-41.2,x:140.7,y:204.6},0).wait(1).to({rotation:-38.4,x:139.7,y:205.4},0).wait(1).to({rotation:-35.6,x:138.7,y:206.2},0).wait(1).to({rotation:-32.8,x:137.7,y:206.9},0).wait(1).to({rotation:-30,x:136.6,y:207.6},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:-29.9,x:123.5,y:184.9},0).wait(1).to({regY:39,scaleX:1,scaleY:1,rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:0.1,x:123.5,y:211.1},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-30,x:136.6,y:207.5},0).wait(1).to({rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:0.1,x:123.5,y:211.1},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-30,x:136.6,y:207.5},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:-29.9,x:123.5,y:184.9},0).wait(1).to({regY:39,scaleX:1,scaleY:1,rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:0.1,x:123.5,y:211.1},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-30,x:136.6,y:207.5},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:-29.9,x:123.5,y:184.9},0).wait(1).to({regY:39,scaleX:1,scaleY:1,rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:0.1,x:123.5,y:211.1},0).wait(1).to({rotation:-2.9,x:124.8,y:211},0).wait(1).to({rotation:-5.9,x:126.2,y:210.9},0).wait(1).to({rotation:-8.9,x:127.6,y:210.7},0).wait(1).to({rotation:-11.9,x:128.9,y:210.4},0).wait(1).to({rotation:-14.9,x:130.2,y:210.1},0).wait(1).to({rotation:-17.9,x:131.6,y:209.8},0).wait(1).to({rotation:-21,x:132.9,y:209.3},0).wait(1).to({rotation:-24,x:134.1,y:208.8},0).wait(1).to({rotation:-27,x:135.3,y:208.1},0).wait(1).to({rotation:-30,x:136.6,y:207.5},0).wait(1).to({regX:15.9,regY:14.8,scaleX:1,scaleY:1,rotation:-29.9,x:125.4,y:186},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:0.67,rotation:-17.5,x:129,y:201.8},0).wait(1).to({scaleY:0.33,rotation:-5,x:124.7,y:194.1},0).wait(1).to({scaleX:1,scaleY:0,rotation:7.6,x:124.1,y:185.9},0).wait(1).to({scaleY:0.33,rotation:0,skewX:-159.9,skewY:20.1,x:126.9,y:178},0).wait(1).to({scaleY:0.67,skewX:-147.4,skewY:32.6,x:132.9,y:171.7},0).wait(1).to({scaleY:1,skewX:-134.9,skewY:45.1,x:141.5,y:168},0).wait(1).to({skewX:-128.9,skewY:51.1,x:143.3,y:169.7},0).wait(1).to({skewX:-122.9,skewY:57.1,x:144.9,y:171.7},0).wait(1).to({skewX:-116.9,skewY:63.1,x:146.3,y:173.8},0).wait(1).to({skewX:-110.9,skewY:69.1,x:147.5,y:176.2},0).wait(1).to({skewX:-104.9,skewY:75.1,x:148.4,y:178.5},0).wait(1).to({skewX:-110.9,skewY:69.1,x:147.5,y:176.2},0).wait(1).to({skewX:-116.9,skewY:63.1,x:146.3,y:173.8},0).wait(1).to({skewX:-122.9,skewY:57.1,x:144.9,y:171.7},0).wait(1).to({skewX:-128.9,skewY:51.1,x:143.3,y:169.7},0).wait(1).to({skewX:-134.9,skewY:45.1,x:141.5,y:168},0).wait(1).to({skewX:-128.9,skewY:51.1,x:143.3,y:169.7},0).wait(1).to({skewX:-122.9,skewY:57.1,x:144.9,y:171.7},0).wait(1).to({skewX:-116.9,skewY:63.1,x:146.3,y:173.8},0).wait(1).to({skewX:-110.9,skewY:69.1,x:147.5,y:176.2},0).wait(1).to({skewX:-104.9,skewY:75.1,x:148.4,y:178.5},0).wait(1).to({skewX:-110.9,skewY:69.1,x:147.5,y:176.2},0).wait(1).to({skewX:-116.9,skewY:63.1,x:146.3,y:173.8},0).wait(1).to({skewX:-122.9,skewY:57.1,x:144.9,y:171.7},0).wait(1).to({skewX:-128.9,skewY:51.1,x:143.3,y:169.7},0).wait(1).to({skewX:-134.9,skewY:45.1,x:141.5,y:168},0).wait(1).to({scaleY:0.6,skewX:-149.9,skewY:30.1,x:131.5,y:172.8},0).wait(1).to({scaleY:0.2,skewX:-164.9,skewY:15.1,x:125.3,y:181},0).wait(1).to({scaleY:0.2,rotation:0.1,skewX:0,skewY:0,x:124.1,y:190.8},0).wait(1).to({scaleX:1,scaleY:0.6,rotation:-15,x:127.8,y:200.4},0).wait(1).to({scaleY:1,rotation:-30,x:136.3,y:207.6},0).wait(1).to({rotation:-33.6,x:137.7,y:206.9},0).wait(1).to({rotation:-37.2,x:139,y:206.1},0).wait(1).to({rotation:-40.8,x:140.2,y:205.2},0).wait(1).to({rotation:-44.4,x:141.4,y:204.2},0).wait(1).to({rotation:-48,x:142.5,y:203.2},0).wait(1).to({rotation:-51.7,x:143.5,y:202.1},0).wait(1).to({rotation:-55.3,x:144.5,y:200.9},0).wait(1).to({rotation:-58.9,x:145.4,y:199.7},0).wait(1).to({rotation:-62.5,x:146.2,y:198.4},0).wait(1).to({rotation:-66.1,x:147,y:197.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-36.2,x:138.6,y:206.4},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-66.1,x:147,y:197.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-36.2,x:138.6,y:206.4},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-66.1,x:147,y:197.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-36.2,x:138.6,y:206.4},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-66.1,x:147,y:197.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-36.2,x:138.6,y:206.4},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-66.1,x:147,y:197.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198.2},0).wait(1).to({rotation:-60.1,x:145.7,y:199.3},0).wait(1).to({rotation:-57.1,x:144.9,y:200.3},0).wait(1).to({rotation:-54.1,x:144.2,y:201.3},0).wait(1).to({rotation:-51.1,x:143.4,y:202.2},0).wait(1).to({rotation:-48.1,x:142.5,y:203.1},0).wait(1).to({rotation:-45.1,x:141.6,y:204},0).wait(1).to({rotation:-42.2,x:140.6,y:204.8},0).wait(1).to({rotation:-39.2,x:139.6,y:205.6},0).wait(1).to({rotation:-36.2,x:138.6,y:206.4},0).wait(1).to({rotation:-35.5,x:138.3,y:206.5},0).wait(1).to({rotation:-34.8,x:138.1,y:206.6},0).wait(1).to({rotation:-34.1,x:137.9,y:206.8},0).wait(1).to({rotation:-33.4,x:137.6,y:206.9},0).wait(1).to({rotation:-32.7,x:137.3,y:207.1},0).wait(1).to({rotation:-32.1,x:137.1,y:207.2},0).wait(1).to({rotation:-31.4,x:136.8,y:207.4},0).wait(1).to({rotation:-30.7,x:136.6,y:207.5},0).wait(1).to({rotation:-30,x:136.3,y:207.6},0).wait(1).to({regX:15.7,regY:14.8,scaleX:1,scaleY:1,rotation:-36.1,x:125.4,y:186},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:1,rotation:-39.2,x:139.8,y:205.5},0).wait(1).to({rotation:-42.2,x:140.8,y:204.7},0).wait(1).to({rotation:-45.1,x:141.7,y:203.9},0).wait(1).to({rotation:-48.1,x:142.6,y:203},0).wait(1).to({rotation:-51.1,x:143.4,y:202.1},0).wait(1).to({rotation:-54.1,x:144.3,y:201.1},0).wait(1).to({rotation:-57.1,x:145,y:200.1},0).wait(1).to({rotation:-60.1,x:145.8,y:199.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198},0).wait(1).to({rotation:-66.1,x:147,y:196.9},0).wait(1).to({rotation:-63.1,x:146.4,y:198},0).wait(1).to({rotation:-60.1,x:145.8,y:199.1},0).wait(1).to({rotation:-57.1,x:145,y:200.1},0).wait(1).to({rotation:-54.1,x:144.3,y:201.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.1},0).wait(1).to({rotation:-48.1,x:142.6,y:203},0).wait(1).to({rotation:-45.1,x:141.7,y:203.9},0).wait(1).to({rotation:-42.2,x:140.8,y:204.7},0).wait(1).to({rotation:-39.2,x:139.8,y:205.5},0).wait(1).to({rotation:-36.2,x:138.7,y:206.3},0).wait(1).to({rotation:-35.5,x:138.4,y:206.4},0).wait(1).to({rotation:-34.8,x:138.2,y:206.5},0).wait(1).to({rotation:-34.1,x:138,y:206.7},0).wait(1).to({rotation:-33.4,x:137.7,y:206.8},0).wait(1).to({rotation:-32.7,x:137.5,y:207},0).wait(1).to({rotation:-32.1,x:137.2,y:207.1},0).wait(1).to({rotation:-31.4,x:137,y:207.3},0).wait(1).to({rotation:-30.7,x:136.7,y:207.4},0).wait(1).to({rotation:-30,x:136.4,y:207.6},0).wait(1).to({regX:15.7,regY:14.8,scaleX:1,scaleY:1,rotation:-36.1,x:125.4,y:186},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:1,rotation:-39.2,x:139.8,y:205.5},0).wait(1).to({rotation:-42.2,x:140.8,y:204.7},0).wait(1).to({rotation:-45.1,x:141.7,y:203.9},0).wait(1).to({rotation:-48.1,x:142.6,y:203},0).wait(1).to({rotation:-51.1,x:143.4,y:202.1},0).wait(1).to({rotation:-54.1,x:144.3,y:201.1},0).wait(1).to({rotation:-57.1,x:145,y:200.1},0).wait(1).to({rotation:-60.1,x:145.8,y:199.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198},0).wait(1).to({rotation:-66.1,x:147,y:196.9},0).wait(1).to({rotation:-63.1,x:146.4,y:198},0).wait(1).to({rotation:-60.1,x:145.8,y:199.1},0).wait(1).to({rotation:-57.1,x:145,y:200.1},0).wait(1).to({rotation:-54.1,x:144.3,y:201.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.1},0).wait(1).to({rotation:-48.1,x:142.6,y:203},0).wait(1).to({rotation:-45.1,x:141.7,y:203.9},0).wait(1).to({rotation:-42.2,x:140.8,y:204.7},0).wait(1).to({rotation:-39.2,x:139.8,y:205.5},0).wait(1).to({rotation:-36.2,x:138.7,y:206.3},0).wait(1).to({rotation:-35.5,x:138.4,y:206.4},0).wait(1).to({rotation:-34.8,x:138.2,y:206.5},0).wait(1).to({rotation:-34.1,x:138,y:206.7},0).wait(1).to({rotation:-33.4,x:137.7,y:206.8},0).wait(1).to({rotation:-32.7,x:137.5,y:207},0).wait(1).to({rotation:-32.1,x:137.2,y:207.1},0).wait(1).to({rotation:-31.4,x:137,y:207.3},0).wait(1).to({rotation:-30.7,x:136.7,y:207.4},0).wait(1).to({rotation:-30,x:136.4,y:207.6},0).wait(1).to({regX:15.7,regY:14.8,scaleX:1,scaleY:1,rotation:-36.1,x:125.4,y:186},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:1,rotation:-39.2,x:139.8,y:205.5},0).wait(1).to({rotation:-42.2,x:140.8,y:204.7},0).wait(1).to({rotation:-45.1,x:141.7,y:203.9},0).wait(1).to({rotation:-48.1,x:142.6,y:203},0).wait(1).to({rotation:-51.1,x:143.4,y:202.1},0).wait(1).to({rotation:-54.1,x:144.3,y:201.1},0).wait(1).to({rotation:-57.1,x:145,y:200.1},0).wait(1).to({rotation:-60.1,x:145.8,y:199.1},0).wait(1).to({rotation:-63.1,x:146.4,y:198},0).wait(1).to({rotation:-66.1,x:147,y:196.9},0).wait(1).to({rotation:-63.1,x:146.4,y:198},0).wait(1).to({rotation:-60.1,x:145.8,y:199.1},0).wait(1).to({rotation:-57.1,x:145,y:200.1},0).wait(1).to({rotation:-54.1,x:144.3,y:201.1},0).wait(1).to({rotation:-51.1,x:143.4,y:202.1},0).wait(1).to({rotation:-48.1,x:142.6,y:203},0).wait(1).to({rotation:-45.1,x:141.7,y:203.9},0).wait(1).to({rotation:-42.2,x:140.8,y:204.7},0).wait(1).to({rotation:-39.2,x:139.8,y:205.5},0).wait(1).to({rotation:-36.2,x:138.7,y:206.3},0).wait(1).to({rotation:-35.5,x:138.4,y:206.4},0).wait(1).to({rotation:-34.8,x:138.2,y:206.5},0).wait(1).to({rotation:-34.1,x:138,y:206.7},0).wait(1).to({rotation:-33.4,x:137.7,y:206.8},0).wait(1).to({rotation:-32.7,x:137.5,y:207},0).wait(1).to({rotation:-32.1,x:137.2,y:207.1},0).wait(1).to({rotation:-31.4,x:137,y:207.3},0).wait(1).to({rotation:-30.7,x:136.7,y:207.4},0).wait(1).to({rotation:-30,x:136.4,y:207.6},0).wait(1).to({regX:15.3,regY:14.8,scaleX:1,scaleY:1,rotation:-36.1,x:125.4,y:186.1},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:1,rotation:-39.2,x:140.1,y:205.3},0).wait(1).to({rotation:-42.2,x:141.1,y:204.5},0).wait(1).to({rotation:-45.1,x:142,y:203.6},0).wait(1).to({rotation:-48.1,x:142.9,y:202.7},0).wait(1).to({rotation:-51.1,x:143.7,y:201.8},0).wait(1).to({rotation:-54.1,x:144.6,y:200.8},0).wait(1).to({rotation:-57.1,x:145.3,y:199.8},0).wait(1).to({rotation:-60.1,x:146,y:198.8},0).wait(1).to({rotation:-63.1,x:146.6,y:197.7},0).wait(1).to({rotation:-66.1,x:147.2,y:196.6},0).wait(1).to({rotation:-63.1,x:146.6,y:197.7},0).wait(1).to({rotation:-60.1,x:146,y:198.8},0).wait(1).to({rotation:-57.1,x:145.3,y:199.8},0).wait(1).to({rotation:-54.1,x:144.6,y:200.8},0).wait(1).to({rotation:-51.1,x:143.7,y:201.8},0).wait(1).to({rotation:-48.1,x:142.9,y:202.7},0).wait(1).to({rotation:-45.1,x:142,y:203.6},0).wait(1).to({rotation:-42.2,x:141.1,y:204.5},0).wait(1).to({rotation:-39.2,x:140.1,y:205.3},0).wait(1).to({rotation:-36.2,x:139,y:206.1},0).wait(1).to({rotation:-35.5,x:138.8,y:206.2},0).wait(1).to({rotation:-34.8,x:138.5,y:206.3},0).wait(1).to({rotation:-34.1,x:138.3,y:206.5},0).wait(1).to({rotation:-33.4,x:138.1,y:206.7},0).wait(1).to({rotation:-32.7,x:137.8,y:206.8},0).wait(1).to({rotation:-32.1,x:137.6,y:207},0).wait(1).to({rotation:-31.4,x:137.3,y:207.1},0).wait(1).to({rotation:-30.7,x:137,y:207.3},0).wait(1).to({rotation:-30,x:136.8,y:207.4},0).wait(1).to({regX:15.4,regY:14.8,scaleX:1,scaleY:1,rotation:-29.9,x:125.5,y:186},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:1,rotation:-32,x:137.5,y:207},0).wait(1).to({rotation:-34,x:138.2,y:206.5},0).wait(1).to({rotation:-36,x:138.9,y:206.1},0).wait(1).to({rotation:-38,x:139.6,y:205.6},0).wait(1).to({rotation:-40,x:140.3,y:205.1},0).wait(1).to({rotation:-41.9,x:140.9,y:204.6},0).wait(1).to({rotation:-43.9,x:141.6,y:204},0).wait(1).to({rotation:-45.9,x:142.2,y:203.5},0).wait(1).to({rotation:-47.9,x:142.8,y:202.9},0).wait(1).to({rotation:-49.9,x:143.4,y:202.2},0).wait(1).to({rotation:-51.9,x:143.9,y:201.6},0).wait(1).to({rotation:-53.9,x:144.4,y:201},0).wait(1).to({rotation:-55.9,x:145,y:200.3},0).wait(1).to({rotation:-57.9,x:145.5,y:199.6},0).wait(1).to({rotation:-59.9,x:145.9,y:198.9},0).wait(1).to({rotation:-56.5,x:145.1,y:200.1},0).wait(1).to({rotation:-53.2,x:144.3,y:201.2},0).wait(1).to({rotation:-49.9,x:143.4,y:202.2},0).wait(1).to({rotation:-46.6,x:142.4,y:203.2},0).wait(1).to({rotation:-43.3,x:141.4,y:204.2},0).wait(1).to({rotation:-39.9,x:140.3,y:205.1},0).wait(1).to({rotation:-36.6,x:139.2,y:205.9},0).wait(1).to({rotation:-33.3,x:137.9,y:206.7},0).wait(1).to({rotation:-30,x:136.8,y:207.4},0).wait(1).to({rotation:-26.7,x:135.5,y:208},0).wait(1).to({rotation:-23.7,x:134.4,y:208.5},0).wait(1).to({rotation:-20.8,x:133.2,y:208.9},0).wait(1).to({rotation:-17.8,x:132,y:209.3},0).wait(1).to({rotation:-14.8,x:130.8,y:209.6},0).wait(1).to({rotation:-11.9,x:129.5,y:209.8},0).wait(1).to({rotation:-8.9,x:128.4,y:210},0).wait(1).to({rotation:-5.9,x:127.1,y:210.1},0).wait(1).to({rotation:-3,x:125.9,y:210.2},0).wait(1).to({rotation:0,x:124.6},0).wait(1).to({rotation:2.9,x:123.4,y:210.1},0).wait(1).to({rotation:-2,x:125.4,y:210.2},0).wait(1).to({rotation:-6.9,x:127.5,y:210.1},0).wait(1).to({rotation:-11.9,x:129.6,y:209.8},0).wait(1).to({rotation:-16.8,x:131.6,y:209.4},0).wait(1).to({rotation:-21.8,x:133.6,y:208.7},0).wait(1).to({rotation:-26.7,x:135.5,y:208},0).wait(1).to({rotation:-31.7,x:137.4,y:207.1},0).wait(1).to({rotation:-36.6,x:139.2,y:205.9},0).wait(1).to({rotation:-41.6,x:140.8,y:204.7},0).wait(1).to({rotation:-46.5,x:142.4,y:203.3},0).wait(1).to({rotation:-44.7,x:141.8,y:203.8},0).wait(1).to({rotation:-43,x:141.3,y:204.3},0).wait(1).to({rotation:-41.2,x:140.7,y:204.8},0).wait(1).to({rotation:-39.5,x:140.1,y:205.2},0).wait(1).to({rotation:-37.7,x:139.5,y:205.7},0).wait(1).to({rotation:-35.9,x:138.9,y:206.1},0).wait(1).to({rotation:-34.2,x:138.3,y:206.5},0).wait(1).to({rotation:-32.4,x:137.7,y:206.9},0).wait(1).to({rotation:-30.6,x:137,y:207.2},0).wait(1).to({rotation:-28.9,x:136.4,y:207.6},0).wait(1).to({rotation:-30.9,x:137.1,y:207.2},0).wait(1).to({rotation:-32.9,x:137.8,y:206.8},0).wait(1).to({rotation:-34.9,x:138.6,y:206.3},0).wait(1).to({rotation:-36.9,x:139.3,y:205.8},0).wait(1).to({rotation:-39,x:140,y:205.4},0).wait(1).to({rotation:-41,x:140.6,y:204.8},0).wait(1).to({rotation:-43,x:141.3,y:204.3},0).wait(1).to({rotation:-45,x:141.9,y:203.7},0).wait(1).to({rotation:-47,x:142.6,y:203.1},0).wait(1).to({rotation:-49,x:143.1,y:202.5},0).wait(1).to({rotation:-51,x:143.6,y:201.9},0).wait(1).to({rotation:-53,x:144.2,y:201.2},0).wait(1).to({rotation:-55.1,x:144.7,y:200.6},0).wait(1).to({rotation:-57.1,x:145.3,y:199.9},0).wait(1).to({rotation:-59.1,x:145.7,y:199.2},0).wait(1).to({rotation:-56.7,x:145.2,y:200},0).wait(1).to({rotation:-54.3,x:144.5,y:200.8},0).wait(1).to({rotation:-51.9,x:143.9,y:201.6},0).wait(1).to({rotation:-49.5,x:143.3,y:202.4},0).wait(1).to({rotation:-47,x:142.6,y:203.2},0).wait(1).to({rotation:-44.6,x:141.8,y:203.8},0).wait(1).to({rotation:-42.2,x:141,y:204.5},0).wait(1).to({rotation:-39.8,x:140.2,y:205.1},0).wait(1).to({rotation:-37.4,x:139.4,y:205.8},0).wait(1).to({rotation:-34.4,x:138.4,y:206.4},0).wait(1).to({rotation:-31.4,x:137.3,y:207.1},0).wait(1).to({rotation:-28.5,x:136.2,y:207.7},0).wait(1).to({rotation:-25.5,x:135,y:208.2},0).wait(1).to({rotation:-22.5,x:133.9,y:208.7},0).wait(1).to({rotation:-19.5,x:132.7,y:209.1},0).wait(1).to({rotation:-16.5,x:131.5,y:209.4},0).wait(1).to({rotation:-13.5,x:130.3,y:209.7},0).wait(1).to({rotation:-10.6,x:129,y:209.9},0).wait(1).to({rotation:-7.6,x:127.7,y:210.1},0).wait(1).to({rotation:-4.6,x:126.5},0).wait(1).to({rotation:-5.9,x:127.1},0).wait(1).to({rotation:-7.3,x:127.7},0).wait(1).to({rotation:-8.6,x:128.2,y:210},0).wait(1).to({rotation:-10,x:128.8,y:209.9},0).wait(1).to({rotation:-11.3,x:129.3},0).wait(1).to({rotation:-12.6,x:129.8,y:209.8},0).wait(1).to({rotation:-14,x:130.4,y:209.7},0).wait(1).to({rotation:-15.3,x:131,y:209.5},0).wait(1).to({rotation:-16.6,x:131.5,y:209.4},0).wait(1).to({rotation:-18,x:132.1,y:209.3},0).wait(1).to({rotation:-19.3,x:132.6,y:209.1},0).wait(1).to({rotation:-20.6,x:133.1,y:208.9},0).wait(1).to({rotation:-22,x:133.7,y:208.7},0).wait(1).to({rotation:-23.3,x:134.2,y:208.5},0).wait(1).to({rotation:-24.7,x:134.7,y:208.3},0).wait(1).to({rotation:-26,x:135.3,y:208.1},0).wait(1).to({rotation:-27.3,x:135.8,y:207.9},0).wait(1).to({rotation:-28.7,x:136.2,y:207.6},0).wait(1).to({rotation:-30,x:136.8,y:207.4},0).wait(1).to({regX:15.4,regY:14.8,scaleX:1,scaleY:1,rotation:-29.9,x:125.5,y:186},0).wait(1).to({regX:14.5,regY:39,scaleX:1,scaleY:1,rotation:-30,x:136.8,y:207.4},0).wait(29));

	// mouse
	this.instance_9 = new lib.mouse_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(97,157.5,1,1,0,0,0,13,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:0.9,x:97.2},0).wait(1).to({rotation:1.9,x:97.3},0).wait(1).to({rotation:2.8,x:97.6},0).wait(1).to({rotation:3.7,x:97.7},0).wait(1).to({rotation:3,x:97.6},0).wait(1).to({rotation:2.2,x:97.4},0).wait(1).to({rotation:1.5,x:97.3},0).wait(1).to({rotation:0.7,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:-0.7,x:96.8},0).wait(1).to({rotation:-1.5,x:96.6},0).wait(1).to({rotation:-2.2,x:96.5},0).wait(1).to({rotation:-3,x:96.3},0).wait(1).to({rotation:-3.7,x:96},0).wait(1).to({rotation:-4.5,x:95.9},0).wait(1).to({rotation:-5.2,x:95.7},0).wait(1).to({rotation:-6,x:95.5},0).wait(1).to({rotation:-6.7,x:95.3},0).wait(1).to({rotation:-6.1,x:95.5},0).wait(1).to({rotation:-5.5,x:95.7},0).wait(1).to({rotation:-4.8,x:95.8},0).wait(1).to({rotation:-4.2,x:96},0).wait(1).to({rotation:-3.6,x:96.1},0).wait(1).to({rotation:-3,x:96.4},0).wait(1).to({rotation:-2.3,x:96.5},0).wait(1).to({rotation:-1.7,x:96.7},0).wait(1).to({rotation:-1.1,x:96.8},0).wait(1).to({rotation:-0.5,x:97},0).wait(1).to({rotation:0.1,x:97.2},0).wait(1).to({rotation:0.8,x:97.3},0).wait(1).to({rotation:1.4,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.2,x:98},0).wait(1).to({rotation:3.9,x:98.2},0).wait(1).to({rotation:4.5,x:98.3},0).wait(1).to({rotation:5.1,x:98.5},0).wait(1).to({rotation:5.7,x:98.7},0).wait(1).to({rotation:5.4,x:98.5},0).wait(1).to({rotation:5},0).wait(1).to({rotation:4.7,x:98.3},0).wait(1).to({rotation:4.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.1},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:2.5,x:97.7},0).wait(1).to({rotation:2.1,x:97.6},0).wait(1).to({rotation:1.8,x:97.5},0).wait(1).to({rotation:1.4,x:97.4},0).wait(1).to({rotation:1.1,x:97.3},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.5},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.8},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4,x:98.1},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:2.8,x:97.8},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.5},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.8},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4,x:98.1},0).wait(1).to({x:98},0).wait(1).to({x:97.9},0).wait(1).to({x:97.8},0).wait(1).to({x:97.7},0).wait(1).to({x:97.6},0).wait(1).to({x:97.4},0).wait(1).to({x:97.3},0).wait(1).to({x:97.2},0).wait(1).to({x:97.1},0).wait(1).to({x:97},0).wait(1).to({rotation:0},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.5},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.8},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4,x:98.1},0).wait(1).to({x:98},0).wait(1).to({x:97.9},0).wait(1).to({x:97.8},0).wait(1).to({x:97.7},0).wait(1).to({x:97.6},0).wait(1).to({x:97.4},0).wait(1).to({x:97.3},0).wait(1).to({x:97.2},0).wait(1).to({x:97.1},0).wait(1).to({x:97},0).wait(1).to({rotation:0},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.5},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.8},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4,x:98.1},0).wait(1).to({x:98},0).wait(1).to({x:97.9},0).wait(1).to({x:97.8},0).wait(1).to({x:97.7},0).wait(1).to({x:97.6},0).wait(1).to({x:97.4},0).wait(1).to({x:97.3},0).wait(1).to({x:97.2},0).wait(1).to({x:97.1},0).wait(1).to({x:97},0).wait(1).to({rotation:0},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:1.3,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:4.6,x:98.7},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.7,x:98.8},0).wait(1).to({rotation:4.1,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.1,x:98.3},0).wait(1).to({rotation:2.5,x:98.1},0).wait(1).to({rotation:2,x:97.9},0).wait(1).to({rotation:1.5,x:97.8},0).wait(1).to({rotation:0.9,x:97.6},0).wait(1).to({rotation:0.4,x:97.4},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1,x:97.1},0).wait(1).to({rotation:-1.8,x:97},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.6},0).wait(1).to({rotation:-4.2,x:96.4},0).wait(1).to({rotation:-5,x:96.2},0).wait(1).to({rotation:-5.8,x:96.1},0).wait(1).to({rotation:-6.6,x:95.9},0).wait(1).to({rotation:-7.4,x:95.7},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-7.2,x:95.8,y:157.6},0).wait(1).to({rotation:-6.2,x:96},0).wait(1).to({rotation:-5.2,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-3.1,x:96.9,y:157.8},0).wait(1).to({rotation:-2.1,x:97.1,y:157.9},0).wait(1).to({rotation:-1,x:97.4},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:1.3,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:4.6,x:98.7},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.7,x:98.8},0).wait(1).to({rotation:4.1,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.1,x:98.3},0).wait(1).to({rotation:2.5,x:98.1},0).wait(1).to({rotation:2,x:97.9},0).wait(1).to({rotation:1.5,x:97.8},0).wait(1).to({rotation:0.9,x:97.6},0).wait(1).to({rotation:0.4,x:97.4},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1,x:97.1},0).wait(1).to({rotation:-1.8,x:97},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.6},0).wait(1).to({rotation:-4.2,x:96.4},0).wait(1).to({rotation:-5,x:96.2},0).wait(1).to({rotation:-5.8,x:96.1},0).wait(1).to({rotation:-6.6,x:95.9},0).wait(1).to({rotation:-7.4,x:95.7},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-7.2,x:95.8,y:157.6},0).wait(1).to({rotation:-6.2,x:96},0).wait(1).to({rotation:-5.2,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-3.1,x:96.9,y:157.8},0).wait(1).to({rotation:-2.1,x:97.1,y:157.9},0).wait(1).to({rotation:-1,x:97.4},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:1.3,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:4.6,x:98.7},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.7,x:98.8},0).wait(1).to({rotation:4.1,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.1,x:98.3},0).wait(1).to({rotation:2.5,x:98.1},0).wait(1).to({rotation:2,x:97.9},0).wait(1).to({rotation:1.5,x:97.8},0).wait(1).to({rotation:0.9,x:97.6},0).wait(1).to({rotation:0.4,x:97.4},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1,x:97.1},0).wait(1).to({rotation:-1.8,x:97},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.6},0).wait(1).to({rotation:-4.2,x:96.4},0).wait(1).to({rotation:-5,x:96.2},0).wait(1).to({rotation:-5.8,x:96.1},0).wait(1).to({rotation:-6.6,x:95.9},0).wait(1).to({rotation:-7.4,x:95.7},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-7.2,x:95.8,y:157.6},0).wait(1).to({rotation:-6.2,x:96},0).wait(1).to({rotation:-5.2,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-3.1,x:96.9,y:157.8},0).wait(1).to({rotation:-2.1,x:97.1,y:157.9},0).wait(1).to({rotation:-1,x:97.4},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:3.2,x:98.4},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.4},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:97},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.5},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-6.9,x:95.9,y:157.6},0).wait(1).to({rotation:-5.5,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-2.7,x:96.9,y:157.9},0).wait(1).to({rotation:-1.4,x:97.3},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:3.2,x:98.4},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.4},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:97},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.5},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-6.9,x:95.9,y:157.6},0).wait(1).to({rotation:-5.5,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-2.7,x:96.9,y:157.9},0).wait(1).to({rotation:-1.4,x:97.3},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:3.2,x:98.4},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.4},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:97},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.5},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-6.9,x:95.9,y:157.6},0).wait(1).to({rotation:-5.5,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-2.7,x:96.9,y:157.9},0).wait(1).to({rotation:-1.4,x:97.3},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:3.2,x:98.4},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.4},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:97},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.5},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-6.9,x:95.9,y:157.6},0).wait(1).to({rotation:-5.5,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-2.7,x:96.9,y:157.9},0).wait(1).to({rotation:-1.4,x:97.3},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(1).to({x:97,y:157.5},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:3.2,x:98.4},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.4},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:97},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.5},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.5},0).wait(1).to({rotation:-6.9,x:95.9,y:157.6},0).wait(1).to({rotation:-5.5,x:96.3,y:157.7},0).wait(1).to({rotation:-4.1,x:96.6},0).wait(1).to({rotation:-2.7,x:96.9,y:157.9},0).wait(1).to({rotation:-1.4,x:97.3},0).wait(1).to({rotation:0,x:97.6,y:158},0).wait(2).to({rotation:0.3,x:97.7},0).wait(1).to({rotation:0.6,x:97.8},0).wait(1).to({rotation:0.9},0).wait(1).to({rotation:1.1,x:97.9},0).wait(1).to({rotation:1.4,x:98},0).wait(1).to({rotation:1.7,x:98.1},0).wait(1).to({rotation:2,x:98.2},0).wait(1).to({rotation:2.3,x:98.3},0).wait(1).to({rotation:2.6,x:98.4},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.2,x:98.5},0).wait(1).to({rotation:3.4,x:98.7},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:4,x:98.8},0).wait(1).to({rotation:4.3,x:98.9},0).wait(1).to({rotation:4.6,x:99},0).wait(1).to({rotation:4.9,x:99.1},0).wait(1).to({rotation:5.2,x:99.2},0).wait(1).to({rotation:5.4,x:99.3},0).wait(1).to({rotation:5.7,x:99.4},0).wait(1).to({rotation:5.2,x:99.2},0).wait(1).to({rotation:4.6,x:99},0).wait(1).to({rotation:4,x:98.8},0).wait(1).to({rotation:3.4,x:98.7},0).wait(1).to({rotation:2.9,x:98.4},0).wait(1).to({rotation:2.3,x:98.3},0).wait(1).to({rotation:1.7,x:98.1},0).wait(1).to({rotation:1.1,x:97.9},0).wait(1).to({rotation:0.6,x:97.8},0).wait(1).to({rotation:0,x:97.6},0).wait(1).to({rotation:-0.6,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.7,x:97},0).wait(1).to({rotation:-2.3,x:96.8},0).wait(1).to({rotation:-2.9,x:96.6},0).wait(1).to({rotation:-3.4,x:96.5},0).wait(1).to({rotation:-4,x:96.2},0).wait(1).to({rotation:-4.6,x:96.1},0).wait(1).to({rotation:-5.1,x:95.9},0).wait(1).to({rotation:-5.7,x:95.8},0).wait(1).to({rotation:-5.5,x:95.9},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5,x:96},0).wait(1).to({rotation:-4.7,x:96.1},0).wait(1).to({rotation:-4.5,x:96.2},0).wait(1).to({rotation:-4.2,x:96.3},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-3.7,x:96.4},0).wait(1).to({rotation:-3.5,x:96.5},0).wait(1).to({rotation:-3.2,x:96.6},0).wait(1).to({rotation:-3,x:96.7},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-2.5,x:96.8},0).wait(1).to({rotation:-2.3,x:96.9},0).wait(1).to({rotation:-2,x:97},0).wait(1).to({rotation:-1.8,x:97.1},0).wait(1).to({rotation:-1.5,x:97.2},0).wait(1).to({rotation:-1.3,x:97.3},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8,x:97.4},0).wait(1).to({rotation:-0.2,x:97.6},0).wait(1).to({rotation:0.4,x:97.8},0).wait(1).to({rotation:1,x:98},0).wait(1).to({rotation:1.6,x:98.2},0).wait(1).to({rotation:2.2,x:98.4},0).wait(1).to({rotation:2.8,x:98.6},0).wait(1).to({rotation:3.4,x:98.8},0).wait(1).to({rotation:4,x:98.9},0).wait(1).to({rotation:4.6,x:99.1},0).wait(1).to({rotation:5.2,x:99.3},0).wait(1).to({rotation:5.8,x:99.5},0).wait(1).to({rotation:6.4,x:99.7},0).wait(1).to({rotation:7,x:99.9},0).wait(1).to({rotation:7.6,x:100.1},0).wait(1).to({rotation:8.2,x:100.3},0).wait(1).to({rotation:7.7,x:100.1},0).wait(1).to({rotation:7.1,x:99.9},0).wait(1).to({rotation:6.5,x:99.7},0).wait(1).to({rotation:5.9,x:99.5},0).wait(1).to({rotation:5.3,x:99.3},0).wait(1).to({rotation:4.8,x:99.1},0).wait(1).to({rotation:4.2,x:98.9},0).wait(1).to({rotation:3.6,x:98.8},0).wait(1).to({rotation:3,x:98.6},0).wait(1).to({rotation:2.4,x:98.4},0).wait(1).to({rotation:1.9,x:98.2},0).wait(1).to({rotation:1.3,x:98},0).wait(1).to({rotation:0.7,x:97.8},0).wait(1).to({rotation:0.1,x:97.7},0).wait(1).to({rotation:-0.4,x:97.4},0).wait(1).to({x:97.5},0).wait(3).to({rotation:-0.3},0).wait(5).to({rotation:-0.2},0).wait(4).to({rotation:-0.1},0).wait(4).to({rotation:0},0).wait(2).to({x:97.6},0).wait(2).to({rotation:-0.9,x:97.3},0).wait(1).to({rotation:-1.7,x:97},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.5},0).wait(1).to({rotation:-4.3,x:96.2},0).wait(1).to({rotation:-5.2,x:95.9},0).wait(1).to({rotation:-6,x:95.7},0).wait(1).to({rotation:-6.9,x:95.4},0).wait(1).to({rotation:-7.7,x:95.2},0).wait(1).to({rotation:-6.5,x:95.5},0).wait(1).to({rotation:-5.2,x:96},0).wait(1).to({rotation:-3.9,x:96.3},0).wait(1).to({rotation:-2.7,x:96.7},0).wait(1).to({rotation:-1.4,x:97.1},0).wait(1).to({rotation:-0.2,x:97.5},0).wait(1).to({rotation:1.1,x:97.9},0).wait(1).to({rotation:2.4,x:98.3},0).wait(1).to({rotation:3.6,x:98.7},0).wait(1).to({rotation:4.9,x:99.1},0).wait(1).to({rotation:4.4,x:98.9},0).wait(1).to({rotation:3.9,x:98.8},0).wait(1).to({rotation:3.4,x:98.7},0).wait(1).to({rotation:2.9,x:98.5},0).wait(1).to({rotation:2.5,x:98.3},0).wait(1).to({rotation:2,x:98.2},0).wait(1).to({rotation:1.5,x:98},0).wait(1).to({rotation:1,x:97.9},0).wait(1).to({rotation:0.5,x:97.7},0).wait(1).to({rotation:0,x:97.6},0).wait(1));

	// cheak
	this.instance_10 = new lib.cheak_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(97,158,1,1,0,0,0,56,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:0.9,x:97.2},0).wait(1).to({rotation:1.9,x:97.3},0).wait(1).to({rotation:2.8,x:97.5},0).wait(1).to({rotation:3.7,x:97.7},0).wait(1).to({rotation:3,x:97.5},0).wait(1).to({rotation:2.2,x:97.4},0).wait(1).to({rotation:1.5,x:97.3},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:-0.7,x:96.8},0).wait(1).to({rotation:-1.5,x:96.7},0).wait(1).to({rotation:-2.2,x:96.5},0).wait(1).to({rotation:-3,x:96.3},0).wait(1).to({rotation:-3.7,x:96.1},0).wait(1).to({rotation:-4.5,x:96},0).wait(1).to({rotation:-5.2,x:95.8},0).wait(1).to({rotation:-6,x:95.6},0).wait(1).to({rotation:-6.7,x:95.4},0).wait(1).to({rotation:-6.1,x:95.6},0).wait(1).to({rotation:-5.5,x:95.8},0).wait(1).to({rotation:-4.8,x:95.9},0).wait(1).to({rotation:-4.2,x:96.1},0).wait(1).to({rotation:-3.6,x:96.2},0).wait(1).to({rotation:-3,x:96.3},0).wait(1).to({rotation:-2.3,x:96.5},0).wait(1).to({rotation:-1.7,x:96.7},0).wait(1).to({rotation:-1.1,x:96.9},0).wait(1).to({rotation:-0.5,x:97},0).wait(1).to({rotation:0.1,x:97.2},0).wait(1).to({rotation:0.8,x:97.3},0).wait(1).to({rotation:1.4,x:97.5},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:2.6,x:97.8},0).wait(1).to({rotation:3.2,x:97.9},0).wait(1).to({rotation:3.9,x:98},0).wait(1).to({rotation:4.5,x:98.3},0).wait(1).to({rotation:5.1,x:98.4},0).wait(1).to({rotation:5.7,x:98.5},0).wait(1).to({rotation:5.4},0).wait(1).to({rotation:5,x:98.4},0).wait(1).to({rotation:4.7,x:98.2},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:3.9,x:98},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:2.5,x:97.7},0).wait(1).to({rotation:2.1,x:97.6},0).wait(1).to({rotation:1.8,x:97.5},0).wait(1).to({rotation:1.4,x:97.4},0).wait(1).to({rotation:1.1,x:97.3},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:3.6,x:98},0).wait(1).to({rotation:4},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.2,x:97.8},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:2.4,x:97.6},0).wait(1).to({rotation:2,x:97.5},0).wait(1).to({rotation:1.6,x:97.4},0).wait(1).to({rotation:1.2,x:97.3},0).wait(1).to({rotation:0.8,x:97.2},0).wait(1).to({rotation:0.4,x:97.1},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:1.3,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.4},0).wait(1).to({rotation:4.6,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.7,x:98.7},0).wait(1).to({rotation:4.1,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.1,x:98.2},0).wait(1).to({rotation:2.5,x:98.1},0).wait(1).to({rotation:2,x:97.9},0).wait(1).to({rotation:1.5,x:97.8},0).wait(1).to({rotation:0.9,x:97.6},0).wait(1).to({rotation:0.4,x:97.4},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1,x:97.1},0).wait(1).to({rotation:-1.8,x:96.9},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.6},0).wait(1).to({rotation:-4.2,x:96.4},0).wait(1).to({rotation:-5,x:96.3},0).wait(1).to({rotation:-5.8,x:96.1},0).wait(1).to({rotation:-6.6,x:96},0).wait(1).to({rotation:-7.4,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-7.2,x:95.9},0).wait(1).to({rotation:-6.2,x:96.1,y:158.1},0).wait(1).to({rotation:-5.2,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-3.1,x:96.8},0).wait(1).to({rotation:-2.1,x:97.1,y:158.4},0).wait(1).to({rotation:-1,x:97.3},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:1.3,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.4},0).wait(1).to({rotation:4.6,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.7,x:98.7},0).wait(1).to({rotation:4.1,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.1,x:98.2},0).wait(1).to({rotation:2.5,x:98.1},0).wait(1).to({rotation:2,x:97.9},0).wait(1).to({rotation:1.5,x:97.8},0).wait(1).to({rotation:0.9,x:97.6},0).wait(1).to({rotation:0.4,x:97.4},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1,x:97.1},0).wait(1).to({rotation:-1.8,x:96.9},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.6},0).wait(1).to({rotation:-4.2,x:96.4},0).wait(1).to({rotation:-5,x:96.3},0).wait(1).to({rotation:-5.8,x:96.1},0).wait(1).to({rotation:-6.6,x:96},0).wait(1).to({rotation:-7.4,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-7.2,x:95.9},0).wait(1).to({rotation:-6.2,x:96.1,y:158.1},0).wait(1).to({rotation:-5.2,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-3.1,x:96.8},0).wait(1).to({rotation:-2.1,x:97.1,y:158.4},0).wait(1).to({rotation:-1,x:97.3},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:1.3,x:97.5},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.3,x:98.2},0).wait(1).to({rotation:3.9,x:98.4},0).wait(1).to({rotation:4.6,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.7,x:98.7},0).wait(1).to({rotation:4.1,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.1,x:98.2},0).wait(1).to({rotation:2.5,x:98.1},0).wait(1).to({rotation:2,x:97.9},0).wait(1).to({rotation:1.5,x:97.8},0).wait(1).to({rotation:0.9,x:97.6},0).wait(1).to({rotation:0.4,x:97.4},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1,x:97.1},0).wait(1).to({rotation:-1.8,x:96.9},0).wait(1).to({rotation:-2.6,x:96.8},0).wait(1).to({rotation:-3.4,x:96.6},0).wait(1).to({rotation:-4.2,x:96.4},0).wait(1).to({rotation:-5,x:96.3},0).wait(1).to({rotation:-5.8,x:96.1},0).wait(1).to({rotation:-6.6,x:96},0).wait(1).to({rotation:-7.4,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-7.2,x:95.9},0).wait(1).to({rotation:-6.2,x:96.1,y:158.1},0).wait(1).to({rotation:-5.2,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-3.1,x:96.8},0).wait(1).to({rotation:-2.1,x:97.1,y:158.4},0).wait(1).to({rotation:-1,x:97.3},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:3.2,x:98.3},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:96.9},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.6},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-6.9,x:96,y:158.1},0).wait(1).to({rotation:-5.5,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-2.7,x:96.9},0).wait(1).to({rotation:-1.4,x:97.2,y:158.4},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:3.2,x:98.3},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:96.9},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.6},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-6.9,x:96,y:158.1},0).wait(1).to({rotation:-5.5,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-2.7,x:96.9},0).wait(1).to({rotation:-1.4,x:97.2,y:158.4},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:3.2,x:98.3},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:96.9},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.6},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-6.9,x:96,y:158.1},0).wait(1).to({rotation:-5.5,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-2.7,x:96.9},0).wait(1).to({rotation:-1.4,x:97.2,y:158.4},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:3.2,x:98.3},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:96.9},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.6},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-6.9,x:96,y:158.1},0).wait(1).to({rotation:-5.5,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-2.7,x:96.9},0).wait(1).to({rotation:-1.4,x:97.2,y:158.4},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(1).to({x:97,y:158},0).wait(1).to({rotation:0.9,x:97.3},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:97.9},0).wait(1).to({rotation:3.5,x:98.3},0).wait(1).to({rotation:4.3,x:98.6},0).wait(1).to({rotation:5.2,x:98.9},0).wait(1).to({rotation:4.5,x:98.7},0).wait(1).to({rotation:3.9,x:98.5},0).wait(1).to({rotation:3.2,x:98.3},0).wait(1).to({rotation:2.5,x:98.2},0).wait(1).to({rotation:1.9,x:97.9},0).wait(1).to({rotation:1.2,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.9,x:96.9},0).wait(1).to({rotation:-2.8,x:96.8},0).wait(1).to({rotation:-3.7,x:96.6},0).wait(1).to({rotation:-4.6,x:96.4},0).wait(1).to({rotation:-5.5,x:96.2},0).wait(1).to({rotation:-6.4,x:96},0).wait(1).to({rotation:-7.3,x:95.8},0).wait(1).to({rotation:-8.2,x:95.6},0).wait(1).to({rotation:-6.9,x:96,y:158.1},0).wait(1).to({rotation:-5.5,x:96.3,y:158.2},0).wait(1).to({rotation:-4.1,x:96.6,y:158.3},0).wait(1).to({rotation:-2.7,x:96.9},0).wait(1).to({rotation:-1.4,x:97.2,y:158.4},0).wait(1).to({rotation:0,x:97.5,y:158.5},0).wait(2).to({rotation:0.3,x:97.6},0).wait(1).to({rotation:0.6,x:97.7},0).wait(1).to({rotation:0.9,x:97.8},0).wait(1).to({rotation:1.1,x:97.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.7,x:98},0).wait(1).to({rotation:2,x:98.1},0).wait(1).to({rotation:2.3,x:98.2},0).wait(1).to({rotation:2.6,x:98.3},0).wait(1).to({rotation:2.9,x:98.4},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:3.4,x:98.6},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:4,x:98.7},0).wait(1).to({rotation:4.3,x:98.8},0).wait(1).to({rotation:4.6,x:98.9},0).wait(1).to({rotation:4.9,x:99},0).wait(1).to({rotation:5.2,x:99.1},0).wait(1).to({rotation:5.4,x:99.2},0).wait(1).to({rotation:5.7},0).wait(1).to({rotation:5.2,x:99.1},0).wait(1).to({rotation:4.6,x:98.9},0).wait(1).to({rotation:4,x:98.7},0).wait(1).to({rotation:3.4,x:98.6},0).wait(1).to({rotation:2.9,x:98.4},0).wait(1).to({rotation:2.3,x:98.2},0).wait(1).to({rotation:1.7,x:98},0).wait(1).to({rotation:1.1,x:97.9},0).wait(1).to({rotation:0.6,x:97.7},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({rotation:-0.6,x:97.3},0).wait(1).to({rotation:-1.1,x:97.2},0).wait(1).to({rotation:-1.7,x:97},0).wait(1).to({rotation:-2.3,x:96.8},0).wait(1).to({rotation:-2.9,x:96.6},0).wait(1).to({rotation:-3.4,x:96.5},0).wait(1).to({rotation:-4,x:96.3},0).wait(1).to({rotation:-4.6,x:96.1},0).wait(1).to({rotation:-5.1,x:95.9},0).wait(1).to({rotation:-5.7,x:95.7},0).wait(1).to({rotation:-5.5,x:95.9},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5,x:96},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.5,x:96.2},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4,x:96.3},0).wait(1).to({rotation:-3.7,x:96.4},0).wait(1).to({rotation:-3.5,x:96.5},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-3,x:96.6},0).wait(1).to({rotation:-2.8,x:96.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.3,x:96.8},0).wait(1).to({rotation:-2,x:96.9},0).wait(1).to({rotation:-1.8,x:97},0).wait(1).to({rotation:-1.5,x:97.1},0).wait(1).to({rotation:-1.3,x:97.2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8,x:97.3},0).wait(1).to({rotation:-0.2,x:97.5},0).wait(1).to({rotation:0.4,x:97.7},0).wait(1).to({rotation:1,x:97.9},0).wait(1).to({rotation:1.6,x:98.1},0).wait(1).to({rotation:2.2,x:98.2},0).wait(1).to({rotation:2.8,x:98.4},0).wait(1).to({rotation:3.4,x:98.6},0).wait(1).to({rotation:4,x:98.8},0).wait(1).to({rotation:4.6,x:98.9},0).wait(1).to({rotation:5.2,x:99.1},0).wait(1).to({rotation:5.8,x:99.3},0).wait(1).to({rotation:6.4,x:99.5},0).wait(1).to({rotation:7,x:99.7},0).wait(1).to({rotation:7.6,x:99.9},0).wait(1).to({rotation:8.2,x:100.1},0).wait(1).to({rotation:7.7,x:99.9},0).wait(1).to({rotation:7.1,x:99.7},0).wait(1).to({rotation:6.5,x:99.6},0).wait(1).to({rotation:5.9,x:99.4},0).wait(1).to({rotation:5.3,x:99.2},0).wait(1).to({rotation:4.8,x:99},0).wait(1).to({rotation:4.2,x:98.9},0).wait(1).to({rotation:3.6,x:98.7},0).wait(1).to({rotation:3,x:98.5},0).wait(1).to({rotation:2.4,x:98.3},0).wait(1).to({rotation:1.9,x:98.1},0).wait(1).to({rotation:1.3,x:98},0).wait(1).to({rotation:0.7,x:97.8},0).wait(1).to({rotation:0.1,x:97.6},0).wait(1).to({rotation:-0.4,x:97.4},0).wait(1).to({x:97.5},0).wait(3).to({rotation:-0.3},0).wait(3).to({x:97.4},0).wait(2).to({rotation:-0.2},0).wait(1).to({x:97.5},0).wait(3).to({rotation:-0.1},0).wait(4).to({rotation:0},0).wait(4).to({rotation:-0.9,x:97.3},0).wait(1).to({rotation:-1.7,x:97},0).wait(1).to({rotation:-2.6,x:96.7},0).wait(1).to({rotation:-3.4,x:96.5},0).wait(1).to({rotation:-4.3,x:96.2},0).wait(1).to({rotation:-5.2,x:95.9},0).wait(1).to({rotation:-6,x:95.7},0).wait(1).to({rotation:-6.9,x:95.4},0).wait(1).to({rotation:-7.7,x:95.1},0).wait(1).to({rotation:-6.5,x:95.5},0).wait(1).to({rotation:-5.2,x:95.9},0).wait(1).to({rotation:-3.9,x:96.3},0).wait(1).to({rotation:-2.7,x:96.7},0).wait(1).to({rotation:-1.4,x:97.1},0).wait(1).to({rotation:-0.2,x:97.4},0).wait(1).to({rotation:1.1,x:97.8},0).wait(1).to({rotation:2.4,x:98.2},0).wait(1).to({rotation:3.6,x:98.6},0).wait(1).to({rotation:4.9,x:99},0).wait(1).to({rotation:4.4,x:98.8},0).wait(1).to({rotation:3.9,x:98.7},0).wait(1).to({rotation:3.4,x:98.5},0).wait(1).to({rotation:2.9,x:98.4},0).wait(1).to({rotation:2.5,x:98.3},0).wait(1).to({rotation:2,x:98.1},0).wait(1).to({rotation:1.5,x:97.9},0).wait(1).to({rotation:1,x:97.8},0).wait(1).to({rotation:0.5,x:97.6},0).wait(1).to({rotation:0,x:97.5},0).wait(1));

	// eye
	this.instance_11 = new lib.eye_7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(96.5,143,1,1,0,0,0,37.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:0.9,x:96.9},0).wait(1).to({rotation:1.9,x:97.3},0).wait(1).to({rotation:2.8,x:97.7},0).wait(1).to({rotation:3.7,x:98.1},0).wait(1).to({rotation:3,x:97.8},0).wait(1).to({rotation:2.2,x:97.5},0).wait(1).to({rotation:1.5,x:97.2},0).wait(1).to({rotation:0.7,x:96.8},0).wait(1).to({rotation:0,x:96.5},0).wait(2).to({rotation:-0.7,x:96.1},0).wait(1).to({rotation:-1.5,x:95.8},0).wait(1).to({rotation:-2.2,x:95.4},0).wait(1).to({rotation:-3,x:95},0).wait(1).to({rotation:-3.7,x:94.7},0).wait(1).to({rotation:-4.5,x:94.3},0).wait(1).to({rotation:-5.2,x:93.9},0).wait(1).to({rotation:-6,x:93.6},0).wait(1).to({rotation:-6.7,x:93.2},0).wait(1).to({rotation:-6.1,x:93.5},0).wait(1).to({rotation:-5.5,x:93.9},0).wait(1).to({rotation:-4.8,x:94.1},0).wait(1).to({rotation:-4.2,x:94.5},0).wait(1).to({rotation:-3.6,x:94.8},0).wait(1).to({rotation:-3,x:95.1},0).wait(1).to({rotation:-2.3,x:95.4},0).wait(1).to({rotation:-1.7,x:95.7},0).wait(1).to({rotation:-1.1,x:96.1},0).wait(1).to({rotation:-0.5,x:96.4},0).wait(1).to({rotation:0.1,x:96.7},0).wait(1).to({rotation:0.8,x:97},0).wait(1).to({rotation:1.4,x:97.3},0).wait(1).to({rotation:2,x:97.7},0).wait(1).to({rotation:2.6,x:98},0).wait(1).to({rotation:3.2,x:98.3},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:4.5,x:98.9},0).wait(1).to({rotation:5.1,x:99.2},0).wait(1).to({rotation:5.7,x:99.5},0).wait(1).to({rotation:5.4,x:99.4},0).wait(1).to({rotation:5,x:99.2},0).wait(1).to({rotation:4.7,x:99},0).wait(1).to({rotation:4.3,x:98.8},0).wait(1).to({rotation:3.9,x:98.6},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:2.9,x:98},0).wait(1).to({rotation:2.5,x:97.8},0).wait(1).to({rotation:2.1,x:97.6},0).wait(1).to({rotation:1.8,x:97.5},0).wait(1).to({rotation:1.4,x:97.3},0).wait(1).to({rotation:1.1,x:97.1},0).wait(1).to({rotation:0.7,x:96.9},0).wait(1).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0,x:96.5},0).wait(2).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:4,x:98.5},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0,x:96.5},0).wait(1).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:4,x:98.5},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0,x:96.5},0).wait(2).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:4,x:98.5},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0,x:96.5},0).wait(2).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:4,x:98.5},0).wait(1).to({rotation:3.6,x:98.4},0).wait(1).to({rotation:3.2,x:98.2},0).wait(1).to({rotation:2.8,x:97.9},0).wait(1).to({rotation:2.4,x:97.7},0).wait(1).to({rotation:2,x:97.6},0).wait(1).to({rotation:1.6,x:97.3},0).wait(1).to({rotation:1.2,x:97.1},0).wait(1).to({rotation:0.8,x:96.9},0).wait(1).to({rotation:0.4,x:96.7},0).wait(1).to({rotation:0,x:96.5},0).wait(2).to({rotation:0.7,x:96.9},0).wait(1).to({rotation:1.3,x:97.4},0).wait(1).to({rotation:2,x:97.8},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.3,x:98.6},0).wait(1).to({rotation:3.9,x:99},0).wait(1).to({rotation:4.6,x:99.4},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.7,x:99.6},0).wait(1).to({rotation:4.1,x:99.5},0).wait(1).to({rotation:3.6,x:99.4},0).wait(1).to({rotation:3.1,x:99.2},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.5,x:98.8},0).wait(1).to({rotation:0.9,x:98.6},0).wait(1).to({rotation:0.4,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1,x:97.8},0).wait(1).to({rotation:-1.8,x:97.3,y:143.1},0).wait(1).to({rotation:-2.6,x:96.7},0).wait(1).to({rotation:-3.4,x:96.2,y:143.2},0).wait(1).to({rotation:-4.2,x:95.7},0).wait(1).to({rotation:-5,x:95.1,y:143.3},0).wait(1).to({rotation:-5.8,x:94.6,y:143.4},0).wait(1).to({rotation:-6.6,x:94.1},0).wait(1).to({rotation:-7.4,x:93.5,y:143.5},0).wait(1).to({rotation:-8.2,x:93},0).wait(1).to({rotation:-7.2,x:93.5},0).wait(1).to({rotation:-6.2,x:94},0).wait(1).to({rotation:-5.2,x:94.5},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-3.1,x:95.5},0).wait(1).to({rotation:-2.1,x:96},0).wait(1).to({rotation:-1,x:96.5},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.7,x:96.9},0).wait(1).to({rotation:1.3,x:97.4},0).wait(1).to({rotation:2,x:97.8},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.3,x:98.6},0).wait(1).to({rotation:3.9,x:99},0).wait(1).to({rotation:4.6,x:99.4},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.7,x:99.6},0).wait(1).to({rotation:4.1,x:99.5},0).wait(1).to({rotation:3.6,x:99.4},0).wait(1).to({rotation:3.1,x:99.2},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.5,x:98.8},0).wait(1).to({rotation:0.9,x:98.6},0).wait(1).to({rotation:0.4,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1,x:97.8},0).wait(1).to({rotation:-1.8,x:97.3,y:143.1},0).wait(1).to({rotation:-2.6,x:96.7},0).wait(1).to({rotation:-3.4,x:96.2,y:143.2},0).wait(1).to({rotation:-4.2,x:95.7},0).wait(1).to({rotation:-5,x:95.1,y:143.3},0).wait(1).to({rotation:-5.8,x:94.6,y:143.4},0).wait(1).to({rotation:-6.6,x:94.1},0).wait(1).to({rotation:-7.4,x:93.5,y:143.5},0).wait(1).to({rotation:-8.2,x:93},0).wait(1).to({rotation:-7.2,x:93.5},0).wait(1).to({rotation:-6.2,x:94},0).wait(1).to({rotation:-5.2,x:94.5},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-3.1,x:95.5},0).wait(1).to({rotation:-2.1,x:96},0).wait(1).to({rotation:-1,x:96.5},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.7,x:96.9},0).wait(1).to({rotation:1.3,x:97.4},0).wait(1).to({rotation:2,x:97.8},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.3,x:98.6},0).wait(1).to({rotation:3.9,x:99},0).wait(1).to({rotation:4.6,x:99.4},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.7,x:99.6},0).wait(1).to({rotation:4.1,x:99.5},0).wait(1).to({rotation:3.6,x:99.4},0).wait(1).to({rotation:3.1,x:99.2},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.5,x:98.8},0).wait(1).to({rotation:0.9,x:98.6},0).wait(1).to({rotation:0.4,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1,x:97.8},0).wait(1).to({rotation:-1.8,x:97.3,y:143.1},0).wait(1).to({rotation:-2.6,x:96.7},0).wait(1).to({rotation:-3.4,x:96.2,y:143.2},0).wait(1).to({rotation:-4.2,x:95.7},0).wait(1).to({rotation:-5,x:95.1,y:143.3},0).wait(1).to({rotation:-5.8,x:94.6,y:143.4},0).wait(1).to({rotation:-6.6,x:94.1},0).wait(1).to({rotation:-7.4,x:93.5,y:143.5},0).wait(1).to({rotation:-8.2,x:93},0).wait(1).to({rotation:-7.2,x:93.5},0).wait(1).to({rotation:-6.2,x:94},0).wait(1).to({rotation:-5.2,x:94.5},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-3.1,x:95.5},0).wait(1).to({rotation:-2.1,x:96},0).wait(1).to({rotation:-1,x:96.5},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.9,x:97},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.5,x:98.7},0).wait(1).to({rotation:4.3,x:99.3},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.5,x:99.6},0).wait(1).to({rotation:3.9,x:99.4},0).wait(1).to({rotation:3.2,x:99.3},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:1.9,x:98.9},0).wait(1).to({rotation:1.2,x:98.7},0).wait(1).to({rotation:0.5,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1.1,x:97.7},0).wait(1).to({rotation:-1.9,x:97.2,y:143.1},0).wait(1).to({rotation:-2.8,x:96.5,y:143.2},0).wait(1).to({rotation:-3.7,x:96},0).wait(1).to({rotation:-4.6,x:95.4,y:143.3},0).wait(1).to({rotation:-5.5,x:94.7,y:143.4},0).wait(1).to({rotation:-6.4,x:94.2},0).wait(1).to({rotation:-7.3,x:93.6},0).wait(1).to({rotation:-8.2,x:93,y:143.5},0).wait(1).to({rotation:-6.9,x:93.7},0).wait(1).to({rotation:-5.5,x:94.4},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-2.7,x:95.6},0).wait(1).to({rotation:-1.4,x:96.4},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.9,x:97},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.5,x:98.7},0).wait(1).to({rotation:4.3,x:99.3},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.5,x:99.6},0).wait(1).to({rotation:3.9,x:99.4},0).wait(1).to({rotation:3.2,x:99.3},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:1.9,x:98.9},0).wait(1).to({rotation:1.2,x:98.7},0).wait(1).to({rotation:0.5,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1.1,x:97.7},0).wait(1).to({rotation:-1.9,x:97.2,y:143.1},0).wait(1).to({rotation:-2.8,x:96.5,y:143.2},0).wait(1).to({rotation:-3.7,x:96},0).wait(1).to({rotation:-4.6,x:95.4,y:143.3},0).wait(1).to({rotation:-5.5,x:94.7,y:143.4},0).wait(1).to({rotation:-6.4,x:94.2},0).wait(1).to({rotation:-7.3,x:93.6},0).wait(1).to({rotation:-8.2,x:93,y:143.5},0).wait(1).to({rotation:-6.9,x:93.7},0).wait(1).to({rotation:-5.5,x:94.4},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-2.7,x:95.6},0).wait(1).to({rotation:-1.4,x:96.4},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.9,x:97},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.5,x:98.7},0).wait(1).to({rotation:4.3,x:99.3},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.5,x:99.6},0).wait(1).to({rotation:3.9,x:99.4},0).wait(1).to({rotation:3.2,x:99.3},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:1.9,x:98.9},0).wait(1).to({rotation:1.2,x:98.7},0).wait(1).to({rotation:0.5,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1.1,x:97.7},0).wait(1).to({rotation:-1.9,x:97.2,y:143.1},0).wait(1).to({rotation:-2.8,x:96.5,y:143.2},0).wait(1).to({rotation:-3.7,x:96},0).wait(1).to({rotation:-4.6,x:95.4,y:143.3},0).wait(1).to({rotation:-5.5,x:94.7,y:143.4},0).wait(1).to({rotation:-6.4,x:94.2},0).wait(1).to({rotation:-7.3,x:93.6},0).wait(1).to({rotation:-8.2,x:93,y:143.5},0).wait(1).to({rotation:-6.9,x:93.7},0).wait(1).to({rotation:-5.5,x:94.4},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-2.7,x:95.6},0).wait(1).to({rotation:-1.4,x:96.4},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.9,x:97},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.5,x:98.7},0).wait(1).to({rotation:4.3,x:99.3},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.5,x:99.6},0).wait(1).to({rotation:3.9,x:99.4},0).wait(1).to({rotation:3.2,x:99.3},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:1.9,x:98.9},0).wait(1).to({rotation:1.2,x:98.7},0).wait(1).to({rotation:0.5,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1.1,x:97.7},0).wait(1).to({rotation:-1.9,x:97.2,y:143.1},0).wait(1).to({rotation:-2.8,x:96.5,y:143.2},0).wait(1).to({rotation:-3.7,x:96},0).wait(1).to({rotation:-4.6,x:95.4,y:143.3},0).wait(1).to({rotation:-5.5,x:94.7,y:143.4},0).wait(1).to({rotation:-6.4,x:94.2},0).wait(1).to({rotation:-7.3,x:93.6},0).wait(1).to({rotation:-8.2,x:93,y:143.5},0).wait(1).to({rotation:-6.9,x:93.7},0).wait(1).to({rotation:-5.5,x:94.4},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-2.7,x:95.6},0).wait(1).to({rotation:-1.4,x:96.4},0).wait(1).to({rotation:0,x:97},0).wait(1).to({x:96.5,y:143},0).wait(1).to({rotation:0.9,x:97},0).wait(1).to({rotation:1.7,x:97.6},0).wait(1).to({rotation:2.6,x:98.1},0).wait(1).to({rotation:3.5,x:98.7},0).wait(1).to({rotation:4.3,x:99.3},0).wait(1).to({rotation:5.2,x:99.8},0).wait(1).to({rotation:4.5,x:99.6},0).wait(1).to({rotation:3.9,x:99.4},0).wait(1).to({rotation:3.2,x:99.3},0).wait(1).to({rotation:2.5,x:99},0).wait(1).to({rotation:1.9,x:98.9},0).wait(1).to({rotation:1.2,x:98.7},0).wait(1).to({rotation:0.5,x:98.5},0).wait(1).to({rotation:-0.2,x:98.3},0).wait(1).to({rotation:-1.1,x:97.7},0).wait(1).to({rotation:-1.9,x:97.2,y:143.1},0).wait(1).to({rotation:-2.8,x:96.5,y:143.2},0).wait(1).to({rotation:-3.7,x:96},0).wait(1).to({rotation:-4.6,x:95.4,y:143.3},0).wait(1).to({rotation:-5.5,x:94.7,y:143.4},0).wait(1).to({rotation:-6.4,x:94.2},0).wait(1).to({rotation:-7.3,x:93.6},0).wait(1).to({rotation:-8.2,x:93,y:143.5},0).wait(1).to({rotation:-6.9,x:93.7},0).wait(1).to({rotation:-5.5,x:94.4},0).wait(1).to({rotation:-4.1,x:95},0).wait(1).to({rotation:-2.7,x:95.6},0).wait(1).to({rotation:-1.4,x:96.4},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.3,x:97.2},0).wait(1).to({rotation:0.6,x:97.3,y:143.4},0).wait(1).to({rotation:0.9,x:97.5},0).wait(1).to({rotation:1.1,x:97.6,y:143.5},0).wait(1).to({rotation:1.4,x:97.8},0).wait(1).to({rotation:1.7,x:98},0).wait(1).to({rotation:2,x:98.2,y:143.4},0).wait(1).to({rotation:2.3,x:98.3,y:143.5},0).wait(1).to({rotation:2.6,x:98.4},0).wait(1).to({rotation:2.9,x:98.6},0).wait(1).to({rotation:3.2,x:98.8},0).wait(1).to({rotation:3.4,x:99},0).wait(1).to({rotation:3.7,x:99.1,y:143.4},0).wait(1).to({rotation:4,x:99.3},0).wait(1).to({rotation:4.3,x:99.4},0).wait(1).to({rotation:4.6,x:99.6},0).wait(1).to({rotation:4.9,x:99.8,y:143.5},0).wait(1).to({rotation:5.2,x:99.9,y:143.4},0).wait(1).to({rotation:5.4,x:100.1},0).wait(1).to({rotation:5.7,x:100.2,y:143.5},0).wait(1).to({rotation:5.2,x:99.9,y:143.4},0).wait(1).to({rotation:4.6,x:99.6},0).wait(1).to({rotation:4,x:99.3},0).wait(1).to({rotation:3.4,x:99,y:143.5},0).wait(1).to({rotation:2.9,x:98.6},0).wait(1).to({rotation:2.3,x:98.3},0).wait(1).to({rotation:1.7,x:98},0).wait(1).to({rotation:1.1,x:97.6},0).wait(1).to({rotation:0.6,x:97.3,y:143.4},0).wait(1).to({rotation:0,x:97,y:143.5},0).wait(1).to({rotation:-0.6,x:96.7},0).wait(1).to({rotation:-1.1,x:96.4,y:143.4},0).wait(1).to({rotation:-1.7,x:96,y:143.5},0).wait(1).to({rotation:-2.3,x:95.7},0).wait(1).to({rotation:-2.9,x:95.4},0).wait(1).to({rotation:-3.4,x:95.1},0).wait(1).to({rotation:-4,x:94.7,y:143.4},0).wait(1).to({rotation:-4.6,x:94.4},0).wait(1).to({rotation:-5.1,x:94.1,y:143.5},0).wait(1).to({rotation:-5.7,x:93.7,y:143.4},0).wait(1).to({rotation:-5.5,x:93.9,y:143.5},0).wait(1).to({rotation:-5.2,x:94},0).wait(1).to({rotation:-5,x:94.2,y:143.4},0).wait(1).to({rotation:-4.7,x:94.3},0).wait(1).to({rotation:-4.5,x:94.5},0).wait(1).to({rotation:-4.2,x:94.6},0).wait(1).to({rotation:-4,x:94.8},0).wait(1).to({rotation:-3.7,x:94.9},0).wait(1).to({rotation:-3.5,x:95.1,y:143.5},0).wait(1).to({rotation:-3.2,x:95.2},0).wait(1).to({rotation:-3,x:95.3},0).wait(1).to({rotation:-2.8,x:95.5},0).wait(1).to({rotation:-2.5,x:95.6},0).wait(1).to({rotation:-2.3,x:95.7,y:143.4},0).wait(1).to({rotation:-2,x:95.9,y:143.5},0).wait(1).to({rotation:-1.8,x:96},0).wait(1).to({rotation:-1.5,x:96.2},0).wait(1).to({rotation:-1.3,x:96.3,y:143.4},0).wait(1).to({rotation:-1,x:96.4,y:143.5},0).wait(1).to({rotation:-0.8,x:96.6},0).wait(1).to({rotation:-0.2,x:96.9},0).wait(1).to({rotation:0.4,x:97.3,y:143.4},0).wait(1).to({rotation:1,x:97.6},0).wait(1).to({rotation:1.6,x:98},0).wait(1).to({rotation:2.2,x:98.3,y:143.5},0).wait(1).to({rotation:2.8,x:98.6},0).wait(1).to({rotation:3.4,x:99},0).wait(1).to({rotation:4,x:99.3,y:143.4},0).wait(1).to({rotation:4.6,x:99.7},0).wait(1).to({rotation:5.2,x:100},0).wait(1).to({rotation:5.8,x:100.4,y:143.5},0).wait(1).to({rotation:6.4,x:100.7,y:143.4},0).wait(1).to({rotation:7,x:101,y:143.5},0).wait(1).to({rotation:7.6,x:101.4},0).wait(1).to({rotation:8.2,x:101.7},0).wait(1).to({rotation:7.7,x:101.4},0).wait(1).to({rotation:7.1,x:101,y:143.4},0).wait(1).to({rotation:6.5,x:100.7},0).wait(1).to({rotation:5.9,x:100.4},0).wait(1).to({rotation:5.3,x:100.1,y:143.5},0).wait(1).to({rotation:4.8,x:99.7,y:143.4},0).wait(1).to({rotation:4.2,x:99.4},0).wait(1).to({rotation:3.6,x:99.1,y:143.5},0).wait(1).to({rotation:3,x:98.7},0).wait(1).to({rotation:2.4,x:98.4},0).wait(1).to({rotation:1.9,x:98.1,y:143.4},0).wait(1).to({rotation:1.3,x:97.8,y:143.5},0).wait(1).to({rotation:0.7,x:97.4,y:143.4},0).wait(1).to({rotation:0.1,x:97.1,y:143.5},0).wait(1).to({rotation:-0.4,x:96.8,y:143.4},0).wait(1).to({y:143.5},0).wait(2).to({y:143.4},0).wait(1).to({rotation:-0.3},0).wait(1).to({y:143.5},0).wait(1).to({y:143.4},0).wait(1).to({x:96.9},0).wait(1).to({y:143.5},0).wait(1).to({rotation:-0.2},0).wait(1).to({y:143.4},0).wait(1).to({y:143.5},0).wait(2).to({rotation:-0.1,x:97,y:143.4},0).wait(1).to({x:96.9},0).wait(1).to({y:143.5},0).wait(1).to({x:97,y:143.4},0).wait(1).to({rotation:0},0).wait(1).to({y:143.5},0).wait(3).to({rotation:-0.9,x:96.5},0).wait(1).to({rotation:-1.7,x:96,y:143.4},0).wait(1).to({rotation:-2.6,x:95.5,y:143.5},0).wait(1).to({rotation:-3.4,x:95},0).wait(1).to({rotation:-4.3,x:94.6,y:143.4},0).wait(1).to({rotation:-5.2,x:94.1,y:143.5},0).wait(1).to({rotation:-6,x:93.6},0).wait(1).to({rotation:-6.9,x:93.1,y:143.4},0).wait(1).to({rotation:-7.7,x:92.6,y:143.5},0).wait(1).to({rotation:-6.5,x:93.3,y:143.4},0).wait(1).to({rotation:-5.2,x:94,y:143.5},0).wait(1).to({rotation:-3.9,x:94.8,y:143.4},0).wait(1).to({rotation:-2.7,x:95.4,y:143.5},0).wait(1).to({rotation:-1.4,x:96.2,y:143.4},0).wait(1).to({rotation:-0.2,x:96.9,y:143.5},0).wait(1).to({rotation:1.1,x:97.6},0).wait(1).to({rotation:2.4,x:98.3},0).wait(1).to({rotation:3.6,x:99},0).wait(1).to({rotation:4.9,x:99.7,y:143.4},0).wait(1).to({rotation:4.4,x:99.5},0).wait(1).to({rotation:3.9,x:99.2},0).wait(1).to({rotation:3.4,x:99,y:143.5},0).wait(1).to({rotation:2.9,x:98.7},0).wait(1).to({rotation:2.5,x:98.4},0).wait(1).to({rotation:2,x:98.1},0).wait(1).to({rotation:1.5,x:97.8,y:143.4},0).wait(1).to({rotation:1,x:97.6,y:143.5},0).wait(1).to({rotation:0.5,x:97.3,y:143.4},0).wait(1).to({rotation:0,x:97,y:143.5},0).wait(1));

	// face
	this.instance_12 = new lib.face_7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(97,99,1,1,0,0,0,97,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({rotation:0.9,x:98.2,y:99.1},0).wait(1).to({rotation:1.9,x:99.3,y:99},0).wait(1).to({rotation:2.8,x:100.5,y:99.1},0).wait(1).to({rotation:3.7,x:101.6},0).wait(1).to({rotation:3,x:100.7,y:99},0).wait(1).to({rotation:2.2,x:99.7},0).wait(1).to({rotation:1.5,x:98.8},0).wait(1).to({rotation:0.7,x:97.9},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:-0.7,x:96.1,y:99.1},0).wait(1).to({rotation:-1.5,x:95.1},0).wait(1).to({rotation:-2.2,x:94.3},0).wait(1).to({rotation:-3,x:93.3,y:99.2},0).wait(1).to({rotation:-3.7,x:92.4,y:99.3},0).wait(1).to({rotation:-4.5,x:91.4},0).wait(1).to({rotation:-5.2,x:90.5,y:99.4},0).wait(1).to({rotation:-6,x:89.6},0).wait(1).to({rotation:-6.7,x:88.7,y:99.5},0).wait(1).to({rotation:-6.1,x:89.4},0).wait(1).to({rotation:-5.5,x:90.2},0).wait(1).to({rotation:-4.8,x:91,y:99.4},0).wait(1).to({rotation:-4.2,x:91.8},0).wait(1).to({rotation:-3.6,x:92.6},0).wait(1).to({rotation:-3,x:93.4},0).wait(1).to({rotation:-2.3,x:94.2,y:99.3},0).wait(1).to({rotation:-1.7,x:95},0).wait(1).to({rotation:-1.1,x:95.8},0).wait(1).to({rotation:-0.5,x:96.6},0).wait(1).to({rotation:0.1,x:97.3},0).wait(1).to({rotation:0.8,x:98.1},0).wait(1).to({rotation:1.4,x:98.9,y:99.2},0).wait(1).to({rotation:2,x:99.7},0).wait(1).to({rotation:2.6,x:100.5},0).wait(1).to({rotation:3.2,x:101.3},0).wait(1).to({rotation:3.9,x:102.1,y:99.1},0).wait(1).to({rotation:4.5,x:102.9},0).wait(1).to({rotation:5.1,x:103.7},0).wait(1).to({rotation:5.7,x:104.4},0).wait(1).to({rotation:5.4,x:104,y:99},0).wait(1).to({rotation:5,x:103.5},0).wait(1).to({rotation:4.7,x:103.1},0).wait(1).to({rotation:4.3,x:102.6},0).wait(1).to({rotation:3.9,x:102.1},0).wait(1).to({rotation:3.6,x:101.6},0).wait(1).to({rotation:3.2,x:101.2,y:99.1},0).wait(1).to({rotation:2.9,x:100.7},0).wait(1).to({rotation:2.5,x:100.2},0).wait(1).to({rotation:2.1,x:99.8},0).wait(1).to({rotation:1.8,x:99.3},0).wait(1).to({rotation:1.4,x:98.9,y:99},0).wait(1).to({rotation:1.1,x:98.4},0).wait(1).to({rotation:0.7,x:97.9},0).wait(1).to({rotation:0.4,x:97.5},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.5},0).wait(1).to({rotation:0.8,x:98,y:99.1},0).wait(1).to({rotation:1.2,x:98.6},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2.8,x:100.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:3.6,x:101.6},0).wait(1).to({rotation:4,x:102.1,y:99},0).wait(1).to({rotation:3.6,x:101.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:2.8,x:100.6},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:1.2,x:98.6,y:99.1},0).wait(1).to({rotation:0.8,x:98},0).wait(1).to({rotation:0.4,x:97.5,y:99},0).wait(1).to({rotation:0,x:97},0).wait(1).to({rotation:0.4,x:97.5},0).wait(1).to({rotation:0.8,x:98,y:99.1},0).wait(1).to({rotation:1.2,x:98.6},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2.8,x:100.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:3.6,x:101.6},0).wait(1).to({rotation:4,x:102.1,y:99},0).wait(1).to({rotation:3.6,x:101.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:2.8,x:100.6},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:1.2,x:98.6,y:99.1},0).wait(1).to({rotation:0.8,x:98},0).wait(1).to({rotation:0.4,x:97.5,y:99},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.5},0).wait(1).to({rotation:0.8,x:98,y:99.1},0).wait(1).to({rotation:1.2,x:98.6},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2.8,x:100.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:3.6,x:101.6},0).wait(1).to({rotation:4,x:102.1,y:99},0).wait(1).to({rotation:3.6,x:101.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:2.8,x:100.6},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:1.2,x:98.6,y:99.1},0).wait(1).to({rotation:0.8,x:98},0).wait(1).to({rotation:0.4,x:97.5,y:99},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.4,x:97.5},0).wait(1).to({rotation:0.8,x:98,y:99.1},0).wait(1).to({rotation:1.2,x:98.6},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2.8,x:100.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:3.6,x:101.6},0).wait(1).to({rotation:4,x:102.1,y:99},0).wait(1).to({rotation:3.6,x:101.6,y:99.1},0).wait(1).to({rotation:3.2,x:101.1},0).wait(1).to({rotation:2.8,x:100.6},0).wait(1).to({rotation:2.4,x:100.1,y:99},0).wait(1).to({rotation:2,x:99.6,y:99.1},0).wait(1).to({rotation:1.6,x:99.1,y:99},0).wait(1).to({rotation:1.2,x:98.6,y:99.1},0).wait(1).to({rotation:0.8,x:98},0).wait(1).to({rotation:0.4,x:97.5,y:99},0).wait(1).to({rotation:0,x:97},0).wait(2).to({rotation:0.7,x:97.9,y:99.1},0).wait(1).to({rotation:1.3,x:98.8,y:99},0).wait(1).to({rotation:2,x:99.7},0).wait(1).to({rotation:2.6,x:100.7},0).wait(1).to({rotation:3.3,x:101.6},0).wait(1).to({rotation:3.9,x:102.4},0).wait(1).to({rotation:4.6,x:103.4,y:99.1},0).wait(1).to({rotation:5.2,x:104.3,y:99},0).wait(1).to({rotation:4.7,x:103.8},0).wait(1).to({rotation:4.1,x:103.2,y:99.1},0).wait(1).to({rotation:3.6,x:102.6,y:99},0).wait(1).to({rotation:3.1,x:102.1,y:99.1},0).wait(1).to({rotation:2.5,x:101.5},0).wait(1).to({rotation:2,x:101,y:99},0).wait(1).to({rotation:1.5,x:100.4},0).wait(1).to({rotation:0.9,x:99.9,y:99.1},0).wait(1).to({rotation:0.4,x:99.3},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1,x:97.7,y:99.1},0).wait(1).to({rotation:-1.8,x:96.5,y:99.2},0).wait(1).to({rotation:-2.6,x:95.3,y:99.3},0).wait(1).to({rotation:-3.4,x:94.2,y:99.4},0).wait(1).to({rotation:-4.2,x:93.1,y:99.5},0).wait(1).to({rotation:-5,x:91.9},0).wait(1).to({rotation:-5.8,x:90.8,y:99.7},0).wait(1).to({rotation:-6.6,x:89.6},0).wait(1).to({rotation:-7.4,x:88.5,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-7.2,x:88.6},0).wait(1).to({rotation:-6.2,x:89.9,y:99.8},0).wait(1).to({rotation:-5.2,x:91.1,y:99.9},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-3.1,x:93.7,y:99.8},0).wait(1).to({rotation:-2.1,x:95},0).wait(1).to({rotation:-1,x:96.3},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.7,x:97.9,y:99.1},0).wait(1).to({rotation:1.3,x:98.8,y:99},0).wait(1).to({rotation:2,x:99.7},0).wait(1).to({rotation:2.6,x:100.7},0).wait(1).to({rotation:3.3,x:101.6},0).wait(1).to({rotation:3.9,x:102.4},0).wait(1).to({rotation:4.6,x:103.4,y:99.1},0).wait(1).to({rotation:5.2,x:104.3,y:99},0).wait(1).to({rotation:4.7,x:103.8},0).wait(1).to({rotation:4.1,x:103.2,y:99.1},0).wait(1).to({rotation:3.6,x:102.6,y:99},0).wait(1).to({rotation:3.1,x:102.1,y:99.1},0).wait(1).to({rotation:2.5,x:101.5},0).wait(1).to({rotation:2,x:101,y:99},0).wait(1).to({rotation:1.5,x:100.4},0).wait(1).to({rotation:0.9,x:99.9,y:99.1},0).wait(1).to({rotation:0.4,x:99.3},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1,x:97.7,y:99.1},0).wait(1).to({rotation:-1.8,x:96.5,y:99.2},0).wait(1).to({rotation:-2.6,x:95.3,y:99.3},0).wait(1).to({rotation:-3.4,x:94.2,y:99.4},0).wait(1).to({rotation:-4.2,x:93.1,y:99.5},0).wait(1).to({rotation:-5,x:91.9},0).wait(1).to({rotation:-5.8,x:90.8,y:99.7},0).wait(1).to({rotation:-6.6,x:89.6},0).wait(1).to({rotation:-7.4,x:88.5,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-7.2,x:88.6},0).wait(1).to({rotation:-6.2,x:89.9,y:99.8},0).wait(1).to({rotation:-5.2,x:91.1,y:99.9},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-3.1,x:93.7,y:99.8},0).wait(1).to({rotation:-2.1,x:95},0).wait(1).to({rotation:-1,x:96.3},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.7,x:97.9,y:99.1},0).wait(1).to({rotation:1.3,x:98.8,y:99},0).wait(1).to({rotation:2,x:99.7},0).wait(1).to({rotation:2.6,x:100.7},0).wait(1).to({rotation:3.3,x:101.6},0).wait(1).to({rotation:3.9,x:102.4},0).wait(1).to({rotation:4.6,x:103.4,y:99.1},0).wait(1).to({rotation:5.2,x:104.3,y:99},0).wait(1).to({rotation:4.7,x:103.8},0).wait(1).to({rotation:4.1,x:103.2,y:99.1},0).wait(1).to({rotation:3.6,x:102.6,y:99},0).wait(1).to({rotation:3.1,x:102.1,y:99.1},0).wait(1).to({rotation:2.5,x:101.5},0).wait(1).to({rotation:2,x:101,y:99},0).wait(1).to({rotation:1.5,x:100.4},0).wait(1).to({rotation:0.9,x:99.9,y:99.1},0).wait(1).to({rotation:0.4,x:99.3},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1,x:97.7,y:99.1},0).wait(1).to({rotation:-1.8,x:96.5,y:99.2},0).wait(1).to({rotation:-2.6,x:95.3,y:99.3},0).wait(1).to({rotation:-3.4,x:94.2,y:99.4},0).wait(1).to({rotation:-4.2,x:93.1,y:99.5},0).wait(1).to({rotation:-5,x:91.9},0).wait(1).to({rotation:-5.8,x:90.8,y:99.7},0).wait(1).to({rotation:-6.6,x:89.6},0).wait(1).to({rotation:-7.4,x:88.5,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-7.2,x:88.6},0).wait(1).to({rotation:-6.2,x:89.9,y:99.8},0).wait(1).to({rotation:-5.2,x:91.1,y:99.9},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-3.1,x:93.7,y:99.8},0).wait(1).to({rotation:-2.1,x:95},0).wait(1).to({rotation:-1,x:96.3},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.9,x:98.2},0).wait(1).to({rotation:1.7,x:99.4,y:99.1},0).wait(1).to({rotation:2.6,x:100.7,y:99},0).wait(1).to({rotation:3.5,x:101.8,y:99.1},0).wait(1).to({rotation:4.3,x:103.1,y:99},0).wait(1).to({rotation:5.2,x:104.3},0).wait(1).to({rotation:4.5,x:103.6,y:99.1},0).wait(1).to({rotation:3.9,x:102.9,y:99},0).wait(1).to({rotation:3.2,x:102.2},0).wait(1).to({rotation:2.5,x:101.5,y:99.1},0).wait(1).to({rotation:1.9,x:100.8},0).wait(1).to({rotation:1.2,x:100.2},0).wait(1).to({rotation:0.5,x:99.4},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1.1,x:97.5,y:99.1},0).wait(1).to({rotation:-1.9,x:96.2,y:99.2},0).wait(1).to({rotation:-2.8,x:95,y:99.3},0).wait(1).to({rotation:-3.7,x:93.7,y:99.4},0).wait(1).to({rotation:-4.6,x:92.4,y:99.5},0).wait(1).to({rotation:-5.5,x:91.1,y:99.6},0).wait(1).to({rotation:-6.4,x:89.9,y:99.7},0).wait(1).to({rotation:-7.3,x:88.6,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-6.9,x:89},0).wait(1).to({rotation:-5.5,x:90.7},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-2.7,x:94.1},0).wait(1).to({rotation:-1.4,x:95.8,y:99.8},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.9,x:98.2},0).wait(1).to({rotation:1.7,x:99.4,y:99.1},0).wait(1).to({rotation:2.6,x:100.7,y:99},0).wait(1).to({rotation:3.5,x:101.8,y:99.1},0).wait(1).to({rotation:4.3,x:103.1,y:99},0).wait(1).to({rotation:5.2,x:104.3},0).wait(1).to({rotation:4.5,x:103.6,y:99.1},0).wait(1).to({rotation:3.9,x:102.9,y:99},0).wait(1).to({rotation:3.2,x:102.2},0).wait(1).to({rotation:2.5,x:101.5,y:99.1},0).wait(1).to({rotation:1.9,x:100.8},0).wait(1).to({rotation:1.2,x:100.2},0).wait(1).to({rotation:0.5,x:99.4},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1.1,x:97.5,y:99.1},0).wait(1).to({rotation:-1.9,x:96.2,y:99.2},0).wait(1).to({rotation:-2.8,x:95,y:99.3},0).wait(1).to({rotation:-3.7,x:93.7,y:99.4},0).wait(1).to({rotation:-4.6,x:92.4,y:99.5},0).wait(1).to({rotation:-5.5,x:91.1,y:99.6},0).wait(1).to({rotation:-6.4,x:89.9,y:99.7},0).wait(1).to({rotation:-7.3,x:88.6,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-6.9,x:89},0).wait(1).to({rotation:-5.5,x:90.7},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-2.7,x:94.1},0).wait(1).to({rotation:-1.4,x:95.8,y:99.8},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.9,x:98.2},0).wait(1).to({rotation:1.7,x:99.4,y:99.1},0).wait(1).to({rotation:2.6,x:100.7,y:99},0).wait(1).to({rotation:3.5,x:101.8,y:99.1},0).wait(1).to({rotation:4.3,x:103.1,y:99},0).wait(1).to({rotation:5.2,x:104.3},0).wait(1).to({rotation:4.5,x:103.6,y:99.1},0).wait(1).to({rotation:3.9,x:102.9,y:99},0).wait(1).to({rotation:3.2,x:102.2},0).wait(1).to({rotation:2.5,x:101.5,y:99.1},0).wait(1).to({rotation:1.9,x:100.8},0).wait(1).to({rotation:1.2,x:100.2},0).wait(1).to({rotation:0.5,x:99.4},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1.1,x:97.5,y:99.1},0).wait(1).to({rotation:-1.9,x:96.2,y:99.2},0).wait(1).to({rotation:-2.8,x:95,y:99.3},0).wait(1).to({rotation:-3.7,x:93.7,y:99.4},0).wait(1).to({rotation:-4.6,x:92.4,y:99.5},0).wait(1).to({rotation:-5.5,x:91.1,y:99.6},0).wait(1).to({rotation:-6.4,x:89.9,y:99.7},0).wait(1).to({rotation:-7.3,x:88.6,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-6.9,x:89},0).wait(1).to({rotation:-5.5,x:90.7},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-2.7,x:94.1},0).wait(1).to({rotation:-1.4,x:95.8,y:99.8},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.9,x:98.2},0).wait(1).to({rotation:1.7,x:99.4,y:99.1},0).wait(1).to({rotation:2.6,x:100.7,y:99},0).wait(1).to({rotation:3.5,x:101.8,y:99.1},0).wait(1).to({rotation:4.3,x:103.1,y:99},0).wait(1).to({rotation:5.2,x:104.3},0).wait(1).to({rotation:4.5,x:103.6,y:99.1},0).wait(1).to({rotation:3.9,x:102.9,y:99},0).wait(1).to({rotation:3.2,x:102.2},0).wait(1).to({rotation:2.5,x:101.5,y:99.1},0).wait(1).to({rotation:1.9,x:100.8},0).wait(1).to({rotation:1.2,x:100.2},0).wait(1).to({rotation:0.5,x:99.4},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1.1,x:97.5,y:99.1},0).wait(1).to({rotation:-1.9,x:96.2,y:99.2},0).wait(1).to({rotation:-2.8,x:95,y:99.3},0).wait(1).to({rotation:-3.7,x:93.7,y:99.4},0).wait(1).to({rotation:-4.6,x:92.4,y:99.5},0).wait(1).to({rotation:-5.5,x:91.1,y:99.6},0).wait(1).to({rotation:-6.4,x:89.9,y:99.7},0).wait(1).to({rotation:-7.3,x:88.6,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-6.9,x:89},0).wait(1).to({rotation:-5.5,x:90.7},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-2.7,x:94.1},0).wait(1).to({rotation:-1.4,x:95.8,y:99.8},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({x:97,y:99},0).wait(1).to({rotation:0.9,x:98.2},0).wait(1).to({rotation:1.7,x:99.4,y:99.1},0).wait(1).to({rotation:2.6,x:100.7,y:99},0).wait(1).to({rotation:3.5,x:101.8,y:99.1},0).wait(1).to({rotation:4.3,x:103.1,y:99},0).wait(1).to({rotation:5.2,x:104.3},0).wait(1).to({rotation:4.5,x:103.6,y:99.1},0).wait(1).to({rotation:3.9,x:102.9,y:99},0).wait(1).to({rotation:3.2,x:102.2},0).wait(1).to({rotation:2.5,x:101.5,y:99.1},0).wait(1).to({rotation:1.9,x:100.8},0).wait(1).to({rotation:1.2,x:100.2},0).wait(1).to({rotation:0.5,x:99.4},0).wait(1).to({rotation:-0.2,x:98.7,y:99},0).wait(1).to({rotation:-1.1,x:97.5,y:99.1},0).wait(1).to({rotation:-1.9,x:96.2,y:99.2},0).wait(1).to({rotation:-2.8,x:95,y:99.3},0).wait(1).to({rotation:-3.7,x:93.7,y:99.4},0).wait(1).to({rotation:-4.6,x:92.4,y:99.5},0).wait(1).to({rotation:-5.5,x:91.1,y:99.6},0).wait(1).to({rotation:-6.4,x:89.9,y:99.7},0).wait(1).to({rotation:-7.3,x:88.6,y:99.8},0).wait(1).to({rotation:-8.2,x:87.3,y:99.9},0).wait(1).to({rotation:-6.9,x:89},0).wait(1).to({rotation:-5.5,x:90.7},0).wait(1).to({rotation:-4.1,x:92.4},0).wait(1).to({rotation:-2.7,x:94.1},0).wait(1).to({rotation:-1.4,x:95.8,y:99.8},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({regY:175.1,y:175.9},0).wait(1).to({regY:99,rotation:0.3,x:97.8,y:99.8},0).wait(1).to({rotation:0.6,x:98.2},0).wait(1).to({rotation:0.9,x:98.6,y:99.9},0).wait(1).to({rotation:1.1,x:99},0).wait(1).to({rotation:1.4,x:99.3},0).wait(1).to({rotation:1.7,x:99.8},0).wait(1).to({rotation:2,x:100.1},0).wait(1).to({rotation:2.3,x:100.5},0).wait(1).to({rotation:2.6,x:100.9},0).wait(1).to({rotation:2.9,x:101.3},0).wait(1).to({rotation:3.2,x:101.6,y:100},0).wait(1).to({rotation:3.4,x:102,y:99.9},0).wait(1).to({rotation:3.7,x:102.4,y:100},0).wait(1).to({rotation:4,x:102.7},0).wait(1).to({rotation:4.3,x:103.2},0).wait(1).to({rotation:4.6,x:103.6,y:100.1},0).wait(1).to({rotation:4.9,x:103.9},0).wait(1).to({rotation:5.2,x:104.3,y:100.2},0).wait(1).to({rotation:5.4,x:104.7},0).wait(1).to({rotation:5.7,x:105},0).wait(1).to({rotation:5.2,x:104.3},0).wait(1).to({rotation:4.6,x:103.6,y:100.1},0).wait(1).to({rotation:4,x:102.7,y:100},0).wait(1).to({rotation:3.4,x:102,y:99.9},0).wait(1).to({rotation:2.9,x:101.3},0).wait(1).to({rotation:2.3,x:100.5},0).wait(1).to({rotation:1.7,x:99.8},0).wait(1).to({rotation:1.1,x:99},0).wait(1).to({rotation:0.6,x:98.2,y:99.8},0).wait(1).to({rotation:0,x:97.5},0).wait(1).to({rotation:-0.6,x:96.8},0).wait(1).to({rotation:-1.1,x:96},0).wait(1).to({rotation:-1.7,x:95.2},0).wait(1).to({rotation:-2.3,x:94.5,y:99.9},0).wait(1).to({rotation:-2.9,x:93.8},0).wait(1).to({rotation:-3.4,x:93},0).wait(1).to({rotation:-4,x:92.2,y:100},0).wait(1).to({rotation:-4.6,x:91.5,y:100.1},0).wait(1).to({rotation:-5.1,x:90.7},0).wait(1).to({rotation:-5.7,x:89.9,y:100.2},0).wait(1).to({rotation:-5.5,x:90.2,y:100.1},0).wait(1).to({rotation:-5.2,x:90.6},0).wait(1).to({rotation:-5,x:90.9},0).wait(1).to({rotation:-4.7,x:91.2,y:100},0).wait(1).to({rotation:-4.5,x:91.6,y:100.1},0).wait(1).to({rotation:-4.2,x:91.9,y:100},0).wait(1).to({rotation:-4,x:92.2},0).wait(1).to({rotation:-3.7,x:92.5},0).wait(1).to({rotation:-3.5,x:92.9,y:99.9},0).wait(1).to({rotation:-3.2,x:93.2},0).wait(1).to({rotation:-3,x:93.5},0).wait(1).to({rotation:-2.8,x:93.8},0).wait(1).to({rotation:-2.5,x:94.2},0).wait(1).to({rotation:-2.3,x:94.5,y:99.8},0).wait(1).to({rotation:-2,x:94.9,y:99.9},0).wait(1).to({rotation:-1.8,x:95.1,y:99.8},0).wait(1).to({rotation:-1.5,x:95.5},0).wait(1).to({rotation:-1.3,x:95.8},0).wait(1).to({rotation:-1,x:96.2},0).wait(1).to({rotation:-0.8,x:96.5},0).wait(1).to({rotation:-0.2,x:97.2},0).wait(1).to({rotation:0.4,x:98},0).wait(1).to({rotation:1,x:98.8,y:99.9},0).wait(1).to({rotation:1.6,x:99.6},0).wait(1).to({rotation:2.2,x:100.4},0).wait(1).to({rotation:2.8,x:101.2},0).wait(1).to({rotation:3.4,x:102,y:100},0).wait(1).to({rotation:4,x:102.8},0).wait(1).to({rotation:4.6,x:103.6,y:100.1},0).wait(1).to({rotation:5.2,x:104.4,y:100.2},0).wait(1).to({rotation:5.8,x:105.2,y:100.3},0).wait(1).to({rotation:6.4,x:106},0).wait(1).to({rotation:7,x:106.8,y:100.4},0).wait(1).to({rotation:7.6,x:107.6,y:100.5},0).wait(1).to({rotation:8.2,x:108.4,y:100.7},0).wait(1).to({rotation:7.7,x:107.6,y:100.5},0).wait(1).to({rotation:7.1,x:106.8,y:100.4},0).wait(1).to({rotation:6.5,x:106.1,y:100.3},0).wait(1).to({rotation:5.9,x:105.3,y:100.2},0).wait(1).to({rotation:5.3,x:104.6},0).wait(1).to({rotation:4.8,x:103.8,y:100.1},0).wait(1).to({rotation:4.2,x:103,y:100},0).wait(1).to({rotation:3.6,x:102.2},0).wait(1).to({rotation:3,x:101.4,y:99.9},0).wait(1).to({rotation:2.4,x:100.7},0).wait(1).to({rotation:1.9,x:99.9},0).wait(1).to({rotation:1.3,x:99.1},0).wait(1).to({rotation:0.7,x:98.4},0).wait(1).to({rotation:0.1,x:97.6,y:99.8},0).wait(1).to({rotation:-0.4,x:96.9},0).wait(2).to({x:97},0).wait(2).to({rotation:-0.3},0).wait(1).to({x:97.1},0).wait(3).to({x:97.2},0).wait(1).to({rotation:-0.2},0).wait(3).to({x:97.3},0).wait(1).to({rotation:-0.1},0).wait(4).to({rotation:0,x:97.4},0).wait(2).to({x:97.5},0).wait(1).to({regY:175.1,y:175.9},0).wait(1).to({regY:99,rotation:-0.9,x:96.4,y:99.8},0).wait(1).to({rotation:-1.7,x:95.2},0).wait(1).to({rotation:-2.6,x:94.1,y:99.9},0).wait(1).to({rotation:-3.4,x:92.9},0).wait(1).to({rotation:-4.3,x:91.8,y:100},0).wait(1).to({rotation:-5.2,x:90.6,y:100.1},0).wait(1).to({rotation:-6,x:89.5,y:100.2},0).wait(1).to({rotation:-6.9,x:88.4,y:100.3},0).wait(1).to({rotation:-7.7,x:87.2,y:100.5},0).wait(1).to({rotation:-6.5,x:88.9,y:100.3},0).wait(1).to({rotation:-5.2,x:90.6,y:100.1},0).wait(1).to({rotation:-3.9,x:92.2,y:99.9},0).wait(1).to({rotation:-2.7,x:94},0).wait(1).to({rotation:-1.4,x:95.6,y:99.8},0).wait(1).to({rotation:-0.2,x:97.3},0).wait(1).to({rotation:1.1,x:99,y:99.9},0).wait(1).to({rotation:2.4,x:100.6},0).wait(1).to({rotation:3.6,x:102.3,y:100},0).wait(1).to({rotation:4.9,x:104,y:100.1},0).wait(1).to({rotation:4.4,x:103.3},0).wait(1).to({rotation:3.9,x:102.6,y:100},0).wait(1).to({rotation:3.4,x:102},0).wait(1).to({rotation:2.9,x:101.3,y:99.9},0).wait(1).to({rotation:2.5,x:100.7},0).wait(1).to({rotation:2,x:100.1},0).wait(1).to({rotation:1.5,x:99.4},0).wait(1).to({rotation:1,x:98.8},0).wait(1).to({rotation:0.5,x:98.1},0).wait(1).to({rotation:0,x:97.5,y:99.8},0).wait(1));

	// body
	this.instance_13 = new lib.body_7();
	this.instance_13.parent = this;
	this.instance_13.setTransform(97,249.5,1,1,0,0,0,44,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,349);


(lib.forward_tree_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_4 = new lib.ベクトルスマートオブジェクト_19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(256,189,1,1,0,0,0,256,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(36).to({rotation:1.6},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:9.7,y:189.1},0).wait(1).to({rotation:8.1,y:189},0).wait(1).to({rotation:6.5,y:189.1},0).wait(1).to({rotation:4.9,y:189},0).wait(1).to({rotation:3.2,y:189.1},0).wait(1).to({rotation:1.6,y:189},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-4,x:256.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-6.7,x:256},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-5.3,x:256.1},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-2.7,x:256},0).wait(1).to({rotation:-1.3,x:256.1},0).wait(1).to({rotation:0,x:256},0).wait(1));

	// ベクトルスマートオブジェクト_3
	this.instance_5 = new lib.ベクトルスマートオブジェクト_3_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(277.5,512,1,1,0,0,0,112.5,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(531));

	// ベクトルスマートオブジェクト_2
	this.instance_6 = new lib.ベクトルスマートオブジェクト_2_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1571,194,1,1,0,0,0,256,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(36).to({rotation:-1.2},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,y:194},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:194.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1,y:194},0).wait(1).to({rotation:0},0).wait(1));

	// ベクトルスマートオブジェクト_1
	this.instance_7 = new lib.ベクトルスマートオブジェクト_1_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1572,514,1,1,0,0,0,112,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(531));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1827,817);


(lib.flower_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower
	this.instance_1 = new lib.flowerコピー();
	this.instance_1.parent = this;
	this.instance_1.setTransform(666,79,1,1,0,0,0,666,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower_3, new cjs.Rectangle(0,0,1332,158), null);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_20();
	this.instance.parent = this;
	this.instance.setTransform(184.5,43.5,1,1,0,0,0,184.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_1, new cjs.Rectangle(0,0,369,87), null);


(lib.ベクトルスマートオブジェクト_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_14 = new lib.ベクトルスマートオブジェクト_7();
	this.instance_14.parent = this;
	this.instance_14.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// ベクトルスマートオブジェクト's Drop Shadow
	this.instance_15 = new lib.ベクトルスマートオブジェクトsDropShadow_6();
	this.instance_15.parent = this;
	this.instance_15.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_26, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_1 = new lib.ベクトルスマートオブジェクト_26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_2, new cjs.Rectangle(0,0,1372,138), null);


(lib.ベクトルスマートオブジェクト_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_16 = new lib.ベクトルスマートオブジェクト_6();
	this.instance_16.parent = this;
	this.instance_16.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// ベクトルスマートオブジェクト's Drop Shadow
	this.instance_17 = new lib.ベクトルスマートオブジェクトsDropShadow_7();
	this.instance_17.parent = this;
	this.instance_17.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_27, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance_1 = new lib.ベクトルスマートオブジェクト_27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686,69,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,1372,138), null);


(lib.bg1コピー_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance_2 = new lib.bg1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg1's Drop Shadow
	this.instance_3 = new lib.bg1sDropShadow_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(686,27.5,1,1,0,0,0,686,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1コピー_1, new cjs.Rectangle(0,0,1372,55), null);


(lib.bg1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance_2 = new lib.bg1コピー_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(686,27.5,1,1,0,0,0,686,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_5, new cjs.Rectangle(0,0,1372,55), null);


(lib.bg_tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_21();
	this.instance.parent = this;
	this.instance.setTransform(558,276.5,1,1,0,0,0,558,276.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_tree, new cjs.Rectangle(0,0,1116,553), null);


(lib.rightHand_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance_4 = new lib.rightHand_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// rightHand's Outer Glow
	this.instance_5 = new lib.rightHandsOuterGlow_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(36,48,1,1,0,0,0,36,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightHand_9, new cjs.Rectangle(0,0,72,96), null);


(lib.leftHand_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leftHand
	this.instance_4 = new lib.leftHand_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// leftHand's Outer Glow
	this.instance_5 = new lib.leftHandsOuterGlow_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(35.5,46.5,1,1,0,0,0,35.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftHand_9, new cjs.Rectangle(0,0,71,93), null);


(lib.bear = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance = new lib.rightHand_9();
	this.instance.parent = this;
	this.instance.setTransform(299,194.9,1,1,0,0,0,52,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:36,regY:48,rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({regX:52.1,regY:21.4,x:299.1,y:196.4},0).wait(1).to({regX:36,regY:48,scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleY:0.07,rotation:-21,x:284.7,y:203.9},0).wait(1).to({scaleY:0.07,rotation:0,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:1,skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({skewX:136,skewY:-44,x:269.1,y:188.5},0).wait(1).to({skewX:137.1,skewY:-42.9,x:269.3,y:187.9},0).wait(1).to({skewX:138.2,skewY:-41.8,x:269.4,y:187.4},0).wait(1).to({skewX:139.2,skewY:-40.8,x:269.6,y:186.8},0).wait(1).to({skewX:140.3,skewY:-39.7,x:269.8,y:186.3},0).wait(1).to({skewX:141.4,skewY:-38.6,x:270,y:185.7},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:143.5,skewY:-36.5,x:270.4,y:184.6},0).wait(1).to({skewX:144.6,skewY:-35.4,x:270.6,y:184.1},0).wait(1).to({skewX:145.6,skewY:-34.4,x:270.8,y:183.6},0).wait(1).to({skewX:146.7,skewY:-33.3,x:271.1,y:183.1},0).wait(1).to({skewX:147.8,skewY:-32.2,x:271.4,y:182.5},0).wait(1).to({skewX:148.8,skewY:-31.2,x:271.6,y:182.1},0).wait(1).to({skewX:149.9,skewY:-30.1,x:271.9,y:181.6},0).wait(1).to({skewX:149,skewY:-31,x:271.7,y:182},0).wait(1).to({skewX:148,skewY:-32,x:271.4,y:182.4},0).wait(1).to({skewX:147.1,skewY:-32.9,x:271.2,y:182.9},0).wait(1).to({skewX:146.2,skewY:-33.8,x:271,y:183.4},0).wait(1).to({skewX:145.2,skewY:-34.8,x:270.8,y:183.8},0).wait(1).to({skewX:144.3,skewY:-35.7,x:270.5,y:184.3},0).wait(1).to({skewX:143.4,skewY:-36.6,x:270.4,y:184.8},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:141.5,skewY:-38.5,x:270,y:185.7},0).wait(1).to({skewX:140.6,skewY:-39.4,x:269.8,y:186.2},0).wait(1).to({skewX:139.6,skewY:-40.4,x:269.7,y:186.6},0).wait(1).to({skewX:138.7,skewY:-41.3,x:269.5,y:187.1},0).wait(1).to({skewX:137.8,skewY:-42.2,x:269.3,y:187.6},0).wait(1).to({skewX:136.8,skewY:-43.2,x:269.2,y:188.1},0).wait(1).to({skewX:135.9,skewY:-44.1,x:269.1,y:188.6},0).wait(1).to({skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.07,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.07,rotation:-21,skewX:0,skewY:0,x:284.7,y:203.9},0).wait(1).to({scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:1,rotation:0,x:283,y:223},0).wait(1).to({regX:52,regY:19.9,x:299,y:194.9},0).wait(1).to({regX:36,regY:48,rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({regX:52.1,regY:21.4,x:299.1,y:196.4},0).wait(1).to({regX:36,regY:48,scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleY:0.07,rotation:-21,x:284.7,y:203.9},0).wait(1).to({scaleY:0.07,rotation:0,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:1,skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({skewX:136,skewY:-44,x:269.1,y:188.5},0).wait(1).to({skewX:137.1,skewY:-42.9,x:269.3,y:187.9},0).wait(1).to({skewX:138.2,skewY:-41.8,x:269.4,y:187.4},0).wait(1).to({skewX:139.2,skewY:-40.8,x:269.6,y:186.8},0).wait(1).to({skewX:140.3,skewY:-39.7,x:269.8,y:186.3},0).wait(1).to({skewX:141.4,skewY:-38.6,x:270,y:185.7},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:143.5,skewY:-36.5,x:270.4,y:184.6},0).wait(1).to({skewX:144.6,skewY:-35.4,x:270.6,y:184.1},0).wait(1).to({skewX:145.6,skewY:-34.4,x:270.8,y:183.6},0).wait(1).to({skewX:146.7,skewY:-33.3,x:271.1,y:183.1},0).wait(1).to({skewX:147.8,skewY:-32.2,x:271.4,y:182.5},0).wait(1).to({skewX:148.8,skewY:-31.2,x:271.6,y:182.1},0).wait(1).to({skewX:149.9,skewY:-30.1,x:271.9,y:181.6},0).wait(1).to({skewX:149,skewY:-31,x:271.7,y:182},0).wait(1).to({skewX:148,skewY:-32,x:271.4,y:182.4},0).wait(1).to({skewX:147.1,skewY:-32.9,x:271.2,y:182.9},0).wait(1).to({skewX:146.2,skewY:-33.8,x:271,y:183.4},0).wait(1).to({skewX:145.2,skewY:-34.8,x:270.8,y:183.8},0).wait(1).to({skewX:144.3,skewY:-35.7,x:270.5,y:184.3},0).wait(1).to({skewX:143.4,skewY:-36.6,x:270.4,y:184.8},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:141.5,skewY:-38.5,x:270,y:185.7},0).wait(1).to({skewX:140.6,skewY:-39.4,x:269.8,y:186.2},0).wait(1).to({skewX:139.6,skewY:-40.4,x:269.7,y:186.6},0).wait(1).to({skewX:138.7,skewY:-41.3,x:269.5,y:187.1},0).wait(1).to({skewX:137.8,skewY:-42.2,x:269.3,y:187.6},0).wait(1).to({skewX:136.8,skewY:-43.2,x:269.2,y:188.1},0).wait(1).to({skewX:135.9,skewY:-44.1,x:269.1,y:188.6},0).wait(1).to({skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.07,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.07,rotation:-21,skewX:0,skewY:0,x:284.7,y:203.9},0).wait(1).to({scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:1,rotation:0,x:283,y:223},0).wait(1).to({regX:52,regY:19.9,x:299,y:194.9},0).wait(1).to({regX:36,regY:48,rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({regX:52.1,regY:21.4,x:299.1,y:196.4},0).wait(1).to({regX:36,regY:48,scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleY:0.07,rotation:-21,x:284.7,y:203.9},0).wait(1).to({scaleY:0.07,rotation:0,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:1,skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({skewX:136,skewY:-44,x:269.1,y:188.5},0).wait(1).to({skewX:137.1,skewY:-42.9,x:269.3,y:187.9},0).wait(1).to({skewX:138.2,skewY:-41.8,x:269.4,y:187.4},0).wait(1).to({skewX:139.2,skewY:-40.8,x:269.6,y:186.8},0).wait(1).to({skewX:140.3,skewY:-39.7,x:269.8,y:186.3},0).wait(1).to({skewX:141.4,skewY:-38.6,x:270,y:185.7},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:143.5,skewY:-36.5,x:270.4,y:184.6},0).wait(1).to({skewX:144.6,skewY:-35.4,x:270.6,y:184.1},0).wait(1).to({skewX:145.6,skewY:-34.4,x:270.8,y:183.6},0).wait(1).to({skewX:146.7,skewY:-33.3,x:271.1,y:183.1},0).wait(1).to({skewX:147.8,skewY:-32.2,x:271.4,y:182.5},0).wait(1).to({skewX:148.8,skewY:-31.2,x:271.6,y:182.1},0).wait(1).to({skewX:149.9,skewY:-30.1,x:271.9,y:181.6},0).wait(1).to({skewX:149,skewY:-31,x:271.7,y:182},0).wait(1).to({skewX:148,skewY:-32,x:271.4,y:182.4},0).wait(1).to({skewX:147.1,skewY:-32.9,x:271.2,y:182.9},0).wait(1).to({skewX:146.2,skewY:-33.8,x:271,y:183.4},0).wait(1).to({skewX:145.2,skewY:-34.8,x:270.8,y:183.8},0).wait(1).to({skewX:144.3,skewY:-35.7,x:270.5,y:184.3},0).wait(1).to({skewX:143.4,skewY:-36.6,x:270.4,y:184.8},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:141.5,skewY:-38.5,x:270,y:185.7},0).wait(1).to({skewX:140.6,skewY:-39.4,x:269.8,y:186.2},0).wait(1).to({skewX:139.6,skewY:-40.4,x:269.7,y:186.6},0).wait(1).to({skewX:138.7,skewY:-41.3,x:269.5,y:187.1},0).wait(1).to({skewX:137.8,skewY:-42.2,x:269.3,y:187.6},0).wait(1).to({skewX:136.8,skewY:-43.2,x:269.2,y:188.1},0).wait(1).to({skewX:135.9,skewY:-44.1,x:269.1,y:188.6},0).wait(1).to({skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.07,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.07,rotation:-21,skewX:0,skewY:0,x:284.7,y:203.9},0).wait(1).to({scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:1,rotation:0,x:283,y:223},0).wait(1).to({regX:52,regY:19.9,x:299,y:194.9},0).wait(1).to({regX:36,regY:48,rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({rotation:3,x:281.6,y:222.2},0).wait(1).to({rotation:6,x:280.2,y:221.2},0).wait(1).to({rotation:9,x:278.8,y:220.2},0).wait(1).to({rotation:12,x:277.5,y:219.1},0).wait(1).to({rotation:15,x:276.3,y:217.9},0).wait(1).to({rotation:18,x:275.1,y:216.7},0).wait(1).to({rotation:21,x:274,y:215.4},0).wait(1).to({rotation:24,x:273,y:214.1},0).wait(1).to({rotation:27,x:272,y:212.7},0).wait(1).to({rotation:30,x:271.1,y:211.2},0).wait(1).to({rotation:26.7,x:272.1,y:212.8},0).wait(1).to({rotation:23.3,x:273.2,y:214.3},0).wait(1).to({rotation:20,x:274.4,y:215.8},0).wait(1).to({rotation:16.7,x:275.7,y:217.2},0).wait(1).to({rotation:13.3,x:277,y:218.5},0).wait(1).to({rotation:10,x:278.4,y:219.8},0).wait(1).to({rotation:6.7,x:279.9,y:220.9},0).wait(1).to({rotation:3.3,x:281.4,y:222},0).wait(1).to({rotation:0,x:283,y:223},0).wait(1).to({regX:52.1,regY:21.4,x:299.1,y:196.4},0).wait(1).to({regX:36,regY:48,scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleY:0.07,rotation:-21,x:284.7,y:203.9},0).wait(1).to({scaleY:0.07,rotation:0,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:1,skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({skewX:136,skewY:-44,x:269.1,y:188.5},0).wait(1).to({skewX:137.1,skewY:-42.9,x:269.3,y:187.9},0).wait(1).to({skewX:138.2,skewY:-41.8,x:269.4,y:187.4},0).wait(1).to({skewX:139.2,skewY:-40.8,x:269.6,y:186.8},0).wait(1).to({skewX:140.3,skewY:-39.7,x:269.8,y:186.3},0).wait(1).to({skewX:141.4,skewY:-38.6,x:270,y:185.7},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:143.5,skewY:-36.5,x:270.4,y:184.6},0).wait(1).to({skewX:144.6,skewY:-35.4,x:270.6,y:184.1},0).wait(1).to({skewX:145.6,skewY:-34.4,x:270.8,y:183.6},0).wait(1).to({skewX:146.7,skewY:-33.3,x:271.1,y:183.1},0).wait(1).to({skewX:147.8,skewY:-32.2,x:271.4,y:182.5},0).wait(1).to({skewX:148.8,skewY:-31.2,x:271.6,y:182.1},0).wait(1).to({skewX:149.9,skewY:-30.1,x:271.9,y:181.6},0).wait(1).to({skewX:149,skewY:-31,x:271.7,y:182},0).wait(1).to({skewX:148,skewY:-32,x:271.4,y:182.4},0).wait(1).to({skewX:147.1,skewY:-32.9,x:271.2,y:182.9},0).wait(1).to({skewX:146.2,skewY:-33.8,x:271,y:183.4},0).wait(1).to({skewX:145.2,skewY:-34.8,x:270.8,y:183.8},0).wait(1).to({skewX:144.3,skewY:-35.7,x:270.5,y:184.3},0).wait(1).to({skewX:143.4,skewY:-36.6,x:270.4,y:184.8},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:141.5,skewY:-38.5,x:270,y:185.7},0).wait(1).to({skewX:140.6,skewY:-39.4,x:269.8,y:186.2},0).wait(1).to({skewX:139.6,skewY:-40.4,x:269.7,y:186.6},0).wait(1).to({skewX:138.7,skewY:-41.3,x:269.5,y:187.1},0).wait(1).to({skewX:137.8,skewY:-42.2,x:269.3,y:187.6},0).wait(1).to({skewX:136.8,skewY:-43.2,x:269.2,y:188.1},0).wait(1).to({skewX:135.9,skewY:-44.1,x:269.1,y:188.6},0).wait(1).to({skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.07,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.07,rotation:-21,skewX:0,skewY:0,x:284.7,y:203.9},0).wait(1).to({scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:1,rotation:0,x:283,y:223},0).wait(1).to({regX:52.1,regY:21.4,x:299.1,y:196.4},0).wait(1).to({regX:36,regY:48,scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleY:0.07,rotation:-21,x:284.7,y:203.9},0).wait(1).to({scaleY:0.07,rotation:0,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:1,skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({skewX:136,skewY:-44,x:269.1,y:188.5},0).wait(1).to({skewX:137.1,skewY:-42.9,x:269.3,y:187.9},0).wait(1).to({skewX:138.2,skewY:-41.8,x:269.4,y:187.4},0).wait(1).to({skewX:139.2,skewY:-40.8,x:269.6,y:186.8},0).wait(1).to({skewX:140.3,skewY:-39.7,x:269.8,y:186.3},0).wait(1).to({skewX:141.4,skewY:-38.6,x:270,y:185.7},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:143.5,skewY:-36.5,x:270.4,y:184.6},0).wait(1).to({skewX:144.6,skewY:-35.4,x:270.6,y:184.1},0).wait(1).to({skewX:145.6,skewY:-34.4,x:270.8,y:183.6},0).wait(1).to({skewX:146.7,skewY:-33.3,x:271.1,y:183.1},0).wait(1).to({skewX:147.8,skewY:-32.2,x:271.4,y:182.5},0).wait(1).to({skewX:148.8,skewY:-31.2,x:271.6,y:182.1},0).wait(1).to({skewX:149.9,skewY:-30.1,x:271.9,y:181.6},0).wait(1).to({skewX:149,skewY:-31,x:271.7,y:182},0).wait(1).to({skewX:148,skewY:-32,x:271.4,y:182.4},0).wait(1).to({skewX:147.1,skewY:-32.9,x:271.2,y:182.9},0).wait(1).to({skewX:146.2,skewY:-33.8,x:271,y:183.4},0).wait(1).to({skewX:145.2,skewY:-34.8,x:270.8,y:183.8},0).wait(1).to({skewX:144.3,skewY:-35.7,x:270.5,y:184.3},0).wait(1).to({skewX:143.4,skewY:-36.6,x:270.4,y:184.8},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:141.5,skewY:-38.5,x:270,y:185.7},0).wait(1).to({skewX:140.6,skewY:-39.4,x:269.8,y:186.2},0).wait(1).to({skewX:139.6,skewY:-40.4,x:269.7,y:186.6},0).wait(1).to({skewX:138.7,skewY:-41.3,x:269.5,y:187.1},0).wait(1).to({skewX:137.8,skewY:-42.2,x:269.3,y:187.6},0).wait(1).to({skewX:136.8,skewY:-43.2,x:269.2,y:188.1},0).wait(1).to({skewX:135.9,skewY:-44.1,x:269.1,y:188.6},0).wait(1).to({skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.07,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.07,rotation:-21,skewX:0,skewY:0,x:284.7,y:203.9},0).wait(1).to({scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:1,rotation:0,x:283,y:223},0).wait(1).to({regX:52.1,regY:21.4,x:299.1,y:196.4},0).wait(1).to({regX:36,regY:48,scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleY:0.07,rotation:-21,x:284.7,y:203.9},0).wait(1).to({scaleY:0.07,rotation:0,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:1,skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({skewX:136,skewY:-44,x:269.1,y:188.5},0).wait(1).to({skewX:137.1,skewY:-42.9,x:269.3,y:187.9},0).wait(1).to({skewX:138.2,skewY:-41.8,x:269.4,y:187.4},0).wait(1).to({skewX:139.2,skewY:-40.8,x:269.6,y:186.8},0).wait(1).to({skewX:140.3,skewY:-39.7,x:269.8,y:186.3},0).wait(1).to({skewX:141.4,skewY:-38.6,x:270,y:185.7},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:143.5,skewY:-36.5,x:270.4,y:184.6},0).wait(1).to({skewX:144.6,skewY:-35.4,x:270.6,y:184.1},0).wait(1).to({skewX:145.6,skewY:-34.4,x:270.8,y:183.6},0).wait(1).to({skewX:146.7,skewY:-33.3,x:271.1,y:183.1},0).wait(1).to({skewX:147.8,skewY:-32.2,x:271.4,y:182.5},0).wait(1).to({skewX:148.8,skewY:-31.2,x:271.6,y:182.1},0).wait(1).to({skewX:149.9,skewY:-30.1,x:271.9,y:181.6},0).wait(1).to({skewX:149,skewY:-31,x:271.7,y:182},0).wait(1).to({skewX:148,skewY:-32,x:271.4,y:182.4},0).wait(1).to({skewX:147.1,skewY:-32.9,x:271.2,y:182.9},0).wait(1).to({skewX:146.2,skewY:-33.8,x:271,y:183.4},0).wait(1).to({skewX:145.2,skewY:-34.8,x:270.8,y:183.8},0).wait(1).to({skewX:144.3,skewY:-35.7,x:270.5,y:184.3},0).wait(1).to({skewX:143.4,skewY:-36.6,x:270.4,y:184.8},0).wait(1).to({skewX:142.4,skewY:-37.6,x:270.2,y:185.2},0).wait(1).to({skewX:141.5,skewY:-38.5,x:270,y:185.7},0).wait(1).to({skewX:140.6,skewY:-39.4,x:269.8,y:186.2},0).wait(1).to({skewX:139.6,skewY:-40.4,x:269.7,y:186.6},0).wait(1).to({skewX:138.7,skewY:-41.3,x:269.5,y:187.1},0).wait(1).to({skewX:137.8,skewY:-42.2,x:269.3,y:187.6},0).wait(1).to({skewX:136.8,skewY:-43.2,x:269.2,y:188.1},0).wait(1).to({skewX:135.9,skewY:-44.1,x:269.1,y:188.6},0).wait(1).to({skewX:135,skewY:-45,x:269,y:189.1},0).wait(1).to({scaleY:0.87,skewX:138,skewY:-42,x:271.8,y:190.1},0).wait(1).to({scaleY:0.73,skewX:141,skewY:-39,x:274.4,y:191.4},0).wait(1).to({scaleY:0.6,skewX:144,skewY:-36,x:276.8,y:193},0).wait(1).to({scaleY:0.47,skewX:147,skewY:-33,x:278.9,y:194.8},0).wait(1).to({scaleY:0.33,skewX:150,skewY:-30,x:280.7,y:196.8},0).wait(1).to({scaleY:0.2,skewX:153,skewY:-27,x:282.4,y:199},0).wait(1).to({scaleY:0.07,skewX:156,skewY:-24,x:283.7,y:201.4},0).wait(1).to({scaleY:0.07,rotation:-21,skewX:0,skewY:0,x:284.7,y:203.9},0).wait(1).to({scaleY:0.2,rotation:-18,x:285.5,y:206.5},0).wait(1).to({scaleX:1,scaleY:0.33,rotation:-15,x:285.8,y:209.2},0).wait(1).to({scaleY:0.47,rotation:-12,x:285.9,y:211.9},0).wait(1).to({scaleY:0.6,rotation:-9,x:285.7,y:214.7},0).wait(1).to({scaleY:0.73,rotation:-6,x:285.1,y:217.5},0).wait(1).to({scaleY:0.87,rotation:-3,x:284.3,y:220.3},0).wait(1).to({scaleY:1,rotation:0,x:283,y:223},0).wait(1));

	// leftHand
	this.instance_1 = new lib.leftHand_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.5,199.4,1,1,0,0,0,17.5,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:35.5,regY:46.5,rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:19.4,regY:22.4,x:346.4,y:198.4},0).wait(1).to({regX:35.5,regY:46.5,scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.6,rotation:2.5,x:361.8,y:213.6},0).wait(1).to({scaleY:0.47,rotation:3.3,y:210.6},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:5.7,x:362.3,y:201.7},0).wait(1).to({scaleY:0.07,rotation:0,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:1,skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({skewX:-166.7,skewY:13.3,x:367.6,y:178.8},0).wait(1).to({skewX:-165.6,skewY:14.4,x:368,y:179.1},0).wait(1).to({skewX:-164.5,skewY:15.5,x:368.3,y:179.6},0).wait(1).to({skewX:-163.5,skewY:16.5,x:368.6,y:180},0).wait(1).to({skewX:-162.4,skewY:17.6,x:369,y:180.4},0).wait(1).to({skewX:-161.3,skewY:18.7,x:369.4,y:180.8},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-159.2,skewY:20.8,x:370,y:181.7},0).wait(1).to({skewX:-158.1,skewY:21.9,x:370.3,y:182.1},0).wait(1).to({skewX:-157,skewY:23,x:370.6,y:182.6},0).wait(1).to({skewX:-156,skewY:24,x:370.9,y:183.1},0).wait(1).to({skewX:-154.9,skewY:25.1,x:371.1,y:183.5},0).wait(1).to({skewX:-153.8,skewY:26.2,x:371.4,y:184},0).wait(1).to({skewX:-152.8,skewY:27.2,x:371.7,y:184.4},0).wait(1).to({skewX:-153.7,skewY:26.3,x:371.5,y:184},0).wait(1).to({skewX:-154.6,skewY:25.4,x:371.2,y:183.6},0).wait(1).to({skewX:-155.6,skewY:24.4,x:371,y:183.2},0).wait(1).to({skewX:-156.5,skewY:23.5,x:370.7,y:182.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:370.5,y:182.4},0).wait(1).to({skewX:-158.4,skewY:21.6,x:370.2,y:182},0).wait(1).to({skewX:-159.3,skewY:20.7,x:369.9,y:181.7},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-161.2,skewY:18.8,x:369.4,y:180.9},0).wait(1).to({skewX:-162.1,skewY:17.9,x:369.1,y:180.5},0).wait(1).to({skewX:-163.1,skewY:16.9,x:368.8,y:180.1},0).wait(1).to({skewX:-164,skewY:16,x:368.5,y:179.8},0).wait(1).to({skewX:-164.9,skewY:15.1,x:368.2,y:179.4},0).wait(1).to({skewX:-165.9,skewY:14.1,x:367.9,y:179.1},0).wait(1).to({skewX:-166.8,skewY:13.2,x:367.5,y:178.7},0).wait(1).to({skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.07,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.07,rotation:5.7,skewX:0,skewY:0,x:362.3,y:201.7},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.47,rotation:3.3,x:361.8,y:210.6},0).wait(1).to({scaleY:0.6,rotation:2.5,y:213.6},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:1,rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:17.5,regY:23.4,x:344.5,y:199.4},0).wait(1).to({regX:35.5,regY:46.5,rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:19.4,regY:22.4,x:346.4,y:198.4},0).wait(1).to({regX:35.5,regY:46.5,scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.6,rotation:2.5,x:361.8,y:213.6},0).wait(1).to({scaleY:0.47,rotation:3.3,y:210.6},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:5.7,x:362.3,y:201.7},0).wait(1).to({scaleY:0.07,rotation:0,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:1,skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({skewX:-166.7,skewY:13.3,x:367.6,y:178.8},0).wait(1).to({skewX:-165.6,skewY:14.4,x:368,y:179.1},0).wait(1).to({skewX:-164.5,skewY:15.5,x:368.3,y:179.6},0).wait(1).to({skewX:-163.5,skewY:16.5,x:368.6,y:180},0).wait(1).to({skewX:-162.4,skewY:17.6,x:369,y:180.4},0).wait(1).to({skewX:-161.3,skewY:18.7,x:369.4,y:180.8},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-159.2,skewY:20.8,x:370,y:181.7},0).wait(1).to({skewX:-158.1,skewY:21.9,x:370.3,y:182.1},0).wait(1).to({skewX:-157,skewY:23,x:370.6,y:182.6},0).wait(1).to({skewX:-156,skewY:24,x:370.9,y:183.1},0).wait(1).to({skewX:-154.9,skewY:25.1,x:371.1,y:183.5},0).wait(1).to({skewX:-153.8,skewY:26.2,x:371.4,y:184},0).wait(1).to({skewX:-152.8,skewY:27.2,x:371.7,y:184.4},0).wait(1).to({skewX:-153.7,skewY:26.3,x:371.5,y:184},0).wait(1).to({skewX:-154.6,skewY:25.4,x:371.2,y:183.6},0).wait(1).to({skewX:-155.6,skewY:24.4,x:371,y:183.2},0).wait(1).to({skewX:-156.5,skewY:23.5,x:370.7,y:182.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:370.5,y:182.4},0).wait(1).to({skewX:-158.4,skewY:21.6,x:370.2,y:182},0).wait(1).to({skewX:-159.3,skewY:20.7,x:369.9,y:181.7},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-161.2,skewY:18.8,x:369.4,y:180.9},0).wait(1).to({skewX:-162.1,skewY:17.9,x:369.1,y:180.5},0).wait(1).to({skewX:-163.1,skewY:16.9,x:368.8,y:180.1},0).wait(1).to({skewX:-164,skewY:16,x:368.5,y:179.8},0).wait(1).to({skewX:-164.9,skewY:15.1,x:368.2,y:179.4},0).wait(1).to({skewX:-165.9,skewY:14.1,x:367.9,y:179.1},0).wait(1).to({skewX:-166.8,skewY:13.2,x:367.5,y:178.7},0).wait(1).to({skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.07,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.07,rotation:5.7,skewX:0,skewY:0,x:362.3,y:201.7},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.47,rotation:3.3,x:361.8,y:210.6},0).wait(1).to({scaleY:0.6,rotation:2.5,y:213.6},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:1,rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:17.5,regY:23.4,x:344.5,y:199.4},0).wait(1).to({regX:35.5,regY:46.5,rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:19.4,regY:22.4,x:346.4,y:198.4},0).wait(1).to({regX:35.5,regY:46.5,scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.6,rotation:2.5,x:361.8,y:213.6},0).wait(1).to({scaleY:0.47,rotation:3.3,y:210.6},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:5.7,x:362.3,y:201.7},0).wait(1).to({scaleY:0.07,rotation:0,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:1,skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({skewX:-166.7,skewY:13.3,x:367.6,y:178.8},0).wait(1).to({skewX:-165.6,skewY:14.4,x:368,y:179.1},0).wait(1).to({skewX:-164.5,skewY:15.5,x:368.3,y:179.6},0).wait(1).to({skewX:-163.5,skewY:16.5,x:368.6,y:180},0).wait(1).to({skewX:-162.4,skewY:17.6,x:369,y:180.4},0).wait(1).to({skewX:-161.3,skewY:18.7,x:369.4,y:180.8},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-159.2,skewY:20.8,x:370,y:181.7},0).wait(1).to({skewX:-158.1,skewY:21.9,x:370.3,y:182.1},0).wait(1).to({skewX:-157,skewY:23,x:370.6,y:182.6},0).wait(1).to({skewX:-156,skewY:24,x:370.9,y:183.1},0).wait(1).to({skewX:-154.9,skewY:25.1,x:371.1,y:183.5},0).wait(1).to({skewX:-153.8,skewY:26.2,x:371.4,y:184},0).wait(1).to({skewX:-152.8,skewY:27.2,x:371.7,y:184.4},0).wait(1).to({skewX:-153.7,skewY:26.3,x:371.5,y:184},0).wait(1).to({skewX:-154.6,skewY:25.4,x:371.2,y:183.6},0).wait(1).to({skewX:-155.6,skewY:24.4,x:371,y:183.2},0).wait(1).to({skewX:-156.5,skewY:23.5,x:370.7,y:182.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:370.5,y:182.4},0).wait(1).to({skewX:-158.4,skewY:21.6,x:370.2,y:182},0).wait(1).to({skewX:-159.3,skewY:20.7,x:369.9,y:181.7},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-161.2,skewY:18.8,x:369.4,y:180.9},0).wait(1).to({skewX:-162.1,skewY:17.9,x:369.1,y:180.5},0).wait(1).to({skewX:-163.1,skewY:16.9,x:368.8,y:180.1},0).wait(1).to({skewX:-164,skewY:16,x:368.5,y:179.8},0).wait(1).to({skewX:-164.9,skewY:15.1,x:368.2,y:179.4},0).wait(1).to({skewX:-165.9,skewY:14.1,x:367.9,y:179.1},0).wait(1).to({skewX:-166.8,skewY:13.2,x:367.5,y:178.7},0).wait(1).to({skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.07,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.07,rotation:5.7,skewX:0,skewY:0,x:362.3,y:201.7},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.47,rotation:3.3,x:361.8,y:210.6},0).wait(1).to({scaleY:0.6,rotation:2.5,y:213.6},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:1,rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:17.5,regY:23.4,x:344.5,y:199.4},0).wait(1).to({regX:35.5,regY:46.5,rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({rotation:-3,x:363.7,y:221.5},0).wait(1).to({rotation:-6,x:364.8,y:220.5},0).wait(1).to({rotation:-9,x:365.8,y:219.4},0).wait(1).to({rotation:-12,x:366.9,y:218.3},0).wait(1).to({rotation:-15,x:367.9,y:217},0).wait(1).to({rotation:-18,x:368.7,y:215.8},0).wait(1).to({rotation:-21,x:369.6,y:214.5},0).wait(1).to({rotation:-24,x:370.3,y:213.2},0).wait(1).to({rotation:-27,x:371,y:211.9},0).wait(1).to({rotation:-30,x:371.6,y:210.4},0).wait(1).to({rotation:-26.7,x:370.9,y:211.9},0).wait(1).to({rotation:-23.3,x:370.1,y:213.5},0).wait(1).to({rotation:-20,x:369.3,y:214.9},0).wait(1).to({rotation:-16.7,x:368.4,y:216.4},0).wait(1).to({rotation:-13.3,x:367.3,y:217.7},0).wait(1).to({rotation:-10,x:366.2,y:219},0).wait(1).to({rotation:-6.7,x:365,y:220.3},0).wait(1).to({rotation:-3.3,x:363.8,y:221.4},0).wait(1).to({rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:19.4,regY:22.4,x:346.4,y:198.4},0).wait(1).to({regX:35.5,regY:46.5,scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.6,rotation:2.5,x:361.8,y:213.6},0).wait(1).to({scaleY:0.47,rotation:3.3,y:210.6},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:5.7,x:362.3,y:201.7},0).wait(1).to({scaleY:0.07,rotation:0,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:1,skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({skewX:-166.7,skewY:13.3,x:367.6,y:178.8},0).wait(1).to({skewX:-165.6,skewY:14.4,x:368,y:179.1},0).wait(1).to({skewX:-164.5,skewY:15.5,x:368.3,y:179.6},0).wait(1).to({skewX:-163.5,skewY:16.5,x:368.6,y:180},0).wait(1).to({skewX:-162.4,skewY:17.6,x:369,y:180.4},0).wait(1).to({skewX:-161.3,skewY:18.7,x:369.4,y:180.8},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-159.2,skewY:20.8,x:370,y:181.7},0).wait(1).to({skewX:-158.1,skewY:21.9,x:370.3,y:182.1},0).wait(1).to({skewX:-157,skewY:23,x:370.6,y:182.6},0).wait(1).to({skewX:-156,skewY:24,x:370.9,y:183.1},0).wait(1).to({skewX:-154.9,skewY:25.1,x:371.1,y:183.5},0).wait(1).to({skewX:-153.8,skewY:26.2,x:371.4,y:184},0).wait(1).to({skewX:-152.8,skewY:27.2,x:371.7,y:184.4},0).wait(1).to({skewX:-153.7,skewY:26.3,x:371.5,y:184},0).wait(1).to({skewX:-154.6,skewY:25.4,x:371.2,y:183.6},0).wait(1).to({skewX:-155.6,skewY:24.4,x:371,y:183.2},0).wait(1).to({skewX:-156.5,skewY:23.5,x:370.7,y:182.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:370.5,y:182.4},0).wait(1).to({skewX:-158.4,skewY:21.6,x:370.2,y:182},0).wait(1).to({skewX:-159.3,skewY:20.7,x:369.9,y:181.7},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-161.2,skewY:18.8,x:369.4,y:180.9},0).wait(1).to({skewX:-162.1,skewY:17.9,x:369.1,y:180.5},0).wait(1).to({skewX:-163.1,skewY:16.9,x:368.8,y:180.1},0).wait(1).to({skewX:-164,skewY:16,x:368.5,y:179.8},0).wait(1).to({skewX:-164.9,skewY:15.1,x:368.2,y:179.4},0).wait(1).to({skewX:-165.9,skewY:14.1,x:367.9,y:179.1},0).wait(1).to({skewX:-166.8,skewY:13.2,x:367.5,y:178.7},0).wait(1).to({skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.07,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.07,rotation:5.7,skewX:0,skewY:0,x:362.3,y:201.7},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.47,rotation:3.3,x:361.8,y:210.6},0).wait(1).to({scaleY:0.6,rotation:2.5,y:213.6},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:1,rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:19.4,regY:22.4,x:346.4,y:198.4},0).wait(1).to({regX:35.5,regY:46.5,scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.6,rotation:2.5,x:361.8,y:213.6},0).wait(1).to({scaleY:0.47,rotation:3.3,y:210.6},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:5.7,x:362.3,y:201.7},0).wait(1).to({scaleY:0.07,rotation:0,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:1,skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({skewX:-166.7,skewY:13.3,x:367.6,y:178.8},0).wait(1).to({skewX:-165.6,skewY:14.4,x:368,y:179.1},0).wait(1).to({skewX:-164.5,skewY:15.5,x:368.3,y:179.6},0).wait(1).to({skewX:-163.5,skewY:16.5,x:368.6,y:180},0).wait(1).to({skewX:-162.4,skewY:17.6,x:369,y:180.4},0).wait(1).to({skewX:-161.3,skewY:18.7,x:369.4,y:180.8},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-159.2,skewY:20.8,x:370,y:181.7},0).wait(1).to({skewX:-158.1,skewY:21.9,x:370.3,y:182.1},0).wait(1).to({skewX:-157,skewY:23,x:370.6,y:182.6},0).wait(1).to({skewX:-156,skewY:24,x:370.9,y:183.1},0).wait(1).to({skewX:-154.9,skewY:25.1,x:371.1,y:183.5},0).wait(1).to({skewX:-153.8,skewY:26.2,x:371.4,y:184},0).wait(1).to({skewX:-152.8,skewY:27.2,x:371.7,y:184.4},0).wait(1).to({skewX:-153.7,skewY:26.3,x:371.5,y:184},0).wait(1).to({skewX:-154.6,skewY:25.4,x:371.2,y:183.6},0).wait(1).to({skewX:-155.6,skewY:24.4,x:371,y:183.2},0).wait(1).to({skewX:-156.5,skewY:23.5,x:370.7,y:182.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:370.5,y:182.4},0).wait(1).to({skewX:-158.4,skewY:21.6,x:370.2,y:182},0).wait(1).to({skewX:-159.3,skewY:20.7,x:369.9,y:181.7},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-161.2,skewY:18.8,x:369.4,y:180.9},0).wait(1).to({skewX:-162.1,skewY:17.9,x:369.1,y:180.5},0).wait(1).to({skewX:-163.1,skewY:16.9,x:368.8,y:180.1},0).wait(1).to({skewX:-164,skewY:16,x:368.5,y:179.8},0).wait(1).to({skewX:-164.9,skewY:15.1,x:368.2,y:179.4},0).wait(1).to({skewX:-165.9,skewY:14.1,x:367.9,y:179.1},0).wait(1).to({skewX:-166.8,skewY:13.2,x:367.5,y:178.7},0).wait(1).to({skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.07,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.07,rotation:5.7,skewX:0,skewY:0,x:362.3,y:201.7},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.47,rotation:3.3,x:361.8,y:210.6},0).wait(1).to({scaleY:0.6,rotation:2.5,y:213.6},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:1,rotation:0,x:362.5,y:222.5},0).wait(1).to({regX:19.4,regY:22.4,x:346.4,y:198.4},0).wait(1).to({regX:35.5,regY:46.5,scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.6,rotation:2.5,x:361.8,y:213.6},0).wait(1).to({scaleY:0.47,rotation:3.3,y:210.6},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleX:1,scaleY:0.07,rotation:5.7,x:362.3,y:201.7},0).wait(1).to({scaleY:0.07,rotation:0,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:1,skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({skewX:-166.7,skewY:13.3,x:367.6,y:178.8},0).wait(1).to({skewX:-165.6,skewY:14.4,x:368,y:179.1},0).wait(1).to({skewX:-164.5,skewY:15.5,x:368.3,y:179.6},0).wait(1).to({skewX:-163.5,skewY:16.5,x:368.6,y:180},0).wait(1).to({skewX:-162.4,skewY:17.6,x:369,y:180.4},0).wait(1).to({skewX:-161.3,skewY:18.7,x:369.4,y:180.8},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-159.2,skewY:20.8,x:370,y:181.7},0).wait(1).to({skewX:-158.1,skewY:21.9,x:370.3,y:182.1},0).wait(1).to({skewX:-157,skewY:23,x:370.6,y:182.6},0).wait(1).to({skewX:-156,skewY:24,x:370.9,y:183.1},0).wait(1).to({skewX:-154.9,skewY:25.1,x:371.1,y:183.5},0).wait(1).to({skewX:-153.8,skewY:26.2,x:371.4,y:184},0).wait(1).to({skewX:-152.8,skewY:27.2,x:371.7,y:184.4},0).wait(1).to({skewX:-153.7,skewY:26.3,x:371.5,y:184},0).wait(1).to({skewX:-154.6,skewY:25.4,x:371.2,y:183.6},0).wait(1).to({skewX:-155.6,skewY:24.4,x:371,y:183.2},0).wait(1).to({skewX:-156.5,skewY:23.5,x:370.7,y:182.8},0).wait(1).to({skewX:-157.4,skewY:22.6,x:370.5,y:182.4},0).wait(1).to({skewX:-158.4,skewY:21.6,x:370.2,y:182},0).wait(1).to({skewX:-159.3,skewY:20.7,x:369.9,y:181.7},0).wait(1).to({skewX:-160.2,skewY:19.8,x:369.6,y:181.3},0).wait(1).to({skewX:-161.2,skewY:18.8,x:369.4,y:180.9},0).wait(1).to({skewX:-162.1,skewY:17.9,x:369.1,y:180.5},0).wait(1).to({skewX:-163.1,skewY:16.9,x:368.8,y:180.1},0).wait(1).to({skewX:-164,skewY:16,x:368.5,y:179.8},0).wait(1).to({skewX:-164.9,skewY:15.1,x:368.2,y:179.4},0).wait(1).to({skewX:-165.9,skewY:14.1,x:367.9,y:179.1},0).wait(1).to({skewX:-166.8,skewY:13.2,x:367.5,y:178.7},0).wait(1).to({skewX:-167.7,skewY:12.3,x:367.2,y:178.4},0).wait(1).to({scaleY:0.87,skewX:-168.6,skewY:11.4,x:366.3,y:181.2},0).wait(1).to({scaleY:0.73,skewX:-169.4,skewY:10.6,x:365.5,y:184.1},0).wait(1).to({scaleY:0.6,skewX:-170.2,skewY:9.8,x:364.7,y:187},0).wait(1).to({scaleY:0.47,skewX:-171,skewY:9,x:364.1,y:189.9},0).wait(1).to({scaleY:0.33,skewX:-171.8,skewY:8.2,x:363.5,y:192.8},0).wait(1).to({scaleY:0.2,skewX:-172.6,skewY:7.4,x:363,y:195.7},0).wait(1).to({scaleY:0.07,skewX:-173.5,skewY:6.5,x:362.6,y:198.7},0).wait(1).to({scaleY:0.07,rotation:5.7,skewX:0,skewY:0,x:362.3,y:201.7},0).wait(1).to({scaleX:1,scaleY:0.2,rotation:4.9,x:362,y:204.7},0).wait(1).to({scaleY:0.33,rotation:4.1,x:361.9,y:207.6},0).wait(1).to({scaleY:0.47,rotation:3.3,x:361.8,y:210.6},0).wait(1).to({scaleY:0.6,rotation:2.5,y:213.6},0).wait(1).to({scaleY:0.73,rotation:1.6,x:362,y:216.5},0).wait(1).to({scaleY:0.87,rotation:0.8,x:362.2,y:219.5},0).wait(1).to({scaleY:1,rotation:0,x:362.5,y:222.5},0).wait(1));

	// mouse
	this.instance_2 = new lib.mouse_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(321.5,159.5,1,1,0,0,0,11.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.6,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.7},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.7,x:323.1},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:4.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:3.8,x:323.2},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:0.9,x:321.9},0).wait(1).to({rotation:0.5,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-4,x:319.8},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:321.7},0).wait(1).to({rotation:0.7,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:1.7,x:322.3},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:2.7,x:322.7},0).wait(1).to({rotation:2.3,x:322.5},0).wait(1).to({rotation:1.9,x:322.4},0).wait(1).to({rotation:1.5,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.8,x:321.8},0).wait(1).to({rotation:0.4,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:-0.3,x:321.3},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-1,x:320.9},0).wait(1).to({rotation:-1.4,x:320.6},0).wait(1).to({rotation:-1.7,x:320.5},0).wait(1).to({rotation:-2.1,x:320.2},0).wait(1).to({rotation:-2.4,x:320},0).wait(1).to({rotation:-2.8,x:319.8},0).wait(1).to({rotation:-3.1,x:319.6},0).wait(1).to({rotation:-3.5,x:319.4},0).wait(1).to({rotation:-3.8,x:319.1},0).wait(1).to({rotation:-4.2,x:318.9},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-5.2,x:318.3},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.1,x:319},0).wait(1).to({rotation:-3.7,x:319.2},0).wait(1).to({rotation:-3.3,x:319.5},0).wait(1).to({rotation:-3,x:319.7},0).wait(1).to({rotation:-2.6,x:319.9},0).wait(1).to({rotation:-2.2,x:320.1},0).wait(1).to({rotation:-1.9,x:320.4},0).wait(1).to({rotation:-1.5,x:320.6},0).wait(1).to({rotation:-1.1,x:320.8},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.6},0).wait(1).to({rotation:0.4,x:321.8},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.9,x:322},0).wait(1).to({rotation:1.1,x:322.2},0).wait(1).to({rotation:1.3,x:322.3},0).wait(1).to({rotation:1.5,x:322.5},0).wait(1).to({rotation:1.7,x:322.6},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.8},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:3.1,x:323.4},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3.5,x:323.7},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3,x:323.4},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.3,x:322.9},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.5},0).wait(1).to({rotation:1.4,x:322.4},0).wait(1).to({rotation:1.2,x:322.2},0).wait(1).to({rotation:0.9,x:322.1},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:0.2,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.6,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.7},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.7,x:323.1},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:4.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:3.8,x:323.2},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:0.9,x:321.9},0).wait(1).to({rotation:0.5,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-4,x:319.8},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:321.7},0).wait(1).to({rotation:0.7,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:1.7,x:322.3},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:2.7,x:322.7},0).wait(1).to({rotation:2.3,x:322.5},0).wait(1).to({rotation:1.9,x:322.4},0).wait(1).to({rotation:1.5,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.8,x:321.8},0).wait(1).to({rotation:0.4,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:-0.3,x:321.3},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-1,x:320.9},0).wait(1).to({rotation:-1.4,x:320.6},0).wait(1).to({rotation:-1.7,x:320.5},0).wait(1).to({rotation:-2.1,x:320.2},0).wait(1).to({rotation:-2.4,x:320},0).wait(1).to({rotation:-2.8,x:319.8},0).wait(1).to({rotation:-3.1,x:319.6},0).wait(1).to({rotation:-3.5,x:319.4},0).wait(1).to({rotation:-3.8,x:319.1},0).wait(1).to({rotation:-4.2,x:318.9},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-5.2,x:318.3},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.1,x:319},0).wait(1).to({rotation:-3.7,x:319.2},0).wait(1).to({rotation:-3.3,x:319.5},0).wait(1).to({rotation:-3,x:319.7},0).wait(1).to({rotation:-2.6,x:319.9},0).wait(1).to({rotation:-2.2,x:320.1},0).wait(1).to({rotation:-1.9,x:320.4},0).wait(1).to({rotation:-1.5,x:320.6},0).wait(1).to({rotation:-1.1,x:320.8},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.6},0).wait(1).to({rotation:0.4,x:321.8},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.9,x:322},0).wait(1).to({rotation:1.1,x:322.2},0).wait(1).to({rotation:1.3,x:322.3},0).wait(1).to({rotation:1.5,x:322.5},0).wait(1).to({rotation:1.7,x:322.6},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.8},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:3.1,x:323.4},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3.5,x:323.7},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3,x:323.4},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.3,x:322.9},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.5},0).wait(1).to({rotation:1.4,x:322.4},0).wait(1).to({rotation:1.2,x:322.2},0).wait(1).to({rotation:0.9,x:322.1},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:0.2,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.6,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.7},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.7,x:323.1},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:4.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:3.8,x:323.2},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:0.9,x:321.9},0).wait(1).to({rotation:0.5,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-4,x:319.8},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:321.7},0).wait(1).to({rotation:0.7,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:1.7,x:322.3},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:2.7,x:322.7},0).wait(1).to({rotation:2.3,x:322.5},0).wait(1).to({rotation:1.9,x:322.4},0).wait(1).to({rotation:1.5,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.8,x:321.8},0).wait(1).to({rotation:0.4,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:-0.3,x:321.3},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-1,x:320.9},0).wait(1).to({rotation:-1.4,x:320.6},0).wait(1).to({rotation:-1.7,x:320.5},0).wait(1).to({rotation:-2.1,x:320.2},0).wait(1).to({rotation:-2.4,x:320},0).wait(1).to({rotation:-2.8,x:319.8},0).wait(1).to({rotation:-3.1,x:319.6},0).wait(1).to({rotation:-3.5,x:319.4},0).wait(1).to({rotation:-3.8,x:319.1},0).wait(1).to({rotation:-4.2,x:318.9},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-5.2,x:318.3},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.1,x:319},0).wait(1).to({rotation:-3.7,x:319.2},0).wait(1).to({rotation:-3.3,x:319.5},0).wait(1).to({rotation:-3,x:319.7},0).wait(1).to({rotation:-2.6,x:319.9},0).wait(1).to({rotation:-2.2,x:320.1},0).wait(1).to({rotation:-1.9,x:320.4},0).wait(1).to({rotation:-1.5,x:320.6},0).wait(1).to({rotation:-1.1,x:320.8},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.6},0).wait(1).to({rotation:0.4,x:321.8},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.9,x:322},0).wait(1).to({rotation:1.1,x:322.2},0).wait(1).to({rotation:1.3,x:322.3},0).wait(1).to({rotation:1.5,x:322.5},0).wait(1).to({rotation:1.7,x:322.6},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.8},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:3.1,x:323.4},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3.5,x:323.7},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3,x:323.4},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.3,x:322.9},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.5},0).wait(1).to({rotation:1.4,x:322.4},0).wait(1).to({rotation:1.2,x:322.2},0).wait(1).to({rotation:0.9,x:322.1},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:0.2,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.6,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.7},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.7,x:323.1},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:4.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.3},0).wait(1).to({rotation:3.8,x:323.2},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:0.9,x:321.9},0).wait(1).to({rotation:0.5,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-4,x:319.8},0).wait(1).to({rotation:-3.6,x:320},0).wait(1).to({rotation:-3.2,x:320.2},0).wait(1).to({rotation:-2.8,x:320.3},0).wait(1).to({rotation:-2.4,x:320.5},0).wait(1).to({rotation:-2,x:320.7},0).wait(1).to({rotation:-1.6,x:320.8},0).wait(1).to({rotation:-1.2,x:321},0).wait(1).to({rotation:-0.8,x:321.2},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:321.7},0).wait(1).to({rotation:0.7,x:321.8},0).wait(1).to({rotation:1,x:322},0).wait(1).to({rotation:1.4,x:322.1},0).wait(1).to({rotation:1.7,x:322.3},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.8},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.1,x:322.9},0).wait(1).to({rotation:2.7,x:322.7},0).wait(1).to({rotation:2.3,x:322.5},0).wait(1).to({rotation:1.9,x:322.4},0).wait(1).to({rotation:1.5,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.8,x:321.8},0).wait(1).to({rotation:0.4,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:-0.3,x:321.3},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-1,x:320.9},0).wait(1).to({rotation:-1.4,x:320.6},0).wait(1).to({rotation:-1.7,x:320.5},0).wait(1).to({rotation:-2.1,x:320.2},0).wait(1).to({rotation:-2.4,x:320},0).wait(1).to({rotation:-2.8,x:319.8},0).wait(1).to({rotation:-3.1,x:319.6},0).wait(1).to({rotation:-3.5,x:319.4},0).wait(1).to({rotation:-3.8,x:319.1},0).wait(1).to({rotation:-4.2,x:318.9},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-5.2,x:318.3},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.1,x:319},0).wait(1).to({rotation:-3.7,x:319.2},0).wait(1).to({rotation:-3.3,x:319.5},0).wait(1).to({rotation:-3,x:319.7},0).wait(1).to({rotation:-2.6,x:319.9},0).wait(1).to({rotation:-2.2,x:320.1},0).wait(1).to({rotation:-1.9,x:320.4},0).wait(1).to({rotation:-1.5,x:320.6},0).wait(1).to({rotation:-1.1,x:320.8},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.6},0).wait(1).to({rotation:0.4,x:321.8},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.9,x:322},0).wait(1).to({rotation:1.1,x:322.2},0).wait(1).to({rotation:1.3,x:322.3},0).wait(1).to({rotation:1.5,x:322.5},0).wait(1).to({rotation:1.7,x:322.6},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.8},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:3.1,x:323.4},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3.5,x:323.7},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3,x:323.4},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.3,x:322.9},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.5},0).wait(1).to({rotation:1.4,x:322.4},0).wait(1).to({rotation:1.2,x:322.2},0).wait(1).to({rotation:0.9,x:322.1},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:0.2,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:-0.3,x:321.3},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-1,x:320.9},0).wait(1).to({rotation:-1.4,x:320.6},0).wait(1).to({rotation:-1.7,x:320.5},0).wait(1).to({rotation:-2.1,x:320.2},0).wait(1).to({rotation:-2.4,x:320},0).wait(1).to({rotation:-2.8,x:319.8},0).wait(1).to({rotation:-3.1,x:319.6},0).wait(1).to({rotation:-3.5,x:319.4},0).wait(1).to({rotation:-3.8,x:319.1},0).wait(1).to({rotation:-4.2,x:318.9},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-5.2,x:318.3},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.1,x:319},0).wait(1).to({rotation:-3.7,x:319.2},0).wait(1).to({rotation:-3.3,x:319.5},0).wait(1).to({rotation:-3,x:319.7},0).wait(1).to({rotation:-2.6,x:319.9},0).wait(1).to({rotation:-2.2,x:320.1},0).wait(1).to({rotation:-1.9,x:320.4},0).wait(1).to({rotation:-1.5,x:320.6},0).wait(1).to({rotation:-1.1,x:320.8},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.6},0).wait(1).to({rotation:0.4,x:321.8},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.9,x:322},0).wait(1).to({rotation:1.1,x:322.2},0).wait(1).to({rotation:1.3,x:322.3},0).wait(1).to({rotation:1.5,x:322.5},0).wait(1).to({rotation:1.7,x:322.6},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.8},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:3.1,x:323.4},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3.5,x:323.7},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3,x:323.4},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.3,x:322.9},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.5},0).wait(1).to({rotation:1.4,x:322.4},0).wait(1).to({rotation:1.2,x:322.2},0).wait(1).to({rotation:0.9,x:322.1},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:0.2,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(2).to({rotation:-0.3,x:321.3},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-1,x:320.9},0).wait(1).to({rotation:-1.4,x:320.6},0).wait(1).to({rotation:-1.7,x:320.5},0).wait(1).to({rotation:-2.1,x:320.2},0).wait(1).to({rotation:-2.4,x:320},0).wait(1).to({rotation:-2.8,x:319.8},0).wait(1).to({rotation:-3.1,x:319.6},0).wait(1).to({rotation:-3.5,x:319.4},0).wait(1).to({rotation:-3.8,x:319.1},0).wait(1).to({rotation:-4.2,x:318.9},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-5.2,x:318.3},0).wait(1).to({rotation:-4.8,x:318.5},0).wait(1).to({rotation:-4.5,x:318.7},0).wait(1).to({rotation:-4.1,x:319},0).wait(1).to({rotation:-3.7,x:319.2},0).wait(1).to({rotation:-3.3,x:319.5},0).wait(1).to({rotation:-3,x:319.7},0).wait(1).to({rotation:-2.6,x:319.9},0).wait(1).to({rotation:-2.2,x:320.1},0).wait(1).to({rotation:-1.9,x:320.4},0).wait(1).to({rotation:-1.5,x:320.6},0).wait(1).to({rotation:-1.1,x:320.8},0).wait(1).to({rotation:-0.7,x:321.1},0).wait(1).to({rotation:-0.4,x:321.3},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.6},0).wait(1).to({rotation:0.4,x:321.8},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.9,x:322},0).wait(1).to({rotation:1.1,x:322.2},0).wait(1).to({rotation:1.3,x:322.3},0).wait(1).to({rotation:1.5,x:322.5},0).wait(1).to({rotation:1.7,x:322.6},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.8},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:3.1,x:323.4},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3.5,x:323.7},0).wait(1).to({rotation:3.3,x:323.5},0).wait(1).to({rotation:3,x:323.4},0).wait(1).to({rotation:2.8,x:323.3},0).wait(1).to({rotation:2.6,x:323.1},0).wait(1).to({rotation:2.3,x:322.9},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.5},0).wait(1).to({rotation:1.4,x:322.4},0).wait(1).to({rotation:1.2,x:322.2},0).wait(1).to({rotation:0.9,x:322.1},0).wait(1).to({rotation:0.7,x:321.9},0).wait(1).to({rotation:0.5,x:321.8},0).wait(1).to({rotation:0.2,x:321.7},0).wait(1).to({rotation:0,x:321.5},0).wait(1));

	// cheak
	this.instance_3 = new lib.cheak_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321,161,1,1,0,0,0,63,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.6,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.6,x:322.1},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.7,x:322.5},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:4.7,x:323},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:3.8,x:322.5},0).wait(1).to({rotation:3.3,x:322.4},0).wait(1).to({rotation:2.8,x:322.1},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:0.9,x:321.4},0).wait(1).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-4,x:319.5},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.1},0).wait(1).to({rotation:0.7,x:321.3},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:1.7,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:2.8,x:322.2},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.5,x:322.5},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:2.7,x:322.1},0).wait(1).to({rotation:2.3,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.5,x:321.7},0).wait(1).to({rotation:1.2,x:321.5},0).wait(1).to({rotation:0.8,x:321.3},0).wait(1).to({rotation:0.4,x:321.1},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.8},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-1,x:320.4},0).wait(1).to({rotation:-1.4,x:320.2},0).wait(1).to({rotation:-1.7,x:320},0).wait(1).to({rotation:-2.1,x:319.8},0).wait(1).to({rotation:-2.4,x:319.6},0).wait(1).to({rotation:-2.8,x:319.4},0).wait(1).to({rotation:-3.1,x:319.1},0).wait(1).to({rotation:-3.5,x:319},0).wait(1).to({rotation:-3.8,x:318.8},0).wait(1).to({rotation:-4.2,x:318.6},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.8,x:318.1},0).wait(1).to({rotation:-5.2,x:318},0).wait(1).to({rotation:-4.8,x:318.2},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.1,x:318.6},0).wait(1).to({rotation:-3.7,x:318.8},0).wait(1).to({rotation:-3.3,x:319.1},0).wait(1).to({rotation:-3,x:319.2},0).wait(1).to({rotation:-2.6,x:319.5},0).wait(1).to({rotation:-2.2,x:319.7},0).wait(1).to({rotation:-1.9,x:319.9},0).wait(1).to({rotation:-1.5,x:320.2},0).wait(1).to({rotation:-1.1,x:320.4},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-0.4,x:320.8},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:1.1,x:321.7},0).wait(1).to({rotation:1.3,x:321.8},0).wait(1).to({rotation:1.5,x:321.9},0).wait(1).to({rotation:1.7,x:322},0).wait(1).to({rotation:2,x:322.2},0).wait(1).to({rotation:2.2,x:322.3},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:2.6,x:322.6},0).wait(1).to({rotation:2.8,x:322.7},0).wait(1).to({rotation:3.1,x:322.8},0).wait(1).to({rotation:3.3,x:323},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:3,x:322.8},0).wait(1).to({rotation:2.8,x:322.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.3,x:322.4},0).wait(1).to({rotation:2.1,x:322.2},0).wait(1).to({rotation:1.9,x:322.1},0).wait(1).to({rotation:1.6,x:321.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2,x:321.7},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.6,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.6,x:322.1},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.7,x:322.5},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:4.7,x:323},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:3.8,x:322.5},0).wait(1).to({rotation:3.3,x:322.4},0).wait(1).to({rotation:2.8,x:322.1},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:0.9,x:321.4},0).wait(1).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-4,x:319.5},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.1},0).wait(1).to({rotation:0.7,x:321.3},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:1.7,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:2.8,x:322.2},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.5,x:322.5},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:2.7,x:322.1},0).wait(1).to({rotation:2.3,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.5,x:321.7},0).wait(1).to({rotation:1.2,x:321.5},0).wait(1).to({rotation:0.8,x:321.3},0).wait(1).to({rotation:0.4,x:321.1},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.8},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-1,x:320.4},0).wait(1).to({rotation:-1.4,x:320.2},0).wait(1).to({rotation:-1.7,x:320},0).wait(1).to({rotation:-2.1,x:319.8},0).wait(1).to({rotation:-2.4,x:319.6},0).wait(1).to({rotation:-2.8,x:319.4},0).wait(1).to({rotation:-3.1,x:319.1},0).wait(1).to({rotation:-3.5,x:319},0).wait(1).to({rotation:-3.8,x:318.8},0).wait(1).to({rotation:-4.2,x:318.6},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.8,x:318.1},0).wait(1).to({rotation:-5.2,x:318},0).wait(1).to({rotation:-4.8,x:318.2},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.1,x:318.6},0).wait(1).to({rotation:-3.7,x:318.8},0).wait(1).to({rotation:-3.3,x:319.1},0).wait(1).to({rotation:-3,x:319.2},0).wait(1).to({rotation:-2.6,x:319.5},0).wait(1).to({rotation:-2.2,x:319.7},0).wait(1).to({rotation:-1.9,x:319.9},0).wait(1).to({rotation:-1.5,x:320.2},0).wait(1).to({rotation:-1.1,x:320.4},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-0.4,x:320.8},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:1.1,x:321.7},0).wait(1).to({rotation:1.3,x:321.8},0).wait(1).to({rotation:1.5,x:321.9},0).wait(1).to({rotation:1.7,x:322},0).wait(1).to({rotation:2,x:322.2},0).wait(1).to({rotation:2.2,x:322.3},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:2.6,x:322.6},0).wait(1).to({rotation:2.8,x:322.7},0).wait(1).to({rotation:3.1,x:322.8},0).wait(1).to({rotation:3.3,x:323},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:3,x:322.8},0).wait(1).to({rotation:2.8,x:322.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.3,x:322.4},0).wait(1).to({rotation:2.1,x:322.2},0).wait(1).to({rotation:1.9,x:322.1},0).wait(1).to({rotation:1.6,x:321.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2,x:321.7},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.6,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.6,x:322.1},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.7,x:322.5},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:4.7,x:323},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:3.8,x:322.5},0).wait(1).to({rotation:3.3,x:322.4},0).wait(1).to({rotation:2.8,x:322.1},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:0.9,x:321.4},0).wait(1).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-4,x:319.5},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.1},0).wait(1).to({rotation:0.7,x:321.3},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:1.7,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:2.8,x:322.2},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.5,x:322.5},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:2.7,x:322.1},0).wait(1).to({rotation:2.3,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.5,x:321.7},0).wait(1).to({rotation:1.2,x:321.5},0).wait(1).to({rotation:0.8,x:321.3},0).wait(1).to({rotation:0.4,x:321.1},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.8},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-1,x:320.4},0).wait(1).to({rotation:-1.4,x:320.2},0).wait(1).to({rotation:-1.7,x:320},0).wait(1).to({rotation:-2.1,x:319.8},0).wait(1).to({rotation:-2.4,x:319.6},0).wait(1).to({rotation:-2.8,x:319.4},0).wait(1).to({rotation:-3.1,x:319.1},0).wait(1).to({rotation:-3.5,x:319},0).wait(1).to({rotation:-3.8,x:318.8},0).wait(1).to({rotation:-4.2,x:318.6},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.8,x:318.1},0).wait(1).to({rotation:-5.2,x:318},0).wait(1).to({rotation:-4.8,x:318.2},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.1,x:318.6},0).wait(1).to({rotation:-3.7,x:318.8},0).wait(1).to({rotation:-3.3,x:319.1},0).wait(1).to({rotation:-3,x:319.2},0).wait(1).to({rotation:-2.6,x:319.5},0).wait(1).to({rotation:-2.2,x:319.7},0).wait(1).to({rotation:-1.9,x:319.9},0).wait(1).to({rotation:-1.5,x:320.2},0).wait(1).to({rotation:-1.1,x:320.4},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-0.4,x:320.8},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:1.1,x:321.7},0).wait(1).to({rotation:1.3,x:321.8},0).wait(1).to({rotation:1.5,x:321.9},0).wait(1).to({rotation:1.7,x:322},0).wait(1).to({rotation:2,x:322.2},0).wait(1).to({rotation:2.2,x:322.3},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:2.6,x:322.6},0).wait(1).to({rotation:2.8,x:322.7},0).wait(1).to({rotation:3.1,x:322.8},0).wait(1).to({rotation:3.3,x:323},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:3,x:322.8},0).wait(1).to({rotation:2.8,x:322.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.3,x:322.4},0).wait(1).to({rotation:2.1,x:322.2},0).wait(1).to({rotation:1.9,x:322.1},0).wait(1).to({rotation:1.6,x:321.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2,x:321.7},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.6,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.6,x:322.1},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.7,x:322.5},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:4.7,x:323},0).wait(1).to({rotation:4.2,x:322.8},0).wait(1).to({rotation:3.8,x:322.5},0).wait(1).to({rotation:3.3,x:322.4},0).wait(1).to({rotation:2.8,x:322.1},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:0.9,x:321.4},0).wait(1).to({rotation:0.5,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-4,x:319.5},0).wait(1).to({rotation:-3.6,x:319.7},0).wait(1).to({rotation:-3.2,x:319.8},0).wait(1).to({rotation:-2.8,x:320},0).wait(1).to({rotation:-2.4,x:320.1},0).wait(1).to({rotation:-2,x:320.2},0).wait(1).to({rotation:-1.6,x:320.4},0).wait(1).to({rotation:-1.2,x:320.6},0).wait(1).to({rotation:-0.8,x:320.7},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.1},0).wait(1).to({rotation:0.7,x:321.3},0).wait(1).to({rotation:1,x:321.4},0).wait(1).to({rotation:1.4,x:321.6},0).wait(1).to({rotation:1.7,x:321.7},0).wait(1).to({rotation:2.1,x:321.8},0).wait(1).to({rotation:2.4,x:322},0).wait(1).to({rotation:2.8,x:322.2},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:3.5,x:322.5},0).wait(1).to({rotation:3.1,x:322.3},0).wait(1).to({rotation:2.7,x:322.1},0).wait(1).to({rotation:2.3,x:322},0).wait(1).to({rotation:1.9,x:321.8},0).wait(1).to({rotation:1.5,x:321.7},0).wait(1).to({rotation:1.2,x:321.5},0).wait(1).to({rotation:0.8,x:321.3},0).wait(1).to({rotation:0.4,x:321.1},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.8},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-1,x:320.4},0).wait(1).to({rotation:-1.4,x:320.2},0).wait(1).to({rotation:-1.7,x:320},0).wait(1).to({rotation:-2.1,x:319.8},0).wait(1).to({rotation:-2.4,x:319.6},0).wait(1).to({rotation:-2.8,x:319.4},0).wait(1).to({rotation:-3.1,x:319.1},0).wait(1).to({rotation:-3.5,x:319},0).wait(1).to({rotation:-3.8,x:318.8},0).wait(1).to({rotation:-4.2,x:318.6},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.8,x:318.1},0).wait(1).to({rotation:-5.2,x:318},0).wait(1).to({rotation:-4.8,x:318.2},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.1,x:318.6},0).wait(1).to({rotation:-3.7,x:318.8},0).wait(1).to({rotation:-3.3,x:319.1},0).wait(1).to({rotation:-3,x:319.2},0).wait(1).to({rotation:-2.6,x:319.5},0).wait(1).to({rotation:-2.2,x:319.7},0).wait(1).to({rotation:-1.9,x:319.9},0).wait(1).to({rotation:-1.5,x:320.2},0).wait(1).to({rotation:-1.1,x:320.4},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-0.4,x:320.8},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:1.1,x:321.7},0).wait(1).to({rotation:1.3,x:321.8},0).wait(1).to({rotation:1.5,x:321.9},0).wait(1).to({rotation:1.7,x:322},0).wait(1).to({rotation:2,x:322.2},0).wait(1).to({rotation:2.2,x:322.3},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:2.6,x:322.6},0).wait(1).to({rotation:2.8,x:322.7},0).wait(1).to({rotation:3.1,x:322.8},0).wait(1).to({rotation:3.3,x:323},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:3,x:322.8},0).wait(1).to({rotation:2.8,x:322.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.3,x:322.4},0).wait(1).to({rotation:2.1,x:322.2},0).wait(1).to({rotation:1.9,x:322.1},0).wait(1).to({rotation:1.6,x:321.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2,x:321.7},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.8},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-1,x:320.4},0).wait(1).to({rotation:-1.4,x:320.2},0).wait(1).to({rotation:-1.7,x:320},0).wait(1).to({rotation:-2.1,x:319.8},0).wait(1).to({rotation:-2.4,x:319.6},0).wait(1).to({rotation:-2.8,x:319.4},0).wait(1).to({rotation:-3.1,x:319.1},0).wait(1).to({rotation:-3.5,x:319},0).wait(1).to({rotation:-3.8,x:318.8},0).wait(1).to({rotation:-4.2,x:318.6},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.8,x:318.1},0).wait(1).to({rotation:-5.2,x:318},0).wait(1).to({rotation:-4.8,x:318.2},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.1,x:318.6},0).wait(1).to({rotation:-3.7,x:318.8},0).wait(1).to({rotation:-3.3,x:319.1},0).wait(1).to({rotation:-3,x:319.2},0).wait(1).to({rotation:-2.6,x:319.5},0).wait(1).to({rotation:-2.2,x:319.7},0).wait(1).to({rotation:-1.9,x:319.9},0).wait(1).to({rotation:-1.5,x:320.2},0).wait(1).to({rotation:-1.1,x:320.4},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-0.4,x:320.8},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:1.1,x:321.7},0).wait(1).to({rotation:1.3,x:321.8},0).wait(1).to({rotation:1.5,x:321.9},0).wait(1).to({rotation:1.7,x:322},0).wait(1).to({rotation:2,x:322.2},0).wait(1).to({rotation:2.2,x:322.3},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:2.6,x:322.6},0).wait(1).to({rotation:2.8,x:322.7},0).wait(1).to({rotation:3.1,x:322.8},0).wait(1).to({rotation:3.3,x:323},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:3,x:322.8},0).wait(1).to({rotation:2.8,x:322.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.3,x:322.4},0).wait(1).to({rotation:2.1,x:322.2},0).wait(1).to({rotation:1.9,x:322.1},0).wait(1).to({rotation:1.6,x:321.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2,x:321.7},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.8},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-1,x:320.4},0).wait(1).to({rotation:-1.4,x:320.2},0).wait(1).to({rotation:-1.7,x:320},0).wait(1).to({rotation:-2.1,x:319.8},0).wait(1).to({rotation:-2.4,x:319.6},0).wait(1).to({rotation:-2.8,x:319.4},0).wait(1).to({rotation:-3.1,x:319.1},0).wait(1).to({rotation:-3.5,x:319},0).wait(1).to({rotation:-3.8,x:318.8},0).wait(1).to({rotation:-4.2,x:318.6},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.8,x:318.1},0).wait(1).to({rotation:-5.2,x:318},0).wait(1).to({rotation:-4.8,x:318.2},0).wait(1).to({rotation:-4.5,x:318.4},0).wait(1).to({rotation:-4.1,x:318.6},0).wait(1).to({rotation:-3.7,x:318.8},0).wait(1).to({rotation:-3.3,x:319.1},0).wait(1).to({rotation:-3,x:319.2},0).wait(1).to({rotation:-2.6,x:319.5},0).wait(1).to({rotation:-2.2,x:319.7},0).wait(1).to({rotation:-1.9,x:319.9},0).wait(1).to({rotation:-1.5,x:320.2},0).wait(1).to({rotation:-1.1,x:320.4},0).wait(1).to({rotation:-0.7,x:320.6},0).wait(1).to({rotation:-0.4,x:320.8},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:1.1,x:321.7},0).wait(1).to({rotation:1.3,x:321.8},0).wait(1).to({rotation:1.5,x:321.9},0).wait(1).to({rotation:1.7,x:322},0).wait(1).to({rotation:2,x:322.2},0).wait(1).to({rotation:2.2,x:322.3},0).wait(1).to({rotation:2.4,x:322.5},0).wait(1).to({rotation:2.6,x:322.6},0).wait(1).to({rotation:2.8,x:322.7},0).wait(1).to({rotation:3.1,x:322.8},0).wait(1).to({rotation:3.3,x:323},0).wait(1).to({rotation:3.5,x:323.1},0).wait(1).to({rotation:3.3,x:322.9},0).wait(1).to({rotation:3,x:322.8},0).wait(1).to({rotation:2.8,x:322.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.3,x:322.4},0).wait(1).to({rotation:2.1,x:322.2},0).wait(1).to({rotation:1.9,x:322.1},0).wait(1).to({rotation:1.6,x:321.9},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2,x:321.7},0).wait(1).to({rotation:0.9,x:321.5},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(1));

	// eye
	this.instance_4 = new lib.eye_8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(321,145.5,1,1,0,0,0,44,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.6,x:322.1},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.8},0).wait(1).to({rotation:3.1,x:323.2},0).wait(1).to({rotation:3.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:4.7,x:324.2},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:3.8,x:323.5},0).wait(1).to({rotation:3.3,x:323.3},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:0.9,x:321.7},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-4,x:318.5},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.2},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:1.7,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:3.5,x:323.3},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:2.7,x:322.8},0).wait(1).to({rotation:2.3,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.5,x:322},0).wait(1).to({rotation:1.2,x:321.8},0).wait(1).to({rotation:0.8,x:321.5},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.7},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:320.1},0).wait(1).to({rotation:-1.4,x:319.8},0).wait(1).to({rotation:-1.7,x:319.5},0).wait(1).to({rotation:-2.1,x:319.2},0).wait(1).to({rotation:-2.4,x:318.9},0).wait(1).to({rotation:-2.8,x:318.6},0).wait(1).to({rotation:-3.1,x:318.3},0).wait(1).to({rotation:-3.5,x:318},0).wait(1).to({rotation:-3.8,x:317.7},0).wait(1).to({rotation:-4.2,x:317.4},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-5.2,x:316.5},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.1,x:317.5},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.3,x:318.1},0).wait(1).to({rotation:-3,x:318.4},0).wait(1).to({rotation:-2.6,x:318.8},0).wait(1).to({rotation:-2.2,x:319},0).wait(1).to({rotation:-1.9,x:319.4},0).wait(1).to({rotation:-1.5,x:319.7},0).wait(1).to({rotation:-1.1,x:320},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.4},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:1.1,x:321.9},0).wait(1).to({rotation:1.3,x:322.1},0).wait(1).to({rotation:1.5,x:322.3},0).wait(1).to({rotation:1.7,x:322.5},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.9},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:3.1,x:323.6},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3.5,x:324},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3,x:323.6},0).wait(1).to({rotation:2.8,x:323.4},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.3,x:323},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.4},0).wait(1).to({rotation:1.4,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.6,x:322.1},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.8},0).wait(1).to({rotation:3.1,x:323.2},0).wait(1).to({rotation:3.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:4.7,x:324.2},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:3.8,x:323.5},0).wait(1).to({rotation:3.3,x:323.3},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:0.9,x:321.7},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-4,x:318.5},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.2},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:1.7,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:3.5,x:323.3},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:2.7,x:322.8},0).wait(1).to({rotation:2.3,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.5,x:322},0).wait(1).to({rotation:1.2,x:321.8},0).wait(1).to({rotation:0.8,x:321.5},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.7},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:320.1},0).wait(1).to({rotation:-1.4,x:319.8},0).wait(1).to({rotation:-1.7,x:319.5},0).wait(1).to({rotation:-2.1,x:319.2},0).wait(1).to({rotation:-2.4,x:318.9},0).wait(1).to({rotation:-2.8,x:318.6},0).wait(1).to({rotation:-3.1,x:318.3},0).wait(1).to({rotation:-3.5,x:318},0).wait(1).to({rotation:-3.8,x:317.7},0).wait(1).to({rotation:-4.2,x:317.4},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-5.2,x:316.5},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.1,x:317.5},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.3,x:318.1},0).wait(1).to({rotation:-3,x:318.4},0).wait(1).to({rotation:-2.6,x:318.8},0).wait(1).to({rotation:-2.2,x:319},0).wait(1).to({rotation:-1.9,x:319.4},0).wait(1).to({rotation:-1.5,x:319.7},0).wait(1).to({rotation:-1.1,x:320},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.4},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:1.1,x:321.9},0).wait(1).to({rotation:1.3,x:322.1},0).wait(1).to({rotation:1.5,x:322.3},0).wait(1).to({rotation:1.7,x:322.5},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.9},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:3.1,x:323.6},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3.5,x:324},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3,x:323.6},0).wait(1).to({rotation:2.8,x:323.4},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.3,x:323},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.4},0).wait(1).to({rotation:1.4,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.6,x:322.1},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.8},0).wait(1).to({rotation:3.1,x:323.2},0).wait(1).to({rotation:3.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:4.7,x:324.2},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:3.8,x:323.5},0).wait(1).to({rotation:3.3,x:323.3},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:0.9,x:321.7},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-4,x:318.5},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.2},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:1.7,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:3.5,x:323.3},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:2.7,x:322.8},0).wait(1).to({rotation:2.3,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.5,x:322},0).wait(1).to({rotation:1.2,x:321.8},0).wait(1).to({rotation:0.8,x:321.5},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.7},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:320.1},0).wait(1).to({rotation:-1.4,x:319.8},0).wait(1).to({rotation:-1.7,x:319.5},0).wait(1).to({rotation:-2.1,x:319.2},0).wait(1).to({rotation:-2.4,x:318.9},0).wait(1).to({rotation:-2.8,x:318.6},0).wait(1).to({rotation:-3.1,x:318.3},0).wait(1).to({rotation:-3.5,x:318},0).wait(1).to({rotation:-3.8,x:317.7},0).wait(1).to({rotation:-4.2,x:317.4},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-5.2,x:316.5},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.1,x:317.5},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.3,x:318.1},0).wait(1).to({rotation:-3,x:318.4},0).wait(1).to({rotation:-2.6,x:318.8},0).wait(1).to({rotation:-2.2,x:319},0).wait(1).to({rotation:-1.9,x:319.4},0).wait(1).to({rotation:-1.5,x:319.7},0).wait(1).to({rotation:-1.1,x:320},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.4},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:1.1,x:321.9},0).wait(1).to({rotation:1.3,x:322.1},0).wait(1).to({rotation:1.5,x:322.3},0).wait(1).to({rotation:1.7,x:322.5},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.9},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:3.1,x:323.6},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3.5,x:324},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3,x:323.6},0).wait(1).to({rotation:2.8,x:323.4},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.3,x:323},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.4},0).wait(1).to({rotation:1.4,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.6,x:322.1},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.6,x:322.8},0).wait(1).to({rotation:3.1,x:323.2},0).wait(1).to({rotation:3.7,x:323.5},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:4.7,x:324.2},0).wait(1).to({rotation:4.2,x:323.9},0).wait(1).to({rotation:3.8,x:323.5},0).wait(1).to({rotation:3.3,x:323.3},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:0.9,x:321.7},0).wait(1).to({rotation:0.5,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-4,x:318.5},0).wait(1).to({rotation:-3.6,x:318.7},0).wait(1).to({rotation:-3.2,x:319},0).wait(1).to({rotation:-2.8,x:319.2},0).wait(1).to({rotation:-2.4,x:319.5},0).wait(1).to({rotation:-2,x:319.7},0).wait(1).to({rotation:-1.6,x:320},0).wait(1).to({rotation:-1.2,x:320.2},0).wait(1).to({rotation:-0.8,x:320.5},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.3,x:321.2},0).wait(1).to({rotation:0.7,x:321.4},0).wait(1).to({rotation:1,x:321.7},0).wait(1).to({rotation:1.4,x:322},0).wait(1).to({rotation:1.7,x:322.2},0).wait(1).to({rotation:2.1,x:322.4},0).wait(1).to({rotation:2.4,x:322.6},0).wait(1).to({rotation:2.8,x:322.9},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:3.5,x:323.3},0).wait(1).to({rotation:3.1,x:323.1},0).wait(1).to({rotation:2.7,x:322.8},0).wait(1).to({rotation:2.3,x:322.6},0).wait(1).to({rotation:1.9,x:322.3},0).wait(1).to({rotation:1.5,x:322},0).wait(1).to({rotation:1.2,x:321.8},0).wait(1).to({rotation:0.8,x:321.5},0).wait(1).to({rotation:0.4,x:321.3},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.7},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:320.1},0).wait(1).to({rotation:-1.4,x:319.8},0).wait(1).to({rotation:-1.7,x:319.5},0).wait(1).to({rotation:-2.1,x:319.2},0).wait(1).to({rotation:-2.4,x:318.9},0).wait(1).to({rotation:-2.8,x:318.6},0).wait(1).to({rotation:-3.1,x:318.3},0).wait(1).to({rotation:-3.5,x:318},0).wait(1).to({rotation:-3.8,x:317.7},0).wait(1).to({rotation:-4.2,x:317.4},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-5.2,x:316.5},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.1,x:317.5},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.3,x:318.1},0).wait(1).to({rotation:-3,x:318.4},0).wait(1).to({rotation:-2.6,x:318.8},0).wait(1).to({rotation:-2.2,x:319},0).wait(1).to({rotation:-1.9,x:319.4},0).wait(1).to({rotation:-1.5,x:319.7},0).wait(1).to({rotation:-1.1,x:320},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.4},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:1.1,x:321.9},0).wait(1).to({rotation:1.3,x:322.1},0).wait(1).to({rotation:1.5,x:322.3},0).wait(1).to({rotation:1.7,x:322.5},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.9},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:3.1,x:323.6},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3.5,x:324},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3,x:323.6},0).wait(1).to({rotation:2.8,x:323.4},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.3,x:323},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.4},0).wait(1).to({rotation:1.4,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.7},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:320.1},0).wait(1).to({rotation:-1.4,x:319.8},0).wait(1).to({rotation:-1.7,x:319.5},0).wait(1).to({rotation:-2.1,x:319.2},0).wait(1).to({rotation:-2.4,x:318.9},0).wait(1).to({rotation:-2.8,x:318.6},0).wait(1).to({rotation:-3.1,x:318.3},0).wait(1).to({rotation:-3.5,x:318},0).wait(1).to({rotation:-3.8,x:317.7},0).wait(1).to({rotation:-4.2,x:317.4},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-5.2,x:316.5},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.1,x:317.5},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.3,x:318.1},0).wait(1).to({rotation:-3,x:318.4},0).wait(1).to({rotation:-2.6,x:318.8},0).wait(1).to({rotation:-2.2,x:319},0).wait(1).to({rotation:-1.9,x:319.4},0).wait(1).to({rotation:-1.5,x:319.7},0).wait(1).to({rotation:-1.1,x:320},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.4},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:1.1,x:321.9},0).wait(1).to({rotation:1.3,x:322.1},0).wait(1).to({rotation:1.5,x:322.3},0).wait(1).to({rotation:1.7,x:322.5},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.9},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:3.1,x:323.6},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3.5,x:324},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3,x:323.6},0).wait(1).to({rotation:2.8,x:323.4},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.3,x:323},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.4},0).wait(1).to({rotation:1.4,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(2).to({rotation:-0.3,x:320.7},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:320.1},0).wait(1).to({rotation:-1.4,x:319.8},0).wait(1).to({rotation:-1.7,x:319.5},0).wait(1).to({rotation:-2.1,x:319.2},0).wait(1).to({rotation:-2.4,x:318.9},0).wait(1).to({rotation:-2.8,x:318.6},0).wait(1).to({rotation:-3.1,x:318.3},0).wait(1).to({rotation:-3.5,x:318},0).wait(1).to({rotation:-3.8,x:317.7},0).wait(1).to({rotation:-4.2,x:317.4},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-5.2,x:316.5},0).wait(1).to({rotation:-4.8,x:316.8},0).wait(1).to({rotation:-4.5,x:317.1},0).wait(1).to({rotation:-4.1,x:317.5},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.3,x:318.1},0).wait(1).to({rotation:-3,x:318.4},0).wait(1).to({rotation:-2.6,x:318.8},0).wait(1).to({rotation:-2.2,x:319},0).wait(1).to({rotation:-1.9,x:319.4},0).wait(1).to({rotation:-1.5,x:319.7},0).wait(1).to({rotation:-1.1,x:320},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-0.4,x:320.7},0).wait(1).to({rotation:0,x:321},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0.4,x:321.4},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:1.1,x:321.9},0).wait(1).to({rotation:1.3,x:322.1},0).wait(1).to({rotation:1.5,x:322.3},0).wait(1).to({rotation:1.7,x:322.5},0).wait(1).to({rotation:2,x:322.7},0).wait(1).to({rotation:2.2,x:322.9},0).wait(1).to({rotation:2.4,x:323},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:3.1,x:323.6},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3.5,x:324},0).wait(1).to({rotation:3.3,x:323.8},0).wait(1).to({rotation:3,x:323.6},0).wait(1).to({rotation:2.8,x:323.4},0).wait(1).to({rotation:2.6,x:323.2},0).wait(1).to({rotation:2.3,x:323},0).wait(1).to({rotation:2.1,x:322.8},0).wait(1).to({rotation:1.9,x:322.6},0).wait(1).to({rotation:1.6,x:322.4},0).wait(1).to({rotation:1.4,x:322.2},0).wait(1).to({rotation:1.2,x:322},0).wait(1).to({rotation:0.9,x:321.8},0).wait(1).to({rotation:0.7,x:321.6},0).wait(1).to({rotation:0.5,x:321.4},0).wait(1).to({rotation:0.2,x:321.2},0).wait(1).to({rotation:0,x:321},0).wait(1));

	// face
	this.instance_5 = new lib.face_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(321.5,97.5,1,1,0,0,0,110.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.6,x:323.9},0).wait(1).to({rotation:2.1,x:324.7,y:97.6},0).wait(1).to({rotation:2.6,x:325.5},0).wait(1).to({rotation:3.1,x:326.3,y:97.5},0).wait(1).to({rotation:3.7,x:327.1},0).wait(1).to({rotation:4.2,x:327.9},0).wait(1).to({rotation:4.7,x:328.7},0).wait(1).to({rotation:4.2,x:327.9,y:97.6},0).wait(1).to({rotation:3.8,x:327.2},0).wait(1).to({rotation:3.3,x:326.5},0).wait(1).to({rotation:2.8,x:325.8},0).wait(1).to({rotation:2.4,x:325.1,y:97.5},0).wait(1).to({rotation:1.9,x:324.4,y:97.6},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:0.9,x:322.9},0).wait(1).to({rotation:0.5,x:322.2},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-4,x:315.6},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:322},0).wait(1).to({rotation:0.7,x:322.6,y:97.6},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:1.7,x:324.1,y:97.6},0).wait(1).to({rotation:2.1,x:324.7},0).wait(1).to({rotation:2.4,x:325.2,y:97.5},0).wait(1).to({rotation:2.8,x:325.7},0).wait(1).to({rotation:3.1,x:326.3,y:97.6},0).wait(1).to({rotation:3.5,x:326.8,y:97.5},0).wait(1).to({rotation:3.1,x:326.2},0).wait(1).to({rotation:2.7,x:325.7,y:97.6},0).wait(1).to({rotation:2.3,x:325,y:97.5},0).wait(1).to({rotation:1.9,x:324.5,y:97.6},0).wait(1).to({rotation:1.5,x:323.9,y:97.5},0).wait(1).to({rotation:1.2,x:323.3,y:97.6},0).wait(1).to({rotation:0.8,x:322.7},0).wait(1).to({rotation:0.4,x:322.1},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:-0.3,x:320.9},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:319.7},0).wait(1).to({rotation:-1.4,x:319.1},0).wait(1).to({rotation:-1.7,x:318.6},0).wait(1).to({rotation:-2.1,x:318},0).wait(1).to({rotation:-2.4,x:317.3},0).wait(1).to({rotation:-2.8,x:316.7},0).wait(1).to({rotation:-3.1,x:316.2},0).wait(1).to({rotation:-3.5,x:315.6},0).wait(1).to({rotation:-3.8,x:315},0).wait(1).to({rotation:-4.2,x:314.4},0).wait(1).to({rotation:-4.5,x:313.8},0).wait(1).to({rotation:-4.8,x:313.2},0).wait(1).to({rotation:-5.2,x:312.6},0).wait(1).to({rotation:-4.8,x:313.3},0).wait(1).to({rotation:-4.5,x:313.9},0).wait(1).to({rotation:-4.1,x:314.5},0).wait(1).to({rotation:-3.7,x:315.2},0).wait(1).to({rotation:-3.3,x:315.8},0).wait(1).to({rotation:-3,x:316.4},0).wait(1).to({rotation:-2.6,x:317.1},0).wait(1).to({rotation:-2.2,x:317.7},0).wait(1).to({rotation:-1.9,x:318.3},0).wait(1).to({rotation:-1.5,x:318.9},0).wait(1).to({rotation:-1.1,x:319.6},0).wait(1).to({rotation:-0.7,x:320.2},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0.4,x:322.2,y:97.6},0).wait(1).to({rotation:0.7,x:322.6,y:97.5},0).wait(1).to({rotation:0.9,x:323,y:97.6},0).wait(1).to({rotation:1.1,x:323.4},0).wait(1).to({rotation:1.3,x:323.7,y:97.5},0).wait(1).to({rotation:1.5,x:324.1},0).wait(1).to({rotation:1.7,x:324.5},0).wait(1).to({rotation:2,x:324.9,y:97.6},0).wait(1).to({rotation:2.2,x:325.2},0).wait(1).to({rotation:2.4,x:325.6},0).wait(1).to({rotation:2.6,x:326,y:97.5},0).wait(1).to({rotation:2.8,x:326.3},0).wait(1).to({rotation:3.1,x:326.7},0).wait(1).to({rotation:3.3,x:327.1},0).wait(1).to({rotation:3.5,x:327.4},0).wait(1).to({rotation:3.3,x:327,y:97.6},0).wait(1).to({rotation:3,x:326.7,y:97.5},0).wait(1).to({rotation:2.8,x:326.2,y:97.6},0).wait(1).to({rotation:2.6,x:325.9},0).wait(1).to({rotation:2.3,x:325.5,y:97.5},0).wait(1).to({rotation:2.1,x:325.1,y:97.6},0).wait(1).to({rotation:1.9,x:324.7},0).wait(1).to({rotation:1.6,x:324.3,y:97.5},0).wait(1).to({rotation:1.4,x:323.8},0).wait(1).to({rotation:1.2,x:323.5,y:97.6},0).wait(1).to({rotation:0.9,x:323.1},0).wait(1).to({rotation:0.7,x:322.7},0).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.6,x:323.9},0).wait(1).to({rotation:2.1,x:324.7,y:97.6},0).wait(1).to({rotation:2.6,x:325.5},0).wait(1).to({rotation:3.1,x:326.3,y:97.5},0).wait(1).to({rotation:3.7,x:327.1},0).wait(1).to({rotation:4.2,x:327.9},0).wait(1).to({rotation:4.7,x:328.7},0).wait(1).to({rotation:4.2,x:327.9,y:97.6},0).wait(1).to({rotation:3.8,x:327.2},0).wait(1).to({rotation:3.3,x:326.5},0).wait(1).to({rotation:2.8,x:325.8},0).wait(1).to({rotation:2.4,x:325.1,y:97.5},0).wait(1).to({rotation:1.9,x:324.4,y:97.6},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:0.9,x:322.9},0).wait(1).to({rotation:0.5,x:322.2},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-4,x:315.6},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:322},0).wait(1).to({rotation:0.7,x:322.6,y:97.6},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:1.7,x:324.1,y:97.6},0).wait(1).to({rotation:2.1,x:324.7},0).wait(1).to({rotation:2.4,x:325.2,y:97.5},0).wait(1).to({rotation:2.8,x:325.7},0).wait(1).to({rotation:3.1,x:326.3,y:97.6},0).wait(1).to({rotation:3.5,x:326.8,y:97.5},0).wait(1).to({rotation:3.1,x:326.2},0).wait(1).to({rotation:2.7,x:325.7,y:97.6},0).wait(1).to({rotation:2.3,x:325,y:97.5},0).wait(1).to({rotation:1.9,x:324.5,y:97.6},0).wait(1).to({rotation:1.5,x:323.9,y:97.5},0).wait(1).to({rotation:1.2,x:323.3,y:97.6},0).wait(1).to({rotation:0.8,x:322.7},0).wait(1).to({rotation:0.4,x:322.1},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:-0.3,x:320.9},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:319.7},0).wait(1).to({rotation:-1.4,x:319.1},0).wait(1).to({rotation:-1.7,x:318.6},0).wait(1).to({rotation:-2.1,x:318},0).wait(1).to({rotation:-2.4,x:317.3},0).wait(1).to({rotation:-2.8,x:316.7},0).wait(1).to({rotation:-3.1,x:316.2},0).wait(1).to({rotation:-3.5,x:315.6},0).wait(1).to({rotation:-3.8,x:315},0).wait(1).to({rotation:-4.2,x:314.4},0).wait(1).to({rotation:-4.5,x:313.8},0).wait(1).to({rotation:-4.8,x:313.2},0).wait(1).to({rotation:-5.2,x:312.6},0).wait(1).to({rotation:-4.8,x:313.3},0).wait(1).to({rotation:-4.5,x:313.9},0).wait(1).to({rotation:-4.1,x:314.5},0).wait(1).to({rotation:-3.7,x:315.2},0).wait(1).to({rotation:-3.3,x:315.8},0).wait(1).to({rotation:-3,x:316.4},0).wait(1).to({rotation:-2.6,x:317.1},0).wait(1).to({rotation:-2.2,x:317.7},0).wait(1).to({rotation:-1.9,x:318.3},0).wait(1).to({rotation:-1.5,x:318.9},0).wait(1).to({rotation:-1.1,x:319.6},0).wait(1).to({rotation:-0.7,x:320.2},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0.4,x:322.2,y:97.6},0).wait(1).to({rotation:0.7,x:322.6,y:97.5},0).wait(1).to({rotation:0.9,x:323,y:97.6},0).wait(1).to({rotation:1.1,x:323.4},0).wait(1).to({rotation:1.3,x:323.7,y:97.5},0).wait(1).to({rotation:1.5,x:324.1},0).wait(1).to({rotation:1.7,x:324.5},0).wait(1).to({rotation:2,x:324.9,y:97.6},0).wait(1).to({rotation:2.2,x:325.2},0).wait(1).to({rotation:2.4,x:325.6},0).wait(1).to({rotation:2.6,x:326,y:97.5},0).wait(1).to({rotation:2.8,x:326.3},0).wait(1).to({rotation:3.1,x:326.7},0).wait(1).to({rotation:3.3,x:327.1},0).wait(1).to({rotation:3.5,x:327.4},0).wait(1).to({rotation:3.3,x:327,y:97.6},0).wait(1).to({rotation:3,x:326.7,y:97.5},0).wait(1).to({rotation:2.8,x:326.2,y:97.6},0).wait(1).to({rotation:2.6,x:325.9},0).wait(1).to({rotation:2.3,x:325.5,y:97.5},0).wait(1).to({rotation:2.1,x:325.1,y:97.6},0).wait(1).to({rotation:1.9,x:324.7},0).wait(1).to({rotation:1.6,x:324.3,y:97.5},0).wait(1).to({rotation:1.4,x:323.8},0).wait(1).to({rotation:1.2,x:323.5,y:97.6},0).wait(1).to({rotation:0.9,x:323.1},0).wait(1).to({rotation:0.7,x:322.7},0).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.6,x:323.9},0).wait(1).to({rotation:2.1,x:324.7,y:97.6},0).wait(1).to({rotation:2.6,x:325.5},0).wait(1).to({rotation:3.1,x:326.3,y:97.5},0).wait(1).to({rotation:3.7,x:327.1},0).wait(1).to({rotation:4.2,x:327.9},0).wait(1).to({rotation:4.7,x:328.7},0).wait(1).to({rotation:4.2,x:327.9,y:97.6},0).wait(1).to({rotation:3.8,x:327.2},0).wait(1).to({rotation:3.3,x:326.5},0).wait(1).to({rotation:2.8,x:325.8},0).wait(1).to({rotation:2.4,x:325.1,y:97.5},0).wait(1).to({rotation:1.9,x:324.4,y:97.6},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:0.9,x:322.9},0).wait(1).to({rotation:0.5,x:322.2},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-4,x:315.6},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:322},0).wait(1).to({rotation:0.7,x:322.6,y:97.6},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:1.7,x:324.1,y:97.6},0).wait(1).to({rotation:2.1,x:324.7},0).wait(1).to({rotation:2.4,x:325.2,y:97.5},0).wait(1).to({rotation:2.8,x:325.7},0).wait(1).to({rotation:3.1,x:326.3,y:97.6},0).wait(1).to({rotation:3.5,x:326.8,y:97.5},0).wait(1).to({rotation:3.1,x:326.2},0).wait(1).to({rotation:2.7,x:325.7,y:97.6},0).wait(1).to({rotation:2.3,x:325,y:97.5},0).wait(1).to({rotation:1.9,x:324.5,y:97.6},0).wait(1).to({rotation:1.5,x:323.9,y:97.5},0).wait(1).to({rotation:1.2,x:323.3,y:97.6},0).wait(1).to({rotation:0.8,x:322.7},0).wait(1).to({rotation:0.4,x:322.1},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:-0.3,x:320.9},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:319.7},0).wait(1).to({rotation:-1.4,x:319.1},0).wait(1).to({rotation:-1.7,x:318.6},0).wait(1).to({rotation:-2.1,x:318},0).wait(1).to({rotation:-2.4,x:317.3},0).wait(1).to({rotation:-2.8,x:316.7},0).wait(1).to({rotation:-3.1,x:316.2},0).wait(1).to({rotation:-3.5,x:315.6},0).wait(1).to({rotation:-3.8,x:315},0).wait(1).to({rotation:-4.2,x:314.4},0).wait(1).to({rotation:-4.5,x:313.8},0).wait(1).to({rotation:-4.8,x:313.2},0).wait(1).to({rotation:-5.2,x:312.6},0).wait(1).to({rotation:-4.8,x:313.3},0).wait(1).to({rotation:-4.5,x:313.9},0).wait(1).to({rotation:-4.1,x:314.5},0).wait(1).to({rotation:-3.7,x:315.2},0).wait(1).to({rotation:-3.3,x:315.8},0).wait(1).to({rotation:-3,x:316.4},0).wait(1).to({rotation:-2.6,x:317.1},0).wait(1).to({rotation:-2.2,x:317.7},0).wait(1).to({rotation:-1.9,x:318.3},0).wait(1).to({rotation:-1.5,x:318.9},0).wait(1).to({rotation:-1.1,x:319.6},0).wait(1).to({rotation:-0.7,x:320.2},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0.4,x:322.2,y:97.6},0).wait(1).to({rotation:0.7,x:322.6,y:97.5},0).wait(1).to({rotation:0.9,x:323,y:97.6},0).wait(1).to({rotation:1.1,x:323.4},0).wait(1).to({rotation:1.3,x:323.7,y:97.5},0).wait(1).to({rotation:1.5,x:324.1},0).wait(1).to({rotation:1.7,x:324.5},0).wait(1).to({rotation:2,x:324.9,y:97.6},0).wait(1).to({rotation:2.2,x:325.2},0).wait(1).to({rotation:2.4,x:325.6},0).wait(1).to({rotation:2.6,x:326,y:97.5},0).wait(1).to({rotation:2.8,x:326.3},0).wait(1).to({rotation:3.1,x:326.7},0).wait(1).to({rotation:3.3,x:327.1},0).wait(1).to({rotation:3.5,x:327.4},0).wait(1).to({rotation:3.3,x:327,y:97.6},0).wait(1).to({rotation:3,x:326.7,y:97.5},0).wait(1).to({rotation:2.8,x:326.2,y:97.6},0).wait(1).to({rotation:2.6,x:325.9},0).wait(1).to({rotation:2.3,x:325.5,y:97.5},0).wait(1).to({rotation:2.1,x:325.1,y:97.6},0).wait(1).to({rotation:1.9,x:324.7},0).wait(1).to({rotation:1.6,x:324.3,y:97.5},0).wait(1).to({rotation:1.4,x:323.8},0).wait(1).to({rotation:1.2,x:323.5,y:97.6},0).wait(1).to({rotation:0.9,x:323.1},0).wait(1).to({rotation:0.7,x:322.7},0).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.6,x:323.9},0).wait(1).to({rotation:2.1,x:324.7,y:97.6},0).wait(1).to({rotation:2.6,x:325.5},0).wait(1).to({rotation:3.1,x:326.3,y:97.5},0).wait(1).to({rotation:3.7,x:327.1},0).wait(1).to({rotation:4.2,x:327.9},0).wait(1).to({rotation:4.7,x:328.7},0).wait(1).to({rotation:4.2,x:327.9,y:97.6},0).wait(1).to({rotation:3.8,x:327.2},0).wait(1).to({rotation:3.3,x:326.5},0).wait(1).to({rotation:2.8,x:325.8},0).wait(1).to({rotation:2.4,x:325.1,y:97.5},0).wait(1).to({rotation:1.9,x:324.4,y:97.6},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:0.9,x:322.9},0).wait(1).to({rotation:0.5,x:322.2},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-4,x:315.6},0).wait(1).to({rotation:-3.6,x:316.2},0).wait(1).to({rotation:-3.2,x:316.8},0).wait(1).to({rotation:-2.8,x:317.3},0).wait(1).to({rotation:-2.4,x:318},0).wait(1).to({rotation:-2,x:318.5},0).wait(1).to({rotation:-1.6,x:319.1},0).wait(1).to({rotation:-1.2,x:319.7},0).wait(1).to({rotation:-0.8,x:320.3},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.3,x:322},0).wait(1).to({rotation:0.7,x:322.6,y:97.6},0).wait(1).to({rotation:1,x:323.1},0).wait(1).to({rotation:1.4,x:323.6,y:97.5},0).wait(1).to({rotation:1.7,x:324.1,y:97.6},0).wait(1).to({rotation:2.1,x:324.7},0).wait(1).to({rotation:2.4,x:325.2,y:97.5},0).wait(1).to({rotation:2.8,x:325.7},0).wait(1).to({rotation:3.1,x:326.3,y:97.6},0).wait(1).to({rotation:3.5,x:326.8,y:97.5},0).wait(1).to({rotation:3.1,x:326.2},0).wait(1).to({rotation:2.7,x:325.7,y:97.6},0).wait(1).to({rotation:2.3,x:325,y:97.5},0).wait(1).to({rotation:1.9,x:324.5,y:97.6},0).wait(1).to({rotation:1.5,x:323.9,y:97.5},0).wait(1).to({rotation:1.2,x:323.3,y:97.6},0).wait(1).to({rotation:0.8,x:322.7},0).wait(1).to({rotation:0.4,x:322.1},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:-0.3,x:320.9},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:319.7},0).wait(1).to({rotation:-1.4,x:319.1},0).wait(1).to({rotation:-1.7,x:318.6},0).wait(1).to({rotation:-2.1,x:318},0).wait(1).to({rotation:-2.4,x:317.3},0).wait(1).to({rotation:-2.8,x:316.7},0).wait(1).to({rotation:-3.1,x:316.2},0).wait(1).to({rotation:-3.5,x:315.6},0).wait(1).to({rotation:-3.8,x:315},0).wait(1).to({rotation:-4.2,x:314.4},0).wait(1).to({rotation:-4.5,x:313.8},0).wait(1).to({rotation:-4.8,x:313.2},0).wait(1).to({rotation:-5.2,x:312.6},0).wait(1).to({rotation:-4.8,x:313.3},0).wait(1).to({rotation:-4.5,x:313.9},0).wait(1).to({rotation:-4.1,x:314.5},0).wait(1).to({rotation:-3.7,x:315.2},0).wait(1).to({rotation:-3.3,x:315.8},0).wait(1).to({rotation:-3,x:316.4},0).wait(1).to({rotation:-2.6,x:317.1},0).wait(1).to({rotation:-2.2,x:317.7},0).wait(1).to({rotation:-1.9,x:318.3},0).wait(1).to({rotation:-1.5,x:318.9},0).wait(1).to({rotation:-1.1,x:319.6},0).wait(1).to({rotation:-0.7,x:320.2},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0.4,x:322.2,y:97.6},0).wait(1).to({rotation:0.7,x:322.6,y:97.5},0).wait(1).to({rotation:0.9,x:323,y:97.6},0).wait(1).to({rotation:1.1,x:323.4},0).wait(1).to({rotation:1.3,x:323.7,y:97.5},0).wait(1).to({rotation:1.5,x:324.1},0).wait(1).to({rotation:1.7,x:324.5},0).wait(1).to({rotation:2,x:324.9,y:97.6},0).wait(1).to({rotation:2.2,x:325.2},0).wait(1).to({rotation:2.4,x:325.6},0).wait(1).to({rotation:2.6,x:326,y:97.5},0).wait(1).to({rotation:2.8,x:326.3},0).wait(1).to({rotation:3.1,x:326.7},0).wait(1).to({rotation:3.3,x:327.1},0).wait(1).to({rotation:3.5,x:327.4},0).wait(1).to({rotation:3.3,x:327,y:97.6},0).wait(1).to({rotation:3,x:326.7,y:97.5},0).wait(1).to({rotation:2.8,x:326.2,y:97.6},0).wait(1).to({rotation:2.6,x:325.9},0).wait(1).to({rotation:2.3,x:325.5,y:97.5},0).wait(1).to({rotation:2.1,x:325.1,y:97.6},0).wait(1).to({rotation:1.9,x:324.7},0).wait(1).to({rotation:1.6,x:324.3,y:97.5},0).wait(1).to({rotation:1.4,x:323.8},0).wait(1).to({rotation:1.2,x:323.5,y:97.6},0).wait(1).to({rotation:0.9,x:323.1},0).wait(1).to({rotation:0.7,x:322.7},0).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:-0.3,x:320.9},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:319.7},0).wait(1).to({rotation:-1.4,x:319.1},0).wait(1).to({rotation:-1.7,x:318.6},0).wait(1).to({rotation:-2.1,x:318},0).wait(1).to({rotation:-2.4,x:317.3},0).wait(1).to({rotation:-2.8,x:316.7},0).wait(1).to({rotation:-3.1,x:316.2},0).wait(1).to({rotation:-3.5,x:315.6},0).wait(1).to({rotation:-3.8,x:315},0).wait(1).to({rotation:-4.2,x:314.4},0).wait(1).to({rotation:-4.5,x:313.8},0).wait(1).to({rotation:-4.8,x:313.2},0).wait(1).to({rotation:-5.2,x:312.6},0).wait(1).to({rotation:-4.8,x:313.3},0).wait(1).to({rotation:-4.5,x:313.9},0).wait(1).to({rotation:-4.1,x:314.5},0).wait(1).to({rotation:-3.7,x:315.2},0).wait(1).to({rotation:-3.3,x:315.8},0).wait(1).to({rotation:-3,x:316.4},0).wait(1).to({rotation:-2.6,x:317.1},0).wait(1).to({rotation:-2.2,x:317.7},0).wait(1).to({rotation:-1.9,x:318.3},0).wait(1).to({rotation:-1.5,x:318.9},0).wait(1).to({rotation:-1.1,x:319.6},0).wait(1).to({rotation:-0.7,x:320.2},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0.4,x:322.2,y:97.6},0).wait(1).to({rotation:0.7,x:322.6,y:97.5},0).wait(1).to({rotation:0.9,x:323,y:97.6},0).wait(1).to({rotation:1.1,x:323.4},0).wait(1).to({rotation:1.3,x:323.7,y:97.5},0).wait(1).to({rotation:1.5,x:324.1},0).wait(1).to({rotation:1.7,x:324.5},0).wait(1).to({rotation:2,x:324.9,y:97.6},0).wait(1).to({rotation:2.2,x:325.2},0).wait(1).to({rotation:2.4,x:325.6},0).wait(1).to({rotation:2.6,x:326,y:97.5},0).wait(1).to({rotation:2.8,x:326.3},0).wait(1).to({rotation:3.1,x:326.7},0).wait(1).to({rotation:3.3,x:327.1},0).wait(1).to({rotation:3.5,x:327.4},0).wait(1).to({rotation:3.3,x:327,y:97.6},0).wait(1).to({rotation:3,x:326.7,y:97.5},0).wait(1).to({rotation:2.8,x:326.2,y:97.6},0).wait(1).to({rotation:2.6,x:325.9},0).wait(1).to({rotation:2.3,x:325.5,y:97.5},0).wait(1).to({rotation:2.1,x:325.1,y:97.6},0).wait(1).to({rotation:1.9,x:324.7},0).wait(1).to({rotation:1.6,x:324.3,y:97.5},0).wait(1).to({rotation:1.4,x:323.8},0).wait(1).to({rotation:1.2,x:323.5,y:97.6},0).wait(1).to({rotation:0.9,x:323.1},0).wait(1).to({rotation:0.7,x:322.7},0).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(2).to({rotation:-0.3,x:320.9},0).wait(1).to({rotation:-0.7,x:320.4},0).wait(1).to({rotation:-1,x:319.7},0).wait(1).to({rotation:-1.4,x:319.1},0).wait(1).to({rotation:-1.7,x:318.6},0).wait(1).to({rotation:-2.1,x:318},0).wait(1).to({rotation:-2.4,x:317.3},0).wait(1).to({rotation:-2.8,x:316.7},0).wait(1).to({rotation:-3.1,x:316.2},0).wait(1).to({rotation:-3.5,x:315.6},0).wait(1).to({rotation:-3.8,x:315},0).wait(1).to({rotation:-4.2,x:314.4},0).wait(1).to({rotation:-4.5,x:313.8},0).wait(1).to({rotation:-4.8,x:313.2},0).wait(1).to({rotation:-5.2,x:312.6},0).wait(1).to({rotation:-4.8,x:313.3},0).wait(1).to({rotation:-4.5,x:313.9},0).wait(1).to({rotation:-4.1,x:314.5},0).wait(1).to({rotation:-3.7,x:315.2},0).wait(1).to({rotation:-3.3,x:315.8},0).wait(1).to({rotation:-3,x:316.4},0).wait(1).to({rotation:-2.6,x:317.1},0).wait(1).to({rotation:-2.2,x:317.7},0).wait(1).to({rotation:-1.9,x:318.3},0).wait(1).to({rotation:-1.5,x:318.9},0).wait(1).to({rotation:-1.1,x:319.6},0).wait(1).to({rotation:-0.7,x:320.2},0).wait(1).to({rotation:-0.4,x:320.9},0).wait(1).to({rotation:0,x:321.5},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0.4,x:322.2,y:97.6},0).wait(1).to({rotation:0.7,x:322.6,y:97.5},0).wait(1).to({rotation:0.9,x:323,y:97.6},0).wait(1).to({rotation:1.1,x:323.4},0).wait(1).to({rotation:1.3,x:323.7,y:97.5},0).wait(1).to({rotation:1.5,x:324.1},0).wait(1).to({rotation:1.7,x:324.5},0).wait(1).to({rotation:2,x:324.9,y:97.6},0).wait(1).to({rotation:2.2,x:325.2},0).wait(1).to({rotation:2.4,x:325.6},0).wait(1).to({rotation:2.6,x:326,y:97.5},0).wait(1).to({rotation:2.8,x:326.3},0).wait(1).to({rotation:3.1,x:326.7},0).wait(1).to({rotation:3.3,x:327.1},0).wait(1).to({rotation:3.5,x:327.4},0).wait(1).to({rotation:3.3,x:327,y:97.6},0).wait(1).to({rotation:3,x:326.7,y:97.5},0).wait(1).to({rotation:2.8,x:326.2,y:97.6},0).wait(1).to({rotation:2.6,x:325.9},0).wait(1).to({rotation:2.3,x:325.5,y:97.5},0).wait(1).to({rotation:2.1,x:325.1,y:97.6},0).wait(1).to({rotation:1.9,x:324.7},0).wait(1).to({rotation:1.6,x:324.3,y:97.5},0).wait(1).to({rotation:1.4,x:323.8},0).wait(1).to({rotation:1.2,x:323.5,y:97.6},0).wait(1).to({rotation:0.9,x:323.1},0).wait(1).to({rotation:0.7,x:322.7},0).wait(1).to({rotation:0.5,x:322.3},0).wait(1).to({rotation:0.2,x:321.9},0).wait(1).to({rotation:0,x:321.5,y:97.5},0).wait(1));

	// body
	this.instance_6 = new lib.body_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(322,259.5,1,1,0,0,0,35,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(602));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211,0,221,363);


(lib.ベクトルスマートオブジェクト_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ベクトルスマートオブジェクト_2
	this.instance_2 = new lib.ベクトルスマートオブジェクト_2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ベクトルスマートオブジェクト's Outer Glow
	this.instance_3 = new lib.ベクトルスマートオブジェクトsOuterGlow_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.5,153,1,1,0,0,0,79.5,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ベクトルスマートオブジェクト_2_6, new cjs.Rectangle(0,0,159,306), null);


(lib.house = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// ベクトルスマートオブジェクト
	this.instance = new lib.ベクトルスマートオブジェクト_23();
	this.instance.parent = this;
	this.instance.setTransform(668.6,559.5,1,1,0,0,0,128.6,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:72.5,x:612.5},0).wait(29).to({scaleX:0.92,rotation:0.2,x:617.1,y:559.4},0).wait(1).to({scaleX:0.84,rotation:0.3,x:621.7,y:559.2},0).wait(1).to({scaleX:0.76,rotation:0.5,x:626.2,y:559.1},0).wait(1).to({scaleX:0.67,rotation:0.7,x:630.8},0).wait(1).to({scaleX:0.59,rotation:0.8,x:635.4,y:559},0).wait(1).to({scaleX:0.51,rotation:1,x:639.9},0).wait(1).to({scaleX:0.43,rotation:1.2,x:644.5},0).wait(1).to({scaleX:0.35,rotation:1.4,x:649.1},0).wait(1).to({scaleX:0.27,rotation:1.5,x:653.7,y:559.1},0).wait(1).to({scaleX:0.19,rotation:1.7,x:658.2,y:559.2},0).wait(1).to({scaleX:0.1,rotation:1.9,x:662.7,y:559.3},0).wait(1).to({scaleX:0.02,rotation:2,x:667.3,y:559.4},0).wait(1).to({scaleX:0.06,rotation:0,skewX:2.2,skewY:-177.8,x:671.9,y:559.6},0).wait(1).to({scaleX:0.14,skewX:2.4,skewY:-177.6,x:676.5,y:559.9},0).wait(1).to({scaleX:0.22,skewX:2.5,skewY:-177.5,x:681.1,y:560.1},0).wait(1).to({scaleX:0.31,skewX:2.7,skewY:-177.3,x:685.6,y:560.3},0).wait(1).to({scaleX:0.39,skewX:2.9,skewY:-177.1,x:690.2,y:560.6},0).wait(1).to({scaleX:0.47,skewX:3,skewY:-177,x:694.7,y:560.9},0).wait(1).to({scaleX:0.55,skewX:3.2,skewY:-176.8,x:699.3,y:561.2},0).wait(1).to({scaleX:0.63,skewX:3.4,skewY:-176.6,x:703.9,y:561.6},0).wait(1).to({scaleX:0.71,skewX:3.5,skewY:-176.5,x:708.4,y:562},0).wait(1).to({scaleX:0.79,skewX:3.7,skewY:-176.3,x:713,y:562.4},0).wait(1).to({scaleX:0.88,skewX:3.9,skewY:-176.1,x:717.5,y:562.8},0).wait(1).to({scaleX:0.96,skewX:4.1,skewY:-175.9,x:722.1,y:563.3},0).wait(1).to({scaleX:1.04,skewX:4.2,skewY:-175.8,x:726.6,y:563.8},0).wait(1).to({scaleX:0.96,skewX:4.1,skewY:-175.9,x:722.1,y:563.3},0).wait(1).to({scaleX:0.88,skewX:3.9,skewY:-176.1,x:717.5,y:562.8},0).wait(1).to({scaleX:0.79,skewX:3.7,skewY:-176.3,x:713,y:562.4},0).wait(1).to({scaleX:0.71,skewX:3.5,skewY:-176.5,x:708.4,y:562},0).wait(1).to({scaleX:0.63,skewX:3.4,skewY:-176.6,x:703.9,y:561.6},0).wait(1).to({scaleX:0.55,skewX:3.2,skewY:-176.8,x:699.3,y:561.2},0).wait(1).to({scaleX:0.47,skewX:3,skewY:-177,x:694.7,y:560.9},0).wait(1).to({scaleX:0.39,skewX:2.9,skewY:-177.1,x:690.2,y:560.6},0).wait(1).to({scaleX:0.31,skewX:2.7,skewY:-177.3,x:685.6,y:560.3},0).wait(1).to({scaleX:0.22,skewX:2.5,skewY:-177.5,x:681.1,y:560.1},0).wait(1).to({scaleX:0.14,skewX:2.4,skewY:-177.6,x:676.5,y:559.9},0).wait(1).to({scaleX:0.06,skewX:2.2,skewY:-177.8,x:671.9,y:559.6},0).wait(1).to({scaleX:0.02,rotation:2,skewX:0,skewY:0,x:667.3,y:559.4},0).wait(1).to({scaleX:0.1,rotation:1.9,x:662.7,y:559.3},0).wait(1).to({scaleX:0.19,rotation:1.7,x:658.2,y:559.2},0).wait(1).to({scaleX:0.27,rotation:1.5,x:653.7,y:559.1},0).wait(1).to({scaleX:0.35,rotation:1.4,x:649.1,y:559},0).wait(1).to({scaleX:0.43,rotation:1.2,x:644.5},0).wait(1).to({scaleX:0.51,rotation:1,x:639.9},0).wait(1).to({scaleX:0.59,rotation:0.8,x:635.4},0).wait(1).to({scaleX:0.67,rotation:0.7,x:630.8,y:559.1},0).wait(1).to({scaleX:0.76,rotation:0.5,x:626.2},0).wait(1).to({scaleX:0.84,rotation:0.3,x:621.7,y:559.2},0).wait(1).to({scaleX:0.92,rotation:0.2,x:617.1,y:559.4},0).wait(1).to({scaleX:1,rotation:0,x:612.5,y:559.5},0).wait(1));

	// ベクトルスマートオブジェクト_2
	this.instance_1 = new lib.ベクトルスマートオブジェクト_2_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(612.5,556,1,1,0,0,0,79.5,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// ベクトルスマートオブジェクト_1
	this.instance_2 = new lib.ベクトルスマートオブジェクト_1_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(399,372,1,1,0,0,0,399,372);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,798,744);


(lib.girl_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance_14 = new lib.mouse_9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(97,157.5,1,1,0,0,0,13,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({rotation:0.9,x:97.2},0).wait(1).to({rotation:1.7,x:97.5},0).wait(1).to({rotation:2.6,x:97.7},0).wait(1).to({rotation:3.4,x:97.9},0).wait(1).to({rotation:2.7,x:97.8},0).wait(1).to({rotation:2.1,x:97.5},0).wait(1).to({rotation:1.4,x:97.4},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:0,x:97},0).wait(1));

	// cheak
	this.instance_15 = new lib.cheak_9();
	this.instance_15.parent = this;
	this.instance_15.setTransform(97,158,1,1,0,0,0,56,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({rotation:0.9,x:97.2},0).wait(1).to({rotation:1.7,x:97.4},0).wait(1).to({rotation:2.6,x:97.7},0).wait(1).to({rotation:3.4,x:97.9},0).wait(1).to({rotation:2.7,x:97.7},0).wait(1).to({rotation:2.1,x:97.5},0).wait(1).to({rotation:1.4,x:97.4},0).wait(1).to({rotation:0.7,x:97.2},0).wait(1).to({rotation:0,x:97},0).wait(1));

	// eye
	this.instance_16 = new lib.eye_9();
	this.instance_16.parent = this;
	this.instance_16.setTransform(96.5,143,1,1,0,0,0,37.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({rotation:0.9,x:96.9},0).wait(1).to({rotation:1.7,x:97.4},0).wait(1).to({rotation:2.6,x:97.8},0).wait(1).to({rotation:3.4,x:98.3},0).wait(1).to({rotation:2.7,x:97.9},0).wait(1).to({rotation:2.1,x:97.6},0).wait(1).to({rotation:1.4,x:97.2},0).wait(1).to({rotation:0.7,x:96.8},0).wait(1).to({rotation:0,x:96.5},0).wait(1));

	// rightHand
	this.instance_17 = new lib.rightHand_8();
	this.instance_17.parent = this;
	this.instance_17.setTransform(72.2,185.5,1,1,0,0,0,37.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:26,regY:33,rotation:11.2,x:57.4,y:202.4},0).wait(1).to({rotation:22.5,x:54.4,y:199.2},0).wait(1).to({rotation:33.7,x:52,y:195.5},0).wait(1).to({rotation:45,x:50.5,y:191.4},0).wait(1).to({rotation:36,x:51.7,y:194.7},0).wait(1).to({rotation:27,x:53.3,y:197.8},0).wait(1).to({rotation:18,x:55.5,y:200.6},0).wait(1).to({rotation:9,x:58.1,y:203},0).wait(1).to({rotation:0,x:61,y:205},0).wait(1));

	// leftHand
	this.instance_18 = new lib.leftHand_8();
	this.instance_18.parent = this;
	this.instance_18.setTransform(124.5,185.5,1,1,0,0,0,15.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:25.5,regY:33.5,rotation:-11.2,x:138.2,y:203.2},0).wait(1).to({rotation:-22.5,x:141.4,y:200.2},0).wait(1).to({rotation:-33.7,x:143.9,y:196.6},0).wait(1).to({rotation:-45,x:145.7,y:192.6},0).wait(1).to({rotation:-36,x:144.4,y:195.8},0).wait(1).to({rotation:-27,x:142.5,y:198.8},0).wait(1).to({rotation:-18,x:140.2,y:201.4},0).wait(1).to({rotation:-9,x:137.5,y:203.7},0).wait(1).to({rotation:0,x:134.5,y:205.5},0).wait(1));

	// face
	this.instance_19 = new lib.face_9();
	this.instance_19.parent = this;
	this.instance_19.setTransform(97,173,1,1,0,0,0,97,173);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regY:99,rotation:0.9,x:98.1,y:99.1},0).wait(1).to({rotation:1.7,x:99.2},0).wait(1).to({rotation:2.6,x:100.3},0).wait(1).to({rotation:3.4,x:101.4,y:99.2},0).wait(1).to({rotation:2.7,x:100.5},0).wait(1).to({rotation:2.1,x:99.7,y:99.1},0).wait(1).to({rotation:1.4,x:98.8,y:99},0).wait(1).to({rotation:0.7,x:97.9,y:99.1},0).wait(1).to({rotation:0,x:97,y:99},0).wait(1));

	// body
	this.instance_20 = new lib.body_9();
	this.instance_20.parent = this;
	this.instance_20.setTransform(97,249.5,1,1,0,0,0,44,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,349);


(lib.cloud_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud
	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cloud's Drop Shadow
	this.instance_2 = new lib.cloudsDropShadow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(500,73.5,1,1,0,0,0,500,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_2, new cjs.Rectangle(0,0,1000,147), null);


(lib.bg3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg3
	this.instance_2 = new lib.bg3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg3's Drop Shadow
	this.instance_3 = new lib.bg3sDropShadow_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(683,66,1,1,0,0,0,683,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_3, new cjs.Rectangle(0,0,1366,132), null);


(lib.ワクワク = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3
	this.instance = new lib.シンボル10();
	this.instance.parent = this;
	this.instance.setTransform(55.5,86.6,1,1,0,0,0,24.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:12.2,regY:23,scaleX:0.98,scaleY:0.98,x:43.5,y:64.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:43.8,y:64.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:44,y:65.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:44.3,y:65.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:43.9,y:64.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:43.4,y:64},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:43,y:63.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:42.5,y:62.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:43.1,y:63.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:43.8,y:64.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:44.4,y:65.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:45,y:67},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:45.7,y:68.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:45.3,y:67.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:44.8,y:66.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:44.4,y:65.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:44,y:65.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:43.6,y:64.4},0).wait(1).to({scaleX:1,scaleY:1,x:43.2,y:63.6},0).wait(1));

	// 2
	this.instance_1 = new lib.シンボル11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.5,86.6,1,1,0,0,0,0,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:12.2,regY:23,scaleX:1.03,scaleY:1.03,x:96,y:63},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:96.4,y:62.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:96.7,y:61.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:97,y:61.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:96,y:63.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:95,y:64.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:94,y:66.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:93.1,y:68.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:92.1,y:70.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:93.1,y:68.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:94,y:66.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:95,y:65},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:96,y:63.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:97,y:61.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:96.7,y:61.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:96.5,y:62.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:96.2,y:62.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:96,y:63.1},0).wait(1).to({scaleX:1,scaleY:1,x:95.7,y:63.6},0).wait(1));

	// 1
	this.instance_2 = new lib.シンボル12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.4,86.6,1,1,0,0,0,16.4,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:28.5,scaleX:1.07,scaleY:1.07,y:56},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:54},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:52},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:55.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:59.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:63.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:60.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:56.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:53.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:55.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:58.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:61},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:63.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:60.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:57.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:54.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:55.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:56.9},0).wait(1).to({scaleX:1,scaleY:1,y:58},0).wait(1));

	// 枠
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0A265").s().p("AEBH0IgPAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIANAAIAcgOQAEgCADABQAEABACAEQACAEgBAEQgCAEgDACIgeAPIgFABIAAAAgAjpHzIgIgEQgDgCgCgEQgBgEACgEQACgEADgBQAEgBAEACIAGADIAnAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgpAAIAAAAIgFgBgAB6H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAACH0QgDgBgDgCQgDgDAAgEQAAgFADgCQADgDADAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAh1H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAkwHQIgtgWQgDgCgCgEQgBgEACgEQACgEADgBQAEgBAEACIAtAWQAEABABAEQACAEgCAEQgCAEgEABIgDABIgFgBgAFbHEQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgBAEQgCAEgDACIgtAXIgFABIgDgBgAmcGaIgtgWQgDgCgCgEQgBgEACgDQACgEADgBQAEgCAEACIAtAWQAEACABAEQACAEgCAEQgCADgEACIgDAAIgFgBgAHGGNQgEgBgCgEQgCgEACgDQABgEAEgCIAsgXQAEgCAEABQAEABACAEQACAEgCAEQgBAEgEACIgsAXIgFABIgDgBgAn3FXQgFgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQAAAEgEADQgCABgDAAIgCAAgAIdE/QgDgDgBgEQAAgEADgDIAggmQACgDAEAAQAFgBADADQADADAAAEQABAEgDADIggAmQgDADgEABIgBAAQgDAAgDgDgAo4DyQgFgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAbAqQACAEAAAEQgBAEgEACQgCACgDAAIgCgBgAJqDkQgDgDgBgEQAAgEADgDIAEgGIAAgjQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAAAnQAAAEgCADIgHAIQgDADgEAAIgBAAQgDAAgDgCgAp3COQgEgBgCgDQgDgDAAgEIACgyQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAyQAAAEgDADQgDADgEAAIgBAAgAJwBuQgDgDAAgEIAAgyQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAAAyQAAAEgDADQgDACgEABQgEgBgDgCgApyAWQgEgBgCgDQgDgDAAgEIACgxQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAxQAAAEgDADQgDADgEAAIgBAAgAJwgJQgDgDAAgEIAAgyQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFIAAAyQAAAEgDADQgDACgEABQgEgBgDgCgApshhQgFgBgCgDQgDgDAAgEIABgeIABgCIAGgTQABgEAEgCQADgCAEABQAEABACAEQACAEgBAEIgGARIgBAdQAAAEgDADQgDADgEAAIAAAAgAJwiBQgDgDAAgEIAAgrIAAgBQgCgDABgEQAAgEAEgDQADgCAEABQAEABADADIACADQABADAAADIAAAuQAAAEgDADQgDADgEAAQgEAAgDgDgApRjVQgEgCgCgDQgCgEACgEIAQgvQABgEAEgCQAEgCAEACQADABACAEQACADgBAEIgQAvQgCAEgDACIgFABIgDAAgAJJjmQgEgBgDgDIgegoQgDgEABgEQAAgEAEgCQADgDAEABQAEAAADAEIAeAoQADADgBAEQAAAEgEADQgDACgDAAIgBAAgAIAlGQgFgBgCgDIgaghIgFgCQgEgBgBgEQgCgEACgDQABgEAEgCQADgCAEACIAIADQADABACACIAbAjQACADAAAEQgBAEgDADQgDACgDAAIgBAAgAnBl4QgEgCgCgDQgBgEACgEQABgEAEgBIAvgRQAEgCAEACQAEACABAEQACADgCAEQgCAEgEACIgvARIgDAAIgEgBgAGYmCIgugQQgEgCgCgDQgCgEABgEQACgEADgCQAEgCAEACIAvAQQAEABACAEQACADgCAEQgBAEgEACIgEABIgEAAgAlQmhQgEgCgBgDQgCgEACgEQABgEAEgBIAvgSQAEgBAEACQAEABABAEQABAEgBAEQgCADgEACIgvARIgDABIgEgBgAEomoIgvgQQgEgCgCgDQgCgEABgEQACgEADgCQAEgCAEACIAvAQQAEABACAEQACADgCAEQgBAEgEACIgEABIgDAAgAjfnBQgEgCAAgEQgBgFADgDQADgDAEAAIAygFQAEgBADADQADACABAFQAAAEgCADQgDADgEABIgyAFIgBAAQgEAAgCgDgAhonNQgDgCAAgEQgBgFADgDQADgDAEAAIAygFQAEgBADADQADACABAFQAAAEgCADQgDADgEABIgyAFIgBAAQgEAAgDgDgAC2nPIgugQQgEgBgCgEQgCgEABgEQACgEADgBQAEgCAEABIAvAQQAEABACAEQACAEgCAEQgBAEgEACIgEABIgEgBgAAQnaQgEgCAAgEQgBgFADgDQADgDAEAAIAygFQAEgBADADQADACABAFQAAAEgCADQgDADgEABIgyAFIgBAAQgEAAgCgDg");
	this.shape.setTransform(68.2,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0A265").ss(2,1,1).p("AgSATIAKgbIAbgK");
	this.shape_1.setTransform(14.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjvIeIkUiJIimj+IANknIBSjwIE3hyIGZgrIF+CCICmDWIAAGuIiTCuIkJCHg");
	this.shape_2.setTransform(68.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.4,108.4);


(lib.ビックリ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.シンボル5();
	this.instance.parent = this;
	this.instance.setTransform(30,35.1,1,1,0,0,0,12.4,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-3.7,x:27.8,y:35.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-7.5,x:25.7,y:35.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-11.2,x:23.6,y:35.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-15,x:21.5,y:35.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-11.2,x:23.6,y:35.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-7.5,x:25.7,y:35.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-3.7,x:27.8,y:35.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:30,y:35.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:3,x:30.5,y:36.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:6,x:31,y:38.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:9,x:31.5,y:40},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:12,x:32,y:41.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:15,x:32.5,y:43.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:11.2,x:31.9,y:41.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:7.5,x:31.3,y:39.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:3.7,x:30.6,y:37.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:30,y:35.1},0).wait(1));

	// レイヤー 3
	this.instance_1 = new lib.シンボル6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.3,32,1,1,0,0,0,9.3,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-3.7,x:8,y:33.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-7.5,x:6.6,y:35},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-11.2,x:5.3,y:36.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-15,x:3.9,y:37.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-11.2,x:5.3,y:36.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-7.5,x:6.6,y:35},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-3.7,x:8,y:33.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:9.3,y:32},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:3,x:10.6,y:32.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:6,x:12,y:33.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:9,x:13.5,y:34.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:12,x:14.8,y:35.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:15,x:16.2,y:36.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:11.2,x:14.5,y:35.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:7.5,x:12.7,y:34.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:3.7,x:11,y:33.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:9.3,y:32},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.4,66.6);


(lib.シンボル20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.シンボル21();
	this.instance.parent = this;
	this.instance.setTransform(79.7,55.7,1,1,0,0,0,12.4,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-5,x:77.2,y:54.6},0).wait(1).to({rotation:-10,x:74.7,y:53.4},0).wait(1).to({rotation:-15,x:72.2,y:52.4},0).wait(1).to({rotation:-10,x:74.7,y:53.4},0).wait(1).to({rotation:-5,x:77.2,y:54.6},0).wait(1).to({rotation:0,x:79.7,y:55.7},0).wait(1).to({rotation:5,x:81.8,y:57.4},0).wait(1).to({rotation:10,x:84,y:59},0).wait(1).to({rotation:15,x:86.1,y:60.7},0).wait(1).to({rotation:7.5,x:82.9,y:58.2},0).wait(1).to({rotation:0,x:79.7,y:55.7},0).wait(1));

	// 2
	this.instance_1 = new lib.シンボル22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,52.6,1,1,0,0,0,9.3,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-5,x:56.5,y:53.3},0).wait(1).to({rotation:-10,x:54,y:54},0).wait(1).to({rotation:-15,x:51.5,y:54.7},0).wait(1).to({rotation:-10,x:54,y:54},0).wait(1).to({rotation:-5,x:56.5,y:53.3},0).wait(1).to({rotation:0,x:59,y:52.6},0).wait(1).to({rotation:5,x:61.6},0).wait(1).to({rotation:10,x:64.3},0).wait(1).to({rotation:15,x:66.9},0).wait(1).to({rotation:7.5,x:62.9},0).wait(1).to({rotation:0,x:59},0).wait(1));

	// 枠
	this.instance_2 = new lib.シンボル23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.2,54.2,1,1,0,0,0,68.2,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.4,108.4);


(lib.シンボル13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.汗1();
	this.instance.parent = this;
	this.instance.setTransform(68.2,54.1,1,1,0,0,0,68.2,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル13, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.シンボル7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.シンボル20();
	this.instance.parent = this;
	this.instance.setTransform(68.2,54.2,1,1,0,0,0,68.2,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル7, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.シンボル4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ビックリ_icon
	this.instance = new lib.ビックリ();
	this.instance.parent = this;
	this.instance.setTransform(65.8,84.9,1,1,0,0,0,16.1,64.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C3C0").s().p("AEBH0IgPAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIANAAIAdgPQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIggAQIgEABIAAAAgAjpHzIgIgEQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAHADIAmAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgpAAIAAAAIgFgBgAB6H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAACH0QgDgBgDgCQgDgDAAgEQAAgFADgCQADgDADAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAh1H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAkwHQIgtgWQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAtAWQAEABACAEQABAEgCAEQgCAEgEABIgDABIgFgBgAFcHEQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgCAEQgBAEgDACIgtAXIgFABIgDgBgAmbGbIgtgXQgEgCgBgEQgBgEACgDQABgEAFgBQADgCAEACIAtAXQAEACABAEQABADgBAEQgCAEgFABIgDABIgEgBgAHHGNQgEgBgCgEQgCgEACgDQABgEAEgCIAsgXQAEgCADABQAFABACAEQABAEgBAEQgBAEgEACIgsAXIgFABIgDgBgAn4FYQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAIdE/QgDgDAAgEQgBgEADgDIAhgmQADgEAEAAQAEAAADADQADACABAEQAAAEgDAEIghAmQgDADgEAAIAAAAQgEAAgDgCgAo5DzQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgDAEABQAEABACAEIAbAqQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAJsDkQgEgCAAgEQgBgFADgDIADgFIAAglQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAoQAAADgDADIgFAIQgDADgEABIgBAAQgEAAgCgCgAp3CPQgEgBgDgDQgDgDABgEIACgyQAAgEADgDQADgDAEABQAEAAADADQADADgBAEIgBAyQgBAEgDADQgDADgEAAIAAAAgAJxBtQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApyAXQgEgBgDgDQgDgDABgEIACgxQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAxQgBAEgDADQgDADgEAAIAAAAgAJxgKQgDgDgBgEIAAgyQABgEADgDQACgDAEAAQAFAAADADQACADABAEIAAAyQgBAEgCADQgDADgFAAQgEAAgCgDgApthgQgEgBgDgDQgDgDABgEIABgfIAAgCIAHgTQABgEAEgCQADgCAEACQAEABACAEQACADgBAEIgGARIgCAeQAAAEgDADQgDADgDAAIgBAAgAJxiCQgDgDgBgEIAAgqIAAgBQgCgDABgEQABgEADgDQADgCAEABQAEABADADIACADQABADABADIAAAtQgBAEgCADQgDADgFAAQgEAAgCgDgApRjUQgEgCgCgDQgCgEACgEIAQgvQABgEAEgCQAEgCAEACQAEABABAEQACADgBAEIgQAvQgCAEgDACIgFABIgDAAgAJJjmQgEgBgCgDIgfgoQgDgEABgEQAAgEADgCQAEgDAEABQAEAAADAEIAeAoQADADAAAEQgBAEgDADQgDACgDAAIgCAAgAH/lGQgEgBgDgDIgZghIgFgCQgEgBgCgEQgBgEABgDQACgEAEgCQADgCAEACIAIADQADABACACIAbAjQACADgBAEQAAAEgDADQgDACgDAAIgCAAgAnCl4QgEgCgBgDQgBgEACgEQABgEAEgBIAvgRQAEgCAEACQAEACABAEQABADgBAEQgCAEgEACIgvARIgDAAIgFgBgAGYmCIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABACAEQABADgBAEQgBAEgEACIgEABIgEAAgAlQmhQgEgCgCgDQgBgEACgEQABgEAEgBIAvgSQAEgBAEACQADABACAEQABAEgCAEQgBADgEACIgvARIgDABIgEgBgAEnmoIgvgQQgEgCgBgDQgCgEABgEQABgEAEgCQAEgCAEACIAvAQQAEABABAEQACADgBAEQgBAEgEACIgEABIgEAAgAjgnBQgDgCAAgEQgBgFADgDQACgDAFAAIAxgFQAFgBADADQADACABAFQAAAEgDADQgCADgEABIgyAFIgCAAQgDAAgDgDgAhonNQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACABAFQAAAEgDADQgCADgEABIgzAFIgBAAQgDAAgDgDgAC2nPIgvgQQgEgBgBgEQgCgEABgEQABgEAEgBQAEgCAEABIAvAQQAEABACAEQABAEgBAEQgBAEgEACIgEABIgEgBgAAPnaQgDgCAAgEQgBgFADgDQACgDAFAAIAygFQAEgBADADQADACAAAFQABAEgDADQgCADgFABIgxAFIgCAAQgDAAgDgDg");
	this.shape.setTransform(68.2,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E7C3C0").ss(2,1,1).p("AgSATIAJgbIAcgK");
	this.shape_1.setTransform(14.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E34B2B").s().p("AjwIeIkUiJIilj+IANknIBRjwIE3hyIGZgrIF/CCICmDWIAAGuIiUCuIkJCHg");
	this.shape_2.setTransform(68.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル4, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 音符1
	this.instance = new lib.シンボル8();
	this.instance.parent = this;
	this.instance.setTransform(89.7,42.1,1,1,0,0,0,20.6,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:0.5,x:89.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:1,x:89.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:1.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:2.1,x:89.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:2.6},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:3.1},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:3.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:4.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:4.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:5.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:5.7,x:89.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:6.2,x:89.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:6.7,x:89.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:7.2,x:89.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:7.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:8.3,x:89.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:8.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:9.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.8,x:89.6},0).wait(1).to({rotation:10.3},0).wait(1).to({rotation:10.9,x:89.7},0).wait(1).to({rotation:11.4,x:89.6},0).wait(1).to({rotation:11.9},0).wait(1).to({rotation:12.4},0).wait(1).to({rotation:12.9,x:89.7},0).wait(1).to({rotation:13.4},0).wait(1).to({rotation:14},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:15},0).wait(1).to({rotation:12,x:89.6},0).wait(1).to({rotation:9},0).wait(1).to({rotation:6,x:89.7},0).wait(1).to({rotation:3,x:89.6},0).wait(1).to({rotation:0,x:89.7},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-12,y:42},0).wait(1).to({rotation:-18,x:89.6,y:42.1},0).wait(1).to({rotation:-24,y:42},0).wait(1).to({rotation:-30,x:89.7,y:42.1},0).wait(1).to({rotation:-27,x:89.6},0).wait(1).to({rotation:-24,y:42},0).wait(1).to({rotation:-21,x:89.7,y:42.1},0).wait(1).to({rotation:-18,x:89.6},0).wait(1).to({rotation:-15},0).wait(1).to({rotation:-12,x:89.7,y:42},0).wait(1).to({rotation:-9,y:42.1},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-3,x:89.6},0).wait(1).to({rotation:0,x:89.7},0).wait(1));

	// 音符2
	this.instance_1 = new lib.シンボル9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.7,62.4,1,1,0,0,0,22.7,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.5,x:49.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-0.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-1.4,x:49.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-1.9,x:49.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-2.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-2.8,x:49.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-3.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-3.7,x:49.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-4.2,x:49.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-4.7,x:49.6,y:62.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-5.2,x:49.7,y:62.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-5.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-6.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-6.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-7},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-7.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8,x:49.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-8.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-8.9,x:49.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-9.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-9.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-10.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-10.8,x:49.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.2,x:49.7},0).wait(1).to({rotation:-11.7},0).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-13.1},0).wait(1).to({rotation:-13.6,x:49.6},0).wait(1).to({rotation:-14.1,x:49.7},0).wait(1).to({rotation:-14.5,x:49.6},0).wait(1).to({rotation:-15,x:49.7},0).wait(1).to({rotation:-8.1,x:49.6},0).wait(1).to({rotation:-1.2,x:49.7},0).wait(1).to({rotation:5.7,x:49.6},0).wait(1).to({rotation:12.6,x:49.7},0).wait(1).to({rotation:19.5,x:49.6},0).wait(1).to({rotation:12.8},0).wait(1).to({rotation:6.2},0).wait(1).to({rotation:-0.5,x:49.7},0).wait(1).to({rotation:-7.1,x:49.6},0).wait(1).to({rotation:-13.8,x:49.7},0).wait(1).to({rotation:-20.4,x:49.6},0).wait(1).to({rotation:-17,x:49.7},0).wait(1).to({rotation:-13.6,x:49.6},0).wait(1).to({rotation:-10.2,x:49.7},0).wait(1).to({rotation:-6.8},0).wait(1).to({rotation:-3.4,x:49.6},0).wait(1).to({rotation:0,x:49.7},0).wait(1));

	// 枠
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0A265").s().p("AEBH0IgPAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIANAAIAcgOQADgCAEABQAEABACAEQACAEgBAEQgCAEgDACIgfAPIgEABIAAAAgAjpHzIgIgEQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAHADIAmAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgpAAIAAAAIgFgBgAB6H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAACH0QgDgBgDgCQgDgDAAgEQAAgFADgCQADgDADAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAh1H0QgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAyAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAkwHQIgtgWQgDgCgBgEQgCgEACgEQACgEAEgBQAEgBADACIAtAWQAEABACAEQABAEgCAEQgCAEgEABIgDABIgFgBgAFbHEQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgBAEQgCAEgDACIgtAXIgFABIgDgBgAmcGaIgtgWQgDgCgBgEQgCgEACgDQACgEAEgBQAEgCADACIAtAWQAEACACAEQABAEgCAEQgCADgEACIgDAAIgFgBgAHGGNQgEgBgCgEQgCgEACgDQABgEAEgCIAtgXQADgCAEABQAEABACAEQACAEgBAEQgCAEgDACIgtAXIgFABIgDgBgAn3FXQgEgBgCgDIgbgqQgDgEABgEQABgEAEgCQADgDAEABQAEABACAEIAbAqQADADgBAEQgBAEgDADQgDABgDAAIgCAAgAIdE/QgDgDAAgEQgBgEADgDIAggmQADgDAEAAQAEgBADADQADADABAEQAAAEgDADIggAmQgDADgEABIgBAAQgDAAgDgDgAo5DyQgEgBgCgDIgbgqQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAbAqQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAJqDkQgDgDAAgEQgBgEADgDIAEgGIAAgjQABgFADgCQACgDAEAAQAFAAADADQACACABAFIAAAnQgBAEgCADIgHAIQgDADgEAAIAAAAQgEAAgDgCgAp3CPQgEgBgDgDQgDgDABgEIACgyQAAgEADgDQADgDAEABQAEAAADADQADADgBAEIgBAyQgBAEgDADQgDADgEAAIAAAAgAJxBuQgDgDgBgEIAAgyQABgFADgCQACgDAEAAQAFAAADADQACACABAFIAAAyQgBAEgCADQgDACgFABQgEgBgCgCgApyAXQgEgBgDgDQgDgDABgEIACgxQAAgEADgDQADgDAEABQAEAAADADQADADAAAEIgCAxQgBAEgDADQgDADgEAAIAAAAgAJxgJQgDgDgBgEIAAgyQABgFADgCQACgDAEAAQAFAAADADQACACABAFIAAAyQgBAEgCADQgDACgFABQgEgBgCgCgApthgQgEgBgDgDQgDgDABgEIABgfIABgDIAGgSQABgEAEgBQAEgCAEABQAEABACAEQABAEgBAEIgFARIgDAdQAAAEgDADQgDADgEAAIAAAAgAJxiBQgDgDgBgEIAAgrIAAgBQgCgDABgEQABgEADgDQADgCAEABQAEABADADIACADQABADABADIAAAuQgBAEgCADQgDADgFAAQgEAAgCgDgApRjUQgEgCgBgDQgCgEABgEIAQgwQABgEAEgCQAEgCAEACQAEABABAEQACADgBAEIgQAwQgBAEgEACIgEABIgEAAgAJJjmQgEgBgCgDIgfgoQgDgEABgEQAAgEADgCQAEgDAEABQAEAAADAEIAeAoQADADAAAEQgBAEgDADQgDACgDAAIgCAAgAH/lGQgEgBgDgDIgYggIgEgBQgEgCgCgDQgCgEABgEQABgEAEgCQADgCAEACIAHACQADAAADADIAbAjQACADgBAEQAAAEgDADQgDACgDAAIgCAAgAnBl4QgEgCgBgDQgCgEACgEQACgEADgBIAwgRQADgCAEACQAEACACAEQABADgCAEQgCAEgEACIguARIgEAAIgEgBgAGZmCIgvgQQgEgCgCgDQgCgEACgEQABgEADgCQAEgCAEACIAvAQQAEABACAEQACADgBAEQgCAEgDACIgFABIgDAAgAlQmhQgEgCgBgDQgCgEACgEQACgEAEgBIAvgSQADgBAEACQAEABABAEQACAEgCAEQgCADgDACIgvARIgEABIgEgBgAEomoIgvgQQgEgCgCgDQgCgEACgEQABgEAEgCQADgCAEACIAvAQQAEABACAEQACADgBAEQgCAEgDACIgFABIgDAAgAjfnBQgEgCAAgEQAAgFACgDQADgDAEAAIAygFQAEgBADADQAEACAAAFQAAAEgCADQgDADgEABIgyAFIgBAAQgDAAgDgDgAhnnNQgEgCAAgEQAAgFACgDQADgDAEAAIAygFQAEgBADADQAEACAAAFQAAAEgCADQgDADgEABIgyAFIgBAAQgDAAgDgDgAC3nPIgvgQQgEgBgCgEQgCgEACgEQABgEAEgBQADgCAEABIAvAQQAEABACAEQACAEgBAEQgCAEgEACIgEABIgDgBgAAQnaQgEgCAAgEQAAgFACgDQADgDAEAAIAygFQAEgBADADQAEACAAAFQAAAEgCADQgDADgEABIgyAFIgBAAQgDAAgDgDg");
	this.shape.setTransform(68.2,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C0A265").ss(2,1,1).p("AgSATIAKgbIAbgK");
	this.shape_1.setTransform(14.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjvIeIkUiJIimj+IANknIBSjwIE3hyIGZgrIF+CCICmDWIAAGuIiTCuIkKCHg");
	this.shape_2.setTransform(68.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.4,108.4);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fun_icon
	this.instance = new lib.シンボル2();
	this.instance.parent = this;
	this.instance.setTransform(68.2,54.2,1,1,0,0,0,68.2,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,136.4,108.4), null);


(lib.クエスチョン = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.シンボル18();
	this.instance.parent = this;
	this.instance.setTransform(67.2,84.7,0.48,0.48,0,0,0,21.9,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:22,regY:30.5,scaleX:0.56,scaleY:0.56,x:67.3,y:67.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:65.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:62.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:60.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:58.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:55.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:53.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:51},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:48.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:49.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:50.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:52},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:53.1},0).wait(1).to({scaleX:1,scaleY:1,y:54.2},0).wait(1).to({rotation:7.5,x:71.2,y:54.5},0).wait(1).to({rotation:15,x:75.2,y:55.2},0).wait(1).to({rotation:22.5,x:79,y:56.5},0).wait(1).to({rotation:30,x:82.5,y:58.3},0).wait(1).to({rotation:20,x:77.7,y:56},0).wait(1).to({rotation:10,x:72.6,y:54.7},0).wait(1).to({rotation:0,x:67.3,y:54.2},0).wait(1).to({rotation:-10,x:62,y:54.7},0).wait(1).to({rotation:-20,x:56.9,y:56},0).wait(1).to({rotation:-30,x:52,y:58.2},0).wait(1).to({rotation:-24,x:54.9,y:56.8},0).wait(1).to({rotation:-18,x:57.8,y:55.7},0).wait(1).to({rotation:-12,x:60.9,y:54.9},0).wait(1).to({rotation:-6,x:64.1,y:54.4},0).wait(1).to({rotation:0,x:67.3,y:54.2},0).wait(1));

	// 枠
	this.instance_1 = new lib.シンボル19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.2,54.2,1,1,0,0,0,68.2,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.4,108.4);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.シンボル24();
	this.instance.parent = this;
	this.instance.setTransform(698.7,382.3,1,1,0,0,0,444.7,157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({regY:157.4,y:382.4},0).wait(20).to({alpha:0.968},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.613},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.387},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(95));

	// 幕
	this.instance_1 = new lib.幕_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(699,509,1,1,0,0,0,699,509);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:503.9},0).wait(1).to({y:498.8},0).wait(1).to({y:493.7},0).wait(1).to({y:488.6},0).wait(1).to({y:483.5},0).wait(1).to({y:478.4},0).wait(1).to({y:473.2},0).wait(1).to({y:468.1},0).wait(1).to({y:463},0).wait(1).to({y:457.9},0).wait(1).to({y:452.8},0).wait(1).to({y:447.7},0).wait(1).to({y:442.6},0).wait(1).to({y:437.4},0).wait(1).to({y:432.3},0).wait(1).to({y:427.2},0).wait(1).to({y:422.1},0).wait(1).to({y:417},0).wait(1).to({y:411.9},0).wait(1).to({y:406.8},0).wait(1).to({y:401.6},0).wait(1).to({y:396.5},0).wait(1).to({y:391.4},0).wait(1).to({y:386.3},0).wait(1).to({y:381.2},0).wait(1).to({y:376.1},0).wait(1).to({y:371},0).wait(1).to({y:365.8},0).wait(1).to({y:360.7},0).wait(1).to({y:355.6},0).wait(1).to({y:350.5},0).wait(1).to({y:345.4},0).wait(1).to({y:340.3},0).wait(1).to({y:335.2},0).wait(1).to({y:330},0).wait(1).to({y:324.9},0).wait(1).to({y:319.8},0).wait(1).to({y:314.7},0).wait(1).to({y:309.6},0).wait(1).to({y:304.5},0).wait(1).to({y:299.3},0).wait(1).to({y:294.2},0).wait(1).to({y:289.1},0).wait(1).to({y:284},0).wait(1).to({y:278.9},0).wait(1).to({y:273.8},0).wait(1).to({y:268.7},0).wait(1).to({y:263.5},0).wait(1).to({y:258.4},0).wait(1).to({y:253.3},0).wait(1).to({y:248.2},0).wait(1).to({y:243.1},0).wait(1).to({y:238},0).wait(1).to({y:232.9},0).wait(1).to({y:227.7},0).wait(1).to({y:222.6},0).wait(1).to({y:217.5},0).wait(1).to({y:212.4},0).wait(1).to({y:207.3},0).wait(1).to({y:202.2},0).wait(1).to({y:197.1},0).wait(1).to({y:191.9},0).wait(1).to({y:186.8},0).wait(1).to({y:181.7},0).wait(1).to({y:176.6},0).wait(1).to({y:171.5},0).wait(1).to({y:166.4},0).wait(1).to({y:161.3},0).wait(1).to({y:156.1},0).wait(1).to({y:151},0).wait(1).to({y:145.9},0).wait(1).to({y:140.8},0).wait(1).to({y:135.7},0).wait(1).to({y:130.6},0).wait(1).to({y:125.4},0).wait(1).to({y:120.3},0).wait(1).to({y:115.2},0).wait(1).to({y:110.1},0).wait(1).to({y:105},0).wait(1).to({y:99.9},0).wait(1).to({y:94.8},0).wait(1).to({y:89.6},0).wait(1).to({y:84.5},0).wait(1).to({y:79.4},0).wait(1).to({y:74.3},0).wait(1).to({y:69.2},0).wait(1).to({y:64.1},0).wait(1).to({y:59},0).wait(1).to({y:53.8},0).wait(1).to({y:48.7},0).wait(1).to({y:43.6},0).wait(1).to({y:38.5},0).wait(1).to({y:33.4},0).wait(1).to({y:28.3},0).wait(1).to({y:23.2},0).wait(1).to({y:18},0).wait(1).to({y:12.9},0).wait(1).to({y:7.8},0).wait(1).to({y:2.7},0).wait(1).to({y:-2.4},0).wait(1).to({y:-7.5},0).wait(1).to({y:-12.6},0).wait(1).to({y:-17.8},0).wait(1).to({y:-22.9},0).wait(1).to({y:-28},0).wait(1).to({y:-33.1},0).wait(1).to({y:-38.2},0).wait(1).to({y:-43.3},0).wait(1).to({y:-48.5},0).wait(1).to({y:-53.6},0).wait(1).to({y:-58.7},0).wait(1).to({y:-63.8},0).wait(1).to({y:-68.9},0).wait(1).to({y:-74},0).wait(1).to({y:-79.1},0).wait(1).to({y:-84.3},0).wait(1).to({y:-89.4},0).wait(1).to({y:-94.5},0).wait(1).to({y:-99.6},0).wait(1).to({y:-104.7},0).wait(1).to({y:-109.8},0).wait(1).to({y:-114.9},0).wait(1).to({y:-120.1},0).wait(1).to({y:-125.2},0).wait(1).to({y:-130.3},0).wait(1).to({y:-135.4},0).wait(1).to({y:-140.5},0).wait(1).to({y:-145.6},0).wait(1).to({y:-150.7},0).wait(1).to({y:-155.9},0).wait(1).to({y:-161},0).wait(1).to({y:-166.1},0).wait(1).to({y:-171.2},0).wait(1).to({y:-176.3},0).wait(1).to({y:-181.4},0).wait(1).to({y:-186.5},0).wait(1).to({y:-191.7},0).wait(1).to({y:-196.8},0).wait(1).to({y:-201.9},0).wait(1).to({y:-207},0).wait(1).to({y:-212.1},0).wait(1).to({y:-217.2},0).wait(1).to({y:-222.4},0).wait(1).to({y:-227.5},0).wait(1).to({y:-232.6},0).wait(1).to({y:-237.7},0).wait(1).to({y:-242.8},0).wait(1).to({y:-247.9},0).wait(1).to({y:-253},0).wait(1).to({y:-258.2},0).wait(1).to({y:-263.3},0).wait(1).to({y:-268.4},0).wait(1).to({y:-273.5},0).wait(1).to({y:-278.6},0).wait(1).to({y:-283.7},0).wait(1).to({y:-288.8},0).wait(1).to({y:-294},0).wait(1).to({y:-299.1},0).wait(1).to({y:-304.2},0).wait(1).to({y:-309.3},0).wait(1).to({y:-314.4},0).wait(1).to({y:-319.5},0).wait(1).to({y:-324.6},0).wait(1).to({y:-329.8},0).wait(1).to({y:-334.9},0).wait(1).to({y:-340},0).wait(1).to({y:-345.1},0).wait(1).to({y:-350.2},0).wait(1).to({y:-355.3},0).wait(1).to({y:-360.4},0).wait(1).to({y:-365.6},0).wait(1).to({y:-370.7},0).wait(1).to({y:-375.8},0).wait(1).to({y:-380.9},0).wait(1).to({y:-386},0).wait(1).to({y:-391.1},0).wait(1).to({y:-396.3},0).wait(1).to({y:-401.4},0).wait(1).to({y:-406.5},0).wait(1).to({y:-411.6},0).wait(1).to({y:-416.7},0).wait(1).to({y:-421.8},0).wait(1).to({y:-426.9},0).wait(1).to({y:-432.1},0).wait(1).to({y:-437.2},0).wait(1).to({y:-442.3},0).wait(1).to({y:-447.4},0).wait(1).to({y:-452.5},0).wait(1).to({y:-457.6},0).wait(1).to({y:-462.7},0).wait(1).to({y:-467.9},0).wait(1).to({y:-473},0).wait(1).to({y:-478.1},0).wait(1).to({y:-483.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1398,1018);


(lib.アートボード1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// change_scene
	this.instance = new lib.change_scene();
	this.instance.parent = this;
	this.instance.setTransform(927.2,616.3,1.39,1.803,0,0,0,667.1,371.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:667,regY:375,x:927,y:622.1},0).wait(9).to({alpha:0.98},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(71));

	// bg1
	this.instance_1 = new lib.bg1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(924,930.5,1,1,0,0,0,686,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

	// forward_tree
	this.instance_2 = new lib.forward_tree();
	this.instance_2.parent = this;
	this.instance_2.setTransform(913.5,554.5,1,1,0,0,0,913.5,408.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130));

	// 回転1
	this.instance_3 = new lib.回転1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(947.1,964.6,1,1,0,0,0,252.1,251.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130));

	// flower
	this.instance_4 = new lib.flower_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(923.6,841.5,1,1,0,0,0,675.5,113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130));

	// girl
	this.instance_5 = new lib.girl();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88.5,763.1,1,1,0,0,0,101,292.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:172,x:106.7,y:623.9},0).wait(1).to({x:128.7,y:609.4},0).wait(1).to({x:154.2,y:602.9},0).wait(1).to({x:180.4,y:605.8},0).wait(1).to({x:204.8,y:615.7},0).wait(1).to({x:227.2,y:629.8},0).wait(1).to({x:247.9,y:646.2},0).wait(1).to({x:267.3,y:664.1},0).wait(1).to({x:285.9,y:683},0).wait(1).to({x:305.4,y:670.7},0).wait(1).to({x:326.5,y:661.4},0).wait(1).to({x:348.7,y:655.2},0).wait(1).to({x:371.6,y:652.2},0).wait(1).to({x:394.7,y:652.1},0).wait(1).to({x:417.6,y:654.6},0).wait(1).to({x:440.2,y:659.3},0).wait(1).to({x:462.4,y:665.8},0).wait(1).to({x:484.1,y:673.8},0).wait(1).to({x:505.3,y:683},0).wait(1).to({x:521.8,y:661.1},0).wait(1).to({x:539.8,y:640.3},0).wait(1).to({x:559.5,y:621.3},0).wait(1).to({x:581.6,y:604.9},0).wait(1).to({x:606.3,y:593.1},0).wait(1).to({x:633.3,y:588.5},0).wait(1).to({x:660.3,y:593.1},0).wait(1).to({x:684.7,y:605.4},0).wait(1).to({x:706,y:622.8},0).wait(1).to({x:724.6,y:643},0).wait(1).to({x:742,y:621.2},0).wait(1).to({x:761.3,y:601.1},0).wait(1).to({x:783,y:583.7},0).wait(1).to({x:807.7,y:570.9},0).wait(1).to({x:835,y:565.5},0).wait(1).to({x:862.4,y:569.7},0).wait(1).to({x:887.2,y:582.2},0).wait(1).to({x:908.8,y:599.9},0).wait(1).to({x:927.5,y:620.5},0).wait(1).to({x:944,y:643},0).wait(91));

	// 回転2
	this.instance_6 = new lib.回転2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(944.6,954.1,1,1,0,0,0,341.7,342.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130));

	// 回転3
	this.instance_7 = new lib.回転3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(940.1,944.1,1,1,0,0,0,341.1,341.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130));

	// bg2
	this.instance_8 = new lib.bg2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(924,872,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130));

	// bg3
	this.instance_9 = new lib.bg3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(924,772,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(130));

	// 茂み
	this.instance_10 = new lib.茂み();
	this.instance_10.parent = this;
	this.instance_10.setTransform(925,687,1,1,0,0,0,665,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130));

	// 森
	this.instance_11 = new lib.森_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(925,687,1,1,0,0,0,668,687);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130));

	// sky
	this.instance_12 = new lib.sky_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(924,569,1,1,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-53.9,1866.5,1351.9);


(lib.アートボード1_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// change_scene
	this.instance_13 = new lib.change_scene();
	this.instance_13.parent = this;
	this.instance_13.setTransform(888,455.8,1.404,1.363,0,0,0,666.3,374.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:667,regY:375,x:889,y:457.1},0).wait(4).to({alpha:0.967},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(624).to({_off:false,regX:666.3,regY:372.1,x:888,y:455.9},0).wait(1).to({regX:667,regY:375,x:889,y:459.9,alpha:0.029},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(6));

	// bg1
	this.instance_14 = new lib.bg1_5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(924,817.5,1,1,0,0,0,686,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(700));

	// forward_tree
	this.instance_15 = new lib.forward_tree_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(913.5,441.5,1,1,0,0,0,913.5,408.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(700));

	// flower
	this.instance_16 = new lib.flower_3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(924,744,1,1,0,0,0,666,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(700));

	// fun_icon
	this.instance_17 = new lib.シンボル1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(169.9,347.9,1,1,0,0,0,68.2,54.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(57).to({_off:false},0).wait(1).to({x:183.3,y:348.1},0).wait(1).to({x:196.8,y:348.2},0).wait(1).to({x:210.3,y:348.4},0).wait(1).to({x:223.8,y:348.5},0).wait(1).to({x:237.3,y:348.7},0).wait(1).to({x:250.8,y:348.9},0).wait(1).to({x:264.3,y:349},0).wait(1).to({x:277.8,y:349.2},0).wait(1).to({x:291.2,y:349.3},0).wait(1).to({x:303.7,y:349.5},0).wait(1).to({x:316.2,y:349.7},0).wait(1).to({x:328.7,y:349.8},0).wait(1).to({x:341.2,y:350},0).wait(1).to({x:353.7,y:350.1},0).wait(1).to({x:366.1,y:350.3},0).wait(1).to({x:378.6,y:350.5},0).wait(1).to({x:391.1,y:350.6},0).wait(1).to({x:403.6,y:350.8},0).wait(1).to({x:416.1,y:350.9},0).wait(1).to({x:425.9,y:349.1},0).wait(1).to({x:435.7,y:347.3},0).wait(1).to({x:445.5,y:345.4},0).wait(1).to({x:455.4,y:343.6},0).wait(1).to({x:465.2,y:341.7},0).wait(1).to({x:475,y:339.9},0).wait(1).to({x:484.8,y:338.1},0).wait(1).to({x:494.7,y:336.2},0).wait(1).to({x:504.5,y:334.4},0).wait(1).to({x:514.3,y:332.5},0).wait(1).to({x:525.7,y:335.1},0).wait(1).to({x:537.2,y:337.6},0).wait(1).to({x:548.6,y:340.2},0).wait(1).to({x:560,y:342.7},0).wait(1).to({x:571.5,y:345.3},0).wait(1).to({x:582.9,y:347.9},0).wait(1).to({x:594.3,y:350.4},0).wait(1).to({x:605.8,y:353},0).wait(1).to({x:617.2,y:355.5},0).wait(1).to({x:628.6,y:358.1},0).wait(1).to({x:641.1,y:356.1},0).wait(1).to({x:653.6,y:354.2},0).wait(1).to({x:666,y:352.3},0).wait(1).to({x:678.5,y:350.3},0).wait(1).to({x:690.9,y:348.4},0).wait(1).to({x:703.4,y:346.4},0).wait(1).to({x:715.8,y:344.5},0).wait(1).to({x:728.3,y:342.6},0).wait(1).to({x:740.8,y:340.6},0).wait(1).to({x:753.2,y:338.7},0).wait(1).to({x:763.7,y:341.4},0).wait(1).to({x:774.3,y:344.1},0).wait(1).to({x:784.8,y:346.8},0).wait(1).to({x:795.3,y:349.5},0).wait(1).to({x:805.8,y:352.3},0).wait(1).to({x:816.4,y:355},0).wait(1).to({x:826.9,y:357.7},0).wait(1).to({x:837.4,y:360.4},0).wait(1).to({x:847.9,y:363.1},0).wait(1).to({x:858.4,y:365.8},0).wait(1).to({x:859.2,y:357.4},0).wait(1).to({x:859.9,y:348.9},0).wait(1).to({x:860.6,y:340.5},0).wait(1).to({x:861.4,y:332},0).wait(1).to({x:862.1,y:323.6},0).wait(1).to({x:864.1,y:330.9},0).wait(1).to({x:866,y:338.2},0).wait(1).to({x:868,y:345.5},0).wait(1).to({x:869.9,y:352.8},0).wait(1).to({x:871.9,y:343.5},0).wait(1).to({x:873.8,y:334.2},0).wait(1).to({x:875.8,y:324.8},0).wait(1).to({x:877.8,y:315.5},0).wait(1).to({x:879.7,y:328.6},0).wait(1).to({x:881.7,y:341.8},0).wait(1).to({x:883.6,y:354.9},0).wait(1).to({x:885.6,y:368.1},0).wait(1).to({x:887.5,y:366.2,alpha:0.75},0).wait(1).to({x:889.5,y:364.4,alpha:0.5},0).wait(1).to({x:891.4,y:362.5,alpha:0.25},0).wait(1).to({x:893.4,y:360.7,alpha:0},0).wait(1).to({x:685.1,y:524.9},0).wait(562));

	// ビックリ_icon
	this.instance_18 = new lib.シンボル3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1278,398.7,1,1,0,0,0,68.2,54.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_19 = new lib.シンボル4();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1278,398.7,1,1,0,0,0,68.2,54.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(144).to({_off:false},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(550));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(150).to({_off:false},0).wait(10).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(538));

	// fun_icon コピー
	this.instance_20 = new lib.シンボル2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(536.8,470.7,0.548,0.548,0,0,0,30.1,92.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(265).to({_off:false},0).wait(1).to({regX:68.2,regY:54.2,scaleX:0.61,scaleY:0.61,x:567.5,y:445,alpha:0.125},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:577.5,y:440.6,alpha:0.25},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:587.5,y:436.5,alpha:0.375},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:597.6,y:432.7,alpha:0.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:607.7,y:429.4,alpha:0.625},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:618,y:426.5,alpha:0.75},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:628.2,y:424,alpha:0.875},0).wait(1).to({scaleX:1,scaleY:1,x:638.5,y:422,alpha:1},0).wait(1).to({x:646.1,y:422.6},0).wait(1).to({x:653.6,y:423.6},0).wait(1).to({x:661.1,y:425.1},0).wait(1).to({x:668.5,y:427},0).wait(1).to({x:675.7,y:429.4},0).wait(1).to({x:682.8,y:432.2},0).wait(1).to({x:689.7,y:435.5},0).wait(1).to({x:696.4,y:439.1},0).wait(1).to({x:702.9,y:443.1},0).wait(1).to({x:709.2,y:447.4},0).wait(1).to({x:715.2,y:452},0).wait(1).to({x:721.1,y:456.8},0).wait(1).to({x:727,y:461},0).wait(1).to({x:733,y:465},0).wait(1).to({x:739.2,y:468.7},0).wait(1).to({x:745.5,y:472.2},0).wait(1).to({x:751.9,y:475.4},0).wait(1).to({x:758.5,y:478.4},0).wait(1).to({x:765.2,y:481},0).wait(1).to({x:772,y:483.4},0).wait(1).to({x:778.9,y:485.4},0).wait(1).to({x:785.9,y:487.1},0).wait(1).to({x:793,y:488.4},0).wait(1).to({x:800.1,y:489.4},0).wait(1).to({x:807.3,y:490.1},0).wait(1).to({x:814.5,y:490.3},0).wait(1).to({x:821.7},0).wait(1).to({x:828.9,y:489.8},0).wait(1).to({x:836.1,y:489.1},0).wait(1).to({x:843.2,y:488},0).wait(1).to({x:850.3,y:486.6},0).wait(1).to({x:857.3,y:484.9},0).wait(1).to({x:863.3,y:482},0).wait(1).to({x:869.5,y:479.2},0).wait(1).to({x:875.7,y:476.5},0).wait(1).to({x:881.9,y:474.1},0).wait(1).to({x:888.2,y:471.8},0).wait(1).to({x:894.6,y:469.7},0).wait(1).to({x:901.1,y:467.7},0).wait(1).to({x:907.5,y:465.9},0).wait(1).to({x:914.1,y:464.3},0).wait(1).to({x:920.6,y:462.8},0).wait(1).to({x:927.2,y:461.5},0).wait(1).to({x:933.9,y:460.4},0).wait(1).to({x:940.5,y:459.4},0).wait(1).to({x:947.2,y:458.6},0).wait(1).to({x:953.9,y:457.9},0).wait(1).to({x:960.6,y:457.4},0).wait(1).to({x:967.3,y:457},0).wait(1).to({x:974,y:456.8},0).wait(1).to({x:980.8},0).wait(1).to({x:987.5},0).wait(1).to({x:993.7,y:458.5},0).wait(1).to({x:999.9,y:459.9},0).wait(1).to({x:1006.2,y:461.2},0).wait(1).to({x:1012.4,y:462.4},0).wait(1).to({x:1018.7,y:463.3},0).wait(1).to({x:1025.1,y:464.1},0).wait(1).to({x:1031.4,y:464.8},0).wait(1).to({x:1037.8,y:465.3},0).wait(1).to({x:1044.2,y:465.5},0).wait(1).to({x:1050.6,y:465.7},0).wait(1).to({x:1057,y:465.6},0).wait(1).to({x:1063.4,y:465.3},0).wait(1).to({x:1069.7,y:464.9},0).wait(1).to({x:1076.1,y:464.3},0).wait(1).to({x:1082.4,y:463.5},0).wait(1).to({x:1088.7,y:462.5},0).wait(1).to({x:1095,y:461.4},0).wait(1).to({x:1101.3,y:460},0).wait(1).to({x:1107.5,y:458.5},0).wait(1).to({x:1113.6,y:456.8},0).wait(1).to({x:1119.2,y:454.4},0).wait(1).to({x:1124.9,y:452.2},0).wait(1).to({x:1130.6,y:450},0).wait(1).to({x:1136.3,y:447.9},0).wait(1).to({x:1142.1,y:446},0).wait(1).to({x:1147.9,y:444.2},0).wait(1).to({x:1153.7,y:442.6},0).wait(1).to({x:1159.6,y:441},0).wait(1).to({x:1165.5,y:439.6},0).wait(1).to({x:1171.5,y:438.4},0).wait(1).to({x:1177.4,y:437.2},0).wait(1).to({x:1183.4,y:436.2},0).wait(1).to({x:1189.5,y:435.3},0).wait(1).to({x:1195.5,y:434.6},0).wait(1).to({x:1201.6,y:434},0).wait(1).to({x:1207.6,y:433.5},0).wait(1).to({x:1213.7,y:433.1},0).wait(1).to({x:1219.8,y:432.9},0).wait(1).to({x:1225.9,y:432.8},0).wait(1).to({x:1231.9},0).wait(1).to({x:1237.6},0).wait(1).to({x:1243.2},0).wait(1).to({x:1248.8},0).wait(1).to({x:1254.4},0).wait(1).to({x:1260},0).wait(1).to({x:1265.6},0).wait(1).to({x:1271.2},0).wait(1).to({x:1276.8},0).wait(1).to({x:1282.4},0).wait(1).to({x:1288},0).wait(1).to({x:1293.6},0).wait(1).to({x:1299.2},0).wait(1).to({x:1304.8},0).wait(1).to({x:1310.4},0).wait(1).to({x:1316},0).wait(1).to({y:431.2},0).wait(1).to({y:429.6},0).wait(1).to({y:427.9},0).wait(1).to({y:426.3},0).wait(1).to({y:424.7},0).wait(1).to({y:423.1},0).wait(1).to({y:421.5},0).wait(1).to({y:419.8},0).wait(1).to({y:418.2},0).wait(1).to({y:416.6},0).wait(1).to({y:419},0).wait(1).to({y:421.4},0).wait(1).to({y:423.8},0).wait(1).to({y:426.2},0).wait(1).to({y:428.6},0).wait(1).to({y:431},0).wait(1).to({y:433.4},0).wait(1).to({y:435.8},0).wait(1).to({y:438.2},0).wait(1).to({y:440.6},0).wait(1).to({y:439.6},0).wait(1).to({y:438.6},0).wait(1).to({y:437.6},0).wait(1).to({y:436.6},0).wait(1).to({y:435.6},0).wait(1).to({y:434.6},0).wait(1).to({y:433.6},0).wait(1).to({y:432.6},0).wait(1).to({y:431.6},0).wait(1).to({y:430.6},0).wait(1).to({y:429.6},0).wait(1).to({y:428.6},0).wait(1).to({y:427.6},0).wait(1).to({y:426.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1313.8,y:432.2,alpha:0.833},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1311.5,y:437.9,alpha:0.667},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1309.2,y:443.5,alpha:0.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1306.9,y:449,alpha:0.333},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1304.7,y:454.6,alpha:0.167},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1302.4,y:460.3,alpha:0},0).to({_off:true},1).wait(279));

	// クエスチョン
	this.instance_21 = new lib.クエスチョン();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1152,457.7,0.601,0.601,0,0,0,118.7,95.2);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(525).to({_off:false},0).wait(1).to({regX:68.2,regY:54.2,scaleX:0.73,scaleY:0.73,x:1114.9,y:427.6,alpha:0.333},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1108.2,y:422.1,alpha:0.667},0).wait(1).to({scaleX:1,scaleY:1,x:1101.5,y:416.7,alpha:1},0).wait(25).to({scaleX:0.87,scaleY:0.87,x:1108.2,y:422.1,alpha:0.667},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1114.9,y:427.6,alpha:0.333},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:1121.6,y:433,alpha:0},0).to({_off:true},1).wait(144));

	// girl
	this.instance_22 = new lib.girl_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(97,636.5,1,1,0,0,0,97,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:97.8,regY:168.5,x:117.3,y:625.5},0).wait(1).to({x:136.8,y:620.5},0).wait(1).to({x:156.3,y:615.5},0).wait(1).to({x:175.8,y:610.5},0).wait(1).to({x:195.3,y:617.3},0).wait(1).to({x:214.8,y:624.1},0).wait(1).to({x:234.3,y:630.9},0).wait(1).to({x:253.8,y:637.6},0).wait(1).to({x:273.3,y:644.4},0).wait(1).to({x:292.8,y:638},0).wait(1).to({x:312.3,y:631.5},0).wait(1).to({x:331.8,y:625.1},0).wait(1).to({x:351.3,y:618.7},0).wait(1).to({x:370.8,y:612.2},0).wait(1).to({x:390.3,y:619.1},0).wait(1).to({x:409.8,y:625.9},0).wait(1).to({x:429.3,y:632.7},0).wait(1).to({x:448.8,y:639.6},0).wait(1).to({x:468.3,y:646.4},0).wait(1).to({x:487.8,y:639.9},0).wait(1).to({x:507.3,y:633.4},0).wait(1).to({x:526.8,y:626.9},0).wait(1).to({x:546.3,y:620.4},0).wait(1).to({x:565.8,y:613.9},0).wait(1).to({x:585.3,y:620.8},0).wait(1).to({x:604.8,y:627.7},0).wait(1).to({x:624.3,y:634.6},0).wait(1).to({x:643.8,y:641.5},0).wait(1).to({x:663.3,y:648.5},0).wait(1).to({x:682.8,y:641.8},0).wait(1).to({x:702.3,y:635.2},0).wait(1).to({x:721.8,y:628.6},0).wait(1).to({x:741.3,y:622},0).wait(1).to({x:760.8,y:615.4},0).wait(1).to({x:780.3,y:622.5},0).wait(1).to({x:799.8,y:629.5},0).wait(1).to({x:819.3,y:636.6},0).wait(1).to({x:838.8,y:643.7},0).wait(1).to({x:858.3,y:650.8},0).wait(1).to({x:877.8,y:643.9},0).wait(1).to({x:897.3,y:637},0).wait(1).to({x:916.8,y:630.1},0).wait(1).to({x:936.3,y:623.2},0).wait(1).to({x:955.8,y:616.4},0).wait(1).to({x:975.3,y:623.9},0).wait(1).to({x:994.8,y:631.5},0).wait(1).to({x:1014.3,y:639.1},0).wait(1).to({x:1033.8,y:646.7},0).wait(1).to({x:1053.3,y:654.3},0).wait(1).to({x:1072.8,y:646.2},0).wait(1).to({x:1092.3,y:638.1},0).wait(1).to({x:1111.8,y:630},0).wait(1).to({x:1131.3,y:621.9},0).wait(1).to({x:1150.8,y:613.9},0).wait(1).to({x:1170.3,y:632.2},0).wait(1).to({x:1189.8,y:650.5},0).wait(1).to({regX:97,regY:174.5,x:1189,y:636.5},0).wait(61).to({regX:97.8,regY:168.5,x:1189.8,y:628.8},0).wait(1).to({y:627.1},0).wait(1).to({y:625.4},0).wait(1).to({y:623.7},0).wait(1).to({y:622},0).wait(1).to({y:620.3},0).wait(1).to({y:618.6},0).wait(1).to({y:616.9},0).wait(1).to({y:615.2},0).wait(1).to({y:613.5},0).wait(1).to({y:615.2},0).wait(1).to({y:616.9},0).wait(1).to({y:618.6},0).wait(1).to({y:620.3},0).wait(1).to({y:622},0).wait(1).to({y:623.7},0).wait(1).to({y:625.4},0).wait(1).to({y:627.1},0).wait(1).to({y:628.8},0).wait(1).to({y:630.5},0).wait(1).to({regX:97,regY:264.6,x:1189,y:726.6},0).wait(1).to({regX:97.8,regY:168.5,scaleX:0.83,x:1189.7,y:628.8},0).wait(1).to({scaleX:0.66,x:1189.5,y:627},0).wait(1).to({scaleX:0.49,x:1189.4,y:625.3},0).wait(1).to({scaleX:0.33,x:1189.3,y:623.5},0).wait(1).to({scaleX:0.16,x:1189.1,y:621.8},0).wait(1).to({scaleX:0.01,skewY:180,x:1189,y:620},0).wait(1).to({scaleX:0.18,x:1188.9,y:618.3},0).wait(1).to({scaleX:0.35,x:1188.7,y:616.5},0).wait(1).to({scaleX:0.52,x:1188.6,y:614.8},0).wait(1).to({scaleX:0.69,x:1188.4,y:613},0).wait(1).to({scaleX:0.86,x:1188.3,y:611.3},0).wait(1).to({scaleX:1.02,x:1188.2,y:609.5},0).wait(1).to({scaleX:0.86,x:1188.3,y:611.3},0).wait(1).to({scaleX:0.69,x:1188.4,y:613},0).wait(1).to({scaleX:0.52,x:1188.6,y:614.8},0).wait(1).to({scaleX:0.35,x:1188.7,y:616.5},0).wait(1).to({scaleX:0.18,x:1188.9,y:618.3},0).wait(1).to({scaleX:0.01,x:1189,y:620},0).wait(1).to({scaleX:0.16,skewY:0,x:1189.1,y:621.8},0).wait(1).to({scaleX:0.33,x:1189.3,y:623.5},0).wait(1).to({scaleX:0.49,x:1189.4,y:625.3},0).wait(1).to({scaleX:0.66,x:1189.5,y:627},0).wait(1).to({scaleX:0.83,x:1189.7,y:628.8},0).wait(1).to({scaleX:1,x:1189.8,y:630.5},0).wait(1).to({regX:97,regY:266.6,x:1189,y:728.6},0).wait(1).to({regX:97.8,regY:168.5,x:1181,y:633.3},0).wait(1).to({x:1172.1,y:636.2},0).wait(1).to({x:1163.3,y:639},0).wait(1).to({x:1154.4,y:641.8},0).wait(1).to({x:1145.6,y:644.7},0).wait(1).to({x:1136.7,y:647.5},0).wait(1).to({x:1127.9,y:650.3},0).wait(1).to({x:1119,y:653.2},0).wait(1).to({x:1110.2,y:656},0).wait(1).to({x:1101.3,y:658.8},0).wait(1).to({x:1092.5,y:661.7},0).wait(1).to({x:1083.7,y:664.5},0).wait(1).to({x:1071.4,y:662.5},0).wait(1).to({x:1059.2,y:660.5},0).wait(1).to({x:1047,y:658.5},0).wait(1).to({x:1034.7,y:656.5},0).wait(1).to({x:1022.5,y:654.5},0).wait(1).to({x:1010.3,y:652.5},0).wait(1).to({x:998.1,y:650.5},0).wait(1).to({x:985.8,y:648.5},0).wait(1).to({x:973.6,y:646.5},0).wait(1).to({x:961.4,y:644.5},0).wait(1).to({x:949.2,y:642.5},0).wait(1).to({x:941.6,y:644.2},0).wait(1).to({x:934.1,y:645.9},0).wait(1).to({x:926.5,y:647.6},0).wait(1).to({x:919,y:649.3},0).wait(1).to({x:911.4,y:651},0).wait(1).to({x:903.9,y:652.7},0).wait(1).to({x:896.3,y:654.4},0).wait(1).to({x:888.8,y:656},0).wait(1).to({x:881.2,y:657.7},0).wait(1).to({x:873.7,y:659.4},0).wait(1).to({x:866.1,y:661.1},0).wait(1).to({x:858.6,y:662.8},0).wait(1).to({x:851,y:664.5},0).wait(1).to({x:840.9,y:662.2},0).wait(1).to({x:830.8,y:659.9},0).wait(1).to({x:820.6,y:657.6},0).wait(1).to({x:810.5,y:655.3},0).wait(1).to({x:800.4,y:653},0).wait(1).to({x:790.2,y:650.7},0).wait(1).to({x:780.1,y:648.4},0).wait(1).to({x:769.9,y:646.1},0).wait(1).to({x:759.8,y:643.8},0).wait(1).to({x:749.7,y:641.5},0).wait(1).to({x:739.5,y:639.2},0).wait(1).to({x:733.1,y:638},0).wait(1).to({x:726.6,y:636.9},0).wait(1).to({x:720.2,y:635.7},0).wait(1).to({x:713.7,y:634.5},0).wait(1).to({x:707.3,y:633.3},0).wait(1).to({x:700.8,y:632.1},0).wait(1).to({x:694.4,y:630.9},0).wait(1).to({x:687.9,y:629.7},0).wait(1).to({x:681.5,y:628.5},0).wait(1).to({x:675,y:627.3},0).wait(1).to({x:668.6,y:626.2},0).wait(1).to({x:662.1,y:625},0).wait(1).to({x:655.7,y:623.8},0).wait(1).to({x:649.2,y:622.6},0).wait(1).to({x:642.8,y:621.4},0).wait(1).to({x:633.1,y:622.5},0).wait(1).to({x:623.5,y:623.5},0).wait(1).to({x:613.8,y:624.6},0).wait(1).to({x:604.1,y:625.6},0).wait(1).to({x:594.5,y:626.7},0).wait(1).to({x:584.8,y:627.7},0).wait(1).to({x:575.1,y:628.8},0).wait(1).to({x:565.5,y:629.8},0).wait(1).to({x:555.8,y:630.9},0).wait(1).to({x:546.1,y:631.9},0).wait(1).to({x:536.5,y:633},0).wait(1).to({x:526.8,y:634.1},0).wait(1).to({x:517.1,y:635.1},0).wait(1).to({x:507.5,y:636.2},0).wait(1).to({x:497.8,y:637.2},0).wait(1).to({x:488.1,y:638.3},0).wait(1).to({x:478.4,y:639.3},0).wait(1).to({x:468.8,y:640.4},0).wait(1).to({x:459.1,y:641.4},0).wait(1).to({regX:97,regY:266.6,x:448.7,y:740.6},0).wait(1).to({regX:97.8,regY:168.5,scaleX:0.78,x:449.3,y:642.5},0).wait(1).to({scaleX:0.56,x:449.1},0).wait(1).to({scaleX:0.33,x:448.9},0).wait(1).to({scaleX:0.11,x:448.7},0).wait(1).to({skewY:180,x:448.6},0).wait(1).to({scaleX:0.33,x:448.4},0).wait(1).to({scaleX:0.56,x:448.2},0).wait(1).to({scaleX:0.78,x:448},0).wait(1).to({scaleX:1,x:447.9},0).wait(1).to({scaleX:0.8,x:448},0).wait(1).to({scaleX:0.6,x:448.2},0).wait(1).to({scaleX:0.4,x:448.4},0).wait(1).to({scaleX:0.2,x:448.5},0).wait(1).to({scaleX:0,skewY:0,x:256},0).wait(1).to({scaleX:0.2,x:448.8},0).wait(1).to({scaleX:0.4,x:449},0).wait(1).to({scaleX:0.6,x:449.2},0).wait(1).to({scaleX:0.8,x:449.3},0).wait(1).to({scaleX:1,x:449.5},0).wait(1).to({regX:97,regY:266.6,x:455.1,y:740.5},0).wait(1).to({regX:97.8,regY:168.5,x:462.3,y:642.2},0).wait(1).to({x:468.7,y:642},0).wait(1).to({x:475.2,y:641.9},0).wait(1).to({x:481.6,y:641.7},0).wait(1).to({x:488,y:641.6},0).wait(1).to({x:494.5,y:641.4},0).wait(1).to({x:500.9,y:641.2},0).wait(1).to({x:507.4,y:641.1},0).wait(1).to({x:513.8,y:640.9},0).wait(1).to({x:520.2,y:640.8},0).wait(1).to({x:526.7,y:640.6},0).wait(1).to({x:533.1,y:640.4},0).wait(1).to({x:539.5,y:640.3},0).wait(1).to({x:546,y:640.1},0).wait(1).to({x:552.4,y:640},0).wait(1).to({x:558.9,y:639.8},0).wait(1).to({x:565.3,y:639.6},0).wait(1).to({x:571.7,y:639.5},0).wait(1).to({x:578.2,y:639.3},0).wait(1).to({x:584.6,y:639.2},0).wait(1).to({x:591.1,y:640.7},0).wait(1).to({x:597.6,y:642.2},0).wait(1).to({x:604.1,y:643.7},0).wait(1).to({x:610.6,y:645.2},0).wait(1).to({x:617.1,y:646.7},0).wait(1).to({x:623.6,y:648.3},0).wait(1).to({x:630.1,y:649.8},0).wait(1).to({x:636.7,y:651.3},0).wait(1).to({x:643.2,y:652.8},0).wait(1).to({x:649.7,y:654.3},0).wait(1).to({x:656.2,y:655.8},0).wait(1).to({x:662.7,y:657.3},0).wait(1).to({x:669.2,y:658.9},0).wait(1).to({x:675.7,y:660.4},0).wait(1).to({x:682.2,y:661.9},0).wait(1).to({x:688.7,y:663.4},0).wait(1).to({x:695.2,y:664.9},0).wait(1).to({x:701.7,y:666.4},0).wait(1).to({x:708.2,y:668},0).wait(1).to({x:714.7,y:669.5},0).wait(1).to({x:721.1,y:668},0).wait(1).to({x:727.4,y:666.4},0).wait(1).to({x:733.8,y:664.9},0).wait(1).to({x:740.1,y:663.4},0).wait(1).to({x:746.5,y:661.9},0).wait(1).to({x:752.8,y:660.4},0).wait(1).to({x:759.2,y:658.9},0).wait(1).to({x:765.6,y:657.4},0).wait(1).to({x:771.9,y:655.9},0).wait(1).to({x:778.3,y:654.3},0).wait(1).to({x:784.6,y:652.8},0).wait(1).to({x:791,y:651.3},0).wait(1).to({x:797.3,y:649.8},0).wait(1).to({x:803.7,y:648.3},0).wait(1).to({x:810,y:646.8},0).wait(1).to({x:816.4,y:645.3},0).wait(1).to({x:822.7,y:643.8},0).wait(1).to({x:829.1,y:642.2},0).wait(1).to({x:835.5,y:640.7},0).wait(1).to({x:841.8,y:639.2},0).wait(1).to({x:848.3,y:640.5},0).wait(1).to({x:854.7,y:641.8},0).wait(1).to({x:861.1,y:643},0).wait(1).to({x:867.6,y:644.3},0).wait(1).to({x:874,y:645.5},0).wait(1).to({x:880.5,y:646.8},0).wait(1).to({x:886.9,y:648.1},0).wait(1).to({x:893.4,y:649.3},0).wait(1).to({x:899.8,y:650.6},0).wait(1).to({x:906.2,y:651.9},0).wait(1).to({x:912.7,y:653.1},0).wait(1).to({x:919.1,y:654.4},0).wait(1).to({x:925.6,y:655.6},0).wait(1).to({x:932,y:656.9},0).wait(1).to({x:938.5,y:658.2},0).wait(1).to({x:944.9,y:659.4},0).wait(1).to({x:951.4,y:660.7},0).wait(1).to({x:957.8,y:662},0).wait(1).to({x:964.2,y:663.2},0).wait(1).to({x:970.7,y:664.5},0).wait(1).to({x:977.1,y:663.2},0).wait(1).to({x:983.6,y:662},0).wait(1).to({x:990,y:660.7},0).wait(1).to({x:996.5,y:659.4},0).wait(1).to({x:1002.9,y:658.2},0).wait(1).to({x:1009.3,y:656.9},0).wait(1).to({x:1015.8,y:655.6},0).wait(1).to({x:1022.2,y:654.4},0).wait(1).to({x:1028.7,y:653.1},0).wait(1).to({x:1035.1,y:651.9},0).wait(1).to({x:1041.6,y:650.6},0).wait(1).to({x:1048,y:649.3},0).wait(1).to({x:1054.5,y:648.1},0).wait(1).to({x:1060.9,y:646.8},0).wait(1).to({x:1067.3,y:645.5},0).wait(1).to({x:1073.8,y:644.3},0).wait(1).to({x:1080.2,y:643},0).wait(1).to({x:1086.7,y:641.8},0).wait(1).to({x:1093.1,y:640.5},0).wait(1).to({x:1099.6,y:639.2},0).wait(1).to({x:1106,y:638.6},0).wait(1).to({x:1112.4,y:638},0).wait(1).to({x:1118.9,y:637.3},0).wait(1).to({x:1125.3,y:636.7},0).wait(1).to({x:1131.8,y:636.1},0).wait(1).to({x:1138.2,y:635.5},0).wait(1).to({x:1144.7,y:634.8},0).wait(1).to({x:1151.1,y:634.2},0).wait(1).to({x:1157.6,y:633.6},0).wait(1).to({x:1164,y:633},0).wait(1).to({x:1170.4,y:632.3},0).wait(1).to({x:1176.9,y:631.7},0).wait(1).to({x:1183.3,y:631.1},0).wait(1).to({x:1189.8,y:630.5},0).wait(1).to({regX:97,regY:174.5,x:1189,y:636.5},0).wait(1).to({regX:97.8,regY:168.5,x:1189.8,y:628.5},0).wait(1).to({y:626.5},0).wait(1).to({y:624.5},0).wait(1).to({y:622.5},0).wait(1).to({y:620.5},0).wait(1).to({y:618.5},0).wait(1).to({y:616.5},0).wait(1).to({y:614.5},0).wait(1).to({y:612.5},0).wait(1).to({y:610.5},0).wait(1).to({y:613.2},0).wait(1).to({y:615.8},0).wait(1).to({y:618.5},0).wait(1).to({y:621.2},0).wait(1).to({y:623.8},0).wait(1).to({y:626.5},0).wait(1).to({y:629.2},0).wait(1).to({y:631.8},0).wait(1).to({y:634.5},0).wait(1).to({y:637.2},0).wait(1).to({y:634.8},0).wait(1).to({y:632.5},0).wait(1).to({y:630.2},0).wait(1).to({y:627.8},0).wait(1).to({y:625.5},0).wait(1).to({y:623.2},0).wait(1).to({y:620.8},0).wait(1).to({y:618.5},0).wait(1).to({y:616.2},0).wait(1).to({y:613.8},0).wait(1).to({y:615.5},0).wait(1).to({y:617.2},0).wait(1).to({y:618.8},0).wait(1).to({y:620.5},0).wait(1).to({y:622.2},0).wait(1).to({y:623.8},0).wait(1).to({y:625.5},0).wait(1).to({y:627.2},0).wait(1).to({y:628.8},0).wait(1).to({y:630.5},0).wait(1).to({regX:97,regY:174.5,x:1189,y:636.5},0).wait(1).to({regX:97.8,regY:168.5,x:1189.8,y:630.5},0).wait(67).to({regX:97,regY:174.5,x:1189,y:636.5},0).wait(1).to({regX:97.8,regY:168.5,x:1189.8,y:630.5},0).wait(31).to({regX:97,regY:174.5,x:1189,y:636.5},0).wait(1).to({regX:97.8,regY:168.5,x:1189.8,y:630.5},0).wait(30).to({regX:97,regY:261.6,x:1189,y:723.6},0).wait(1).to({regX:97.8,regY:168.5,x:1189.8,y:624.1},0).wait(1).to({y:617.7},0).wait(1).to({y:611.3},0).wait(1).to({y:604.9},0).wait(1).to({y:598.5},0).wait(1).to({y:604.5},0).wait(1).to({y:610.5},0).wait(1).to({y:616.5},0).wait(1).to({y:622.5},0).wait(1).to({y:628.5},0).wait(1).to({y:634.5},0).wait(1).to({y:628},0).wait(1).to({y:621.5},0).wait(1).to({y:615},0).wait(1).to({y:608.4},0).wait(1).to({y:601.9},0).wait(1).to({y:608.1},0).wait(1).to({y:614.2},0).wait(1).to({y:620.3},0).wait(1).to({y:626.4},0).wait(1).to({y:632.6},0).wait(1).to({y:638.7},0).wait(1).to({y:632},0).wait(1).to({y:625.2},0).wait(1).to({y:618.5},0).wait(1).to({y:611.8},0).wait(1).to({y:605.1},0).wait(1).to({y:612.7},0).wait(1).to({y:620.4},0).wait(1).to({y:628.1},0).wait(1).to({y:635.7},0).wait(1).to({y:643.4},0).wait(1).to({y:636.2},0).wait(1).to({y:628.9},0).wait(1).to({y:621.6},0).wait(1).to({y:614.4},0).wait(1).to({y:607.1},0).wait(1).to({y:615.8},0).wait(1).to({y:624.6},0).wait(1).to({y:633.3},0).wait(1).to({y:642.1},0).wait(1).to({y:650.8},0).wait(1).to({y:646.7},0).wait(1).to({y:642.7},0).wait(1).to({y:638.6},0).wait(1).to({y:634.6},0).wait(1).to({y:630.5},0).wait(1).to({regX:97,regY:279.1,x:1189,y:741.1},0).wait(1).to({regX:97.8,regY:168.5,x:1204.7,y:617},0).wait(1).to({x:1221.4,y:605.6},0).wait(1).to({x:1239.8,y:597.5},0).wait(1).to({x:1259.5,y:593.5},0).wait(1).to({x:1279.6,y:594.2},0).wait(1).to({x:1299.1,y:599.2},0).wait(1).to({x:1317.5,y:607.5},0).wait(1).to({x:1334.6,y:618.1},0).wait(1).to({x:1350.6,y:630.5},0).wait(1).to({x:1364.7,y:616.3},0).wait(1).to({x:1380.6,y:604},0).wait(1).to({x:1398.3,y:594.4},0).wait(1).to({x:1417.4,y:588.2},0).wait(1).to({x:1437.3,y:585.9},0).wait(1).to({x:1457.3,y:587.3},0).wait(1).to({x:1476.9,y:591.9},0).wait(1).to({x:1495.7,y:599.1},0).wait(1).to({x:1513.6,y:608.2},0).wait(1).to({x:1530.7,y:618.8},0).wait(1).to({x:1547,y:630.5},0).wait(1).to({x:1561.9,y:615.7},0).wait(1).to({x:1578.4,y:602.8},0).wait(1).to({x:1596.8,y:592.7},0).wait(1).to({x:1616.9,y:587.1},0).wait(1).to({x:1637.9},0).wait(1).to({x:1658,y:592.7},0).wait(1).to({x:1676.4,y:602.7},0).wait(1).to({x:1692.9,y:615.7},0).wait(1).to({x:1707.8,y:630.5},0).wait(71));

	// bg2
	this.instance_23 = new lib.bg2_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(924,759,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(700));

	// ワクワク
	this.instance_24 = new lib.ワクワク();
	this.instance_24.parent = this;
	this.instance_24.setTransform(737.1,400.7,0.623,0.623,0,0,0,108.1,90.2);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(380).to({_off:false},0).wait(1).to({regX:68.2,regY:54.2,scaleX:0.66,scaleY:0.66,x:710.8,y:376.9,alpha:0.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:709.2,y:375.6,alpha:0.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:707.8,y:374.2,alpha:0.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:706.2,y:372.9,alpha:0.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:704.8,y:371.5,alpha:0.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:703.2,y:370.1,alpha:0.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:701.8,y:368.8,alpha:0.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:700.2,y:367.4,alpha:0.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:698.7,y:366.1,alpha:0.9},0).wait(1).to({scaleX:1,scaleY:1,x:697.2,y:364.7,alpha:1},0).wait(26).to({scaleX:0.94,scaleY:0.94,x:699.7,y:367,alpha:0.833},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:702.2,y:369.3,alpha:0.667},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:704.7,y:371.5,alpha:0.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:707.2,y:373.8,alpha:0.333},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:709.8,y:376,alpha:0.167},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:712.3,y:378.3,alpha:0},0).wait(279));

	// ビックリ
	this.instance_25 = new lib.シンボル7();
	this.instance_25.parent = this;
	this.instance_25.setTransform(905.6,400.6,0.474,0.474,0,0,0,30.9,100);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(610).to({_off:false},0).wait(1).to({regX:68.2,regY:54.2,scaleX:0.58,scaleY:0.58,x:927.5,y:373.1,alpha:0.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:931.8,y:367.3,alpha:0.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:936,y:361.6,alpha:0.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:940.3,y:355.8,alpha:0.8},0).wait(1).to({scaleX:1,scaleY:1,x:944.5,y:350,alpha:1},0).wait(12).to({y:349.9},0).wait(4).to({x:956.5,y:329.9},0).wait(1).to({x:973.1,y:313.7},0).wait(1).to({x:994.7,y:305.2},0).wait(1).to({x:1017.9,y:306.2},0).wait(1).to({x:1039.9,y:313.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1053.7,y:312.3,alpha:0.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1068.6,y:315.7,alpha:0.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1081.4,y:328.2,alpha:0.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:1087.8,y:348.4,alpha:0.2},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1088.9,y:371.2,alpha:0},0).to({_off:true},1).wait(59));

	// bear
	this.instance_26 = new lib.bear();
	this.instance_26.parent = this;
	this.instance_26.setTransform(84.5,694,1,1,0,0,0,327.5,291.9);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(57).to({_off:false},0).wait(1).to({regX:320.3,regY:176.7,rotation:0.2,x:90.8,y:574.8},0).wait(1).to({rotation:0.4,x:104.3,y:570.7},0).wait(1).to({rotation:0.7,x:117.8,y:566.7},0).wait(1).to({rotation:0.9,x:131.2,y:562.7},0).wait(1).to({rotation:1.1,x:144.7,y:558.6},0).wait(1).to({rotation:1.3,x:158.1,y:554.7},0).wait(1).to({rotation:1.5,x:171.6,y:550.7},0).wait(1).to({rotation:1.8,x:181.5,y:552},0).wait(1).to({rotation:2,x:191.4,y:553.5},0).wait(1).to({rotation:2.2,x:201.3,y:554.9},0).wait(1).to({rotation:2.4,x:211.1,y:556.4},0).wait(1).to({rotation:2.6,x:221.1,y:557.8},0).wait(1).to({rotation:2.9,x:230.9,y:559.3},0).wait(1).to({rotation:3.1,x:240.9,y:560.7},0).wait(1).to({rotation:3.3,x:250.7,y:562.2},0).wait(1).to({rotation:3.5,x:260.6,y:563.6},0).wait(1).to({rotation:3.8,x:270.5,y:565},0).wait(1).to({rotation:4,x:282.4,y:562.5},0).wait(1).to({rotation:4.2,x:294.3,y:560},0).wait(1).to({rotation:4.4,x:306.1,y:557.4},0).wait(1).to({rotation:4.6,x:318,y:554.8},0).wait(1).to({rotation:4.9,x:329.9,y:552.3},0).wait(1).to({rotation:5.1,x:341.8,y:549.8},0).wait(1).to({rotation:5.3,x:353.7,y:547.2},0).wait(1).to({rotation:5.5,x:365.5,y:544.7},0).wait(1).to({rotation:5.7,x:377.5,y:542.1},0).wait(1).to({rotation:6,x:389.3,y:539.6},0).wait(1).to({rotation:5.8,x:403.9,y:543.5},0).wait(1).to({rotation:5.6,x:418.4,y:547.5},0).wait(1).to({rotation:5.4,x:433,y:551.4},0).wait(1).to({rotation:5.2,x:447.4,y:555.4},0).wait(1).to({rotation:5,x:461.9,y:559.3},0).wait(1).to({rotation:4.8,x:476.5,y:563.3},0).wait(1).to({rotation:4.7,x:491,y:567.2},0).wait(1).to({rotation:4.5,x:505.5,y:571.2},0).wait(1).to({rotation:4.3,x:520,y:575.1},0).wait(1).to({rotation:4.1,x:534.6,y:579.1},0).wait(1).to({rotation:3.9,x:547.5,y:576.3},0).wait(1).to({rotation:3.7,x:560.5,y:573.6},0).wait(1).to({rotation:3.5,x:573.5,y:570.8},0).wait(1).to({rotation:3.4,x:586.5,y:568.1},0).wait(1).to({rotation:3.2,x:599.5,y:565.4},0).wait(1).to({rotation:3,x:612.4,y:562.6},0).wait(1).to({rotation:2.8,x:625.5,y:559.8},0).wait(1).to({rotation:2.6,x:638.4,y:557.1},0).wait(1).to({rotation:2.4,x:651.5,y:554.3},0).wait(1).to({rotation:2.2,x:664.5,y:551.6},0).wait(1).to({rotation:2,x:677.5,y:548.9},0).wait(1).to({rotation:1.9,x:690.5,y:551.6},0).wait(1).to({rotation:1.7,x:703.5,y:554.3},0).wait(1).to({rotation:1.5,x:716.4,y:557},0).wait(1).to({rotation:1.3,x:729.4,y:559.7},0).wait(1).to({rotation:1.1,x:742.4,y:562.4},0).wait(1).to({rotation:0.9,x:755.4,y:565.2},0).wait(1).to({rotation:0.7,x:768.4,y:567.9},0).wait(1).to({rotation:0.6,x:781.5,y:570.6},0).wait(1).to({rotation:0.4,x:794.4,y:573.4},0).wait(1).to({rotation:0.2,x:807.4,y:576.1},0).wait(1).to({rotation:0,x:820.4,y:578.8},0).wait(1).to({regX:321.5,regY:281.7,x:827.5,y:683.7},0).wait(1).to({regX:320.3,regY:176.7,x:826.3,y:571},0).wait(1).to({y:563.2},0).wait(1).to({y:555.5},0).wait(1).to({y:547.7},0).wait(1).to({y:554.6},0).wait(1).to({y:561.6},0).wait(1).to({y:568.5},0).wait(1).to({y:575.5},0).wait(1).to({y:565.7},0).wait(1).to({y:555.9},0).wait(1).to({y:546.1},0).wait(1).to({y:536.3},0).wait(1).to({y:547.2},0).wait(1).to({y:558.1},0).wait(1).to({y:568.9},0).wait(1).to({y:579.8},0).wait(1).to({y:579.6},0).wait(1).to({y:579.3},0).wait(1).to({y:579},0).wait(1).to({y:578.7},0).wait(1).to({regX:321.5,regY:297.7,x:827.5,y:699.7},0).wait(25).to({regY:181.5,y:583.5},0).wait(1).to({regX:320.3,regY:176.7,x:837.2,y:580.4},0).wait(1).to({x:848,y:582},0).wait(1).to({x:858.9,y:583.7},0).wait(1).to({x:869.7,y:585.4},0).wait(1).to({x:880.6,y:587},0).wait(1).to({x:891.4,y:588.7},0).wait(1).to({x:902.3,y:590.4},0).wait(1).to({x:913.1,y:592},0).wait(1).to({x:924,y:593.7},0).wait(1).to({x:934.8,y:595.4},0).wait(1).to({x:945.7,y:597},0).wait(1).to({x:956.5,y:598.7},0).wait(1).to({x:970.7,y:595.5},0).wait(1).to({x:984.9,y:592.3},0).wait(1).to({x:999.1,y:589.2},0).wait(1).to({x:1013.3,y:586},0).wait(1).to({x:1027.5,y:582.8},0).wait(1).to({x:1041.7,y:579.6},0).wait(1).to({x:1055.9,y:576.4},0).wait(1).to({x:1070.1,y:573.2},0).wait(1).to({x:1084.3,y:570.1},0).wait(1).to({x:1098.5,y:566.9},0).wait(1).to({x:1112.7,y:563.7},0).wait(1).to({x:1118.4,y:565.2},0).wait(1).to({x:1124.1,y:566.8},0).wait(1).to({x:1129.8,y:568.3},0).wait(1).to({x:1135.5,y:569.9},0).wait(1).to({x:1141.2,y:571.4},0).wait(1).to({x:1146.9,y:572.9},0).wait(1).to({x:1152.6,y:574.5},0).wait(1).to({x:1158.3,y:576},0).wait(1).to({x:1164,y:577.5},0).wait(1).to({x:1169.7,y:579.1},0).wait(1).to({x:1175.4,y:580.6},0).wait(1).to({x:1181.1,y:582.2},0).wait(1).to({x:1186.8,y:583.7},0).wait(1).to({x:1194.8,y:581.9},0).wait(1).to({x:1202.8,y:580.1},0).wait(1).to({x:1210.8,y:578.2},0).wait(1).to({x:1218.9,y:576.4},0).wait(1).to({x:1226.9,y:574.6},0).wait(1).to({x:1234.9,y:572.8},0).wait(1).to({x:1242.9,y:571},0).wait(1).to({x:1250.9,y:569.2},0).wait(1).to({x:1258.9,y:567.3},0).wait(1).to({x:1266.9,y:565.5},0).wait(1).to({x:1275,y:563.7},0).wait(1).to({x:1281.3,y:565},0).wait(1).to({x:1287.7,y:566.4},0).wait(1).to({x:1294,y:567.7},0).wait(1).to({x:1300.4,y:569},0).wait(1).to({x:1306.7,y:570.4},0).wait(1).to({x:1313.1,y:571.7},0).wait(1).to({x:1319.4,y:573},0).wait(1).to({x:1325.8,y:574.4},0).wait(1).to({x:1332.2,y:575.7},0).wait(1).to({x:1338.5,y:577},0).wait(1).to({x:1344.9,y:578.4},0).wait(1).to({x:1351.2,y:579.7},0).wait(1).to({x:1357.6,y:581},0).wait(1).to({x:1363.9,y:582.4},0).wait(1).to({x:1370.3,y:583.7},0).wait(20).to({regX:321.5,regY:181.5,x:1371.5,y:588.5},0).wait(1).to({regX:320.3,regY:176.7,scaleX:0.78,x:1370.5,y:581.5},0).wait(1).to({scaleX:0.56,x:1370.8,y:579.3},0).wait(1).to({scaleX:0.33,x:1371.1,y:577},0).wait(1).to({scaleX:0.11,x:1371.4,y:574.8},0).wait(1).to({skewY:180,x:1371.6,y:572.6},0).wait(1).to({scaleX:0.33,x:1371.9,y:570.4},0).wait(1).to({scaleX:0.56,x:1372.2,y:568.1},0).wait(1).to({scaleX:0.78,x:1372.5,y:565.9},0).wait(1).to({scaleX:1,x:1372.7,y:563.7},0).wait(1).to({scaleX:0.8,x:1372.5,y:565.7},0).wait(1).to({scaleX:0.6,x:1372.2,y:567.7},0).wait(1).to({scaleX:0.4,x:1372,y:569.7},0).wait(1).to({scaleX:0.2,x:1371.8,y:571.7},0).wait(1).to({scaleX:0,skewY:0,x:2048,y:573.7},0).wait(1).to({scaleX:0.2,x:1371.3,y:575.7},0).wait(1).to({scaleX:0.4,x:1371,y:577.7},0).wait(1).to({scaleX:0.6,x:1370.8,y:579.7},0).wait(1).to({scaleX:0.8,x:1370.6,y:581.7},0).wait(1).to({scaleX:1,x:1370.3,y:583.7},0).wait(1).to({regX:321.5,regY:181.5,x:1371.5,y:588.5},0).wait(1).to({regX:320.3,regY:176.7,x:1364.8,y:584.7},0).wait(1).to({x:1359.3,y:585.7},0).wait(1).to({x:1353.8,y:586.7},0).wait(1).to({x:1348.3,y:587.7},0).wait(1).to({x:1342.8,y:588.7},0).wait(1).to({x:1337.3,y:589.7},0).wait(1).to({x:1331.7,y:590.7},0).wait(1).to({x:1326.2,y:591.7},0).wait(1).to({x:1320.7,y:592.7},0).wait(1).to({x:1315.2,y:593.7},0).wait(1).to({x:1309.7,y:594.7},0).wait(1).to({x:1304.2,y:595.7},0).wait(1).to({x:1298.7,y:596.7},0).wait(1).to({x:1293.2,y:597.7},0).wait(1).to({x:1287.7,y:598.7},0).wait(1).to({x:1282.2,y:599.7},0).wait(1).to({x:1276.7,y:600.7},0).wait(1).to({x:1271.2,y:601.7},0).wait(1).to({x:1265.7,y:602.7},0).wait(1).to({x:1260.2,y:603.7},0).wait(1).to({x:1254.2,y:602.3},0).wait(1).to({x:1248.2,y:600.9},0).wait(1).to({x:1242.2,y:599.5},0).wait(1).to({x:1236.2,y:598.1},0).wait(1).to({x:1230.2,y:596.7},0).wait(1).to({x:1224.2,y:595.3},0).wait(1).to({x:1218.2,y:593.9},0).wait(1).to({x:1212.2,y:592.5},0).wait(1).to({x:1206.2,y:591.1},0).wait(1).to({x:1200.2,y:589.7},0).wait(1).to({x:1194.2,y:588.3},0).wait(1).to({x:1188.2,y:586.9},0).wait(1).to({x:1182.2,y:585.5},0).wait(1).to({x:1176.2,y:584.1},0).wait(1).to({x:1170.2,y:582.7},0).wait(1).to({x:1164.2,y:581.3},0).wait(1).to({x:1158.2,y:579.9},0).wait(1).to({x:1152.2,y:578.5},0).wait(1).to({x:1146.2,y:577.1},0).wait(1).to({x:1140.2,y:575.7},0).wait(1).to({x:1134.1,y:576.7},0).wait(1).to({x:1128.1,y:577.7},0).wait(1).to({x:1122.1,y:578.7},0).wait(1).to({x:1116.1,y:579.7},0).wait(1).to({x:1110.1,y:580.7},0).wait(1).to({x:1104.1,y:581.7},0).wait(1).to({x:1098.1,y:582.7},0).wait(1).to({x:1092.1,y:583.7},0).wait(1).to({x:1086.1,y:584.7},0).wait(1).to({x:1080.1,y:585.7},0).wait(1).to({x:1074,y:586.7},0).wait(1).to({x:1068,y:587.7},0).wait(1).to({x:1062,y:588.7},0).wait(1).to({x:1056,y:589.7},0).wait(1).to({x:1050,y:590.7},0).wait(1).to({x:1044,y:591.7},0).wait(1).to({x:1038,y:592.7},0).wait(1).to({x:1032,y:593.7},0).wait(1).to({x:1026,y:594.7},0).wait(1).to({x:1020,y:595.7},0).wait(1).to({x:1012.1,y:593.7},0).wait(1).to({x:1004.2,y:591.7},0).wait(1).to({x:996.3,y:589.7},0).wait(1).to({x:988.5,y:587.7},0).wait(1).to({x:980.6,y:585.7},0).wait(1).to({x:972.7,y:583.7},0).wait(1).to({x:964.9,y:581.7},0).wait(1).to({x:957,y:579.7},0).wait(1).to({x:949.1,y:577.7},0).wait(1).to({x:941.3,y:575.7},0).wait(1).to({x:933.4,y:573.7},0).wait(1).to({x:925.5,y:571.7},0).wait(1).to({x:917.6,y:569.7},0).wait(1).to({x:909.8,y:567.7},0).wait(1).to({x:901.9,y:565.7},0).wait(1).to({x:894,y:563.7},0).wait(1).to({x:886.2,y:561.7},0).wait(1).to({x:878.3,y:559.7},0).wait(1).to({x:870.4,y:557.7},0).wait(1).to({x:862.6,y:555.7},0).wait(1).to({x:860.7,y:556.8},0).wait(1).to({x:858.9,y:558},0).wait(1).to({x:857.1,y:559.1},0).wait(1).to({x:855.3,y:560.3},0).wait(1).to({x:853.5,y:561.4},0).wait(1).to({x:851.7,y:562.6},0).wait(1).to({x:849.9,y:563.7},0).wait(1).to({x:848.1,y:564.9},0).wait(1).to({x:846.2,y:566},0).wait(1).to({x:844.4,y:567.2},0).wait(1).to({x:842.6,y:568.3},0).wait(1).to({x:840.8,y:569.5},0).wait(1).to({x:839,y:570.6},0).wait(1).to({x:837.2,y:571.8},0).wait(1).to({x:835.4,y:572.9},0).wait(1).to({x:833.6,y:574.1},0).wait(1).to({x:831.7,y:575.2},0).wait(1).to({x:829.9,y:576.4},0).wait(1).to({x:828.1,y:577.5},0).wait(1).to({x:826.3,y:578.7},0).wait(1).to({y:576.2},0).wait(1).to({y:573.7},0).wait(1).to({y:571.2},0).wait(1).to({y:568.7},0).wait(1).to({y:566.2},0).wait(1).to({y:563.7},0).wait(1).to({y:561.2},0).wait(1).to({y:558.7},0).wait(1).to({y:562},0).wait(1).to({y:565.4},0).wait(1).to({y:568.7},0).wait(1).to({y:572},0).wait(1).to({y:575.4},0).wait(1).to({y:578.7},0).wait(1).to({regX:321.5,regY:293.7,x:827.5,y:695.7},0).wait(1).to({regX:320.3,regY:176.7,x:826.3,y:578.7},0).wait(40).to({regX:321.5,regY:181.5,x:827.5,y:583.5},0).wait(1).to({regX:320.3,regY:176.7,x:826.3,y:576.5},0).wait(1).to({y:574.3},0).wait(1).to({y:572},0).wait(1).to({y:569.8},0).wait(1).to({y:567.6},0).wait(1).to({y:565.4},0).wait(1).to({y:563.1},0).wait(1).to({y:560.9},0).wait(1).to({y:558.7},0).wait(1).to({y:561},0).wait(1).to({y:563.4},0).wait(1).to({y:565.7},0).wait(1).to({y:568.1},0).wait(1).to({y:570.4},0).wait(1).to({y:572.8},0).wait(1).to({y:575.1},0).wait(1).to({y:577.5},0).wait(1).to({y:579.8},0).wait(1).to({y:582.1},0).wait(1).to({y:580.1},0).wait(1).to({y:578},0).wait(1).to({y:575.9},0).wait(1).to({y:573.9},0).wait(1).to({y:571.8},0).wait(1).to({y:569.7},0).wait(1).to({y:567.6},0).wait(1).to({y:565.6},0).wait(1).to({y:563.5},0).wait(1).to({y:561.4},0).wait(1).to({y:563.9},0).wait(1).to({y:566.3},0).wait(1).to({y:568.8},0).wait(1).to({y:571.2},0).wait(1).to({y:573.7},0).wait(1).to({y:576.2},0).wait(1).to({y:578.6},0).wait(1).to({y:581.1},0).wait(1).to({y:583.5},0).wait(1).to({y:586},0).wait(1).to({y:583.7},0).wait(1).to({y:581.5},0).wait(1).to({y:579.2},0).wait(1).to({y:576.9},0).wait(1).to({y:574.7},0).wait(1).to({y:572.4},0).wait(1).to({y:570.2},0).wait(1).to({y:567.9},0).wait(1).to({y:565.6},0).wait(1).to({y:563.4},0).wait(1).to({y:566.2},0).wait(1).to({y:569.1},0).wait(1).to({y:571.9},0).wait(1).to({y:574.8},0).wait(1).to({y:577.6},0).wait(1).to({y:580.5},0).wait(1).to({y:583.3},0).wait(1).to({y:586.2},0).wait(1).to({y:589},0).wait(1).to({y:591.9},0).wait(1).to({y:590.2},0).wait(1).to({y:588.6},0).wait(1).to({y:586.9},0).wait(1).to({y:585.3},0).wait(1).to({y:583.6},0).wait(1).to({y:582},0).wait(1).to({y:580.4},0).wait(1).to({y:578.7},0).wait(1).to({regX:321.5,regY:181.5,x:827.5,y:583.5},0).wait(1).to({regX:320.3,regY:176.7,x:826.3,y:578.7},0).wait(31).to({regX:321.5,regY:292.4,x:827.5,y:695.5},0).wait(1).to({regX:320.3,regY:176.7,x:826.3,y:579.8},0).wait(108).to({regX:321.5,regY:292.4,x:827.5,y:694.4},0).wait(1).to({regX:320.3,regY:176.7,x:849.3,y:565},0).wait(1).to({x:873.5,y:553.7},0).wait(1).to({x:898.9,y:545.2},0).wait(1).to({x:925.1,y:540},0).wait(1).to({x:951.8,y:538.3},0).wait(1).to({x:978.5,y:540.3},0).wait(1).to({x:1004.7,y:545.8},0).wait(1).to({x:1030,y:554.3},0).wait(1).to({x:1054.4,y:565.4},0).wait(1).to({x:1077.6,y:578.7},0).wait(1).to({x:1097.9,y:564.7},0).wait(1).to({x:1119.5,y:552.7},0).wait(1).to({x:1142.3,y:543.2},0).wait(1).to({x:1166.1,y:536.6},0).wait(1).to({x:1190.6,y:533.4},0).wait(1).to({x:1215.3,y:533.7},0).wait(1).to({x:1239.7,y:537.5},0).wait(1).to({x:1263.5,y:544.3},0).wait(1).to({x:1286.3,y:553.7},0).wait(1).to({x:1308.1,y:565.3},0).wait(1).to({x:1328.9,y:578.7},0).wait(1).to({x:1349.8,y:565},0).wait(1).to({x:1371.7,y:552.9},0).wait(1).to({x:1394.5,y:542.7},0).wait(1).to({x:1418.3,y:535.1},0).wait(1).to({x:1442.9,y:530.6},0).wait(1).to({x:1467.9,y:529.6},0).wait(1).to({x:1492.7,y:532.6},0).wait(1).to({x:1516.7,y:539.5},0).wait(1).to({x:1539.5,y:549.8},0).wait(1).to({x:1560.6,y:563.1},0).wait(1).to({x:1580.2,y:578.7},0).wait(1).to({x:1605.9,y:558.6},0).wait(1).to({x:1634.2,y:542.5},0).wait(1).to({x:1665.2,y:532.6},0).wait(1).to({x:1697.7,y:531.6},0).wait(1).to({x:1729,y:540.3},0).wait(1).to({x:1756.9,y:556.9},0).wait(1).to({x:1781.3,y:578.7},0).wait(31));

	// 汗
	this.instance_27 = new lib.シンボル13();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1369.9,456.9,0.38,0.38,0,0,0,110.8,94.4);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(521).to({_off:false},0).wait(1).to({regX:68.2,regY:54.2,scaleX:0.59,scaleY:0.59,x:1344.8,y:433.3,alpha:0.333},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1336,y:425,alpha:0.667},0).wait(1).to({scaleX:1,scaleY:1,x:1327.3,y:416.7,alpha:1},0).wait(25).to({scaleX:0.79,scaleY:0.79,x:1336,y:425,alpha:0.667},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:1344.8,y:433.3,alpha:0.333},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:1353.6,y:441.6,alpha:0},0).to({_off:true},1).wait(148));

	// cat
	this.instance_28 = new lib.cat_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1714.1,692.4,0.892,0.892,0,0,0,88,270.6);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(489).to({_off:false},0).wait(1).to({regX:92.2,regY:156.4,x:1706.9,y:587.4},0).wait(1).to({x:1696,y:584.2},0).wait(1).to({x:1685.1,y:581},0).wait(1).to({x:1674.2,y:577.8},0).wait(1).to({x:1663.3,y:574.6},0).wait(1).to({x:1654.5,y:578.4},0).wait(1).to({x:1645.8,y:582.2},0).wait(1).to({x:1637,y:586},0).wait(1).to({x:1628.3,y:589.9},0).wait(1).to({x:1619.5,y:593.7},0).wait(1).to({x:1610.8,y:590.3},0).wait(1).to({x:1602,y:587},0).wait(1).to({x:1593.3,y:583.6},0).wait(1).to({x:1584.5,y:580.3},0).wait(1).to({x:1575.8,y:576.9},0).wait(1).to({x:1567,y:581},0).wait(1).to({x:1558.3,y:585},0).wait(1).to({x:1549.5,y:589.1},0).wait(1).to({x:1540.8,y:593.2},0).wait(1).to({x:1532,y:597.2},0).wait(1).to({x:1523.3,y:593.4},0).wait(1).to({x:1514.5,y:589.6},0).wait(1).to({x:1505.8,y:585.8},0).wait(1).to({x:1497,y:582},0).wait(1).to({x:1488.3,y:578.2},0).wait(1).to({x:1479.5,y:580.3},0).wait(1).to({x:1470.8,y:582.3},0).wait(1).to({x:1462,y:584.4},0).wait(1).to({x:1453.3,y:586.5},0).wait(1).to({x:1444.5,y:588.5},0).wait(1).to({x:1435.8,y:590.6},0).wait(1).to({regX:88,regY:160.5,x:1432.1,y:594.3},0).wait(1).to({regX:92.2,regY:156.4,x:1435.8,y:590.6},0).wait(30).to({regX:88.9,regY:251.8,x:1432.9,y:675.8},0).wait(1).to({regX:92.2,regY:156.4,x:1435.8,y:588.5},0).wait(1).to({y:586.2},0).wait(1).to({y:583.9},0).wait(1).to({y:581.6},0).wait(1).to({y:579.3},0).wait(1).to({y:577},0).wait(1).to({y:574.7},0).wait(1).to({y:581.8},0).wait(1).to({y:588.9},0).wait(1).to({y:596},0).wait(1).to({y:603.1},0).wait(1).to({y:610.2},0).wait(1).to({y:602.7},0).wait(1).to({y:595.3},0).wait(1).to({y:587.8},0).wait(1).to({y:580.3},0).wait(1).to({y:572.8},0).wait(1).to({y:580.6},0).wait(1).to({y:588.4},0).wait(1).to({y:596.2},0).wait(1).to({y:603.9},0).wait(1).to({y:611.7},0).wait(1).to({y:609.1},0).wait(1).to({y:606.5},0).wait(1).to({y:603.8},0).wait(1).to({y:601.2},0).wait(1).to({y:598.6},0).wait(1).to({y:596},0).wait(1).to({y:593.4},0).wait(1).to({y:590.7},0).wait(1).to({regX:88,regY:160.5,x:1432.1,y:594.3},0).wait(1).to({regX:92.2,regY:156.4,x:1435.8,y:590.6},0).wait(36).to({regX:88,regY:263.3,x:1432.1,y:686.1},0).wait(1).to({regX:92.2,regY:156.4,x:1454.6,y:569.5},0).wait(1).to({x:1478.3,y:554.1},0).wait(1).to({x:1506.2,y:553.4},0).wait(1).to({x:1529.8,y:568.8},0).wait(1).to({x:1547.7,y:590.8},0).wait(1).to({x:1565.8,y:567.2},0).wait(1).to({x:1589.5,y:549.5},0).wait(1).to({x:1618.5,y:549.1},0).wait(1).to({x:1642.1,y:566.8},0).wait(1).to({x:1659.7,y:590.8},0).wait(1).to({x:1673.8,y:571.1},0).wait(1).to({x:1691.9,y:555.2},0).wait(1).to({x:1715,y:549},0).wait(1).to({x:1737.7,y:556.7},0).wait(1).to({x:1756.2,y:572.1},0).wait(1).to({x:1771.7,y:590.8},0).wait(64));

	// bg3
	this.instance_29 = new lib.bg3_2();
	this.instance_29.parent = this;
	this.instance_29.setTransform(924,659,1,1,0,0,0,686,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(700));

	// 茂み
	this.instance_30 = new lib.茂み_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(925,574,1,1,0,0,0,665,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(700));

	// bg_tree
	this.instance_31 = new lib.bg_tree();
	this.instance_31.parent = this;
	this.instance_31.setTransform(924,357.5,1,1,0,0,0,558,276.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(700));

	// cloud
	this.instance_32 = new lib.cloud_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(923.5,151.5,1,1,0,0,0,184.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(700));

	// sky
	this.instance_33 = new lib.sky_3();
	this.instance_33.parent = this;
	this.instance_33.setTransform(924,456,1,1,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(700));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-54,1874.8,1022.2);


(lib.アートボード1_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// change_scene
	this.instance_34 = new lib.change_scene();
	this.instance_34.parent = this;
	this.instance_34.setTransform(885,452.9,1.049,1.12,0,0,0,666.4,374.8);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(295).to({_off:false},0).wait(1).to({regX:667,regY:375,scaleX:1.06,scaleY:1.13,x:885.7,y:453.3,alpha:0.034},0).wait(1).to({scaleX:1.07,scaleY:1.14,x:885.8,y:453.4,alpha:0.069},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:885.9,alpha:0.103},0).wait(1).to({scaleX:1.1,scaleY:1.15,x:886.1,y:453.6,alpha:0.138},0).wait(1).to({scaleX:1.11,scaleY:1.16,x:886.2,y:453.7,alpha:0.172},0).wait(1).to({scaleX:1.12,scaleY:1.17,x:886.3,y:453.8,alpha:0.207},0).wait(1).to({scaleX:1.14,scaleY:1.18,x:886.4,y:453.9,alpha:0.241},0).wait(1).to({scaleX:1.15,scaleY:1.19,x:886.5,y:454,alpha:0.276},0).wait(1).to({scaleX:1.16,scaleY:1.2,x:886.6,y:454.1,alpha:0.31},0).wait(1).to({scaleX:1.17,scaleY:1.2,x:886.7,y:454.2,alpha:0.345},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:886.8,y:454.4,alpha:0.379},0).wait(1).to({scaleX:1.2,scaleY:1.22,x:887,y:454.5,alpha:0.414},0).wait(1).to({scaleX:1.21,scaleY:1.23,x:887.1,y:454.6,alpha:0.448},0).wait(1).to({scaleX:1.22,scaleY:1.24,x:887.2,alpha:0.483},0).wait(1).to({scaleX:1.23,scaleY:1.25,x:887.3,y:454.8,alpha:0.517},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:887.4,y:454.9,alpha:0.552},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:887.5,y:455,alpha:0.586},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:887.6,y:455.1,alpha:0.621},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:887.7,y:455.2,alpha:0.655},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:887.8,y:455.3,alpha:0.69},0).wait(1).to({scaleX:1.31,scaleY:1.3,x:887.9,y:455.4,alpha:0.724},0).wait(1).to({scaleX:1.32,scaleY:1.3,x:888,y:455.5,alpha:0.759},0).wait(1).to({scaleX:1.33,scaleY:1.31,x:888.1,y:455.6,alpha:0.793},0).wait(1).to({scaleX:1.34,scaleY:1.32,x:888.3,y:455.7,alpha:0.828},0).wait(1).to({scaleX:1.36,scaleY:1.33,x:888.4,y:455.8,alpha:0.862},0).wait(1).to({scaleX:1.37,scaleY:1.34,x:888.5,y:455.9,alpha:0.897},0).wait(1).to({scaleX:1.38,scaleY:1.35,x:888.6,y:456,alpha:0.931},0).wait(1).to({scaleX:1.39,scaleY:1.36,x:888.7,y:456.1,alpha:0.966},0).wait(1).to({scaleX:1.4,scaleY:1.36,x:888.9,y:456.3,alpha:1},0).wait(6));

	// bg1
	this.instance_35 = new lib.bg1_3();
	this.instance_35.parent = this;
	this.instance_35.setTransform(888,755,1,1,0,0,0,686,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(330));

	// girl
	this.instance_36 = new lib.girl_2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(748,585.5,1,1,0,0,0,97,174.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(194).to({_off:false},0).wait(1).to({regX:101.4,regY:171.8,x:764,y:579.7},0).wait(1).to({x:775.5,y:576.5},0).wait(1).to({x:787.1,y:573.4},0).wait(1).to({x:798.7,y:570.2},0).wait(1).to({x:810.2,y:567.1},0).wait(1).to({x:821.8,y:563.9},0).wait(1).to({x:833.4,y:560.8},0).wait(1).to({x:842.1,y:563.6},0).wait(1).to({x:850.8,y:566.4},0).wait(1).to({x:859.5,y:569.2},0).wait(1).to({x:868.2,y:572},0).wait(1).to({x:876.9,y:574.8},0).wait(1).to({x:885.6,y:577.6},0).wait(1).to({x:894.3,y:580.4},0).wait(1).to({x:904.4,y:577.6},0).wait(1).to({x:914.6,y:574.9},0).wait(1).to({x:924.7,y:572.1},0).wait(1).to({x:934.8,y:569.3},0).wait(1).to({x:944.9,y:566.6},0).wait(1).to({x:955,y:563.8},0).wait(1).to({x:965.2,y:561},0).wait(1).to({x:975.3,y:558.2},0).wait(1).to({x:984,y:561.1},0).wait(1).to({x:992.7,y:563.9},0).wait(1).to({x:1001.4,y:566.7},0).wait(1).to({x:1010.1,y:569.5},0).wait(1).to({x:1018.8,y:572.4},0).wait(1).to({x:1027.5,y:575.2},0).wait(1).to({x:1036.3,y:578},0).wait(1).to({x:1045,y:574.8},0).wait(1).to({x:1053.7,y:571.6},0).wait(1).to({x:1062.4,y:568.4},0).wait(1).to({x:1071.1,y:565.2},0).wait(1).to({x:1079.8,y:562.1},0).wait(1).to({x:1088.5,y:558.9},0).wait(1).to({x:1097.2,y:555.7},0).wait(1).to({x:1105.9,y:558.5},0).wait(1).to({x:1114.6,y:561.4},0).wait(1).to({x:1123.3,y:564.2},0).wait(1).to({x:1132.1,y:567.1},0).wait(1).to({x:1140.8,y:570},0).wait(1).to({x:1149.5,y:572.8},0).wait(1).to({x:1158.2,y:575.7},0).wait(1).to({x:1169.7,y:572.4},0).wait(1).to({x:1181.3,y:569.2},0).wait(1).to({x:1192.9,y:566},0).wait(1).to({x:1204.4,y:562.7},0).wait(1).to({x:1216,y:559.5},0).wait(1).to({x:1227.6,y:556.3},0).wait(1).to({x:1239.1,y:553},0).wait(1).to({x:1251.8,y:555.6},0).wait(1).to({x:1264.4,y:558.1},0).wait(1).to({x:1277,y:560.7},0).wait(1).to({x:1289.6,y:563.2},0).wait(1).to({x:1302.2,y:565.8},0).wait(1).to({x:1314.9,y:568.3},0).wait(1).to({x:1327.5,y:570.9},0).wait(1).to({x:1340.1,y:573.4},0).wait(1).to({x:1351.7,y:570.1},0).wait(1).to({x:1363.2,y:566.8},0).wait(1).to({x:1374.8,y:563.5},0).wait(1).to({x:1386.4,y:560.2},0).wait(1).to({x:1397.9,y:556.9},0).wait(1).to({x:1409.5,y:553.5},0).wait(1).to({x:1421.1,y:550.2},0).wait(1).to({x:1432.6,y:553.3},0).wait(1).to({x:1444.2,y:556.3},0).wait(1).to({x:1455.8,y:559.3},0).wait(1).to({x:1467.3,y:562.4},0).wait(1).to({x:1478.9,y:565.4},0).wait(1).to({x:1490.5,y:568.4},0).wait(1).to({x:1502,y:571.5},0).wait(1).to({x:1516.5,y:568},0).wait(1).to({x:1530.9,y:564.5},0).wait(1).to({x:1545.3,y:561},0).wait(1).to({x:1559.7,y:557.5},0).wait(1).to({x:1574.1,y:554},0).wait(1).to({x:1588.6,y:550.5},0).wait(1).to({x:1603,y:547},0).wait(1).to({x:1611.9,y:550.9},0).wait(1).to({x:1620.8,y:554.9},0).wait(1).to({x:1629.7,y:558.9},0).wait(1).to({x:1638.6,y:562.9},0).wait(1).to({x:1647.5,y:566.9},0).wait(1).to({x:1656.5,y:570.9},0).wait(1).to({x:1665.4,y:574.8},0).wait(1).to({x:1674.3,y:578.8},0).wait(1).to({x:1683.2,y:582.8},0).wait(1).to({x:1692.1,y:586.8},0).wait(47));

	// house
	this.instance_37 = new lib.house();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-194.2,743.8,1,1,0,0,0,398.8,743.8);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(134).to({_off:false},0).wait(1).to({regX:405.9,regY:372,x:-132.1,y:372},0).wait(1).to({x:-79},0).wait(1).to({x:-27.8},0).wait(1).to({x:21.6,y:372.1},0).wait(1).to({x:69.1},0).wait(1).to({x:114.8},0).wait(1).to({x:158.6},0).wait(1).to({x:200.4},0).wait(1).to({x:240.5},0).wait(1).to({x:278.7},0).wait(1).to({x:315},0).wait(1).to({x:349.5},0).wait(1).to({x:382.1,y:372.2},0).wait(1).to({x:412.8},0).wait(1).to({x:441.7},0).wait(1).to({x:468.7},0).wait(1).to({x:493.9},0).wait(1).to({x:517.2},0).wait(1).to({x:538.6},0).wait(1).to({x:558.2},0).wait(1).to({regX:398.8,regY:743.8,x:551.1,y:744},0).wait(175));

	// bg3
	this.instance_38 = new lib.bg3_3();
	this.instance_38.parent = this;
	this.instance_38.setTransform(888,649,1,1,0,0,0,683,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(330));

	// flower2
	this.instance_39 = new lib.flower2_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(888,574,1,1,0,0,0,627,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(330));

	// ベクトルスマートオブジェクト
	this.instance_40 = new lib.ベクトルスマートオブジェクト_22();
	this.instance_40.parent = this;
	this.instance_40.setTransform(915,419,1,1,0,0,0,610,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(330));

	// 山々1
	this.instance_41 = new lib.山々1_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(898.5,476.5,1,1,0,0,0,898.5,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(330));

	// 山々2
	this.instance_42 = new lib.山々2_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(888,358,1,1,0,0,0,788,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(330));

	// cloud
	this.instance_43 = new lib.cloud_2();
	this.instance_43.parent = this;
	this.instance_43.setTransform(985,166.5,1,1,0,0,0,500,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(330));

	// sky
	this.instance_44 = new lib.sky_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(888,456,1,1,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,79,1797,766);


// stage content:
(lib.morikuma667375 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{buzzer:14});

	// timeline functions:
	this.frame_35 = function() {
		playSound("buzzer");
	}
	this.frame_149 = function() {
		playSound("morikuma1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(114).call(this.frame_149).wait(2371));

	// start
	this.instance = new lib.start();
	this.instance.parent = this;
	this.instance.setTransform(333.5,246,0.5,0.5,0,0,0,699,509);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},195).wait(2325));

	// 森のくまさん1 2.psd
	this.instance_1 = new lib.アートボード1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(339.8,171.8,0.5,0.5,0,0,0,898.5,422.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},329).wait(2191));

	// 森のくまさん2 2.psd
	this.instance_2 = new lib.アートボード1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.3,180.3,0.5,0.5,0,0,0,913.5,441.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(329).to({_off:false},0).to({_off:true},671).wait(1520));

	// 森のくまさん3 3.psd
	this.instance_3 = new lib.アートボード1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(328.3,227.3,0.5,0.5,0,0,0,913.5,648.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1000).to({_off:false},0).wait(1520));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(224.1,179,898.5,509);
// library properties:
lib.properties = {
	width: 667,
	height: 375,
	fps: 24,
	color: "#424242",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/morikuma_atlas_.png", id:"morikuma_atlas_"},
		{src:"sounds/buzzer.mp3", id:"buzzer"},
		{src:"sounds/morikuma1.mp3", id:"morikuma1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;