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

var _$_5b0f='translate;;status;scope;charts;indexOf;This plugin is not included on the scope of this license;License required;match;innerText;length;substring;You need to specify, where the chart would be inserted.;getCell;readonly;contains;classList;You can\'t insert chart in cell ;chart;offsetTop;offsetLeft;line;none;palette;push;datasets;data;getCoordsFromColumnName;helpers;setProperty;value;string;create;parent;backgroundColor;onchange;color;element;instance;Data to analyze;Contains labels;Series based on columns or rows datasets;Column datasets;Row datasets;Choose the cell where the new chart will be inserted;Insert;Cancel;createDropdown;dropdown;createModal;modal;Insert chart;400px;480px;createPicker;lastChild;focus;picker;createWhere;cellName;cancel;close;insert;!;split;toUpperCase;:;getTokensFromRange;getRangeFromTokens;getValue;1;get(;getColumnNameFromCoords;);haveLabels;shift;type;floating;set;toggle;active;panel;open;tracking;add;remove;createColorPicker;borderColor;name;inputPointStyle;200px;Circle;circle;Star;star;Triangle;triangle;Point;point;data-name;getAttribute;inputPalette;map;paletteList;keys;setValue;Serie settings;Background color;Border color;Point style;Fill;Serie data range;Data;Serie label;Label;Serie add;Serie delete;createData;createLabel;label;pie;doughnut;get;#FFFFFF;refresh;delete;splice;series;Configuration;Styling;Chart type;Orientation;Data labels;Series;Title;Legend;X Axis Visibility;X Axis Title;Y Axis Visibility;Y Axis Title;Y Begin at Zero;Begin at Zero;Save;Chart settings;500px;600px;createLabels;labels;createTabs;modern;tabs;inputType;Line chart;Bar chart;bar;Pie chart;Doughnut chart;Radar chart;radar;children;root;all;display;style;rootstyle;inputIndexAxis;Horizontally;x;Vertically;y;inputLegend;Top;top;Left;left;Right;right;Bottom;bottom;Disable;blur;isOpen;container;chartOptions;resetSelection;stringify;parse;[data-path];querySelectorAll;tabsElement;data-path;call;path;data-value;checkbox;true;@bind;checked;val;function;update;save;.jss_chart;parentNode;zIndex;destroyCell;jss_chart_cell;records;updateProperty;px;width;height;createCell;div;createElement;jss_chart;jss_object;jpanel;tabindex;setAttribute;300px;ondblclick;data-x;data-y;dblclick;editable;options;settings;plugins;contextmenu;current;flip_to_front;Flip to front;flip_to_back;Flip to back;divisor;Delete chart;assign;appendChild;content;=CHARTS(;executeFormula;updateCell;openEditor;closeEditor;[CHARTS];getProperty;,;join;canvas;"get((.*?))";gi;$1;replace;=;data.labels;max;from;i;material-icons;minimize;onclick;jss_chart_error;data-error;removeAttribute;Something went wrong;error;position;absolute;0px;margin;40px;toolbar;addchart;getRange;items;onevent;onbeforepaste;substr;=CHARTS;ondeleterow;ondeletecolumn;onchangereferences;cells;toLowerCase;updateFormula;ignoreHistory;onchangeproperty;forEach;contextMenu;getData;input;isNumeric;append;tools;render;oninit;setPlugins;editors;setFormula;formula;license;object;undefined;exports;amd'.split(";");
(function(p,h){typeof exports===_$_5b0f[302]&&typeof module!==_$_5b0f[303]?module[_$_5b0f[304]]=h():typeof define===_$_5b0f[199]&&define[_$_5b0f[305]]?define(h):p[_$_5b0f[4]]=h()})(this,function(){var p=null,h=jSuites[_$_5b0f[0]],A=function(){var a=_$_5b0f[1];8==this[_$_5b0f[2]]?this[_$_5b0f[3]]&&-1!=this[_$_5b0f[3]][_$_5b0f[5]](_$_5b0f[4])||(a=_$_5b0f[6]):a=_$_5b0f[7];return a},v=function(a){var f=a[_$_5b0f[9]][_$_5b0f[8]](/get\(.*?\)/gi);return f&&f[_$_5b0f[10]]?f[0][_$_5b0f[11]](4,f[0][_$_5b0f[10]]-
1):a[_$_5b0f[9]]},B=function(){var a=[];typeof this[_$_5b0f[30]]===_$_5b0f[31]&&(this[_$_5b0f[30]]=[this[_$_5b0f[30]]]);for(var f=0;12>f;f++)a[f]={value:this[_$_5b0f[30]][f]||_$_5b0f[1]};this[_$_5b0f[26]]=a;return lemonade[_$_5b0f[37]]('<div class="jss_chart_palette">\n                <Color @loop="self.data" />\n            </div>',this,{Color:function(){var g=this;g[_$_5b0f[32]]=function(d){jSuites[_$_5b0f[36]](d,{value:g[_$_5b0f[30]],onchange:function(b,e){b=g[_$_5b0f[33]][_$_5b0f[26]][_$_5b0f[5]](g);
g[_$_5b0f[33]][_$_5b0f[30]][b]=e;g[_$_5b0f[33]][_$_5b0f[35]](_$_5b0f[34],g[_$_5b0f[33]][_$_5b0f[30]]);g[_$_5b0f[30]]=e}})};return lemonade[_$_5b0f[37]]('<div style="{{\'background-color:\'+self.value}}" @ready="self.create(this)"></div>',g)}})},C=function(){var a=this,f=null;a[_$_5b0f[38]]=null;var g=`
            <div @ready="self.createModal(this)">
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${h(_$_5b0f[39])}</label>
                         <div @ready="self.createPicker(this)" @bind="self.data"></div>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                      <div class='form-group'>
                          <label class="jswitch" style="margin-bottom: 6px;">
                              <input @bind="self.haveLabels" type="checkbox"><i></i><span class='f1 ml1'>${h(_$_5b0f[40])}</span>
                          </label>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label>${h(_$_5b0f[41])}</label>
                            <select @ready="self.createDropdown(this)">
                                <option value="1">${h(_$_5b0f[42])}</option>
                                <option value="2">${h(_$_5b0f[43])}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${h(_$_5b0f[44])}</label>
                         <div @ready="self.createWhere(this)" data-single="true" @bind="self.cellName"></div>
                      </div>
                   </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <br>
                            <button type="button" class="jbutton dark w100" onclick="self.insert()" style="margin-bottom: 10px">${h(_$_5b0f[45])}</button>
                            <button type="button" class="jbutton dark w100" onclick="self.cancel()">${h(_$_5b0f[46])}</button>
                        </div>
                    </div>
                </div>
           </div>`;a[_$_5b0f[47]]=function(d){f=jSuites[_$_5b0f[48]](d)};a[_$_5b0f[49]]=function(d){a[_$_5b0f[50]]=jSuites[_$_5b0f[50]](d,{title:h(_$_5b0f[51]),closed:!0,width:_$_5b0f[52],height:_$_5b0f[53],backdrop:!1})};a[_$_5b0f[54]]=function(d){p[_$_5b0f[57]](d,function(){a[_$_5b0f[26]]=d[_$_5b0f[9]];jSuites[_$_5b0f[56]](d[_$_5b0f[55]])})};a[_$_5b0f[58]]=function(d){p[_$_5b0f[57]](d,function(){a[_$_5b0f[59]]=d[_$_5b0f[9]];jSuites[_$_5b0f[56]](d[_$_5b0f[55]])})};a[_$_5b0f[60]]=function(){a[_$_5b0f[50]][_$_5b0f[61]]()};
a[_$_5b0f[62]]=function(){var d,b=a[_$_5b0f[26]],e=_$_5b0f[1];-1!=b[_$_5b0f[5]](_$_5b0f[63])&&(b=b[_$_5b0f[64]](_$_5b0f[63]),e=b[0][_$_5b0f[65]]()+_$_5b0f[63],b=b[1]);-1==b[_$_5b0f[5]](_$_5b0f[66])&&(b=b+_$_5b0f[66]+b);b=p[_$_5b0f[28]][_$_5b0f[68]](p[_$_5b0f[28]][_$_5b0f[67]](b));b=b[_$_5b0f[64]](_$_5b0f[66]);var k=p[_$_5b0f[28]][_$_5b0f[27]](b[0]),c=p[_$_5b0f[28]][_$_5b0f[27]](b[1]);b=[];if(f[_$_5b0f[69]]()==_$_5b0f[70])for(var l=k[0];l<=c[0];l++)b[_$_5b0f[24]](_$_5b0f[71]+e+p[_$_5b0f[28]][_$_5b0f[72]](l,
k[1])+_$_5b0f[66]+p[_$_5b0f[28]][_$_5b0f[72]](l,c[1])+_$_5b0f[73]);else for(l=k[1];l<=c[1];l++)b[_$_5b0f[24]](_$_5b0f[71]+e+p[_$_5b0f[28]][_$_5b0f[72]](k[0],l)+_$_5b0f[66]+p[_$_5b0f[28]][_$_5b0f[72]](c[0],l)+_$_5b0f[73]);a[_$_5b0f[74]]&&(d=b[_$_5b0f[75]]());e=a[_$_5b0f[38]];if(k=a[_$_5b0f[59]])if(c=e[_$_5b0f[13]](k),c[_$_5b0f[16]][_$_5b0f[15]](_$_5b0f[14]))alert(h(_$_5b0f[17])+k),b=!1;else{d={type:_$_5b0f[18],top:c[_$_5b0f[19]],left:c[_$_5b0f[20]],chart:{type:_$_5b0f[21],data:{labels:d,datasets:[]},
options:{plugins:{legend:{position:_$_5b0f[22]}}}}};for(c=0;c<b[_$_5b0f[10]];c++)l=jSuites[_$_5b0f[23]](_$_5b0f[18])[0][c%jSuites[_$_5b0f[23]](_$_5b0f[18])[0][_$_5b0f[10]]],d[_$_5b0f[18]][_$_5b0f[26]][_$_5b0f[25]][_$_5b0f[24]]({data:b[c],borderColor:l,backgroundColor:l});b=p[_$_5b0f[28]][_$_5b0f[27]](k);e[_$_5b0f[29]](b[0],b[1],d);b=!0}else alert(h(_$_5b0f[12])),b=!1;if(b)a[_$_5b0f[50]][_$_5b0f[61]]()};return lemonade[_$_5b0f[37]](g,a)},D=function(){var a=this;a[_$_5b0f[76]]=_$_5b0f[77];a[_$_5b0f[32]]=
function(g){g[_$_5b0f[77]]=a};a[_$_5b0f[78]]=function(g,d){a[_$_5b0f[33]][g]=d;a[_$_5b0f[33]][_$_5b0f[35]](g,[])};a[_$_5b0f[79]]=function(){if(a[_$_5b0f[81]][_$_5b0f[16]][_$_5b0f[15]](_$_5b0f[80]))a[_$_5b0f[61]]();else a[_$_5b0f[82]]()};a[_$_5b0f[82]]=function(){jSuites[_$_5b0f[83]](a,!0);a[_$_5b0f[81]][_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[80])};a[_$_5b0f[61]]=function(){jSuites[_$_5b0f[83]](a,!1);a[_$_5b0f[81]][_$_5b0f[16]][_$_5b0f[85]](_$_5b0f[80])};a[_$_5b0f[86]]=function(g){jSuites[_$_5b0f[36]](g,
{value:a[_$_5b0f[33]][_$_5b0f[87]],onchange:function(d,b){a[_$_5b0f[78]](d[_$_5b0f[88]],b)},closeOnChange:!0})};a[_$_5b0f[89]]=function(g){jSuites[_$_5b0f[48]](g,{width:_$_5b0f[90],data:[{text:h(_$_5b0f[91]),value:_$_5b0f[92]},{text:h(_$_5b0f[93]),value:_$_5b0f[94]},{text:h(_$_5b0f[95]),value:_$_5b0f[96]},{text:h(_$_5b0f[97]),value:_$_5b0f[98]}],onchange:function(d,b,e,k){a[_$_5b0f[78]](d[_$_5b0f[100]](_$_5b0f[99]),k)}})};a[_$_5b0f[101]]=function(g){var d=Object[_$_5b0f[104]](jSuites[_$_5b0f[103]])[_$_5b0f[102]](function(e){return{text:h(e),
value:e}}),b=jSuites[_$_5b0f[48]](g,{data:d,onchange:function(e,k,c,l){if(l===_$_5b0f[1])b[_$_5b0f[105]](c)}})};a[_$_5b0f[34]]=a[_$_5b0f[33]][_$_5b0f[34]];var f=`<div @ready="self.create(this)">
                <button type="button" title="${h(_$_5b0f[106])}" onclick="self.toggle(this)">
                    <i class="material-icons small">settings</i>
                </button><div>
                    <div class="jss_chart_floating" @ref="self.panel">
                        <i class="cursor right material-icons" onclick="self.toggle()">close</i>
                        <div class='row line bar radar'>
                            <div class="column f1">
                                <div class="form-group">
                                <label>${h(_$_5b0f[107])}</label>
                                <Palette name="backgroundColor" value="{{self.backgroundColor}}" onchange="{{self.set}}" />
                                </div>
                            </div>
                        </div>
                        <div class='row line pie doughnut radar'>
                            <div class="column f1">
                                <div class="form-group">
                                 <label>${h(_$_5b0f[108])}</label>
                                 <input @ready="self.createColorPicker(this)" name="borderColor" />
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label>${h(_$_5b0f[109])}</label>
                                    <div @ready="self.inputPointStyle(this)" data-name="pointStyle"></div>
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch" style="margin-bottom: 6px;">
                                        <input type="checkbox" name="fill" oninput="self.set(this.name, this.value)"><i></i><span class='f1 ml1'>${h(_$_5b0f[110])}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;return lemonade[_$_5b0f[37]](f,a,{Palette:B})},E=function(){this[_$_5b0f[35]]=this[_$_5b0f[33]][_$_5b0f[35]];var a=`<div class="jss_chart_series">
                <div @ready="self.parent.createData(this, self)"  @bind="self.data" title="${h(_$_5b0f[111])}" data-placeholder="${h(_$_5b0f[112])}" contenteditable="true" style="width: 190px;"></div>
                <div @ready="self.parent.createLabel(this, self)" @bind="self.label" title="${h(_$_5b0f[113])}" data-placeholder="${h(_$_5b0f[114])}" data-single="true" contenteditable="true" style="width: 150px;"></div>
                <Config />
                <button type="button" onclick="self.parent.add()" title="${h(_$_5b0f[115])}"><i class="material-icons small">add</i></button>
                <button type="button" onclick="self.parent.delete(self)" title="${h(_$_5b0f[116])}"><i class="material-icons small">delete</i></button>
            </div>`;return lemonade[_$_5b0f[37]](a,this,{Config:D})},F=function(){var a=this;a[_$_5b0f[117]]=function(f,g){p[_$_5b0f[57]](f,function(){f[_$_5b0f[9]]?(g[_$_5b0f[26]]=_$_5b0f[71]+v(f)+_$_5b0f[73],jSuites[_$_5b0f[56]](f)):g[_$_5b0f[26]]=_$_5b0f[1]})};a[_$_5b0f[118]]=function(f,g){p[_$_5b0f[57]](f,function(){f[_$_5b0f[9]]?(g[_$_5b0f[119]]=_$_5b0f[71]+v(f)+_$_5b0f[73],jSuites[_$_5b0f[56]](f)):g[_$_5b0f[119]]=_$_5b0f[1]})};a[_$_5b0f[84]]=function(){if(-1<[_$_5b0f[120],_$_5b0f[121]][_$_5b0f[5]](a[_$_5b0f[33]][_$_5b0f[76]])){var f=
jSuites[_$_5b0f[23]][_$_5b0f[122]](_$_5b0f[18])[0];var g=_$_5b0f[123]}else f=jSuites[_$_5b0f[23]][_$_5b0f[122]](_$_5b0f[18])[0][a[_$_5b0f[26]][_$_5b0f[10]]],g=jSuites[_$_5b0f[23]][_$_5b0f[122]](_$_5b0f[18])[0][a[_$_5b0f[26]][_$_5b0f[10]]];a[_$_5b0f[26]][_$_5b0f[24]]({backgroundColor:f,borderColor:g});a[_$_5b0f[124]](_$_5b0f[26])};a[_$_5b0f[125]]=function(f){a[_$_5b0f[26]][_$_5b0f[126]](a[_$_5b0f[26]][_$_5b0f[5]](f),1);if(0===a[_$_5b0f[26]][_$_5b0f[10]])a[_$_5b0f[84]]();else a[_$_5b0f[124]](_$_5b0f[26])};
return lemonade[_$_5b0f[37]]('<div><Item @loop="self.data" /></div>',a,{Item:E})},G=function(){var a=this,f=null;a[_$_5b0f[127]]=[];var g=`
           <div @ready="self.createModal(this)">
              <div role='tabs' @ref="self.tabsElement" @ready="self.createTabs(this)">
                 <div role='headers'>
                    <div style="width: 120px;">${h(_$_5b0f[128])}</div>
                    <div style="width: 120px;">${h(_$_5b0f[129])}</div>
                 </div>
                 <div role='content'>
                    <div @ref="self.root" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_5b0f[130])}</label>
                                <div @ready="self.inputType(this)" @bind="self.type" data-path="type" data-value="line"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row line bar'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_5b0f[131])}</label>
                                <div @ready="self.inputIndexAxis(this)" @bind="self.orientation" data-path="options.indexAxis" data-value="x"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_5b0f[132])}</label>
                                <div @ready="self.createLabels(this, self)" @bind="self.labels" data-path="data.labels"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_5b0f[133])}</label>
                                <div><Series data="{{self.series}}" onchange="{{self.onchange}}" /></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div @ref="self.rootstyle" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_5b0f[134])}</label>
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
                                <label>${h(_$_5b0f[135])}</label>
                                <div @ready="self.inputLegend(this)" @bind="self.legend" data-path="options.plugins.legend.position" data-value="top"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${h(_$_5b0f[136])}</span> <input @bind="self.xAxis" data-path="options.scales.x.display" data-value="true" type="checkbox" name="xAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all' style="{{!self.xAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${h(_$_5b0f[137])}' name='title' @bind="self.titleX" data-path="options.scales.x.title.text" class="jss_object"/>
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
                                    <span class='f1'>${h(_$_5b0f[138])}</span> <input @bind="self.yAxis" data-path="options.scales.y.display" data-value="true" type="checkbox" name="yAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all'  style="{{!self.yAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${h(_$_5b0f[139])}' name='title' @bind="self.titleY" data-path="options.scales.y.title.text" class="jss_object"/>
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
                                    <span class='f1'>${h(_$_5b0f[140])}</span> <input @bind="self.yAxisBeginAtZero" data-path="options.scales.y.beginAtZero" data-value="false" type="checkbox" name="yAxisBeginAtoZero"><i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class='row radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${h(_$_5b0f[141])}</span> <input @bind="self.beginAtZero" data-path="options.scales.r.beginAtZero" data-value="false" type="checkbox" name="beginAtoZero"><i></i>
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
                         <button type="button" class="jbutton dark w100" onclick="self.close(true)">${h(_$_5b0f[142])}</button>
                         <button type="button" class="jbutton dark w100" onclick="self.close(false)" style="margin-top: 4px">${h(_$_5b0f[46])}</button>
                     </div>
                 </div>
              </div>
           </div>
       `;a[_$_5b0f[49]]=function(d){a[_$_5b0f[50]]=jSuites[_$_5b0f[50]](d,{title:h(_$_5b0f[143]),closed:!0,width:_$_5b0f[144],height:_$_5b0f[145],backdrop:!1,onclose:function(){a[_$_5b0f[61]](!1)}})};a[_$_5b0f[146]]=function(d,b){p[_$_5b0f[57]](d,function(){d[_$_5b0f[9]]?(b[_$_5b0f[147]]=_$_5b0f[71]+v(d)+_$_5b0f[73],jSuites[_$_5b0f[56]](d)):b[_$_5b0f[147]]=_$_5b0f[1]})};a[_$_5b0f[148]]=function(d){jSuites[_$_5b0f[150]](d,{palette:_$_5b0f[149],animation:!0})};a[_$_5b0f[151]]=function(d){jSuites[_$_5b0f[48]](d,
{data:[{text:h(_$_5b0f[152]),value:_$_5b0f[21]},{text:h(_$_5b0f[153]),value:_$_5b0f[154]},{text:h(_$_5b0f[155]),value:_$_5b0f[120]},{text:h(_$_5b0f[156]),value:_$_5b0f[121]},{text:h(_$_5b0f[157]),value:_$_5b0f[158]}],onchange:function(b,e,k,c){for(b=0;b<a[_$_5b0f[160]][_$_5b0f[159]][_$_5b0f[10]];b++)a[_$_5b0f[160]][_$_5b0f[159]][b][_$_5b0f[16]][_$_5b0f[15]](_$_5b0f[161])||a[_$_5b0f[160]][_$_5b0f[159]][b][_$_5b0f[16]][_$_5b0f[15]](c)?a[_$_5b0f[160]][_$_5b0f[159]][b][_$_5b0f[163]][_$_5b0f[162]]=_$_5b0f[1]:
a[_$_5b0f[160]][_$_5b0f[159]][b][_$_5b0f[163]][_$_5b0f[162]]=_$_5b0f[22];for(b=0;b<a[_$_5b0f[164]][_$_5b0f[159]][_$_5b0f[10]];b++)a[_$_5b0f[164]][_$_5b0f[159]][b][_$_5b0f[16]][_$_5b0f[15]](_$_5b0f[161])||a[_$_5b0f[164]][_$_5b0f[159]][b][_$_5b0f[16]][_$_5b0f[15]](c)?a[_$_5b0f[164]][_$_5b0f[159]][b][_$_5b0f[163]][_$_5b0f[162]]=_$_5b0f[1]:a[_$_5b0f[164]][_$_5b0f[159]][b][_$_5b0f[163]][_$_5b0f[162]]=_$_5b0f[22]}})};a[_$_5b0f[165]]=function(d){jSuites[_$_5b0f[48]](d,{data:[{text:h(_$_5b0f[166]),value:_$_5b0f[167]},
{text:h(_$_5b0f[168]),value:_$_5b0f[169]}]})};a[_$_5b0f[170]]=function(d){jSuites[_$_5b0f[48]](d,{data:[{text:h(_$_5b0f[171]),value:_$_5b0f[172]},{text:h(_$_5b0f[173]),value:_$_5b0f[174]},{text:h(_$_5b0f[175]),value:_$_5b0f[176]},{text:h(_$_5b0f[177]),value:_$_5b0f[178]},{text:h(_$_5b0f[179]),value:_$_5b0f[22]}]})};a[_$_5b0f[82]]=function(d,b){d[_$_5b0f[180]]();if(a[_$_5b0f[50]][_$_5b0f[181]]())a[_$_5b0f[61]](!1);a[_$_5b0f[38]]=this;a[_$_5b0f[182]]=d;a[_$_5b0f[183]]=null;this[_$_5b0f[184]]();d=JSON[_$_5b0f[186]](JSON[_$_5b0f[185]](b[_$_5b0f[18]]));
b=a[_$_5b0f[189]][_$_5b0f[188]](_$_5b0f[187]);for(var e=0;e<b[_$_5b0f[10]];e++){var k=b[e];if(val=k[_$_5b0f[100]](_$_5b0f[190])){var c=jSuites[_$_5b0f[192]][_$_5b0f[191]](d,val);c||(c=k[_$_5b0f[100]](_$_5b0f[193]),k[_$_5b0f[76]]===_$_5b0f[194]&&(c=c===_$_5b0f[195]?!0:!1));k[_$_5b0f[196]]&&(a[k[_$_5b0f[196]]]=c)}}a[_$_5b0f[127]]=d[_$_5b0f[26]][_$_5b0f[25]];a[_$_5b0f[183]]=d;a[_$_5b0f[50]][_$_5b0f[82]]()};a[_$_5b0f[35]]=function(d,b){if(a[_$_5b0f[183]]){var e=d=null;if(b&&b[_$_5b0f[10]])for(var k=0;k<
b[_$_5b0f[10]];k++)if(e=b[k][_$_5b0f[37]],d=e[_$_5b0f[76]]==_$_5b0f[194]?e[_$_5b0f[197]]:typeof e[_$_5b0f[198]]===_$_5b0f[199]?e[_$_5b0f[198]]():e[_$_5b0f[30]],e=e[_$_5b0f[100]](_$_5b0f[190]))jSuites[_$_5b0f[192]][_$_5b0f[191]](a[_$_5b0f[183]],e,d);a[_$_5b0f[183]]&&(f&&clearTimeout(f),f=setTimeout(function(){if(a[_$_5b0f[182]])a[_$_5b0f[182]][_$_5b0f[200]](a[_$_5b0f[183]]);f=null},50))}};a[_$_5b0f[61]]=function(d){if(a[_$_5b0f[182]]){if(!0===d)a[_$_5b0f[182]][_$_5b0f[201]](JSON[_$_5b0f[186]](JSON[_$_5b0f[185]](a[_$_5b0f[183]])));
else a[_$_5b0f[182]][_$_5b0f[201]]();a[_$_5b0f[182]]=null}if(a[_$_5b0f[50]][_$_5b0f[181]]())a[_$_5b0f[50]][_$_5b0f[61]]()};return lemonade[_$_5b0f[37]](g,a,{Series:F})},H=function(){var a={};a[_$_5b0f[205]]=function(f,g,d,b){f[_$_5b0f[16]][_$_5b0f[85]](_$_5b0f[206]);b[_$_5b0f[207]][d][g][_$_5b0f[18]][_$_5b0f[85]]();b[_$_5b0f[207]][d][g][_$_5b0f[18]]=null;b[_$_5b0f[30]](g,d,_$_5b0f[1])};a[_$_5b0f[208]]=function(f,g,d,b){if(f=d[_$_5b0f[207]][g][f][_$_5b0f[18]])f[_$_5b0f[163]][_$_5b0f[172]]=parseInt(b[_$_5b0f[172]])+
_$_5b0f[209],f[_$_5b0f[163]][_$_5b0f[174]]=parseInt(b[_$_5b0f[174]])+_$_5b0f[209],f[_$_5b0f[163]][_$_5b0f[210]]=parseInt(b[_$_5b0f[210]])+_$_5b0f[209],f[_$_5b0f[163]][_$_5b0f[211]]=parseInt(b[_$_5b0f[211]])+_$_5b0f[209]};a[_$_5b0f[212]]=function(f,g,d,b,e,k){var c=e[_$_5b0f[207]][b][d][_$_5b0f[18]];if(!c)f[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[206]),f[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[14]),c=document[_$_5b0f[214]](_$_5b0f[213]),c[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[215]),c[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[216]),
c[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[217]),c[_$_5b0f[219]](_$_5b0f[218],900),c[_$_5b0f[163]][_$_5b0f[210]]=_$_5b0f[52],c[_$_5b0f[163]][_$_5b0f[211]]=_$_5b0f[220],c[_$_5b0f[163]][_$_5b0f[204]]=3,f[_$_5b0f[221]]=function(){c[_$_5b0f[163]][_$_5b0f[162]]=_$_5b0f[1]},c[_$_5b0f[124]]=function(l){if(!l){l=parseInt(c[_$_5b0f[163]][_$_5b0f[172]])||0;var m=parseInt(c[_$_5b0f[163]][_$_5b0f[174]])||0,n=parseInt(c[_$_5b0f[163]][_$_5b0f[210]])||400,q=parseInt(c[_$_5b0f[163]][_$_5b0f[211]])||300,r=f[_$_5b0f[100]](_$_5b0f[222]),
u=f[_$_5b0f[100]](_$_5b0f[223]);e[_$_5b0f[208]]([{x:r,y:u,value:{top:l,left:m,width:n,height:q}}])}},c[_$_5b0f[200]]=function(l){var m=f[_$_5b0f[100]](_$_5b0f[222]),n=f[_$_5b0f[100]](_$_5b0f[223]);null==l&&(l=k[_$_5b0f[18]]);w(e,m,n,l)},c[_$_5b0f[125]]=function(){var l=f[_$_5b0f[100]](_$_5b0f[222]),m=f[_$_5b0f[100]](_$_5b0f[223]);e[_$_5b0f[29]](l,m,_$_5b0f[1])},c[_$_5b0f[224]]=function(){if(e[_$_5b0f[226]][_$_5b0f[225]])e[_$_5b0f[33]][_$_5b0f[228]][_$_5b0f[4]][_$_5b0f[227]][_$_5b0f[82]][_$_5b0f[191]](e,
c,k)},c[_$_5b0f[229]]=function(l){if(p[_$_5b0f[230]]&&p[_$_5b0f[230]][_$_5b0f[226]][_$_5b0f[225]]){var m=[];m[_$_5b0f[24]]({icon:_$_5b0f[231],title:h(_$_5b0f[232]),onclick:function(){for(var n=c,q=n[_$_5b0f[203]][_$_5b0f[188]](_$_5b0f[202]),r=0,u,x=0;x<q[_$_5b0f[10]];x++)u=parseInt(q[x][_$_5b0f[163]][_$_5b0f[204]]),u>r&&(r=u);n[_$_5b0f[163]][_$_5b0f[204]]=r+1}});m[_$_5b0f[24]]({icon:_$_5b0f[233],title:h(_$_5b0f[234]),onclick:function(){var n=c;n[_$_5b0f[203]][_$_5b0f[188]](_$_5b0f[202]);n[_$_5b0f[163]][_$_5b0f[204]]=
3}});m[_$_5b0f[24]]({type:_$_5b0f[235]});m[_$_5b0f[24]]({icon:_$_5b0f[227],title:h(_$_5b0f[143]),onclick:function(){c[_$_5b0f[224]]()}});m[_$_5b0f[24]]({icon:_$_5b0f[125],title:h(_$_5b0f[236]),onclick:function(){c[_$_5b0f[125]]()}});p[_$_5b0f[230]][_$_5b0f[33]][_$_5b0f[229]][_$_5b0f[229]][_$_5b0f[82]](l,m)}},c[_$_5b0f[201]]=function(l){var m=f[_$_5b0f[100]](_$_5b0f[222]),n=f[_$_5b0f[100]](_$_5b0f[223]);if(null!=l){var q=Object[_$_5b0f[237]]({},k);q[_$_5b0f[18]]=l;e[_$_5b0f[29]](m,n,q)}else c[_$_5b0f[200]]()},
e[_$_5b0f[207]][b][d][_$_5b0f[18]]=c,e[_$_5b0f[239]][_$_5b0f[238]](c),k[_$_5b0f[172]]&&(c[_$_5b0f[163]][_$_5b0f[172]]=parseInt(k[_$_5b0f[172]])+_$_5b0f[209]),k[_$_5b0f[174]]&&(c[_$_5b0f[163]][_$_5b0f[174]]=parseInt(k[_$_5b0f[174]])+_$_5b0f[209]),k[_$_5b0f[210]]&&(c[_$_5b0f[163]][_$_5b0f[210]]=parseInt(k[_$_5b0f[210]])+_$_5b0f[209]),k[_$_5b0f[211]]&&(c[_$_5b0f[163]][_$_5b0f[211]]=parseInt(k[_$_5b0f[211]])+_$_5b0f[209]),k[_$_5b0f[204]]&&(c[_$_5b0f[163]][_$_5b0f[204]]=parseInt(k[_$_5b0f[204]]));else if(g==
_$_5b0f[1])return c[_$_5b0f[125]](),_$_5b0f[1];g=_$_5b0f[240]+z(k)+_$_5b0f[73];e[_$_5b0f[241]](g,d,b);return g};a[_$_5b0f[242]]=function(f,g,d,b,e,k){g=_$_5b0f[240]+z(k)+_$_5b0f[73];e[_$_5b0f[241]](g,d,b);return g};a[_$_5b0f[243]]=function(f,g,d,b,e,k){return!1};a[_$_5b0f[244]]=function(f,g,d,b,e,k){return!1};a[_$_5b0f[122]]=function(f,g){return _$_5b0f[245]};return a}(),I=function(){var a=this[_$_5b0f[38]][_$_5b0f[246]](this[_$_5b0f[167]],this[_$_5b0f[169]])[_$_5b0f[18]];a&&w(this[_$_5b0f[38]],this[_$_5b0f[167]],
this[_$_5b0f[169]],a);return _$_5b0f[1]},z=function(a){if((a=JSON[_$_5b0f[185]](a[_$_5b0f[18]])[_$_5b0f[8]](/get\(.*?\)/gi))&&a[_$_5b0f[10]]){for(var f=0;f<a[_$_5b0f[10]];f++)a[f]=a[f][_$_5b0f[11]](4,a[f][_$_5b0f[10]]-1);a[_$_5b0f[248]](_$_5b0f[247])}else a=_$_5b0f[1];return a},w=function(a,f,g,d){var b=a[_$_5b0f[207]][g][f][_$_5b0f[18]];b[_$_5b0f[9]]=_$_5b0f[1];canvas=document[_$_5b0f[214]](_$_5b0f[249]);b[_$_5b0f[238]](canvas);try{var e=JSON[_$_5b0f[185]](d);e=e[_$_5b0f[253]](new RegExp(_$_5b0f[250],
_$_5b0f[251]),_$_5b0f[252]);e=a[_$_5b0f[241]](_$_5b0f[254]+e,null,null,null,!0);if(jSuites[_$_5b0f[192]][_$_5b0f[191]](e,_$_5b0f[255])==_$_5b0f[1]){for(g=f=0;g<e[_$_5b0f[26]][_$_5b0f[25]][_$_5b0f[10]];g++)f=Math[_$_5b0f[256]](f,e[_$_5b0f[26]][_$_5b0f[25]][g][_$_5b0f[26]][_$_5b0f[10]]);jSuites[_$_5b0f[192]][_$_5b0f[191]](e,_$_5b0f[255],Array[_$_5b0f[257]](Array(f)[_$_5b0f[104]]()))}var k=document[_$_5b0f[214]](_$_5b0f[258]);k[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[259]);k[_$_5b0f[9]]=_$_5b0f[260];k[_$_5b0f[261]]=
function(){b[_$_5b0f[163]][_$_5b0f[162]]=_$_5b0f[22]};b[_$_5b0f[238]](k);b[_$_5b0f[16]][_$_5b0f[85]](_$_5b0f[262]);b[_$_5b0f[264]](_$_5b0f[263]);new Chart(canvas,e)}catch(c){b[_$_5b0f[9]]=_$_5b0f[1],b[_$_5b0f[16]][_$_5b0f[84]](_$_5b0f[262]),b[_$_5b0f[219]](_$_5b0f[263],jSuites[_$_5b0f[0]](_$_5b0f[265])),console[_$_5b0f[266]](c)}if(a=A[_$_5b0f[191]](a[_$_5b0f[33]]))e=document[_$_5b0f[214]](_$_5b0f[213]),e[_$_5b0f[163]][_$_5b0f[267]]=_$_5b0f[268],e[_$_5b0f[163]][_$_5b0f[178]]=_$_5b0f[269],e[_$_5b0f[163]][_$_5b0f[174]]=
_$_5b0f[269],e[_$_5b0f[9]]=a,e[_$_5b0f[270]]=_$_5b0f[271],b[_$_5b0f[238]](e)},J=function(a,f){var g={};g[_$_5b0f[272]]=function(d){d[_$_5b0f[275]][_$_5b0f[24]]({content:_$_5b0f[273],type:_$_5b0f[258],title:h(_$_5b0f[51]),onclick:function(){var b=p[_$_5b0f[230]][_$_5b0f[274]]();b&&(b=b[_$_5b0f[64]](_$_5b0f[63])[1]);g[_$_5b0f[82]](p[_$_5b0f[230]],b,_$_5b0f[1])}});return d};g[_$_5b0f[276]]=function(d,b,e,k,c,l){var m=l=null,n=null;if(d==_$_5b0f[277]){for(m=0;m<e[_$_5b0f[10]];m++)for(l=0;l<e[m][_$_5b0f[10]];l++)(_$_5b0f[1]+
e[m][l])[_$_5b0f[278]](0,7)==_$_5b0f[279]&&(e[m][l]=_$_5b0f[1]);return e}if(d==_$_5b0f[280]||d==_$_5b0f[281])for(m=0;m<c[_$_5b0f[10]];m++)for(l=0;l<c[m][_$_5b0f[10]];l++){if(c[m][l][_$_5b0f[37]]&&c[m][l][_$_5b0f[37]][_$_5b0f[16]][_$_5b0f[15]](_$_5b0f[206]))c[m][l][_$_5b0f[18]][_$_5b0f[85]]()}else if(d==_$_5b0f[282]){var q=c=n=null;d=[];for(m=0;m<b[_$_5b0f[207]][_$_5b0f[10]];m++)for(l=0;l<b[_$_5b0f[207]][m][_$_5b0f[10]];l++)if(void 0!==b[_$_5b0f[207]][m][l][_$_5b0f[18]]){n=b[_$_5b0f[28]][_$_5b0f[72]](l,
m);c=Object[_$_5b0f[237]]({},b[_$_5b0f[226]][_$_5b0f[283]][n][_$_5b0f[18]]);q=!1;c[_$_5b0f[26]][_$_5b0f[147]]&&0==c[_$_5b0f[26]][_$_5b0f[147]][_$_5b0f[284]]()[_$_5b0f[5]](_$_5b0f[71])&&(t=b[_$_5b0f[285]](c[_$_5b0f[26]][_$_5b0f[147]],e,k),t!==c[_$_5b0f[26]][_$_5b0f[147]]&&(c[_$_5b0f[26]][_$_5b0f[147]]=t,q=!0));if(c[_$_5b0f[26]][_$_5b0f[25]][_$_5b0f[10]])for(n=0;n<c[_$_5b0f[26]][_$_5b0f[25]][_$_5b0f[10]];n++)c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[119]]&&0==c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[119]][_$_5b0f[284]]()[_$_5b0f[5]](_$_5b0f[71])&&
(t=b[_$_5b0f[285]](c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[119]],e,k),t!==c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[119]]&&(c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[119]]=t,q=!0)),c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[26]]&&0==c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[26]][_$_5b0f[284]]()[_$_5b0f[5]](_$_5b0f[71])&&(t=b[_$_5b0f[285]](c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[26]],e,k),t!==c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[26]]&&(c[_$_5b0f[26]][_$_5b0f[25]][n][_$_5b0f[26]]=t,q=!0));if(1==q)d[_$_5b0f[24]]({x:l,
y:m,value:{chart:c}})}d[_$_5b0f[10]]&&(e=b[_$_5b0f[33]][_$_5b0f[286]],b[_$_5b0f[33]][_$_5b0f[286]]=!0,b[_$_5b0f[208]](d),b[_$_5b0f[33]][_$_5b0f[286]]=e)}else if(d==_$_5b0f[287])e[_$_5b0f[288]](function(r){var u=b[_$_5b0f[246]](r[_$_5b0f[167]],r[_$_5b0f[169]])[_$_5b0f[18]];u&&w(b,r[_$_5b0f[167]],r[_$_5b0f[169]],u)})};g[_$_5b0f[289]]=function(d,b,e,k,c,l,m,n){if(null!=b&&null!=e){k={title:h(_$_5b0f[51]),icon:_$_5b0f[273],onclick:function(){var q=p[_$_5b0f[28]][_$_5b0f[72]](b,e);g[_$_5b0f[82]](d,_$_5b0f[1],
q)}};l=0;for(let q in c)if(c[q][_$_5b0f[76]]==_$_5b0f[235]||c[q][_$_5b0f[76]]==_$_5b0f[21]){l=parseInt(q)+1;break}c[_$_5b0f[126]](l,0,{type:_$_5b0f[235]});c[_$_5b0f[126]](l,0,k)}};g[_$_5b0f[82]]=function(d,b,e){var k=d[_$_5b0f[290]](!0);g[_$_5b0f[291]][_$_5b0f[38]]=d;g[_$_5b0f[291]][_$_5b0f[26]]=b;g[_$_5b0f[291]][_$_5b0f[74]]=jSuites[_$_5b0f[292]](k[0][0])?!1:!0;g[_$_5b0f[291]][_$_5b0f[59]]=e;g[_$_5b0f[291]][_$_5b0f[50]][_$_5b0f[82]]()};f=document[_$_5b0f[214]](_$_5b0f[213]);a[_$_5b0f[294]][_$_5b0f[293]](f);
lemonade[_$_5b0f[295]](function(){return lemonade[_$_5b0f[37]]('\n                <div>\n                    <div><Inputchart @ref="self.input" /></div>\n                    <div><Settings @ref="self.settings" /></div>\n                </div>\n            ',g,{Inputchart:C,Settings:G})},f);return g},y=function(){return!0};y[_$_5b0f[296]]=function(a,f){a[_$_5b0f[297]]({charts:J});p[_$_5b0f[298]][_$_5b0f[18]]||(p[_$_5b0f[298]][_$_5b0f[18]]=H,p[_$_5b0f[300]][_$_5b0f[299]]({CHARTS:I}))};y[_$_5b0f[301]]=
function(a){null===p&&(p=this)};return y});
