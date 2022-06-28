/**
 * JSS bar
 * https://jspreadsheet.com/products/bar
 * @License: this software requires a license.
 */

if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

var _$_89a7=";bar;This extension is not included on the scope of this license;License required;This extension request Jspreadsheet Pro v9+;=;360px;320px;!;Name is mandatory;Defined names;Interval Name;Cell range;Save;Cancel;delete;Are you sure?;https://jspreadsheet.com/v8/formulas/g;GET;json;@param ;: ;<br>;(;readonly;contentEditable;true;data-x;data-y;onselection;onblur;onchangedefinednames;onload;oninput;onafterchanges;keydown;input;blur;focus;formula;div;object;undefined;function".split(";");
(function(m,d){typeof exports===_$_89a7[41]&&typeof module!==_$_89a7[42]?module.exports=d():typeof define===_$_89a7[43]&&define.amd?define(d):m.bar=d()})(this,function(){var m=jSuites.translate,d=null,q=function(){return 0==this.parent.config.editable||this.options&&0==this.options.editable?!1:!0},r=function(){var b=this,f=null;b.createModal=function(a){f=jSuites.modal(a,{width:_$_89a7[6],height:_$_89a7[7],backdrop:!1,closed:!0})};b.open=function(a){f.open();a?(a.index&&(b.index=a.index),a.value&&
(b.value=a.value)):(b.index=_$_89a7[0],b.value=_$_89a7[0],b.parent.parent.range&&(b.value=d.current.getWorksheetName()+_$_89a7[8]+b.parent.parent.range))};b.close=function(a){if(a&&d.current){if(!b.index){alert(_$_89a7[9]);return}a={index:b.index.toUpperCase(),value:b.value};d.current.setDefinedNames([a])}b.index=_$_89a7[0];b.value=_$_89a7[0];f.close()};b.createRangePicker=function(a){d.picker(a,function(){-1==a.val().indexOf(_$_89a7[8])&&(b.value=d.current.getWorksheetName()+_$_89a7[8]+a.val())})};
var e=`
            <div @ready="self.createModal(this)" title="${jSuites.translate(_$_89a7[10])}">
                <div class='row'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label class='label'>${jSuites.translate(_$_89a7[11])}</label>
                            <input type='text' @bind='self.index' class='jss_object'/>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label class='label'>${jSuites.translate(_$_89a7[12])}</label>
                            <div @ready='self.createRangePicker(this)' @bind='self.value'></div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='column center f1'>
                        <input onclick='self.close(true)' type='button' value="${jSuites.translate(_$_89a7[13])}" class='jbutton dark w100'>
                        <input type='button' onclick='self.close()' value="${jSuites.translate(_$_89a7[14])}" class='jbutton dark w100'>
                    </div>
                </div>
            </div>`;return lemonade.element(e,b)},t=function(){var b=this;b.visible=!1;b.close=function(){setTimeout(function(){b.visible=!1},100)};b.open=function(){b.visible=b.visible?!1:!0};b[_$_89a7[15]]=function(f){confirm(m(_$_89a7[16]))&&d.current.setDefinedNames([{index:f.index,value:null}])};b.edit=function(f){b.modal.open(f);b.visible=!1};b.view=function(f){if(f.value){var e=f.value.split(_$_89a7[8])[0];Array.isArray(e)&&(e=e[0]);e=e.replace(new RegExp(/'/g),_$_89a7[0]).toUpperCase();e=
window[e]?window[e]:null;e.openWorksheet();f=e.helpers.getCoordsFromRange(f.value);e.updateSelectionFromCoords(f);b.visible=!1}};b.onload=function(){b.el.component=b;jSuites.tracking(b,!0)};return lemonade.element('\n            <div>\n                <div class="jss_bar_picker">\n                    <div><i class="material-icons cursor" onclick="self.open();">arrow_drop_down</i></div>\n                    <div class="jss_bar_names p20" data-visible="{{self.visible}}">\n                        <div @loop="self.data">\n                            <div class="row p6 middle">\n                                <div class="column f1 cursor" onclick="self.parent.view(self)">\n                                    <div class="p4"><b>{{self.index}}</b></div>\n                                    <div class="p4">{{self.value}}</div>\n                                </div><div class="column">\n                                    <i class="material-icons cursor" onclick="self.parent.delete(self)">delete</i>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <input type="button" value="Add new entry" class="jbutton dark w100" onclick="self.edit()" />\n                    </div>\n                </div>\n                <Modal @ref="self.modal" />\n            </div>\n        ',
b,{Modal:r})},u=function(){var b=this,f=[];b.onload=function(e){jSuites.ajax({url:_$_89a7[17],method:_$_89a7[18],dataType:_$_89a7[19],success:function(a){f=a}})};b.search=function(e){b.data=[];if((_$_89a7[0]+e).substr(0,1)!==_$_89a7[5])return!1;var a=window.getSelection();a&&0!==a.rangeCount&&(a=a.getRangeAt(0),a.cloneRange(),e=a.startContainer.textContent.replace(/[^A-Z]/gi,_$_89a7[0]));e&&(b.data=f.filter(function(g){g.params=g.param?g.param.map(function(c){return _$_89a7[20]+c.type+_$_89a7[21]+
(c.comment||_$_89a7[0])+_$_89a7[22]}).join(_$_89a7[0]):_$_89a7[0];return 0==g.title.indexOf(e)}))};b.click=function(e,a){var g=window.getSelection();g&&0!==g.rangeCount&&(g=g.getRangeAt(0),g.cloneRange(),g.startContainer.textContent=_$_89a7[5]+e.title+_$_89a7[23],jSuites.focus(b.input.input),setTimeout(function(){b.data=[];b.input.update()},200));a.preventDefault()};b.data=[];return lemonade.element("<>\n                <div @loop=\"self.data\" class=\"jss_bar_search jss_object\">\n                    <div class='p20' onmousedown=\"self.parent.click(self, e)\">\n                        <div class='formula-title'><b>{{self.title}}</b></div>\n                        <div style='margin-bottom: 10px;'>{{self.description||''}}</div>\n                        <div style='color: #777'>{{self.syntax||''}}</div>\n                        <div style='color: #777'>{{self.params}}</div>\n                    </div>\n                </div>\n            </>\n        ",
b)},v=function(b,f){f={};var e=function(){if(!d.current)return!1;!q.call(d.current)||d.current.cursor&&d.current.cursor.classList.contains(_$_89a7[24])?a.input.removeAttribute(_$_89a7[25]):a.input.setAttribute(_$_89a7[25],_$_89a7[26]);var c=d.current.cursor;if(c){var h=parseInt(c.getAttribute(_$_89a7[27]));c=parseInt(c.getAttribute(_$_89a7[28]));a.input.innerHTML=(_$_89a7[0]+d.current.value(h,c)).replace(/(\r\n|\n|\r)/gm,_$_89a7[0])}};f.onevent=function(c,h,k){if(c===_$_89a7[29]){c=null;if(c=d.current.getRange().split(_$_89a7[8])[1])a.range=
c;e()}else if(c===_$_89a7[30])a.input.innerText=_$_89a7[0];else if(c===_$_89a7[31]||c===_$_89a7[32]){c=b.config.definedNames;h=[];for(var n=Object.keys(c),l=0;l<n.length;l++)h.push({index:n[l],value:c[n[l]]});a.data=h}else c===_$_89a7[33]?q.call(d.current)&&d.current.cursor&&!d.current.cursor.classList.contains(_$_89a7[24])&&setTimeout(function(){a.input.innerText=k.target.innerText.replace(/(\r\n|\n|\r)/gm,_$_89a7[0])}):c===_$_89a7[34]&&e()};var a={events:function(c){if(c.type===_$_89a7[35])13===
c.which?(a.input.blur(),setTimeout(function(){d.current.down()},10),c.preventDefault()):27==c.which&&(a.changed=!1,a.input.blur());else if(c.type===_$_89a7[36])a.changed=!0,setTimeout(function(){a.update()});else if(c.type===_$_89a7[37]){if(c=a.cell)if(a.changed){var h=parseInt(c.getAttribute(_$_89a7[27])),k=parseInt(c.getAttribute(_$_89a7[28]));a.instance.setValueFromCoords(h,k,c.innerText)}else c.innerText=a.label}else c.type===_$_89a7[38]&&(a.instance=d.current,a.changed=!1,a.cell=d.current.cursor,
a.label=a.cell?d.current.cursor.innerText:_$_89a7[0])},update:function(){if(d.current){var c=a.input.innerText;d.current.edition?(b.input.innerText=c,a.changed=!0):d.current.cursor&&!d.current.cursor.classList.contains(_$_89a7[24])&&(d.current.cursor.innerText=c,a.changed=!0)}},createFormula:function(c){d.picker(c,{type:_$_89a7[39],onchange:function(h,k){a.update()},onupdate:function(h){a.update()}});c.addEventListener(_$_89a7[38],a.events);c.addEventListener(_$_89a7[37],a.events);c.addEventListener(_$_89a7[36],
a.events);c.addEventListener(_$_89a7[35],a.events)}},g=document.createElement(_$_89a7[40]);b.tools.appendChild(g);lemonade.render(function(){return lemonade.element("\n                <>\n                    <div class='row jss_bar'>\n                        <input type='text' @bind='self.range' class='range-input jss_object' />\n                        <Names data=\"{{self.data}}\" />\n                        <div class='jss_bar_icon'><div></div></div>\n                        <div @ready='self.createFormula(this)' @ref=\"self.input\" class='formula jss_object'></div>\n                        <Search @ref=\"self.search\" input=\"{{self}}\" />\n                    </div>\n                </>\n            ",
a,{Search:u,Names:t})},g,{});return f},p=function(){};p.oninit=function(b){var f=_$_89a7[0];8==b.status?b.scope&&-1!=b.scope.indexOf(_$_89a7[1])||(f=_$_89a7[2]):f=_$_89a7[3];if(!f){var e=d.version();if(!e||!e.version||9>parseInt(e.version))f=_$_89a7[4]}f?console.error(f):b.setPlugins({bar:v})};p.license=function(){null===d&&(d=this)};return p});
