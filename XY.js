var textArray=['1234','5678'];

function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function Xdu(ch1, ch2)
{
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;

var temps=['0.1','4'];
var tBak=['0.1','4'];

temp=(parseFloat(ch1)-parseFloat(ch2));

if (temp<0) {temp=0;}

    document.getElementById("x330").value = temp.toString();

//////////////////////////////////////////////////alert(s);
}

function Ydu(ch1, ch2)
{
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;

var temps=['0.1','4'];
var tBak=['0.1','4'];

temp=(parseFloat(ch1)-parseFloat(ch2));
if (temp<0) {temp=0;}

    document.getElementById("y330").value = temp.toString();

//////////////////////////////////////////////////alert(s);
}

function getRECT()
{


var elSel = document.getElementById('selectX');
//  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    if (elSel.options[i].selected) {

// ALERTOP      
//alert(elSel.options[0].value);


 var s=elSel.options[0].value; //document.getElementById("scaR").value;

var textArray = s.split(";");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;

var temps=['0.1','4'];
var tBak=['0.1','4'];
//temp=(parseFloat(textArray[3])-parseFloat(textArray[0]));
//temp2=(parseFloat(textArray[4])-parseFloat(textArray[1]));

temp=(parseFloat(textArray[3]));
temp2=(parseFloat(textArray[4]));

    document.getElementById("tW1").value = textArray[0];
    document.getElementById("tH1").value = textArray[1];
    document.getElementById("tW2").value = temp;
    document.getElementById("tH2").value = temp2;

    //document.getElementById("target").value = Tneo;

//////////////////////////////////////////////////alert(s);
}

function DTMA()
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];
for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");
temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
tBak=temps;
}
    document.getElementById("target").value = Tneo;

//////////////////////////////////////////////////alert(s);
}

function CARE()
{
    var textToSave = document.getElementById("tCare").value;
    var textFrom = document.getElementById("textFrom").value;
    var textTo = document.getElementById("textTo").value;
    var textStep = document.getElementById("textStep").value;
textToSave=textToSave.replace('log', 'Math.log');
textToSave=textToSave.replace('sin', 'Math.sin');
textToSave=textToSave.replace('cos', 'Math.cos');

var tts= textToSave.split(";");

var s='';
var i=0;
var j=0;
//alert('1');
for(i=parseFloat(textFrom); i<parseFloat(textTo);i=i+parseFloat(textStep)){
s=s+i;
//; x <= qwerty.length;
for(j=0; j<tts.length;j++){
//s=s+'t'
s=s+'\t'+eval('x='+i+'; '+caretReplace(tts[j]));
}
s=s+'\n';
if (i>=parseFloat(textTo))break;
//s=s+'\n';
}
s=s+parseFloat(textTo);
for(j=0; j<tts.length;j++){
s=s+'\t'+eval('x='+parseFloat(textTo)+'; '+caretReplace(tts[j]));
}
document.getElementById("target").value = s;
loadARR();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function loadARR()
{
textFrom2 = document.getElementById("target").value
textArray = textFrom2.split("\n");
for(var i=0; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
//Tneo=Tneo+textArray[i]+'\n';
}
//    document.getElementById("target").value = Tneo;
//var WW=document.getElementById('target').offsetWidth;
//var HH=document.getElementById('target').offsetHeight;

var W1=document.getElementById('tW1').value;
var H1=document.getElementById('tH1').value;

var WW2=parseFloat(document.getElementById('tW2').value)+parseFloat(W1);
var HH2=parseFloat(document.getElementById('tH2').value)+parseFloat(H1);

var WW=WW2.toString();
var HH=HH2.toString();

//alert(HH);

var sOX = document.getElementById("fw");
var sOY = document.getElementById("fh");
fwN = document.getElementById('fwBox').value ;
fhN = document.getElementById('fhBox').value ;
var m222=n1(fwN);
var m22=n1(fhN);
//sOX.value=props(m222, "0;"+WW);
//sOY.value=props(m22, "0;"+HH);
sOX.value=props(m222, W1+";"+WW);
sOY.value=props(m22, H1+";"+HH);
}
 
function loadCSVtext()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
alert('File loaded');

var cd=document.getElementById('inputTextToSave').value; 
var str = cd.replace(/\n|\r\n|\r/g, ';;'); 
//
var str2 = str.replace(/\s{1,}/g, ';'); 
var str3 = cd.replace(/;{3,}/g, ';;'); 
//var str4 = str3.replace(/\s/g, ''); 
var str5 = str2.replace(/;{2,}/g, '\r\n'); 
//var str6 = str5.replace(/;/g, ' '); 
//

document.getElementById('target').value=str5; ///5;

///alert('look');

var Tneo="";
    textFrom2 = document.getElementById("inputTextToSave").value
textArray = textFrom2.split("\n");
for(var i=0; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
Tneo=Tneo+textArray[i]+'\n';
}

//    document.getElementById("target").value = Tneo;

var WW=document.getElementById('target').offsetWidth;
var HH=document.getElementById('target').offsetHeight;
var sOX = document.getElementById("fw");
var sOY = document.getElementById("fh");
fwN = document.getElementById('fwBox').value ;
fhN = document.getElementById('fhBox').value ;
var m222=n1(fwN);
var m22=n1(fhN);
//alert(HH);
sOX.value=props(m222, "0;"+WW);
sOY.value=props(m22, "0;"+HH);

}

function onlycols()
{
var W1=document.getElementById('tW1').value;
var H1=document.getElementById('tH1').value;

var WW2=parseFloat(document.getElementById('tW2').value)+parseFloat(W1);
var HH2=parseFloat(document.getElementById('tH2').value)+parseFloat(H1);

var WW=WW2.toString();
var HH=HH2.toString();

var sOX = document.getElementById("fw");
var sOY = document.getElementById("fh");
fwN = document.getElementById('fwBox').value ;
fhN = document.getElementById('fhBox').value ;
var m222=n1(fwN);
var m22=n1(fhN);

var st1=document.getElementById('st1').value;
var st2=document.getElementById('st2').value;


//alert(HH);

//sOX.value=props(m222, "0;"+WW);
//sOY.value=props(m22, "0;"+HH);

sOX.value=props(m222, W1+";"+WW);

if (st1=='-1') {sOX.value=props(m222, WW+";"+W1)};

sOY.value=props(m22, H1+";"+HH);

if (st2=='-1') {sOY.value=props(m22, HH+";"+H1)};

//var WW=document.getElementById('target').offsetWidth;
//var HH=document.getElementById('target').offsetHeight;
//var sOX = document.getElementById("fw");
//var sOY = document.getElementById("fh");
//fwN = document.getElementById('fwBox').value ;
//fhN = document.getElementById('fhBox').value ;
//var mmm=n1(fwN);
//var mm=n1(fhN);
//sOX.value=props(mmm, "0;"+WW);
//sOY.value=props(mm, "0;"+HH);
//alert('2');
}
////////////////////////////////////////////////////////////////////////////////////////

function is2s(str, smax, smin)
{
str2=str.split(".");
str3=str.split("e");
strpr=str2[0].split("e");
str4=str/str3[0];
if(parseFloat(strpr)<2){str4=str4/10};
var rmin=Math.floor(smin/str4)*str4;
var rmax=(Math.floor(smax/str4)+1)*str4;
var y=rmin;
var z=rmin;
for(var i=(rmin+str4); i<(rmax+str4);i=(i+str4)) 
{
y=i.toExponential();
  z=z+";"+y;
}
return z;
}

///////////////

function RoundStep(nBig, nSm) {
str2=nBig.split(".");
str3=nBig.split("e");
str4=nBig/str3[0];
str5=Math.round(str3[0])+"e"+parseFloat(str3[1]);
return str5;
}


function propspp(x1xN, min4max4) {

var ab=parseFloat(props(x1xN, min4max4));
if(ab<0) {ab=0;}

var bc=ab.toString();
return bc;

}

//////////////////////////////////////////
function props(x1xN, min4max4) {
var pieces = x1xN.split(";");
var pieces2 = min4max4.split(";");
var qx=nchar(x1xN, ";");
var qy=nchar(min4max4, ";");
var yleft=parseFloat(pieces2[0]); 
var yright=parseFloat(pieces2[1]); 
var sm3=""
    for (var i = 0; i < qx; i++) {
                  smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[qx]), parseFloat(pieces[i]), parseFloat(pieces2[0]), parseFloat(pieces2[1]));
if (smart2==pieces2[1]) {} else
//if (5==6) {} else
{	
sm3=sm3+parseFloat(pieces[i]);
	sm3=sm3+"\t";
smart2=roundPlus(smart2, 4);
if (smart2=="0") {smart2="0.0001";}
	sm3=sm3+smart2; //+'!!!'+pieces2[1];
	sm3=sm3+"\n";
}
}
	sm3=sm3+parseFloat(pieces[qx]);
	sm3=sm3+"\t";
coo=parseFloat(pieces2[1]);
coo=roundPlus(coo, 4);
if (coo==0) {coo=0.0001;}
smart2 = coo;
	sm3=sm3+smart2;
return sm3;
}

/////////////////////////////////////////////////////////////////////////
function smart3(pizza, unit2, x22) {
// 1;2;3;4;5 - ox ($pizza)
//10;20;30;40;50 - на бумаге ($unit2)
//$x22 - значение (например, 2.1)
var pieces = pizza.split(";");//explode(";", $pizza);
var pieces2 = unit2.split(";");//explode(";", $unit2);
var xleft=parseFloat(pieces[0]); 
var q=nchar(pizza, ";");
var xright=parseFloat(pieces[q]);//$pieces[$q]; 
var smart2=0;

    for (var i = 0; i < q; i++) {
var pr2=(x22 >= parseFloat(pieces[i]) && x22<=parseFloat(pieces[i+1]) || x22 <= parseFloat(pieces[i]) && x22 >= parseFloat(pieces[i+1]));
//alert(pr2.toString()); 

//    If (x22 >= parseFloat(pieces[i]) && x22<=parseFloat(pieces[i+1]) || x22 <= parseFloat(pieces[i]) && x22 >= parseFloat(pieces[i+1])){
if (pr2==true)
{
	smart2 = propo(parseFloat(pieces[i]), parseFloat(pieces[i+1]), x22, parseFloat(pieces2[i]), parseFloat(pieces2[i+1]));
        } 
    }

if (x22 < xleft && xleft < xright || x22 > xleft && xleft>xright)
{
    smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[1]), x22, parseFloat(pieces2[0]), parseFloat(pieces2[1]));
}

if ((x22 > xleft && x22 > xright && xleft < xright) || (x22 < xleft && x22 > xright && xleft>xright))
{
            smart2 = propo(parseFloat(pieces[q-1]), parseFloat(pieces[q]), x22, parseFloat(pieces2[q-1]), parseFloat(pieces2[q]));
}

return smart2;
}



function getts2d(xy1, x1, y1, xa4, ya4) {
var srav=xy1.split(";");//explode(";", xy1);
var d0=smart3(x1, xa4, srav[0]);
var h0=smart3(y1, ya4, srav[1]);
var gett=d0 + ";" + h0;
return gett;
}

function gettsa4(xyt) {
var srav=xyt.split(";;");//explode(";;", xyt);
var gett=getts2d(srav[0],srav[1],srav[2],srav[3],srav[4]);
return gett;
}

//////////////////////////////////////////
function proZ(x1xN, min4max4) {
var pieces = x1xN.split(";");
var pieces2 = min4max4.split(";");
var qx=nchar(x1xN, ";");
var qy=nchar(min4max4, ";");

var smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[qx]), 0, parseFloat(pieces2[0]), parseFloat(pieces2[qy]));

return smart2;
}

///////////////

function propo(x1, x2, i4, min4, max4) {
var part = (i4 - x1) / (x2 - x1);    
return (max4 - min4) * part + min4;
}

///////////////

function nchar(qwerty, char2) {
    var j=0;
    var rest="";
    for (var x = 0; x <= qwerty.length; x++) {
        rest = qwerty.substr(x, char2.length);
        if (rest == char2 ) j++;
        } 
    return j;
}

///////////////

function roundPlus(x, n) { //x - число, n - количество знаков 
  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;
}

function n1(n)
{
var newst=["1234", "5678"];
var tmu=1;
var tmuS='1';

newst=textArray[3].split("\t");
var smax=[1, 2];
var smin=[1, 2];
var tst=[1, 2];
var sraz=[1, 2];

var j=n;//fwN;0;//val; //!!!
for(var i=0; i<textArray.length;i++) 
{
newst=textArray[i].split("\t");
tst[j]=parseFloat(newst[j]);
if (tst[j]!=0) { if (isNaN(tst[j])){}else{break;} }
}
smax[j]=parseFloat(newst[j]);
smin[j]=smax[j];
for(var i=5; i<textArray.length;i++) 
{
newst=textArray[i].split('\t');
tst[j]=parseFloat(newst[j]);
if (tst[j]>smax[j]) smax[j]=tst[j];
if (tst[j]<smin[j]) smin[j]=tst[j];
sraz[j]=Math.abs(smax[j]-smin[j]);
sraz[j] = sraz[j].toExponential();
}
str = smax[j]+";"+smin[j]+";"+sraz[j];
str = is2s(sraz[j], smax[j], smin[j]);
var mults=str.split(';');
var m2=mults[0];
for(var i=1; i<mults.length;i++) 
{
mults[i]=RoundStep(mults[i],1);

//tmu=parseFloat(mults[i])*(-1);
//tmuS=tmu.toString();
m2=m2+";"+mults[i];
//m2=m2+";"+tmuS;
}
var m222=m2;
//alert(m2);
return m2;
}

var caretReplace = function(_s) {
    if (_s.indexOf("^") > -1) {
        var tab = [];
        var powfunc="Math.pow";
        var joker = "___joker___";
        while (_s.indexOf("(") > -1) {
            _s = _s.replace(/(\([^\(\)]*\))/g, function(m, t) {
                tab.push(t);
                return (joker + (tab.length - 1));
            });
        }

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1) {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\w*)\^(\w*)/g, powfunc+"($1,$2)");
            });
        }
    }
    return _s;
};

///////////////

function minimax() {

var Tneo="";

var str = [
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input3','input4']
];

    textFrom2 = document.getElementById("target").value

textArray = textFrom2.split("\n");

for(var i=0; i<textArray.length;i++) 
{
textArray[i]=textArray[i].replace(/[-]/g, ' -');
textArray[i]=textArray[i].replace(/E -/g, 'E-');
textArray[i]=textArray[i].replace(/e -/g, 'e-');
textArray[i]=textArray[i].replace(/\s/g, ' ');
textArray[i]=textArray[i].replace(/\t/g, ' ');
//textArray[i]=textArray[i].replace(/\s/g, ' ');
textArray[i]=textArray[i].replace(/  +/g, ' ');

textArray[i]=textArray[i].trim();

//textArray[i]=textArray[i].replace(/  +/g, ' ');
textArray[i] = textArray[i].replace(/[ ]/g, '\t')
textArray[i] = textArray[i].replace(/[;]/g, '\t');

//textArray[i] = textArray[i].replace( '\t\t', '\t');
Tneo=Tneo+textArray[i]+'\n';
}

    document.getElementById("target").value = Tneo;

///////////////////////////////////

val = 0;//document.getElementById('box').value ;// вот так мы его и получаем. box это id вашего селекта замените его на свое

var newst=["1234", "5678"];
newst=textArray[3].split("\t");
var smax=[1, 2];
var smin=[1, 2];
var tst=[1, 2];
var sraz=[1, 2];

//var j=0; //fwN;0;//val; //!!!

//THISsca

for(var j=0; j<10;j++) 
{
for(var i=0; i<textArray.length;i++) 
{
newst=textArray[i].split("\t");
tst[j]=parseFloat(newst[j]);
if (tst[j]!=0) { if (isNaN(tst[j])){}else{break;} }
}

//alert(textArray[5]);

smax[j]=parseFloat(newst[j]);
smin[j]=smax[j];
for(var i=5; i<textArray.length;i++) 
{
newst=textArray[i].split('\t');
tst[j]=parseFloat(newst[j]);
if (tst[j]>smax[j]) smax[j]=tst[j];
if (tst[j]<smin[j]) smin[j]=tst[j];
sraz[j]=Math.abs(smax[j]-smin[j]);
sraz[j] = sraz[j].toExponential();
}
//str = smax[j]+";"+smin[j]+";"+sraz[j];
str[j][0] = smin[j];//+";"+sraz[j];
str[j][1] = smax[j];//+";"+sraz[j];

//alert(str);
}


//THISsca

var xBox=document.getElementById('xBox').value;
var xB=parseFloat(xBox);
var yBox=document.getElementById('yBox').value;
var yB=parseFloat(yBox);

document.getElementById('sca1').value=str[xB][0];

document.getElementById('sca2').value=str[xB][1];

document.getElementById('sca3').value=str[yB][0];

document.getElementById('sca4').value=str[yB][1];


}

function textPlus(txtWord, cooX, cooY) { //x - число, n - количество знаков 
  
//if(isNaN(x) || isNaN(n)) return false;
  //var m = Math.pow(10,n);
  //lkjreturn Math.round(x*m)/m;

//<text x='100' y='100' fill='black' font-family='Arial' font-size='10'>100</text>

var q="<text x='"+cooX+"' y='"+cooY+"' fill='black' font-family='Arial' font-size='10'>"+txtWord+"</text>";

    return q;
}
