(this.webpackJsonpjson2ts=this.webpackJsonpjson2ts||[]).push([[0],{158:function(e,n,t){"use strict";t.r(n);var i,a,o,r,c,s,l,h,b,j,d=t(23),p=t(47),f=t(24),u=(t(148),t(77)),g=t(73),O=t(78),x=t(79),v=t(130),y=t(129),m=t(0),k=t(114),C=t(115),T=t(124),F=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(O.a)(this,e),this.config=void 0,this.interfaces={},this.config=Object(g.a)({prependWithI:!0,sortAlphabetically:!1,addExport:!1,useArrayGeneric:!1,optionalFields:!1,prefix:"",rootObjectName:"RootObject"},n)}return Object(x.a)(e,[{key:"convert",value:function(e){this.interfaces={};var n="type JSON = ".concat(this.unknownToTS(e),"\n\n");return n+=this.interfacesToString()}},{key:"unknownToTS",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,t=typeof e;return"object"===t&&(t=Array.isArray(e)?this.arrayToTS(e,n):this.objectToTS(e,n&&this.capitalizeFirst(n))),t}},{key:"arrayToTS",value:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=e.length?void 0:"any",a=Object(T.a)(e);try{for(a.s();!(n=a.n()).done;){var o=n.value,r=this.unknownToTS(o,this.keyToTypeName(t));if(i&&r!==i){i="any";break}i=r}}catch(c){a.e(c)}finally{a.f()}return this.config.useArrayGeneric?"Array<".concat(i,">"):"".concat(i,"[]")}},{key:"keyToTypeName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(!e||e.length<2)return e;var n=Array.prototype.slice.apply(e),t=Object(C.a)(n),i=t[0],a=t.slice(1),o=a.pop();return[i.toUpperCase()].concat(Object(k.a)(a),["s"===o?"":o]).join("")}},{key:"capitalizeFirst",value:function(e){var n=Array.prototype.slice.apply(e),t=Object(C.a)(n),i=t[0],a=t.slice(1);return[i.toUpperCase()].concat(Object(k.a)(a)).join("")}},{key:"objectToTS",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.config.rootObjectName;if(null===e)return"any";var i=this.config,a=i.prependWithI,o=i.prefix;a&&(t="I".concat(o||"").concat(t)),this.interfaces[t]||(this.interfaces[t]={});var r=this.interfaces[t];return Object.keys(e).forEach((function(t){var i=e[t],a=n.unknownToTS(i,t);r[t]&&0!==r[t].indexOf("any")||(r[t]=a)})),t}},{key:"interfacesToString",value:function(){var e=this,n=this.config,t=n.sortAlphabetically,i=n.addExport,a=n.optionalFields;return Object.keys(this.interfaces).map((function(n){var o=["".concat(i?"export ":"","interface ").concat(n," {")],r=Object.keys(e.interfaces[n]);return t&&r.sort(),r.forEach((function(t){var i=e.interfaces[n][t];o.push("  ".concat(t).concat(a?"?":"",": ").concat(i,";"))})),o.push("}\n"),o.join("\n")})).join("\n")}}]),e}(),S=t(174),A=t(172),w=t(72),I=t(173),J=t(176),N=t(175),E=t(7),z=f.b.div(i||(i=Object(d.a)(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),G=f.b.div(a||(a=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n"]))),W=f.b.div(o||(o=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  margin-bottom: 20px;\n"]))),M=f.b.div(r||(r=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 4;\n  margin-right: 20px;\n"]))),P=f.b.div(c||(c=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 25%;\n  padding-left: 0;\n"]))),R=f.b.div(s||(s=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),U=Object(f.b)(S.a)(l||(l=Object(d.a)(["\n  flex-grow: ",";\n  display: flex;\n  flex-direction: column;\n"])),(function(e){return e.flex||1})),B=Object(f.b)(A.a)(h||(h=Object(d.a)(["\n  .ui.form.ui.form & {\n    display: block;\n    flex-grow: 1;\n    resize: none;\n    font-family: monospace;\n    height: initial;\n    max-height: initial;\n    min-height: initial;\n  }\n"]))),D=f.b.div(b||(b=Object(d.a)(["\n  margin-top: 10px;\n  color: red;\n"]))),L=function(e){Object(v.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(O.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={jsonInput:"",resultOutput:"",errorMessage:"",config:{prependWithI:!0,sortAlphabetically:!1,addExport:!1,useArrayGeneric:!1,optionalFields:!1,prefix:"",rootObjectName:"RootObject"}},e.convertJsonToTs=function(n){n.preventDefault();var t=new F(e.state.config);e.setState({errorMessage:""});try{var i=JSON.parse(e.state.jsonInput),a=t.convert(i);e.setState({resultOutput:a})}catch(n){e.setState({errorMessage:n.message})}},e.onJsonInputChange=function(n){var t=n.currentTarget.value;e.setState({jsonInput:t})},e.onOptionsFieldChange=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=n.target,a=t?t.checked:i.value,o=t?t.name:i.name;o&&e.setState({config:Object(g.a)(Object(g.a)({},e.state.config),{},Object(u.a)({},o,a))})},e}return Object(x.a)(t,[{key:"render",value:function(){var e=this.state,n=e.resultOutput,t=e.errorMessage,i=e.config;return Object(E.jsxs)(z,{children:[Object(E.jsxs)(G,{children:[Object(E.jsx)("div",{children:Object(E.jsx)("h3",{children:"json => ts"})}),Object(E.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/beshanoe/json2ts",children:Object(E.jsx)(w.a,{name:"github square",color:"pink",size:"large",link:!0})})]}),Object(E.jsxs)(W,{children:[Object(E.jsxs)(M,{children:[Object(E.jsx)(U,{flex:1,children:Object(E.jsx)(B,{placeholder:"Put your JSON here",onChange:this.onJsonInputChange})}),Object(E.jsx)(I.a,{}),Object(E.jsx)(U,{flex:3,children:Object(E.jsx)(B,{placeholder:"See result here",value:n})})]}),Object(E.jsx)(P,{children:Object(E.jsx)(J.a,{children:Object(E.jsx)(R,{children:Object(E.jsxs)(S.a,{onSubmit:this.convertJsonToTs,children:[Object(E.jsx)(S.a.Checkbox,{name:"prependWithI",checked:i.prependWithI,label:"Prepend with I",onChange:this.onOptionsFieldChange,toggle:!0}),Object(E.jsx)(S.a.Checkbox,{name:"sortAlphabetically",checked:i.sortAlphabetically,label:"Sort Aphabetically",onChange:this.onOptionsFieldChange,toggle:!0}),Object(E.jsx)(S.a.Checkbox,{name:"addExport",checked:i.addExport,label:"Add export statement",onChange:this.onOptionsFieldChange,toggle:!0}),Object(E.jsx)(S.a.Checkbox,{name:"useArrayGeneric",checked:i.useArrayGeneric,label:"Use Array<> notation",onChange:this.onOptionsFieldChange,toggle:!0}),Object(E.jsx)(S.a.Checkbox,{name:"optionalFields",checked:i.optionalFields,label:"Optional fields",onChange:this.onOptionsFieldChange,toggle:!0}),Object(E.jsx)(I.a,{}),Object(E.jsx)(S.a.Field,{children:Object(E.jsx)("input",{name:"prefix",value:i.prefix,onChange:this.onOptionsFieldChange,placeholder:"Interface prefix"})}),Object(E.jsx)(S.a.Field,{children:Object(E.jsx)("input",{name:"rootObjectName",value:i.rootObjectName,onChange:this.onOptionsFieldChange,placeholder:"Root object name"})}),Object(E.jsx)(I.a,{}),Object(E.jsx)(N.a,{onClick:this.convertJsonToTs,children:"Convert"}),t&&Object(E.jsx)(D,{children:t})]})})})})]})]})}}]),t}(m.Component),q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,177)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),o(e),r(e)}))},_=Object(f.a)(j||(j=Object(d.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  body, html {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n  }\n\n  #root {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #fbfbfb;\n  }\n"])));p.render(Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(_,{}),Object(E.jsx)(L,{})]}),document.getElementById("root")),q()}},[[158,1,2]]]);
//# sourceMappingURL=main.f29316c5.chunk.js.map