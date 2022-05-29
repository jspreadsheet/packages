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

var _$_72af="translate;;status;scope;comments;indexOf;This plugin is not included on the scope of this license;This is only available in the Premium Edition;Edit this post;edit;display;style;children;el;none;block;push;Delete this post;delete;data;parent;stringify;parse;splice;cellName;setValue;open;getBoundingClientRect;x;y;instance;createMenu;120px;close;contextmenu;element;Save;Cancel;onchange;prettifyAll;calendar;update;save;isArray;user_id;date;comment;name;image;map;substr;T; ;replace;toISOString;cancel;selected;remove;classList;length;setComments;worksheet;show;getColumnNameFromCoords;helpers;options;offsetTop;parentNode;top;records;px;left;offsetLeft;offsetWidth;license;call;onevent;oncreatecell;jss_comments;add;title;removeAttribute;onselection;onblur;focus;oncomments;keys;getCoordsFromColumnName;refresh;setUserId;setName;setImage;contextMenu;icon;notes;rate_review;Comments;init;mouseover;event;buttons;button;which;contains;target;data-x;getAttribute;data-y;addEventListener;content;mouseup;jss_cursor;scroll;div;createElement;appendChild;tools;render;object;undefined;exports;function;amd".split(";");
(function(m,n){typeof exports===_$_72af[118]&&typeof module!==_$_72af[119]?module[_$_72af[120]]=n():typeof define===_$_72af[121]&&define[_$_72af[122]]?define(n):m[_$_72af[4]]=n()})(this,function(){var m=jSuites[_$_72af[0]],n=function(){var a=_$_72af[1];8==this[_$_72af[2]]?this[_$_72af[3]]&&-1!=this[_$_72af[3]][_$_72af[5]](_$_72af[4])||(a=_$_72af[6]):a=_$_72af[7];return a},p=function(a){var g=[];g[_$_72af[16]]({title:_$_72af[8],icon:_$_72af[9],onclick:function(){a[_$_72af[13]][_$_72af[12]][1][_$_72af[12]][0][_$_72af[11]][_$_72af[10]]=
_$_72af[14];a[_$_72af[13]][_$_72af[12]][1][_$_72af[12]][1][_$_72af[11]][_$_72af[10]]=_$_72af[15]}});g[_$_72af[16]]({title:_$_72af[17],icon:_$_72af[18],onclick:function(){var e=a[_$_72af[20]][_$_72af[19]][_$_72af[5]](a),b=JSON[_$_72af[22]](JSON[_$_72af[21]](a[_$_72af[20]][_$_72af[19]]));b[_$_72af[23]](e,1);a[_$_72af[20]][_$_72af[25]](a[_$_72af[20]][_$_72af[24]],b)}});return g},q=function(){var a=this;a[_$_72af[26]]=function(g,e){e=e[_$_72af[27]]();a[_$_72af[30]][_$_72af[26]]({x:e[_$_72af[28]],y:e[_$_72af[29]]},
p(g))};a[_$_72af[31]]=function(g){a[_$_72af[30]]=jSuites[_$_72af[34]](g,{width:_$_72af[32],onclick:function(e){e[_$_72af[33]]()}})};return lemonade[_$_72af[35]]('<div @ready="self.createMenu(this)" @ref="self.instance"></div>',a)},r=function(){var a=`
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
                        <input type="button" onclick="self.parent.update(self, true)" value="${m(_$_72af[36])}" class="jbutton dark small" />
                        <input type="button" onclick="self.parent.update(self, false)" value="${m(_$_72af[37])}" class="jbutton dark small" />
                    </div>
                </div>
            </div>
        `;return lemonade[_$_72af[35]](a,this)},t=function(){var a=this;a[_$_72af[19]]=[];a[_$_72af[38]]=function(){jSuites[_$_72af[40]][_$_72af[39]]()};a[_$_72af[41]]=function(e,b){e[_$_72af[13]][_$_72af[12]][1][_$_72af[12]][0][_$_72af[11]][_$_72af[10]]=_$_72af[15];e[_$_72af[13]][_$_72af[12]][1][_$_72af[12]][1][_$_72af[11]][_$_72af[10]]=_$_72af[14];if(b)a[_$_72af[42]](!0)};a[_$_72af[42]]=function(e){var b=[];Array[_$_72af[43]](a[_$_72af[19]])&&(b=JSON[_$_72af[22]](JSON[_$_72af[21]](a[_$_72af[19]])),
b[_$_72af[49]](function(k){var d={user_id:k[_$_72af[44]]||0,date:k[_$_72af[45]],comments:k[_$_72af[46]]};k[_$_72af[47]]&&(d[_$_72af[47]]=k[_$_72af[47]]);k[_$_72af[48]]&&(d[_$_72af[48]]=k[_$_72af[48]]);return d}));!e&&a[_$_72af[46]]&&(e={user_id:a[_$_72af[44]]||0,date:(new Date)[_$_72af[54]]()[_$_72af[53]](_$_72af[51],_$_72af[52])[_$_72af[50]](0,19),comments:a[_$_72af[46]]},a[_$_72af[47]]&&(e[_$_72af[47]]=a[_$_72af[47]]),a[_$_72af[48]]&&(e[_$_72af[48]]=a[_$_72af[48]]),b[_$_72af[16]](e));a[_$_72af[25]](a[_$_72af[24]],
b)};a[_$_72af[55]]=function(){a[_$_72af[46]]=_$_72af[1];a[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[56])};a[_$_72af[25]]=function(e,b){var k={};k[e]=b[_$_72af[59]]?b:_$_72af[1];a[_$_72af[61]][_$_72af[60]](k)};var g=`<div class="jss_comments_box">
            <Menu @ref="self.menu" />
            <div><Comments @loop="self.data" /></div>
            <div class="jss_comments_input">
                <div class="p2"><textarea class="jss_object" style="resize: none;width:100%" @bind="self.comment"></textarea></div>
                <div class="row">
                    <div class="f1" style="padding: 1px"><input type="button" value="${m(_$_72af[36])}" class="jbutton dark w100" disabled="{{!self.comment}}" onclick="self.save()" /></div>
                    <div class="f1" style="padding: 1px"><input type="button" value="${m(_$_72af[37])}" class="jbutton dark w100"  onclick="self.cancel()" /></div>
                </div>
            </div>
            <div class="center p4 small">{{self.license}}</div>
        </div>`;return lemonade[_$_72af[35]](g,a,{Menu:q,Comments:r})};return function(a,g){var e={},b={};e[_$_72af[62]]=function(d,c){var f=this[_$_72af[64]][_$_72af[63]](d,c);this[_$_72af[65]][_$_72af[4]]?Array[_$_72af[43]](this[_$_72af[65]][_$_72af[4]][f])?b[_$_72af[19]]=JSON[_$_72af[22]](JSON[_$_72af[21]](this[_$_72af[65]][_$_72af[4]][f])):b[_$_72af[19]]=[]:b[_$_72af[19]]=[];b[_$_72af[13]][_$_72af[11]][_$_72af[68]]=this[_$_72af[69]][c][d][_$_72af[35]][_$_72af[66]]+this[_$_72af[35]][_$_72af[67]][_$_72af[66]]+
1+_$_72af[70];b[_$_72af[13]][_$_72af[11]][_$_72af[71]]=this[_$_72af[69]][c][d][_$_72af[35]][_$_72af[72]]+this[_$_72af[69]][c][d][_$_72af[35]][_$_72af[73]]+1+_$_72af[70];b[_$_72af[46]]=_$_72af[1];b[_$_72af[61]]=this;b[_$_72af[24]]=f;b[_$_72af[74]]=n[_$_72af[75]](this[_$_72af[20]])};e[_$_72af[76]]=function(d,c,f,l,h){if(d===_$_72af[77])d=c[_$_72af[64]][_$_72af[63]](l,h),c[_$_72af[65]][_$_72af[4]]&&c[_$_72af[65]][_$_72af[4]][d]&&c[_$_72af[65]][_$_72af[4]][d]&&Array[_$_72af[43]](c[_$_72af[65]][_$_72af[4]][d])&&
(f[_$_72af[58]][_$_72af[79]](_$_72af[78]),f[_$_72af[81]](_$_72af[80]));else if(d===_$_72af[82]||d===_$_72af[83])b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[84]),b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[56]);else if(d===_$_72af[85])for(d=Object[_$_72af[86]](f),l=0;l<d[_$_72af[59]];l++)h=c[_$_72af[64]][_$_72af[87]](d[l]),c[_$_72af[69]][h[1]][h[0]][_$_72af[35]]&&(Array[_$_72af[43]](f[d[l]])?(c[_$_72af[69]][h[1]][h[0]][_$_72af[35]][_$_72af[81]](_$_72af[80]),c[_$_72af[69]][h[1]][h[0]][_$_72af[35]][_$_72af[58]][_$_72af[79]](_$_72af[78]),
b[_$_72af[19]]=f[d[l]],b[_$_72af[88]](_$_72af[19]),b[_$_72af[46]]=_$_72af[1]):(c[_$_72af[69]][h[1]][h[0]][_$_72af[35]][_$_72af[58]][_$_72af[57]](_$_72af[78]),b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[84]),b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[56])))};e[_$_72af[89]]=function(d){b[_$_72af[44]]=d};e[_$_72af[90]]=function(d){b[_$_72af[47]]=d};e[_$_72af[91]]=function(d){b[_$_72af[48]]=d};e[_$_72af[92]]=function(d,c,f,l,h,u){for(l=0;l<h[_$_72af[59]]&&h[l][_$_72af[93]]!==_$_72af[94];l++);
h[_$_72af[23]](l,0,{icon:_$_72af[95],title:_$_72af[96],onclick:function(){b[_$_72af[13]][_$_72af[58]][_$_72af[79]](_$_72af[56]);e[_$_72af[62]][_$_72af[75]](d,c,f)}});return h};e[_$_72af[97]]=function(d){d[_$_72af[109]][_$_72af[108]](_$_72af[98],function(c){c=c||window[_$_72af[99]];if(!(c[_$_72af[100]]||c[_$_72af[101]]||c[_$_72af[102]]))if(c[_$_72af[104]][_$_72af[58]][_$_72af[103]](_$_72af[78])&&!b[_$_72af[13]][_$_72af[58]][_$_72af[103]](_$_72af[56])){var f=c[_$_72af[104]][_$_72af[106]](_$_72af[105]);
c=c[_$_72af[104]][_$_72af[106]](_$_72af[107]);void 0!==f&&void 0!==c&&(b[_$_72af[13]][_$_72af[58]][_$_72af[79]](_$_72af[84]),e[_$_72af[62]][_$_72af[75]](d,f,c))}else b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[84])});d[_$_72af[109]][_$_72af[108]](_$_72af[110],function(c){if(c[_$_72af[104]][_$_72af[58]][_$_72af[103]](_$_72af[78])){var f=c[_$_72af[104]][_$_72af[106]](_$_72af[105]);c=c[_$_72af[104]][_$_72af[106]](_$_72af[107]);if(void 0!==f&&void 0!==c)if(d[_$_72af[69]][c][f]&&d[_$_72af[69]][c][f][_$_72af[35]]&&
d[_$_72af[69]][c][f][_$_72af[35]][_$_72af[58]][_$_72af[103]](_$_72af[111])&&d[_$_72af[69]][c][f][_$_72af[35]][_$_72af[58]][_$_72af[103]](_$_72af[78]))b[_$_72af[13]][_$_72af[58]][_$_72af[79]](_$_72af[56]),e[_$_72af[62]][_$_72af[75]](d,f,c);else b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[56])}});d[_$_72af[109]][_$_72af[108]](_$_72af[112],function(c){b[_$_72af[13]][_$_72af[58]][_$_72af[57]](_$_72af[56])})};var k=document[_$_72af[114]](_$_72af[113]);a[_$_72af[116]][_$_72af[115]](k);lemonade[_$_72af[117]](t,
k,b);g&&(g[_$_72af[47]]&&(b[_$_72af[47]]=g[_$_72af[47]]),g[_$_72af[48]]&&(b[_$_72af[48]]=g[_$_72af[48]]),g[_$_72af[44]]&&(b[_$_72af[44]]=g[_$_72af[44]]));return e}});
