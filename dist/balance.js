!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";e.a={myABI:[{constant:!1,inputs:[{name:"owner",type:"address"},{name:"requiredAmount",type:"uint256"}],name:"createProject",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"uint256"},{name:"value",type:"uint256"}],name:"donate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"pay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProjectIds",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"projectStatus",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}],myContractAddress:"0x38c8f63f19d5387fc83cf3e31396bffc07e0748c"}},,function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a=()=>{document.body.innerHTML=o()+document.body.innerHTML},o=()=>'<header class="kickstarter-header">\n                <a href="index.html" class="kickstarter-header__title"><h1 >Kickstarter</h1></a>\n                <button id="add-btn" class="project__button project__button_add">Create project</button>\n            </header>'},,,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(2);const u=document.getElementById("address"),r=document.getElementById("balance");let i,s;window.addEventListener("load",()=>{Object(o.a)(),"undefined"!=typeof web3&&(s=new Web3(web3.currentProvider),i=s.eth.contract(a.a.myABI).at(a.a.myContractAddress))});const p=async(t,e)=>{const n=await((t,e)=>new Promise((n,a)=>t.balanceOf.call(e,(t,e)=>t?a(t):n(e.toNumber()))))(t,e.value);r.innerHTML=n,console.log(n)};document.body.addEventListener("keypress",t=>{13===t.charCode&&p.bind(void 0,i,u)()})}]);