/*! cloudflarejs-rocketloader-0.9.0 Mon Apr 08 2013 16:03:38 */
CloudFlare.define('cloudflare/rocket',['cloudflare/deferred','cloudflare/loader','cloudflare/console','cloudflare/path','cloudflare/dom','cloudflare/iterator','cloudflare/utility'],function(f,v,b,l,a,c,d){var e=function(b,a,c,d,e){return function(f,h){function k(){return typeof b=='function'&&typeof a=='object'&&typeof c=='object'&&typeof e=='string'&&typeof d=='string';}function g(a,b){this._options=b?b:{},this._options.includeLocation==undefined&&(this._options.includeLocation=!1),this.validateHandler(a),this._handler=a,this.reset();}function j(a){j.super_.call(this,a,{ignoreWhitespace:!0,verbose:!1,enforceEmptyTags:!1});}function i(a,b){this.reset(),this._options=b?b:{},this._options.ignoreWhitespace==undefined&&(this._options.ignoreWhitespace=!1),this._options.verbose==undefined&&(this._options.verbose=!0),this._options.enforceEmptyTags==undefined&&(this._options.enforceEmptyTags=!0),typeof a=='function'&&(this._callback=a);}function l(a,c){var b=function(){};b.prototype=c.prototype,a.super_=c,a.prototype=new b,a.prototype.constructor=a;}if(!k()){if(!this.Tautologistics)this.Tautologistics={};else if(this.Tautologistics.NodeHtmlParser)return;this.Tautologistics.NodeHtmlParser={},a=this.Tautologistics.NodeHtmlParser;}f={Text:'text',Directive:'directive',Comment:'comment',Script:'script',Style:'style',Tag:'tag'},g._reTrim=/(^\s+|\s+$)/g,g._reTrimComment=/(^\!--|--$)/g,g._reWhitespace=/\s/g,g._reTagName=/^\s*(\/?)\s*([^\s\/]+)/,g._reAttrib=/([^=<>\"\'\s]+)\s*=\s*"([^"]*)"|([^=<>\"\'\s]+)\s*=\s*'([^']*)'|([^=<>\"\'\s]+)\s*=\s*([^'"\s]+)|([^=<>\"\'\s\/]+)/g,g._reTags=/[\<\>]/g,g.prototype.parseComplete=function a(a){this.reset(),this.parseChunk(a),this.done();},g.prototype.parseChunk=function a(a){this._done&&this.handleError(new Error('Attempted to parse chunk after parsing already done')),this._buffer+=a,this.parseTags();},g.prototype.done=function a(){if(this._done)return;if(this._done=!0,this._buffer.length){var b=this._buffer;this._buffer='';var a={raw:b,data:this._parseState==f.Text?b:b.replace(g._reTrim,''),type:this._parseState};(this._parseState==f.Tag||this._parseState==f.Script||this._parseState==f.Style)&&(a.name=this.parseTagName(a.data)),this.parseAttribs(a),this._elements.push(a);}this.writeHandler(),this._handler.done();},g.prototype.peek=function a(){this._handler.peek();},g.prototype.reset=function a(){this._buffer='',this._done=!1,this._elements=[],this._elementsCurrent=0,this._current=0,this._next=0,this._location={row:0,col:0,charOffset:0,inBuffer:0},this._parseState=f.Text,this._prevTagSep='',this._tagStack=[],this._handler.reset();},g.prototype._options=null,g.prototype._handler=null,g.prototype._buffer=null,g.prototype._done=!1,g.prototype._elements=null,g.prototype._elementsCurrent=0,g.prototype._current=0,g.prototype._next=0,g.prototype._location=null,g.prototype._parseState=f.Text,g.prototype._prevTagSep='',g.prototype._tagStack=null,g.prototype.parseTagAttribs=function a(b){var d=b.length;var c=0;while(c<d){var a=b[c++];(a.type==f.Tag||a.type==f.Script||a.type==f.style)&&this.parseAttribs(a);}return b;},g.prototype.parseAttribs=function a(b){if(b.type!=f.Script&&b.type!=f.Style&&b.type!=f.Tag)return;var d=b.data.split(g._reWhitespace,1)[0];var c=b.data.substring(d.length);if(c.length<1)return;var a;g._reAttrib.lastIndex=0;while(a=g._reAttrib.exec(c))b.attribs==undefined&&(b.attribs={}),typeof a[1]=='string'&&a[1].length?b.attribs[a[1]]=a[2]:typeof a[3]=='string'&&a[3].length?b.attribs[a[3].toString()]=a[4].toString():typeof a[5]=='string'&&a[5].length?b.attribs[a[5]]=a[6]:typeof a[7]=='string'&&a[7].length&&(b.attribs[a[7]]=a[7]);},g.prototype.parseTagName=function a(b){if(b==null||b=='')return'';var a=g._reTagName.exec(b);return a?(a[1]?'/':'')+a[2]:'';},g.prototype.parseTags=function a(){var i=this._buffer.length-1;while(g._reTags.test(this._buffer)){this._next=g._reTags.lastIndex-1;var c=this._buffer.charAt(this._next);var e=this._buffer.substring(this._current,this._next);var a={raw:e,data:this._parseState==f.Text?e:e.replace(g._reTrim,''),type:this._parseState};var h=this.parseTagName(a.data);if(this._tagStack.length)if(this._tagStack[this._tagStack.length-1]==f.Script){if(h=='/script')this._tagStack.pop();else if(a.raw.indexOf('!--')!=0&&(a.type=f.Text,this._elements.length&&this._elements[this._elements.length-1].type==f.Text)){var b=this._elements[this._elements.length-1];b.raw=b.data=b.raw+this._prevTagSep+a.raw,a.raw=a.data='';}}else if(this._tagStack[this._tagStack.length-1]==f.Style){if(h=='/style')this._tagStack.pop();else if(a.raw.indexOf('!--')!=0)if(a.type=f.Text,this._elements.length&&this._elements[this._elements.length-1].type==f.Text){var b=this._elements[this._elements.length-1];a.raw!=''?(b.raw=b.data=b.raw+this._prevTagSep+a.raw,a.raw=a.data=''):b.raw=b.data=b.raw+this._prevTagSep;}else a.raw!=''&&(a.raw=a.data=a.raw);}else if(this._tagStack[this._tagStack.length-1]==f.Comment){var d=a.raw.length;if(a.raw.charAt(d-2)=='-'&&a.raw.charAt(d-1)=='-'&&c=='>')if(this._tagStack.pop(),this._elements.length&&this._elements[this._elements.length-1].type==f.Comment){var b=this._elements[this._elements.length-1];b.raw=b.data=(b.raw+a.raw).replace(g._reTrimComment,''),a.raw=a.data='',a.type=f.Text;}else a.type=f.Comment;else if(a.type=f.Comment,this._elements.length&&this._elements[this._elements.length-1].type==f.Comment){var b=this._elements[this._elements.length-1];b.raw=b.data=b.raw+a.raw+c,a.raw=a.data='',a.type=f.Text;}else a.raw=a.data=a.raw+c;}if(a.type==f.Tag){if(a.name=h,a.raw.indexOf('!--')==0){a.type=f.Comment,delete a.name;var d=a.raw.length;a.raw.charAt(d-1)=='-'&&a.raw.charAt(d-2)=='-'&&c=='>'?a.raw=a.data=a.raw.replace(g._reTrimComment,''):(a.raw+=c,this._tagStack.push(f.Comment));}else a.raw.indexOf('!')==0||a.raw.indexOf('?')==0?a.type=f.Directive:a.name=='script'?(a.type=f.Script,a.data.charAt(a.data.length-1)!='/'&&this._tagStack.push(f.Script)):a.name=='/script'?a.type=f.Script:a.name=='style'?(a.type=f.Style,a.data.charAt(a.data.length-1)!='/'&&this._tagStack.push(f.Style)):a.name=='/style'&&(a.type=f.Style);a.name&&a.name.charAt(0)=='/'&&(a.data=a.name);}(a.raw!=''||a.type!=f.Text)&&(this._options.includeLocation&&!a.location&&(a.location=this.getLocation(a.type==f.Tag)),this.parseAttribs(a),this._elements.push(a),a.type!=f.Text&&a.type!=f.Comment&&a.type!=f.Directive&&a.data.charAt(a.data.length-1)=='/'&&this._elements.push({raw:'/'+a.name,data:'/'+a.name,name:'/'+a.name,type:a.type})),this._parseState=c=='<'?f.Tag:f.Text,this._current=this._next+1,this._prevTagSep=c;}this._options.includeLocation&&(this.getLocation(),this._location.row+=this._location.inBuffer,this._location.inBuffer=0,this._location.charOffset=0),this._buffer=this._current<=i?this._buffer.substring(this._current):'',this._current=0,this.writeHandler();},g.prototype.getLocation=function a(c){var b,a=this._location,d=this._current-(c?1:0),e=c&&a.charOffset==0&&this._current==0;for(;a.charOffset<d;a.charOffset++)b=this._buffer.charAt(a.charOffset),b=='\n'?(a.inBuffer++,a.col=0):b!='\r'&&a.col++;return{line:a.row+a.inBuffer+1,col:a.col+(e?0:1)};},g.prototype.validateHandler=function a(a){if(typeof a!='object')throw new Error('Handler is not an object');if(typeof a.reset!='function')throw new Error('Handler method \'reset\' is invalid');if(typeof a.done!='function')throw new Error('Handler method \'done\' is invalid');if(typeof a.writeTag!='function')throw new Error('Handler method \'writeTag\' is invalid');if(typeof a.writeText!='function')throw new Error('Handler method \'writeText\' is invalid');if(typeof a.writeComment!='function')throw new Error('Handler method \'writeComment\' is invalid');if(typeof a.writeDirective!='function')throw new Error('Handler method \'writeDirective\' is invalid');},g.prototype.writeHandler=function a(b){if(b=!!b,this._tagStack.length&&!b)return;while(this._elements.length){var a=this._elements.shift();switch(a.type){case f.Comment:this._handler.writeComment(a);break;case f.Directive:this._handler.writeDirective(a);break;case f.Text:this._handler.writeText(a);break;default:this._handler.writeTag(a);break;}}},g.prototype.handleError=function a(a){if(!(typeof this._handler.error=='function'))throw a;this._handler.error(a);},l(j,i),j.prototype.done=function a(){var a={};var b;var c=h.getElementsByTagName(function(a){return a=='rss'||a=='feed';},this.dom,!1);if(c.length&&(b=c[0]),b){if(b.name=='rss'){a.type='rss',b=b.children[0],a.id='';try{a.title=h.getElementsByTagName('title',b.children,!1)[0].children[0].data;}catch(a){}try{a.link=h.getElementsByTagName('link',b.children,!1)[0].children[0].data;}catch(a){}try{a.description=h.getElementsByTagName('description',b.children,!1)[0].children[0].data;}catch(a){}try{a.updated=new Date(h.getElementsByTagName('lastBuildDate',b.children,!1)[0].children[0].data);}catch(a){}try{a.author=h.getElementsByTagName('managingEditor',b.children,!1)[0].children[0].data;}catch(a){}a.items=[],h.getElementsByTagName('item',b.children).forEach(function(c,d,e){var b={};try{b.id=h.getElementsByTagName('guid',c.children,!1)[0].children[0].data;}catch(a){}try{b.title=h.getElementsByTagName('title',c.children,!1)[0].children[0].data;}catch(a){}try{b.link=h.getElementsByTagName('link',c.children,!1)[0].children[0].data;}catch(a){}try{b.description=h.getElementsByTagName('description',c.children,!1)[0].children[0].data;}catch(a){}try{b.pubDate=new Date(h.getElementsByTagName('pubDate',c.children,!1)[0].children[0].data);}catch(a){}a.items.push(b);});}else{a.type='atom';try{a.id=h.getElementsByTagName('id',b.children,!1)[0].children[0].data;}catch(a){}try{a.title=h.getElementsByTagName('title',b.children,!1)[0].children[0].data;}catch(a){}try{a.link=h.getElementsByTagName('link',b.children,!1)[0].attribs.href;}catch(a){}try{a.description=h.getElementsByTagName('subtitle',b.children,!1)[0].children[0].data;}catch(a){}try{a.updated=new Date(h.getElementsByTagName('updated',b.children,!1)[0].children[0].data);}catch(a){}try{a.author=h.getElementsByTagName('email',b.children,!0)[0].children[0].data;}catch(a){}a.items=[],h.getElementsByTagName('entry',b.children).forEach(function(c,d,e){var b={};try{b.id=h.getElementsByTagName('id',c.children,!1)[0].children[0].data;}catch(a){}try{b.title=h.getElementsByTagName('title',c.children,!1)[0].children[0].data;}catch(a){}try{b.link=h.getElementsByTagName('link',c.children,!1)[0].attribs.href;}catch(a){}try{b.description=h.getElementsByTagName('summary',c.children,!1)[0].children[0].data;}catch(a){}try{b.pubDate=new Date(h.getElementsByTagName('updated',c.children,!1)[0].children[0].data);}catch(a){}a.items.push(b);});}this.dom=a;}j.super_.prototype.done.call(this);},i._emptyTags={area:1,base:1,basefont:1,br:1,col:1,frame:1,hr:1,img:1,input:1,isindex:1,link:1,meta:1,param:1,embed:1},i.reWhitespace=/^\s*$/,i.prototype.dom=null,i.prototype.reset=function a(){this.dom=[],this._done=!1,this._tagStack=[],this._tagStack.last=function a(){return this.length?this[this.length-1]:null;};},i.prototype.done=function a(){this._done=!0,this.handleCallback(null);},i.prototype.peek=function a(){this.handleCallback(null);},i.prototype.writeTag=function a(a){this.handleElement(a);},i.prototype.writeText=function a(a){if(this._options.ignoreWhitespace&&i.reWhitespace.test(a.data))return;this.handleElement(a);},i.prototype.writeComment=function a(a){this.handleElement(a);},i.prototype.writeDirective=function a(a){this.handleElement(a);},i.prototype.error=function a(a){this.handleCallback(a);},i.prototype._options=null,i.prototype._callback=null,i.prototype._done=!1,i.prototype._tagStack=null,i.prototype.handleCallback=function a(a){if(typeof this._callback!='function')if(a)throw a;else return;this._callback(a,this.dom);},i.prototype.isEmptyTag=function(b){var a=b.name.toLowerCase();return a.charAt(0)=='/'&&(a=a.substring(1)),this._options.enforceEmptyTags&&!!i._emptyTags[a];},i.prototype.handleElement=function a(a){if(this._done&&this.handleCallback(new Error('Writing to the handler after done() called is not allowed without a reset()')),this._options.verbose||(delete a.raw,(a.type=='tag'||a.type=='script'||a.type=='style')&&delete a.data),!this._tagStack.last())a.type!=f.Text&&a.type!=f.Comment&&a.type!=f.Directive?a.name.charAt(0)!='/'&&(this.dom.push(a),this.isEmptyTag(a)||this._tagStack.push(a)):this.dom.push(a);else if(a.type!=f.Text&&a.type!=f.Comment&&a.type!=f.Directive)if(a.name.charAt(0)=='/'){var c=a.name.substring(1);if(!this.isEmptyTag(a)){var b=this._tagStack.length-1;while(b>-1&&this._tagStack[b--].name!=c);if(b>-1||this._tagStack[0].name==c)while(b<this._tagStack.length-1)this._tagStack.pop();}}else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(a),this.isEmptyTag(a)||this._tagStack.push(a);else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(a);},h={testElement:function a(c,a){if(!a)return!1;for(var b in c)if(b=='tag_name'){if(a.type!='tag'&&a.type!='script'&&a.type!='style')return!1;if(!c.tag_name(a.name))return!1;}else if(b=='tag_type'){if(!c.tag_type(a.type))return!1;}else if(b=='tag_contains'){if(a.type!='text'&&a.type!='comment'&&a.type!='directive')return!1;if(!c.tag_contains(a.data))return!1;}else if(!(a.attribs&&c[b](a.attribs[b])))return!1;return!0;},getElements:function a(d,c,e,b){function j(a){return function(b){return b==a;};}if(e=e===undefined||e===null||!!e,b=isNaN(parseInt(b))?-1:parseInt(b),!c)return[];var a=[];var f;for(var g in d)typeof d[g]!='function'&&(d[g]=j(d[g]));if(h.testElement(d,c)&&a.push(c),b>=0&&a.length>=b)return a;if(e&&c.children)f=c.children;else if(c instanceof Array)f=c;else return a;for(var i=0;i<f.length;i++)if(a=a.concat(h.getElements(d,f[i],e,b)),b>=0&&a.length>=b)break;return a;},getElementById:function a(b,c,d){var a=h.getElements({id:b},c,d,1);return a.length?a[0]:null;},getElementsByTagName:function a(a,b,c,d){return h.getElements({tag_name:a},b,c,d);},getElementsByTagType:function a(a,b,c,d){return h.getElements({tag_type:a},b,c,d);}},a.Parser=g,a.DefaultHandler=i,a.RssHandler=j,a.ElementType=f,a.DomUtils=h;}(),a;}(function(){},{},{},'','');e.decodeEntities=function(c){var b=document.createElement('span');return b.innerHTML=c,a.hasTextContent()?b.textContent:b.innerText;},e.abstractNodeToElement=function(d,h){var g;switch(d.type){case'script-text':b.error('Encountered script-text node! WHAT DO!');return document.createTextNode(d.data);case'text':return h&&h.nodeName=='SCRIPT'?document.createTextNode(d.data):document.createTextNode(e.decodeEntities(d.data));case'comment':try{return document.createComment(d.data);}catch(a){return document.createComment('Malformed comment. '+a.message);}case'directive':return document.createComment('Ignored directive from document.write stream.');case'tag':case'script':d.attribs||(d.attribs={});for(var f in d.attribs)d.attribs[f.toLowerCase()]=e.decodeEntities(d.attribs[f]),f.toLowerCase()!=f&&delete d.attribs[f];(d.type.toLowerCase()=='script'||d.name.toLowerCase()=='script')&&('src'in d.attribs&&(d.attribs['data-rocketsrc']=d.attribs.src,delete d.attribs.src),d.attribs.type='text/rocketscript');default:g=document.createElement(d.name);}return c.forEach(d.attribs,function(c,b){/^id$|^src$/.test(b)?g[b.toLowerCase()]=c:/^class$/.test(b)?g.className=c:a.setAttribute(g,b,c);}),g;},e.isValidParent=function(c,f){var d=e.elementSemantics,b=d[c.toLowerCase()],a=d[f.toLowerCase()];return a&&a.exclusive&&c in a.exclusive?!1:!a||f==='body'||a.inclusive&&c in a.inclusive||!b||!b.contentCategories||!a.contentModel||a.contentModel!=='empty'&&(a.contentModel==='transparent'||a.contentModel in b.contentCategories)?!0:!1;},e.elementSemantics={head:{contentCategories:{},contentModel:'metadata'},title:{contentCategories:{metadata:1},contentModel:'text'},base:{contentCategories:{metadata:1},contentModel:'empty'},link:{contentCategories:{metadata:1},contentModel:'empty'},meta:{contentCategories:{metadata:1},contentModel:'empty'},style:{contentCategories:{metadata:1,flow:1},contentModel:'text'},script:{contentCategories:{metadata:1,flow:1,phrasing:1},contentModel:'text'},noscript:{contentCategories:{metadata:1,flow:1,phrasing:1},contentModel:'transparent',exclusive:{noscript:'recursive'}},body:{contentCategories:{sectioning:1},contentModel:'flow'},section:{contentCategories:{flow:1,sectioning:1},contentModel:'flow'},nav:{contentCategories:{flow:1,sectioning:1},contentModel:'flow'},article:{contentCategories:{flow:1,sectioning:1},contentModel:'flow'},aside:{contentCategories:{flow:1,sectioning:1},contentModel:'flow'},h1:{contentCategories:{flow:1,heading:1},contentModel:'phrasing'},h2:{contentCategories:{flow:1,heading:1},contentModel:'phrasing'},h3:{contentCategories:{flow:1,heading:1},contentModel:'phrasing'},h4:{contentCategories:{flow:1,heading:1},contentModel:'phrasing'},h5:{contentCategories:{flow:1,heading:1},contentModel:'phrasing'},h6:{contentCategories:{flow:1,heading:1},contentModel:'phrasing'},hgroup:{contentCategories:{flow:1,heading:1},contentModel:'empty',inclusive:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}},header:{contentCategories:{flow:1},contentModel:'flow',exclusive:{header:'recursive',footer:'recursive'}},footer:{contentCategories:{flow:1},contentModel:'flow',exclusive:{header:'recursive',footer:'recursive'}},address:{contentCategories:{flow:1},contentModel:'flow',exclusive:{address:'recursive',header:'recursive',footer:'recursive'}},p:{contentCategories:{flow:1},contentModel:'phrasing'},hr:{contentCategories:{flow:1},contentModel:'empty'},pre:{contentCategories:{flow:1},contentModel:'phrasing'},blockquote:{contentCategories:{flow:1,sectioning:1},contentModel:'flow'},ol:{contentCategories:{flow:1},contentModel:'empty',inclusive:{li:1}},ul:{contentCategories:{flow:1},contentModel:'flow',inclusive:{li:1}},li:{contentCategories:{},contentModel:'flow'},dl:{contentCategories:{flow:1},contentModel:'empty',inclusive:{dt:1,dd:1}},dt:{contentCategories:{},contentModel:'phrasing'},dd:{contentCategories:{},contentModel:'flow'},figure:{contentCategories:{flow:1,sectioning:1},contentModel:'flow',inclusive:{figcaption:1}},figcaption:{contentCategories:{},contentModel:'flow'},div:{contentCategories:{flow:1},contentModel:'flow'},a:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'transparent',exclusive:{}},em:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},strong:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},small:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},s:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},cite:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},q:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},dfn:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing',exclusive:{dfn:'recursive'}},abbr:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},time:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},code:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},'var':{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},abbr:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},samp:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},kbd:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},sub:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},sup:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},i:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},b:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},mark:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},ruby:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing',inclusive:{rt:1,rp:1}},rt:{contentCategories:{},contentModel:'phrasing'},rp:{contentCategories:{},contentModel:'phrasing'},bdi:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},bdo:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},span:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},br:{contentCategories:{flow:1,phrasing:1},contentModel:'empty'},wbr:{contentCategories:{flow:1,phrasing:1},contentModel:'empty'},ins:{contentCategories:{flow:1,phrasing:1},contentModel:'transparent'},del:{contentCategories:{flow:1,phrasing:1},contentModel:'transparent'},img:{contentCategories:{flow:1,phrasing:1,embedded:1},contentModel:'empty'},iframe:{contentCategories:{flow:1,phrasing:1,embedded:1,interactive:1},contentModel:'transparent'},embed:{contentCategories:{flow:1,phrasing:1,embedded:1,interactive:1},contentModel:'empty'},object:{contentCategories:{flow:1,phrasing:1,embedded:1,interactive:1},contentModel:'transparent',inclusive:{param:1}},param:{contentCategories:{},contentModel:'empty'},video:{contentCategories:{flow:1,phrasing:1,embedded:1},contentModel:'transparent'},audio:{contentCategories:{flow:1,phrasing:1,embedded:1,interactive:1},contentModel:'transparent'},source:{contentCategories:{},contentModel:'empty'},track:{contentCategories:{},contentModel:'empty'},canvas:{contentCategories:{flow:1,phrasing:1,embedded:1},contentModel:'transparent'},map:{contentCategories:{flow:1,phrasing:1},contentModel:'transparent'},area:{contentCategories:{flow:1,phrasing:1},contentModel:'empty'},table:{contentCategories:{flow:1},contentModel:'empty',inclusive:{caption:1,colgroup:1,thead:1,tfoot:1,tbody:1,tr:1}},caption:{contentCategories:{},contentModel:'flow',exclusive:{table:'recursive'}},colgroup:{contentCategories:{},contentModel:'empty',inclusive:{col:1}},col:{contentCategories:{},contentModel:'empty'},tbody:{contentCategories:{},contentModel:'empty',inclusive:{tr:1}},thead:{contentCategories:{},contentModel:'empty',inclusive:{tr:1}},tfoot:{contentCategories:{},contentModel:'empty',inclusive:{tr:1}},tr:{contentCategories:{},contentModel:'empty',inclusive:{td:1,th:1}},td:{contentCategories:{sectioning:1},contentModel:'flow'},th:{contentCategories:{},contentModel:'phrasing'},form:{contentCategories:{flow:1},contentModel:'flow',exclusive:{form:'recursive'}},fieldset:{contentCategories:{flow:1,sectioning:1},contentModel:'flow',inclusive:{legend:1}},legend:{contentCategories:{},contentModel:'phrasing'},label:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'phrasing'},input:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'empty'},button:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'phrasing'},select:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'empty',inclusive:{option:1,optgroup:1}},datalist:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing',inclusive:{option:1}},optgroup:{contentCategories:{},contentModel:'empty',inclusive:{option:1}},option:{contentCategories:{},contentModel:'text'},textarea:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'text'},keygen:{contentCategories:{flow:1,phrasing:1,interactive:1},contentModel:'empty'},output:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing'},progress:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing',exclusive:{progress:'recursive'}},meter:{contentCategories:{flow:1,phrasing:1},contentModel:'phrasing',exclusive:{meter:'recursive'}},details:{contentCategories:{flow:1,sectioning:1,interactive:1},contentModel:'flow',inclusive:{summary:1}},summary:{contentCategories:{},contentModel:'phrasing'},command:{contentCategories:{metadata:1,flow:1,phrasing:1},contentModel:'empty'},menu:{contentCategories:{flow:1,interactive:1},contentModel:'flow',inclusive:{li:1}}};var i=function(w){var e=w,i={},m={},n={},f={},r={},l=!1,p=function(c,l){var d=arguments,k=/^on/.test(c),h=k?c.substring(2):c,j=i[h];if(j)b.log(h+' handler added by '+g.getExecutingScript().toString()),j.push(d);else if(!a.hasStandardEvents())try{f.attachEvent.apply(e,d);}catch(a){f.attachEvent(c,l);}else f.addEventListener.apply(e,d);},o=function(d,k){var b=arguments,j=/^on/.test(d)?d.substring(2):d,h=!1,g=i[j];if(g)c.forEach(g,function(a,d){return a.length!==b.length?!1:(c.forEach(a,function(e,c){if(e!==b[c])return!1;c===a.length-1&&(g.splice(d,1),h=!0);}),!h);});else if(a.hasStandardEvents())f.removeEventListener.apply(e,b);else try{f.detachEvent.apply(e,b);}catch(a){f.detachEvent(d,k);}},j=function(d,i){var b=d.split('.'),h=b[b.length-1],a=e;for(var c=0;c<b.length-1;c++){if(!(b[c]in a))break;a=a[b[c]];}h in a&&(f[d]=a[h],a[h]=function(b,c,e,h,j){if(g.getActivated())return i.apply(a,arguments);else try{return f[d].apply(a,arguments);}catch(a){return f[d](b,c,e,h,j);}});},s=function(){c.forEach(f,function(f,g){var a=g.split('.'),d=a[a.length-1],b=e;for(var c=0;c<a.length-1;c++){if(!(a[c]in b))break;b=b[a[c]];}b[d]=f;}),l=!0;},q=function(c,f,g){var b=d.getOwnPropertyDescriptor(e,c)||{};(f||g)&&(r[c]={get:b.get,set:b.set,writable:b.writable,value:b.value},f&&(b.get=f),g&&(b.set=g),b.value=null,a.internetExplorer&&(delete b.writable,delete b.enumerable,delete b.value),d.defineProperty(e,c,b));},u=function(){c.forEach(r,function(b,c){var a=d.getOwnPropertyDescriptor(e,c);a.get=b.get,a.set=b.set,d.defineProperty(e,c,a);});},k=function(c){var b=a.internetExplorer<9?document.createEventObject():document.createEvent('HTMLEvents');return a.internetExplorer<9?(b=document.createEventObject(),d.defineProperty(b,'type',{get:function(){return c;}})):b.initEvent(c,!0,!1),a.safari&&(b=h.proxy(b)),d.defineProperty(b,'target',{get:function(){return e;}}),b;},v=function(c){var b='on'+c.toLowerCase(),d=f.addEventListener||f.attachEvent,g=function(a){a.captureHandler=arguments.callee,n[c]=a;};if(q(b,function(){return m[b];},function(a){m[b]=a;}),d)if(i[c]||(i[c]=[]),!a.hasStandardEvents())try{d.call(e,b,g);}catch(a){d(b,g);}else d.call(e,c,g,!0);},t=function(h,o){var j='on'+h.toLowerCase(),l=f.removeEventListener||f.detachEvent,g=o||n[h];if(h==='DOMContentLoaded'&&i[h].length&&!g&&(g=k(h),g.captureHandler=function(){}),a.internetExplorer<9&&e===window&&h==='load'&&i[h].length&&(g=k(h),g.captureHandler=function(){}),g){var m=g.stopPropagation,p=g.stopImmediatePropagation,q=i[h];if(m&&(g.stopPropagation=function(){g.propagationStopped=!0,m.apply(g,arguments);}),c.forEach(d.toArray(i[h]),function(d,h){var a=f.attachEvent?window:e,c=d[1];try{c.call(a,g);}catch(a){b.error(a.message);}return g.propagationStopped?!1:void 0;}),!g.propagationStopped&&e[j])try{e[j].call(e,g);}catch(a){error(a);}if(!a.hasStandardEvents())try{l.call(e,j,g.captureHandler);}catch(a){l(j,g.captureHandler);}else l.call(e,h,g.captureHandler,!0);}};return j('addEventListener',p),j('attachEvent',p),j('removeEventListener',o),j('detachEvent',o),{wrapNativeMethod:j,restoreNativeMethods:s,restoreNativeProperties:u,restore:function(){l=!0;},isRestored:function(){return l;},wrapNativeProperty:q,createEvent:k,deferEvent:v,fireEvent:t,getTarget:function(){return e;},getNativeMethod:function(a){return f[a];}};};var h=function(f,i,g,j,m,h,k,o,n,e,b,q,r,s,p){return f=function(a){return function(c){return{set:function(d){c[a]=b(d);},get:function(){return e(c[a]);}};};},i=function(a){return function(b){return function(){return c.map(b[a].apply(b,arguments),e);};};},g=function(a){return function(c){return function(f,g){var d=c[a](b(f),b(g));return d&&e(d);};};},j={insertBefore:g('insertBefore'),appendChild:g('appendChild'),replaceChild:g('replaceChild'),removeChild:g('removeChild'),getElementsByTagName:i('getElementsByTagName'),getElementsByClassName:i('getElementsByClassName'),firstChild:f('firstChild'),lastChild:f('lastChild'),nextSibling:f('nextSibling'),previousSibling:f('previousSibling'),parentNode:f('parentNode'),childNodes:function(a){return{set:function(b){a.childNodes=b;},get:function(){return c.map(a.childNodes,e);}};}},m=c.extend({},j,{type:function(b){return{get:function(){var c=a.getAttribute(b,'type');return c==='text/rocketscript'?'text/javascript':c;},set:function(c){a.setAttribute(b,'type',c);}};},src:function(b){return{get:function(){var c=a.getData(b,'rocketsrc');return c?l.resolveFullURL(c):b.src;},set:function(c){a.setAttribute(b,'type','text/javascript'),b.src=c;}};},hasAttribute:function(b){return function(c){return c==='src'?!!a.getData(b,'rocketsrc'):b.hasAttribute(c);};},getAttribute:function(b){return function(c){return c==='src'?a.getData(b,'rocketsrc'):b.getAttribute(c);};}}),h=function(a){return function(b){var e={isProxyNode:!0,proxiedNode:b},f=function(g,c){var f=a[c]?a[c](b):!1;typeof g==='function'?e[c]=f||function(){return b[c].apply(b,arguments);}:d.defineProperty(e,c,{get:f.get||function(){return b[c];},set:f.set||function(a){b[c]=a;}});};return c.forEach(b,f,null,!0),e;};},k=h(j),o=h(m),n=h({}),e=function(b){return b?'nodeName'in b?a.internetExplorer==8||!b||b.isProxyNode?b:b.nodeName==='SCRIPT'?o(b):k(b):n(b):void 0;},b=function(a){return a&&a.isProxyNode?a.proxiedNode:a;},a.safari&&'Node'in window&&function(){c.forEach(['appendChild','insertBefore','replaceChild','removeChild'],function(a){var c=Element.prototype[a];Node.prototype[a]=function(a,d){return a=b(a),d=b(d),c.call(this,a,d);};});}(),{proxy:e,unproxy:b};}();var q=function(){var j=document,l=!0,t=!0,m='loading',s=null,f=new e.Parser(new e.DefaultHandler(function(a,c){a?b.error('The parser experienced an error. '+a.message):g.getExecutingScript().after(c);})),o=function(){s=document.getElementsByTagName('body')[0],m='complete',l=!1,d.fireEvent('DOMContentLoaded'),d.fireEvent('readystatechange');},k=function(a){typeof a!=='string'&&(a=''+a),b.log('Appending to document.write buffer: \n'+a),f.parseChunk(a),f.peek();},q=function(){var a=f._buffer;f.reset(),a.length&&f.parseChunk(a);},n=function(a,f){var e=d.getNativeMethod('getElementsByTagName').call(j,a);return b.log('Looking up elements of type '+a+(f?', but overriding script introspection support':'')),f||!(/^script$/i.test(a)&&t)?e:c.map(e,h.proxy);},d=i(j),p=i(j.documentElement);return c.extend(d,{ready:o,write:k,flush:q,getParser:function(){return f;}}),d.wrapNativeMethod('write',function(a){a&&k(a);}),d.wrapNativeMethod('writeln',function(a){a&&k(a+'\n');}),d.wrapNativeMethod('open',function(){b.log('Ignoring document.open..');}),d.wrapNativeMethod('close',function(){b.log('Ignoring document.close..');}),d.wrapNativeMethod('createElement',function(c){var b=a.createElement(c);return c==='script'&&(b=r(b).getTarget()),b;}),d.wrapNativeMethod('getElementsByTagName',n),p.wrapNativeMethod('getElementsByTagName',n),d.wrapNativeMethod('getElementById',function(b){var a=d.getNativeMethod('getElementById').call(j,b);return a&&a.nodeName&&a.nodeName.toLowerCase()=='script'?h.proxy(a):a;}),d.wrapNativeMethod('getElementsByClassName',function(e){var b=d.getNativeMethod('getElementsByClassName').call(j,e);var a=[];return c.forEach(b,function(b,c){b&&b.nodeName&&b.nodeName.toLowerCase()=='script'&&(b=h.proxy(b)),a[c]=b;}),a;}),d.wrapNativeMethod('documentElement.doScroll',function(a){if(l)throw'The data necessary to complete this operation is not yet available.';d.getNativeMethod('documentElement.doScroll').apply(this,arguments);}),d.wrapNativeProperty('readyState',function(){return m;}),d.deferEvent('DOMContentLoaded'),d.deferEvent('readystatechange'),d;};var t=function(){var b=window,d=function(c){document.readyState==='complete'?c():a.getNativeMethod('addEventListener')?a.getNativeMethod('addEventListener').call(b,'load',c,!0):a.getNativeMethod('attachEvent')('onload',c);},a=i(b);return c.extend(a,{whenLoaded:d,load:function(){a.fireEvent('load');}}),a.wrapNativeMethod('getComputedStyle',function(b,c){return b.isProxyNode&&(b=b.proxiedNode),a.getNativeMethod('getComputedStyle').call(this,b,c);}),a.deferEvent('load'),a;};var u=function(b,a,c,e){return b={},a={},c=0,e=/^https?:\/\/.*?\.?(livefyre\.com\/|api\.stripe\.com|api\.solvemedia\.com\/papi\/_challenge\.js)/,function(g){return e.test(g)?f.reject(new Error('Blacklisted URL; Bailing from bag')):g.length>2048?f.reject(new Error('Provided URL exceeds maximum allowed length of 2048 bytes.')):(g=l.resolveFullURL(g),b[g]=b[g]||function(c,b){b=parseInt(b)||500,a[g]&&(b>499&&b<803||!c?a[g].reject(new Error('Script proxy demands script resolution failover.')):a[g].resolve(c)),delete a[g];},c++||d.nextTick(function(){c=0,v.load(b,function(){}),b={};}),(a[g]=a[g]||f.defer()).promise);};}();var o=function(){var m=function(){var h=function(){var c=0,b=[];while(f.length>c){var d=f[c],g=a.getData(d,'rocketoptimized'),h=a.getAttribute(d,'type');!g&&h==='text/rocketscript'?b[b.push(k(d))-1].bookmark():c++;}return e=b.length?0:e+1,b;},f=document.getElementsByTagName('script',!0),e=0,g=function(){b.error('Scanner called empty script handler!');},c=undefined,d={scan:function(){b.log('Scanning for scripts.');var a=h();a.length&&g(a);},start:function(){c||function(){d.scan(),e<50?c=setTimeout(arguments.callee,25):d.stop();}();},stop:function(){c&&clearInterval(c),d.scan(),c=undefined;},setScriptHandler:function(a){g=a;}};return a.onLoad.then(function(){b.log('Document fully loaded.');}),d;},e=m(),d=[],g=null,l=!1,h=f.ref(),n=function(a){d=d.concat(a);},o=function(){return b.log('Queueing '+d.length+' scripts for execution.'),c.forEach(d,function(a,b){h=h.then(function(){return(g=a).execute();});}),d=[],h;},i={execute:function(){return l=!0,e.scan(),o().then(function(){if(d.length)return i.execute();j.length&&(c.forEach(j,function(a){a.call(window);}),j=[]);}).then(function(){var a=setInterval(function(){d.length&&(clearInterval(a),i.execute());},250);});},pushScript:function(a){d.push(a);},getActivated:function(){return l;},setExecutingScript:function(a){a&&(g=a);},getExecutingScript:function(){return g;}};return e.setScriptHandler(n),e.start(),i;};var p=function(g,h){var d=function(){if('readyState'in c&&!(c.readyState=='loaded'||c.readyState=='complete'))return;b.log('Lost script from "'+h+'" is done recovering.'),e.resolve(),i();},j=function(){b.error('Lost script from "'+h+'" errored out during recovery.'),e.resolve(),i();},i=function(){a.removeEventListener(c,'load',d),a.removeEventListener(c,'readystatechange',d),a.removeEventListener(c,'error',j);},e=f.defer(),c=a.createElement('script'),k,l;return g.parentNode||(k=document.getElementsByTagName('script',!0),l=k[k.length-1],l.parentNode.insertBefore(g,l.nextSibling)),g.parentNode.insertBefore(c,g.nextSibling),a.addEventListener(c,'load',d),a.addEventListener(c,'readystatechange',d),a.addEventListener(c,'error',j),b.log('Attempting to recover script from "'+h+'"'),c.type='text/javascript',c.src=h,setTimeout(function(){i(),e.resolve();},1e4),e.promise;};var k=function(h){var z=function(){h.parentNode&&h.parentNode.replaceChild(o,h);},q=function(){o.parentNode&&o.parentNode.replaceChild(h,o);},v=a.getData(h,'rocketsrc'),i=v?l.resolveFullURL(v):'',o=document.createTextNode(''),r=f.ref(),m=[],s=[],t=f.defer(),x=function(a){return/^\s*(<!--)\s*/.test(a)&&(b.log('Applying epic hack for inline comment removal!',b.HACK),a=a.replace(/^\s*<!--|-->\s*$/g,'/* ROCKET: Removed HTML Comment */')),a+='\n/*\n//@ sourceURL=/'+(i||'inline-'+d.uid()+'.js')+'\n*/',a;},j={bookmark:z,restore:q,execute:function(){return w.then(function(a){a=x(a),q(),b.log('Executing '+j.toString());try{d.globalEval(a);}catch(a){b.error('Rocket failed to execute a script. '+a.message);}return t.resolve(),n.flush(),m.length&&c.forEach(m,function(a){r=f.when(r,function(){return g.setExecutingScript(a),a.execute();});}),m=[],r;},function(a){return b.error('Failed to resolve text content for '+j.toString()+'. '+a.message),q(),p(h,i);});},getSource:function(){return i;},isExternal:function(){return!!i;},isAttached:function(){return!!h.parentNode;},after:function(d){var b=document.createDocumentFragment();m=[],function(d,f,g){var b=arguments.callee;c.forEach(f,function(c,j){var i=d[j]||{children:[]},h=i.node,f=g;while(!e.isValidParent(c.type,f.nodeName))f=f.parentNode;h||(h=e.abstractNodeToElement(c,f)),(c.type=='comment'||c.type=='text')&&(f.nodeName=='SCRIPT'||f.nodeName=='STYLE')&&a.internetExplorer===8?(c.node=h,f.text=h.nodeValue):c.node=f.appendChild(h),c.children&&b(i.children,c.children,h),(c.type.toLowerCase()=='script'||c.type.toLowerCase()=='tag'&&c.name.toLowerCase()=='script')&&m.push(k(h));});}(s,d,b),s=d,h.parentNode.insertBefore(b,h.nextSibling);},finishExecuting:function(){return t.promise;},resolveText:function(){return w;},toString:function(){return j.isExternal()?'"'+i+'"':'inline script beginning with: '+(h.text||h.textContent||'').substring(0,50).replace(/\s+/g,' ');}},w=function(d,a){return d=f.defer(),b.log('Resolving text content for '+j.toString()),j.isExternal()?d.resolve(u(i)).then(function(){b.log('Text content resolved for '+j.toString());}):(a='',h.childNodes.length!==0?c.forEach(h.childNodes,function(b){a+=b.nodeValue;},a):a=h.text||h.textContent||'',d.resolve(a)),d.promise;}();if(a.setData(h,'rocketoptimized','true'),a.internetExplorer===8){var y=h.getAttribute;h.getAttribute=function(a){return a==='src'?i:y.call(h,a);},d.defineProperty(h,'src',{set:function(b){i=b,a.setData(h,'rocketsrc',b);},get:function(){return i;}});}return j;};var r=function(j){var o=j,p=a.safari?h.proxy(j):j,e=i(p),m='loading',f='',l='',n=function(c){if(f!==c){b.log('Appending script-inserted script to execution queue.'),a.setData(j,'rocketsrc',c);var d=k(j);g.pushScript(d),d.finishExecuting().then(function(){e.load();});}f=c;};return c.extend(e,{load:function(){var b=e.createEvent(a.internetExplorer<9?'readystatechange':'load');m='complete',d.defineProperty(b,'readyState',function(){return m;}),e.fireEvent(b.type,b);},fail:function(){e.fireEvent('error');}}),e.deferEvent('load'),e.deferEvent('readystatechange'),e.deferEvent('error'),e.wrapNativeProperty('readyState',function(){return m;},function(){}),e.wrapNativeMethod('getAttribute',function(a){return a=='src'?f:e.getNativeMethod('getAttribute').apply(o,arguments);}),e.wrapNativeMethod('setAttribute',function(a,b){return a=='src'?n(b):e.getNativeMethod('setAttribute').apply(o,arguments);}),e.wrapNativeProperty('attributes.src',function(){return f;},function(a){n(a);}),e.wrapNativeProperty('src',function(){return f;},function(a){n(a);}),e.wrapNativeProperty('text',function(){return l;},function(a){if(l=a,!f)try{d.globalEval(l);}catch(a){b.error(a.message);}return l;}),e;};b.log('Capturing the window and document, and gathering scripts.');var s=t(),g=o(),n=q(),j=[],m=f.defer();return a.onLoad.then(function(){return b.log('Launching scripts.'),g.execute().then(function(){return b.log('Firing deferred ready event.'),n.ready(),g.execute().then(function(){return b.log('Firing deferred load event.'),s.load(),g.execute().then(function(){b.log('Fin.'),m.resolve();});});});}),{push:function(a){typeof a==='function'&&j.push(a);},loads:m.promise};});