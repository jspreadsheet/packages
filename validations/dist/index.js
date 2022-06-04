if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

var _$_662b=["translate","","status","scope","validations","indexOf","This extension is not included on the scope of this license","License required","version","This extension request Jspreadsheet Pro v9+","config","action","range","!","split","current",":","getTokensFromRange","helpers","splice","push","length","parent","bind","sort","forEach","oldValue","index","value","worksheets","object","keys","every","format","map","entries"," .conditional_formatting_","name","_"," {\n",";\n","join","\n}",
"jss_validations_","getElementById","style","createElement","id","appendChild","head","getElementsByTagName","innerHTML","getValidations","get","setValidations","set","resetValidations","reset","isArray","JSS: input should be an array","error","stringify","parse","call","setHistory","persistence","onvalidation","dispatch","build","updateAll","getWorksheetName","updateFormula","#REF!","updateWorksheetName","between","is not between","not between","less than","<","less than or equal to","<=","bigger than",
">","bigger than or equal to",">=","equal to","=","different to","!=","contains","not contains","begins with","ends with","is a valid email","valid email","is a valid url","valid url","is a valid date","valid date","before","on or before","after","on or after","different to","toUpperCase","replace","substr","create","instance","calendar","element","a number ","a text ","a date ","an element of the list: ","The content of this cell must be ","type","criteria"," ","list"," [",",","]"," and ","mask",
"locale","UTC","DateTimeFormat","2012","yyyy","12","mm","19","dd","operator","createType","number","Number","text","Text","date","Date","List","textLength","Text length","exist","Cell is empty","not exist","Cell is not empty","setData","children","el","all","classList","display","none","jss_object","add","header","dropdown","createOperator","createPicker","innerText","focus","picker","createColorPicker","color","close","The range is mandatory","The type is mandatory","The criteria is mandatory","className",
"allowBlank","includes","start","end","formatColor","formatBackgroundColor","background-color","bold","font-weight","italic","font-style","Cell range","Action","Warning message","Reject entry","Format style","Type","Operator","Color","Background color","Add a custom CSS className","Save","Back","records","data-tooltip","removeAttribute","jss_warning","remove","data-validation","getAttribute","v","getColumnNameFromCoords","setAttribute","reject","conditional_formatting_","init","updateDataFromSelection",
"message","All validations found for this selection","data","filter","No validation found for this selection","closeForm","toolbar","settings","i","Add new validation","getRange","open","items","modal","onevent","onafterchanges","onchangeproperty","onformulachain","x","y","oncreatecell","onbeforechange","onselection","getCoordsFromColumnName","getRangeFromTokens","getCoordsFromRange","onload","onrenameworksheet","onchangereferences","ignoreHistory","historyCascade","onundo","onredo","createModal",
"Validations","420px","612px","openForm","warning","listContainer","settingsContainer","block","removeValidation","div","append","tools","render","oninit","setPlugins","license","undefined","exports","function","amd"];
(function(p,g){typeof exports===_$_662b[30]&&typeof module!==_$_662b[259]?module[_$_662b[260]]=g():typeof define===_$_662b[261]&&define[_$_662b[262]]?define(g):p[_$_662b[4]]=g()})(this,function(){var p=null,g=jSuites[_$_662b[0]],E=function(){var a=_$_662b[1];8==this[_$_662b[2]]?this[_$_662b[3]]&&-1!=this[_$_662b[3]][_$_662b[5]](_$_662b[4])||(a=_$_662b[6]):a=_$_662b[7];if(!a){var e=p[_$_662b[8]]();if(!e||!e[_$_662b[8]]||9>parseInt(e[_$_662b[8]]))a=_$_662b[9]}return a},z={reject:2,warning:1,format:0},
F=function(a,e){a=this[_$_662b[10]][_$_662b[4]][a]&&this[_$_662b[10]][_$_662b[4]][a][_$_662b[11]]?this[_$_662b[10]][_$_662b[4]][a][_$_662b[11]]:0;e=this[_$_662b[10]][_$_662b[4]][e]&&this[_$_662b[10]][_$_662b[4]][e][_$_662b[11]]?this[_$_662b[10]][_$_662b[4]][e][_$_662b[11]]:0;return z[a]-z[e]},v=function(a,e,f){if(e&&e[_$_662b[12]]){var b;if(0<e[_$_662b[12]][_$_662b[5]](_$_662b[13])){e=e[_$_662b[12]][_$_662b[14]](_$_662b[13]);var c=e[1];var d=u(e[0])}else c=e[_$_662b[12]],d=p[_$_662b[15]];d[_$_662b[4]]&&
(e=-1===c[_$_662b[5]](_$_662b[16])?[c]:p[_$_662b[18]][_$_662b[17]](c),e[_$_662b[25]](function(h){d[_$_662b[4]][h]||(d[_$_662b[4]][h]=[]);if(0===a){if(b=d[_$_662b[4]][h][_$_662b[5]](f),0<=b)d[_$_662b[4]][h][_$_662b[19]](b,1)}else d[_$_662b[4]][h][_$_662b[20]](f);if(1<d[_$_662b[4]][h][_$_662b[21]])d[_$_662b[4]][h][_$_662b[24]](F[_$_662b[23]](d[_$_662b[22]]))}))}},A=function(a){for(var e=0;e<a[_$_662b[29]][_$_662b[21]];e++)a[_$_662b[29]][e][_$_662b[4]]={};if(a=a[_$_662b[10]][_$_662b[4]])for(e=0;e<a[_$_662b[21]];e++)v(1,
a[e],e)},G=function(a){for(var e=0;e<a[_$_662b[29]][_$_662b[21]];e++)a[_$_662b[29]][e][_$_662b[4]]={}},t=function(){var a=function(c){var d=c[_$_662b[10]][_$_662b[4]];if(d&&d[_$_662b[21]]){for(var h=_$_662b[1],l=0;l<d[_$_662b[21]];l++)if(d[l]&&d[l][_$_662b[33]]){var k=Object[_$_662b[35]](d[l][_$_662b[33]])[_$_662b[34]](function([n,m]){return`\t${n}: ${m} !important\n`});h+=_$_662b[36]+c[_$_662b[37]]+_$_662b[38]+l+_$_662b[39]+k[_$_662b[41]](_$_662b[40])+_$_662b[42]}d=document[_$_662b[44]](_$_662b[43]+
c[_$_662b[37]]);d||(d=document[_$_662b[46]](_$_662b[45]),d[_$_662b[47]]=_$_662b[43]+c[_$_662b[37]],document[_$_662b[50]](_$_662b[49])[0][_$_662b[48]](d));d[_$_662b[51]]=h}},e=function(c){this[_$_662b[10]][_$_662b[4]]||(this[_$_662b[10]][_$_662b[4]]=[]);var d=this[_$_662b[10]][_$_662b[4]][_$_662b[21]];this[_$_662b[10]][_$_662b[4]][_$_662b[20]](c);return d},f=function(c,d){this[_$_662b[10]][_$_662b[4]][c]=d},b=function(c){c[_$_662b[52]]=b[_$_662b[53]];c[_$_662b[54]]=b[_$_662b[55]];c[_$_662b[56]]=b[_$_662b[57]]};
b[_$_662b[55]]=function(c){Array[_$_662b[58]](c)||typeof c!==_$_662b[30]||(c=[c]);if(Array[_$_662b[58]](c)){for(var d,h,l=[],k=0;k<c[_$_662b[21]];k++)h=null,0<=c[k][_$_662b[27]]?(d=c[k][_$_662b[27]],this[_$_662b[22]][_$_662b[10]][_$_662b[4]]&&this[_$_662b[22]][_$_662b[10]][_$_662b[4]][d]&&(h=JSON[_$_662b[62]](JSON[_$_662b[61]](this[_$_662b[22]][_$_662b[10]][_$_662b[4]][d]))),f[_$_662b[63]](this[_$_662b[22]],d,c[k][_$_662b[28]])):d=e[_$_662b[63]](this[_$_662b[22]],c[k][_$_662b[28]]),l[_$_662b[20]]({index:d,
oldValue:h,value:c[k][_$_662b[28]]});this[_$_662b[22]][_$_662b[64]]({worksheet:this,action:_$_662b[54],records:l});this[_$_662b[65]](_$_662b[54],{data:l});a(this[_$_662b[22]]);for(c=0;c<l[_$_662b[21]];c++)l[c][_$_662b[26]]&&v(0,l[c][_$_662b[26]],l[c][_$_662b[27]]),l[c][_$_662b[28]]&&v(1,l[c][_$_662b[28]],l[c][_$_662b[27]]);this[_$_662b[22]][_$_662b[67]](_$_662b[66],this,l)}else console[_$_662b[60]](_$_662b[59])};b[_$_662b[53]]=function(c){var d=this[_$_662b[22]][_$_662b[10]][_$_662b[4]];return c?
d[c]:d};b[_$_662b[57]]=function(c){Array[_$_662b[58]](c)||(c=[c]);c=c[_$_662b[34]](function(d){return{index:d,value:null}});b[_$_662b[55]][_$_662b[63]](this,c)};b[_$_662b[68]]=function(){a(this);A(this)};b[_$_662b[69]]=function(c,d){var h=this[_$_662b[22]][_$_662b[10]][_$_662b[4]],l=[];if(h&&h[_$_662b[21]]){for(var k=0;k<h[_$_662b[21]];k++){var n={index:k,value:JSON[_$_662b[62]](JSON[_$_662b[61]](h[k]))};var m=this[_$_662b[71]](n[_$_662b[28]][_$_662b[12]],c,d,this[_$_662b[70]]());m!==n[_$_662b[28]][_$_662b[12]]&&
(0<=m[_$_662b[5]](_$_662b[72])?n[_$_662b[28]]=null:n[_$_662b[28]][_$_662b[12]]=m,l[_$_662b[20]](n))}b[_$_662b[55]][_$_662b[63]](this,l)}};b[_$_662b[73]]=function(c,d){var h=this[_$_662b[22]][_$_662b[10]][_$_662b[4]],l=[];if(h&&h[_$_662b[21]]){for(var k=0;k<h[_$_662b[21]];k++){var n=p[_$_662b[18]][_$_662b[73]](h[k][_$_662b[12]],c,d);if(n!==h[k][_$_662b[12]]){var m={index:k,value:h[k]};m[_$_662b[28]][_$_662b[12]]=n;l[_$_662b[20]](m)}}b[_$_662b[55]][_$_662b[63]](this,l)}};return b}(),B={number:[{text:g(_$_662b[74]),
value:_$_662b[74]},{text:g(_$_662b[75]),value:_$_662b[76]},{text:g(_$_662b[77]),value:_$_662b[78]},{text:g(_$_662b[79]),value:_$_662b[80]},{text:g(_$_662b[81]),value:_$_662b[82]},{text:g(_$_662b[83]),value:_$_662b[84]},{text:g(_$_662b[85]),value:_$_662b[86]},{text:g(_$_662b[87]),value:_$_662b[88]}],text:[{text:g(_$_662b[89]),value:_$_662b[89]},{text:g(_$_662b[90]),value:_$_662b[90]},{text:g(_$_662b[91]),value:_$_662b[91]},{text:g(_$_662b[92]),value:_$_662b[92]},{text:g(_$_662b[85]),value:_$_662b[86]},
{text:g(_$_662b[93]),value:_$_662b[94]},{text:g(_$_662b[95]),value:_$_662b[96]}],date:[{text:g(_$_662b[97]),value:_$_662b[98]},{text:g(_$_662b[85]),value:_$_662b[86]},{text:g(_$_662b[99]),value:_$_662b[78]},{text:g(_$_662b[100]),value:_$_662b[80]},{text:g(_$_662b[101]),value:_$_662b[82]},{text:g(_$_662b[102]),value:_$_662b[84]},{text:g(_$_662b[74]),value:_$_662b[74]},{text:g(_$_662b[76]),value:_$_662b[76]}],textLength:[{text:g(_$_662b[74]),value:_$_662b[74]},{text:g(_$_662b[75]),value:_$_662b[76]},
{text:g(_$_662b[77]),value:_$_662b[78]},{text:g(_$_662b[79]),value:_$_662b[80]},{text:g(_$_662b[81]),value:_$_662b[82]},{text:g(_$_662b[83]),value:_$_662b[84]},{text:g(_$_662b[85]),value:_$_662b[86]},{text:g(_$_662b[103]),value:_$_662b[88]}]},u=function(a,e){Array[_$_662b[58]](a)&&(a=a[0]);a=a[_$_662b[105]](new RegExp(/'/g),_$_662b[1])[_$_662b[104]]();if(void 0===e)return window[a]?window[a]:null;window[a]=e},H=function(){var a=this;a[_$_662b[107]]=function(e){a[_$_662b[108]]=jSuites[_$_662b[109]](e,
this)};return lemonade[_$_662b[110]]('<input class="jss_object" @ready="self.create(this)" style="width: 100%;" />',a)},I={number:_$_662b[111],text:_$_662b[112],date:_$_662b[113],list:_$_662b[114]},J=function(a){var e=_$_662b[115]+I[a[_$_662b[116]]];a[_$_662b[117]]&&(e+=_$_662b[118]+a[_$_662b[117]]);a[_$_662b[116]]===_$_662b[119]?e+=_$_662b[120]+a[_$_662b[28]][0][_$_662b[41]](_$_662b[121])+_$_662b[122]:(e+=_$_662b[118]+a[_$_662b[28]][0],1<a[_$_662b[28]][_$_662b[21]]&&(e+=_$_662b[123]+a[_$_662b[28]][1]));
return e},C=function(){return lemonade[_$_662b[110]]('<div>\n                <div class="row middle p8">\n                    <div class="column f1 cursor" onclick="self.parent.openForm(self)">\n                        <div class="p2"><b>{{self.type}}</b> <span>({{self.range}})</span></div>\n                        <div class="p2">{{self.criteria}}: {{self.value}}</div>\n                    </div><div>\n                        <div><i class=\'material-icons cursor\' onclick="self.parent.removeValidation(self.index)">delete</i></div>\n                    </div>\n                </div>\n            </div>\n        ',
this)},K=function(){var a=this,e=null;a[_$_662b[134]]=_$_662b[1];a[_$_662b[135]]=function(b){jSuites[_$_662b[159]](b,{data:[{value:_$_662b[136],text:g(_$_662b[137])},{value:_$_662b[138],text:g(_$_662b[139])},{value:_$_662b[140],text:g(_$_662b[141])},{value:_$_662b[119],text:g(_$_662b[142])},{value:_$_662b[143],text:g(_$_662b[144])},{value:_$_662b[145],text:g(_$_662b[146])},{value:_$_662b[147],text:g(_$_662b[148])}],onchange:function(c,d,h,l){e[_$_662b[149]](B[l]||[]);a[_$_662b[134]]=_$_662b[1];a[_$_662b[117]]=
_$_662b[1];for(c=0;c<a[_$_662b[151]][_$_662b[150]][0][_$_662b[150]][_$_662b[21]];c++)a[_$_662b[151]][_$_662b[150]][0][_$_662b[150]][c][_$_662b[153]][_$_662b[89]](_$_662b[152])||a[_$_662b[151]][_$_662b[150]][0][_$_662b[150]][c][_$_662b[153]][_$_662b[89]](l)?a[_$_662b[151]][_$_662b[150]][0][_$_662b[150]][c][_$_662b[45]][_$_662b[154]]=_$_662b[1]:a[_$_662b[151]][_$_662b[150]][0][_$_662b[150]][c][_$_662b[45]][_$_662b[154]]=_$_662b[155]},onload:function(c,d){d[_$_662b[158]][_$_662b[153]][_$_662b[157]](_$_662b[156])}})};
a[_$_662b[160]]=function(b){e=jSuites[_$_662b[159]](b,{data:B[_$_662b[136]],autocomplete:!0,onchange:function(c,d,h,l){a[_$_662b[134]]=l},onload:function(c,d){d[_$_662b[158]][_$_662b[153]][_$_662b[157]](_$_662b[156])}})};a[_$_662b[161]]=function(b){p[_$_662b[164]](b,function(){-1==b[_$_662b[162]][_$_662b[5]](_$_662b[13])?b[_$_662b[162]]=p[_$_662b[15]][_$_662b[70]]()+_$_662b[13]+b[_$_662b[162]]:b[_$_662b[162]]=b[_$_662b[162]];a[_$_662b[12]]=b[_$_662b[162]];jSuites[_$_662b[163]](b)})};a[_$_662b[165]]=
function(b){jSuites[_$_662b[166]](b)};a[_$_662b[167]]=function(b){b&&(a[_$_662b[12]]?a[_$_662b[116]]?a[_$_662b[117]]?(-1===a[_$_662b[12]][_$_662b[5]](_$_662b[13])&&(a[_$_662b[12]]=a[_$_662b[108]][_$_662b[70]]()+_$_662b[13]+a[_$_662b[12]]),b={range:a[_$_662b[12]],action:a[_$_662b[11]],type:a[_$_662b[116]],criteria:a[_$_662b[117]],text:a[_$_662b[138]],className:a[_$_662b[171]],allowBlank:a[_$_662b[172]]},b[_$_662b[117]][_$_662b[173]](_$_662b[74])?b[_$_662b[28]]=[a[_$_662b[174]],a[_$_662b[175]]]:b[_$_662b[28]]=
[a[_$_662b[174]]],b[_$_662b[11]]===_$_662b[33]&&(b[_$_662b[33]]={},a[_$_662b[176]]&&(b[_$_662b[33]][_$_662b[166]]=a[_$_662b[176]]),a[_$_662b[177]]&&(b[_$_662b[33]][_$_662b[178]]=a[_$_662b[177]]),a[_$_662b[179]]&&(b[_$_662b[33]][_$_662b[180]]=_$_662b[179]),a[_$_662b[181]]&&(b[_$_662b[33]][_$_662b[182]]=_$_662b[181])),b={value:b},null!==a[_$_662b[27]]&&(b[_$_662b[27]]=a[_$_662b[27]]),a[_$_662b[108]][_$_662b[54]](b)):alert(g(_$_662b[170])):alert(g(_$_662b[169])):alert(g(_$_662b[168])))};var f=`<div>
            <div>
                <!-- Validation type -->
                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${g(_$_662b[183])}</label>
                            <div @ready="self.createPicker(this)" @bind="self.range"></div>
                        </div>
                    </div>
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${g(_$_662b[184])}</label>
                            <select style="padding: 8px;" @bind="self.action">
                                <option value="warning">${g(_$_662b[185])}</option>
                                <option value="reject">${g(_$_662b[186])}</option>
                                <option value="format">${g(_$_662b[187])}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="all">
                    <div class="row" style="{{self.action === 'format' && 'display: none;'}}">
                        <div class="column f1">
                            <div class="form-group">
                                <label class="label">${g(_$_662b[185])}</label>
                                <input type="text" @bind="self.text" class="jss_object w100">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${g(_$_662b[188])}</label>
                            <div @ready="self.createType(this)" @bind="self.type"></div>
                        </div>
                    </div><div class="column f1">
                        <div class="form-group">
                            <label class="label">${g(_$_662b[189])}</label>
                            <div @ready="self.createOperator(this)" @bind="self.criteria"></div>
                        </div>
                    </div>
                </div>

                <!-- Number input options -->
                <div class="row number textLength middle" style="display: none">
                    <div class="column f1">
                        <div class="form-group">
                            <input type="text" @bind="self.start" class="jss_object" placeholder="5">
                        </div>
                    </div>
                    <div class="column f1" style="{{!self.operator.includes('between') && 'display: none;'}}">
                      <div class="form-group">
                          <input type="text" @bind="self.end" class="jss_object" placeholder="10">
                      </div>
                    </div>
                </div>

                <!-- Text input options -->
                <div class="row number date" style="display: none;">
                    <div class="column f1" style="{{! self.operator.includes('valid') && 'display: none;'}}">
                        <div class="form-group">
                            <input type="text" @bind="self.start" placeholder="Value..." class="jss_object">
                        </div>
                    </div>
                </div>

                <!-- Date input options -->
                <div class="row middle date" style="display: none;">
                    <div class="column f1" style="{{self.operator.includes('valid') && 'display: none;'}}">
                        <div class="form-group">
                            <Calendar @bind="self.start" />
                        </div>
                    </div>
                    <div class="column f1" style="{{! self.operator.includes('between') && 'display: none;'}}">
                        <div class="form-group">
                            <Calendar @bind="self.end" />
                        </div>
                    </div>
                </div>

                <!-- List input options -->
                <div class="row list" style="display: none;">
                    <div class="column f1">
                        <div class="form-group">
                            <textarea style="resize: vertical;" rows="4" @bind="self.start" placeholder="A, B, C, D..." class="jss_object"></textarea>
                        </div>
                    </div>
                </div>

                <div class="row all" style="{{self.action === 'reject' && 'display: none;'}}">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="jswitch" style="margin-bottom: 6px;">
                            <input name="bold" type="checkbox" @bind="self.allowBlank"> <i></i> <span class="f1 ml1">Allow blank</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- FORMAT STYLING OPTIONS -->
                <div class="all">
                    <div class="row" style="{{self.action !== 'format' && 'display: none;'}}">
                        <div class="column f1" style="border-top: 1px solid #eee;margin-top:20px">
                            <div class="form-group">
                                <h4 style="color: #2c2d2e; margin: 10px; margin-left: 5px;"><b>Formatting Options</b></h4>

                                <div class="row">
                                    <div class="column f1">
                                        <div class="form-group">
                                            <label class="label">${g(_$_662b[190])}</label><br>
                                            <input @ready="self.createColorPicker(this)" @bind="self.formatColor" class="jss_object w100">
                                        </div>
                                    </div>
                                    <div class="column f1">
                                        <div class="form-group">
                                            <label class="label">${g(_$_662b[191])}</label><br>
                                            <input @ready="self.createColorPicker(this)" @bind="self.formatBackgroundColor" class="jss_object w100">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column f1">
                                        <div class="form-group">
                                            <input type="text" placeholder="${g(_$_662b[192])}" @bind="self.className" class="jss_object">
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
                </div>

                <div class='row all'>
                    <div class='column f1'>
                        <div class='form-group center'>
                            <button type="button" class="jbutton dark w100" onclick="self.close(true)">${g(_$_662b[193])}</button>
                        </div>
                    </div>
                </div>
            </div>
            <p onclick="self.parent.closeForm()" class="cursor">${g(_$_662b[194])}</p>
        </div>`;return lemonade[_$_662b[110]](f,a,{Calendar:H,List:C})},L=function(a,e){if(this[_$_662b[195]][e]&&this[_$_662b[195]][e][a]&&this[_$_662b[195]][e][a][_$_662b[110]]){this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[197]](_$_662b[196]);this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[153]][_$_662b[199]](_$_662b[198]);var f=this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[201]](_$_662b[200]);if(f){f=f[_$_662b[14]](_$_662b[121]);for(var b=0;b<f[_$_662b[21]];b++)this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[153]][_$_662b[199]](f[b])}this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[197]](_$_662b[200])}},
r=function(a,e,f,b){if(this[_$_662b[22]][_$_662b[10]][_$_662b[4]]&&this[_$_662b[195]][e]&&this[_$_662b[195]][e][a]&&this[_$_662b[195]][e][a][_$_662b[110]]){L[_$_662b[63]](this,a,e);if(null==f||void 0==f)f=this[_$_662b[195]][e][a][_$_662b[202]];var c=this,d=p[_$_662b[18]][_$_662b[203]](a,e);if(this[_$_662b[195]][e][a][_$_662b[110]]&&this[_$_662b[4]]&&void 0!==this[_$_662b[4]][d]){d=this[_$_662b[4]][d];for(var h=0;h<d[_$_662b[21]];h++){var l=d[h],k=this[_$_662b[22]][_$_662b[10]][_$_662b[4]][l];if(!k)break;
if(!jSuites[_$_662b[4]](f,k)){if(k[_$_662b[11]]!==_$_662b[33]){f=k[_$_662b[138]]||J(k);this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[204]](_$_662b[196],f);this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[153]][_$_662b[157]](_$_662b[198]);if(k[_$_662b[11]]===_$_662b[205]&&!b)return setTimeout(function(){c[_$_662b[195]][e][a][_$_662b[110]][_$_662b[197]](_$_662b[196]);c[_$_662b[195]][e][a][_$_662b[110]][_$_662b[153]][_$_662b[199]](_$_662b[198])},2500),!1;break}}else if(k[_$_662b[11]]===_$_662b[33]){var n=
[];k[_$_662b[171]]&&(n=k[_$_662b[171]][_$_662b[14]](_$_662b[121]));n[_$_662b[20]](_$_662b[206]+this[_$_662b[22]][_$_662b[37]]+_$_662b[38]+l);for(k=0;k<n[_$_662b[21]];k++)this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[153]][_$_662b[157]](n[k]);this[_$_662b[195]][e][a][_$_662b[110]][_$_662b[204]](_$_662b[200],n)}}}}},M=function(a,e){var f={};f[_$_662b[207]]=function(b){t(b)};f[_$_662b[208]]=function(b,c){if(b[_$_662b[21]]&&this[_$_662b[22]][_$_662b[10]][_$_662b[4]]){var d=b[0],h=b[1],l=b[2];b=b[3];
var k=[],n=null;if(n=this[_$_662b[4]])for(;h<=b;h++)for(var m=d;m<=l;m++){var q=this[_$_662b[18]][_$_662b[203]](m,h);if(n[q])for(var w=0;w<n[q][_$_662b[21]];w++)k[n[q][w]]=!0}d=this[_$_662b[22]][_$_662b[10]][_$_662b[4]][_$_662b[34]](function(D,x){return Object.assign({},D,{index:x})});f[_$_662b[209]]=g(_$_662b[210])+_$_662b[118]+(c||_$_662b[1]);f[_$_662b[211]]=d[_$_662b[212]](function(D,x){return k[x]})}else f[_$_662b[211]]=[];f[_$_662b[211]][_$_662b[21]]||(f[_$_662b[209]]=g(_$_662b[213])+_$_662b[118]+
(c||_$_662b[1]));f[_$_662b[214]]()};f[_$_662b[215]]=function(b){b[_$_662b[221]][_$_662b[20]]({content:_$_662b[216],type:_$_662b[217],title:g(_$_662b[218]),onclick:function(){var c=p[_$_662b[15]][_$_662b[219]]();c&&(c=c[_$_662b[14]](_$_662b[13])[1]);f[_$_662b[220]](p[_$_662b[15]],c)}});return b};f[_$_662b[220]]=function(b,c){f[_$_662b[216]][_$_662b[108]]=b;f[_$_662b[222]][_$_662b[220]]()};f[_$_662b[223]]=function(b,c,d,h,l,k){if(b===_$_662b[224]||b===_$_662b[225]||b===_$_662b[226])d[_$_662b[25]](function(m){if(m[_$_662b[227]]&&
m[_$_662b[228]])r[_$_662b[63]](c,m[_$_662b[227]],m[_$_662b[228]],null,!0)});else if(b===_$_662b[229])r[_$_662b[63]](c,h,l);else if(b===_$_662b[230]){if((_$_662b[1]+k)[_$_662b[106]](0,1)!==_$_662b[86])return r[_$_662b[63]](c,h,l,k)}else if(b===_$_662b[231])f[_$_662b[208]][_$_662b[63]](c,[d,h,l,k]);else if(b===_$_662b[66]){var n=null;d[_$_662b[25]](function(m){if(m[_$_662b[26]]&&m[_$_662b[26]][_$_662b[12]])p[_$_662b[18]][_$_662b[17]](m[_$_662b[26]][_$_662b[12]])[_$_662b[25]](function(q){n||(n={});n[q]=
!0})});d[_$_662b[25]](function(m){if(m[_$_662b[28]]&&m[_$_662b[28]][_$_662b[12]])p[_$_662b[18]][_$_662b[17]](m[_$_662b[28]][_$_662b[12]])[_$_662b[25]](function(q){n||(n={});n[q]=!0})});n&&(d=Object[_$_662b[31]](n),d[_$_662b[25]](function(m){var q=m[_$_662b[14]](_$_662b[13]);m=p[_$_662b[18]][_$_662b[232]](q[1]);r[_$_662b[63]](u(q[0]),m[0],m[1],null,!0)}),d=p[_$_662b[18]][_$_662b[233]](Object[_$_662b[31]](n)),b=p[_$_662b[18]][_$_662b[234]](d),f[_$_662b[208]][_$_662b[63]](c,b,d))}else if(b===_$_662b[235])t[_$_662b[68]][_$_662b[63]](c),
n=null,(d=c[_$_662b[10]][_$_662b[4]])&&d[_$_662b[21]]&&(d[_$_662b[25]](function(m){if(m[_$_662b[12]])p[_$_662b[18]][_$_662b[17]](m[_$_662b[12]])[_$_662b[25]](function(q){n||(n={});n[q]=!0})}),n&&(d=Object[_$_662b[31]](n),d[_$_662b[25]](function(m){var q=m[_$_662b[14]](_$_662b[13]);m=p[_$_662b[18]][_$_662b[232]](q[1]);r[_$_662b[63]](u(q[0]),m[0],m[1],null,!0)})));else if(b===_$_662b[236]||b===_$_662b[237]){if(!c[_$_662b[22]][_$_662b[238]]){c[_$_662b[22]][_$_662b[239]]=!0;if(b===_$_662b[236])t[_$_662b[73]][_$_662b[63]](c,
l,h);else G(c[_$_662b[22]]),t[_$_662b[69]][_$_662b[63]](c,d,h),A(c[_$_662b[22]]);c[_$_662b[22]][_$_662b[239]]=!1}}else if(b===_$_662b[240]){if(d[_$_662b[11]]==_$_662b[54]){b=[];for(h=0;h<d[_$_662b[195]][_$_662b[21]];h++)b[_$_662b[20]]({index:d[_$_662b[195]][h][_$_662b[27]],value:d[_$_662b[195]][h][_$_662b[26]]});c[_$_662b[54]](b)}}else if(b===_$_662b[241]&&d[_$_662b[11]]==_$_662b[54])c[_$_662b[54]](d[_$_662b[195]])};f[_$_662b[242]]=function(b){f[_$_662b[222]]=jSuites[_$_662b[222]](b,{title:_$_662b[243],
closed:!0,width:_$_662b[244],height:_$_662b[245],backdrop:!1})};f[_$_662b[246]]=function(b){f[_$_662b[216]][_$_662b[27]]=b[_$_662b[27]];f[_$_662b[216]][_$_662b[12]]=b[_$_662b[12]]||f[_$_662b[216]][_$_662b[108]][_$_662b[219]]();f[_$_662b[216]][_$_662b[11]]=b[_$_662b[11]]||_$_662b[247];f[_$_662b[216]][_$_662b[116]]=b[_$_662b[116]]||_$_662b[136];f[_$_662b[216]][_$_662b[117]]=b[_$_662b[117]]||_$_662b[74];b[_$_662b[28]]?(f[_$_662b[216]][_$_662b[174]]=b[_$_662b[28]][0],f[_$_662b[216]][_$_662b[175]]=b[_$_662b[28]][1]):
(f[_$_662b[216]][_$_662b[174]]=_$_662b[1],f[_$_662b[216]][_$_662b[175]]=_$_662b[1]);f[_$_662b[176]]=_$_662b[1];f[_$_662b[177]]=_$_662b[1];f[_$_662b[179]]=_$_662b[1];f[_$_662b[181]]=_$_662b[1];f[_$_662b[171]]=_$_662b[1];f[_$_662b[248]][_$_662b[45]][_$_662b[154]]=_$_662b[155];f[_$_662b[249]][_$_662b[45]][_$_662b[154]]=_$_662b[250]};f[_$_662b[214]]=function(){f[_$_662b[248]][_$_662b[45]][_$_662b[154]]=_$_662b[250];f[_$_662b[249]][_$_662b[45]][_$_662b[154]]=_$_662b[155]};f[_$_662b[251]]=function(b){f[_$_662b[216]][_$_662b[108]][_$_662b[56]](b)};
e=document[_$_662b[46]](_$_662b[252]);a[_$_662b[254]][_$_662b[253]](e);lemonade[_$_662b[255]](function(){var b=`<div @ready="self.createModal(this)">
                <div @ref="self.listContainer">
                    <div>
                        <div class="p6">{{self.message}}</div><br/>
                        <div><List @loop="self.data" /></div>
                    </div>
                    <p><input type="button" value="${g(_$_662b[218])}" onclick="self.openForm({ index: null })" class="jbutton dark" /></p>
                </div>
                <div @ref="self.settingsContainer" style="display: none;"><Settings @ref="self.settings" /></div>
             </div>`;return lemonade[_$_662b[110]](b,f,{Settings:K,List:C})},e);return f},y=function(){return!0};y[_$_662b[256]]=function(a,e){if(e=E[_$_662b[63]](a))console[_$_662b[60]](e);else a[_$_662b[257]]({validations:M})};y[_$_662b[258]]=function(a){null===p&&(p=this)};return y});
