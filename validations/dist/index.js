if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

var _$_ebbf=["translate","","status","scope","validations","indexOf","This extension is not included on the scope of this license","License required","version","This extension request Jspreadsheet Pro v9+","config","action","range","!","split","current",":","getTokensFromRange","helpers","splice","push","length","parent","bind","sort","forEach","oldValue","index","value","worksheets","object","keys","every","format","map","entries"," .conditional_formatting_","name","_"," {\x0A",";\x0A","join","\x0A}","jss_validations_","getElementById","style","createElement","id","appendChild","head","getElementsByTagName","innerHTML","getValidations","get","setValidations","set","resetValidations","reset","isArray","JSS: input should be an array","error","stringify","parse","call","setHistory","persistence","onvalidation","dispatch","build","updateAll","getWorksheetName","updateFormula","#REF!","updateWorksheetName","between","is not between","not between","less than","<","less than or equal to","<=","bigger than",">","bigger than or equal to",">=","equal to","=","differente to","!=","contains","not contains","is a valid email","valid email","is a valid url","valid url","is a valid date","valid date","before","on or before","after","on or after","List of Items","different to","toUpperCase","replace","substr","create","instance","calendar","element","a number ","a text ","a date ","an element of the list: ","The content of this cell must be ","type","criteria"," ","list"," [",",","]"," and ","mask","locale","UTC","DateTimeFormat","2012","yyyy","12","mm","19","dd","operator","createType","number","Number","text","Text","date","Date","List","textLength","Text length","setData","children","el","all","classList","display","none","jss_object","add","header","dropdown","createOperator","createPicker","innerText","focus","picker","createColorPicker","color","close","The range is mandatory","The type is mandatory","The criteria is mandatory","className","allowBlank","includes","start","end","formatColor","formatBackgroundColor","background-color","bold","font-weight","italic","font-style","Cell range","Action","Warning message","Reject entry","Format style","Type","Operator","Color","Background color","Add a custom CSS className","Save","Back","records","data-tooltip","removeAttribute","jss_warning","remove","data-validation","getAttribute","v","getColumnNameFromCoords","setAttribute","reject","conditional_formatting_","init","updateDataFromSelection","message","All validations found for this selection","data","filter","No validation found for this selection","closeForm","toolbar","settings","i","Add new validation","getRange","open","items","modal","onevent","onafterchanges","onchangeproperty","onformulachain","x","y","oncreatecell","onbeforechange","onselection","getCoordsFromColumnName","getRangeFromTokens","getCoordsFromRange","onload","onrenameworksheet","onchangereferences","ignoreHistory","historyCascade","onundo","onredo","createModal","Validations","420px","612px","openForm","warning","listContainer","settingsContainer","block","removeValidation","div","append","tools","render","oninit","setPlugins","license","undefined","exports","function","amd"];;;(function(global,factory){ typeof exports=== _$_ebbf[30]&&  typeof module!== _$_ebbf[254]?module[_$_ebbf[255]]= factory(): typeof define=== _$_ebbf[256]&& define[_$_ebbf[257]]?define(factory):global[_$_ebbf[4]]= factory()}(this,(function(){var JSS=null;var T=jSuites[_$_ebbf[0]];var License=function(){var txt=_$_ebbf[1];if(this[_$_ebbf[2]]== 8){if(!this[_$_ebbf[3]]|| this[_$_ebbf[3]][_$_ebbf[5]](_$_ebbf[4])==  -1){txt= _$_ebbf[6]}}else {txt= _$_ebbf[7]};if(!txt){var v=JSS[_$_ebbf[8]]();if(!v||  !v[_$_ebbf[8]] || parseInt(v[_$_ebbf[8]])< 9){txt= _$_ebbf[9]}};return txt};var orderOfPriorities={reject:2,warning:1,format:0};var sortValidations=function(a,b){if(this[_$_ebbf[10]][_$_ebbf[4]][a]&& this[_$_ebbf[10]][_$_ebbf[4]][a][_$_ebbf[11]]){a= this[_$_ebbf[10]][_$_ebbf[4]][a][_$_ebbf[11]]}else {a= 0};if(this[_$_ebbf[10]][_$_ebbf[4]][b]&& this[_$_ebbf[10]][_$_ebbf[4]][b][_$_ebbf[11]]){b= this[_$_ebbf[10]][_$_ebbf[4]][b][_$_ebbf[11]]}else {b= 0};return orderOfPriorities[a]- orderOfPriorities[b]};var cache=function(action,validation,index){if(validation&& validation[_$_ebbf[12]]){var i,t,r,w,cells;if(validation[_$_ebbf[12]][_$_ebbf[5]](_$_ebbf[13])> 0){t= validation[_$_ebbf[12]][_$_ebbf[14]](_$_ebbf[13]);r= t[1];w= W(t[0])}else {r= validation[_$_ebbf[12]];w= JSS[_$_ebbf[15]]};if(!w[_$_ebbf[4]]){return};if(r[_$_ebbf[5]](_$_ebbf[16])===  -1){cells= [r]}else {cells= JSS[_$_ebbf[18]][_$_ebbf[17]](r)};cells[_$_ebbf[25]](function(cellName){if(!w[_$_ebbf[4]][cellName]){w[_$_ebbf[4]][cellName]= []};if(action=== 0){i= w[_$_ebbf[4]][cellName][_$_ebbf[5]](index);if(i>= 0){w[_$_ebbf[4]][cellName][_$_ebbf[19]](i,1)}}else {w[_$_ebbf[4]][cellName][_$_ebbf[20]](index)};if(w[_$_ebbf[4]][cellName][_$_ebbf[21]]> 1){w[_$_ebbf[4]][cellName][_$_ebbf[24]](sortValidations[_$_ebbf[23]](w[_$_ebbf[22]]))}})}};var updateCache=function(records){for(var i=0;i< records[_$_ebbf[21]];i++){if(records[i][_$_ebbf[26]]){cache(0,records[i][_$_ebbf[26]],records[i][_$_ebbf[27]])};if(records[i][_$_ebbf[28]]){cache(1,records[i][_$_ebbf[28]],records[i][_$_ebbf[27]])}}};var createCache=function(spreadsheet){for(var i=0;i< spreadsheet[_$_ebbf[29]][_$_ebbf[21]];i++){spreadsheet[_$_ebbf[29]][i][_$_ebbf[4]]= {}};var o=spreadsheet[_$_ebbf[10]][_$_ebbf[4]];if(o){for(var i=0;i< o[_$_ebbf[21]];i++){cache(1,o[i],i)}}};var destroyCache=function(spreadsheet){for(var i=0;i< spreadsheet[_$_ebbf[29]][_$_ebbf[21]];i++){spreadsheet[_$_ebbf[29]][i][_$_ebbf[4]]= {}}};var Validations=(function(){var compareObjs=function(objA,objB){var typeA= typeof objA;var typeB= typeof objB;if(typeA!== _$_ebbf[30]|| typeB!== _$_ebbf[30]){return objA=== objB};if(objA=== null|| objB=== null){return objA=== objB};var keysA=Object[_$_ebbf[31]](objA);var keysB=Object[_$_ebbf[31]](objB);if(keysA[_$_ebbf[21]]!== keysB[_$_ebbf[21]]){return false};keysA[_$_ebbf[24]]();keysB[_$_ebbf[24]]();for(let i=0;i< keysA[_$_ebbf[21]];i++){if(keysA[i]!== keysB[i]){return false}};return keysA[_$_ebbf[32]](function(key){return compareObjs(objA[key],objB[key])})};var applyCSS=function(spreadsheet){var o=spreadsheet[_$_ebbf[10]][_$_ebbf[4]];if(o&& o[_$_ebbf[21]]){var style=_$_ebbf[1];for(var i=0;i< o[_$_ebbf[21]];i++){if(o[i]&& o[i][_$_ebbf[33]]){var classStyles=Object[_$_ebbf[35]](o[i][_$_ebbf[33]])[_$_ebbf[34]](function([property,value]){return `\t${property}: ${value} !important\n`});style+= _$_ebbf[36]+ spreadsheet[_$_ebbf[37]]+ _$_ebbf[38]+ i+ _$_ebbf[39]+ classStyles[_$_ebbf[41]](_$_ebbf[40])+ _$_ebbf[42]}};var styleTag=document[_$_ebbf[44]](_$_ebbf[43]+ spreadsheet[_$_ebbf[37]]);if(!styleTag){styleTag= document[_$_ebbf[46]](_$_ebbf[45]);styleTag[_$_ebbf[47]]= _$_ebbf[43]+ spreadsheet[_$_ebbf[37]];document[_$_ebbf[50]](_$_ebbf[49])[0][_$_ebbf[48]](styleTag)};styleTag[_$_ebbf[51]]= style}};var insertValidation=function(v){if(!this[_$_ebbf[10]][_$_ebbf[4]]){this[_$_ebbf[10]][_$_ebbf[4]]= []};var index=this[_$_ebbf[10]][_$_ebbf[4]][_$_ebbf[21]];this[_$_ebbf[10]][_$_ebbf[4]][_$_ebbf[20]](v);return index};var updateValidation=function(index,v){this[_$_ebbf[10]][_$_ebbf[4]][index]= v};var component=function(obj){obj[_$_ebbf[52]]= component[_$_ebbf[53]];obj[_$_ebbf[54]]= component[_$_ebbf[55]];obj[_$_ebbf[56]]= component[_$_ebbf[57]]};component[_$_ebbf[55]]= function(updates){if(!Array[_$_ebbf[58]](updates)&&  typeof (updates)=== _$_ebbf[30]){updates= [{value:updates}]};if(!Array[_$_ebbf[58]](updates)){console[_$_ebbf[60]](_$_ebbf[59])}else {var w=this;var validationIndex;var oldValue;var records=[];for(var i=0;i< updates[_$_ebbf[21]];i++){oldValue= null;if(updates[i][_$_ebbf[27]]>= 0){validationIndex= updates[i][_$_ebbf[27]];if(this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]]&& this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]][validationIndex]){oldValue= JSON[_$_ebbf[62]](JSON[_$_ebbf[61]](this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]][validationIndex]))};updateValidation[_$_ebbf[63]](this[_$_ebbf[22]],validationIndex,updates[i][_$_ebbf[28]])}else {validationIndex= insertValidation[_$_ebbf[63]](this[_$_ebbf[22]],updates[i][_$_ebbf[28]])};records[_$_ebbf[20]]({index:validationIndex,oldValue:oldValue,value:updates[i][_$_ebbf[28]]})};this[_$_ebbf[22]][_$_ebbf[64]]({worksheet:this,action:_$_ebbf[54],records:records});this[_$_ebbf[65]](_$_ebbf[54],{data:records});applyCSS(this[_$_ebbf[22]]);updateCache(records);this[_$_ebbf[22]][_$_ebbf[67]](_$_ebbf[66],this,records)}};component[_$_ebbf[53]]= function(k){var o=this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]];if(k){return o[k]}else {return o}};component[_$_ebbf[57]]= function(records){if(!Array[_$_ebbf[58]](records)){records= [records]};records= records[_$_ebbf[34]](function(v){return {index:v,value:null}});component[_$_ebbf[55]][_$_ebbf[63]](this,records)};component[_$_ebbf[68]]= function(){applyCSS(this);createCache(this)};component[_$_ebbf[69]]= function(referencesToUpdate,referencesToDelete){var v=null;var o=this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]];var record={};var records=[];if(o&& o[_$_ebbf[21]]){for(var i=0;i< o[_$_ebbf[21]];i++){var record={index:i,value:JSON[_$_ebbf[62]](JSON[_$_ebbf[61]](o[i]))};v= this[_$_ebbf[71]](record[_$_ebbf[28]][_$_ebbf[12]],referencesToUpdate,referencesToDelete,this[_$_ebbf[70]]());if(v!== record[_$_ebbf[28]][_$_ebbf[12]]){if(v[_$_ebbf[5]](_$_ebbf[72])>= 0){record[_$_ebbf[28]]= null}else {record[_$_ebbf[28]][_$_ebbf[12]]= v};records[_$_ebbf[20]](record)}};component[_$_ebbf[55]][_$_ebbf[63]](this,records)}};component[_$_ebbf[73]]= function(f,t){var v=null;var o=this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]];var records=[];if(o&& o[_$_ebbf[21]]){for(var i=0;i< o[_$_ebbf[21]];i++){v= JSS[_$_ebbf[18]][_$_ebbf[73]](o[i][_$_ebbf[12]],f,t);if(v!== o[i][_$_ebbf[12]]){var record={index:i,value:o[i]};record[_$_ebbf[28]][_$_ebbf[12]]= v;records[_$_ebbf[20]](record)}};component[_$_ebbf[55]][_$_ebbf[63]](this,records)}};return component})();var Criteria={number:[{text:T(_$_ebbf[74]),value:_$_ebbf[74]},{text:T(_$_ebbf[75]),value:_$_ebbf[76]},{text:T(_$_ebbf[77]),value:_$_ebbf[78]},{text:T(_$_ebbf[79]),value:_$_ebbf[80]},{text:T(_$_ebbf[81]),value:_$_ebbf[82]},{text:T(_$_ebbf[83]),value:_$_ebbf[84]},{text:T(_$_ebbf[85]),value:_$_ebbf[86]},{text:T(_$_ebbf[87]),value:_$_ebbf[88]}],text:[{text:T(_$_ebbf[89]),value:_$_ebbf[89]},{text:T(_$_ebbf[90]),value:_$_ebbf[90]},{text:T(_$_ebbf[85]),value:_$_ebbf[86]},{text:T(_$_ebbf[91]),value:_$_ebbf[92]},{text:T(_$_ebbf[93]),value:_$_ebbf[94]}],date:[{text:T(_$_ebbf[95]),value:_$_ebbf[96]},{text:T(_$_ebbf[85]),value:_$_ebbf[86]},{text:T(_$_ebbf[97]),value:_$_ebbf[78]},{text:T(_$_ebbf[98]),value:_$_ebbf[80]},{text:T(_$_ebbf[99]),value:_$_ebbf[82]},{text:T(_$_ebbf[100]),value:_$_ebbf[84]},{text:T(_$_ebbf[74]),value:_$_ebbf[74]},{text:T(_$_ebbf[76]),value:_$_ebbf[76]}],list:[{text:T(_$_ebbf[101]),value:_$_ebbf[1]}],textLength:[{text:T(_$_ebbf[74]),value:_$_ebbf[74]},{text:T(_$_ebbf[75]),value:_$_ebbf[76]},{text:T(_$_ebbf[77]),value:_$_ebbf[78]},{text:T(_$_ebbf[79]),value:_$_ebbf[80]},{text:T(_$_ebbf[81]),value:_$_ebbf[82]},{text:T(_$_ebbf[83]),value:_$_ebbf[84]},{text:T(_$_ebbf[85]),value:_$_ebbf[86]},{text:T(_$_ebbf[102]),value:_$_ebbf[88]}]};var W=function(o,v){if(Array[_$_ebbf[58]](o)){o= o[0]};o= o[_$_ebbf[104]]( new RegExp(/'/g),_$_ebbf[1])[_$_ebbf[103]]();if(v=== undefined){return window[o]?window[o]:null}else {window[o]= v}};var isFormula=function(value){var t=(_$_ebbf[1]+ value)[_$_ebbf[105]](0,1);return t=== _$_ebbf[86]};var Calendar=function(){var self=this;self[_$_ebbf[106]]= function(o){self[_$_ebbf[107]]= jSuites[_$_ebbf[108]](o,this)};var template=`<input class="jss_object" @ready="self.create(this)" style="width: 100%;" />`;return lemonade[_$_ebbf[109]](template,self)};var startOfErrorMessage={number:_$_ebbf[110],text:_$_ebbf[111],date:_$_ebbf[112],list:_$_ebbf[113]};var validationDefaultErrorMessage=function(validation){var message=_$_ebbf[114]+ startOfErrorMessage[validation[_$_ebbf[115]]];if(validation[_$_ebbf[116]]){message+= _$_ebbf[117]+ validation[_$_ebbf[116]]};if(validation[_$_ebbf[115]]=== _$_ebbf[118]){message+= _$_ebbf[119]+ validation[_$_ebbf[28]][0][_$_ebbf[41]](_$_ebbf[120])+ _$_ebbf[121]}else {message+= _$_ebbf[117]+ validation[_$_ebbf[28]][0];if(validation[_$_ebbf[28]][_$_ebbf[21]]> 1){message+= _$_ebbf[122]+ validation[_$_ebbf[28]][1]}};return message};var getMask=function(o){if(o[_$_ebbf[123]]){return o[_$_ebbf[123]]};if(o[_$_ebbf[33]]){return o[_$_ebbf[33]]};var locale=o[_$_ebbf[124]];var date= new Date(Date[_$_ebbf[125]](2012,11,20));var result= new Intl[_$_ebbf[126]](locale)[_$_ebbf[33]](date);result= result[_$_ebbf[104]](_$_ebbf[127],_$_ebbf[128]);result= result[_$_ebbf[104]](_$_ebbf[129],_$_ebbf[130]);result= result[_$_ebbf[104]](_$_ebbf[131],_$_ebbf[132]);return result};var List=function(){var self=this;var template=`<div>
                <div class="row middle p8">
                    <div class="column f1 cursor" onclick="self.parent.openForm(self)">
                        <div class="p2"><b>{{self.type}}</b> <span>({{self.range}})</span></div>
                        <div class="p2">{{self.criteria}}: {{self.value}}</div>
                    </div><div>
                        <div><i class='material-icons cursor' onclick="self.parent.removeValidation(self.index)">delete</i></div>
                    </div>
                </div>
            </div>
        `;return lemonade[_$_ebbf[109]](template,self)};var Settings=function(){var self=this;var dropdown=null;self[_$_ebbf[133]]= _$_ebbf[1];self[_$_ebbf[134]]= function(o){jSuites[_$_ebbf[154]](o,{data:[{value:_$_ebbf[135],text:T(_$_ebbf[136])},{value:_$_ebbf[137],text:T(_$_ebbf[138])},{value:_$_ebbf[139],text:T(_$_ebbf[140])},{value:_$_ebbf[118],text:T(_$_ebbf[141])},{value:_$_ebbf[142],text:T(_$_ebbf[143])}],onchange:function(a,b,c,d){dropdown[_$_ebbf[144]](Criteria[d]|| []);self[_$_ebbf[133]]= _$_ebbf[1];self[_$_ebbf[116]]= _$_ebbf[1];for(var i=0;i< self[_$_ebbf[146]][_$_ebbf[145]][0][_$_ebbf[145]][_$_ebbf[21]];i++){if(self[_$_ebbf[146]][_$_ebbf[145]][0][_$_ebbf[145]][i][_$_ebbf[148]][_$_ebbf[89]](_$_ebbf[147])|| self[_$_ebbf[146]][_$_ebbf[145]][0][_$_ebbf[145]][i][_$_ebbf[148]][_$_ebbf[89]](d)){self[_$_ebbf[146]][_$_ebbf[145]][0][_$_ebbf[145]][i][_$_ebbf[45]][_$_ebbf[149]]= _$_ebbf[1]}else {self[_$_ebbf[146]][_$_ebbf[145]][0][_$_ebbf[145]][i][_$_ebbf[45]][_$_ebbf[149]]= _$_ebbf[150]}}},onload:function(a,b){b[_$_ebbf[153]][_$_ebbf[148]][_$_ebbf[152]](_$_ebbf[151])}})};self[_$_ebbf[155]]= function(o){dropdown= jSuites[_$_ebbf[154]](o,{data:Criteria[_$_ebbf[135]],autocomplete:true,onchange:function(a,b,c,d){self[_$_ebbf[133]]= d},onload:function(a,b){b[_$_ebbf[153]][_$_ebbf[148]][_$_ebbf[152]](_$_ebbf[151])}})};self[_$_ebbf[156]]= function(o){JSS[_$_ebbf[159]](o,function(){if(o[_$_ebbf[157]][_$_ebbf[5]](_$_ebbf[13])==  -1){o[_$_ebbf[157]]= JSS[_$_ebbf[15]][_$_ebbf[70]]()+ _$_ebbf[13]+ o[_$_ebbf[157]]}else {o[_$_ebbf[157]]= o[_$_ebbf[157]]};self[_$_ebbf[12]]= o[_$_ebbf[157]];jSuites[_$_ebbf[158]](o)})};self[_$_ebbf[160]]= function(o){jSuites[_$_ebbf[161]](o)};self[_$_ebbf[162]]= function(save){if(save){if(!self[_$_ebbf[12]]){alert(T(_$_ebbf[163]));return};if(!self[_$_ebbf[115]]){alert(T(_$_ebbf[164]));return};if(!self[_$_ebbf[116]]){alert(T(_$_ebbf[165]));return};if(self[_$_ebbf[12]][_$_ebbf[5]](_$_ebbf[13])===  -1){self[_$_ebbf[12]]= self[_$_ebbf[107]][_$_ebbf[70]]()+ _$_ebbf[13]+ self[_$_ebbf[12]]};var newValidation={range:self[_$_ebbf[12]],action:self[_$_ebbf[11]],type:self[_$_ebbf[115]],criteria:self[_$_ebbf[116]],text:self[_$_ebbf[137]],className:self[_$_ebbf[166]],allowBlank:self[_$_ebbf[167]]};if(newValidation[_$_ebbf[116]][_$_ebbf[168]](_$_ebbf[74])){newValidation[_$_ebbf[28]]= [self[_$_ebbf[169]],self[_$_ebbf[170]]]}else {newValidation[_$_ebbf[28]]= [self[_$_ebbf[169]]]};if(newValidation[_$_ebbf[11]]=== _$_ebbf[33]){newValidation[_$_ebbf[33]]= {};if(self[_$_ebbf[171]]){newValidation[_$_ebbf[33]][_$_ebbf[161]]= self[_$_ebbf[171]]};if(self[_$_ebbf[172]]){newValidation[_$_ebbf[33]][_$_ebbf[173]]= self[_$_ebbf[172]]};if(self[_$_ebbf[174]]){newValidation[_$_ebbf[33]][_$_ebbf[175]]= _$_ebbf[174]};if(self[_$_ebbf[176]]){newValidation[_$_ebbf[33]][_$_ebbf[177]]= _$_ebbf[176]}};var value={value:newValidation};if(self[_$_ebbf[27]]!== null){value[_$_ebbf[27]]= self[_$_ebbf[27]]};self[_$_ebbf[107]][_$_ebbf[54]](value)}};var template=`<div>
            <div>
                <!-- Validation type -->
                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${T(_$_ebbf[178])}</label>
                            <div @ready="self.createPicker(this)" @bind="self.range"></div>
                        </div>
                    </div>
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${T(_$_ebbf[179])}</label>
                            <select style="padding: 8px;" @bind="self.action">
                                <option value="warning">${T(_$_ebbf[180])}</option>
                                <option value="reject">${T(_$_ebbf[181])}</option>
                                <option value="format">${T(_$_ebbf[182])}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="all">
                    <div class="row" style="{{self.action === 'format' && 'display: none;'}}">
                        <div class="column f1">
                            <div class="form-group">
                                <label class="label">${T(_$_ebbf[180])}</label>
                                <input type="text" @bind="self.text" class="jss_object w100">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row all">
                    <div class="column f1">
                        <div class="form-group">
                            <label class="label">${T(_$_ebbf[183])}</label>
                            <div @ready="self.createType(this)" @bind="self.type"></div>
                        </div>
                    </div><div class="column f1">
                        <div class="form-group">
                            <label class="label">${T(_$_ebbf[184])}</label>
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
                                            <label class="label">${T(_$_ebbf[185])}</label><br>
                                            <input @ready="self.createColorPicker(this)" @bind="self.formatColor" class="jss_object w100">
                                        </div>
                                    </div>
                                    <div class="column f1">
                                        <div class="form-group">
                                            <label class="label">${T(_$_ebbf[186])}</label><br>
                                            <input @ready="self.createColorPicker(this)" @bind="self.formatBackgroundColor" class="jss_object w100">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column f1">
                                        <div class="form-group">
                                            <input type="text" placeholder="${T(_$_ebbf[187])}" @bind="self.className" class="jss_object">
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
                            <button type="button" class="jbutton dark w100" onclick="self.close(true)">${T(_$_ebbf[188])}</button>
                        </div>
                    </div>
                </div>
            </div>
            <p onclick="self.parent.closeForm()" class="cursor">${T(_$_ebbf[189])}</p>
        </div>`;return lemonade[_$_ebbf[109]](template,self,{Calendar:Calendar,List:List})};var removeValidation=function(x,y){if(this[_$_ebbf[190]][y]&& this[_$_ebbf[190]][y][x]&& this[_$_ebbf[190]][y][x][_$_ebbf[109]]){this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[192]](_$_ebbf[191]);this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[148]][_$_ebbf[194]](_$_ebbf[193]);var classes=this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[196]](_$_ebbf[195]);if(classes){classes= classes[_$_ebbf[14]](_$_ebbf[120]);for(var i=0;i< classes[_$_ebbf[21]];i++){this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[148]][_$_ebbf[194]](classes[i])}};this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[192]](_$_ebbf[195])}};var applyValidation=function(x,y,value,ignoreRejection){if(!this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]]||  !(this[_$_ebbf[190]][y]&& this[_$_ebbf[190]][y][x]&& this[_$_ebbf[190]][y][x][_$_ebbf[109]])){return};removeValidation[_$_ebbf[63]](this,x,y);if(value== null|| value== undefined){value= this[_$_ebbf[190]][y][x][_$_ebbf[197]]};var w=this;var cellName=JSS[_$_ebbf[18]][_$_ebbf[198]](x,y);if(this[_$_ebbf[190]][y][x][_$_ebbf[109]]&& (this[_$_ebbf[4]]&& this[_$_ebbf[4]][cellName]!== undefined)){var validationIndexes=this[_$_ebbf[4]][cellName];for(var i=0;i< validationIndexes[_$_ebbf[21]];i++){var validationIndex=validationIndexes[i];var validation=this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]][validationIndex];if(!validation){return};var valid=jSuites[_$_ebbf[4]](value,validation);if(!valid){if(validation[_$_ebbf[11]]!== _$_ebbf[33]){var text=validation[_$_ebbf[137]]|| validationDefaultErrorMessage(validation);this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[199]](_$_ebbf[191],text);this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[148]][_$_ebbf[152]](_$_ebbf[193]);if(validation[_$_ebbf[11]]=== _$_ebbf[200]&&  !ignoreRejection){setTimeout(function(){w[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[192]](_$_ebbf[191]);w[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[148]][_$_ebbf[194]](_$_ebbf[193])},2500);return false};break}}else {if(validation[_$_ebbf[11]]=== _$_ebbf[33]){var classes=[];if(validation[_$_ebbf[166]]){classes= validation[_$_ebbf[166]][_$_ebbf[14]](_$_ebbf[120])};classes[_$_ebbf[20]](_$_ebbf[201]+ this[_$_ebbf[22]][_$_ebbf[37]]+ _$_ebbf[38]+ validationIndex);for(var j=0;j< classes[_$_ebbf[21]];j++){this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[148]][_$_ebbf[152]](classes[j])};this[_$_ebbf[190]][y][x][_$_ebbf[109]][_$_ebbf[199]](_$_ebbf[195],classes)}}}}};var pluginValidations=function(spreadsheet,spreadsheetConfig){var self={};self[_$_ebbf[202]]= function(worksheet){Validations(worksheet)};self[_$_ebbf[203]]= function(h,range){if(h[_$_ebbf[21]]&& this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]]){var x1=h[0];var y1=h[1];var x2=h[2];var y2=h[3];var indexes=[];var cells=null;if(cells= this[_$_ebbf[4]]){for(var j=y1;j<= y2;j++){for(var i=x1;i<= x2;i++){var cellName=this[_$_ebbf[18]][_$_ebbf[198]](i,j);if(cells[cellName]){for(var t=0;t< cells[cellName][_$_ebbf[21]];t++){indexes[cells[cellName][t]]= true}}}}};var temp=this[_$_ebbf[22]][_$_ebbf[10]][_$_ebbf[4]][_$_ebbf[34]](function(validation,i){return {...validation,index:i}});self[_$_ebbf[204]]= T(_$_ebbf[205])+ _$_ebbf[117]+ (range|| _$_ebbf[1]);self[_$_ebbf[206]]= temp[_$_ebbf[207]](function(v,k){return indexes[k]})}else {self[_$_ebbf[206]]= []};if(!self[_$_ebbf[206]][_$_ebbf[21]]){self[_$_ebbf[204]]= T(_$_ebbf[208])+ _$_ebbf[117]+ (range|| _$_ebbf[1])};self[_$_ebbf[209]]()};self[_$_ebbf[210]]= function(toolbar){toolbar[_$_ebbf[216]][_$_ebbf[20]]({content:_$_ebbf[211],type:_$_ebbf[212],title:T(_$_ebbf[213]),onclick:function(){var range=JSS[_$_ebbf[15]][_$_ebbf[214]]();if(range){range= range[_$_ebbf[14]](_$_ebbf[13])[1]};self[_$_ebbf[215]](JSS[_$_ebbf[15]],range)}});return toolbar};self[_$_ebbf[215]]= function(instance,range){self[_$_ebbf[211]][_$_ebbf[107]]= instance;self[_$_ebbf[217]][_$_ebbf[215]]()};self[_$_ebbf[218]]= function(event,instance,a,b,c,d){if(event=== _$_ebbf[219]|| event=== _$_ebbf[220]|| event=== _$_ebbf[221]){a[_$_ebbf[25]](function(record){if(record[_$_ebbf[222]]&& record[_$_ebbf[223]]){applyValidation[_$_ebbf[63]](instance,record[_$_ebbf[222]],record[_$_ebbf[223]],null,true)}})}else {if(event=== _$_ebbf[224]){applyValidation[_$_ebbf[63]](instance,b,c)}else {if(event=== _$_ebbf[225]){if(!isFormula(d)){return applyValidation[_$_ebbf[63]](instance,b,c,d)}}else {if(event=== _$_ebbf[226]){self[_$_ebbf[203]][_$_ebbf[63]](instance,[a,b,c,d])}else {if(event=== _$_ebbf[66]){var affectedCells=null;a[_$_ebbf[25]](function(record){if(record[_$_ebbf[26]]&& record[_$_ebbf[26]][_$_ebbf[12]]){var cells=JSS[_$_ebbf[18]][_$_ebbf[17]](record[_$_ebbf[26]][_$_ebbf[12]]);cells[_$_ebbf[25]](function(cell){if(!affectedCells){affectedCells= {}};affectedCells[cell]= true})}});a[_$_ebbf[25]](function(record){if(record[_$_ebbf[28]]&& record[_$_ebbf[28]][_$_ebbf[12]]){var cells=JSS[_$_ebbf[18]][_$_ebbf[17]](record[_$_ebbf[28]][_$_ebbf[12]]);cells[_$_ebbf[25]](function(cell){if(!affectedCells){affectedCells= {}};affectedCells[cell]= true})}});if(affectedCells){var cells=Object[_$_ebbf[31]](affectedCells);cells[_$_ebbf[25]](function(cell){var t=cell[_$_ebbf[14]](_$_ebbf[13]);cell= JSS[_$_ebbf[18]][_$_ebbf[227]](t[1]);applyValidation[_$_ebbf[63]](W(t[0]),cell[0],cell[1],null,true)});var range=JSS[_$_ebbf[18]][_$_ebbf[228]](Object[_$_ebbf[31]](affectedCells));var selection=JSS[_$_ebbf[18]][_$_ebbf[229]](range);self[_$_ebbf[203]][_$_ebbf[63]](instance,selection,range)}}else {if(event=== _$_ebbf[230]){Validations[_$_ebbf[68]][_$_ebbf[63]](instance);var affectedCells=null;var o=instance[_$_ebbf[10]][_$_ebbf[4]];if(o&& o[_$_ebbf[21]]){o[_$_ebbf[25]](function(record){if(record[_$_ebbf[12]]){var cells=JSS[_$_ebbf[18]][_$_ebbf[17]](record[_$_ebbf[12]]);cells[_$_ebbf[25]](function(cell){if(!affectedCells){affectedCells= {}};affectedCells[cell]= true})}});if(affectedCells){var cells=Object[_$_ebbf[31]](affectedCells);cells[_$_ebbf[25]](function(cell){var t=cell[_$_ebbf[14]](_$_ebbf[13]);cell= JSS[_$_ebbf[18]][_$_ebbf[227]](t[1]);applyValidation[_$_ebbf[63]](W(t[0]),cell[0],cell[1],null,true)})}}}else {if(event=== _$_ebbf[231]|| event=== _$_ebbf[232]){if(!instance[_$_ebbf[22]][_$_ebbf[233]]){instance[_$_ebbf[22]][_$_ebbf[234]]= true;if(event=== _$_ebbf[231]){Validations[_$_ebbf[73]][_$_ebbf[63]](instance,c,b)}else {destroyCache(instance[_$_ebbf[22]]);Validations[_$_ebbf[69]][_$_ebbf[63]](instance,a,b);createCache(instance[_$_ebbf[22]])};instance[_$_ebbf[22]][_$_ebbf[234]]= false}}else {if(event=== _$_ebbf[235]){if(a[_$_ebbf[11]]== _$_ebbf[54]){var records=[];for(var i=0;i< a[_$_ebbf[190]][_$_ebbf[21]];i++){var record={index:a[_$_ebbf[190]][i][_$_ebbf[27]],value:a[_$_ebbf[190]][i][_$_ebbf[26]]};records[_$_ebbf[20]](record)};instance[_$_ebbf[54]](records)}}else {if(event=== _$_ebbf[236]){if(a[_$_ebbf[11]]== _$_ebbf[54]){instance[_$_ebbf[54]](a[_$_ebbf[190]])}}}}}}}}}}};self[_$_ebbf[237]]= function(o){self[_$_ebbf[217]]= jSuites[_$_ebbf[217]](o,{title:_$_ebbf[238],closed:true,width:_$_ebbf[239],height:_$_ebbf[240],backdrop:false})};self[_$_ebbf[241]]= function(s){self[_$_ebbf[211]][_$_ebbf[27]]= s[_$_ebbf[27]];self[_$_ebbf[211]][_$_ebbf[12]]= s[_$_ebbf[12]]|| self[_$_ebbf[211]][_$_ebbf[107]][_$_ebbf[214]]();self[_$_ebbf[211]][_$_ebbf[11]]= s[_$_ebbf[11]]|| _$_ebbf[242];self[_$_ebbf[211]][_$_ebbf[115]]= s[_$_ebbf[115]]|| _$_ebbf[135];self[_$_ebbf[211]][_$_ebbf[116]]= s[_$_ebbf[116]]|| _$_ebbf[74];if(s[_$_ebbf[28]]){self[_$_ebbf[211]][_$_ebbf[169]]= s[_$_ebbf[28]][0];self[_$_ebbf[211]][_$_ebbf[170]]= s[_$_ebbf[28]][1]}else {self[_$_ebbf[211]][_$_ebbf[169]]= _$_ebbf[1];self[_$_ebbf[211]][_$_ebbf[170]]= _$_ebbf[1]};self[_$_ebbf[171]]= _$_ebbf[1];self[_$_ebbf[172]]= _$_ebbf[1];self[_$_ebbf[174]]= _$_ebbf[1];self[_$_ebbf[176]]= _$_ebbf[1];self[_$_ebbf[166]]= _$_ebbf[1];self[_$_ebbf[243]][_$_ebbf[45]][_$_ebbf[149]]= _$_ebbf[150];self[_$_ebbf[244]][_$_ebbf[45]][_$_ebbf[149]]= _$_ebbf[245]};self[_$_ebbf[209]]= function(){self[_$_ebbf[243]][_$_ebbf[45]][_$_ebbf[149]]= _$_ebbf[245];self[_$_ebbf[244]][_$_ebbf[45]][_$_ebbf[149]]= _$_ebbf[150]};self[_$_ebbf[246]]= function(index){var range=spreadsheet[_$_ebbf[10]][_$_ebbf[4]][index][_$_ebbf[12]];self[_$_ebbf[211]][_$_ebbf[107]][_$_ebbf[56]](index)};var ComponentPlugin=function(){var template=`<div @ready="self.createModal(this)">
                <div @ref="self.listContainer">
                    <div>
                        <div class="p6">{{self.message}}</div><br/>
                        <div><List @loop="self.data" /></div>
                    </div>
                    <p><input type="button" value="${T(_$_ebbf[213])}" onclick="self.openForm({ index: null })" class="jbutton dark" /></p>
                </div>
                <div @ref="self.settingsContainer" style="display: none;"><Settings @ref="self.settings" /></div>
             </div>`;return lemonade[_$_ebbf[109]](template,self,{Settings:Settings,List:List})};var container=document[_$_ebbf[46]](_$_ebbf[247]);spreadsheet[_$_ebbf[249]][_$_ebbf[248]](container);lemonade[_$_ebbf[250]](ComponentPlugin,container);return self};var P=(function(){return true});P[_$_ebbf[251]]= function(spreadsheet,options){var message=License[_$_ebbf[63]](spreadsheet);if(message){console[_$_ebbf[60]](message)}else {spreadsheet[_$_ebbf[252]]({validations:pluginValidations})}};P[_$_ebbf[253]]= function(v){if(JSS=== null){JSS= this}};return P})))