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
    var Chart = require('chart.js/dist/Chart.min.js');
}

var _$_cdda='translate;;status;scope;charts;indexOf;This plugin is not included on the scope of this license;License required;match;innerText;length;substring;You need to specify, where the chart would be inserted.;getCell;readonly;contains;classList;You can\'t insert chart in cell ;chart;offsetTop;offsetLeft;line;none;palette;push;datasets;data;getCoordsFromColumnName;helpers;setProperty;value;string;create;parent;backgroundColor;onchange;color;element;instance;Data to analyze;Contains labels;Series based on columns or rows datasets;Column datasets;Row datasets;Choose the cell where the new chart will be inserted;Insert;Cancel;createDropdown;dropdown;createModal;modal;Insert chart;400px;480px;createPicker;lastChild;focus;picker;createWhere;cellName;cancel;close;insert;!;split;toUpperCase;:;getTokensFromRange;getRangeFromTokens;getValue;1;get(;getColumnNameFromCoords;);haveLabels;shift;type;floating;set;toggle;active;panel;open;tracking;add;remove;createColorPicker;borderColor;name;inputPointStyle;200px;Circle;circle;Star;star;Triangle;triangle;Point;point;data-name;getAttribute;inputPalette;map;paletteList;keys;setValue;Serie settings;Background color;Border color;Point style;Fill;Serie data range;Data;Serie label;Label;Serie add;Serie delete;createData;createLabel;label;pie;doughnut;get;#FFFFFF;refresh;delete;splice;series;Configuration;Styling;Chart type;Orientation;Data labels;Series;Title;Legend;X Axis Visibility;X Axis Title;Y Axis Visibility;Y Axis Title;Y Begin at Zero;Begin at Zero;Save;Chart settings;500px;600px;createLabels;labels;createTabs;modern;tabs;inputType;Line chart;Bar chart;bar;Pie chart;Doughnut chart;Radar chart;radar;children;root;all;display;style;rootstyle;inputIndexAxis;Horizontally;x;Vertically;y;inputLegend;Top;top;Left;left;Right;right;Bottom;bottom;Disable;blur;isOpen;container;chartOptions;resetSelection;stringify;parse;[data-path];querySelectorAll;tabsElement;data-path;call;path;data-value;checkbox;true;@bind;checked;val;function;update;save;.jss_chart;parentNode;zIndex;destroyCell;jss_chart_cell;records;updateProperty;px;width;height;createCell;div;createElement;jss_chart;jss_object;jpanel;tabindex;setAttribute;300px;ondblclick;data-x;data-y;dblclick;editable;options;settings;plugins;contextmenu;current;flip_to_front;Flip to front;flip_to_back;Flip to back;divisor;Delete chart;assign;appendChild;content;=CHARTS(;executeFormula;updateCell;openEditor;closeEditor;[CHARTS];getProperty;,;join;canvas;"get((.*?))";gi;$1;replace;=;data.labels;max;from;i;material-icons;minimize;onclick;jss_chart_error;data-error;removeAttribute;Something went wrong;error;position;absolute;0px;margin;40px;toolbar;addchart;getRange;items;onevent;onbeforepaste;substr;=CHARTS;ondeleterow;ondeletecolumn;onchangereferences;cells;toLowerCase;updateFormula;ignoreHistory;contextMenu;getData;input;isNumeric;append;tools;render;oninit;setPlugins;editors;setFormula;formula;license;object;undefined;exports;amd'.split(";");
(function(p,h){typeof exports===_$_cdda[300]&&typeof module!==_$_cdda[301]?module[_$_cdda[302]]=h():typeof define===_$_cdda[199]&&define[_$_cdda[303]]?define(h):p[_$_cdda[4]]=h()})(this,function(){var p=null,h=jSuites[_$_cdda[0]],A=function(){var a=_$_cdda[1];8==this[_$_cdda[2]]?this[_$_cdda[3]]&&-1!=this[_$_cdda[3]][_$_cdda[5]](_$_cdda[4])||(a=_$_cdda[6]):a=_$_cdda[7];return a},v=function(a){var e=a[_$_cdda[9]][_$_cdda[8]](/get\(.*?\)/gi);return e&&e[_$_cdda[10]]?e[0][_$_cdda[11]](4,e[0][_$_cdda[10]]-
1):a[_$_cdda[9]]},B=function(){var a=[];typeof this[_$_cdda[30]]===_$_cdda[31]&&(this[_$_cdda[30]]=[this[_$_cdda[30]]]);for(var e=0;12>e;e++)a[e]={value:this[_$_cdda[30]][e]||_$_cdda[1]};this[_$_cdda[26]]=a;return lemonade[_$_cdda[37]]('<div class="jss_chart_palette">\n                <Color @loop="self.data" />\n            </div>',this,{Color:function(){var g=this;g[_$_cdda[32]]=function(c){jSuites[_$_cdda[36]](c,{value:g[_$_cdda[30]],onchange:function(b,f){b=g[_$_cdda[33]][_$_cdda[26]][_$_cdda[5]](g);
g[_$_cdda[33]][_$_cdda[30]][b]=f;g[_$_cdda[33]][_$_cdda[35]](_$_cdda[34],g[_$_cdda[33]][_$_cdda[30]]);g[_$_cdda[30]]=f}})};return lemonade[_$_cdda[37]]('<div style="{{\'background-color:\'+self.value}}" @ready="self.create(this)"></div>',g)}})},C=function(){var a=this,e=null;a[_$_cdda[38]]=null;var g=`
            <div @ready="self.createModal(this)">
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${h(_$_cdda[39])}</label>
                         <div @ready="self.createPicker(this)" @bind="self.data"></div>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                      <div class='form-group'>
                          <label class="jswitch" style="margin-bottom: 6px;">
                              <input @bind="self.haveLabels" type="checkbox"><i></i><span class='f1 ml1'>${h(_$_cdda[40])}</span>
                          </label>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label>${h(_$_cdda[41])}</label>
                            <select @ready="self.createDropdown(this)">
                                <option value="1">${h(_$_cdda[42])}</option>
                                <option value="2">${h(_$_cdda[43])}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${h(_$_cdda[44])}</label>
                         <div @ready="self.createWhere(this)" data-single="true" @bind="self.cellName"></div>
                      </div>
                   </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <br>
                            <button type="button" class="jbutton dark w100" onclick="self.insert()" style="margin-bottom: 10px">${h(_$_cdda[45])}</button>
                            <button type="button" class="jbutton dark w100" onclick="self.cancel()">${h(_$_cdda[46])}</button>
                        </div>
                    </div>
                </div>
           </div>`;a[_$_cdda[47]]=function(c){e=jSuites[_$_cdda[48]](c)};a[_$_cdda[49]]=function(c){a[_$_cdda[50]]=jSuites[_$_cdda[50]](c,{title:h(_$_cdda[51]),closed:!0,width:_$_cdda[52],height:_$_cdda[53],backdrop:!1})};a[_$_cdda[54]]=function(c){p[_$_cdda[57]](c,function(){a[_$_cdda[26]]=c[_$_cdda[9]];jSuites[_$_cdda[56]](c[_$_cdda[55]])})};a[_$_cdda[58]]=function(c){p[_$_cdda[57]](c,function(){a[_$_cdda[59]]=c[_$_cdda[9]];jSuites[_$_cdda[56]](c[_$_cdda[55]])})};a[_$_cdda[60]]=function(){a[_$_cdda[50]][_$_cdda[61]]()};
a[_$_cdda[62]]=function(){var c,b=a[_$_cdda[26]],f=_$_cdda[1];-1!=b[_$_cdda[5]](_$_cdda[63])&&(b=b[_$_cdda[64]](_$_cdda[63]),f=b[0][_$_cdda[65]]()+_$_cdda[63],b=b[1]);-1==b[_$_cdda[5]](_$_cdda[66])&&(b=b+_$_cdda[66]+b);b=p[_$_cdda[28]][_$_cdda[68]](p[_$_cdda[28]][_$_cdda[67]](b));b=b[_$_cdda[64]](_$_cdda[66]);var k=p[_$_cdda[28]][_$_cdda[27]](b[0]),d=p[_$_cdda[28]][_$_cdda[27]](b[1]);b=[];if(e[_$_cdda[69]]()==_$_cdda[70])for(var l=k[0];l<=d[0];l++)b[_$_cdda[24]](_$_cdda[71]+f+p[_$_cdda[28]][_$_cdda[72]](l,
k[1])+_$_cdda[66]+p[_$_cdda[28]][_$_cdda[72]](l,d[1])+_$_cdda[73]);else for(l=k[1];l<=d[1];l++)b[_$_cdda[24]](_$_cdda[71]+f+p[_$_cdda[28]][_$_cdda[72]](k[0],l)+_$_cdda[66]+p[_$_cdda[28]][_$_cdda[72]](d[0],l)+_$_cdda[73]);a[_$_cdda[74]]&&(c=b[_$_cdda[75]]());f=a[_$_cdda[38]];if(k=a[_$_cdda[59]])if(d=f[_$_cdda[13]](k),d[_$_cdda[16]][_$_cdda[15]](_$_cdda[14]))alert(h(_$_cdda[17])+k),b=!1;else{c={type:_$_cdda[18],top:d[_$_cdda[19]],left:d[_$_cdda[20]],chart:{type:_$_cdda[21],data:{labels:c,datasets:[]},
options:{plugins:{legend:{position:_$_cdda[22]}}}}};for(d=0;d<b[_$_cdda[10]];d++)l=jSuites[_$_cdda[23]](_$_cdda[18])[0][d%jSuites[_$_cdda[23]](_$_cdda[18])[0][_$_cdda[10]]],c[_$_cdda[18]][_$_cdda[26]][_$_cdda[25]][_$_cdda[24]]({data:b[d],borderColor:l,backgroundColor:l});b=p[_$_cdda[28]][_$_cdda[27]](k);f[_$_cdda[29]](b[0],b[1],c);b=!0}else alert(h(_$_cdda[12])),b=!1;if(b)a[_$_cdda[50]][_$_cdda[61]]()};return lemonade[_$_cdda[37]](g,a)},D=function(){var a=this;a[_$_cdda[76]]=_$_cdda[77];a[_$_cdda[32]]=
function(g){g[_$_cdda[77]]=a};a[_$_cdda[78]]=function(g,c){a[_$_cdda[33]][g]=c;a[_$_cdda[33]][_$_cdda[35]](g,[])};a[_$_cdda[79]]=function(){if(a[_$_cdda[81]][_$_cdda[16]][_$_cdda[15]](_$_cdda[80]))a[_$_cdda[61]]();else a[_$_cdda[82]]()};a[_$_cdda[82]]=function(){jSuites[_$_cdda[83]](a,!0);a[_$_cdda[81]][_$_cdda[16]][_$_cdda[84]](_$_cdda[80])};a[_$_cdda[61]]=function(){jSuites[_$_cdda[83]](a,!1);a[_$_cdda[81]][_$_cdda[16]][_$_cdda[85]](_$_cdda[80])};a[_$_cdda[86]]=function(g){jSuites[_$_cdda[36]](g,
{value:a[_$_cdda[33]][_$_cdda[87]],onchange:function(c,b){a[_$_cdda[78]](c[_$_cdda[88]],b)},closeOnChange:!0})};a[_$_cdda[89]]=function(g){jSuites[_$_cdda[48]](g,{width:_$_cdda[90],data:[{text:h(_$_cdda[91]),value:_$_cdda[92]},{text:h(_$_cdda[93]),value:_$_cdda[94]},{text:h(_$_cdda[95]),value:_$_cdda[96]},{text:h(_$_cdda[97]),value:_$_cdda[98]}],onchange:function(c,b,f,k){a[_$_cdda[78]](c[_$_cdda[100]](_$_cdda[99]),k)}})};a[_$_cdda[101]]=function(g){var c=Object[_$_cdda[104]](jSuites[_$_cdda[103]])[_$_cdda[102]](function(f){return{text:h(f),
value:f}}),b=jSuites[_$_cdda[48]](g,{data:c,onchange:function(f,k,d,l){if(l===_$_cdda[1])b[_$_cdda[105]](d)}})};a[_$_cdda[34]]=a[_$_cdda[33]][_$_cdda[34]];var e=`<div @ready="self.create(this)">
                <button type="button" title="${h(_$_cdda[106])}" onclick="self.toggle(this)">
                    <i class="material-icons small">settings</i>
                </button><div>
                    <div class="jss_chart_floating" @ref="self.panel">
                        <i class="cursor right material-icons" onclick="self.toggle()">close</i>
                        <div class='row line bar radar'>
                            <div class="column f1">
                                <div class="form-group">
                                <label>${h(_$_cdda[107])}</label>
                                <Palette name="backgroundColor" value="{{self.backgroundColor}}" onchange="{{self.set}}" />
                                </div>
                            </div>
                        </div>
                        <div class='row line pie doughnut radar'>
                            <div class="column f1">
                                <div class="form-group">
                                 <label>${h(_$_cdda[108])}</label>
                                 <input @ready="self.createColorPicker(this)" name="borderColor" />
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label>${h(_$_cdda[109])}</label>
                                    <div @ready="self.inputPointStyle(this)" data-name="pointStyle"></div>
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch" style="margin-bottom: 6px;">
                                        <input type="checkbox" name="fill" oninput="self.set(this.name, this.value)"><i></i><span class='f1 ml1'>${h(_$_cdda[110])}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;return lemonade[_$_cdda[37]](e,a,{Palette:B})},E=function(){this[_$_cdda[35]]=this[_$_cdda[33]][_$_cdda[35]];var a=`<div class="jss_chart_series">
                <div @ready="self.parent.createData(this, self)"  @bind="self.data" title="${h(_$_cdda[111])}" data-placeholder="${h(_$_cdda[112])}" contenteditable="true" style="width: 190px;"></div>
                <div @ready="self.parent.createLabel(this, self)" @bind="self.label" title="${h(_$_cdda[113])}" data-placeholder="${h(_$_cdda[114])}" data-single="true" contenteditable="true" style="width: 150px;"></div>
                <Config />
                <button type="button" onclick="self.parent.add()" title="${h(_$_cdda[115])}"><i class="material-icons small">add</i></button>
                <button type="button" onclick="self.parent.delete(self)" title="${h(_$_cdda[116])}"><i class="material-icons small">delete</i></button>
            </div>`;return lemonade[_$_cdda[37]](a,this,{Config:D})},F=function(){var a=this;a[_$_cdda[117]]=function(e,g){p[_$_cdda[57]](e,function(){e[_$_cdda[9]]?(g[_$_cdda[26]]=_$_cdda[71]+v(e)+_$_cdda[73],jSuites[_$_cdda[56]](e)):g[_$_cdda[26]]=_$_cdda[1]})};a[_$_cdda[118]]=function(e,g){p[_$_cdda[57]](e,function(){e[_$_cdda[9]]?(g[_$_cdda[119]]=_$_cdda[71]+v(e)+_$_cdda[73],jSuites[_$_cdda[56]](e)):g[_$_cdda[119]]=_$_cdda[1]})};a[_$_cdda[84]]=function(){if(-1<[_$_cdda[120],_$_cdda[121]][_$_cdda[5]](a[_$_cdda[33]][_$_cdda[76]])){var e=
jSuites[_$_cdda[23]][_$_cdda[122]](_$_cdda[18])[0];var g=_$_cdda[123]}else e=jSuites[_$_cdda[23]][_$_cdda[122]](_$_cdda[18])[0][a[_$_cdda[26]][_$_cdda[10]]],g=jSuites[_$_cdda[23]][_$_cdda[122]](_$_cdda[18])[0][a[_$_cdda[26]][_$_cdda[10]]];a[_$_cdda[26]][_$_cdda[24]]({backgroundColor:e,borderColor:g});a[_$_cdda[124]](_$_cdda[26])};a[_$_cdda[125]]=function(e){a[_$_cdda[26]][_$_cdda[126]](a[_$_cdda[26]][_$_cdda[5]](e),1);if(0===a[_$_cdda[26]][_$_cdda[10]])a[_$_cdda[84]]();else a[_$_cdda[124]](_$_cdda[26])};
return lemonade[_$_cdda[37]]('<div><Item @loop="self.data" /></div>',a,{Item:E})},G=function(){var a=this,e=null;a[_$_cdda[127]]=[];var g=`
           <div @ready="self.createModal(this)">
              <div role='tabs' @ref="self.tabsElement" @ready="self.createTabs(this)">
                 <div role='headers'>
                    <div style="width: 120px;">${h(_$_cdda[128])}</div>
                    <div style="width: 120px;">${h(_$_cdda[129])}</div>
                 </div>
                 <div role='content'>
                    <div @ref="self.root" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_cdda[130])}</label>
                                <div @ready="self.inputType(this)" @bind="self.type" data-path="type" data-value="line"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row line bar'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_cdda[131])}</label>
                                <div @ready="self.inputIndexAxis(this)" @bind="self.orientation" data-path="options.indexAxis" data-value="x"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_cdda[132])}</label>
                                <div @ready="self.createLabels(this, self)" @bind="self.labels" data-path="data.labels"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_cdda[133])}</label>
                                <div><Series data="{{self.series}}" onchange="{{self.onchange}}" /></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div @ref="self.rootstyle" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${h(_$_cdda[134])}</label>
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
                                <label>${h(_$_cdda[135])}</label>
                                <div @ready="self.inputLegend(this)" @bind="self.legend" data-path="options.plugins.legend.position" data-value="top"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${h(_$_cdda[136])}</span> <input @bind="self.xAxis" data-path="options.scales.x.display" data-value="true" type="checkbox" name="xAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all' style="{{!self.xAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${h(_$_cdda[137])}' name='title' @bind="self.titleX" data-path="options.scales.x.title.text" class="jss_object"/>
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
                                    <span class='f1'>${h(_$_cdda[138])}</span> <input @bind="self.yAxis" data-path="options.scales.y.display" data-value="true" type="checkbox" name="yAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all'  style="{{!self.yAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${h(_$_cdda[139])}' name='title' @bind="self.titleY" data-path="options.scales.y.title.text" class="jss_object"/>
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
                                    <span class='f1'>${h(_$_cdda[140])}</span> <input @bind="self.yAxisBeginAtZero" data-path="options.scales.y.beginAtZero" data-value="false" type="checkbox" name="yAxisBeginAtoZero"><i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class='row radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${h(_$_cdda[141])}</span> <input @bind="self.beginAtZero" data-path="options.scales.r.beginAtZero" data-value="false" type="checkbox" name="beginAtoZero"><i></i>
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
                         <button type="button" class="jbutton dark w100" onclick="self.close(true)">${h(_$_cdda[142])}</button>
                         <button type="button" class="jbutton dark w100" onclick="self.close(false)" style="margin-top: 4px">${h(_$_cdda[46])}</button>
                     </div>
                 </div>
              </div>
           </div>
       `;a[_$_cdda[49]]=function(c){a[_$_cdda[50]]=jSuites[_$_cdda[50]](c,{title:h(_$_cdda[143]),closed:!0,width:_$_cdda[144],height:_$_cdda[145],backdrop:!1,onclose:function(){a[_$_cdda[61]](!1)}})};a[_$_cdda[146]]=function(c,b){p[_$_cdda[57]](c,function(){c[_$_cdda[9]]?(b[_$_cdda[147]]=_$_cdda[71]+v(c)+_$_cdda[73],jSuites[_$_cdda[56]](c)):b[_$_cdda[147]]=_$_cdda[1]})};a[_$_cdda[148]]=function(c){jSuites[_$_cdda[150]](c,{palette:_$_cdda[149],animation:!0})};a[_$_cdda[151]]=function(c){jSuites[_$_cdda[48]](c,
{data:[{text:h(_$_cdda[152]),value:_$_cdda[21]},{text:h(_$_cdda[153]),value:_$_cdda[154]},{text:h(_$_cdda[155]),value:_$_cdda[120]},{text:h(_$_cdda[156]),value:_$_cdda[121]},{text:h(_$_cdda[157]),value:_$_cdda[158]}],onchange:function(b,f,k,d){for(b=0;b<a[_$_cdda[160]][_$_cdda[159]][_$_cdda[10]];b++)a[_$_cdda[160]][_$_cdda[159]][b][_$_cdda[16]][_$_cdda[15]](_$_cdda[161])||a[_$_cdda[160]][_$_cdda[159]][b][_$_cdda[16]][_$_cdda[15]](d)?a[_$_cdda[160]][_$_cdda[159]][b][_$_cdda[163]][_$_cdda[162]]=_$_cdda[1]:
a[_$_cdda[160]][_$_cdda[159]][b][_$_cdda[163]][_$_cdda[162]]=_$_cdda[22];for(b=0;b<a[_$_cdda[164]][_$_cdda[159]][_$_cdda[10]];b++)a[_$_cdda[164]][_$_cdda[159]][b][_$_cdda[16]][_$_cdda[15]](_$_cdda[161])||a[_$_cdda[164]][_$_cdda[159]][b][_$_cdda[16]][_$_cdda[15]](d)?a[_$_cdda[164]][_$_cdda[159]][b][_$_cdda[163]][_$_cdda[162]]=_$_cdda[1]:a[_$_cdda[164]][_$_cdda[159]][b][_$_cdda[163]][_$_cdda[162]]=_$_cdda[22]}})};a[_$_cdda[165]]=function(c){jSuites[_$_cdda[48]](c,{data:[{text:h(_$_cdda[166]),value:_$_cdda[167]},
{text:h(_$_cdda[168]),value:_$_cdda[169]}]})};a[_$_cdda[170]]=function(c){jSuites[_$_cdda[48]](c,{data:[{text:h(_$_cdda[171]),value:_$_cdda[172]},{text:h(_$_cdda[173]),value:_$_cdda[174]},{text:h(_$_cdda[175]),value:_$_cdda[176]},{text:h(_$_cdda[177]),value:_$_cdda[178]},{text:h(_$_cdda[179]),value:_$_cdda[22]}]})};a[_$_cdda[82]]=function(c,b){c[_$_cdda[180]]();if(a[_$_cdda[50]][_$_cdda[181]]())a[_$_cdda[61]](!1);a[_$_cdda[38]]=this;a[_$_cdda[182]]=c;a[_$_cdda[183]]=null;this[_$_cdda[184]]();c=JSON[_$_cdda[186]](JSON[_$_cdda[185]](b[_$_cdda[18]]));
b=a[_$_cdda[189]][_$_cdda[188]](_$_cdda[187]);for(var f=0;f<b[_$_cdda[10]];f++){var k=b[f];if(val=k[_$_cdda[100]](_$_cdda[190])){var d=jSuites[_$_cdda[192]][_$_cdda[191]](c,val);d||(d=k[_$_cdda[100]](_$_cdda[193]),k[_$_cdda[76]]===_$_cdda[194]&&(d=d===_$_cdda[195]?!0:!1));k[_$_cdda[196]]&&(a[k[_$_cdda[196]]]=d)}}a[_$_cdda[127]]=c[_$_cdda[26]][_$_cdda[25]];a[_$_cdda[183]]=c;a[_$_cdda[50]][_$_cdda[82]]()};a[_$_cdda[35]]=function(c,b){if(a[_$_cdda[183]]){var f=c=null;if(b&&b[_$_cdda[10]])for(var k=0;k<
b[_$_cdda[10]];k++)if(f=b[k][_$_cdda[37]],c=f[_$_cdda[76]]==_$_cdda[194]?f[_$_cdda[197]]:typeof f[_$_cdda[198]]===_$_cdda[199]?f[_$_cdda[198]]():f[_$_cdda[30]],f=f[_$_cdda[100]](_$_cdda[190]))jSuites[_$_cdda[192]][_$_cdda[191]](a[_$_cdda[183]],f,c);a[_$_cdda[183]]&&(e&&clearTimeout(e),e=setTimeout(function(){if(a[_$_cdda[182]])a[_$_cdda[182]][_$_cdda[200]](a[_$_cdda[183]]);e=null},50))}};a[_$_cdda[61]]=function(c){if(a[_$_cdda[182]]){if(!0===c)a[_$_cdda[182]][_$_cdda[201]](JSON[_$_cdda[186]](JSON[_$_cdda[185]](a[_$_cdda[183]])));
else a[_$_cdda[182]][_$_cdda[201]]();a[_$_cdda[182]]=null}if(a[_$_cdda[50]][_$_cdda[181]]())a[_$_cdda[50]][_$_cdda[61]]()};return lemonade[_$_cdda[37]](g,a,{Series:F})},H=function(){var a={};a[_$_cdda[205]]=function(e,g,c,b){e[_$_cdda[16]][_$_cdda[85]](_$_cdda[206]);b[_$_cdda[207]][c][g][_$_cdda[18]][_$_cdda[85]]();b[_$_cdda[207]][c][g][_$_cdda[18]]=null;b[_$_cdda[30]](g,c,_$_cdda[1])};a[_$_cdda[208]]=function(e,g,c,b){if(e=c[_$_cdda[207]][g][e][_$_cdda[18]])e[_$_cdda[163]][_$_cdda[172]]=parseInt(b[_$_cdda[172]])+
_$_cdda[209],e[_$_cdda[163]][_$_cdda[174]]=parseInt(b[_$_cdda[174]])+_$_cdda[209],e[_$_cdda[163]][_$_cdda[210]]=parseInt(b[_$_cdda[210]])+_$_cdda[209],e[_$_cdda[163]][_$_cdda[211]]=parseInt(b[_$_cdda[211]])+_$_cdda[209]};a[_$_cdda[212]]=function(e,g,c,b,f,k){var d=f[_$_cdda[207]][b][c][_$_cdda[18]];if(!d)e[_$_cdda[16]][_$_cdda[84]](_$_cdda[206]),e[_$_cdda[16]][_$_cdda[84]](_$_cdda[14]),d=document[_$_cdda[214]](_$_cdda[213]),d[_$_cdda[16]][_$_cdda[84]](_$_cdda[215]),d[_$_cdda[16]][_$_cdda[84]](_$_cdda[216]),
d[_$_cdda[16]][_$_cdda[84]](_$_cdda[217]),d[_$_cdda[219]](_$_cdda[218],900),d[_$_cdda[163]][_$_cdda[210]]=_$_cdda[52],d[_$_cdda[163]][_$_cdda[211]]=_$_cdda[220],d[_$_cdda[163]][_$_cdda[204]]=3,e[_$_cdda[221]]=function(){d[_$_cdda[163]][_$_cdda[162]]=_$_cdda[1]},d[_$_cdda[124]]=function(l){if(!l){l=parseInt(d[_$_cdda[163]][_$_cdda[172]])||0;var n=parseInt(d[_$_cdda[163]][_$_cdda[174]])||0,m=parseInt(d[_$_cdda[163]][_$_cdda[210]])||400,q=parseInt(d[_$_cdda[163]][_$_cdda[211]])||300,r=e[_$_cdda[100]](_$_cdda[222]),
u=e[_$_cdda[100]](_$_cdda[223]);f[_$_cdda[208]]([{x:r,y:u,value:{top:l,left:n,width:m,height:q}}])}},d[_$_cdda[200]]=function(l){var n=e[_$_cdda[100]](_$_cdda[222]),m=e[_$_cdda[100]](_$_cdda[223]);null==l&&(l=k[_$_cdda[18]]);y(f,n,m,l)},d[_$_cdda[125]]=function(){var l=e[_$_cdda[100]](_$_cdda[222]),n=e[_$_cdda[100]](_$_cdda[223]);f[_$_cdda[29]](l,n,_$_cdda[1])},d[_$_cdda[224]]=function(){if(f[_$_cdda[226]][_$_cdda[225]])f[_$_cdda[33]][_$_cdda[228]][_$_cdda[4]][_$_cdda[227]][_$_cdda[82]][_$_cdda[191]](f,
d,k)},d[_$_cdda[229]]=function(l){if(p[_$_cdda[230]]&&p[_$_cdda[230]][_$_cdda[226]][_$_cdda[225]]){var n=[];n[_$_cdda[24]]({icon:_$_cdda[231],title:h(_$_cdda[232]),onclick:function(){for(var m=d,q=m[_$_cdda[203]][_$_cdda[188]](_$_cdda[202]),r=0,u,w=0;w<q[_$_cdda[10]];w++)u=parseInt(q[w][_$_cdda[163]][_$_cdda[204]]),u>r&&(r=u);m[_$_cdda[163]][_$_cdda[204]]=r+1}});n[_$_cdda[24]]({icon:_$_cdda[233],title:h(_$_cdda[234]),onclick:function(){var m=d;m[_$_cdda[203]][_$_cdda[188]](_$_cdda[202]);m[_$_cdda[163]][_$_cdda[204]]=
3}});n[_$_cdda[24]]({type:_$_cdda[235]});n[_$_cdda[24]]({icon:_$_cdda[227],title:h(_$_cdda[143]),onclick:function(){d[_$_cdda[224]]()}});n[_$_cdda[24]]({icon:_$_cdda[125],title:h(_$_cdda[236]),onclick:function(){d[_$_cdda[125]]()}});p[_$_cdda[230]][_$_cdda[33]][_$_cdda[229]][_$_cdda[229]][_$_cdda[82]](l,n)}},d[_$_cdda[201]]=function(l){var n=e[_$_cdda[100]](_$_cdda[222]),m=e[_$_cdda[100]](_$_cdda[223]);if(null!=l){var q=Object[_$_cdda[237]]({},k);q[_$_cdda[18]]=l;f[_$_cdda[29]](n,m,q)}else d[_$_cdda[200]]()},
f[_$_cdda[207]][b][c][_$_cdda[18]]=d,f[_$_cdda[239]][_$_cdda[238]](d),k[_$_cdda[172]]&&(d[_$_cdda[163]][_$_cdda[172]]=parseInt(k[_$_cdda[172]])+_$_cdda[209]),k[_$_cdda[174]]&&(d[_$_cdda[163]][_$_cdda[174]]=parseInt(k[_$_cdda[174]])+_$_cdda[209]),k[_$_cdda[210]]&&(d[_$_cdda[163]][_$_cdda[210]]=parseInt(k[_$_cdda[210]])+_$_cdda[209]),k[_$_cdda[211]]&&(d[_$_cdda[163]][_$_cdda[211]]=parseInt(k[_$_cdda[211]])+_$_cdda[209]),k[_$_cdda[204]]&&(d[_$_cdda[163]][_$_cdda[204]]=parseInt(k[_$_cdda[204]]));else if(g==
_$_cdda[1])return d[_$_cdda[125]](),_$_cdda[1];g=_$_cdda[240]+z(k)+_$_cdda[73];f[_$_cdda[241]](g,c,b);return g};a[_$_cdda[242]]=function(e,g,c,b,f,k){g=_$_cdda[240]+z(k)+_$_cdda[73];f[_$_cdda[241]](g,c,b);return g};a[_$_cdda[243]]=function(e,g,c,b,f,k){return!1};a[_$_cdda[244]]=function(e,g,c,b,f,k){return!1};a[_$_cdda[122]]=function(e,g){return _$_cdda[245]};return a}(),I=function(){var a=this[_$_cdda[38]][_$_cdda[246]](this[_$_cdda[167]],this[_$_cdda[169]])[_$_cdda[18]];a&&y(this[_$_cdda[38]],this[_$_cdda[167]],
this[_$_cdda[169]],a);return _$_cdda[1]},z=function(a){if((a=JSON[_$_cdda[185]](a[_$_cdda[18]])[_$_cdda[8]](/get\(.*?\)/gi))&&a[_$_cdda[10]]){for(var e=0;e<a[_$_cdda[10]];e++)a[e]=a[e][_$_cdda[11]](4,a[e][_$_cdda[10]]-1);a[_$_cdda[248]](_$_cdda[247])}else a=_$_cdda[1];return a},y=function(a,e,g,c){var b=a[_$_cdda[207]][g][e][_$_cdda[18]];b[_$_cdda[9]]=_$_cdda[1];canvas=document[_$_cdda[214]](_$_cdda[249]);b[_$_cdda[238]](canvas);try{var f=JSON[_$_cdda[185]](c);f=f[_$_cdda[253]](new RegExp(_$_cdda[250],
_$_cdda[251]),_$_cdda[252]);f=a[_$_cdda[241]](_$_cdda[254]+f,null,null,null,!0);if(jSuites[_$_cdda[192]][_$_cdda[191]](f,_$_cdda[255])==_$_cdda[1]){for(g=e=0;g<f[_$_cdda[26]][_$_cdda[25]][_$_cdda[10]];g++)e=Math[_$_cdda[256]](e,f[_$_cdda[26]][_$_cdda[25]][g][_$_cdda[26]][_$_cdda[10]]);jSuites[_$_cdda[192]][_$_cdda[191]](f,_$_cdda[255],Array[_$_cdda[257]](Array(e)[_$_cdda[104]]()))}var k=document[_$_cdda[214]](_$_cdda[258]);k[_$_cdda[16]][_$_cdda[84]](_$_cdda[259]);k[_$_cdda[9]]=_$_cdda[260];k[_$_cdda[261]]=
function(){b[_$_cdda[163]][_$_cdda[162]]=_$_cdda[22]};b[_$_cdda[238]](k);b[_$_cdda[16]][_$_cdda[85]](_$_cdda[262]);b[_$_cdda[264]](_$_cdda[263]);new Chart(canvas,f)}catch(d){b[_$_cdda[9]]=_$_cdda[1],b[_$_cdda[16]][_$_cdda[84]](_$_cdda[262]),b[_$_cdda[219]](_$_cdda[263],jSuites[_$_cdda[0]](_$_cdda[265])),console[_$_cdda[266]](d)}if(a=A[_$_cdda[191]](a[_$_cdda[33]]))f=document[_$_cdda[214]](_$_cdda[213]),f[_$_cdda[163]][_$_cdda[267]]=_$_cdda[268],f[_$_cdda[163]][_$_cdda[178]]=_$_cdda[269],f[_$_cdda[163]][_$_cdda[174]]=
_$_cdda[269],f[_$_cdda[9]]=a,f[_$_cdda[270]]=_$_cdda[271],b[_$_cdda[238]](f)},J=function(a,e){var g={};g[_$_cdda[272]]=function(c){c[_$_cdda[275]][_$_cdda[24]]({content:_$_cdda[273],type:_$_cdda[258],title:h(_$_cdda[51]),onclick:function(){var b=p[_$_cdda[230]][_$_cdda[274]]();b&&(b=b[_$_cdda[64]](_$_cdda[63])[1]);g[_$_cdda[82]](p[_$_cdda[230]],b,_$_cdda[1])}});return c};g[_$_cdda[276]]=function(c,b,f,k,d,l){if(c==_$_cdda[277]){for(l=0;l<f[_$_cdda[10]];l++)for(c=0;c<f[l][_$_cdda[10]];c++)(_$_cdda[1]+
f[l][c])[_$_cdda[278]](0,7)==_$_cdda[279]&&(f[l][c]=_$_cdda[1]);return f}if(c==_$_cdda[280]||c==_$_cdda[281])for(l=0;l<d[_$_cdda[10]];l++)for(c=0;c<d[l][_$_cdda[10]];c++){if(d[l][c][_$_cdda[37]]&&d[l][c][_$_cdda[37]][_$_cdda[16]][_$_cdda[15]](_$_cdda[206]))d[l][c][_$_cdda[18]][_$_cdda[85]]()}else if(c==_$_cdda[282]){d=[];for(l=0;l<b[_$_cdda[207]][_$_cdda[10]];l++)for(c=0;c<b[_$_cdda[207]][l][_$_cdda[10]];c++)if(void 0!==b[_$_cdda[207]][l][c][_$_cdda[18]]){var n=b[_$_cdda[28]][_$_cdda[72]](c,l);var m=
Object[_$_cdda[237]]({},b[_$_cdda[226]][_$_cdda[283]][n][_$_cdda[18]]);var q=!1;m[_$_cdda[26]][_$_cdda[147]]&&0==m[_$_cdda[26]][_$_cdda[147]][_$_cdda[284]]()[_$_cdda[5]](_$_cdda[71])&&(t=b[_$_cdda[285]](m[_$_cdda[26]][_$_cdda[147]],f,k),t!==m[_$_cdda[26]][_$_cdda[147]]&&(m[_$_cdda[26]][_$_cdda[147]]=t,q=!0));if(m[_$_cdda[26]][_$_cdda[25]][_$_cdda[10]])for(n=0;n<m[_$_cdda[26]][_$_cdda[25]][_$_cdda[10]];n++)m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[119]]&&0==m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[119]][_$_cdda[284]]()[_$_cdda[5]](_$_cdda[71])&&
(t=b[_$_cdda[285]](m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[119]],f,k),t!==m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[119]]&&(m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[119]]=t,q=!0)),m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[26]]&&0==m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[26]][_$_cdda[284]]()[_$_cdda[5]](_$_cdda[71])&&(t=b[_$_cdda[285]](m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[26]],f,k),t!==m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[26]]&&(m[_$_cdda[26]][_$_cdda[25]][n][_$_cdda[26]]=t,q=!0));if(1==q)d[_$_cdda[24]]({x:c,
y:l,value:{chart:m}})}d[_$_cdda[10]]&&(b[_$_cdda[33]][_$_cdda[286]]=!0,b[_$_cdda[208]](d),b[_$_cdda[33]][_$_cdda[286]]=!1)}};g[_$_cdda[287]]=function(c,b,f,k,d,l,n,m){if(null!=b&&null!=f){k={title:h(_$_cdda[51]),icon:_$_cdda[273],onclick:function(){var q=p[_$_cdda[28]][_$_cdda[72]](b,f);g[_$_cdda[82]](c,_$_cdda[1],q)}};l=0;for(let q in d)if(d[q][_$_cdda[76]]==_$_cdda[235]||d[q][_$_cdda[76]]==_$_cdda[21]){l=parseInt(q)+1;break}d[_$_cdda[126]](l,0,{type:_$_cdda[235]});d[_$_cdda[126]](l,0,k)}};g[_$_cdda[82]]=
function(c,b,f){var k=c[_$_cdda[288]](!0);g[_$_cdda[289]][_$_cdda[38]]=c;g[_$_cdda[289]][_$_cdda[26]]=b;g[_$_cdda[289]][_$_cdda[74]]=jSuites[_$_cdda[290]](k[0][0])?!1:!0;g[_$_cdda[289]][_$_cdda[59]]=f;g[_$_cdda[289]][_$_cdda[50]][_$_cdda[82]]()};e=document[_$_cdda[214]](_$_cdda[213]);a[_$_cdda[292]][_$_cdda[291]](e);lemonade[_$_cdda[293]](function(){return lemonade[_$_cdda[37]]('\n                <div>\n                    <div><Inputchart @ref="self.input" /></div>\n                    <div><Settings @ref="self.settings" /></div>\n                </div>\n            ',
g,{Inputchart:C,Settings:G})},e);return g},x=function(){return!0};x[_$_cdda[294]]=function(a,e){a[_$_cdda[295]]({charts:J});p[_$_cdda[296]][_$_cdda[18]]||(p[_$_cdda[296]][_$_cdda[18]]=H,p[_$_cdda[298]][_$_cdda[297]]({CHARTS:I}))};x[_$_cdda[299]]=function(a){null===p&&(p=this)};return x});
