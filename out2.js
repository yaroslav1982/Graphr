var nene='1234';
var ttnn='';
var tt=0;
var dd='';
//var cli3 = ["1234", "5678"];
//var cli4 = ["1234", "5678"];
var cli4 = new Array();

function DT()
{

//alert('dd');
 document.getElementById('selectX').selectedIndex = 3;
 //alert(document.getElementById('selectX').value);

var elSel = document.getElementById('selectX');
  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    if (elSel.options[i].selected) {

// ALERTOP      
alert(elSel.options[1].value);

 }

function DTMA()
{
var Tneo='';
//////////////////////////////////////////////////
//alert(cli4[0]);
ttnn='';
                   for (var i = 0; i < cli4.length; i++) {
ttnn=ttnn+cli4[i]+'\n';
                }

var tA2 = dd.split("\n");

removeOptionAll();

                   for (var i = 1; i < tA2.length; i++) {
appendOptionCoord(tA2[i]);
                }

//alert(dd);

//DTMA();

 }

function appendOptionCoord(txtAppend)
{
  var elOptNew = document.createElement('option');
  elOptNew.text = txtAppend;
  elOptNew.value = txtAppend;
  var elSel = document.getElementById('selectX');

  try {
    elSel.add(elOptNew, null); // standards compliant; doesn't work in IE
  }
  catch(ex) {
    elSel.add(elOptNew); // IE only
  }
}

function appendOptionC2(txtAppend)
{
  var elOptNew = document.createElement('option');
  elOptNew.text = txtAppend;
  elOptNew.value = txtAppend;
  var elSel = document.getElementById('sel2');

  try {
    elSel.add(elOptNew, null); // standards compliant; doesn't work in IE
  }
  catch(ex) {
    elSel.add(elOptNew); // IE only
  }
}



window.onload = function() {

onlyL3(); 
redC2();


                $('.selectedColor').trigger('click');
            }
            $(function() {               
      
                c = document.getElementById('drawingPaper')
                context = c.getContext("2d");
                
                $('#drawingPaper').mousedown(function(e) {
                    var mouseX = e.pageX - this.offsetLeft;
                    var mouseY = e.pageY - this.offsetTop;
                    paint = true;
                    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
                    redraw();
 $('body').css('cursor', 'default');
                });
                $('#drawingPaper').mousemove(function(e) {
                    if (paint) {
                        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                        redraw();
 $('body').css('cursor', 'default');
                    }
                });
                $('#drawingPaper').mouseup(function(e) {
                    paint = false;
                });
                $('#drawingPaper').mouseleave(function(e) {
                    paint = false;
                });
                var clickX = new Array();
                var clickY = new Array();

                var cli3 = new Array();

                var clickDrag = new Array();
                var paint;
                var curColor;
                
                
 
                $('.color li').click(function() {
                    $(this).siblings('li').removeClass('selectedColor');
                    $(this).addClass('selectedColor');
                    curColor = $(this).children('span').attr('rel');
                    
                });
 
                var cursize;
                $('.size li').click(function() {
                    $(this).siblings('li').removeClass('selectedColor');
                    $(this).addClass('selectedColor');
                    cursize = $(this).children('span').attr('rel');
                });
                var clickSize = new Array();
 
                var clickColor = new Array();
 var curTool;
 $("#erasecanvas").click(function(){
 //curTool = "eraser";

 redC();

 });
 
 $("#test1").click(function(){
 //curTool = "eraser";

///localStorage.setItem('variableName', document.getElementById('selectX').value);
onlyL2();

 });

 $("#test2").click(function(){
 //curTool = "eraser";

// alert('2');
var ab=localStorage.getItem('variableName'); alert(ab);
ab=localStorage.getItem('longName'); alert(ab);
//var ab=localStorage.getItem('longName'); alert(ab);

 });

 $("#pencanvas").click(function(){
 //curTool = "";
window.location.reload();
document.getElementById('sca').value="";

 });
 
                function addClick(x, y, dragging)
                {
                    clickX.push(x);
                    clickY.push(y);
                    clickDrag.push(dragging);
nene=x.toString();
cli3.push(nene);
cli4.push(x.toString()+';'+y.toString()+';'+dragging.toString());
var dyr=dragging;
cli4[tt]=x.toString()+';'+y.toString()+';'+dyr.toString();
tt=tt+1;

 if(curTool == "eraser"){
 clickColor.push("white");
 }else{
 clickColor.push(curColor);
 }
                    clickSize.push(cursize);
                }
 

                function redraw() {
                    
                    context.save();
                    context.beginPath();
                    context.rect(0, 0, context.canvas.width, context.canvas.height);
                    context.clip();
 context.beginPath();
                    context.lineJoin = "round";
 
dd='';
//dd=cli4[0]+';';
var jflag=0;
var ijf=0
var cliB='';
var ddpp='';
                    for (var i = 0; i < clickX.length; i++) {
                        context.beginPath();
                        if (clickDrag[i] && i) {
                            //context.moveTo(clickX[i - 1], clickY[i - 1]);
context.rect(clickX[i], clickY[i], clickX[j]-clickX[i], clickY[j]-clickY[i]);
                        } else {
                            //context.moveTo(clickX[i] - 1, clickY[i]);
//cli4.push('false');
j=i;
ijf=j-jflag;
jflag=jflag+1;
if (j<0) {j=0};
//if (j==0) {alert(j.toString())};
//dd=dd+ijf.toString()+';'+cli4[ijf]+'\n';

//dd=dd+ijf.toString()+'\n';

dd=dd+cli4[ijf-1]+'\n'+cli4[ijf]+';';

//ddpp=cliB+';'+cli4[ijf-1];
//appendOptionCoord(ddpp);
//cliB=cli4[ijf];

//dd=cli4[0]+';';
//dd=dd+cli4[ijf-1]+'\n'+cli4[ijf]+';';
//dd=dd+cli4[ijf-1]+'\n'+cli4[ijf]+';';
//dd=dd+cli4[cli4.length-1];



                        }

//dd=dd+cli4[cli4.length-1];

                        //context.lineTo(clickX[i], clickY[i]);
                        
//context.rect(clickX[i], clickY[i], clickX[i-1]-clickX[i], clickY[i-1]-clickY[i]);
                    
context.closePath();
                        context.strokeStyle = clickColor[i];
                        context.lineWidth = parseInt(clickSize[i]);
                        context.stroke();
                    }
//alert(dd);
dd=dd+cli4[cli4.length-1];

                    context.restore();
                }
 

               function onlyL2() {
removeO2();
removeOptionAll();

//for (var i = 0; i < elSel.length; i++) {
///                        if (clickDrag[i] && i) {
//context.moveTo(clickX[i - 1], clickY[i - 1]);

var ab=localStorage.getItem('longName'); //alert(ab);

var textArray = ab.split(';;');
//var Tneo='';
//var temp=0.1;
//var temp2=0.1;
//var temps=['0.1','4'];
//var tBak=['0.1','4'];

//appendOptionC2('1234');

for(var i=0; i<textArray.length-1;i++) 
{
//temps= textArray[i].split("\t");
//temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
//temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
//Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
//tBak=temps;
appendOptionC2(textArray[i]);
appendOptionCoord(textArray[i]);
}


//appendOptionC2('1234');
//appendOptionC2('5678');
}


function redC() {

curColor=0;
                    
                    context.save();
                    context.beginPath();
                    context.rect(0, 0, context.canvas.width, context.canvas.height);
                    context.clip();
 context.beginPath();
                    context.lineJoin = "round";
 
dd='';
//dd=cli4[0]+';';
var jflag=0;
var ijf=0
var cliB='';
var ddpp='';
                    

//////////////////////////////////////////////////////
var elSel = document.getElementById('selectX');
//    if (elSel.options[i].selected) {

//  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    //if (elSel.options[i].selected) {
//      elSel.remove(i);
//    //}
//  }
/////////////////

removeO2();

for (var i = 0; i < elSel.length; i++) {
                        context.beginPath();

///                        if (clickDrag[i] && i) {
                            //context.moveTo(clickX[i - 1], clickY[i - 1]);
curColor=0;
context.rect(100, 100, 50, 50);

context.beginPath();
context.lineWidth="10";
context.strokeStyle="blue";

    if (elSel.options[i].selected) {
context.strokeStyle="green";
}

var temps=['0.1','4'];

cliB=elSel.options[i].value; //document.getElementById('sca').value;

ddpp=ddpp+cliB+';;';

appendOptionC2(cliB);

//listadd


var tempX=0.1;
var tempY=0.1;
var tempW=0.1;
var tempH=0.1;

temps= cliB.split(";");

tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));

tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));


context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 


//alert(tempX.toString()+";"+tempY.toString()+";"+tempW.toString()+";"+tempH.toString());

//alert(curColor); //= $(this).children('span').attr('rel');

                        

//dd=dd+cli4[cli4.length-1];

                        //context.lineTo(clickX[i], clickY[i]);
                        
//context.rect(clickX[i], clickY[i], clickX[i-1]-clickX[i], clickY[i-1]-clickY[i]);
                    
context.closePath();
                        context.strokeStyle = clickColor[i];
                        context.lineWidth = parseInt(clickSize[i]);
                        context.stroke();
////////////////////////////////////////////////////////////////////////////////////////                    
}

//alert(ddpp);

localStorage.setItem('longName', ddpp);

dd=dd+cli4[cli4.length-1];

context.beginPath();
context.lineWidth="10";
context.strokeStyle="green";
//var temps=['0.1','4'];
//cliB=elSel.options[i].value; //document.getElementById('sca').value;
////////////////////////////////////////////////

cliB=document.getElementById('sca').value;

//var tempX=0.1;
//var tempY=0.1;
//var tempW=0.1;
//var tempH=0.1;
temps= cliB.split(";");
tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));
tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));
context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 
context.closePath();

                    context.restore();
                }

 $('#clrcanvas').click(function(){
 context.clearRect(0, 0, c.width, c.height);

                clickX = [];
                clickY = [];
                cli3 = [];

                clickDrag = [];
                //paint;
                //curColor;

removeAAll();
//DTMA();

removeOptionAll();


 });
 
            });
 

OUT2/////////////////////////////////////////////////////




function redC2() {

//alert('8');

curColor=0;
                    
                    context.save();
                    context.beginPath();
                    context.rect(0, 0, context.canvas.width, context.canvas.height);
                    context.clip();
 context.beginPath();
                    context.lineJoin = "round";
 
dd='';
//dd=cli4[0]+';';
var jflag=0;
var ijf=0
var cliB='';
var ddpp='';
                    

//////////////////////////////////////////////////////
var elSel = document.getElementById('selectX');
//  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    //if (elSel.options[i].selected) {
//      elSel.remove(i);
//    //}
//  }
/////////////////

//alert('9');

removeO2();

for (var i = 0; i < elSel.length; i++) {
                        context.beginPath();

///                        if (clickDrag[i] && i) {
                            //context.moveTo(clickX[i - 1], clickY[i - 1]);
curColor=0;
context.rect(100, 100, 50, 50);

context.beginPath();
context.lineWidth="10";
context.strokeStyle="blue";

var temps=['0.1','4'];

cliB=elSel.options[i].value; //document.getElementById('sca').value;

ddpp=ddpp+cliB+';;';

//

//alert('1');

appendOptionC2(cliB);

//listadd


var tempX=0.1;
var tempY=0.1;
var tempW=0.1;
var tempH=0.1;

temps= cliB.split(";");

tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));

tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));


context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 


//alert('25');

//alert(tempX.toString()+";"+tempY.toString()+";"+tempW.toString()+";"+tempH.toString());

//alert(curColor); //= $(this).children('span').attr('rel');

                        

//dd=dd+cli4[cli4.length-1];

                        //context.lineTo(clickX[i], clickY[i]);
                        
//context.rect(clickX[i], clickY[i], clickX[i-1]-clickX[i], clickY[i-1]-clickY[i]);
                    
context.closePath();
                        //context.strokeStyle = clickColor[i];
                        //context.lineWidth = parseInt(clickSize[i]);
                        //context.stroke();
////////////////////////////////////////////////////////////////////////////////////////        

}


//alert(ddpp);
//alert('2');
localStorage.setItem('longName', ddpp);

dd=dd+cli4[cli4.length-1];

context.beginPath();
context.lineWidth="10";
context.strokeStyle="green";
//var temps=['0.1','4'];
//cliB=elSel.options[i].value; //document.getElementById('sca').value;
////////////////////////////////////////////////

cliB=document.getElementById('sca').value;

//var tempX=0.1;
//var tempY=0.1;
//var tempW=0.1;
//var tempH=0.1;
temps= cliB.split(";");
tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));
tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));
context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 
context.closePath();

                    context.restore();
                }


function CLS2()
{
window.location.reload();
document.getElementById('sca').value="";
} 

/////////////////

function redC3() {

//alert('8');

curColor=0;
                    
                    context.save();
                    context.beginPath();
                    context.rect(0, 0, context.canvas.width, context.canvas.height);
                    context.clip();
 context.beginPath();
                    context.lineJoin = "round";
 
dd='';
//dd=cli4[0]+';';
var jflag=0;
var ijf=0
var cliB='';
var ddpp='';
                    

//////////////////////////////////////////////////////
var elSel = document.getElementById('selectX');
//  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    //if (elSel.options[i].selected) {
//      elSel.remove(i);
//    //}
//  }
/////////////////

//alert('9');

removeO2();

for (var i = 0; i < elSel.length; i++) {
                        context.beginPath();

    if (elSel.options[i].selected) {
///                        if (clickDrag[i] && i) {
                            //context.moveTo(clickX[i - 1], clickY[i - 1]);
curColor=0;
context.rect(100, 100, 50, 50);

context.beginPath();
context.lineWidth="10";
context.strokeStyle="green";

var temps=['0.1','4'];

cliB=elSel.options[i].value; //document.getElementById('sca').value;

ddpp=ddpp+cliB+';;';

//

//alert('1');

appendOptionC2(cliB);

//listadd


var tempX=0.1;
var tempY=0.1;
var tempW=0.1;
var tempH=0.1;

temps= cliB.split(";");

tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));

tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));


context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 


//alert('25');

//alert(tempX.toString()+";"+tempY.toString()+";"+tempW.toString()+";"+tempH.toString());

//alert(curColor); //= $(this).children('span').attr('rel');

                        

//dd=dd+cli4[cli4.length-1];

                        //context.lineTo(clickX[i], clickY[i]);
                        
//context.rect(clickX[i], clickY[i], clickX[i-1]-clickX[i], clickY[i-1]-clickY[i]);
                    
context.closePath();
                        //context.strokeStyle = clickColor[i];
                        //context.lineWidth = parseInt(clickSize[i]);
                        //context.stroke();
////////////////////////////////////////////////////////////////////////////////////////        

}
}


//alert(ddpp);
//alert('2');
localStorage.setItem('longName', ddpp);

dd=dd+cli4[cli4.length-1];

context.beginPath();
context.lineWidth="10";
context.strokeStyle="green";
//var temps=['0.1','4'];
//cliB=elSel.options[i].value; //document.getElementById('sca').value;
////////////////////////////////////////////////

cliB=document.getElementById('sca').value;

//var tempX=0.1;
//var tempY=0.1;
//var tempW=0.1;
//var tempH=0.1;
temps= cliB.split(";");
tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));
tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));
context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 
context.closePath();

                    context.restore();
                }
///////////////////////////////////////////////

function removeOptionAll()
{
  var elSel = document.getElementById('selectX');
  var i;
  for (i = elSel.length - 1; i>=0; i--) {
    //if (elSel.options[i].selected) {
      elSel.remove(i);
    //}
  }
}

function AddLL()
{
  var elS1 = document.getElementById('selectX');
//////////////////////////////////////////////////////  
var elSel = document.getElementById('sel2');
  var i;
  for (i = 0; i<=elSel.length - 1; i++) {
    //if (elSel.options[i].selected) {
      //elSel.remove(i);
appendOptionCoord(elSel.options[i].value);
    //}
  }
}

function removeO2()
{
//////////////////////////////////////////////////////////////////  
var elSel = document.getElementById('sel2');
  var i;
  for (i = elSel.length - 1; i>=0; i--) {
    //if (elSel.options[i].selected) {
      elSel.remove(i);
    //}
  }
}

function removeAAll()
{

for(var i = clickX.length - 1; i >= 0; i--) {
    if(clickX[i] === number) {
       clickX.splice(i, 1);
       clickY.splice(i, 1);
       cli3.splice(i, 1);
       clickDrag.splice(i, 1);
//                var clickX = new Array();
                //var clickY = new Array();
                //var cli3 = new Array();
               //var clickDrag = new Array();

    }
}

}

function appendOptionLast(num)
{
  var elOptNew = document.createElement('option');
  elOptNew.text = 'Append' + num;
  elOptNew.value = 'append' + num;
  var elSel = document.getElementById('selectX');

  try {
    elSel.add(elOptNew, null); // standards compliant; doesn't work in IE
  }
  catch(ex) {
    elSel.add(elOptNew); // IE only
  }
}


function removeOptionLast()
{
  var elSel = document.getElementById('selectX');
  if (elSel.length > 0)
  {
    elSel.remove(elSel.length - 1);
  }
}



//////////

/////////////////////////////////////////////////////

               function onlyL3() {
removeO2();
removeOptionAll();

//alert('1');

//for (var i = 0; i < elSel.length; i++) {
///                        if (clickDrag[i] && i) {
//context.moveTo(clickX[i - 1], clickY[i - 1]);

var ab=localStorage.getItem('longName'); //alert(ab);

var textArray = ab.split(';;');
//var Tneo='';
//var temp=0.1;
//var temp2=0.1;
//var temps=['0.1','4'];
//var tBak=['0.1','4'];

//appendOptionC2('1234');

for(var i=0; i<textArray.length-1;i++) 
{
//temps= textArray[i].split("\t");
//temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
//temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
//Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
//tBak=temps;
appendOptionC2(textArray[i]);
appendOptionCoord(textArray[i]);

//alert('2');
}


//appendOptionC2('1234');
//appendOptionC2('5678');
}



//////////


function insertOptionBefore(num)
{
  var elSel = document.getElementById('selectX');
  if (elSel.selectedIndex >= 0) {
    var elOptNew = document.createElement('option');
    elOptNew.text = 'Insert' + num;
    elOptNew.value = 'insert' + num;
    var elOptOld = elSel.options[elSel.selectedIndex];  
    try {
      elSel.add(elOptNew, elOptOld); // standards compliant; doesn't work in IE
    }
    catch(ex) {
      elSel.add(elOptNew, elSel.selectedIndex); // IE only
    }
  }
}

function removeOptionSelected()
{
  var elSel = document.getElementById('selectX');
  var i;
  for (i = elSel.length - 1; i>=0; i--) {
    if (elSel.options[i].selected) {
      elSel.remove(i);
    }
  }
}

function alertOptionSelected()
{
  var elSel = document.getElementById('selectX');
  var i;
  for (i = elSel.length - 1; i>=0; i--) {
    if (elSel.options[i].selected) {

// ALERTOP      alert(elSel.options[i].value);

document.getElementById('txtscan').value=elSel.options[i].value;
//document.getElementById('sca').value=elSel.options[i].value;

document.getElementById('scaR').value=elSel.options[i].value;

alert(elSel.options[i].value);
alert(document.getElementById('sca').value);
//document.getElementById('sca').value=elSel.options[i].value;

localStorage.setItem('variableR', elSel.options[i].value);

curColor=0;
                    
                    context.save();
                    context.beginPath();
                    context.rect(0, 0, context.canvas.width, context.canvas.height);
                    context.clip();
 context.beginPath();
                    context.lineJoin = "round";
 
dd='';
//dd=cli4[0]+';';
var jflag=0;
var ijf=0
var cliB='';
var ddpp='';
                    

//////////////////////////////////////////////////////

//alert('1');

var elSel = document.getElementById('selectX');

//  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    //if (elSel.options[i].selected) {
//      elSel.remove(i);
//    //}
//  }
/////////////////

//alert('1');
////////////////////////////////////////////removeO2();

for (var j = 0; j < elSel.length; j++) {
                        context.beginPath();

///                        if (clickDrag[i] && i) {
                            //context.moveTo(clickX[i - 1], clickY[i - 1]);
curColor=0;
context.rect(100, 100, 50, 50);

context.beginPath();
context.lineWidth="10";
context.strokeStyle="blue";

//if (elSel.options[j].selected) {
//      alert(elSel.options[j].value);
//}

var temps=['0.1','4'];

cliB=elSel.options[j].value; //document.getElementById('sca').value;

ddpp=ddpp+cliB+';;';

//////////////////////////////////////////appendOptionC2(cliB);

//listadd

//alert(document.getElementById('sca').value);
//alert('2');

var tempX=0.1;
var tempY=0.1;
var tempW=0.1;
var tempH=0.1;

temps= cliB.split(";");

tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));

tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));


context.rect(tempX, tempY, tempW, tempH);

//alert('3');

context.stroke(); 


//alert(tempX.toString()+";"+tempY.toString()+";"+tempW.toString()+";"+tempH.toString());

//alert(curColor); //= $(this).children('span').attr('rel');

//alert('4');                        

//dd=dd+cli4[cli4.length-1];

                        //context.lineTo(clickX[i], clickY[i]);
                        
//context.rect(clickX[i], clickY[i], clickX[i-1]-clickX[i], clickY[i-1]-clickY[i]);
                    
context.closePath();

//alert('5');
redC2();
                        context.strokeStyle = clickColor[j];
                        context.lineWidth = parseInt(clickSize[j]);
                        context.stroke();
////////////////////////////////////////////////////////////////////////////////////////   
alert('8');

redC2();
                 
}

//alert(ddpp);

localStorage.setItem('longName', ddpp);

dd=dd+cli4[cli4.length-1];

context.beginPath();
context.lineWidth="10";
context.strokeStyle="green";
//var temps=['0.1','4'];
//cliB=elSel.options[i].value; //document.getElementById('sca').value;
cliB=document.getElementById('sca').value;
//alert(clipB);
//var tempX=0.1;
//var tempY=0.1;
//var tempW=0.1;
//var tempH=0.1;
temps= cliB.split(";");
tempX=(parseFloat(temps[0]));
tempY=(parseFloat(temps[1]));
tempW=(parseFloat(temps[3])-parseFloat(temps[0]));
tempH=(parseFloat(temps[4])-parseFloat(temps[1]));
context.rect(tempX, tempY, tempW, tempH);
context.stroke(); 
context.closePath();
//alert(clipB);

//$("#erasecanvas").click();

                    context.restore();
/////////////////                
//}


    }
  }
}


