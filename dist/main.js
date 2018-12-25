!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";t.a={myABI:[{constant:!1,inputs:[{name:"owner",type:"address"},{name:"requiredAmount",type:"uint256"}],name:"createProject",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"uint256"},{name:"value",type:"uint256"}],name:"donate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"pay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProjectIds",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"projectStatus",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}],myContractAddress:"0x38c8f63f19d5387fc83cf3e31396bffc07e0748c"}},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return r});const a=e=>new Promise((t,n)=>e.getProjectIds.call((e,a)=>e?n(e):t(a.toNumber()))),o=(e,t)=>new Promise((n,a)=>e.projectStatus.call(t,(e,o)=>e?a(e):n({address:o[0],gatheredAmount:o[1].toNumber(),requiredAmount:o[2].toNumber(),active:o[3],projectId:t}))),i=(e,t,n,a)=>{const o=t.toWei(150,"gwei");e.createProject.sendTransaction(n,a,{gas:2e6,gasPrice:t.toHex(o)},(e,t)=>(e||console.log("res",t),t))},r=(e,t,n,a)=>{const{address:o,gatheredAmount:i,requiredAmount:r,active:s,projectId:u}=n;let c=a.querySelector(".all-projects");const d=document.createElement("button");d.innerHTML="Donate",d.setAttribute("class","project__button"),d.addEventListener("click",((e,t,n)=>{const a=t.toWei(150,"gwei");e.donate.sendTransaction(n,100,{gas:2e5,gasPrice:t.toHex(a)},(e,t)=>(e||console.log("res",t),t))}).bind(void 0,e,t,u));const p=document.createElement("div");p.setAttribute("class","project__buttons"),p.innerHTML='<button class="project__button">View more</button>',p.appendChild(d);const l=document.createElement("div");if(l.setAttribute("class","project"),l.innerHTML=`\n                <div style="background: url(https://ww2.kqed.org/wp-content/uploads/sites/23/2015/11/PBL-1920x1179.jpg) no-repeat;\n                            background-size: cover;\n                            height: 200px;\n                            background-position: center;">\n                </div>\n                <h1 class="project_earned">MONEY EARNED</h1>\n                <section class="project__info">\n                    <h1 class="project__title">Title</h1 class="project__title">\n                    <div class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>\n                    <div class="project__money_required">\n                        <span class="project__money-info">Required:</span>\n                        <span>${n.requiredAmount}</span>\n                    </div>\n                    <div class="project__money_earned">\n                        <span class="project__money-info">Earned:</span>\n                        <span>${n.gatheredAmount}</span>\n                    </div>\n                </section>`,s&&l.appendChild(p),c.appendChild(l),!s){let e=document.querySelectorAll(".project_earned");e[e.length-1].style.visibility="initial";let t=document.querySelectorAll(".project__info");t[t.length-1].style.opacity=.1}}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=()=>{document.body.innerHTML=o()+document.body.innerHTML},o=()=>'<header class="kickstarter-header">\n                <a href="index.html" class="kickstarter-header__title"><h1 >Kickstarter</h1></a>\n                <button id="add-btn" class="project__button project__button_add">Create project</button>\n            </header>'},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),i=n(2);window.addEventListener("load",()=>{let e,t;Object(i.a)(),"undefined"!=typeof web3&&(e=(t=new Web3(web3.currentProvider)).eth.contract(a.a.myABI).at(a.a.myContractAddress)),r(e,t)});const r=async(e,t)=>{const n=document.getElementById("main"),a=await Object(o.b)(e),i=new Array(a).fill(0).map((e,t)=>t);(await Promise.all(i.map(t=>Object(o.c)(e,t)))).map(a=>Object(o.d)(e,t,a,n)),document.getElementById("add-btn").addEventListener("click",()=>window.location.href="project.html")}}]);