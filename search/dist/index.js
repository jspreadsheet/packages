if (! jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

if (! lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){if(b==Array.prototype||b==Object.prototype)return b;b[c]=d.value;return b};
$jscomp.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(b,c){var d=$jscomp.propertyToPolyfillSymbol[c];if(null==d)return b[c];d=b[d];return void 0!==d?d:b[c]};$jscomp.polyfill=function(b,c,d,g){c&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(b,c,d,g):$jscomp.polyfillUnisolated(b,c,d,g))};
$jscomp.polyfillUnisolated=function(b,c,d,g){d=$jscomp.global;b=b.split(".");for(g=0;g<b.length-1;g++){var k=b[g];if(!(k in d))return;d=d[k]}b=b[b.length-1];g=d[b];c=c(g);c!=g&&null!=c&&$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:c})};
$jscomp.polyfillIsolated=function(b,c,d,g){var k=b.split(".");b=1===k.length;g=k[0];g=!b&&g in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var a=0;a<k.length-1;a++){var l=k[a];if(!(l in g))return;g=g[l]}k=k[k.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&"es6"===d?g[k]:null;c=c(d);null!=c&&(b?$jscomp.defineProperty($jscomp.polyfills,k,{configurable:!0,writable:!0,value:c}):c!==d&&(void 0===$jscomp.propertyToPolyfillSymbol[k]&&(d=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[k]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(k):$jscomp.POLYFILL_PREFIX+d+"$"+k),$jscomp.defineProperty(g,$jscomp.propertyToPolyfillSymbol[k],{configurable:!0,writable:!0,value:c})))};$jscomp.underscoreProtoCanBeSet=function(){var b={a:!0},c={};try{return c.__proto__=b,c.a}catch(d){}return!1};
$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(b,c){b.__proto__=c;if(b.__proto__!==c)throw new TypeError(b+" is not extensible");return b}:null;$jscomp.arrayIteratorImpl=function(b){var c=0;return function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}}};$jscomp.arrayIterator=function(b){return{next:$jscomp.arrayIteratorImpl(b)}};
$jscomp.makeIterator=function(b){var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];return c?c.call(b):$jscomp.arrayIterator(b)};$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(b){if(!(b instanceof Object))throw new TypeError("Iterator result "+b+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(b){this.yieldResult=b};$jscomp.generator.Context.prototype.throw_=function(b){this.abruptCompletion_={exception:b,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype.return=function(b){this.abruptCompletion_={return:b};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(b){this.abruptCompletion_={jumpTo:b};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(b,c){this.nextAddress=c;return{value:b}};$jscomp.generator.Context.prototype.yieldAll=function(b,c){b=$jscomp.makeIterator(b);var d=b.next();$jscomp.generator.ensureIteratorResultIsObject_(d);if(d.done)this.yieldResult=d.value,this.nextAddress=c;else return this.yieldAllIterator_=b,this.yield(d.value,c)};
$jscomp.generator.Context.prototype.jumpTo=function(b){this.nextAddress=b};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(b,c){this.catchAddress_=b;void 0!=c&&(this.finallyAddress_=c)};$jscomp.generator.Context.prototype.setFinallyBlock=function(b){this.catchAddress_=0;this.finallyAddress_=b||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(b,c){this.nextAddress=b;this.catchAddress_=c||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(b){this.catchAddress_=b||0;b=this.abruptCompletion_.exception;this.abruptCompletion_=null;return b};$jscomp.generator.Context.prototype.enterFinallyBlock=function(b,c,d){d?this.finallyContexts_[d]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=b||0;this.finallyAddress_=c||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(b,c){c=this.finallyContexts_.splice(c||0)[0];if(c=this.abruptCompletion_=this.abruptCompletion_||c){if(c.isException)return this.jumpToErrorHandler_();void 0!=c.jumpTo&&this.finallyAddress_<c.jumpTo?(this.nextAddress=c.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=b};$jscomp.generator.Context.prototype.forIn=function(b){return new $jscomp.generator.Context.PropertyIterator(b)};
$jscomp.generator.Context.PropertyIterator=function(b){this.object_=b;this.properties_=[];for(var c in b)this.properties_.push(c);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var b=this.properties_.pop();if(b in this.object_)return b}return null};$jscomp.generator.Engine_=function(b){this.context_=new $jscomp.generator.Context;this.program_=b};
$jscomp.generator.Engine_.prototype.next_=function(b){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,b,this.context_.next_);this.context_.next_(b);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(b){this.context_.start_();var c=this.context_.yieldAllIterator_;if(c)return this.yieldAllStep_("return"in c?c["return"]:function(d){return{value:d,done:!0}},b,this.context_.return);this.context_.return(b);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(b){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],b,this.context_.next_);this.context_.throw_(b);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(b,c,d){try{var g=b.call(this.context_.yieldAllIterator_,c);$jscomp.generator.ensureIteratorResultIsObject_(g);if(!g.done)return this.context_.stop_(),g;var k=g.value}catch(a){return this.context_.yieldAllIterator_=null,this.context_.throw_(a),this.nextStep_()}this.context_.yieldAllIterator_=null;d.call(this.context_,k);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var b=this.program_(this.context_);if(b)return this.context_.stop_(),{value:b.value,done:!1}}catch(c){this.context_.yieldResult=void 0,this.context_.throw_(c)}this.context_.stop_();if(this.context_.abruptCompletion_){b=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(b.isException)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(b){this.next=function(c){return b.next_(c)};this.throw=function(c){return b.throw_(c)};this.return=function(c){return b.return_(c)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(b,c){c=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(c));$jscomp.setPrototypeOf&&b.prototype&&$jscomp.setPrototypeOf(c,b.prototype);return c};
$jscomp.asyncExecutePromiseGenerator=function(b){function c(g){return b.next(g)}function d(g){return b.throw(g)}return new Promise(function(g,k){function a(l){l.done?g(l.value):Promise.resolve(l.value).then(c,d).then(a,k)}a(b.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(b){return $jscomp.asyncExecutePromiseGenerator(b())};$jscomp.asyncExecutePromiseGeneratorProgram=function(b){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b)))};
$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(c,d){var g=this;g instanceof String&&(g=String(g));var k=g.length;d=d||0;for(0>d&&(d=Math.max(d+k,0));d<k;d++){var a=g[d];if(a===c||Object.is(a,c))return!0}return!1}},"es7","es3");var _$_78e5=";search;This extension is not included on the scope of this license;License required;disabled;replaceInput;current;Search and replace;500px;420px;=;goto;all;g;Find;Replace by;Search;This page;All pages;Case sensitive;Match all cell contents;Search inside formulas;Replace;Replace All;onafterchanges;onredo;onundo;div;object;undefined;function".split(";");
(function(b,c){typeof exports===_$_78e5[28]&&typeof module!==_$_78e5[29]?module.exports=c():typeof define===_$_78e5[30]&&define.amd?define(c):b.search=c()})(this,function(){var b=null,c=jSuites.translate,d=function(){var a=this;a.ignore=!1;a.onchange=function(e){e!==_$_78e5[4]&&e!==_$_78e5[5]&&(a.disabled=!0)};a.scope=_$_78e5[6];a.createModal=function(e){a.modal=jSuites.modal(e,{title:c(_$_78e5[7]),closed:!0,width:_$_78e5[8],height:_$_78e5[9],backdrop:!1})};a.open=function(){a.modal.open()};a.close=
function(){a.modal.close()};var l=function(e,f){f=f.toString();if(a.isInsideFormulas){if(f[0]!==_$_78e5[10])return!1}else if(f[0]===_$_78e5[10])return!1;a.isCaseSensitive||(f=f.toLowerCase());return a.isMatchAll?f===e:f.includes(e)},u=function(e,f){e.openWorksheet();var h=e.records[f[0]][f[1]];if(!h.element||!h.element.offsetHeight||!h.element.offsetWidth||h.element.offsetWidth+h.element.offsetLeft>b.current.content.offsetWidth||h.element.offsetHeight+h.element.offsetTop>b.current.content.offsetHeight)e[_$_78e5[11]](f[0],
f[1]);e.updateSelectionFromCoords(f[1],f[0])};a.currentPromise=0;a.isFulfilled;a.updateAsSoonAsPossible=!1;a.currentMatch;var w=function(){return $jscomp.asyncExecutePromiseGeneratorFunction(function*(){return new Promise(e=>{const f=[];a.results=f;let h=0,m=0,p=a.findInput;a.isCaseSensitive||(p=p.toLowerCase());const n=v=>{for(var r=+new Date;h<b.current.options.data.length;){for(;m<b.current.options.data[h].length&&!(l(p,b.current.options.data[h][m])&&f.push({worksheet:b.current,coords:[h,m]}),
m++,r+100<+new Date););if(r+100<+new Date)break;m=0;h++}a.currentPromise!==v&&e();a.currentMatch&&(r=f.findIndex(q=>a.currentMatch.worksheet===q.worksheet&&a.currentMatch.coords[0]===q.coords[0]&&a.currentMatch.coords[1]===q.coords[1]),0<=r&&(a.resultPosition+=r,a.currentMatch=null));!a.currentMatch&&a.updateAsSoonAsPossible&&a.resultPosition<f.length&&(u(b.current,f[a.resultPosition].coords),a.updateAsSoonAsPossible=!1);if(h<b.current.options.data.length)return setTimeout(()=>{n(v)},10);e(f)};a.currentPromise++;
n(a.currentPromise)})})},x=function(){return $jscomp.asyncExecutePromiseGeneratorFunction(function*(){return new Promise(e=>{const f=[];a.results=f;let h=0,m=0,p=0,n=a.findInput;a.isCaseSensitive||(n=n.toLowerCase());const v=r=>{for(var q=+new Date;p<b.current.parent.worksheets.length;){const t=b.current.parent.worksheets[p];for(;h<t.options.data.length;){for(;m<t.options.data[h].length&&!(l(n,t.options.data[h][m])&&f.push({worksheet:t,coords:[h,m]}),m++,q+100<+new Date););if(q+100<+new Date)break;
m=0;h++}if(q+100<+new Date)break;h=0;p++}a.currentPromise!==r&&e();a.currentMatch&&(q=f.findIndex(t=>a.currentMatch.worksheet===t.worksheet&&a.currentMatch.coords[0]===t.coords[0]&&a.currentMatch.coords[1]===t.coords[1]),0<=q&&(a.resultPosition+=q,a.currentMatch=null));!a.currentMatch&&a.updateAsSoonAsPossible&&a.resultPosition<f.length&&(u(f[a.resultPosition].worksheet,f[a.resultPosition].coords),a.updateAsSoonAsPossible=!1);if(p<b.current.parent.worksheets.length)return setTimeout(()=>{v(r)},10);
e(f)};a.currentPromise++;v(a.currentPromise)})})};a.search=function(e){a.currentFilter={findInput:a.findInput,isCaseSensitive:a.isCaseSensitive,isMatchAll:a.isMatchAll,isInsideFormulas:a.isInsideFormulas,scope:a.scope};a.updateAsSoonAsPossible=!e;a.isFulfilled=!1;a.currentFilter.result=a.scope===_$_78e5[12]?x():w(e);a.currentFilter.result.then(f=>{f&&(a.isFulfilled=!0)})};a.searchIsCurrent=function(){return a.currentFilter&&a.currentFilter.findInput===a.findInput&&a.currentFilter.isCaseSensitive===
a.isCaseSensitive&&a.currentFilter.isMatchAll===a.isMatchAll&&a.currentFilter.isInsideFormulas===a.isInsideFormulas&&a.currentFilter.scope===a.scope};a.nextPosition=function(e){a.disabled=!1;a.searchIsCurrent()?e||(a.resultPosition++,a.resultPosition+1>=a.results.length&&!a.isFulfilled||(a.resultPosition%=a.results.length,(e=a.results[a.resultPosition])&&u(e.worksheet,e.coords))):(a.resultPosition=0,a.search(e))};a.replace=function(){if(a.searchIsCurrent()){var e=a.results[a.resultPosition];if(e){var f=
e.coords,h=new RegExp(a.findInput,_$_78e5[13]);a.ignore=!0;e.worksheet.setValue([{y:f[0],x:f[1],value:e.worksheet.options.data[f[0]][f[1]].toString().replace(h,a.replaceInput)}]);a.ignore=!1;e=a.resultPosition;a.nextPosition();a.results.splice(e,1)}}};a.replaceAll=function(){a.searchIsCurrent()||a.search(!0);a.currentFilter.result.then(e=>{if(e&&e.length){var f=[...(new Set(e.map(({worksheet:h})=>h)))];a.ignore=!0;f.forEach(h=>{var m=new RegExp(a.findInput,_$_78e5[13]),p=e.filter(n=>n.worksheet===
h);h.setValue(p.map(({coords:n})=>({y:n[0],x:n[1],value:h.options.data[n[0]][n[1]].toString().replace(m,a.replaceInput)})))});a.ignore=!1}});a.results=[];a.resultPosition=0};a.disabled=!0;var y=`<div>
            <div @ready="self.createModal(this)">
                <table cellpadding="4">
                    <tr>
                        <td>${c(_$_78e5[14])}</td>
                        <td><input type="text" @bind="self.findInput" class="w100 jss_object" /></td>
                    </tr>
                    <tr>
                        <td>${c(_$_78e5[15])}</td>
                        <td><input type="text" @bind="self.replaceInput" class="w100 jss_object" /></td>
                    </tr>
                    <tr>
                        <td>${c(_$_78e5[16])}</td>
                        <td>
                            <select @bind="self.scope">
                                <option value="current">${c(_$_78e5[17])}</option>
                                <option value="all">${c(_$_78e5[18])}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label class="jswitch"><input @bind="self.isCaseSensitive" type="checkbox"><i></i> <span class='f1 ml1'>${c(_$_78e5[19])}</span></label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label class="jswitch"><input @bind="self.isMatchAll" type="checkbox"><i></i> <span class='f1 ml1'>${c(_$_78e5[20])}</span></label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label class="jswitch"><input @bind="self.isInsideFormulas" type="checkbox"><i></i> <span class='f1 ml1'>${c(_$_78e5[21])}</span></label>
                        </td>
                    </tr>
                </table><br>
                <table>
                    <tr>
                        <td><input type="button" value="${c(_$_78e5[16])}" onclick="self.nextPosition()" class="jbutton dark" style="width: 120px" /></td>
                        <td><input type="button" value="${c(_$_78e5[22])}" onclick="self.replace()" class="jbutton dark" style="width: 120px" disabled="{{self.disabled}}" /></td>
                        <td><input type="button" value="${c(_$_78e5[23])}" onclick="self.replaceAll()" class="jbutton dark" style="width: 120px" /></td>
                    </tr>
                </table>
            </div>
         </div>`;return lemonade.element(y,a)},g=function(){return{onevent:function(a,l){if(a===_$_78e5[24]||a===_$_78e5[25]||a===_$_78e5[26])a=l.parent.tools.search,!a.ignore&&a.results&&(a.currentMatch=a.results[a.resultPosition],a.resultPosition=0,a.search(!0))}}},k=function(a){return!0};k.oninit=function(a){var l=_$_78e5[0];8==a.status?a.scope&&-1!=a.scope.indexOf(_$_78e5[1])||(l=_$_78e5[2]):l=_$_78e5[3];if(l)console.error(l);else{l={};var u=document.createElement(_$_78e5[27]);a.tools.append(u);
a.tools.search=l;a.setPlugins({searchPlugin:g});lemonade.render(d,u,l)}};k.license=function(){null===b&&(b=this)};return k});
