if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

var _$_4584=["translate","","status","scope","validations","indexOf","This extension is not included on the scope of this license","License required","version","This extension request Jspreadsheet Pro v9+","object","keys","length","sort","every","config","action","format","map","entries"," .conditional_formatting_","name","_"," {\n",";\n","join","\n}","jss_validations_","getElementById","style","createElement","id","appendChild","head","getElementsByTagName","innerHTML","push","getValidations","get",
"setValidations","set","resetValidations","reset","range","!","split","current","getCoordsFromRange","helpers","columns","options","rows","records","splice","parent","bind","oldValue","index","value","isArray","JSS: input should be an array","error","stringify","parse","call","setHistory","persistence","onvalidation","dispatch","build","updateAll","getWorksheetName","updateFormula","updateWorksheetName","0","between","Number","1","is not between","not between","2","less than","<","3","less than or equal to",
"<=","4","bigger than",">","5","bigger than or equal to",">=","6","equal to","=","7","differente to","!=","8","contains","Text","9","not contains","10","11","is a valid email","valid email","12","is a valid url","valid url","13","is a valid date","Date","valid date","14","15","before","16","on or before","17","after","18","on or after","19","20","21","List","List of Items","22","Text length","textLength","23","24","25","26","27","28","29","different to","toUpperCase","replace","substr","create","instance",
"calendar","element","a number ","a text ","a date ","an element of the list: ","The content of this cell must be ","type","criteria"," ","list"," [",",","]"," and ","mask","locale","UTC","DateTimeFormat","2012","yyyy","mm","dd","onchange","data","groupKey","toLowerCase","group","createType","jss_object","add","classList","header","dropdown","createOptions","number","text","date","createPicker","innerText","focus","picker","createColorPicker","color","close","The range is mandatory","The type is mandatory",
"The criteria is mandatory","className","allowBlank","includes","start","end","formatColor","formatBackgroundColor","background-color","bold","font-weight","italic","font-style","Cell range","Action","Warning message","Reject entry","Format style","Criteria","and","Color","Background color","Add a custom CSS className","Save","Back","data-tooltip","removeAttribute","jss_warning","remove","data-validation","getAttribute","v","getColumnNameFromCoords","setAttribute","reject","conditional_formatting_",
"init","updateDataFromSelection","message","All validations found for this selection","filter","No validation found for this selection","closeForm","validationFromRange","JSS: worksheetName is mandatory for the validations.","getTokensFromRange","getCoordsFromColumnName","forEach","toolbar","settings","i","Add new validation","getRange","open","items","modal","onevent","onafterchanges","onchangeproperty","onformulachain","x","y","oncreatecell","onbeforechange","onselection","getRangeFromTokens","onload",
"onrenameworksheet","onchangereferences","ignoreHistory","onundo","onredo","createModal","Validations","380px","612px","openForm","warning","display","listContainer","none","settingsContainer","block","removeValidation","div","append","tools","render","oninit","setPlugins","license","undefined","exports","function","amd"];
(function(r,e){typeof exports===_$_4584[10]&&typeof module!==_$_4584[282]?module[_$_4584[283]]=e():typeof define===_$_4584[284]&&define[_$_4584[285]]?define(e):r[_$_4584[4]]=e()})(this,function(){var r=null,e=jSuites[_$_4584[0]],A=function(){var b=_$_4584[1];8==this[_$_4584[2]]?this[_$_4584[3]]&&-1!=this[_$_4584[3]][_$_4584[5]](_$_4584[4])||(b=_$_4584[6]):b=_$_4584[7];if(!b){var h=r[_$_4584[8]]();if(!h||!h[_$_4584[8]]||9>parseInt(h[_$_4584[8]]))b=_$_4584[9]}return b},u=function(){var b={reject:2,
warning:1,format:0},h=function(d,c){d=this[_$_4584[15]][_$_4584[4]][d]&&this[_$_4584[15]][_$_4584[4]][d][_$_4584[16]]?this[_$_4584[15]][_$_4584[4]][d][_$_4584[16]]:0;c=this[_$_4584[15]][_$_4584[4]][c]&&this[_$_4584[15]][_$_4584[4]][c][_$_4584[16]]?this[_$_4584[15]][_$_4584[4]][c][_$_4584[16]]:0;return b[d]-b[c]},g=function(d){var c=d[_$_4584[15]][_$_4584[4]];if(c&&c[_$_4584[12]]){for(var k=_$_4584[1],f=0;f<c[_$_4584[12]];f++)if(c[f]&&c[f][_$_4584[17]]){var m=Object[_$_4584[19]](c[f][_$_4584[17]])[_$_4584[18]](function([p,
t]){return`\t${p}: ${t} !important\n`});k+=_$_4584[20]+d[_$_4584[21]]+_$_4584[22]+f+_$_4584[23]+m[_$_4584[25]](_$_4584[24])+_$_4584[26]}c=document[_$_4584[28]](_$_4584[27]+d[_$_4584[21]]);c||(c=document[_$_4584[30]](_$_4584[29]),c[_$_4584[31]]=_$_4584[27]+d[_$_4584[21]],document[_$_4584[34]](_$_4584[33])[0][_$_4584[32]](c));c[_$_4584[35]]=k}},a=function(d){this[_$_4584[15]][_$_4584[4]]||(this[_$_4584[15]][_$_4584[4]]=[]);var c=this[_$_4584[15]][_$_4584[4]][_$_4584[12]];this[_$_4584[15]][_$_4584[4]][_$_4584[36]](d);
return c},n=function(d,c){this[_$_4584[15]][_$_4584[4]][d]=c},l=function(d){d[_$_4584[37]]=l[_$_4584[38]];d[_$_4584[39]]=l[_$_4584[40]];d[_$_4584[41]]=l[_$_4584[42]]},q=function(d,c,k){if(c[_$_4584[43]]){if(0<c[_$_4584[43]][_$_4584[5]](_$_4584[44])){var f=c[_$_4584[43]][_$_4584[45]](_$_4584[44]);f=x(f[0])}else f=r[_$_4584[46]];var m=r[_$_4584[48]][_$_4584[47]](c[_$_4584[43]]);m[2]>f[_$_4584[50]][_$_4584[49]][_$_4584[12]]&&(m[2]=f[_$_4584[50]][_$_4584[49]][_$_4584[12]]-1);m[3]>f[_$_4584[51]][_$_4584[12]]&&
(m[3]=f[_$_4584[51]][_$_4584[12]]-1);for(var p=m[1];p<=m[3];p++)for(c=m[0];c<=m[2];c++)if(f[_$_4584[52]][p][c])if(f[_$_4584[52]][p][c][_$_4584[4]]||(f[_$_4584[52]][p][c][_$_4584[4]]=[]),0===d){if(k=f[_$_4584[52]][p][c][_$_4584[4]][_$_4584[5]](k),0<=k)f[_$_4584[52]][p][c][_$_4584[4]][_$_4584[53]](k,1)}else-1===f[_$_4584[52]][p][c][_$_4584[4]][_$_4584[5]](k)&&(f[_$_4584[52]][p][c][_$_4584[4]][_$_4584[36]](k),f[_$_4584[52]][p][c][_$_4584[4]][_$_4584[13]](h[_$_4584[55]](f[_$_4584[54]])))}};l[_$_4584[40]]=
function(d){Array[_$_4584[59]](d)||typeof d!==_$_4584[10]||(d=[d]);if(Array[_$_4584[59]](d)){for(var c,k,f=[],m=0;m<d[_$_4584[12]];m++)k=null,0<=d[m][_$_4584[57]]?(c=d[m][_$_4584[57]],this[_$_4584[54]][_$_4584[15]][_$_4584[4]]&&this[_$_4584[54]][_$_4584[15]][_$_4584[4]][c]&&(k=JSON[_$_4584[63]](JSON[_$_4584[62]](this[_$_4584[54]][_$_4584[15]][_$_4584[4]][c]))),n[_$_4584[64]](this[_$_4584[54]],c,d[m][_$_4584[58]])):c=a[_$_4584[64]](this[_$_4584[54]],d[m][_$_4584[58]]),f[_$_4584[36]]({index:c,oldValue:k,
value:d[m][_$_4584[58]]});g(this[_$_4584[54]]);for(d=0;d<f[_$_4584[12]];d++)f[d][_$_4584[56]]&&q(0,f[d][_$_4584[56]],f[d][_$_4584[57]]),f[d][_$_4584[58]]&&q(1,f[d][_$_4584[58]],f[d][_$_4584[57]]);this[_$_4584[54]][_$_4584[65]]({worksheet:this,action:_$_4584[39],records:f});this[_$_4584[66]](_$_4584[39],{data:f});this[_$_4584[54]][_$_4584[68]](_$_4584[67],this,f)}else console[_$_4584[61]](_$_4584[60])};l[_$_4584[38]]=function(d){var c=this[_$_4584[54]][_$_4584[15]][_$_4584[4]];return d?c[d]:c};l[_$_4584[42]]=
function(d){Array[_$_4584[59]](d)||(d=[d]);d=d[_$_4584[18]](function(c){return{index:c,value:null}});l[_$_4584[40]][_$_4584[64]](this,d)};l[_$_4584[69]]=function(){g(this);var d=this[_$_4584[15]][_$_4584[4]];if(d)for(var c=0;c<d[_$_4584[12]];c++)q(1,d[c],c)};l[_$_4584[70]]=function(d,c){var k=this[_$_4584[54]][_$_4584[15]][_$_4584[4]],f=[];if(k&&k[_$_4584[12]]){for(var m=0;m<k[_$_4584[12]];m++){var p=this[_$_4584[72]](k[m][_$_4584[43]],d,c,this[_$_4584[71]]());if(p!==k[m][_$_4584[43]]){var t={index:m,
value:k[m]};t[_$_4584[58]][_$_4584[43]]=p;f[_$_4584[36]](t)}}l[_$_4584[40]][_$_4584[64]](this,f)}};l[_$_4584[73]]=function(d,c){var k=this[_$_4584[54]][_$_4584[15]][_$_4584[4]],f=[];if(k&&k[_$_4584[12]]){for(var m=0;m<k[_$_4584[12]];m++){var p=r[_$_4584[48]][_$_4584[73]](k[m][_$_4584[43]],d,c);if(p!==k[m][_$_4584[43]]){var t={index:m,value:k[m]};t[_$_4584[58]][_$_4584[43]]=p;f[_$_4584[36]](t)}}l[_$_4584[40]][_$_4584[64]](this,f)}};return l}(),y=[{value:_$_4584[74],text:e(_$_4584[75]),group:_$_4584[76],
description:_$_4584[76],criteria:_$_4584[75]},{value:_$_4584[77],text:e(_$_4584[78]),group:_$_4584[76],criteria:_$_4584[79]},{value:_$_4584[80],text:e(_$_4584[81]),group:_$_4584[76],criteria:_$_4584[82]},{value:_$_4584[83],text:e(_$_4584[84]),group:_$_4584[76],criteria:_$_4584[85]},{value:_$_4584[86],text:e(_$_4584[87]),group:_$_4584[76],criteria:_$_4584[88]},{value:_$_4584[89],text:e(_$_4584[90]),group:_$_4584[76],criteria:_$_4584[91]},{value:_$_4584[92],text:e(_$_4584[93]),group:_$_4584[76],criteria:_$_4584[94]},
{value:_$_4584[95],text:e(_$_4584[96]),group:_$_4584[76],criteria:_$_4584[97]},{value:_$_4584[98],text:e(_$_4584[99]),group:_$_4584[100],criteria:_$_4584[99]},{value:_$_4584[101],text:e(_$_4584[102]),group:_$_4584[100],criteria:_$_4584[102]},{value:_$_4584[103],text:e(_$_4584[93]),group:_$_4584[100],criteria:_$_4584[94]},{value:_$_4584[104],text:e(_$_4584[105]),group:_$_4584[100],criteria:_$_4584[106]},{value:_$_4584[107],text:e(_$_4584[108]),group:_$_4584[100],criteria:_$_4584[109]},{value:_$_4584[110],
text:e(_$_4584[111]),group:_$_4584[112],criteria:_$_4584[113]},{value:_$_4584[114],text:e(_$_4584[93]),group:_$_4584[112],criteria:_$_4584[94]},{value:_$_4584[115],text:e(_$_4584[116]),group:_$_4584[112],criteria:_$_4584[82]},{value:_$_4584[117],text:e(_$_4584[118]),group:_$_4584[112],criteria:_$_4584[85]},{value:_$_4584[119],text:e(_$_4584[120]),group:_$_4584[112],criteria:_$_4584[88]},{value:_$_4584[121],text:e(_$_4584[122]),group:_$_4584[112],criteria:_$_4584[91]},{value:_$_4584[123],text:e(_$_4584[75]),
group:_$_4584[112],criteria:_$_4584[75]},{value:_$_4584[124],text:e(_$_4584[79]),group:_$_4584[112],criteria:_$_4584[79]},{value:_$_4584[125],group:_$_4584[126],text:e(_$_4584[127]),criteria:_$_4584[1]},{value:_$_4584[128],text:e(_$_4584[75]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[75]},{value:_$_4584[131],text:e(_$_4584[78]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[79]},{value:_$_4584[132],text:e(_$_4584[81]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[82]},
{value:_$_4584[133],text:e(_$_4584[84]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[85]},{value:_$_4584[134],text:e(_$_4584[87]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[88]},{value:_$_4584[135],text:e(_$_4584[90]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[91]},{value:_$_4584[136],text:e(_$_4584[93]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[94]},{value:_$_4584[137],text:e(_$_4584[138]),group:_$_4584[129],groupKey:_$_4584[130],criteria:_$_4584[97]}],
x=function(b,h){Array[_$_4584[59]](b)&&(b=b[0]);b=b[_$_4584[140]](new RegExp(/'/g),_$_4584[1])[_$_4584[139]]();if(void 0===h)return window[b]?window[b]:null;window[b]=h},B=function(){var b=this;b[_$_4584[142]]=function(h){b[_$_4584[143]]=jSuites[_$_4584[144]](h,this)};return lemonade[_$_4584[145]]('<input class="jss_object" @ready="self.create(this)" style="width: 100%;" />',b)},C={number:_$_4584[146],text:_$_4584[147],date:_$_4584[148],list:_$_4584[149]},D=function(b){var h=_$_4584[150]+C[b[_$_4584[151]]];
b[_$_4584[152]]&&(h+=_$_4584[153]+b[_$_4584[152]]);b[_$_4584[151]]===_$_4584[154]?h+=_$_4584[155]+b[_$_4584[58]][0][_$_4584[25]](_$_4584[156])+_$_4584[157]:(h+=_$_4584[153]+b[_$_4584[58]][0],1<b[_$_4584[58]][_$_4584[12]]&&(h+=_$_4584[158]+b[_$_4584[58]][1]));return h},z=function(){this[_$_4584[50]]=y[this[_$_4584[31]]];return lemonade[_$_4584[145]]('<div>\n                <div class="row middle p8">\n                    <div class="column f1 cursor" onclick="self.parent.openForm(self)">\n                        <div class="p2"><b>{{self.options.group}}</b> <span>({{self.range}})</span></div>\n                        <div class="p2">{{self.options.text}}: {{self.value}}</div>\n                    </div><div>\n                        <div><i class=\'material-icons cursor\' onclick="self.parent.removeValidation(self.index)">delete</i></div>\n                    </div>\n                </div>\n            </div>\n        ',
this)},E=function(){var b=this,h=null;b[_$_4584[16]]=_$_4584[1];b[_$_4584[152]]=_$_4584[1];b[_$_4584[151]]=_$_4584[1];b[_$_4584[167]]=function(a){a===_$_4584[31]&&(0<=b[_$_4584[31]]?(a=h[_$_4584[50]][_$_4584[168]][b[_$_4584[31]]],b[_$_4584[151]]=a[_$_4584[169]]?a[_$_4584[169]]:a[_$_4584[171]][_$_4584[170]](),b[_$_4584[152]]=a[_$_4584[152]]):(b[_$_4584[151]]=_$_4584[1],b[_$_4584[152]]=_$_4584[1]))};b[_$_4584[172]]=function(a){h=jSuites[_$_4584[177]](a,{value:_$_4584[74],data:y,autocomplete:!0,onload:function(n,
l){l[_$_4584[176]][_$_4584[175]][_$_4584[174]](_$_4584[173])}})};b[_$_4584[178]]=function(a){jSuites[_$_4584[177]](a,{data:[{value:_$_4584[179],text:e(_$_4584[76])},{value:_$_4584[180],text:e(_$_4584[100])},{value:_$_4584[181],text:e(_$_4584[112])},{value:_$_4584[154],text:e(_$_4584[126])}]})};b[_$_4584[182]]=function(a){r[_$_4584[185]](a,function(){-1==a[_$_4584[183]][_$_4584[5]](_$_4584[44])?a[_$_4584[183]]=r[_$_4584[46]][_$_4584[71]]()+_$_4584[44]+a[_$_4584[183]]:a[_$_4584[183]]=a[_$_4584[183]];
b[_$_4584[43]]=a[_$_4584[183]];jSuites[_$_4584[184]](a)})};b[_$_4584[186]]=function(a){jSuites[_$_4584[187]](a)};b[_$_4584[188]]=function(a){a&&(b[_$_4584[43]]?b[_$_4584[151]]?b[_$_4584[152]]?(-1===b[_$_4584[43]][_$_4584[5]](_$_4584[44])&&(b[_$_4584[43]]=b[_$_4584[143]][_$_4584[71]]()+_$_4584[44]+b[_$_4584[43]]),a={id:b[_$_4584[31]],range:b[_$_4584[43]],type:b[_$_4584[151]],criteria:b[_$_4584[152]],action:b[_$_4584[16]],text:b[_$_4584[180]],className:b[_$_4584[192]],allowBlank:b[_$_4584[193]]},b[_$_4584[152]][_$_4584[194]](_$_4584[75])?
a[_$_4584[58]]=[b[_$_4584[195]],b[_$_4584[196]]]:a[_$_4584[58]]=[b[_$_4584[195]]],a[_$_4584[16]]===_$_4584[17]&&(a[_$_4584[17]]={},b[_$_4584[197]]&&(a[_$_4584[17]][_$_4584[187]]=b[_$_4584[197]]),b[_$_4584[198]]&&(a[_$_4584[17]][_$_4584[199]]=b[_$_4584[198]]),b[_$_4584[200]]&&(a[_$_4584[17]][_$_4584[201]]=_$_4584[200]),b[_$_4584[202]]&&(a[_$_4584[17]][_$_4584[203]]=_$_4584[202])),a={value:a},null!==b[_$_4584[57]]&&(a[_$_4584[57]]=b[_$_4584[57]]),b[_$_4584[143]][_$_4584[39]](a)):alert(e(_$_4584[191])):
alert(e(_$_4584[190])):alert(e(_$_4584[189])))};var g=`<div>
            <div>
                <!-- Validation type -->
                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${e(_$_4584[204])}</label>
                            <div @ready="self.createPicker(this)" @bind="self.range"></div>
                        </div>
                    </div>
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${e(_$_4584[205])}</label>
                            <select style="padding: 8px;" @bind="self.action">
                                <option value="warning">${e(_$_4584[206])}</option>
                                <option value="reject">${e(_$_4584[207])}</option>
                                <option value="format">${e(_$_4584[208])}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row text" style="{{self.action === 'format' && 'display: none;'}}">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${e(_$_4584[206])}</label>
                            <input type="text" @bind="self.text" class="jss_object">
                        </div>
                    </div>
                </div>

                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${e(_$_4584[209])}</label>
                            <div @ready="self.createType(this)" @bind="self.id"></div>
                        </div>
                    </div>
                </div>

                <!-- Number input options -->
                <div class="row all middle" style="{{self.type != 'number' && self.type != 'textLength' && 'display: none;'}}">
                    <div class="column f1">
                        <div class="form-group">
                            <input type="text" @bind="self.start" class="jss_object" placeholder="5">
                        </div>
                    </div>
                    <span style="{{!self.criteria.includes('between') && 'display: none;'}}">${e(_$_4584[210])}</span>
                    <div class="column f1" style="{{!self.criteria.includes('between') && 'display: none;'}}">
                      <div class="form-group" style="margin-left:4px">
                          <input type="text" @bind="self.end" class="jss_object" placeholder="10">
                      </div>
                    </div>
                </div>

                <!-- Text input options -->
                <div class="row text" style="{{self.type != 'text' && 'display: none;'}}">
                    <div class="column f1" style="{{self.criteria.includes('valid') && 'display: none;'}}">
                        <div class="form-group">
                            <input type="text" @bind="self.start" placeholder="Value..." class="jss_object">
                        </div>
                    </div>
                </div>

                <!-- Date input options -->
                <div class="row middle date" style="{{self.type != 'date' && 'display: none;'}}">
                    <div class="column f1" style="{{self.criteria.includes('valid') && 'display: none;'}}">
                        <div class="form-group">
                            <Calendar @bind="self.start" />
                        </div>
                    </div>
                    <span style="{{!self.criteria.includes('between') && 'display: none;'}}">${e(_$_4584[210])}</span>
                    <div class="column f1" style="{{! self.criteria.includes('between') && 'display: none;'}}">
                        <div class="form-group" style="margin-left:4px">
                            <Calendar @bind="self.end" />
                        </div>
                    </div>
                </div>

                <!-- List input options -->
                <div class="row" style="{{self.type != 'list' && 'display: none;'}}">
                    <div class="column f1">
                        <div class="form-group">
                            <textarea style="resize: vertical;" rows="4" @bind="self.start" placeholder="A, B, C, D..." class="jss_object"></textarea>
                        </div>
                    </div>
                </div>

                <div class="row text" style="{{self.action === 'reject' && 'display: none;'}}">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="jswitch" style="margin-bottom: 6px;">
                            <input name="bold" type="checkbox" @bind="self.allowBlank"> <i></i> <span class="f1 ml1">Allow blank</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- FORMAT STYLING OPTIONS -->
                <div class="row all" style="{{self.action !== 'format' && 'display: none;'}}">
                    <div class="column f1" style="border-top: 1px solid #eee;margin-top:20px">
                        <div class="form-group">
                            <h4 style="color: #2c2d2e; margin: 10px; margin-left: 5px;"><b>Formatting Options</b></h4>

                            <div class="row">
                                <div class="column f1">
                                    <div class="form-group">
                                        <label class="label">${e(_$_4584[211])}</label><br>
                                        <input @ready="self.createColorPicker(this)" @bind="self.formatColor" class="jss_object w100">
                                    </div>
                                </div>
                                <div class="column f1">
                                    <div class="form-group">
                                        <label class="label">${e(_$_4584[212])}</label><br>
                                        <input @ready="self.createColorPicker(this)" @bind="self.formatBackgroundColor" class="jss_object w100">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column f1">
                                    <div class="form-group">
                                        <input type="text" placeholder="${e(_$_4584[213])}" @bind="self.className" class="jss_object">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column f1">
                                    <div class="form-group">
                                        <label class="jswitch label" style="margin-bottom: 6px;">
                                            <input name="bold" type="checkbox" @bind="self.bold"> <i></i> <span class="f1 ml1">Bold</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row all'>
                    <div class='column f1'>
                        <div class='form-group center'>
                            <button type="button" class="jbutton dark w100" onclick="self.close(true)">${e(_$_4584[214])}</button>
                        </div>
                    </div>
                </div>
            </div>
            <p onclick="self.parent.closeForm()" class="cursor">${e(_$_4584[215])}</p>
        </div>`;return lemonade[_$_4584[145]](g,b,{Calendar:B,List:z})},F=function(b,h){if(this[_$_4584[52]][h][b][_$_4584[145]]){this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[217]](_$_4584[216]);this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[175]][_$_4584[219]](_$_4584[218]);var g=this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[221]](_$_4584[220]);if(g){g=g[_$_4584[45]](_$_4584[156]);for(var a=0;a<g[_$_4584[12]];a++)this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[175]][_$_4584[219]](g[a])}this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[217]](_$_4584[220])}},
v=function(b,h,g,a){if(this[_$_4584[54]][_$_4584[15]][_$_4584[4]]&&this[_$_4584[52]][h][b][_$_4584[145]]){F[_$_4584[64]](this,b,h);if(null==g||void 0==g)g=this[_$_4584[52]][h][b][_$_4584[222]];var n=this;r[_$_4584[48]][_$_4584[223]](b,h);if(this[_$_4584[52]][h][b][_$_4584[145]]&&this[_$_4584[52]][h][b][_$_4584[4]])for(var l=this[_$_4584[52]][h][b][_$_4584[4]],q=0;q<l[_$_4584[12]];q++){var d=l[q],c=this[_$_4584[54]][_$_4584[15]][_$_4584[4]][d];if(!c)break;if(!jSuites[_$_4584[4]](g,c)){if(c[_$_4584[16]]!==
_$_4584[17]){g=c[_$_4584[180]]||D(c);this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[224]](_$_4584[216],g);this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[175]][_$_4584[174]](_$_4584[218]);if(c[_$_4584[16]]===_$_4584[225]&&!a)return setTimeout(function(){n[_$_4584[52]][h][b][_$_4584[145]][_$_4584[217]](_$_4584[216]);n[_$_4584[52]][h][b][_$_4584[145]][_$_4584[175]][_$_4584[219]](_$_4584[218])},2500),!1;break}}else if(c[_$_4584[16]]===_$_4584[17]){var k=[];c[_$_4584[192]]&&(k=c[_$_4584[192]][_$_4584[45]](_$_4584[156]));
k[_$_4584[36]](_$_4584[226]+this[_$_4584[54]][_$_4584[21]]+_$_4584[22]+d);for(q=0;q<k[_$_4584[12]];q++)this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[175]][_$_4584[174]](k[q]);this[_$_4584[52]][h][b][_$_4584[145]][_$_4584[224]](_$_4584[220],k)}}}},G=function(b,h){var g={};g[_$_4584[227]]=function(a){u(a)};g[_$_4584[228]]=function(a,n){if(a[_$_4584[12]]){var l=a[0],q=a[2],d=a[3],c=[];for(a=a[1];a<=d;a++)for(var k=l;k<=q;k++)if(this[_$_4584[52]][a][k][_$_4584[145]]&&this[_$_4584[52]][a][k][_$_4584[4]])for(var f=
0;f<this[_$_4584[52]][a][k][_$_4584[4]][_$_4584[12]];f++)this[_$_4584[54]][_$_4584[15]][_$_4584[4]][this[_$_4584[52]][a][k][_$_4584[4]][f]]&&(c[this[_$_4584[52]][a][k][_$_4584[4]][f]]=!0);this[_$_4584[54]][_$_4584[15]][_$_4584[4]]?(l=this[_$_4584[54]][_$_4584[15]][_$_4584[4]][_$_4584[18]](function(m,p){return Object.assign({},m,{index:p})}),g[_$_4584[229]]=e(_$_4584[230])+_$_4584[153]+(n||_$_4584[1]),g[_$_4584[168]]=l[_$_4584[231]](function(m,p){return c[p]})):g[_$_4584[168]]=[]}else g[_$_4584[168]]=
[];g[_$_4584[168]][_$_4584[12]]||(g[_$_4584[229]]=e(_$_4584[232])+_$_4584[153]+(n||_$_4584[1]));g[_$_4584[233]]()};g[_$_4584[234]]=function(a){if(-1===a[_$_4584[5]](_$_4584[44]))return console[_$_4584[61]](_$_4584[235]),!1;r[_$_4584[48]][_$_4584[236]](a)[_$_4584[238]](function(n){var l=n[_$_4584[45]](_$_4584[44]);n=r[_$_4584[48]][_$_4584[237]](l[1]);v[_$_4584[64]](x(l[0]),n[0],n[1],null,!0)})};g[_$_4584[239]]=function(a){a[_$_4584[245]][_$_4584[36]]({content:_$_4584[240],type:_$_4584[241],title:e(_$_4584[242]),
onclick:function(){var n=r[_$_4584[46]][_$_4584[243]]();n&&(n=n[_$_4584[45]](_$_4584[44])[1]);g[_$_4584[244]](r[_$_4584[46]],n)}});return a};g[_$_4584[244]]=function(a,n){g[_$_4584[240]][_$_4584[143]]=a;g[_$_4584[246]][_$_4584[244]]()};g[_$_4584[247]]=function(a,n,l,q,d,c){if(a===_$_4584[248]||a===_$_4584[249]||a===_$_4584[250])l[_$_4584[238]](function(f){if(f[_$_4584[251]]&&f[_$_4584[252]])v[_$_4584[64]](n,f[_$_4584[251]],f[_$_4584[252]],null,!0)});else if(a===_$_4584[253])v[_$_4584[64]](n,q,d);
else if(a===_$_4584[254]){if((_$_4584[1]+c)[_$_4584[141]](0,1)!==_$_4584[94])return v[_$_4584[64]](n,q,d,c)}else if(a===_$_4584[255])g[_$_4584[228]][_$_4584[64]](n,[l,q,d,c]);else if(a===_$_4584[67]){var k={};l[_$_4584[238]](function(f){if(f[_$_4584[56]]&&f[_$_4584[56]][_$_4584[43]])r[_$_4584[48]][_$_4584[236]](f[_$_4584[56]][_$_4584[43]])[_$_4584[238]](function(m){k[m]=!0})});l[_$_4584[238]](function(f){if(f[_$_4584[58]]&&f[_$_4584[58]][_$_4584[43]])r[_$_4584[48]][_$_4584[236]](f[_$_4584[58]][_$_4584[43]])[_$_4584[238]](function(m){k[m]=
!0})});l=r[_$_4584[48]][_$_4584[256]](Object[_$_4584[11]](k));g[_$_4584[234]][_$_4584[64]](n,l);a=r[_$_4584[48]][_$_4584[47]](l);g[_$_4584[228]][_$_4584[64]](n,a,l)}else if(a===_$_4584[257]){if(u[_$_4584[69]][_$_4584[64]](n),(l=n[_$_4584[15]][_$_4584[4]])&&l[_$_4584[12]])for(a=0;a<l[_$_4584[12]];a++)g[_$_4584[234]][_$_4584[64]](r[_$_4584[46]],l[a][_$_4584[43]])}else if(a===_$_4584[258]||a===_$_4584[259]){c=n[_$_4584[54]][_$_4584[260]]?!0:!1;n[_$_4584[54]][_$_4584[260]]=!0;if(a===_$_4584[258])u[_$_4584[73]][_$_4584[64]](n,
d,q);else u[_$_4584[70]][_$_4584[64]](n,l,q);n[_$_4584[54]][_$_4584[260]]=c}else if(a===_$_4584[261]){if(l[_$_4584[16]]==_$_4584[39]){q=[];for(a=0;a<l[_$_4584[52]][_$_4584[12]];a++)q[_$_4584[36]]({index:l[_$_4584[52]][a][_$_4584[57]],value:l[_$_4584[52]][a][_$_4584[56]]});n[_$_4584[39]](q)}}else if(a===_$_4584[262]&&l[_$_4584[16]]==_$_4584[39])n[_$_4584[39]](l[_$_4584[52]])};g[_$_4584[263]]=function(a){g[_$_4584[246]]=jSuites[_$_4584[246]](a,{title:_$_4584[264],closed:!0,width:_$_4584[265],height:_$_4584[266],
backdrop:!1})};g[_$_4584[267]]=function(a){g[_$_4584[240]][_$_4584[57]]=a[_$_4584[57]];g[_$_4584[240]][_$_4584[43]]=a[_$_4584[43]]||g[_$_4584[240]][_$_4584[143]][_$_4584[243]]();g[_$_4584[240]][_$_4584[16]]=a[_$_4584[16]]||_$_4584[268];g[_$_4584[240]][_$_4584[31]]=a[_$_4584[31]]||_$_4584[74];a[_$_4584[58]]?(g[_$_4584[240]][_$_4584[195]]=a[_$_4584[58]][0],g[_$_4584[240]][_$_4584[196]]=a[_$_4584[58]][1]):(g[_$_4584[240]][_$_4584[195]]=_$_4584[1],g[_$_4584[240]][_$_4584[196]]=_$_4584[1]);g[_$_4584[270]][_$_4584[29]][_$_4584[269]]=
_$_4584[271];g[_$_4584[272]][_$_4584[29]][_$_4584[269]]=_$_4584[273]};g[_$_4584[233]]=function(){g[_$_4584[270]][_$_4584[29]][_$_4584[269]]=_$_4584[273];g[_$_4584[272]][_$_4584[29]][_$_4584[269]]=_$_4584[271]};g[_$_4584[274]]=function(a){g[_$_4584[240]][_$_4584[143]][_$_4584[41]](a)};h=document[_$_4584[30]](_$_4584[275]);b[_$_4584[277]][_$_4584[276]](h);lemonade[_$_4584[278]](function(){var a=`<div @ready="self.createModal(this)">
                <div @ref="self.listContainer">
                    <div>
                        <div class="p6">{{self.message}}</div><br/>
                        <div><List @loop="self.data" /></div>
                    </div>
                    <p><input type="button" value="${e(_$_4584[242])}" onclick="self.openForm({ index: null })" class="jbutton dark" /></p>
                </div>
                <div @ref="self.settingsContainer" style="display: none;"><Settings @ref="self.settings" /></div>
             </div>`;return lemonade[_$_4584[145]](a,g,{Settings:E,List:z})},h);return g},w=function(){return!0};w[_$_4584[279]]=function(b,h){if(h=A[_$_4584[64]](b))console[_$_4584[61]](h);else b[_$_4584[280]]({validations:G})};w[_$_4584[281]]=function(b){null===r&&(r=this)};return w});
