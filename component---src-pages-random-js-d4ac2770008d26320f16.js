(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{LbRr:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a);function l(t){return r.a.createElement("h1",null,t.headerText)}},mQnI:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var a=n("q1tI"),r=n.n(a),l=(n("LbRr"),n("tF+0")),i=n("dI71"),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={array:e.array,letter:e.letter,date:new Date},n}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)},n.componentWillUnomount=function(){clearInterval(this.timerID)},n.tick=function(){this.setState({date:new Date})},n.render=function(){return r.a.createElement("div",{style:{fontFamily:"Courier New"}},r.a.createElement("table",null,r.a.createElement("tr",null,[1,2,3,4,5,6].map((function(t,e){return r.a.createElement("td",null,e)}))),r.a.createElement("tr",null,r.a.createElement("td",null,"hi there"),r.a.createElement("td",null,"hello again"),r.a.createElement("td",null,"there's more of me")),r.a.createElement("tr",null,r.a.createElement("td",null,"hi there"),r.a.createElement("td",null,"hello again"),r.a.createElement("td",null,"there's more of me"))),r.a.createElement("table",null,this.state.array.map((function(t,e){return r.a.createElement("tr",null,t.map((function(t,n){return r.a.createElement("td",null,e,":",n)})))}))),r.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."))},e}(r.a.Component),u=n("qucp"),o=n.n(u);function m(){return r.a.createElement("div",{style:{color:"teal"}},r.a.createElement("h1",null,"Some fun visualizations using imgaug"),r.a.createElement("img",{src:o.a,width:"300",height:"300",alt:"disco quokka",title:"disco quokka"}),r.a.createElement(l.a,null),r.a.createElement(c,{array:[[1,2,3],[4,5,6]],letter:"b"}),r.a.createElement("img",{src:"https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"}))}},qucp:function(t,e,n){t.exports=n.p+"static/disco quokka-ab6a4d46d89fbf458a0226bd9e3e3914.png"},"tF+0":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={date:new Date},n}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)},n.componentWillUnomount=function(){clearInterval(this.timerID)},n.tick=function(){this.setState({date:new Date})},n.render=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."))},e}(l.a.Component)}}]);
//# sourceMappingURL=component---src-pages-random-js-d4ac2770008d26320f16.js.map