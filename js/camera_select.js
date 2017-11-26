var pictNo = 1;

function revBtnClick(){
        pictNo--;
        document.getElementById('no').innerHTML = 'Camera'+pictNo;
        document.getElementById('pict').src='http://raspp.live-on.net:808'+pictNo;
        
        if(pictNo === 1){
        document.getElementById('rev_btn').disabled = 'disabled';
        document.getElementById('fwd_btn').disabled = false;
        }
	
}

function fwdBtnClick(){
	pictNo++;

        if(pictNo === 2){
        document.getElementById('rev_btn').disabled = false; 
	document.getElementById('no').innerHTML = "Camera2";
        document.getElementById('pict').src="http://raspp.live-on.net:8082";
        }

	if(pictNo === 3){
	document.getElementById('fwd_btn').disabled = "disabled";
        document.getElementById('rev_btn').disabled = false; 
	document.getElementById('no').innerHTML = "LastSnap";
        document.getElementById('pict').src="http://raspp.live-on.net/~pi/motion/lastsnap.jpg";
	}
	
}

