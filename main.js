!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=e=>{(()=>{const t=document.createElement("header"),n=document.createElement("div"),r=document.createElement("h1");t.id="headingContainer",n.id="homeMenu",r.id="heading",n.innerHTML="&#9776;",r.textContent="To Do List",t.appendChild(n),t.appendChild(r),e.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="sideMenu",t.innerHTML="<div class = 'sideOptions'>Default</div>\n                                <div  class = 'sideOptions' id = 'addProj'>Add New Project</div>\n                                <div id = 'close' class = 'sideOptions closeBtn' >&times;</div>",e.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="projFormConatiner",t.classList.add("form-popup");const n=document.createElement("form");n.name="projForm",n.classList.add("projAddForm"),n.classList.add("formPage"),n.action="/action_page.php",n.innerHTML='<h1>Add Project</h1>\n  \n                                <label for="projectName"><b>Project Name:</b></label>\n                                <input type="text" name="projectName" required>\n\n                                <button type="button" class="btnLogin" id = "btnSubmit">Submit</button>\n                                <div class="closeBtn" id = \'closeProjForm\'>&times;</div>',t.appendChild(n),e.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="addToDo",t.innerHTML="&#43;",e.appendChild(t)})(),(()=>{const t=document.createElement("div");t.id="todoFormConatiner",t.classList.add("form-popup");const n=document.createElement("form");n.name="todoForm",n.classList.add("todoAddForm"),n.classList.add("formPage"),n.action="/action_page.php",n.innerHTML='<h1>Add Todo</h1>\n  \n                                <label for="title"><b>Title:</b></label>\n                                <input type="text" name="title" required>\n\n                                <label for="description"><b>Description:</b></label>\n                                <textarea id="description" name="description" rows="4" cols="50"></textarea>\n\n                                <label for="dueDate"><b>Due Date:</b></label>\n                                <input type="date" name="dueDate" required>\n\n                                <label for="priority">Priority:</label>\n                                <select name="priority" id="priority">\n                                    <option value="Low">Low</option>\n                                    <option value="Medium">Medium</option>\n                                    <option value="High">High</option>\n                                </select>\n                                \n                                <button type="button" class="btnLogin" id = "btnSubmitTodo">Submit</button>\n                                <div class="closeBtn" id = \'closeTodoForm\'>&times;</div>',t.appendChild(n),e.appendChild(t)})()};let a=[];const o=(e,t=[])=>{let n=((e,t=[])=>({name:e,todos:t}))(e,t);return a.push(n),n};var i=()=>{window.this="Home",o("Home");const e=document.querySelector("#main-div");r(e);const t=document.querySelector("#homeMenu"),n=document.querySelector("#sideMenu");t.addEventListener("click",()=>{n.style.width="280px"});document.querySelector("#close").addEventListener("click",()=>{n.style.width="0px"});document.querySelector("#addProj").addEventListener("click",()=>{document.querySelector("#projFormConatiner").style.display="block"});document.querySelector("#closeProjForm").addEventListener("click",()=>{document.querySelector("#projFormConatiner").style.display="none"});document.querySelector("#addToDo").addEventListener("click",()=>{document.querySelector("#todoFormConatiner").style.display="block"});document.querySelector("#closeTodoForm").addEventListener("click",()=>{document.querySelector("#todoFormConatiner").style.display="none"})};var u=()=>{document.querySelector("#btnSubmit").addEventListener("click",()=>{let e=document.forms.projForm.projectName;console.log(e);let t=o(e.value);(e=>{console.log("Started");const t=document.querySelector("#sideMenu"),n=document.createElement("div");n.id=e.name,n.classList.add("sideOptions"),n.classList.add("projectName"),n.textContent=e.name,n.addEventListener("click",e=>{window.this=e.target.textContent}),t.appendChild(n)})(t),document.forms.projForm.reset(),document.querySelector("#closeProjForm").click(),document.querySelector("#"+t.name).click()})};function s(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function d(e){s(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(e){s(1,arguments);var t=d(e);return!isNaN(t)}var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var h={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function w(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=r.match(i);if(!u)return null;var s,d=u[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(d)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(d)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(d.length)}}}var v,p={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof l[e]?l[e]:1===t?l[e].one:l[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:h,formatRelative:function(e,t,n,r){return f[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(v={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(v.matchPattern);if(!a)return null;var o=a[0],i=n.match(v.parsePattern);if(!i)return null;var u=v.valueCallback?v.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:w({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:w({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:w({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:w({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){s(2,arguments);var n=d(e).getTime(),r=b(t);return new Date(n+r)}function T(e,t){s(2,arguments);var n=b(t);return y(e,-n)}function M(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var C={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return M("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):M(n+1,2)},d:function(e,t){return M(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return M(e.getUTCHours()%12||12,t.length)},H:function(e,t){return M(e.getUTCHours(),t.length)},m:function(e,t){return M(e.getUTCMinutes(),t.length)},s:function(e,t){return M(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return M(Math.floor(r*Math.pow(10,n-3)),t.length)}};function S(e){s(1,arguments);var t=1,n=d(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function x(e){s(1,arguments);var t=d(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=S(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=S(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function P(e){s(1,arguments);var t=x(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=S(n);return r}function D(e,t){s(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:b(a),i=null==n.weekStartsOn?o:b(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=d(e),c=u.getUTCDay(),l=(c<i?7:0)+c-i;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function k(e,t){s(1,arguments);var n=d(e,t),r=n.getUTCFullYear(),a=t||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:b(i),c=null==a.firstWeekContainsDate?u:b(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var m=D(l,t),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var f=D(h,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function E(e,t){s(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:b(a),i=null==n.firstWeekContainsDate?o:b(n.firstWeekContainsDate),u=k(e,t),d=new Date(0);d.setUTCFullYear(u,0,i),d.setUTCHours(0,0,0,0);var c=D(d,t);return c}var U="midnight",q="noon",j="morning",L="afternoon",O="evening",W="night";function F(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+M(o,2)}function N(e,t){return e%60==0?(e>0?"-":"+")+M(Math.abs(e)/60,2):Y(e,t)}function Y(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+M(Math.floor(a/60),2)+n+M(a%60,2)}var H={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return C.y(e,t)},Y:function(e,t,n,r){var a=k(e,r),o=a>0?a:1-a;return"YY"===t?M(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):M(o,t.length)},R:function(e,t){return M(x(e),t.length)},u:function(e,t){return M(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return C.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){s(1,arguments);var n=d(e),r=D(n,t).getTime()-E(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):M(a,t.length)},I:function(e,t,n){var r=function(e){s(1,arguments);var t=d(e),n=S(t).getTime()-P(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):C.d(e,t)},D:function(e,t,n){var r=function(e){s(1,arguments);var t=d(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return M(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return M(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return M(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?q:0===a?U:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?O:a>=12?L:a>=4?j:W,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return C.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):C.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):C.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):C.s(e,t)},S:function(e,t){return C.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return N(a);case"XXXX":case"XX":return Y(a);case"XXXXX":case"XXX":default:return Y(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return N(a);case"xxxx":case"xx":return Y(a);case"xxxxx":case"xxx":default:return Y(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+F(a,":");case"OOOO":default:return"GMT"+Y(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+F(a,":");case"zzzz":default:return"GMT"+Y(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return M(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return M((r._originalDate||e).getTime(),t.length)}};function z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function X(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var B={p:X,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return z(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",z(a,t)).replace("{{time}}",X(o,t))}};function Q(e){return e.getTime()%6e4}function A(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+Q(t))%6e4:Q(t))}var G=["D","DD"],_=["YY","YYYY"];function R(e){return-1!==G.indexOf(e)}function J(e){return-1!==_.indexOf(e)}function I(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,Z=/''/g,ee=/[a-zA-Z]/;function te(e){return e.match(K)[1].replace(Z,"'")}let ne=[];var re=()=>{document.querySelector("#btnSubmitTodo").addEventListener("click",()=>{let e=document.forms.todoForm.title,t=document.forms.todoForm.description,n=document.forms.todoForm.dueDate,r=document.forms.todoForm.priority;e=e.value,t=t.value,n=n.value.split("-"),n=function(e,t,n){s(2,arguments);var r=String(t),a=n||{},o=a.locale||p,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:b(i),l=null==a.firstWeekContainsDate?u:b(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=o.options&&o.options.weekStartsOn,h=null==m?0:b(m),f=null==a.weekStartsOn?h:b(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=d(e);if(!c(g))throw new RangeError("Invalid time value");var w=A(g),v=T(g,w),y={firstWeekContainsDate:l,weekStartsOn:f,locale:o,_originalDate:g},M=r.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,o.formatLong,y):e})).join("").match($).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return te(e);var n=H[t];if(n)return!a.useAdditionalWeekYearTokens&&J(e)&&I(e),!a.useAdditionalDayOfYearTokens&&R(e)&&I(e),n(v,e,o.localize,y);if(t.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return M}(new Date(n[0],n[1]-1,n[2]),"dd MMMM yyyy"),console.log(n),r=r.value;let o=((e,t,n,r,a)=>((e,t,n,r,a)=>({title:e,description:t,dueDate:n,priority:r,project:a}))(e,t,n,r,a))(e,t,n,r,window.this);console.log(o);const i=document.querySelector("#main-div");console.log(i),ne.push(o),(e=>{a.forEach(t=>{console.log("In"),t.name==e.project&&(t.todos.unshift(e),console.log(t.todos,"clicked"))})})(o),((e,t)=>{const n=document.createElement("div");n.classList.add("todoContainer"),n.innerHTML=`<div>${e.title}</div>\n                                    <div>${e.description}</div>\n                                    <div>${e.dueDate}</div>\n                                    <div>${e.priority}</div>`,t.appendChild(n)})(o,i),document.forms.todoForm.reset(),document.querySelector("#closeTodoForm").click()})};i(),u(),re()}]);