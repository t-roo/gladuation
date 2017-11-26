/*--parseIntを削った。correct_dateを適用 showvalueを統一 showvalue3を統一  秒数60秒をすべて検索関数追加- 
ロード画面gifに変更　snapshotの探索を削除*/

window.onload = function () {

/* 時刻系  */

var lastimg =  "http://raspp.live-on.net/~pi/motion/lastsnap.jpg";
var time = new Date(); 
var year = time.getFullYear();
var month = time.getMonth()+1;
var day = time.getDate();
var hour = time.getHours();
var minute = time.getMinutes();

/* sliderの割合とそれに応じた時刻表示 */

var obj = document.getElementById("RangePic");

function showValue() {
	document.getElementById("showImg").textContent = Math.floor(parseInt(obj.value)/100*hour)+"時頃の映像";
}
obj.addEventListener("change", showValue, false);


/* 0埋め関数 */
function correct_date(x){
        x = x + ''; 
	var str = x.match(/^[0-9]$/);
	if(str !== null){
		return  c_x = "0" + x;
	}else{
		return  c_x = x;
	}
}
/*  年~分を指定すれば1~60の画像探索をする関数 */
function ImgLoad (index, url) {
  var img = new Image();
  img.onload = function () {
    document.getElementById("pictImg").src =　img.src ;
  };
  img.src = url;
}

/* ロード中の画面　*/
function loadImgChange() {
	document.getElementById("pictImg").src = "./images/load.gif";
}

/* ロード終了画面    */
function loadImgEnd() {
	document.getElementById("pictImg").src = "" ;
}
/* 　sliderクリックによって作動　*/
function showValue3() {
	// 月表示//
	var m = correct_date(month);
	// 日表示 //
	var d = correct_date(day);
	// 時間表示 //
	var hafter = Math.floor(parseInt(obj.value)/100*hour) + ''; 
	var h = correct_date(hafter);	
	//  分表示 //
	var m = correct_date(m);

	if(parseInt(obj.value) === 100){
		document.getElementById("pictImg").src = lastimg ;
	}else{
		loadImgChange();

		for (var i = 0; i <= 60; i++) {
		　var s = correct_date(i);
		  new ImgLoad(i, "http://raspp.live-on.net/~pi/motion/"+year+m+d+h+m+s+"-01.jpg");
		  new ImgLoad(i, "http://raspp.live-on.net/~pi/motion/"+year+m+d+h+m+s+"-snapshot.jpg");
		}
		
	}
	
}
obj.addEventListener("change", showValue3, false);

};