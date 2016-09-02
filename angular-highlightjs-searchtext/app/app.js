!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _app=require("./app.html"),_app2=_interopRequireDefault(_app),_app3=require("./app.controller"),_app4=_interopRequireDefault(_app3),appComponent={restrict:"E",bindings:{},controller:_app4.default,template:_app2.default,controllerAs:"vm"};exports.default=appComponent},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),appController=function(){function appController($interval){_classCallCheck(this,appController);this.languageList=["java","c++","c","perl","python","javascript","html","css","sql","ruby","bash","php","JSON"]}return _createClass(appController,[{key:"changeLang",value:function(lang){this.language=lang}}]),appController}();appController.$inject=["$interval"],exports.default=appController},{}],3:[function(require,module,exports){module.exports='<div class="container-fluid main"><div class=page-header><h1>Angular Highlightjs Searchtext marker demo.</h1><h5>Select the code\'s language and paste your code.</h5></div><div class=""><div class=panel-body><div class=row><div class=col-md-4><input type=text ng-model=vm.searchtext class=form-control placeholder="search text here.."></div><div class=col-md-4><div class=input-group><div uib-dropdown class=input-group-btn><button id=split-button type=button class="btn btn-success" uib-dropdown-toggle><span class=caret></span></button><ul class=dropdown-menu uib-dropdown-menu role=menu aria-labelledby=split-button><li role=menuitem ng-repeat="lang in vm.languageList"><a ng-click=vm.changeLang(lang)>{{lang}}</a></li></ul></div><input type=text ng-model=vm.language class=form-control placeholder="Select language here.." readonly=readonly></div></div><div class=col-md-4><div class=checkbox><label><input ng-model=vm.isLineNumber type=checkbox> Display Line Number</label></div></div></div></div><div class=row><div class=col-md-12><div class=panel><div class=panel-body><textarea ng-model=vm.code class=code-input-area placeholder="your code snippet"></textarea></div></div></div></div><div class=row><div class=col-md-12><div class=panel><div class=panel-heading>Highlighted Result</div><div class=panel-body><div><hljs-search code=vm.code language=vm.language searchtext=vm.searchtext linenumber=vm.isLineNumber></hljs-search></div></div></div></div></div></div></div>'},{}],4:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _highlighter=require("./components/angular-highlight-searchtext/highlighter"),_highlighter2=_interopRequireDefault(_highlighter),_app=require("./app.component"),_app2=_interopRequireDefault(_app);angular.module("app",["ui.bootstrap",_highlighter2.default.name]).component("app",_app2.default).config(function(){})},{"./app.component":1,"./components/angular-highlight-searchtext/highlighter":7}],5:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _highlighter=require("./highlighter.html"),_highlighter2=_interopRequireDefault(_highlighter),_highlighter3=require("./highlighter.link"),_highlighter4=_interopRequireDefault(_highlighter3),highlighterComponent=function(){return{restrict:"E",scope:{code:"=",language:"=",searchtext:"=",linenumber:"="},link:_highlighter4.default,template:_highlighter2.default}};exports.default=highlighterComponent},{"./highlighter.html":6,"./highlighter.link":8}],6:[function(require,module,exports){module.exports=""},{}],7:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _highlighter=require("./highlighter.component"),_highlighter2=_interopRequireDefault(_highlighter),_highlighter3=require("./highlighter.service"),_highlighter4=_interopRequireDefault(_highlighter3),NetworkGraphModule=angular.module("hljsSearch",[]).directive("hljsSearch",_highlighter2.default).service("configHljs",_highlighter4.default);exports.default=NetworkGraphModule},{"./highlighter.component":5,"./highlighter.service":9}],8:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var highlighterLink=function(scope,element){var _searchText,_language,_lineNumber,_code,_searchTextArray,_markUp,_processedCode,_txt_replace,_searchIndex,_element=angular.element(element[0]),_re=null;!function(hljs){function codeProcessor(){if(_code&&_searchText&&_language){_processedCode=_lineNumber?"<pre>"+lineGenerator(_code)+"</pre>":"<pre>"+hljs.highlight(_language,_code).value+"</pre>",_searchTextArray=_searchText.replace(/[^\w\s]/gi," ").split(" ");for(var i=0;i<_searchTextArray.length;i++)_searchTextArray[i]&&(_re=new RegExp(_searchTextArray[i]+"(?=[^<>]*(?:<\\w|</[^a]|$))","ig"),_processedCode.search(_re)>0&&(_searchIndex=_processedCode.search(_re),_txt_replace='<b class="textHighlight">'+_processedCode.substring(_searchIndex,_searchIndex+_searchTextArray[i].length)+"</b>",_processedCode=_processedCode.replace(_re,_txt_replace)));_markUp='<code class="hljs '+_language+'">'+_processedCode+"</code>",_element.html(_markUp)}}function lineGenerator(code){for(var codeLineArray=hljs.highlight(_language,code).value.split("\n"),codeLineString="",i=0;i<codeLineArray.length;i++)codeLineString+='<span class="line-number">'+(i+1)+"</span>"+codeLineArray[i]+"\n";return codeLineString}scope.$watch("code",function(newVal){_code=newVal||" ",codeProcessor()}),scope.$watch("searchtext",function(newVal){_searchText=newVal||" ",codeProcessor()}),scope.$watch("language",function(newVal){_language=newVal,codeProcessor()}),scope.$watch("linenumber",function(newVal){_lineNumber=newVal||!1,codeProcessor()})}(hljs)};exports.default=highlighterLink},{}],9:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var highlighterService=function(){};exports.default=highlighterService},{}]},{},[4]);