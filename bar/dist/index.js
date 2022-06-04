/**
 * JSS bar
 * https://jspreadsheet.com/products/bar
 * @License: this plugin requires a license
 */

if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

'use strict';var _$_dcb0=";bar;This extension is not included on the scope of this license;License required;This extension request Jspreadsheet Pro v9+;=;360px;320px;!;Name is mandatory;Defined names;Interval Name;Cell range;Save;Cancel;delete;Are you sure?;https://jspreadsheet.com/v8/formulas/g;GET;json;@param ;: ;<br>;(;onselection;data-x;data-y;onblur;onchangedefinednames;onload;oninput;keydown;input;blur;focus;formula;div;object;undefined;function".split(";");
(function(k,e){typeof exports===_$_dcb0[37]&&typeof module!==_$_dcb0[38]?module.exports=e():typeof define===_$_dcb0[39]&&define.amd?define(e):k.bar=e()})(this,function(){var k=jSuites.translate,e=null,n=function(){var b=this,d=null;b.createModal=function(a){d=jSuites.modal(a,{width:_$_dcb0[6],height:_$_dcb0[7],backdrop:!1,closed:!0})};b.open=function(a){d.open();a?(a.index&&(b.index=a.index),a.value&&(b.value=a.value)):(b.index=_$_dcb0[0],b.value=_$_dcb0[0],b.parent.parent.range&&(b.value=e.current.getWorksheetName()+
_$_dcb0[8]+b.parent.parent.range))};b.close=function(a){if(a&&e.current){if(!b.index){alert(_$_dcb0[9]);return}a={index:b.index.toUpperCase(),value:b.value};e.current.setDefinedNames([a])}b.index=_$_dcb0[0];b.value=_$_dcb0[0];d.close()};b.createRangePicker=function(a){e.picker(a,function(){-1==a.val().indexOf(_$_dcb0[8])&&(b.value=e.current.getWorksheetName()+_$_dcb0[8]+a.val())})};var c=`
            <div @ready="self.createModal(this)" title="${jSuites.translate(_$_dcb0[10])}">
                <div class='row'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label class='label'>${jSuites.translate(_$_dcb0[11])}</label>
                            <input type='text' @bind='self.index' class='jss_object'/>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label class='label'>${jSuites.translate(_$_dcb0[12])}</label>
                            <div @ready='self.createRangePicker(this)' @bind='self.value'></div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='column center f1'>
                        <input onclick='self.close(true)' type='button' value="${jSuites.translate(_$_dcb0[13])}" class='jbutton dark w100'>
                        <input type='button' onclick='self.close()' value="${jSuites.translate(_$_dcb0[14])}" class='jbutton dark w100'>
                    </div>
                </div>
            </div>`;return lemonade.element(c,b)},p=function(){var b=this;b.visible=!1;b.close=function(){setTimeout(function(){b.visible=!1},100)};b.open=function(){b.visible=b.visible?!1:!0};b[_$_dcb0[15]]=function(d){confirm(k(_$_dcb0[16]))&&e.current.setDefinedNames([{index:d.index,value:null}])};b.edit=function(d){b.modal.open(d);b.visible=!1};b.view=function(d){if(d.value){var c=d.value.split(_$_dcb0[8])[0];Array.isArray(c)&&(c=c[0]);c=c.replace(new RegExp(/'/g),_$_dcb0[0]).toUpperCase();c=
window[c]?window[c]:null;c.openWorksheet();d=c.helpers.getCoordsFromRange(d.value);c.updateSelectionFromCoords(d);b.visible=!1}};b.onload=function(){b.el.component=b;jSuites.tracking(b,!0)};return lemonade.element('\n            <div>\n                <div class="jss_bar_picker">\n                    <div><i class="material-icons cursor" onclick="self.open();">arrow_drop_down</i></div>\n                    <div class="jss_bar_names p20" data-visible="{{self.visible}}">\n                        <div @loop="self.data">\n                            <div class="row p6 middle">\n                                <div class="column f1 cursor" onclick="self.parent.view(self)">\n                                    <div class="p4"><b>{{self.index}}</b></div>\n                                    <div class="p4">{{self.value}}</div>\n                                </div><div class="column">\n                                    <i class="material-icons cursor" onclick="self.parent.delete(self)">delete</i>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <input type="button" value="Add new entry" class="jbutton dark w100" onclick="self.edit()" />\n                    </div>\n                </div>\n                <Modal @ref="self.modal" />\n            </div>\n        ',
b,{Modal:n})},q=function(){var b=this,d=[];b.onload=function(c){jSuites.ajax({url:_$_dcb0[17],method:_$_dcb0[18],dataType:_$_dcb0[19],success:function(a){d=a}})};b.search=function(c){b.data=[];if((_$_dcb0[0]+c).substr(0,1)!==_$_dcb0[5])return!1;var a=window.getSelection();a&&0!==a.rangeCount&&(a=a.getRangeAt(0),a.cloneRange(),c=a.startContainer.textContent.replace(/[^A-Z]/gi,_$_dcb0[0]));c&&(b.data=d.filter(function(f){f.params=f.param?f.param.map(function(g){return _$_dcb0[20]+g.type+_$_dcb0[21]+
(g.comment||_$_dcb0[0])+_$_dcb0[22]}).join(_$_dcb0[0]):_$_dcb0[0];return 0==f.title.indexOf(c)}))};b.click=function(c,a){var f=window.getSelection();f&&0!==f.rangeCount&&(f=f.getRangeAt(0),f.cloneRange(),f.startContainer.textContent=_$_dcb0[5]+c.title+_$_dcb0[23],jSuites.focus(b.input.input),setTimeout(function(){b.data=[];b.input.update()},200));a.preventDefault()};b.data=[];return lemonade.element("<>\n                <div @loop=\"self.data\" class=\"jss_bar_search jss_object\">\n                    <div class='p20' onmousedown=\"self.parent.click(self, e)\">\n                        <div class='formula-title'><b>{{self.title}}</b></div>\n                        <div style='margin-bottom: 10px;'>{{self.description||''}}</div>\n                        <div style='color: #777'>{{self.syntax||''}}</div>\n                        <div style='color: #777'>{{self.params}}</div>\n                    </div>\n                </div>\n            </>\n        ",
b)},r=function(b,d){var c={events:function(a){if(a.type===_$_dcb0[31])13===a.which?(c.input.blur(),setTimeout(function(){e.current.down()},10),a.preventDefault()):27==a.which&&(c.changed=!1,c.input.blur());else if(a.type===_$_dcb0[32])c.changed=!0,setTimeout(function(){c.update()});else if(a.type===_$_dcb0[33]){if(a=c.cell)if(c.changed){var f=parseInt(a.getAttribute(_$_dcb0[25])),g=parseInt(a.getAttribute(_$_dcb0[26]));c.instance.setValueFromCoords(f,g,a.innerText)}else a.innerText=c.label}else a.type===
_$_dcb0[34]&&(c.instance=e.current,c.changed=!1,c.cell=e.current.cursor,c.label=c.cell?e.current.cursor.innerText:_$_dcb0[0])},update:function(){if(e.current){var a=c.input.innerText;e.current.edition?b.input.innerText=a:e.current.cursor&&(e.current.cursor.innerText=a);c.changed=!0}},createFormula:function(a){e.picker(a,{type:_$_dcb0[35],onchange:function(f,g){c.update()},onupdate:function(f){c.update()}});a.addEventListener(_$_dcb0[34],c.events);a.addEventListener(_$_dcb0[33],c.events);a.addEventListener(_$_dcb0[32],
c.events);a.addEventListener(_$_dcb0[31],c.events)}};d=document.createElement(_$_dcb0[36]);b.tools.appendChild(d);lemonade.render(function(){return lemonade.element("\n                <>\n                    <div class='row jss_bar'>\n                        <input type='text' @bind='self.range' class='range-input jss_object' />\n                        <Names data=\"{{self.data}}\" />\n                        <div class='jss_bar_icon'><div></div></div>\n                        <div @ready='self.createFormula(this)' @ref=\"self.input\" class='formula jss_object'></div>\n                        <Search @ref=\"self.search\" input=\"{{self}}\" />\n                    </div>\n                </>\n            ",
c,{Search:q,Names:p})},d,{});return{onevent:function(a,f,g){if(a===_$_dcb0[24]){a=null;if(a=e.current.getRange().split(_$_dcb0[8])[1])c.range=a;if(f=e.current.cursor)a=parseInt(f.getAttribute(_$_dcb0[25])),f=parseInt(f.getAttribute(_$_dcb0[26])),c.input.innerText=(_$_dcb0[0]+e.current.value(a,f)).replace(/(\r\n|\n|\r)/gm,_$_dcb0[0])}else if(a===_$_dcb0[27])c.input.innerText=_$_dcb0[0];else if(a===_$_dcb0[28]||a===_$_dcb0[29]){a=b.config.definedNames;f=[];for(var l=Object.keys(a),h=0;h<l.length;h++)f.push({index:l[h],
value:a[l[h]]});c.data=f}else a===_$_dcb0[30]&&setTimeout(function(){c.input.innerText=g.target.innerText.replace(/(\r\n|\n|\r)/gm,_$_dcb0[0])})}}},m=function(){};m.oninit=function(b){var d=_$_dcb0[0];8==b.status?b.scope&&-1!=b.scope.indexOf(_$_dcb0[1])||(d=_$_dcb0[2]):d=_$_dcb0[3];if(!d){var c=e.version();if(!c||!c.version||9>parseInt(c.version))d=_$_dcb0[4]}d?console.error(d):b.setPlugins({bar:r})};m.license=function(){null===e&&(e=this)};return m});
