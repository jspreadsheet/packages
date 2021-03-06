/**
 * Advanced CSV importer for JSS
 * https://jspreadsheet.com/products/csv-importer
 *
 * @License: this plugin requires a license
 */

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){if(b==Array.prototype||b==Object.prototype)return b;b[c]=d.value;return b};
$jscomp.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(b,c){var d=$jscomp.propertyToPolyfillSymbol[c];if(null==d)return b[c];d=b[d];return void 0!==d?d:b[c]};$jscomp.polyfill=function(b,c,d,e){c&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(b,c,d,e):$jscomp.polyfillUnisolated(b,c,d,e))};
$jscomp.polyfillUnisolated=function(b,c,d,e){d=$jscomp.global;b=b.split(".");for(e=0;e<b.length-1;e++){var f=b[e];if(!(f in d))return;d=d[f]}b=b[b.length-1];e=d[b];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:c})};
$jscomp.polyfillIsolated=function(b,c,d,e){var f=b.split(".");b=1===f.length;e=f[0];e=!b&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var a=0;a<f.length-1;a++){var n=f[a];if(!(n in e))return;e=e[n]}f=f[f.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&"es6"===d?e[f]:null;c=c(d);null!=c&&(b?$jscomp.defineProperty($jscomp.polyfills,f,{configurable:!0,writable:!0,value:c}):c!==d&&(void 0===$jscomp.propertyToPolyfillSymbol[f]&&(d=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[f]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(f):$jscomp.POLYFILL_PREFIX+d+"$"+f),$jscomp.defineProperty(e,$jscomp.propertyToPolyfillSymbol[f],{configurable:!0,writable:!0,value:c})))};$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(c,d){var e=this;e instanceof String&&(e=String(e));var f=e.length;d=d||0;for(0>d&&(d=Math.max(d+f,0));d<f;d++){var a=e[d];if(a===c||Object.is(a,c))return!0}return!1}},"es7","es3");var _$_881d="import;;importer;JSS: You can only import 50 records on demo mode.;goto;none;tr;td;select;option;(None);gi;selected;.csv;CSV column;Spreadsheet column;Import loaded records;Load a new CSV file;div;jss_ignore;480px;Advanced CSV;file_download;Import CSV;This extension is running in demo mode;object;undefined;function".split(";");
(function(b,c){typeof exports===_$_881d[25]&&typeof module!==_$_881d[26]?module.exports=c():typeof define===_$_881d[27]&&define.amd?define(c):b.importer=c()})(this,function(){var b=null,c=jSuites.translate,d=function(){var a=this,n=a.file=null;a.loadCSV=function(){a.file.click()};a[_$_881d[0]]=function(){if(data.length){for(var l=[],g=0;g<a.tbody.children.length;g++)a.tbody.children[g].children[1].firstChild.value!=_$_881d[1]&&(l[a.tbody.children[g].children[1].firstChild.value]=g);var h=!0;1===spreadsheet.edition&&
8===spreadsheet.status&&0<=spreadsheet.scope.indexOf(_$_881d[2])||(h=!1);var k=[];for(g=0;g<data.length;g++){for(var p=[],m=0;m<a.worksheet.options.columns.length;m++)p.push(void 0===l[m]?_$_881d[1]:data[g][l[m]]);k.push(p);if(50<g&&!0===h){console.log(_$_881d[3]);break}}a.worksheet[_$_881d[4]](a.worksheet.rows.length-1);a.worksheet.insertRow(k.length,null,null,k)}a.reset();a.close()};a.reset=function(){data=[];a.tbody.innerText=_$_881d[1];a.header.style.display=_$_881d[5];a.button.style.display=
_$_881d[5]};a.content=function(l){a.tbody.innerText=_$_881d[1];for(var g=0;g<l.length;g++){var h=document.createElement(_$_881d[6]),k=document.createElement(_$_881d[7]);k.innerText=l[g]||_$_881d[1];h.appendChild(k);k=document.createElement(_$_881d[7]);var p=document.createElement(_$_881d[8]),m=document.createElement(_$_881d[9]);m.innerText=_$_881d[10];m.value=_$_881d[1];p.appendChild(m);for(var q=0;q<a.worksheet.options.columns.length;q++){var r=a.worksheet.options.columns[q].title||_$_881d[1];r.trim()||
(r=a.worksheet.helpers.getColumnName(q));m=document.createElement(_$_881d[9]);m.value=q;m.innerText=r;p.appendChild(m);m.innerText.match(new RegExp(l[g],_$_881d[11]))&&m.setAttribute(_$_881d[12],_$_881d[12])}k.appendChild(p);h.appendChild(k);a.tbody.appendChild(h)}};a.onload=function(){a.file.onchange=function(l){data=[];var g=l.target.files;if(l.target.value.includes(_$_881d[13])){var h=new FileReader;h.onload=function(){data=a.worksheet.helpers.parseCSV(h.result);a.content(data.shift());a.header.style.display=
_$_881d[1];a.button.style.display=_$_881d[1]};g[0]&&h.readAsText(g[0])}this.value=null}};n=`
           <>
                <div class="center small">{{self.message}}</div>
                <div @ref='self.header' style='display: none;'>
                    <table cellpadding='4' style='margin:4px;'>
                        <thead><tr><td width='50%'><b>${c(_$_881d[14])}</b></td><td width='50%'><b>${c(_$_881d[15])}</b></td></tr></thead>
                        <tbody @ref="self.tbody" style="font-size: 0.9em"></tbody>
                    </table>
                </div>
                <div style='padding: 10px;'>
                    <input type="file" style="display: none;" @ref="self.file" />
                    <input type="button" value="${c(_$_881d[16])}" onclick="self.import()" class="jbutton dark w100" @ref="self.button" style="display: none;" />
                    <input type="button" value="${c(_$_881d[17])}" onclick="self.loadCSV()" class="jbutton dark w100" /><br>
                </div>
            </>
        `;return lemonade.element(n,a)},e=function(a,n){n||(n={});var l={};n=document.createElement(_$_881d[18]);n.classList.add(_$_881d[19]);a.tools.appendChild(n);var g=jSuites.modal(n,{width:_$_881d[20],height:_$_881d[20],closed:!0,title:c(_$_881d[21]),backdrop:!1});lemonade.render(d,n.firstChild.firstChild,l);l.close=function(){g.close()};var h={options:{},toolbar:function(k){h.options.icon||(h.options.icon=_$_881d[22]);k.items.push({content:h.options.icon,onclick:function(p,m,q){h.open()},tooltip:c(_$_881d[23])});
return k},init:function(k){k.options.pluginOptions&&k.options.pluginOptions.importer&&(h.options=k.options.pluginOptions.importer)},open:function(){g.open();l.worksheet=a.worksheets[a.getWorksheetActive()];1===a.edition&&8===a.status&&0<=a.scope.indexOf(_$_881d[2])||(l.message=_$_881d[24])}};return h},f=function(){return!0};f.oninit=function(a,n){a.setPlugins({importer:e})};f.license=function(a){null===b&&(b=this)};return f});
