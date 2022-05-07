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

(function(l,g){"object"===typeof exports&&"undefined"!==typeof module?module.exports=g():"function"===typeof define&&define.amd?define(g):l.charts=g()})(this,function(){var l=null,g=jSuites.translate,r=function(a){var d=a.innerText.match(/get\(.*?\)/gi);return d&&d.length?d[0].substring(4,d[0].length-1):a.innerText},A=function(){var a=[];"string"===typeof this.value&&(this.value=[this.value]);for(var d=0;12>d;d++)a[d]={value:this.value[d]||""};this.data=a;return lemonade.element('<div class="jss_chart_palette">\n                <Color @loop="self.data" />\n            </div>',
this,{Color:function(){var e=this;e.create=function(c){jSuites.color(c,{value:e.value,onchange:function(b,k){b=e.parent.data.indexOf(e);e.parent.value[b]=k;e.parent.onchange("backgroundColor",e.parent.value);e.value=k}})};return lemonade.element('<div style="{{\'background-color:\'+self.value}}" @ready="self.create(this)"></div>',e)}})},B=function(){var a=this,d=null;a.instance=null;var e=`
            <div @ready="self.createModal(this)">
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${g("Data to analyze")}</label>
                         <div @ready="self.createPicker(this)" @bind="self.data"></div>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                      <div class='form-group'>
                          <label class="jswitch" style="margin-bottom: 6px;">
                              <input @bind="self.haveLabels" type="checkbox"><i></i><span class='f1 ml1'>${g("Contains labels")}</span>
                          </label>
                      </div>
                    </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <label>${g("Series based on columns or rows datasets")}</label>
                            <select @ready="self.createDropdown(this)">
                                <option value="1">${g("Column datasets")}</option>
                                <option value="2">${g("Row datasets")}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class='row p2'>
                   <div class='column f1'>
                      <div class='form-group'>
                         <label>${g("Choose the cell where the new chart will be inserted")}</label>
                         <div @ready="self.createWhere(this)" data-single="true" @bind="self.cellName"></div>
                      </div>
                   </div>
                </div>
                <div class='row p2'>
                    <div class='column f1'>
                        <div class='form-group'>
                            <br>
                            <button type="button" class="jbutton dark w100" onclick="self.insert()" style="margin-bottom: 10px">${g("Insert")}</button>
                            <button type="button" class="jbutton dark w100" onclick="self.cancel()">${g("Cancel")}</button>
                        </div>
                    </div>
                </div>
           </div>`;a.createDropdown=function(c){d=jSuites.dropdown(c)};a.createModal=function(c){a.modal=jSuites.modal(c,{title:g("Insert chart"),closed:!0,width:"400px",height:"460px",backdrop:!1})};a.createPicker=function(c){l.picker(c,function(){a.data=c.innerText;jSuites.focus(c)})};a.createWhere=function(c){l.picker(c,function(){a.cellName=c.innerText;jSuites.focus(c)})};a.cancel=function(){a.modal.close()};a.insert=function(){var c,b=a.data,k="";-1!=b.indexOf("!")&&(b=b.split("!"),k=b[0].toUpperCase()+
"!",b=b[1]);-1==b.indexOf(":")&&(b=b+":"+b);b=l.helpers.getRangeFromTokens(l.helpers.getTokensFromRange(b));b=b.split(":");var h=l.helpers.getCoordsFromColumnName(b[0]),f=l.helpers.getCoordsFromColumnName(b[1]);b=[];if("1"==d.getValue())for(var m=h[0];m<=f[0];m++)b.push("get("+k+l.helpers.getColumnNameFromCoords(m,h[1])+":"+l.helpers.getColumnNameFromCoords(m,f[1])+")");else for(m=h[1];m<=f[1];m++)b.push("get("+k+l.helpers.getColumnNameFromCoords(h[0],m)+":"+l.helpers.getColumnNameFromCoords(f[0],
m)+")");a.haveLabels&&(c=b.shift());k=a.instance;if(h=a.cellName)if(f=k.getCell(h),f.classList.contains("readonly"))alert(g("You can't insert chart in cell ")+h),b=!1;else{c={type:"chart",top:f.offsetTop,left:f.offsetLeft,chart:{type:"line",data:{labels:c,datasets:[]},options:{plugins:{legend:{position:"none"}}}}};for(f=0;f<b.length;f++)m=jSuites.palette("chart")[0][f%jSuites.palette("chart")[0].length],c.chart.data.datasets.push({data:b[f],borderColor:m,backgroundColor:m});b=l.helpers.getCoordsFromColumnName(h);
k.setProperty(b[0],b[1],c);b=!0}else alert(g("You need to specify, where the chart would be inserted.")),b=!1;b&&a.modal.close()};return lemonade.element(e,a)},C=function(){var a=this;a.type="floating";a.create=function(e){e.floating=a};a.set=function(e,c){a.parent[e]=c;a.parent.onchange(e,[])};a.toggle=function(){a.panel.classList.contains("active")?a.close():a.open()};a.open=function(){jSuites.tracking(a,!0);a.panel.classList.add("active")};a.close=function(){jSuites.tracking(a,!1);a.panel.classList.remove("active")};
a.createColorPicker=function(e){jSuites.color(e,{value:a.parent.borderColor,onchange:function(c,b){a.set(c.name,b)},closeOnChange:!0})};a.inputPointStyle=function(e){jSuites.dropdown(e,{width:"200px",data:[{text:g("Circle"),value:"circle"},{text:g("Star"),value:"star"},{text:g("Triangle"),value:"triangle"},{text:g("Point"),value:"point"}],onchange:function(c,b,k,h){a.set(c.getAttribute("data-name"),h)}})};a.inputPalette=function(e){var c=Object.keys(jSuites.paletteList).map(function(k){return{text:g(k),
value:k}}),b=jSuites.dropdown(e,{data:c,onchange:function(k,h,f,m){""===m&&b.setValue(f)}})};a.backgroundColor=a.parent.backgroundColor;var d=`<div @ready="self.create(this)">
                <button type="button" title="${g("Serie settings")}" onclick="self.toggle(this)">
                    <i class="material-icons small">settings</i>
                </button><div>
                    <div class="jss_chart_floating" @ref="self.panel">
                        <i class="cursor right material-icons" onclick="self.toggle()">close</i>
                        <div class='row line bar radar'>
                            <div class="column f1">
                                <div class="form-group">
                                <label>${g("Background color")}</label>
                                <Palette name="backgroundColor" value="{{self.backgroundColor}}" onchange="{{self.set}}" />
                                </div>
                            </div>
                        </div>
                        <div class='row line pie doughnut radar'>
                            <div class="column f1">
                                <div class="form-group">
                                 <label>${g("Border color")}</label>
                                 <input @ready="self.createColorPicker(this)" name="borderColor" />
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label>${g("Point style")}</label>
                                    <div @ready="self.inputPointStyle(this)" data-name="pointStyle"></div>
                                </div>
                            </div>
                        </div>
                        <div class='row line radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch" style="margin-bottom: 6px;">
                                        <input type="checkbox" name="fill" oninput="self.set(this.name, this.value)"><i></i><span class='f1 ml1'>${g("Fill")}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;return lemonade.element(d,a,{Palette:A})},D=function(){this.onchange=this.parent.onchange;var a=`<div class="jss_chart_series">
                <div @ready="self.parent.createData(this, self)"  @bind="self.data" title="${g("Serie data range")}" data-placeholder="${g("Data")}" contenteditable="true" style="width: 190px;"></div>
                <div @ready="self.parent.createLabel(this, self)" @bind="self.label" title="${g("Serie label")}" data-placeholder="${g("Label")}" data-single="true" contenteditable="true" style="width: 150px;"></div>
                <Config />
                <button type="button" onclick="self.parent.add()" title="${g("Serie add")}"><i class="material-icons small">add</i></button>
                <button type="button" onclick="self.parent.delete(self)" title="${g("Serie delete")}"><i class="material-icons small">delete</i></button>
            </div>`;return lemonade.element(a,this,{Config:C})},E=function(){var a=this;a.createData=function(d,e){l.picker(d,function(){d.innerText?(e.data="get("+r(d)+")",jSuites.focus(d)):e.data=""})};a.createLabel=function(d,e){l.picker(d,function(){d.innerText?(e.label="get("+r(d)+")",jSuites.focus(d)):e.label=""})};a.add=function(){if(-1<["pie","doughnut"].indexOf(a.parent.type)){var d=jSuites.palette.get("chart")[0];var e="#FFFFFF"}else d=jSuites.palette.get("chart")[0][a.data.length],e=jSuites.palette.get("chart")[0][a.data.length];
a.data.push({backgroundColor:d,borderColor:e});a.refresh("data")};a.delete=function(d){a.data.splice(a.data.indexOf(d),1);0===a.data.length?a.add():a.refresh("data")};return lemonade.element('<div><Item @loop="self.data" /></div>',a,{Item:D})},F=function(){var a=this,d=null;a.series=[];var e=`
           <div @ready="self.createModal(this)">
              <div role='tabs' @ref="self.tabsElement" @ready="self.createTabs(this)">
                 <div role='headers'>
                    <div style="width: 120px;">${g("Configuration")}</div>
                    <div style="width: 120px;">${g("Styling")}</div>
                 </div>
                 <div role='content'>
                    <div @ref="self.root" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g("Chart type")}</label>
                                <div @ready="self.inputType(this)" @bind="self.type" data-path="type" data-value="line"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row line bar'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g("Orientation")}</label>
                                <div @ready="self.inputIndexAxis(this)" @bind="self.orientation" data-path="options.indexAxis" data-value="x"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g("Data labels")}</label>
                                <div @ready="self.createLabels(this, self)" @bind="self.labels" data-path="data.labels"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g("Series")}</label>
                                <div><Series data="{{self.series}}" onchange="{{self.onchange}}" /></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div @ref="self.rootstyle" style='margin-top:10px;'>
                       <div class='row all'>
                          <div class='column f1'>
                             <div class='form-group'>
                                <label>${g("Title")}</label>
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
                                <label>${g("Legend")}</label>
                                <div @ready="self.inputLegend(this)" @bind="self.legend" data-path="options.plugins.legend.position" data-value="top"></div>
                             </div>
                          </div>
                       </div>
                       <div class='row all'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${g("X Axis Visibility")}</span> <input @bind="self.xAxis" data-path="options.scales.x.display" data-value="true" type="checkbox" name="xAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all' style="{{!self.xAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${g("X Axis Title")}' name='title' @bind="self.titleX" data-path="options.scales.x.title.text" class="jss_object"/>
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
                                    <span class='f1'>${g("Y Axis Visibility")}</span> <input @bind="self.yAxis" data-path="options.scales.y.display" data-value="true" type="checkbox" name="yAxis"><i></i>
                                    </label>
                                </div>
                            </div>
                       </div>
                       <div class='row all'  style="{{!self.yAxis?'display:none':''}}">
                          <div class='column f1'>
                             <div class='form-group'>
                                <input type="text" placeholder='${g("Y Axis Title")}' name='title' @bind="self.titleY" data-path="options.scales.y.title.text" class="jss_object"/>
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
                                    <span class='f1'>${g("Y Begin at Zero")}</span> <input @bind="self.yAxisBeginAtZero" data-path="options.scales.y.beginAtZero" data-value="false" type="checkbox" name="yAxisBeginAtoZero"><i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class='row radar'>
                            <div class='column f1'>
                                <div class='form-group'>
                                    <label class="jswitch">
                                    <span class='f1'>${g("Begin at Zero")}</span> <input @bind="self.beginAtZero" data-path="options.scales.r.beginAtZero" data-value="false" type="checkbox" name="beginAtoZero"><i></i>
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
                         <button type="button" class="jbutton dark w100" onclick="self.close(true)">${g("Save")}</button>
                         <button type="button" class="jbutton dark w100" onclick="self.close(false)" style="margin-top: 4px">${g("Cancel")}</button>
                     </div>
                 </div>
              </div>
           </div>
       `;a.createModal=function(c){a.modal=jSuites.modal(c,{title:g("Chart settings"),closed:!0,width:"500px",height:"600px",backdrop:!1,onclose:function(){a.close(!1)}})};a.createLabels=function(c,b){l.picker(c,function(){c.innerText?(b.labels="get("+r(c)+")",jSuites.focus(c)):b.labels=""})};a.createTabs=function(c){jSuites.tabs(c,{palette:"modern",animation:!0})};a.inputType=function(c){jSuites.dropdown(c,{data:[{text:g("Line chart"),value:"line"},{text:g("Bar chart"),value:"bar"},{text:g("Pie chart"),
value:"pie"},{text:g("Doughnut chart"),value:"doughnut"},{text:g("Radar chart"),value:"radar"}],onchange:function(b,k,h,f){for(b=0;b<a.root.children.length;b++)a.root.children[b].classList.contains("all")||a.root.children[b].classList.contains(f)?a.root.children[b].style.display="":a.root.children[b].style.display="none";for(b=0;b<a.rootstyle.children.length;b++)a.rootstyle.children[b].classList.contains("all")||a.rootstyle.children[b].classList.contains(f)?a.rootstyle.children[b].style.display="":
a.rootstyle.children[b].style.display="none"}})};a.inputIndexAxis=function(c){jSuites.dropdown(c,{data:[{text:g("Horizontally"),value:"x"},{text:g("Vertically"),value:"y"}]})};a.inputLegend=function(c){jSuites.dropdown(c,{data:[{text:g("Top"),value:"top"},{text:g("Left"),value:"left"},{text:g("Right"),value:"right"},{text:g("Bottom"),value:"bottom"},{text:g("Disable"),value:"none"}]})};a.open=function(c,b){c.blur();a.modal.isOpen()&&a.close(!1);a.instance=this;a.container=c;a.chartOptions=null;this.resetSelection();
c=JSON.parse(JSON.stringify(b.chart));b=a.tabsElement.querySelectorAll("[data-path]");for(var k=0;k<b.length;k++){var h=b[k];if(val=h.getAttribute("data-path")){var f=jSuites.path.call(c,val);f||(f=h.getAttribute("data-value"),"checkbox"===h.type&&(f="true"===f?!0:!1));h["@bind"]&&(a[h["@bind"]]=f)}}a.series=c.data.datasets;a.chartOptions=c;a.modal.open()};a.onchange=function(c,b){if(a.chartOptions){var k=c=null;if(b&&b.length)for(var h=0;h<b.length;h++){var f=b[h].element;c="checkbox"==f.type?f.checked:
"function"===typeof f.val?f.val():f.value;(k=f.getAttribute("data-path"))&&jSuites.path.call(a.chartOptions,k,c)}a.chartOptions&&(d&&clearTimeout(d),d=setTimeout(function(){a.container&&a.container.update(a.chartOptions);d=null},50))}};a.close=function(c){a.container&&(!0===c?a.container.save(JSON.parse(JSON.stringify(a.chartOptions))):a.container.save(),a.container=null);a.modal.isOpen()&&a.modal.close()};return lemonade.element(e,a,{Series:E})},G=function(){var a={destroyCell:function(d,e,c,b){d.classList.remove("jss_chart_cell");
b.parent.tools.removeChild(b.records[c][e].chart);b.records[c][e].chart=null;b.value(e,c,"")},createCell:function(d,e,c,b,k,h){if(d){var f=k.records[b][c].chart;if(!f)d.classList.add("jss_chart_cell"),f=document.createElement("div"),f.classList.add("jss_chart"),f.classList.add("jss_object"),f.classList.add("jpanel"),f.setAttribute("tabindex",900),f.style.width="400px",f.style.height="300px",f.style.zIndex=3,d.ondblclick=function(){f.style.display=""},f.refresh=function(){h.top=parseInt(this.style.top)||
0;h.left=parseInt(this.style.left)||0;h.width=parseInt(this.style.width)||400;h.height=parseInt(this.style.height)||300},f.update=function(q){null==q&&(q=h.chart);x(k,c,b,q)},f.delete=function(){k.setProperty(c,b,null)},f.dblclick=function(){k.getConfig().editable&&!d.classList.contains("readonly")&&k.parent.plugins.charts.settings.open.call(k,f,h)},f.contextmenu=function(q){if(l.current&&l.current.getConfig().editable&&!d.classList.contains("readonly")){var p=[];p.push({icon:"flip_to_front",title:g("Flip to front"),
onclick:function(){for(var n=f,y=n.parentNode.querySelectorAll(".jss_chart"),t=0,u,v=0;v<y.length;v++)u=parseInt(y[v].style.zIndex),u>t&&(t=u);n.style.zIndex=t+1}});p.push({icon:"flip_to_back",title:g("Flip to back"),onclick:function(){var n=f;n.parentNode.querySelectorAll(".jss_chart");n.style.zIndex=3}});p.push({type:"divisor"});p.push({icon:"settings",title:g("Chart settings"),onclick:function(){f.dblclick()}});p.push({icon:"delete",title:g("Delete chart"),onclick:function(){f.delete()}});l.current.parent.contextmenu.contextmenu.open(q,
p)}},f.save=function(q){if(null!=q){var p=Object.assign({},h);p.chart=q;k.setProperty(c,b,p)}else f.update()},k.records[b][c].chart=f,k.parent.tools.appendChild(f),h.top&&(f.style.top=parseInt(h.top)+"px"),h.left&&(f.style.left=parseInt(h.left)+"px"),h.width&&(f.style.width=parseInt(h.width)+"px"),h.height&&(f.style.height=parseInt(h.height)+"px"),h.zIndex&&(f.style.zIndex=parseInt(h.zIndex));else if(""==e)return f.delete(),""}if((e=JSON.stringify(h.chart).match(/get\(.*?\)/gi))&&e.length){for(var m=
0;m<e.length;m++)e[m]=e[m].substring(4,e[m].length-1);e.join(",")}else e="";e="=CHARTS("+e+")";k.executeFormula(e,c,b);return e}};a.updateCell=a.createCell;a.openEditor=function(d,e,c,b,k,h){return!1};a.closeEditor=function(d,e,c,b,k,h){return!1};a.get=function(d,e){return"[CHARTS]"};return a}(),H=function(){var a=this.instance.getProperty(this.x,this.y).chart;a&&x(this.instance,this.x,this.y,a);return""},x=function(a,d,e,c){var b=a.records[e][d].chart;b.innerText="";canvas=document.createElement("canvas");
b.appendChild(canvas);try{var k=JSON.stringify(c);k=k.replace(RegExp('"get((.*?))"',"gi"),"$1");k=a.executeFormula("="+k,null,null,null,!0);if(""==jSuites.path.call(k,"data.labels")){for(d=a=0;d<k.data.datasets.length;d++)a=Math.max(a,k.data.datasets[d].data.length);jSuites.path.call(k,"data.labels",Array.from(Array(a).keys()))}var h=document.createElement("i");h.classList.add("material-icons");h.innerText="minimize";h.onclick=function(){b.style.display="none"};b.appendChild(h);b.classList.remove("jss_chart_error");
b.removeAttribute("data-error");new Chart(canvas,k)}catch(f){b.innerText="",b.classList.add("jss_chart_error"),b.setAttribute("data-error",jSuites.translate("Something went wrong")),console.error(f)}if(k=z.label())h=document.createElement("div"),h.style.position="absolute",h.style.bottom="0px",h.style.left="0px",h.innerText=k,h.margin="40px",b.appendChild(h)},I=function(a,d){var e={toolbar:function(c){c.items.push({content:"addchart",type:"i",title:g("Insert chart"),onclick:function(){var b=l.current.getRange();
b&&(b=b.split("!")[1]);e.open(l.current,b,"")}});return c},onevent:function(c,b,k){if("onbeforepaste"==c){for(c=0;c<k.length;c++)for(b=0;b<k[c].length;b++)"=CHARTS"==(""+k[c][b]).substr(0,7)&&(k[c][b]="");return k}},contextMenu:function(c,b,k,h,f,m,q,p){if(null!=b&&null!=k){h={title:g("Insert chart"),icon:"addchart",onclick:function(){var n=l.helpers.getColumnNameFromCoords(b,k);e.open(c,"",n)}};m=0;for(let n in f)if("divisor"==f[n].type||"line"==f[n].type){m=parseInt(n)+1;break}f.splice(m,0,{type:"divisor"});
f.splice(m,0,h)}},open:function(c,b,k){var h=c.getData(!0);e.input.instance=c;e.input.data=b;e.input.haveLabels=jSuites.isNumeric(h[0][0])?!1:!0;e.input.cellName=k;e.input.modal.open()}};d=document.createElement("div");a.tools.append(d);lemonade.render(function(){return lemonade.element('\n                <div>\n                    <div><Inputchart @ref="self.input" /></div>\n                    <div><Settings @ref="self.settings" /></div>\n                </div>\n            ',e,{Inputchart:B,Settings:F})},
d);return e},z=function(){var a=function(d){a.license=d;a.run()};a.k="745048504833";a.apply=function(d,e){var c=jSuites.sha512,b="",k="";128<d.length&&(d=c(d));for(var h=0;128>h;h++){var f=d[h]?d[h].charCodeAt(0):0;b+=String.fromCharCode(54^f);k+=String.fromCharCode(92^f)}return c(k+c(b+e))};a.run=function(){if("undefined"==typeof a.result){a.result=1;try{if(a.license){var d=window.atob(a.license);d=d.split(",");if(d[1])if(d[1]=window.atob(d[1]),d[0]!=a.apply(a.k,d[1]))a.result=3;else if(d[1]=JSON.parse(d[1]),
d[1].date){var e=window.location.hostname||"localhost",c=e.split(".");e=e.split(".");2<e.length&&!jSuites.isNumeric(e[e.length-1])&&c.shift();c=c.join(".");e=e.join(".");-1==d[1].domain.indexOf(c)&&-1==d[1].domain.indexOf(e)?a.result=4:d[1].scope&&0<=d[1].scope.indexOf("charts")?(a.result=6,a.name=d[1].name):a.result=5}else a.result=4;else a.result=2}}catch(b){}}return a.result};a.label=function(){var d="";a.result&&1!=a.result?2==a.result||3==a.result||4==a.result?d="A valid license is required":
5==a.result&&(d="This plugin is not in the scope of this license"):d="License required";return d};a.status=function(){return a.result};return a}(),w=function(){return!0};w.oninit=function(a,d){a.setPlugins({charts:I})};w.license=function(a){null===l&&(l=this);l.editors.chart||(l.editors.chart=G,l.formula.setFormula({CHARTS:H}));z(a)};return w});
