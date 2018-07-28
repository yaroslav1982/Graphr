$("#next_button").click(function(){
	var cd=document.getElementById('target').value; 
	localStorage.setItem('variableName', document.getElementById('target').value); 
	localStorage.setItem('varWH', document.getElementById('A4WH').value);
	var ab=localStorage.getItem('varWH');
	DTMM();
	window.location.href='index1.html';
});

$("#next_button_ru").click(function(){
	var cd=document.getElementById('target').value; 
	localStorage.setItem('variableName', document.getElementById('target').value); 
	localStorage.setItem('varWH', document.getElementById('A4WH').value);
	var ab=localStorage.getItem('varWH');
	DTMM();
	window.location.href='index1_ru.html';
});

$("#smooth_button").click(function(){
	var cd=document.getElementById('target').value; 
	//localStorage.setItem('variableName', document.getElementById('target').value); 
	//localStorage.setItem('varOX', document.getElementById('xBox').value);
	//localStorage.setItem('varOY', document.getElementById('yBox').value);
	//localStorage.setItem('varCols', document.getElementById('mBox').value);
	localStorage.setItem('variableName', document.getElementById('target').value); 
	//var ab=localStorage.getItem('variableName');
	DTMM();
	window.location.href='smooth.html';
});

$("#target").click(function(){
	this.value = this.value.replace(/[;]/g, '\t');
	this.value = this.value.replace(/[ ]/g, '\t');
	this.value = this.value.replace(' ', '\t');
});