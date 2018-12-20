!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=[{constant:!1,inputs:[{name:"owner",type:"address"},{name:"requiredAmount",type:"uint256"}],name:"createProject",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"uint256"},{name:"value",type:"uint256"}],name:"donate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"pay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProjectIds",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"projectStatus",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}],o="0x38c8f63f19d5387fc83cf3e31396bffc07e0748c";window.addEventListener("load",()=>{let e,t;"undefined"!=typeof web3&&(e=(t=new Web3(web3.currentProvider)).eth.contract(a).at(o)),i(e,t)});const i=(e,t)=>{const n=document.getElementById("main");let a;e.getProjectIds.call((o,i)=>{o||((a=new Array(i.toNumber()).fill(0).map((e,t)=>t)).map(t=>((e,t,n)=>{e.projectStatus.call(t,(e,t)=>{e||a({address:t[0],gatheredAmount:t[1].toNumber(),requiredAmount:t[2].toNumber(),active:t[3]})});const a=e=>{console.log(e),n.querySelector(".all_projects").innerHTML+=`<div class='project'>\n                <div style="background: url(https://ww2.kqed.org/wp-content/uploads/sites/23/2015/11/PBL-1920x1179.jpg) no-repeat;\n                            background-size: cover;\n                            height: 200px;\n                            background-position: center;">\n                </div>\n                <section class="project__info">\n                    <h1 class="project__title">Title</h1 class="project__title">\n                    <div class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>\n                    <div class="project__money_required">\n                        <span class="project__money-info">Required:</span>\n                        <span>${e.requiredAmount}</span>\n                    </div>\n                    <div class="project__money_earned">\n                        <span class="project__money-info">Earned:</span>\n                        <span>${e.gatheredAmount}</span>\n                    </div>\n                </section>\n                <div class="project__buttons">\n                    <button class="project__button">View details</button>\n                    <button class="project__button">Donate</button>\n                </div>\n            </div>`}})(e,t,n)),document.getElementById("send-btn").addEventListener("click",((e,t,n)=>{const a=t.toWei(150,"gwei");e.donate.sendTransaction(n,100,{gas:2e5,gasPrice:t.toHex(a)},(e,t)=>(e||console.log("res",t),t))}).bind(void 0,e,t,a[0])))}),document.getElementById("create-btn").addEventListener("click",((e,t,n,a)=>{const o=t.toWei(150,"gwei");console.log(n,a),e.createProject.sendTransaction(n,a,{gas:2e6,gasPrice:t.toHex(o)},(e,t)=>(e||console.log("res",t),t))}).bind(void 0,e,t,"0xa6c1429c546d05994258bba4de91042e62996262",350))}}]);