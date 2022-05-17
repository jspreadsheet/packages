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

var _$_6ade="translate;;status;scope;comments;indexOf;This plugin is not included on the scope of this license;This is only available in the Premium Edition;Edit this post;edit;display;style;children;el;none;block;push;Delete this post;delete;data;parent;stringify;parse;splice;cellName;setValue;open;getBoundingClientRect;x;y;instance;createMenu;120px;close;contextmenu;element;Save;Cancel;onchange;prettifyAll;calendar;update;save;isArray;user_id;date;comment;name;image;map;substr;T; ;replace;toISOString;cancel;selected;remove;classList;length;setComments;worksheet;call;show;getColumnNameFromCoords;helpers;options;offsetTop;parentNode;top;records;px;left;offsetLeft;offsetWidth;onevent;oncreatecell;jss_comments;add;title;removeAttribute;onselection;onblur;focus;oncomments;keys;getCoordsFromColumnName;refresh;setUserId;setName;setImage;contextMenu;icon;notes;rate_review;Comments;init;mouseover;event;buttons;button;which;contains;target;data-x;getAttribute;data-y;addEventListener;content;mouseup;jss_cursor;scroll;div;createElement;appendChild;tools;render;object;undefined;exports;function;amd".split(";");
(function(m,n){typeof exports===_$_6ade[117]&&typeof module!==_$_6ade[118]?module[_$_6ade[119]]=n():typeof define===_$_6ade[120]&&define[_$_6ade[121]]?define(n):m[_$_6ade[4]]=n()})(this,function(){var m=jSuites[_$_6ade[0]],n=function(){var a=_$_6ade[1];8==this[_$_6ade[2]]?this[_$_6ade[3]]&&-1!=this[_$_6ade[3]][_$_6ade[5]](_$_6ade[4])||(a=_$_6ade[6]):a=_$_6ade[7];return a},p=function(a){var g=[];g[_$_6ade[16]]({title:_$_6ade[8],icon:_$_6ade[9],onclick:function(){a[_$_6ade[13]][_$_6ade[12]][1][_$_6ade[12]][0][_$_6ade[11]][_$_6ade[10]]=
_$_6ade[14];a[_$_6ade[13]][_$_6ade[12]][1][_$_6ade[12]][1][_$_6ade[11]][_$_6ade[10]]=_$_6ade[15]}});g[_$_6ade[16]]({title:_$_6ade[17],icon:_$_6ade[18],onclick:function(){var e=a[_$_6ade[20]][_$_6ade[19]][_$_6ade[5]](a),b=JSON[_$_6ade[22]](JSON[_$_6ade[21]](a[_$_6ade[20]][_$_6ade[19]]));b[_$_6ade[23]](e,1);a[_$_6ade[20]][_$_6ade[25]](a[_$_6ade[20]][_$_6ade[24]],b)}});return g},q=function(){var a=this;a[_$_6ade[26]]=function(g,e){e=e[_$_6ade[27]]();a[_$_6ade[30]][_$_6ade[26]]({x:e[_$_6ade[28]],y:e[_$_6ade[29]]},
p(g))};a[_$_6ade[31]]=function(g){a[_$_6ade[30]]=jSuites[_$_6ade[34]](g,{width:_$_6ade[32],onclick:function(e){e[_$_6ade[33]]()}})};return lemonade[_$_6ade[35]]('<div @ready="self.createMenu(this)" @ref="self.instance"></div>',a)},r=function(){var a=`
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
                    <div class="small gray">{{self.comments}}</div>
                    <div style="display: none">
                        <textarea @bind="self.comments" class="jss_object"></textarea><br>
                        <input type="button" onclick="self.parent.update(self, true)" value="${m(_$_6ade[36])}" class="jbutton dark small" />
                        <input type="button" onclick="self.parent.update(self, false)" value="${m(_$_6ade[37])}" class="jbutton dark small" />
                    </div>
                </div>
            </div>
        `;return lemonade[_$_6ade[35]](a,this)},t=function(){var a=this;a[_$_6ade[19]]=[];a[_$_6ade[38]]=function(){jSuites[_$_6ade[40]][_$_6ade[39]]()};a[_$_6ade[41]]=function(e,b){e[_$_6ade[13]][_$_6ade[12]][1][_$_6ade[12]][0][_$_6ade[11]][_$_6ade[10]]=_$_6ade[15];e[_$_6ade[13]][_$_6ade[12]][1][_$_6ade[12]][1][_$_6ade[11]][_$_6ade[10]]=_$_6ade[14];if(b)a[_$_6ade[42]](!0)};a[_$_6ade[42]]=function(e){var b=[];Array[_$_6ade[43]](a[_$_6ade[19]])&&(b=JSON[_$_6ade[22]](JSON[_$_6ade[21]](a[_$_6ade[19]])),
b[_$_6ade[49]](function(k){var d={user_id:k[_$_6ade[44]]||0,date:k[_$_6ade[45]],comments:k[_$_6ade[46]]};k[_$_6ade[47]]&&(d[_$_6ade[47]]=k[_$_6ade[47]]);k[_$_6ade[48]]&&(d[_$_6ade[48]]=k[_$_6ade[48]]);return d}));!e&&a[_$_6ade[46]]&&(e={user_id:a[_$_6ade[44]]||0,date:(new Date)[_$_6ade[54]]()[_$_6ade[53]](_$_6ade[51],_$_6ade[52])[_$_6ade[50]](0,19),comments:a[_$_6ade[46]]},a[_$_6ade[47]]&&(e[_$_6ade[47]]=a[_$_6ade[47]]),a[_$_6ade[48]]&&(e[_$_6ade[48]]=a[_$_6ade[48]]),b[_$_6ade[16]](e));a[_$_6ade[25]](a[_$_6ade[24]],
b)};a[_$_6ade[55]]=function(){a[_$_6ade[46]]=_$_6ade[1];a[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[56])};a[_$_6ade[25]]=function(e,b){var k={};k[e]=b[_$_6ade[59]]?b:_$_6ade[1];a[_$_6ade[61]][_$_6ade[60]](k)};var g=`<div class="jss_comments_box">
            <Menu @ref="self.menu" />
            <div><Comments @loop="self.data" /></div>
            <div class="jss_comments_input">
                <div class="p2"><textarea class="jss_object" style="resize: none;width:100%" @bind="self.comment"></textarea></div>
                <div class="row">
                    <div class="f1" style="padding: 1px"><input type="button" value="${m(_$_6ade[36])}" class="jbutton dark w100" disabled="{{!self.comment}}" onclick="self.save()" /></div>
                    <div class="f1" style="padding: 1px"><input type="button" value="${m(_$_6ade[37])}" class="jbutton dark w100"  onclick="self.cancel()" /></div>
                </div>
            </div>
            <div class="center p4 small">${n[_$_6ade[62]](a[_$_6ade[61]])}</div>
        </div>`;return lemonade[_$_6ade[35]](g,a,{Menu:q,Comments:r})};return function(a,g){var e={},b={};e[_$_6ade[63]]=function(d,c){var f=this[_$_6ade[65]][_$_6ade[64]](d,c);this[_$_6ade[66]][_$_6ade[4]]?Array[_$_6ade[43]](this[_$_6ade[66]][_$_6ade[4]][f])?b[_$_6ade[19]]=JSON[_$_6ade[22]](JSON[_$_6ade[21]](this[_$_6ade[66]][_$_6ade[4]][f])):b[_$_6ade[19]]=[]:b[_$_6ade[19]]=[];b[_$_6ade[13]][_$_6ade[11]][_$_6ade[69]]=this[_$_6ade[70]][c][d][_$_6ade[35]][_$_6ade[67]]+this[_$_6ade[35]][_$_6ade[68]][_$_6ade[67]]+
1+_$_6ade[71];b[_$_6ade[13]][_$_6ade[11]][_$_6ade[72]]=this[_$_6ade[70]][c][d][_$_6ade[35]][_$_6ade[73]]+this[_$_6ade[70]][c][d][_$_6ade[35]][_$_6ade[74]]+1+_$_6ade[71];b[_$_6ade[46]]=_$_6ade[1];b[_$_6ade[61]]=this;b[_$_6ade[24]]=f};e[_$_6ade[75]]=function(d,c,f,l,h){if(d===_$_6ade[76])d=c[_$_6ade[65]][_$_6ade[64]](l,h),c[_$_6ade[66]][_$_6ade[4]]&&c[_$_6ade[66]][_$_6ade[4]][d]&&c[_$_6ade[66]][_$_6ade[4]][d]&&Array[_$_6ade[43]](c[_$_6ade[66]][_$_6ade[4]][d])&&(f[_$_6ade[58]][_$_6ade[78]](_$_6ade[77]),
f[_$_6ade[80]](_$_6ade[79]));else if(d===_$_6ade[81]||d===_$_6ade[82])b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[83]),b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[56]);else if(d===_$_6ade[84])for(d=Object[_$_6ade[85]](f),l=0;l<d[_$_6ade[59]];l++)h=c[_$_6ade[65]][_$_6ade[86]](d[l]),c[_$_6ade[70]][h[1]][h[0]][_$_6ade[35]]&&(Array[_$_6ade[43]](f[d[l]])?(c[_$_6ade[70]][h[1]][h[0]][_$_6ade[35]][_$_6ade[80]](_$_6ade[79]),c[_$_6ade[70]][h[1]][h[0]][_$_6ade[35]][_$_6ade[58]][_$_6ade[78]](_$_6ade[77]),
b[_$_6ade[19]]=f[d[l]],b[_$_6ade[87]](_$_6ade[19]),b[_$_6ade[46]]=_$_6ade[1]):(c[_$_6ade[70]][h[1]][h[0]][_$_6ade[35]][_$_6ade[58]][_$_6ade[57]](_$_6ade[77]),b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[83]),b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[56])))};e[_$_6ade[88]]=function(d){b[_$_6ade[44]]=d};e[_$_6ade[89]]=function(d){b[_$_6ade[47]]=d};e[_$_6ade[90]]=function(d){b[_$_6ade[48]]=d};e[_$_6ade[91]]=function(d,c,f,l,h,u){for(l=0;l<h[_$_6ade[59]]&&h[l][_$_6ade[92]]!==_$_6ade[93];l++);
h[_$_6ade[23]](l,0,{icon:_$_6ade[94],title:_$_6ade[95],onclick:function(){b[_$_6ade[13]][_$_6ade[58]][_$_6ade[78]](_$_6ade[56]);e[_$_6ade[63]][_$_6ade[62]](d,c,f)}});return h};e[_$_6ade[96]]=function(d){d[_$_6ade[108]][_$_6ade[107]](_$_6ade[97],function(c){c=c||window[_$_6ade[98]];if(!(c[_$_6ade[99]]||c[_$_6ade[100]]||c[_$_6ade[101]]))if(c[_$_6ade[103]][_$_6ade[58]][_$_6ade[102]](_$_6ade[77])&&!b[_$_6ade[13]][_$_6ade[58]][_$_6ade[102]](_$_6ade[56])){var f=c[_$_6ade[103]][_$_6ade[105]](_$_6ade[104]);
c=c[_$_6ade[103]][_$_6ade[105]](_$_6ade[106]);void 0!==f&&void 0!==c&&(b[_$_6ade[13]][_$_6ade[58]][_$_6ade[78]](_$_6ade[83]),e[_$_6ade[63]][_$_6ade[62]](d,f,c))}else b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[83])});d[_$_6ade[108]][_$_6ade[107]](_$_6ade[109],function(c){if(c[_$_6ade[103]][_$_6ade[58]][_$_6ade[102]](_$_6ade[77])){var f=c[_$_6ade[103]][_$_6ade[105]](_$_6ade[104]);c=c[_$_6ade[103]][_$_6ade[105]](_$_6ade[106]);if(void 0!==f&&void 0!==c)if(d[_$_6ade[70]][c][f]&&d[_$_6ade[70]][c][f][_$_6ade[35]]&&
d[_$_6ade[70]][c][f][_$_6ade[35]][_$_6ade[58]][_$_6ade[102]](_$_6ade[110])&&d[_$_6ade[70]][c][f][_$_6ade[35]][_$_6ade[58]][_$_6ade[102]](_$_6ade[77]))b[_$_6ade[13]][_$_6ade[58]][_$_6ade[78]](_$_6ade[56]),e[_$_6ade[63]][_$_6ade[62]](d,f,c);else b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[56])}});d[_$_6ade[108]][_$_6ade[107]](_$_6ade[111],function(c){b[_$_6ade[13]][_$_6ade[58]][_$_6ade[57]](_$_6ade[56])})};var k=document[_$_6ade[113]](_$_6ade[112]);a[_$_6ade[115]][_$_6ade[114]](k);lemonade[_$_6ade[116]](t,
k,b);g&&(g[_$_6ade[47]]&&(b[_$_6ade[47]]=g[_$_6ade[47]]),g[_$_6ade[48]]&&(b[_$_6ade[48]]=g[_$_6ade[48]]),g[_$_6ade[44]]&&(b[_$_6ade[44]]=g[_$_6ade[44]]));return e}});
