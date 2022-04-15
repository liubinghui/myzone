//创建图片数组
var imgsArray = [];
imgsArray[0] = "url(../img/game/1.png)";
imgsArray[1] = "url(../img/game/2.png)";
imgsArray[2] = "url(../img/game/3.png)";
imgsArray[3] = "url(../img/game/4.png)";
//设置自动播放功能
var imgs = document.getElementById("imgs");
var x = -1;
var len = imgsArray.length;
function autoPlay(){
	x++;
	if(x == len){
		x = 0;
	}
	imgs.style.backgroundImage = imgsArray[x];
	circleSelected();
	window.setTimeout("autoPlay()",2000);	
}
window.setTimeout("autoPlay()",0);

//设置点击按钮翻页
function manualPlay(per){
	x = x + per;
	if(x == len){
		x = 0;
	}else if(x == -1){
		x = len-1;
	}
	imgs.style.backgroundImage = imgsArray[x];
	circleSelected();
}

//生成小圆点
var lis = document.querySelector('.lis');
for(var i = 0; i < 4; i++){
	var li = document.createElement('li');
	li.index = i;
	lis.appendChild(li);
	//为小圆点添加点击事件
	li.onclick = function(){
		x = this.index;
		imgs.style.backgroundImage = imgsArray[x];
		circleSelected();
	}
}
lis.children[0].className = 'selected';

//改变小圆点儿选中方法
function circleSelected(){
	for(var i = 0; i < 4; i++){
			lis.children[i].className = '';
		}
	lis.children[x].className = 'selected';
}

function postData(){
	$.ajax({
		type:"POST",
		url:"../file/game/CASE/Christmas.py",
		data:{param:''},
		success:callbackFunc
	});
}
function callbackFunc(response){
	console.log(response);
}

//点击图片切换游戏画面
imgs.onclick = function(){
	if(x==0){
		postData();
		//window.open('../file/game/CASE/Christmas.py');
		//window.open('../file/game/1-僵尸鸭猎手/index.html');
	}else if(x==1){
		window.open('../file/game/33-圣诞气球/index.html');
	}else if(x==2){
		window.open('../file/game/57-弹力球/index.html');
	}else if(x==3){
		window.open('../file/game/60-复活节记忆/index.html');
	}
}
//修改图标
window.onload = function(){
	var iframe = document.getElementById('iframe');
	var window = iframe.contentWindow;
	var doc = window.document;
	var icon = doc.getElementById('icon3');
	icon.src = "../img/head/icon3-1.png";
	var a = doc.getElementsByTagName('a')[2];
	a.style.color = 'yellow';
}
