//------------UNIVERSAL------------

function replace(name1, name2) {
	hide(name1);
	show(name2);
}

function replaceF(name1, name2) {
	fadeOut(name1);
	fadeIn(name2);
}

function fadeIn(name) {
	var nameStr = name + "";
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (t != -1) {
		show(name);
		name.parentNode.style.animation = "invisToVis 1s 1 forwards";
		//Safari & Chrome
		name.parentNode.style.WebkitAnimation = "invisToVis 1s 1 forwards";
	}
	else {
		show(name);
		document.getElementById(name).style.animation = "invisToVis 1s 1 forwards";
		//Safari & Chrome
		document.getElementById(name).style.WebkitAnimation = "invisToVis 1s 1 forwards";
	}
}

function fadeOut(name) {
	var nameStr = name + "";
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (t != -1) {
		name.parentNode.style.animation = "visToInvis 1s 1 forwards";
		//Safari & Chrome
		name.parentNode.style.WebkitAnimation = "visToInvis 1s 1 forwards";
		hide(name);
	}
	else {
		document.getElementById(name).style.animation = "visToInvis 1s 1 forwards";
		//Safari & Chrome
		document.getElementById(name).style.WebkitAnimation = "visToInvis 1s 1 forwards";
		hide(name);
	}
}

function hide(name) {
	var nameStr = name + "";
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (t != -1) {
		name.parentNode.style.display = "none";
	}
	else {
		document.getElementById(name).style.display = "none";
	}
}

function show(name) {
	var nameStr = name + "";
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (nameStr.indexOf(searchFor) != -1) {
		name.parentNode.style.display = "initial";
	}
	else {
		document.getElementById(name).style.display = "initial";
	}
	
}

function clickBtn(name) {
	name.style.border = "1px inset #4A4B4C";
}