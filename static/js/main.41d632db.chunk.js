(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(22);var s=n(1),i=n(2),l=n(4),u=n(3),h=n(7),b=function(e){var t=e.name,n=e.email,a=e.website;return r.a.createElement("div",{className:"tc grow bg-light-green dib br3 pa3 ma2 bw2 shadow-5"},r.a.createElement("img",{alt:"",srcSet:"https://robohash.org/".concat(a,"?size=150x150&set=set2,\n                                 https://robohash.org/").concat(a,"?size=150x150&set=set2,\n                                 https://robohash.org/").concat(a,"?size=150x150&set=set2"),src:"https://robohash.org/".concat(a,"?size=150x150&set=set2")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(b,{key:n,name:t[n].name,email:t[n].email,website:t[n].website})})))},m=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("label",null,"Search box",r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},p=(n(28),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. Something went wrong!"):this.props.children}}]),n}(r.a.Component)),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"Robofriends"))}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobot()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("h1",{className:"tc",style:{fontFamily:"SEGA LOGO FONT"}},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(g,null),r.a.createElement(m,{searchChange:n}),r.a.createElement(E,null,r.a.createElement(p,null,r.a.createElement(d,{robots:c}))))}}]),n}(r.a.Component),O=Object(h.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobot:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(f),v=n(5),S={searchField:""},y={robots:[],isPending:!1,error:""},R=n(14),j=n(15),w=Object(R.createLogger)(),C=Object(v.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(v.d)(C,Object(v.a)(j.a,w));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:_},r.a.createElement(O,null))),document.getElementById("root")),console.log("In register sw...")}},[[16,1,2]]]);
//# sourceMappingURL=main.41d632db.chunk.js.map