//控制主页显示的内容
var btns = document.getElementsByClassName("btn");
var contents = document.getElementsByClassName("content");
for(var i=0;i<btns.length;i++){
	btns[i].index = i;
	btns[i].onclick = function(){
		for(var j=0;j<btns.length;j++){
			btns[j].className = btns[j].className.replace(' active', '');
			contents[j].className = contents[j].className.replace(' show', '');
		}
		this.className = this.className + ' active';
		contents[this.index].className = contents[this.index].className + ' show';
		btnActive();
		audio.pause();
		bofang.src = '../file/music/暂停.png';
	};
}


//修改图标
window.onload = function(){
	var iframe = document.getElementById('iframe');
	var window = iframe.contentWindow;
	var doc = window.document;
	var icon1 = doc.getElementById('icon1');
	icon1.src = "../img/head/icon1-1.png";
	var a = doc.getElementsByTagName('a')[0];
	a.style.color = 'yellow';
	btnActive();
}

//定义方法修改激活按钮
function btnActive(){
	var btnImgs = ['url(../img/homepage/btn1.png)',
               	   'url(../img/homepage/btn2.png)',
                   'url(../img/homepage/btn3.png)'];
	var btnImgsAct = ['url(../img/homepage/btn1-1.png)',
                      'url(../img/homepage/btn2-1.png)',
                      'url(../img/homepage/btn3-1.png)'];
    //控制按钮的激活
	var btns = document.getElementsByClassName("btn");
	for(var i=0; i<btns.length; i++){
		if(btns[i].className == "btn active"){
			btns[i].style.backgroundImage = btnImgsAct[i];
		}else if(btns[i].className == "btn"){
			btns[i].style.backgroundImage = btnImgs[i];
		}
	}
}
//控制播放视频
var video1 = document.getElementById("video1");
var videobtn1 = document.getElementById("videobtn1") 
var videobtn2 = document.getElementById("videobtn2") 
videobtn1.onclick = function (){
	video1.play();
}
videobtn2.onclick = function (){
	video1.pause();
}

//控制《我的音乐》播放功能
var index = 0;
var srcs = ['../file/music/Against the Current,Alan Walker,Mako - Legends Never Die.mp3',
            '../file/music/Bruno Mars - Talking To The Moon.mp3',
            '../file/music/Colbie Caillat - Try.mp3',
            '../file/music/Fitz and The Tantrums - HandClap.mp3'];
var imgArr = ['../file/music/1.png',
              '../file/music/2.png',
              '../file/music/3.png',
              '../file/music/4.png'];
var nameArr = ['Against the Current,Alan Walker,Mako - Legends Never Die',
               'Bruno Mars - Talking To The Moon',
               'Colbie Caillat - Try',
               'Fitz and The Tantrums - HandClap'];
var audio = document.getElementById("audio");
var playBtn = document.getElementById("play");
var mutedBtn = document.getElementById("muted");
var bofang = document.getElementById("bofang");
var perfer = document.getElementById("perfer");
var nextBtn = document.getElementById("next");
var yinyue = document.getElementById("yinyue");
var yinyueName = document.getElementById("musicName");

//播放按钮控制
playBtn.onclick = function(){
	if(audio.paused == true){
		audio.play();
		bofang.src = '../file/music/播放.png';
	}
};

//暂停按钮控制
mutedBtn.onclick = function(){
	if(audio.paused == false){
		audio.pause();
		bofang.src = '../file/music/暂停.png';
	}
};

//定义切换音乐方法
function changeMusic(){
	audio.pause();
	audio.src = srcs[index];
	yinyue.src = imgArr[index];
	yinyueName.innerHTML = nameArr[index];
	audio.play();
	bofang.src = '../file/music/播放.png';
}

//上一首按钮控制
perfer.onclick = function(){
	index--;
	if(index < 0){
		index = srcs.length - 1;
	}
	changeMusic();
};

//下一首按钮控制
nextBtn.onclick = function(){
	index++;
	if(index == srcs.length){
		index = 0;
	}
	changeMusic();
};
