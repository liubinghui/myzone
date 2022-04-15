//修改图标
window.onload = function(){
	var iframe = document.getElementById('iframe');
	var window = iframe.contentWindow;
	var doc = window.document;
	var icon = doc.getElementById('icon2');
	icon.src = "../img/head/icon2-1.png";
	var a = doc.getElementsByTagName('a')[1];
	a.style.color = 'yellow';
}