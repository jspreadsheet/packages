/**
 * JSS charts
 * https://jspreadsheet.com/products/charts
 * @License: this plugin requires a license
 * @dependancy chartjs
 */

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!Chart && typeof(require) === 'function') {
    var Chart = require('chart.js/dist/chart.min.js');
}

var _$_cdb1=';charts;This plugin is not included on the scope of this license;License required;You need to specify, where the chart would be inserted.;readonly;You can\'t insert chart in cell ;chart;line;none;string;backgroundColor;Data to analyze;Contains labels;Series based on columns or rows datasets;Column datasets;Row datasets;Choose the cell where the new chart will be inserted;Insert;Cancel;Insert chart;400px;480px;!;:;1;get(;);floating;set;active;200px;Circle;circle;Star;star;Triangle;triangle;Point;point;data-name;Serie settings;Background color;Border color;Point style;Fill;Serie data range;Data;Serie label;Label;Serie add;Serie delete;pie;doughnut;get;#FFFFFF;data;delete;Configuration;Styling;Chart type;Orientation;Data labels;Series;Title;Legend;X Axis Visibility;X Axis Title;Y Axis Visibility;Y Axis Title;Y Begin at Zero;Begin at Zero;Save;Chart settings;500px;600px;modern;Line chart;Bar chart;bar;Pie chart;Doughnut chart;Radar chart;radar;all;Horizontally;x;Vertically;y;Top;top;Left;left;Right;right;Bottom;bottom;Disable;[data-path];data-path;data-value;checkbox;true;@bind;function;.jss_chart;jss_chart_cell;div;jss_chart;jss_object;jpanel;tabindex;300px;data-x;data-y;flip_to_front;Flip to front;flip_to_back;Flip to back;divisor;settings;Delete chart;px;=CHARTS(;[CHARTS];,;canvas;"get((.*?))";gi;$1;=;data.labels;i;material-icons;minimize;jss_chart_error;data-error;Something went wrong;absolute;0px;40px;addchart;onbeforepaste;=CHARTS;ondeleterow;ondeletecolumn;onbeforechangereferences;onchangeproperty;object;undefined'.split(";");
(function(p,g){typeof exports===_$_cdb1[148]&&typeof module!==_$_cdb1[149]?module.exports=g():typeof define===_$_cdb1[104]&&define.amd?define(g):p.charts=g()})(this,function(){var p=null,g=jSuites.translate,A=function(){var a=_$_cdb1[0];8==this.status?this.scope&&-1!=this.scope.indexOf(_$_cdb1[1])||(a=_$_cdb1[2]):a=_$_cdb1[3];return a},v=function(a){var f=a.innerText.match(/get\(.*?\)/gi);return f&&f.length?f[0].substring(4,f[0].length-1):a.innerText},B=function(){var a=[];typeof this.value===_$_cdb1[10]&&
(this.value=[this.value]);for(var f=0;12>f;f++)a[f]={value:this.value[f]||_$_cdb1[0]};this.data=a;return lemonade.element('<div class="jss_chart_palette">\n                <Color @loop="self.data" />\n            </div>',this,{Color:function(){var h=this;h.create=function(d){jSuites.color(d,{value:h.value,onchange:function(b,e){b=h.parent.data.indexOf(h);h.parent.value[b]=e;h.parent.onchange(_$_cdb1[11],h.parent.value);h.value=e}})};return lemonade.element('<div style="{{\'background-color:\'+self.value}}" @ready="self.create(this)"></div>',
h)}})},C=function(){var a=this,f=null;a.instance=null;var h=`
            <div @ready="self.createModal(this)">
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${g(_$_cdb1[12])}</label>
                         <div @ready="self.createPicker(this)" @bind="self.data"></div>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                      <div class='form-group'>
                          <label class="jswitch" style="margin-bottom: 6px;">
                              <input @bind="self.haveLabels" type="checkbox"><i></i><span class='f1 ml1'>${g(_$_cdb1[13])}</span>
                          </label>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label>${g(_$_cdb1[14])}</label>
                            <select @ready="self.createDropdown(this)">
                                <option value="1">${g(_$_cdb1[15])}</option>
                                <option value="2">${g(_$_cdb1[16])}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${g(_$_cdb1[17])}</label>
                         <div @ready="self.createWhere(this)" data-single="true" @bind="self.cellName"></div>
                      </div>
                   </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <br>
                            <button type="button" class="jbutton dark w100" onclick="self.insert()" style="margin-bottom: 10px">${g(_$_cdb1[18])}</button>
                            <button type="button" class="jbutton dark w100" onclick="self.cancel()">${g(_$_cdb1[19])}</button>
                        </div>
                    </div>
                </div>
           </div>`;a.createDropdown=function(d){f=jSuites.dropdown(d)};a.createModal=function(d){a.modal=jSuites.modal(d,{title:g(_$_cdb1[20]),closed:!0,width:_$_cdb1[21],height:_$_cdb1[22],backdrop:!1})};a.createPicker=function(d){p.picker(d,function(){a.data=d.innerText;jSuites.focus(d.lastChild)})};a.createWhere=function(d){p.picker(d,function(){a.cellName=d.innerText;jSuites.focus(d.lastChild)})};a.cancel=function(){a.modal.close()};a.insert=function(){var d,b=a.data,e=_$_cdb1[0];-1!=b.indexOf(_$_cdb1[23])&&
(b=b.split(_$_cdb1[23]),e=b[0].toUpperCase()+_$_cdb1[23],b=b[1]);-1==b.indexOf(_$_cdb1[24])&&(b=b+_$_cdb1[24]+b);b=p.helpers.getRangeFromTokens(p.helpers.getTokensFromRange(b));b=b.split(_$_cdb1[24]);var k=p.helpers.getCoordsFromColumnName(b[0]),c=p.helpers.getCoordsFromColumnName(b[1]);b=[];if(f.getValue()==_$_cdb1[25])for(var l=k[0];l<=c[0];l++)b.push(_$_cdb1[26]+e+p.helpers.getColumnNameFromCoords(l,k[1])+_$_cdb1[24]+p.helpers.getColumnNameFromCoords(l,c[1])+_$_cdb1[27]);else for(l=k[1];l<=c[1];l++)b.push(_$_cdb1[26]+
e+p.helpers.getColumnNameFromCoords(k[0],l)+_$_cdb1[24]+p.helpers.getColumnNameFromCoords(c[0],l)+_$_cdb1[27]);a.haveLabels&&(d=b.shift());e=a.instance;if(k=a.cellName)if(c=e.getCell(k),c.classList.contains(_$_cdb1[5]))alert(g(_$_cdb1[6])+k),b=!1;else{d={type:_$_cdb1[7],top:c.offsetTop,left:c.offsetLeft,chart:{type:_$_cdb1[8],data:{labels:d,datasets:[]},options:{plugins:{legend:{position:_$_cdb1[9]}}}}};for(c=0;c<b.length;c++)l=jSuites.palette(_$_cdb1[7])[0][c%jSuites.palette(_$_cdb1[7])[0].length],
d.chart.data.datasets.push({data:b[c],borderColor:l,backgroundColor:l});b=p.helpers.getCoordsFromColumnName(k);e.setProperty(b[0],b[1],d);b=!0}else alert(g(_$_cdb1[4])),b=!1;b&&a.modal.close()};return lemonade.element(h,a)},D=function(){var a=this;a.type=_$_cdb1[28];a.create=function(h){h.floating=a};a[_$_cdb1[29]]=function(h,d){a.parent[h]=d;a.parent.onchange(h,[])};a.toggle=function(){a.panel.classList.contains(_$_cdb1[30])?a.close():a.open()};a.open=function(){jSuites.tracking(a,!0);a.panel.classList.add(_$_cdb1[30])};
a.close=function(){jSuites.tracking(a,!1);a.panel.classList.remove(_$_cdb1[30])};a.createColorPicker=function(h){jSuites.color(h,{value:a.parent.borderColor,onchange:function(d,b){a[_$_cdb1[29]](d.name,b)},closeOnChange:!0})};a.inputPointStyle=function(h){jSuites.dropdown(h,{width:_$_cdb1[31],data:[{text:g(_$_cdb1[32]),value:_$_cdb1[33]},{text:g(_$_cdb1[34]),value:_$_cdb1[35]},{text:g(_$_cdb1[36]),value:_$_cdb1[37]},{text:g(_$_cdb1[38]),value:_$_cdb1[39]}],onchange:function(d,b,e,k){a[_$_cdb1[29]](d.getAttribute(_$_cdb1[40]),
k)}})};a.inputPalette=function(h){var d=Object.keys(jSuites.paletteList).map(function(e){return{text:g(e),value:e}}),b=jSuites.dropdown(h,{data:d,onchange:function(e,k,c,l){l===_$_cdb1[0]&&b.setValue(c)}})};a.backgroundColor=a.parent.backgroundColor;var f=`<div @ready="self.create(this)">
                <button type="button" title="${g(_$_cdb1[41])}" onclick="self.toggle(this)">
                    <i class="material-icons small">settings</i>
                </button><div>
                    <div class="jss_chart_floating" @ref="self.panel">
                        <i class="cursor right material-icons" onclick="self.toggle()">close</i>
                        <div class='row line bar radar'>
                            <div class="column f1">
                                <div class="form-group">
                                <label>${g(_$_cdb1[42])}</label>
                                <Palette name="backgroundColor" value="{{self.backgroundColor}}" onchange="{{self.set}}" />
                                </div>
                            </div>
                        </div>
                        <div class='row line pie doughnut radar'>
                            <div class="column f1">
                                <div class="form-group">
                                 <label>${g(_$_cdb1[43])}</label>
                                 <input @ready="self.createColorPicker(this)" name="borderColor" />
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label>${g(_$_cdb1[44])}</label>
                                    <div @ready="self.inputPointStyle(this)" data-name="pointStyle"></div>
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch" style="margin-bottom: 6px;">
                                        <input type="checkbox" name="fill" oninput="self.set(this.name, this.value)"><i></i><span class='f1 ml1'>${g(_$_cdb1[45])}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;return lemonade.element(f,a,{Palette:B})},E=function(){this.onchange=this.parent.onchange;var a=`<div class="jss_chart_series">
                <div @ready="self.parent.createData(this, self)"  @bind="self.data" title="${g(_$_cdb1[46])}" data-placeholder="${g(_$_cdb1[47])}" contenteditable="true" style="width: 190px;"></div>
                <div @ready="self.parent.createLabel(this, self)" @bind="self.label" title="${g(_$_cdb1[48])}" data-placeholder="${g(_$_cdb1[49])}" data-single="true" contenteditable="true" style="width: 150px;"></div>
                <Config />
                <button type="button" onclick="self.parent.add()" title="${g(_$_cdb1[50])}"><i class="material-icons small">add</i></button>
                <button type="button" onclick="self.parent.delete(self)" title="${g(_$_cdb1[51])}"><i class="material-icons small">delete</i></button>
            </div>`;return lemonade.element(a,this,{Config:D})},F=function(){var a=this;a.createData=function(f,h){p.picker(f,function(){f.innerText?(h.data=_$_cdb1[26]+v(f)+_$_cdb1[27],jSuites.focus(f)):h.data=_$_cdb1[0]})};a.createLabel=function(f,h){p.picker(f,function(){f.innerText?(h.label=_$_cdb1[26]+v(f)+_$_cdb1[27],jSuites.focus(f)):h.label=_$_cdb1[0]})};a.add=function(){if(-1<[_$_cdb1[52],_$_cdb1[53]].indexOf(a.parent.type)){var f=jSuites.palette[_$_cdb1[54]](_$_cdb1[7])[0];var h=_$_cdb1[55]}else f=
jSuites.palette[_$_cdb1[54]](_$_cdb1[7])[0][a.data.length],h=jSuites.palette[_$_cdb1[54]](_$_cdb1[7])[0][a.data.length];a.data.push({backgroundColor:f,borderColor:h});a.refresh(_$_cdb1[56])};a[_$_cdb1[57]]=function(f){a.data.splice(a.data.indexOf(f),1);0===a.data.length?a.add():a.refresh(_$_cdb1[56])};return lemonade.element('<div><Item @loop="self.data" /></div>',a,{Item:E})},G=function(){var a=this,f=null;a.series=[];var h=`
           <div @ready="self.createModal(this)">
              <div role='tabs' @ref="self.tabsElement" @ready="self.createTabs(this)">
                 <div role='headers'>
                    <div style="width: 120px;">${g(_$_cdb1[58])}</div>
                    <div style="width: 120px;">${g(_$_cdb1[59])}</div>
                 </div>
                 <div role='content'>
                    <div @ref="self.root" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g(_$_cdb1[60])}</label>
                                <div @ready="self.inputType(this)" @bind="self.type" data-path="type" data-value="line"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row line bar'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g(_$_cdb1[61])}</label>
                                <div @ready="self.inputIndexAxis(this)" @bind="self.orientation" data-path="options.indexAxis" data-value="x"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g(_$_cdb1[62])}</label>
                                <div @ready="self.createLabels(this, self)" @bind="self.labels" data-path="data.labels"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g(_$_cdb1[63])}</label>
                                <div><Series data="{{self.series}}" onchange="{{self.onchange}}" /></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div @ref="self.rootstyle" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g(_$_cdb1[64])}</label>
                                <input type="text" @bind="self.title" data-path="options.plugins.title.text" class="jss_object" />
                             </div>
                          </div><div class='column' style='display:none'>
                              <div class='form-group'>
                                  <br/>
                                  <label class="jswitch p4">
                                      <input @bind="self.titleDisplay" checked="{{self.title?true:false}}" data-path="options.plugins.title.display" data-value="false" type="checkbox"><i></i>
                                  </label>
                              </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g(_$_cdb1[65])}</label>
                                <div @ready="self.inputLegend(this)" @bind="self.legend" data-path="options.plugins.legend.position" data-value="top"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${g(_$_cdb1[66])}</span> <input @bind="self.xAxis" data-path="options.scales.x.display" data-value="true" type="checkbox" name="xAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all' style="{{!self.xAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${g(_$_cdb1[67])}' name='title' @bind="self.titleX" data-path="options.scales.x.title.text" class="jss_object"/>
                             </div>
                          </div><div class='column' style='display:none'>
                              <div class='form-group'>
                                  <br/>
                                  <label class="jswitch p4">
                                      <input @bind="self.titleXDisplay" checked="{{self.titleX?true:false}}" data-path="options.scales.x.title.display" data-value="false" type="checkbox"><i></i>
                                  </label>
                              </div>
                          </div>
                       </div>
                       <div class='row all'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${g(_$_cdb1[68])}</span> <input @bind="self.yAxis" data-path="options.scales.y.display" data-value="true" type="checkbox" name="yAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all'  style="{{!self.yAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${g(_$_cdb1[69])}' name='title' @bind="self.titleY" data-path="options.scales.y.title.text" class="jss_object"/>
                             </div>
                          </div><div class='column' style='display:none'>
                              <div class='form-group'>
                                  <br/>
                                  <label class="jswitch p4">
                                      <input @bind="self.titleYDisplay" checked="{{self.titleY?true:false}}" data-path="options.scales.y.title.display" data-value="false" type="checkbox"><i></i>
                                  </label>
                              </div>
                          </div>
                       </div>
                       <div class='row line bar yaxis'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${g(_$_cdb1[70])}</span> <input @bind="self.yAxisBeginAtZero" data-path="options.scales.y.beginAtZero" data-value="false" type="checkbox" name="yAxisBeginAtoZero"><i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class='row radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${g(_$_cdb1[71])}</span> <input @bind="self.beginAtZero" data-path="options.scales.r.beginAtZero" data-value="false" type="checkbox" name="beginAtoZero"><i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
              <div class='row'>
                 <div class='column f1'>
                     <div class='form-group center'>
                         <br/>
                         <button type="button" class="jbutton dark w100" onclick="self.close(true)">${g(_$_cdb1[72])}</button>
                         <button type="button" class="jbutton dark w100" onclick="self.close(false)" style="margin-top: 4px">${g(_$_cdb1[19])}</button>
                     </div>
                 </div>
              </div>
           </div>
       `;a.createModal=function(d){a.modal=jSuites.modal(d,{title:g(_$_cdb1[73]),closed:!0,width:_$_cdb1[74],height:_$_cdb1[75],backdrop:!1,onclose:function(){a.close(!1)}})};a.createLabels=function(d,b){p.picker(d,function(){d.innerText?(b.labels=_$_cdb1[26]+v(d)+_$_cdb1[27],jSuites.focus(d)):b.labels=_$_cdb1[0]})};a.createTabs=function(d){jSuites.tabs(d,{palette:_$_cdb1[76],animation:!0})};a.inputType=function(d){jSuites.dropdown(d,{data:[{text:g(_$_cdb1[77]),value:_$_cdb1[8]},{text:g(_$_cdb1[78]),
value:_$_cdb1[79]},{text:g(_$_cdb1[80]),value:_$_cdb1[52]},{text:g(_$_cdb1[81]),value:_$_cdb1[53]},{text:g(_$_cdb1[82]),value:_$_cdb1[83]}],onchange:function(b,e,k,c){for(b=0;b<a.root.children.length;b++)a.root.children[b].classList.contains(_$_cdb1[84])||a.root.children[b].classList.contains(c)?a.root.children[b].style.display=_$_cdb1[0]:a.root.children[b].style.display=_$_cdb1[9];for(b=0;b<a.rootstyle.children.length;b++)a.rootstyle.children[b].classList.contains(_$_cdb1[84])||a.rootstyle.children[b].classList.contains(c)?
a.rootstyle.children[b].style.display=_$_cdb1[0]:a.rootstyle.children[b].style.display=_$_cdb1[9]}})};a.inputIndexAxis=function(d){jSuites.dropdown(d,{data:[{text:g(_$_cdb1[85]),value:_$_cdb1[86]},{text:g(_$_cdb1[87]),value:_$_cdb1[88]}]})};a.inputLegend=function(d){jSuites.dropdown(d,{data:[{text:g(_$_cdb1[89]),value:_$_cdb1[90]},{text:g(_$_cdb1[91]),value:_$_cdb1[92]},{text:g(_$_cdb1[93]),value:_$_cdb1[94]},{text:g(_$_cdb1[95]),value:_$_cdb1[96]},{text:g(_$_cdb1[97]),value:_$_cdb1[9]}]})};a.open=
function(d,b){d.blur();a.modal.isOpen()&&a.close(!1);a.instance=this;a.container=d;a.chartOptions=null;this.resetSelection();d=JSON.parse(JSON.stringify(b.chart));b=a.tabsElement.querySelectorAll(_$_cdb1[98]);for(var e=0;e<b.length;e++){var k=b[e];if(val=k.getAttribute(_$_cdb1[99])){var c=jSuites.path.call(d,val);c||(c=k.getAttribute(_$_cdb1[100]),k.type===_$_cdb1[101]&&(c=c===_$_cdb1[102]?!0:!1));k[_$_cdb1[103]]&&(a[k[_$_cdb1[103]]]=c)}}a.series=d.data.datasets;a.chartOptions=d;a.modal.open()};a.onchange=
function(d,b){if(a.chartOptions){var e=d=null;if(b&&b.length)for(var k=0;k<b.length;k++){var c=b[k].element;d=c.type==_$_cdb1[101]?c.checked:typeof c.val===_$_cdb1[104]?c.val():c.value;(e=c.getAttribute(_$_cdb1[99]))&&jSuites.path.call(a.chartOptions,e,d)}a.chartOptions&&(f&&clearTimeout(f),f=setTimeout(function(){a.container&&a.container.update(a.chartOptions);f=null},50))}};a.close=function(d){a.container&&(!0===d?a.container.save(JSON.parse(JSON.stringify(a.chartOptions))):a.container.save(),a.container=
null);a.modal.isOpen()&&a.modal.close()};return lemonade.element(h,a,{Series:F})},H=function(){var a={destroyCell:function(f,h,d,b){f.classList.remove(_$_cdb1[106]);b.records[d][h].chart.remove();b.records[d][h].chart=null;b.value(h,d,_$_cdb1[0])},createCell:function(f,h,d,b,e,k){var c=e.records[b][d].chart;if(!c)f.classList.add(_$_cdb1[106]),f.classList.add(_$_cdb1[5]),c=document.createElement(_$_cdb1[107]),c.classList.add(_$_cdb1[108]),c.classList.add(_$_cdb1[109]),c.classList.add(_$_cdb1[110]),
c.setAttribute(_$_cdb1[111],900),c.style.width=_$_cdb1[21],c.style.height=_$_cdb1[112],c.style.zIndex=3,f.ondblclick=function(){c.style.display=_$_cdb1[0]},c.refresh=function(l){if(!l){l=parseInt(c.style.top)||0;var m=parseInt(c.style.left)||0,n=parseInt(c.style.width)||400,r=parseInt(c.style.height)||300,q=f.getAttribute(_$_cdb1[113]),u=f.getAttribute(_$_cdb1[114]);e.updateProperty([{x:q,y:u,value:{top:l,left:m,width:n,height:r}}],null,null,!0)}},c.update=function(l){var m=f.getAttribute(_$_cdb1[113]),
n=f.getAttribute(_$_cdb1[114]);null==l&&(l=k.chart);w(e,m,n,l)},c[_$_cdb1[57]]=function(){var l=f.getAttribute(_$_cdb1[113]),m=f.getAttribute(_$_cdb1[114]);e.setProperty(l,m,_$_cdb1[0])},c.dblclick=function(){e.options.editable&&e.parent.plugins.charts.settings.open.call(e,c,k)},c.contextmenu=function(l){if(p.current&&p.current.options.editable){var m=[];m.push({icon:_$_cdb1[115],title:g(_$_cdb1[116]),onclick:function(){for(var n=c,r=n.parentNode.querySelectorAll(_$_cdb1[105]),q=0,u,x=0;x<r.length;x++)u=
parseInt(r[x].style.zIndex),u>q&&(q=u);n.style.zIndex=q+1}});m.push({icon:_$_cdb1[117],title:g(_$_cdb1[118]),onclick:function(){var n=c;n.parentNode.querySelectorAll(_$_cdb1[105]);n.style.zIndex=3}});m.push({type:_$_cdb1[119]});m.push({icon:_$_cdb1[120],title:g(_$_cdb1[73]),onclick:function(){c.dblclick()}});m.push({icon:_$_cdb1[57],title:g(_$_cdb1[121]),onclick:function(){c[_$_cdb1[57]]()}});p.current.parent.contextmenu.contextmenu.open(l,m)}},c.save=function(l){var m=f.getAttribute(_$_cdb1[113]),
n=f.getAttribute(_$_cdb1[114]);null!=l?e.updateProperty(m,n,{chart:l}):c.update()},e.records[b][d].chart=c,e.content.appendChild(c),k.top&&(c.style.top=parseInt(k.top)+_$_cdb1[122]),k.left&&(c.style.left=parseInt(k.left)+_$_cdb1[122]),k.width&&(c.style.width=parseInt(k.width)+_$_cdb1[122]),k.height&&(c.style.height=parseInt(k.height)+_$_cdb1[122]),k.zIndex&&(c.style.zIndex=parseInt(k.zIndex));else if(h==_$_cdb1[0])return c[_$_cdb1[57]](),_$_cdb1[0];h=_$_cdb1[123]+z(k)+_$_cdb1[27];e.executeFormula(h,
d,b);return h},updateCell:function(f,h,d,b,e,k){h=_$_cdb1[123]+z(k)+_$_cdb1[27];e.executeFormula(h,d,b);return h},openEditor:function(f,h,d,b,e,k){return!1},closeEditor:function(f,h,d,b,e,k){return!1}};a[_$_cdb1[54]]=function(f,h){return _$_cdb1[124]};return a}(),I=function(){var a=this.instance.getProperty(this.x,this.y).chart;a&&w(this.instance,this.x,this.y,a);return _$_cdb1[0]},z=function(a){if((a=JSON.stringify(a.chart).match(/get\(.*?\)/gi))&&a.length){for(var f=0;f<a.length;f++)a[f]=a[f].substring(4,
a[f].length-1);a.join(_$_cdb1[125])}else a=_$_cdb1[0];return a},w=function(a,f,h,d){var b=a.records[h][f].chart;b.innerText=_$_cdb1[0];canvas=document.createElement(_$_cdb1[126]);b.appendChild(canvas);try{var e=JSON.stringify(d);e=e.replace(new RegExp(_$_cdb1[127],_$_cdb1[128]),_$_cdb1[129]);e=a.executeFormula(_$_cdb1[130]+e,null,null,null,!0);if(jSuites.path.call(e,_$_cdb1[131])==_$_cdb1[0]){for(h=f=0;h<e.data.datasets.length;h++)f=Math.max(f,e.data.datasets[h].data.length);jSuites.path.call(e,_$_cdb1[131],
Array.from(Array(f).keys()))}var k=document.createElement(_$_cdb1[132]);k.classList.add(_$_cdb1[133]);k.innerText=_$_cdb1[134];k.onclick=function(){b.style.display=_$_cdb1[9]};b.appendChild(k);b.classList.remove(_$_cdb1[135]);b.removeAttribute(_$_cdb1[136]);new Chart(canvas,e)}catch(c){b.innerText=_$_cdb1[0],b.classList.add(_$_cdb1[135]),b.setAttribute(_$_cdb1[136],jSuites.translate(_$_cdb1[137])),console.error(c)}if(a=A.call(a.parent))e=document.createElement(_$_cdb1[107]),e.style.position=_$_cdb1[138],
e.style.bottom=_$_cdb1[139],e.style.left=_$_cdb1[139],e.innerText=a,e.margin=_$_cdb1[140],b.appendChild(e)},J=function(a,f){var h={toolbar:function(d){d.items.push({content:_$_cdb1[141],type:_$_cdb1[132],title:g(_$_cdb1[20]),onclick:function(){var b=p.current.getRange();b&&(b=b.split(_$_cdb1[23])[1]);h.open(p.current,b,_$_cdb1[0])}});return d},onevent:function(d,b,e,k,c,l){var m=l=null,n=null;if(d==_$_cdb1[142]){for(m=0;m<e.length;m++)for(l=0;l<e[m].length;l++)(_$_cdb1[0]+e[m][l]).substr(0,7)==_$_cdb1[143]&&
(e[m][l]=_$_cdb1[0]);return e}if(d==_$_cdb1[144]||d==_$_cdb1[145])for(m=0;m<c.length;m++)for(l=0;l<c[m].length;l++)c[m][l].element&&c[m][l].element.classList.contains(_$_cdb1[106])&&c[m][l].chart.remove();else if(d==_$_cdb1[146]){var r=c=n=null;d=[];for(m=0;m<b.records.length;m++)for(l=0;l<b.records[m].length;l++)if(void 0!==b.records[m][l].chart){n=b.helpers.getColumnNameFromCoords(l,m);c=JSON.parse(JSON.stringify(b.options.cells[n].chart));r=!1;c.data.labels&&typeof c.data.labels===_$_cdb1[10]&&
0==c.data.labels.toLowerCase().indexOf(_$_cdb1[26])&&(t=b.updateFormula(c.data.labels,e,k),t!==c.data.labels&&(c.data.labels=t,r=!0));if(c.data.datasets.length)for(n=0;n<c.data.datasets.length;n++)c.data.datasets[n].label&&typeof c.data.datasets[n].label===_$_cdb1[10]&&0==c.data.datasets[n].label.toLowerCase().indexOf(_$_cdb1[26])&&(t=b.updateFormula(c.data.datasets[n].label,e,k),t!==c.data.datasets[n].label&&(c.data.datasets[n].label=t,r=!0)),c.data.datasets[n].data&&0==c.data.datasets[n].data.toLowerCase().indexOf(_$_cdb1[26])&&
(t=b.updateFormula(c.data.datasets[n].data,e,k),t!==c.data.datasets[n].data&&(c.data.datasets[n].data=t,r=!0));1==r&&d.push({x:l,y:m,value:{chart:c}})}d.length&&(e=b.parent.ignoreHistory,b.parent.ignoreHistory=!0,b.updateProperty(d),b.parent.ignoreHistory=e)}else d==_$_cdb1[147]&&e.forEach(function(q){var u=b.getProperty(q.x,q.y);if(u.type===_$_cdb1[7])if(q.value.chart)w(b,q.x,q.y,u.chart);else if(q=b.records[q.y][q.x].chart)q.style.top=parseInt(u.top)+_$_cdb1[122],q.style.left=parseInt(u.left)+_$_cdb1[122],
q.style.width=parseInt(u.width)+_$_cdb1[122],q.style.height=parseInt(u.height)+_$_cdb1[122]})},contextMenu:function(d,b,e,k,c,l,m,n){if(null!=b&&null!=e){k={title:g(_$_cdb1[20]),icon:_$_cdb1[141],onclick:function(){var r=p.helpers.getColumnNameFromCoords(b,e);h.open(d,_$_cdb1[0],r)}};l=0;for(let r in c)if(c[r].type==_$_cdb1[119]||c[r].type==_$_cdb1[8]){l=parseInt(r)+1;break}c.splice(l,0,{type:_$_cdb1[119]});c.splice(l,0,k)}},open:function(d,b,e){var k=d.getData(!0);h.input.instance=d;h.input.data=
b;h.input.haveLabels=jSuites.isNumeric(k[0][0])?!1:!0;h.input.cellName=e;h.input.modal.open()}};f=document.createElement(_$_cdb1[107]);a.tools.append(f);lemonade.render(function(){return lemonade.element('\n                <div>\n                    <div><Inputchart @ref="self.input" /></div>\n                    <div><Settings @ref="self.settings" /></div>\n                </div>\n            ',h,{Inputchart:C,Settings:G})},f);return h},y=function(){return!0};y.oninit=function(a,f){a.setPlugins({charts:J});
p.editors.chart||(p.editors.chart=H,p.formula.setFormula({CHARTS:I}))};y.license=function(a){null===p&&(p=this)};return y});
