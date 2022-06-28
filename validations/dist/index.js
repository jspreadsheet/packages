if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(h,d){return Object.prototype.hasOwnProperty.call(h,d)};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(h,d,l){if(h==Array.prototype||h==Object.prototype)return h;h[d]=l.value;return h};$jscomp.getGlobal=function(h){h=["object"==typeof globalThis&&globalThis,h,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var d=0;d<h.length;++d){var l=h[d];if(l&&l.Math==Math)return l}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(h,d){var l=$jscomp.propertyToPolyfillSymbol[d];if(null==l)return h[d];l=h[l];return void 0!==l?l:h[d]};
$jscomp.polyfill=function(h,d,l,m){d&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(h,d,l,m):$jscomp.polyfillUnisolated(h,d,l,m))};$jscomp.polyfillUnisolated=function(h,d,l,m){l=$jscomp.global;h=h.split(".");for(m=0;m<h.length-1;m++){var t=h[m];if(!(t in l))return;l=l[t]}h=h[h.length-1];m=l[h];d=d(m);d!=m&&null!=d&&$jscomp.defineProperty(l,h,{configurable:!0,writable:!0,value:d})};
$jscomp.polyfillIsolated=function(h,d,l,m){var t=h.split(".");h=1===t.length;m=t[0];m=!h&&m in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var v=0;v<t.length-1;v++){var x=t[v];if(!(x in m))return;m=m[x]}t=t[t.length-1];l=$jscomp.IS_SYMBOL_NATIVE&&"es6"===l?m[t]:null;d=d(l);null!=d&&(h?$jscomp.defineProperty($jscomp.polyfills,t,{configurable:!0,writable:!0,value:d}):d!==l&&(void 0===$jscomp.propertyToPolyfillSymbol[t]&&(l=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[t]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(t):$jscomp.POLYFILL_PREFIX+l+"$"+t),$jscomp.defineProperty(m,$jscomp.propertyToPolyfillSymbol[t],{configurable:!0,writable:!0,value:d})))};$jscomp.polyfill("Object.entries",function(h){return h?h:function(d){var l=[],m;for(m in d)$jscomp.owns(d,m)&&l.push([m,d[m]]);return l}},"es8","es3");
$jscomp.polyfill("Array.prototype.includes",function(h){return h?h:function(d,l){var m=this;m instanceof String&&(m=String(m));var t=m.length;l=l||0;for(0>l&&(l=Math.max(l+t,0));l<t;l++){var v=m[l];if(v===d||Object.is(v,d))return!0}return!1}},"es7","es3");
var _$_f69c=["","validations","This extension is not included on the scope of this license","License required","This extension request Jspreadsheet Pro v9+","!",":","object"," .conditional_formatting_","_"," {\n",";\n","\n}","jss_validations_","style","head","get","set","JSS: input should be an array","setValidations","onvalidation","#REF!","between","is not between","not between","less than","<","less than or equal to","<=","bigger than",">","bigger than or equal to",">=","equal to","=","different to",
"!=","contains","not contains","begins with","ends with","is a valid email","valid email","is a valid url","valid url","is a valid date","valid date","before","on or before","after","on or after","a number ","a text ","a date ","an element of the list: ","The content of this cell must be "," ","list","string",","," [","]"," and ","2012","yyyy","12","mm","19","dd","Value is included in the options","number","Number","text","Text","date","Date","List","textLength","Text length","exist","Cell is empty",
"not exist","Cell is not empty","all","none","jss_object","List of valid values","The range is mandatory","The type is mandatory","The criteria is mandatory","format","background-color","font-weight","bold","font-style","italic","Cell range","Action","Warning message","Reject entry","Format style","Type","Operator","Color","Background color","Add a custom CSS className","Save","Back","data-tooltip","jss_warning","data-validation","reject","conditional_formatting_","All validations found for this selection",
"No validation found for this selection","settings","i","Add new validation","onafterchanges","onchangeproperty","onformulachain","oncreatecell","onbeforechange","onselection","onload","onrenameworksheet","onchangereferences","onundo","onredo","Validations","420px","612px","warning","block","div","undefined","function"];
(function(h,d){typeof exports===_$_f69c[7]&&typeof module!==_$_f69c[135]?module.exports=d():typeof define===_$_f69c[136]&&define.amd?define(d):h.validations=d()})(this,function(){var h=null,d=jSuites.translate,l={reject:2,warning:1,format:0},m=function(a,e){a=this.config.validations[a]&&this.config.validations[a].action?this.config.validations[a].action:0;e=this.config.validations[e]&&this.config.validations[e].action?this.config.validations[e].action:0;return l[a]-l[e]},t=function(a,e,c){if(e&&e.range){var b;
if(0<e.range.indexOf(_$_f69c[5])){e=e.range.split(_$_f69c[5]);var g=e[1];var f=z(e[0])}else g=e.range,f=h.current;f.validations&&(e=-1===g.indexOf(_$_f69c[6])?[g]:h.helpers.getTokensFromRange(g),e.forEach(function(k){f.validations[k]||(f.validations[k]=[]);0===a?(b=f.validations[k].indexOf(c),0<=b&&f.validations[k].splice(b,1)):f.validations[k].push(c);1<f.validations[k].length&&f.validations[k].sort(m.bind(f.parent))}))}},v=function(a){for(var e=0;e<a.worksheets.length;e++)a.worksheets[e].validations=
{};if(a=a.config.validations)for(e=0;e<a.length;e++)t(1,a[e],e)},x=function(a){for(var e=0;e<a.worksheets.length;e++)a.worksheets[e].validations={}},y=function(){var a=function(c){var b=c.config.validations;if(b&&b.length){for(var g=_$_f69c[0],f=0;f<b.length;f++)if(b[f]&&b[f].format){var k=Object.entries(b[f].format).map(function([q,n]){return`\t${q}: ${n} !important\n`});g+=_$_f69c[8]+c.name+_$_f69c[9]+f+_$_f69c[10]+k.join(_$_f69c[11])+_$_f69c[12]}b=document.getElementById(_$_f69c[13]+c.name);b||
(b=document.createElement(_$_f69c[14]),b.id=_$_f69c[13]+c.name,document.getElementsByTagName(_$_f69c[15])[0].appendChild(b));b.innerHTML=g}},e=function(c){c.getValidations=e[_$_f69c[16]];c.setValidations=e[_$_f69c[17]];c.resetValidations=e.reset};e[_$_f69c[17]]=function(c){Array.isArray(c)||typeof c!==_$_f69c[7]||(c=[c]);if(Array.isArray(c)){for(var b,g,f=[],k=0;k<c.length;k++){g=null;if(0<=c[k].index)b=c[k].index,this.parent.config.validations&&this.parent.config.validations[b]&&(g=JSON.parse(JSON.stringify(this.parent.config.validations[b]))),
this.parent.config.validations[b]=c[k].value;else{b=c[k].value;this.parent.config.validations||(this.parent.config.validations=[]);var q=this.parent.config.validations.length;this.parent.config.validations.push(b);b=q}f.push({index:b,oldValue:g,value:c[k].value})}this.parent.setHistory({worksheet:this,action:_$_f69c[19],records:f});this.persistence(_$_f69c[19],{data:f});a(this.parent);for(c=0;c<f.length;c++)f[c].oldValue&&t(0,f[c].oldValue,f[c].index),f[c].value&&t(1,f[c].value,f[c].index);this.parent.dispatch(_$_f69c[20],
this,f)}else console.error(_$_f69c[18])};e[_$_f69c[16]]=function(c){var b=this.parent.config.validations;return c?b[c]:b};e.reset=function(c){Array.isArray(c)||(c=[c]);c=c.map(function(b){return{index:b,value:null}});e[_$_f69c[17]].call(this,c)};e.build=function(){a(this);v(this)};e.updateAll=function(c,b){var g=this.parent.config.validations,f=[];if(g&&g.length){for(var k=0;k<g.length;k++){var q={index:k,value:JSON.parse(JSON.stringify(g[k]))};var n=this.updateFormula(q.value.range,c,b,this.getWorksheetName());
n!==q.value.range&&(0<=n.indexOf(_$_f69c[21])?q.value=null:q.value.range=n,f.push(q))}f.length&&e[_$_f69c[17]].call(this,f)}};e.updateWorksheetName=function(c,b){var g=this.parent.config.validations,f=[];if(g&&g.length){for(var k=0;k<g.length;k++){var q=h.helpers.updateWorksheetName(g[k].range,c,b);if(q!==g[k].range){var n={index:k,value:g[k]};n.value.range=q;f.push(n)}}f.length&&e[_$_f69c[17]].call(this,f)}};return e}(),A={number:[{text:d(_$_f69c[22]),value:_$_f69c[22]},{text:d(_$_f69c[23]),value:_$_f69c[24]},
{text:d(_$_f69c[25]),value:_$_f69c[26]},{text:d(_$_f69c[27]),value:_$_f69c[28]},{text:d(_$_f69c[29]),value:_$_f69c[30]},{text:d(_$_f69c[31]),value:_$_f69c[32]},{text:d(_$_f69c[33]),value:_$_f69c[34]},{text:d(_$_f69c[35]),value:_$_f69c[36]}],text:[{text:d(_$_f69c[37]),value:_$_f69c[37]},{text:d(_$_f69c[38]),value:_$_f69c[38]},{text:d(_$_f69c[39]),value:_$_f69c[39]},{text:d(_$_f69c[40]),value:_$_f69c[40]},{text:d(_$_f69c[33]),value:_$_f69c[34]},{text:d(_$_f69c[41]),value:_$_f69c[42]},{text:d(_$_f69c[43]),
value:_$_f69c[44]}],date:[{text:d(_$_f69c[45]),value:_$_f69c[46]},{text:d(_$_f69c[33]),value:_$_f69c[34]},{text:d(_$_f69c[47]),value:_$_f69c[26]},{text:d(_$_f69c[48]),value:_$_f69c[28]},{text:d(_$_f69c[49]),value:_$_f69c[30]},{text:d(_$_f69c[50]),value:_$_f69c[32]},{text:d(_$_f69c[22]),value:_$_f69c[22]},{text:d(_$_f69c[24]),value:_$_f69c[24]}],textLength:[{text:d(_$_f69c[22]),value:_$_f69c[22]},{text:d(_$_f69c[23]),value:_$_f69c[24]},{text:d(_$_f69c[25]),value:_$_f69c[26]},{text:d(_$_f69c[27]),value:_$_f69c[28]},
{text:d(_$_f69c[29]),value:_$_f69c[30]},{text:d(_$_f69c[31]),value:_$_f69c[32]},{text:d(_$_f69c[33]),value:_$_f69c[34]},{text:d(_$_f69c[35]),value:_$_f69c[36]}]},z=function(a,e){Array.isArray(a)&&(a=a[0]);a=a.replace(new RegExp(/'/g),_$_f69c[0]).toUpperCase();if(void 0===e)return window[a]?window[a]:null;window[a]=e},G=function(){var a=this;a.create=function(e){a.instance=jSuites.calendar(e,this)};return lemonade.element('<input class="jss_object" @ready="self.create(this)" style="width: 100%;" />',
a)},H={number:_$_f69c[51],text:_$_f69c[52],date:_$_f69c[53],list:_$_f69c[54]},I=function(a){var e=_$_f69c[55]+H[a.type];a.criteria&&(e+=_$_f69c[56]+a.criteria);a.type===_$_f69c[57]?(a=typeof a.value[0]!==_$_f69c[58]?a.value[0].join(_$_f69c[59]):a.value[0],e+=_$_f69c[60]+a+_$_f69c[61]):(e+=_$_f69c[56]+a.value[0],1<a.value.length&&(e+=_$_f69c[62]+a.value[1]));return e},E=function(){this.type==_$_f69c[57]&&(this.criteria=d(_$_f69c[69]));return lemonade.element('<div>\n                <div class="row middle p8">\n                    <div class="column f1 cursor" onclick="self.parent.openForm(self)">\n                        <div class="p2"><b>{{self.type}}</b> <span>({{self.range}})</span></div>\n                        <div class="p2">{{self.criteria}}: {{self.value}}</div>\n                    </div><div>\n                        <div><i class=\'material-icons cursor\' onclick="self.parent.removeValidation(self.index)">delete</i></div>\n                    </div>\n                </div>\n            </div>\n        ',
this)},J=function(){var a=this,e=null;a.operator=_$_f69c[0];a.operatorVisible=!0;a.createType=function(b){jSuites.dropdown(b,{data:[{value:_$_f69c[70],text:d(_$_f69c[71])},{value:_$_f69c[72],text:d(_$_f69c[73])},{value:_$_f69c[74],text:d(_$_f69c[75])},{value:_$_f69c[57],text:d(_$_f69c[76])},{value:_$_f69c[77],text:d(_$_f69c[78])},{value:_$_f69c[79],text:d(_$_f69c[80])},{value:_$_f69c[81],text:d(_$_f69c[82])}],onchange:function(g,f,k,q){A[q]?(e.setData(A[q]),a.operatorVisible=!0):(e.setData(null),
a.operatorVisible=!1);a.operator=_$_f69c[0];a.criteria=_$_f69c[0];for(g=0;g<a.el.children[0].children.length;g++)a.el.children[0].children[g].classList.contains(_$_f69c[83])||a.el.children[0].children[g].classList.contains(q)?a.el.children[0].children[g].style.display=_$_f69c[0]:a.el.children[0].children[g].style.display=_$_f69c[84]},onload:function(g,f){f.header.classList.add(_$_f69c[85])}})};a.createOperator=function(b){e=jSuites.dropdown(b,{data:A.number,autocomplete:!0,onchange:function(g,f,k,
q){a.operator=q},onload:function(g,f){f.header.classList.add(_$_f69c[85])}})};a.createPicker=function(b){h.picker(b,function(){-1==b.innerText.indexOf(_$_f69c[5])?b.innerText=h.current.getWorksheetName()+_$_f69c[5]+b.innerText:b.innerText=b.innerText;a.range=b.innerText;jSuites.focus(b)})};a.createColorPicker=function(b){jSuites.color(b)};a.createList=function(b){jSuites.tags(b,{placeholder:_$_f69c[86]})};a.close=function(b){b&&(a.range?a.type?a.operatorVisible&&!a.criteria?alert(d(_$_f69c[89])):
(-1===a.range.indexOf(_$_f69c[5])&&(a.range=a.instance.getWorksheetName()+_$_f69c[5]+a.range),b={range:a.range,action:a.action,type:a.type,criteria:a.criteria,text:a.text,className:a.className,allowBlank:a.allowBlank},b.criteria.includes(_$_f69c[22])?b.value=[a.start,a.end]:b.value=[a.start],b.action===_$_f69c[90]&&(b.format={},a.formatColor&&(b.format.color=a.formatColor),a.formatBackgroundColor&&(b.format[_$_f69c[91]]=a.formatBackgroundColor),a.bold&&(b.format[_$_f69c[92]]=_$_f69c[93]),a.italic&&
(b.format[_$_f69c[94]]=_$_f69c[95])),b={value:b},null!==a.index&&(b.index=a.index),a.instance.setValidations(b)):alert(d(_$_f69c[88])):alert(d(_$_f69c[87])))};var c=`<div>
            <div>
                <!-- Validation type -->
                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${d(_$_f69c[96])}</label>
                            <div @ready="self.createPicker(this)" @bind="self.range"></div>
                        </div>
                    </div>
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${d(_$_f69c[97])}</label>
                            <select style="padding: 8px;" @bind="self.action">
                                <option value="warning">${d(_$_f69c[98])}</option>
                                <option value="reject">${d(_$_f69c[99])}</option>
                                <option value="format">${d(_$_f69c[100])}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="all">
                    <div class="row" style="{{self.action === 'format' && 'display: none;'}}">
                        <div class="column f1">
                            <div class="form-group">
                                <label class="label">${d(_$_f69c[98])}</label>
                                <input type="text" @bind="self.text" class="jss_object w100">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${d(_$_f69c[101])}</label>
                            <div @ready="self.createType(this)" @bind="self.type"></div>
                        </div>
                    </div><div class="column f1" data-visible="{{self.operatorVisible}}">
                        <div class="form-group">
                            <label class="label">${d(_$_f69c[102])}</label>
                            <div @ready="self.createOperator(this)" @bind="self.criteria"></div>
                        </div>
                    </div>
                </div>

                <!-- Number input options -->
                <div class="row number text textLength middle" style="display: none">
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
                            <div @ready="self.createList(this)" @bind="self.start" class="jss_object"></div>
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
                                            <label class="label">${d(_$_f69c[103])}</label><br>
                                            <input @ready="self.createColorPicker(this)" @bind="self.formatColor" class="jss_object w100">
                                        </div>
                                    </div>
                                    <div class="column f1">
                                        <div class="form-group">
                                            <label class="label">${d(_$_f69c[104])}</label><br>
                                            <input @ready="self.createColorPicker(this)" @bind="self.formatBackgroundColor" class="jss_object w100">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column f1">
                                        <div class="form-group">
                                            <input type="text" placeholder="${d(_$_f69c[105])}" @bind="self.className" class="jss_object">
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
                            <button type="button" class="jbutton dark w100" onclick="self.close(true)">${d(_$_f69c[106])}</button>
                        </div>
                    </div>
                </div>
            </div>
            <p onclick="self.parent.closeForm()" class="cursor">${d(_$_f69c[107])}</p>
        </div>`;return lemonade.element(c,a,{Calendar:G,List:E})},K=function(a,e){if(this.records[e]&&this.records[e][a]&&this.records[e][a].element){this.records[e][a].element.removeAttribute(_$_f69c[108]);this.records[e][a].element.classList.remove(_$_f69c[109]);var c=this.records[e][a].element.getAttribute(_$_f69c[110]);if(c){c=c.split(_$_f69c[59]);for(var b=0;b<c.length;b++)this.records[e][a].element.classList.remove(c[b])}this.records[e][a].element.removeAttribute(_$_f69c[110])}},w=function(a,
e,c,b){if(this.parent.config.validations&&this.records[e]&&this.records[e][a]&&this.records[e][a].element){K.call(this,a,e);if(null==c||void 0==c)c=this.records[e][a].v;var g=this,f=h.helpers.getColumnNameFromCoords(a,e);if(this.records[e][a].element&&this.validations&&void 0!==this.validations[f]){f=this.validations[f];for(var k=0;k<f.length;k++){var q=f[k],n=this.parent.config.validations[q];if(!n)break;if(!jSuites.validations(c,n)){if(n.action!==_$_f69c[90]){c=n.text||I(n);this.records[e][a].element.setAttribute(_$_f69c[108],
c);this.records[e][a].element.classList.add(_$_f69c[109]);if(n.action===_$_f69c[111]&&!b)return setTimeout(function(){g.records[e][a].element.removeAttribute(_$_f69c[108]);g.records[e][a].element.classList.remove(_$_f69c[109])},2500),!1;break}}else if(n.action===_$_f69c[90]){var r=[];n.className&&(r=n.className.split(_$_f69c[59]));r.push(_$_f69c[112]+this.parent.name+_$_f69c[9]+q);for(n=0;n<r.length;n++)this.records[e][a].element.classList.add(r[n]);this.records[e][a].element.setAttribute(_$_f69c[110],
r)}}}}},L=function(a,e){var c={init:function(b){y(b)},updateDataFromSelection:function(b,g){if(b.length&&this.parent.config.validations){var f=b[0],k=b[1],q=b[2];b=b[3];var n=[],r=null;if(r=this.validations)for(;k<=b;k++)for(var p=f;p<=q;p++){var u=this.helpers.getColumnNameFromCoords(p,k);if(r[u])for(var B=0;B<r[u].length;B++)n[r[u][B]]=!0}f=this.parent.config.validations.map(function(F,C){return Object.assign({},F,{index:C})});c.message=d(_$_f69c[113])+_$_f69c[56]+(g||_$_f69c[0]);c.data=f.filter(function(F,
C){return n[C]})}else c.data=[];c.data.length||(c.message=d(_$_f69c[114])+_$_f69c[56]+(g||_$_f69c[0]));c.closeForm()},toolbar:function(b){b.items.push({content:_$_f69c[115],type:_$_f69c[116],title:d(_$_f69c[117]),onclick:function(){var g=h.current.getRange();g&&(g=g.split(_$_f69c[5])[1]);c.open(h.current,g)}});return b},open:function(b,g){c.settings.instance=b;c.modal.open()},onevent:function(b,g,f,k,q,n){if(b===_$_f69c[118]||b===_$_f69c[119]||b===_$_f69c[120])f.forEach(function(p){p.x&&p.y&&w.call(g,
p.x,p.y,null,!0)});else if(b===_$_f69c[121])w.call(g,k,q);else if(b===_$_f69c[122]){if((_$_f69c[0]+n).substr(0,1)!==_$_f69c[34])return w.call(g,k,q,n)}else if(b===_$_f69c[123])c.updateDataFromSelection.call(g,[f,k,q,n]);else if(b===_$_f69c[20]){var r=null;f.forEach(function(p){p.oldValue&&p.oldValue.range&&h.helpers.getTokensFromRange(p.oldValue.range).forEach(function(u){r||(r={});r[u]=!0})});f.forEach(function(p){p.value&&p.value.range&&h.helpers.getTokensFromRange(p.value.range).forEach(function(u){r||
(r={});r[u]=!0})});r&&(f=Object.keys(r),f.forEach(function(p){var u=p.split(_$_f69c[5]);p=h.helpers.getCoordsFromColumnName(u[1]);w.call(z(u[0]),p[0],p[1],null,!0)}),f=h.helpers.getRangeFromTokens(Object.keys(r)),b=h.helpers.getCoordsFromRange(f),c.updateDataFromSelection.call(g,b,f))}else if(b===_$_f69c[124])y.build.call(g),r=null,(f=g.config.validations)&&f.length&&(f.forEach(function(p){p.range&&h.helpers.getTokensFromRange(p.range).forEach(function(u){r||(r={});r[u]=!0})}),r&&(f=Object.keys(r),
f.forEach(function(p){var u=p.split(_$_f69c[5]);p=h.helpers.getCoordsFromColumnName(u[1]);w.call(z(u[0]),p[0],p[1],null,!0)})));else if(b===_$_f69c[125]||b===_$_f69c[126])g.parent.ignoreHistory||(g.parent.historyCascade=!0,b===_$_f69c[125]?y.updateWorksheetName.call(g,q,k):(x(g.parent),y.updateAll.call(g,f,k),v(g.parent)),g.parent.historyCascade=!1);else if(b===_$_f69c[127]){if(f.action==_$_f69c[19]){b=[];for(k=0;k<f.records.length;k++)b.push({index:f.records[k].index,value:f.records[k].oldValue});
g.setValidations(b)}}else b===_$_f69c[128]&&f.action==_$_f69c[19]&&g.setValidations(f.records)},createModal:function(b){c.modal=jSuites.modal(b,{title:_$_f69c[129],closed:!0,width:_$_f69c[130],height:_$_f69c[131],backdrop:!1})},openForm:function(b){c.settings.index=b.index;c.settings.range=b.range||c.settings.instance.getRange();c.settings.action=b.action||_$_f69c[132];c.settings.type=b.type||_$_f69c[70];c.settings.criteria=b.criteria||_$_f69c[22];b.value?(c.settings.start=b.value[0],c.settings.end=
b.value[1]):(c.settings.start=_$_f69c[0],c.settings.end=_$_f69c[0]);c.formatColor=_$_f69c[0];c.formatBackgroundColor=_$_f69c[0];c.bold=_$_f69c[0];c.italic=_$_f69c[0];c.className=_$_f69c[0];c.listContainer.style.display=_$_f69c[84];c.settingsContainer.style.display=_$_f69c[133]},closeForm:function(){c.listContainer.style.display=_$_f69c[133];c.settingsContainer.style.display=_$_f69c[84]},removeValidation:function(b){c.settings.instance.resetValidations(b)}};e=document.createElement(_$_f69c[134]);a.tools.append(e);
lemonade.render(function(){var b=`<div @ready="self.createModal(this)">
                <div @ref="self.listContainer">
                    <div>
                        <div class="p6">{{self.message}}</div><br/>
                        <div><List @loop="self.data" /></div>
                    </div>
                    <p><input type="button" value="${d(_$_f69c[117])}" onclick="self.openForm({ index: null })" class="jbutton dark" /></p>
                </div>
                <div @ref="self.settingsContainer" style="display: none;"><Settings @ref="self.settings" /></div>
             </div>`;return lemonade.element(b,c,{Settings:J,List:E})},e);return c},D=function(){return!0};D.oninit=function(a,e){e=_$_f69c[0];8==a.status?a.scope&&-1!=a.scope.indexOf(_$_f69c[1])||(e=_$_f69c[2]):e=_$_f69c[3];if(!e){var c=h.version();if(!c||!c.version||9>parseInt(c.version))e=_$_f69c[4]}e?console.error(e):a.setPlugins({validations:L})};D.license=function(a){null===h&&(h=this)};return D});
