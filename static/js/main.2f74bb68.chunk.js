(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),s=(t(9),t(1)),i=(t(10),"https://api.openweathermap.org/data/2.5/"),l="56db02a8b5d745faf39356e8ae776931";var m=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({}),m=Object(s.a)(o,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>16?"app warm":"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",placeholder:"search ...",className:"search-bar",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&(fetch("".concat(i,"weather?q=").concat(t,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){return d(e)})),c(""))}})),"undefined"!=typeof u.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},u.name,",",u.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][e.getDay()],t=e.getDate(),n=["januvery","febraury","march","april","may","june","july","august","september","october","november","december"][e.getMonth()],r=e.getFullYear();return"".concat(a).concat(t).concat(n).concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather"},u.weather[0].main))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2f74bb68.chunk.js.map