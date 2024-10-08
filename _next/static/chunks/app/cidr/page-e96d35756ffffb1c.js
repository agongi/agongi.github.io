(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{5010:function(e,n,t){Promise.resolve().then(t.bind(t,6371))},6371:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(7811),s=t(7581),d=t(5339),l=t(8904);function i(){let[e,n]=(0,s.useState)(l.v6),[t,i]=(0,s.useState)(l.v6),[c,h]=(0,s.useState)(null);return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"CIDR Calculator"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter CIDR (e.g,. 1.0.0.14/12)",value:e,onChange:e=>n(e.target.value)}),(0,r.jsx)("button",{onClick:()=>{let n=function(e){try{return new d.Z(e)}catch(e){return null}}(e);h(n),i(n.start())},children:"Calculate"}),c&&(0,r.jsxs)("div",{style:{marginTop:"20px"},children:[(0,r.jsx)("h2",{children:"CIDR Result"}),(0,r.jsx)("table",{style:{width:"100%",backgroundColor:"#f0f0f0"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Input IP"})}),(0,r.jsx)("td",{children:c.cidr}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"CIDR Range"})}),(0,r.jsx)("td",{style:{color:"red"},children:c.start()+l.fG.SPACE_HYPHEN_SPACE+c.end()})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Input IP (Long)"})}),(0,r.jsx)("td",{children:c.address.bigInteger()[0]}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"CIDR Range (Long)"})}),(0,r.jsx)("td",{children:c.start({type:"bigInteger"})+l.fG.SPACE_HYPHEN_SPACE+c.end({type:"bigInteger"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Input IP (Hex)"})}),(0,r.jsx)("td",{children:c.address.toHex()}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"CIDR Range (Hex)"})}),(0,r.jsx)("td",{children:c.addressStart.toHex()+l.fG.SPACE_HYPHEN_SPACE+c.addressEnd.toHex()})]})]})})]}),c&&(0,r.jsxs)("div",{style:{marginTop:"20px"},children:[(0,r.jsx)("h2",{children:"CIDR Range"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter IP",value:t,onChange:e=>i(e.target.value)}),(0,r.jsxs)("p",{children:["The IP address ",t," is",l.fG.SPACE,c.contains(t)?(0,r.jsx)("span",{style:{color:"green"},children:"inside"}):(0,r.jsx)("span",{style:{color:"red"},children:"outside"})," of the range"]})]})]})}},8904:function(e,n,t){"use strict";t.d(n,{LE:function(){return s},Nu:function(){return l},fG:function(){return r},v6:function(){return d}});let r={COLON:":",SEMICOLON:";",COMMA:",",HYPHEN:"-",SPACE_HYPHEN_SPACE:" - ",UNDERSCORE:"_",SPACE:" ",PIPE:"|",EQUALS:"=",AMPERSAND:"&",EXCLAMATION_MARK:"!",QUESTION_MARK:"?",OPEN_PARENTHESIS:"(",CLOSE_PARENTHESIS:")",OPEN_BRACE:"{",CLOSE_BRACE:"}",NEW_LINE:"\n"},s="N/A",d="",l={}}},function(e){e.O(0,[339,632,375,744],function(){return e(e.s=5010)}),_N_E=e.O()}]);
//# sourceMappingURL=page-e96d35756ffffb1c.js.map