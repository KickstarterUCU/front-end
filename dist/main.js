!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=[{constant:!1,inputs:[{name:"to",type:"uint256"},{name:"value",type:"uint256"}],name:"donate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"pay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"id",type:"uint256"},{indexed:!1,name:"_value",type:"uint256"}],name:"ProjectUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"projectStatus",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],o="0xf168943410961cad0daa0ab47e05c9ccf2b00165",r=1;window.addEventListener("load",()=>{let e,t;"undefined"!=typeof web3&&(e=(t=new Web3(web3.currentProvider)).eth.contract(a).at(o)),u(e,t)});const u=(e,t)=>{document.getElementById("send-btn").addEventListener("click",((e,t)=>{const n=t.toWei(150,"gwei");e.pay.sendTransaction("0x6e9b930326daf218db40a283e20fd03ff9558543",200,{gas:2e5,gasPrice:t.toHex(n)},(e,t)=>(e||console.log("res",t),t))}).bind(void 0,e,t)),document.getElementById("check-btn").addEventListener("click",((e,t,n)=>{e.projectStatus.call(t,(e,t)=>{e||a({address:t[0],gatheredAmount:t[1].toNumber(),requiredAmount:t[2].toNumber()})});const a=e=>{console.log(e),console.log(n),n.querySelector(".all_projects").innerHTML="<div class='project'><h2 class='project__owner'>"+e.address+"</h2><img class='project__img' src='https://cdn-images-1.medium.com/max/1131/1*9Bz1AgYPjC5snJb4395rGw.jpeg'><p class='project__gathered'>Gathered amount: "+e.gatheredAmount+"</p><p class='project__required'>Required amount: "+e.requiredAmount+"</p></div>"}}).bind(void 0,e,r,document.getElementById("main")))}}]);