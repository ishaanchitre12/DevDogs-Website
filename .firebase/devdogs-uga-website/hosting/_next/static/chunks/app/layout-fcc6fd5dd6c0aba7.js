(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1741:function(e,t,n){Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,5326,23)),Promise.resolve().then(n.t.bind(n,1770,23)),Promise.resolve().then(n.bind(n,62)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.bind(n,2398)),Promise.resolve().then(n.bind(n,2895)),Promise.resolve().then(n.bind(n,5637))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(5601),s=n.n(r)},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(231),s=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return o}});let r=n(9920),s=n(497),i=n(8173),a=r._(n(1241));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=i.Image},9949:function(e,t,n){"use strict";var r=n(8877);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,a){if(a!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},1448:function(e,t,n){e.exports=n(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3192:function(e,t,n){"use strict";var r=n(7437);n(6568);var s=n(1448),i=n.n(s);let a=e=>(0,r.jsx)("div",{className:"button",children:(0,r.jsx)("button",{id:e.id,type:e.type||"button",onClick:e.onClick,children:e.children})});t.Z=a,a.propTypes={id:i().string,type:i().string,onClick:i().func,children:i().node}},62:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(7437),s=n(7138),i=n(1169);n(5838);var a=n(3192),o={src:"/_next/static/media/mascotwordlight.4aa59418.png",height:750,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAX0lEQVR42mOYNGuB0Pylq8z///8vyAAE/779EP73/SczAwwsnzjVY+WUGff///6bDZRMB+Lcf99/ANk/a4AKVRhuzJnLe3X6DLX/f/5x/f/+kxeogBOIhYBY89/3nywAfKg77eKMaRwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},l=n(4688),c=n(6648),u=n(2265),d=()=>{let e=(0,i.usePathname)(),[t,n]=(0,u.useState)(!1),d=t=>"text-[1rem] px-3 no-underline ".concat(e===t?"text-UGASecondary font-semibold":"hover:text-UGASecondary");return(0,r.jsxs)("div",{className:"w-full bg-[#31304b] flex flex-nowrap justify-around items-center text-white font-semibold py-[2rem]",children:[(0,r.jsxs)("div",{className:"hidden sm:block sm:w-[300px] ",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)(c.default,{src:o,alt:"Mascot and DevDogs",className:"hidden md:block"})}),(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)(c.default,{src:l.Z,alt:"Mascot",className:"w-[100px] md:hidden md:w-[150px]"})})]}),(0,r.jsxs)("div",{className:"flex flex-nowrap justify-center items-center sm:gap-3",children:[(0,r.jsx)(s.default,{href:"/",className:d("/"),children:(0,r.jsx)("p",{className:"text-[1.2rem] sm:text-[1.7rem] transition ease-in-out delay-150 text-center p-0 m-0",children:"Home"})}),(0,r.jsx)("div",{className:"relative group flex items-center",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:(0,r.jsx)(s.default,{href:"/about",className:d("/about"),children:(0,r.jsx)("p",{className:"text-[1.2rem] sm:text-[1.7rem] transition ease-in-out delay-150 text-center p-0 m-0",children:"About"})})}),(0,r.jsx)(s.default,{href:"/about/people",className:d("/about/people"),children:(0,r.jsx)("p",{className:"text-[1.2rem] sm:text-[1.7rem] transition ease-in-out delay-150 text-center p-0 m-0",children:"Team"})}),(0,r.jsx)(s.default,{href:"/about/projects",className:d("/about/projects"),children:(0,r.jsx)("p",{className:"text-[1.2rem] sm:text-[1.7rem] transition ease-in-out delay-150 text-center p-0 m-0",children:"Projects"})}),(0,r.jsx)(s.default,{href:"/about/events",className:d("/about/events"),children:(0,r.jsx)("p",{className:"text-[1.2rem] sm:text-[1.7rem] transition ease-in-out delay-150 text-center p-0 m-0",children:"Events"})})]}),(0,r.jsx)(s.default,{target:"_blank",href:"https://discord.com/invite/MuyJ4f5xKE",className:"hidden lg:block text-lg md:text-xl rounded-full font-medium m-4 p-2 transition ease-in-out delay-150 text-white bg-[#BA0C2F] hover:bg-white hover:text-black",children:(0,r.jsx)(a.Z,{children:"Join Us!"})})]})}},6568:function(){},1770:function(){},5838:function(){},3054:function(){},2398:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/github.8f03bac0.svg",height:48,width:48,blurWidth:0,blurHeight:0}},2895:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/instagram.21058950.svg",height:48,width:48,blurWidth:0,blurHeight:0}},5637:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/linkedin.4a928285.svg",height:48,width:48,blurWidth:0,blurHeight:0}},4688:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.f4582438.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42nXOvcpBARyA8ee8b+/wLrJKVsnCJoobYNBZJFkok4VFUVJEGShHJ185DAoDpbgB2QzuwKZcAJv+BuVj8Juf4eGbVCqj8OYnFIw7ABNgUdWkjXfRSMIKf5fReHIuV+oCrAFsdv8vAI1i4d8Fx1nfkFapJh7Y80HrmgiET5Pp/KbpPQH3oSryejDUmG+Vy8tuOJKt3pWm03tdprPmZzAA5xqMMbSn0NmAVoZHsACFL3RQ7s+BNrtl00AAAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5326:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[751,230,725,231,173,971,23,744],function(){return e(e.s=1741)}),_N_E=e.O()}]);