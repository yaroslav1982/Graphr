var sele="";
        document.write('<select name="OXbox" id="OXbox" style="width : 50" onclick="newOX()">');
//for(var i=0; i<21;i++) 
//{
//if (i==0) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}

document.write("<option value='"+0+"' selected>"+'OY-Min'+"</option>");
document.write("<option value='"+1+"'>"+'OY-Zero'+"</option>");
document.write("<option value='"+2+"'>"+'OY-Max'+"</option>");

document.write('</select>');

        document.write('<select name="OYbox" id="OYbox" style="width : 50" onclick="newOY();">');
//for(var i=0; i<21;i++) 
//{
//if (i==0) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}

document.write("<option value='"+0+"' selected>"+'OX-Min'+"</option>");
document.write("<option value='"+1+"'>"+'OX-Zero'+"</option>");
document.write("<option value='"+2+"'>"+'OX-Max'+"</option>");

document.write('</select>');

//        document.write('<select name="yBox" id="yBox" style="width : 50" onclick="newcols(); newchange();">');
//for(var i=0; i<21;i++) 
//{
//if (i==1) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}
//document.write('</select>');

//        document.write('<select name="mBox" id="mBox" style="width : 50" onclick="newcols()">');
//for(var i=0; i<8;i++) 
//{
//if (i==2) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}
//document.write('</select>');
