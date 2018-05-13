function greet() {
	document.getElementById("hello").innerHTML="你好，很高兴认识你！";
}
function hobby() {
	document.getElementById("likes").innerHTML="我喜欢听歌、追剧、打羽毛球，你呢？";
}
window.onload =function(){
	var time =document.getElementById('time');
	var mydate=new Date();
	var time=mydate.getHours();
	// alert(time);
	if(6<=time<12){
		document.getElementById('time').innerHTML="早上好！";
	}
	else if(12<=time<=18){
		document.getElementById('time').innerHTML="下午好！";
	}
	else{
		document.getElementById('time').innerHTML="晚上好！";
	}
}