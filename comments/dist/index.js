/**
 * JSS Advance comments
 * https://jspreadsheet.com/products/comments
 * @License: this plugin requires a license
 */

if (! jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}
if (! lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonadejs');
}

'use strict';var _$_6e3d=";comments;This plugin is not included on the scope of this license;This is only available in the Premium Edition;Edit this post;edit;none;initial;Delete this post;delete;120px;Save;Cancel;block;T; ;selected;px;oncreatecell;jss_comments;title;onselection;onblur;focus;oncomments;data;cell;notes;rate_review;Comments;mouseover;data-x;data-y;mouseup;jss_cursor;scroll;div;object;undefined;function".split(";");
(function(m,h){typeof exports===_$_6e3d[37]&&typeof module!==_$_6e3d[38]?module.exports=h():typeof define===_$_6e3d[39]&&define.amd?define(h):m.comments=h()})(this,function(){var m=jSuites.translate,h={},p=function(a){var k=[];if(a.user_id&&a.user_id!=h.user_id)return!1;k.push({title:_$_6e3d[4],icon:_$_6e3d[5],onclick:function(){a.el.children[1].children[0].style.display=_$_6e3d[6];a.el.children[1].children[1].style.display=_$_6e3d[7]}});k.push({title:_$_6e3d[8],icon:_$_6e3d[9],onclick:function(){var e=
a.parent.data.indexOf(a),d=JSON.parse(JSON.stringify(a.parent.data));d.splice(e,1);a.parent.setValue(a.parent.cellName,d)}});return k},q=function(){var a=this;a.open=function(k,e){e=e.getBoundingClientRect();a.instance.open({x:e.x,y:e.y},p(k))};a.createMenu=function(k){a.instance=jSuites.contextmenu(k,{width:_$_6e3d[10],onclick:function(e){e.close()}})};return lemonade.element('<div @ready="self.createMenu(this)" @ref="self.instance"></div>',a)},r=function(){var a=`
            <div class="p4 jss_comments_entry" style="border-bottom: 1px solid #ddd">
                <div class="row">
                    <div class="column p4">
                        <div><img src="data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath d='M24 23.95Q20.7 23.95 18.6 21.85Q16.5 19.75 16.5 16.45Q16.5 13.15 18.6 11.05Q20.7 8.95 24 8.95Q27.3 8.95 29.4 11.05Q31.5 13.15 31.5 16.45Q31.5 19.75 29.4 21.85Q27.3 23.95 24 23.95ZM8 40V35.3Q8 33.4 8.95 32.05Q9.9 30.7 11.4 30Q14.75 28.5 17.825 27.75Q20.9 27 24 27Q27.1 27 30.15 27.775Q33.2 28.55 36.55 30Q38.1 30.7 39.05 32.05Q40 33.4 40 35.3V40ZM11 37H37V35.3Q37 34.5 36.525 33.775Q36.05 33.05 35.35 32.7Q32.15 31.15 29.5 30.575Q26.85 30 24 30Q21.15 30 18.45 30.575Q15.75 31.15 12.6 32.7Q11.9 33.05 11.45 33.775Q11 34.5 11 35.3ZM24 20.95Q25.95 20.95 27.225 19.675Q28.5 18.4 28.5 16.45Q28.5 14.5 27.225 13.225Q25.95 11.95 24 11.95Q22.05 11.95 20.775 13.225Q19.5 14.5 19.5 16.45Q19.5 18.4 20.775 19.675Q22.05 20.95 24 20.95ZM24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45Q24 16.45 24 16.45ZM24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Q24 37 24 37Z'/%3E%3C/svg%3E" style="{{self.image?'display:none':''}}"><img src="{{self.image}}" style="{{self.image?'':'display:none'}}" /></div>
                    </div><div class="column p4 f1">
                        <div>{{self.name}}</div>
                        <div class="small prettydate">{{self.date}}</div>
                    </div><div>
                        <div class='p4 jss_comments_actions' onclick='self.parent.menu.open(self, this)'><i class='material-icons cursor'>arrow_drop_down</i></div>
                    </div>
                </div>
                <div class="row p4" style="padding-top: 0px;">
                    <div class="small">{{self.comments}}</div>
                    <div style="display: none" class="w100">
                        <textarea @bind="self.comments" class="jss_object"></textarea><br>
                        <input type="button" onclick="self.parent.update(self, true)" value="${m(_$_6e3d[11])}" class="jbutton dark small" style="width:90px" />
                        <input type="button" onclick="self.parent.update(self, false)" value="${m(_$_6e3d[12])}" class="jbutton dark small" style="width:90px" />
                    </div>
                </div>
            </div>
        `;return lemonade.element(a,this)},t=function(){var a=this;a.data=[];a.onchange=function(){jSuites.calendar.prettifyAll()};a.update=function(e,d){e.el.children[1].children[0].style.display=_$_6e3d[13];e.el.children[1].children[1].style.display=_$_6e3d[6];d&&a.save(!0)};a.save=function(e){var d=[];Array.isArray(a.data)&&(d=JSON.parse(JSON.stringify(a.data)),d.map(function(b){var c={date:b.date,comments:b.comment};b.user_id&&(c.user_id=b.user_id);b.name&&(c.name=b.name);b.image&&(c.image=b.image);
return c}));!e&&a.comment&&(e={date:(new Date).toISOString().replace(_$_6e3d[14],_$_6e3d[15]).substr(0,19),comments:a.comment},a.user_id?e.user_id=a.user_id:h.user_id&&(e.user_id=h.user_id),a.name?e.name=a.name:h.name&&(e.name=h.name),a.image?e.image=a.image:h.image&&(e.image=h.image),d.push(e));a.setValue(a.cellName,d)};a.cancel=function(){a.comment=_$_6e3d[0];a.el.classList.remove(_$_6e3d[16])};a.setValue=function(e,d){var b={};b[e]=d.length?d:_$_6e3d[0];a.worksheet.setComments(b)};var k=`<div class="jss_comments_box">
            <Menu @ref="self.menu" />
            <div><Comments @loop="self.data" /></div>
            <div class="jss_comments_input">
                <div class="p2"><textarea class="jss_object" @bind="self.comment"></textarea></div>
                <div class="row">
                    <div class="f1" style="padding: 1px"><input type="button" value="${m(_$_6e3d[11])}" class="jbutton dark w100" disabled="{{!self.comment}}" onclick="self.save()" /></div>
                    <div class="f1" style="padding: 1px"><input type="button" value="${m(_$_6e3d[12])}" class="jbutton dark w100"  onclick="self.cancel()" /></div>
                </div>
            </div>
            <div class="center p4 small">{{self.license}}</div>
        </div>`;return lemonade.element(k,a,{Menu:q,Comments:r})},v=function(a,k){var e={},d={};e.show=function(b,c){var f=this.helpers.getColumnNameFromCoords(b,c);this.options.comments?Array.isArray(this.options.comments[f])?d.data=JSON.parse(JSON.stringify(this.options.comments[f])):d.data=[]:d.data=[];d.el.style.top=this.records[c][b].element.offsetTop+this.element.parentNode.offsetTop+1+_$_6e3d[17];d.el.style.left=this.records[c][b].element.offsetLeft+this.records[c][b].element.offsetWidth+1+
_$_6e3d[17];d.comment=_$_6e3d[0];d.worksheet=this;d.cellName=f;b=_$_6e3d[0];8==this.parent.status?this.parent.scope&&-1!=this.parent.scope.indexOf(_$_6e3d[1])||(b=_$_6e3d[2]):b=_$_6e3d[3];d.license=b};e.onevent=function(b,c,f,l,g){if(b===_$_6e3d[18])b=c.helpers.getColumnNameFromCoords(l,g),c.options.comments&&c.options.comments[b]&&c.options.comments[b]&&Array.isArray(c.options.comments[b])&&(f.classList.add(_$_6e3d[19]),f.removeAttribute(_$_6e3d[20]));else if(b===_$_6e3d[21]||b===_$_6e3d[22])d.el.classList.remove(_$_6e3d[23]),
d.el.classList.remove(_$_6e3d[16]);else if(b===_$_6e3d[24])for(b=Object.keys(f),l=0;l<b.length;l++)g=c.helpers.getCoordsFromColumnName(b[l]),c.records[g[1]][g[0]].element&&(Array.isArray(f[b[l]])?(c.records[g[1]][g[0]].element.removeAttribute(_$_6e3d[20]),c.records[g[1]][g[0]].element.classList.add(_$_6e3d[19]),d.data=f[b[l]],d.refresh(_$_6e3d[25]),d.comment=_$_6e3d[0]):(c.records[g[1]][g[0]].element.classList.remove(_$_6e3d[19]),d.el.classList.remove(_$_6e3d[23]),d.el.classList.remove(_$_6e3d[16])))};
e.contextMenu=function(b,c,f,l,g,u){if(u===_$_6e3d[26]){for(l=0;l<g.length&&g[l].icon!==_$_6e3d[27];l++);l<g.length&&g.splice(l,0,{icon:_$_6e3d[28],title:_$_6e3d[29],onclick:function(){d.el.classList.add(_$_6e3d[16]);e.show.call(b,c,f)}})}return g};e.init=function(b){b.content.addEventListener(_$_6e3d[30],function(c){c=c||window.event;if(!(c.buttons||c.button||c.which))if(c.target.classList.contains(_$_6e3d[19])&&!d.el.classList.contains(_$_6e3d[16])){var f=c.target.getAttribute(_$_6e3d[31]);c=c.target.getAttribute(_$_6e3d[32]);
void 0!==f&&void 0!==c&&(d.el.classList.add(_$_6e3d[23]),e.show.call(b,f,c))}else d.el.classList.remove(_$_6e3d[23])});b.content.addEventListener(_$_6e3d[33],function(c){if(c.target.classList.contains(_$_6e3d[19])){var f=c.target.getAttribute(_$_6e3d[31]);c=c.target.getAttribute(_$_6e3d[32]);void 0!==f&&void 0!==c&&(b.records[c][f]&&b.records[c][f].element&&b.records[c][f].element.classList.contains(_$_6e3d[34])&&b.records[c][f].element.classList.contains(_$_6e3d[19])?(d.el.classList.add(_$_6e3d[16]),
e.show.call(b,f,c)):d.el.classList.remove(_$_6e3d[16]))}});b.content.addEventListener(_$_6e3d[35],function(c){d.el.classList.remove(_$_6e3d[16])})};k=document.createElement(_$_6e3d[36]);a.tools.appendChild(k);lemonade.render(t,k,d);return e},n=function(a){a&&(a.name&&(h.name=a.name),a.image&&(h.image=a.image),a.user_id&&(h.user_id=a.user_id));return!0};n.oninit=function(a,k){a.setPlugins({comments:v})};return n});
