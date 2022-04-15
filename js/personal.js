//修改图标
window.onload = function(){
	var iframe = document.getElementById('iframe');
	var window = iframe.contentWindow;
	var doc = window.document;
	var icon = doc.getElementById('icon4');
	icon.src = "../img/head/icon4-1.png";
	var a = doc.getElementsByTagName('a')[3];
	a.style.color = 'yellow';
}