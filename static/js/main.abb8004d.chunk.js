(this["webpackJsonpreact-food-order-app"]=this["webpackJsonpreact-food-order-app"]||[]).push([[0],[,,function(t,e,a){t.exports={container:"Meal_container__2mac2",animation:"Meal_animation__3ocwM",card:"Meal_card__3P_Vr",content:"Meal_content__3g67P",imageContainer:"Meal_imageContainer__XSe4r",image:"Meal_image__kQ2dZ",h3:"Meal_h3__24if7",description:"Meal_description__1O-Hn",price:"Meal_price__cniAi",addToCartContainer:"Meal_addToCartContainer__2BQYr",addToCart:"Meal_addToCart__C3p3L",addToCartBG:"Meal_addToCartBG__1Fnqk"}},function(t,e,a){t.exports={cartContainer:"Cart_cartContainer__2so4U",cart:"Cart_cart__nlQWb",emptyCart:"Cart_emptyCart__38LU2",cartItemShow:"Cart_cartItemShow__3z_jc",imageContainer:"Cart_imageContainer__3rdHy",cartImageShow:"Cart_cartImageShow__pY6Cn",content:"Cart_content__2BxHS",cartContentShow:"Cart_cartContentShow__1oItF",actions:"Cart_actions__PRuFL",plus:"Cart_plus__2Aqeh",minus:"Cart_minus__3c0SQ",remove:"Cart_remove__3xMo_",total:"Cart_total__545zs"}},,,,,,function(t,e,a){t.exports={background:"AnimatedBackground_background__26ipF",wave1:"AnimatedBackground_wave1__2k26w",wave1Animation:"AnimatedBackground_wave1Animation__342Fn",wave2:"AnimatedBackground_wave2__2Vibg"}},function(t,e,a){t.exports={modal:"AddToCartModal_modal__1nXpH",form:"AddToCartModal_form__1oRHi",button:"AddToCartModal_button__1VENo"}},,,function(t,e,a){t.exports={container:"App_container__1K1no"}},function(t,e,a){t.exports={card:"Card_card__1eKfX"}},function(t,e,a){t.exports={meals:"Meals_meals__1kjOm"}},function(t,e,a){t.exports={backdrop:"Backdrop_backdrop__1C5DZ"}},function(t,e,a){t.exports={modal:"ModalOverlay_modal__sgtrw"}},,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n,r=a(1),i=a.n(r),c=a(6),o=a.n(c),s=(a(22),a(13)),l=a.n(s),d=a(9),u=a.n(d),m=a(0),j=function(){var t=Object(r.useRef)(),e=Object(r.useRef)(),a=function(a){var n=a.clientX/window.innerWidth*100,r=a.clientY/window.innerHeight*100;t.current.setAttribute("d","M0,100 C150,".concat(500*r/100," ").concat(500*n/100,",0 500,100 L500,00 L0,0 Z")),e.current.setAttribute("d","M0,100 C150,".concat(500*r/100," ").concat(500*n/100,",0 500,100 L500,00 L0,0 Z"))};return Object(r.useEffect)((function(){window.addEventListener("mousemove",a)}),[]),Object(m.jsxs)("div",{className:u.a.background,children:[Object(m.jsx)("svg",{className:u.a.wave1,viewBox:"0 0 500 600",preserveAspectRatio:"xMinYMin meet",children:Object(m.jsx)("path",{ref:t,d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"})}),Object(m.jsxs)("svg",{viewBox:"0 0 500 500",className:u.a.wave2,preserveAspectRatio:"xMinYMin meet",children:[Object(m.jsxs)("linearGradient",{id:"linear-gradient",children:[Object(m.jsx)("stop",{offset:"0%",stopColor:"#f4b673"}),Object(m.jsx)("stop",{offset:"100%",stopColor:"#cdbff4"})]}),Object(m.jsx)("path",{ref:e,d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z",fill:"url(#linear-gradient)"})]})]})},p=a(14),b=a.n(p),f=function(t){var e=t.children,a=t.className;return Object(m.jsx)("div",{className:b.a.card+" "+a,children:e})},O=a(3),v=a.n(O),_=["title","titleId"];function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function x(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function g(t,e){var a=t.title,i=t.titleId,c=x(t,_);return r.createElement("svg",h({viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},c),a?r.createElement("title",{id:i},a):null,n||(n=r.createElement("path",{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"})))}var C,w=r.forwardRef(g),y=(a.p,["title","titleId"]);function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function N(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function A(t,e){var a=t.title,n=t.titleId,i=N(t,y);return r.createElement("svg",M({viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,C||(C=r.createElement("path",{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-224c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h224c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"})))}var I,S=r.forwardRef(A),E=(a.p,["title","titleId"]);function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function k(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function R(t,e){var a=t.title,n=t.titleId,i=k(t,E);return r.createElement("svg",T({viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,I||(I=r.createElement("path",{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm94.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"})))}var B=r.forwardRef(R),F=(a.p,a(5)),q=a(4),L=a(11),P={items:[{id:1,amount:1}],totalAmount:0,totalPrice:0},D="ADD_TO_CART",z="SUBTRACT_FROM_CART",U="REMOVE_FROM_CART",Y=function(t){var e=0;return t.forEach((function(t){e+=t.amount})),e},H=function(t,e){switch(e.type){case"ADD_TO_CART":var a=e.payload,n=a.itemId,r=a.amount,i=Object(L.a)(t.items),c=i.findIndex((function(t){return t.id===n}));if(c>-1){var o=i[c].amount;i[c]=Object(q.a)(Object(q.a)({},i[c]),{},{amount:o+r})}else i.push({id:n,amount:r});var s=Y(i);return Object(q.a)(Object(q.a)({},t),{},{items:Object(L.a)(i),totalAmount:s});case"SUBTRACT_FROM_CART":var l=e.payload,d=l.itemId,u=l.amount,m=Object(L.a)(t.items),j=m.findIndex((function(t){return t.id===d}));if(j>-1){var p=m[j].amount;m[j]=Object(q.a)(Object(q.a)({},m[j]),{},{amount:p-u}),m[j].amount<=0&&(m=m.filter((function(t){return t.id!==d})))}var b=Y(m);return Object(q.a)(Object(q.a)({},t),{},{items:m,totalAmount:b});case"REMOVE_FROM_CART":var f=e.payload.itemId,O=t.items.filter((function(t){return t.id!==f})),v=Y(O);return Object(q.a)(Object(q.a)({},t),{},{items:O,totalAmount:v});default:throw new Error}},X=i.a.createContext({cartState:P,addToCart:function(){},substractFromCart:function(){},removeFromCart:function(){}}),Z=function(t){var e=t.children,a=Object(r.useReducer)(H,P),n=Object(F.a)(a,2),i=n[0],c=n[1];return Object(m.jsx)(X.Provider,{value:{cartState:i,addToCart:function(t){var e=t.itemId,a=t.amount;c({type:D,payload:{itemId:e,amount:a}})},substractFromCart:function(t){var e=t.itemId,a=t.amount;c({type:z,payload:{itemId:e,amount:a}})},removeFromCart:function(t){var e=t.itemId;c({type:U,payload:{itemId:e}})}},children:e})},$=X,V=function(t){var e=t.meals,a=Object(r.useContext)($);return Object(m.jsx)("div",{className:v.a.cartContainer,children:Object(m.jsxs)(f,{className:v.a.cart,children:[a.cartState.items.length<=0&&Object(m.jsx)("div",{className:v.a.emptyCart,children:Object(m.jsx)("span",{className:v.a.error,children:"Cart is empty. Add something!"})}),a.cartState.items.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{children:a.cartState.items.map((function(t){var n=e.find((function(e){return t.id===e.id}));return Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{className:v.a.imageContainer,children:Object(m.jsx)("img",{src:n.img,alt:n.title})}),Object(m.jsxs)("div",{className:v.a.content,children:[Object(m.jsx)("strong",{children:n.title}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("span",{children:["$",Math.round(n.price*t.amount*100)/100]})," ","(",t.amount," x $",n.price,")"]})]}),Object(m.jsxs)("div",{className:v.a.actions,children:[Object(m.jsx)("button",{className:v.a.plus,onClick:function(){return a.addToCart({itemId:t.id,amount:1})},children:Object(m.jsx)(w,{})}),Object(m.jsx)("button",{className:v.a.minus,onClick:function(){return a.substractFromCart({itemId:t.id,amount:1})},children:Object(m.jsx)(S,{})}),Object(m.jsx)("button",{className:v.a.remove,onClick:function(){return a.removeFromCart({itemId:t.id})},children:Object(m.jsx)(B,{})})]})]},t.id)}))}),Object(m.jsxs)("div",{className:v.a.total,children:["Total: $",function(){var t=0;return a.cartState.items.forEach((function(a){var n=e.find((function(t){return a.id===t.id}));t+=n.price*a.amount,t=Math.round(100*t)/100})),t}()]})]})]})})},G=a(15),Q=a.n(G),J=a(2),K=a.n(J),W=a(10),tt=a.n(W),et=a(16),at=a.n(et),nt=function(t){var e=t.onClick;return Object(m.jsx)("div",{onClick:e,className:at.a.backdrop})},rt=a(17),it=a.n(rt),ct=function(t){var e=t.children,a=t.className;return Object(m.jsx)(f,{className:it.a.modal+" "+a,children:e})},ot=function(t){var e=t.meal,a=t.onClose,n=Object(r.useContext)($),i=Object(r.useState)(1),c=Object(F.a)(i,2),s=c[0],l=c[1],d=Object(r.useState)(0),u=Object(F.a)(d,2),j=u[0],p=u[1];Object(r.useEffect)((function(){var t=Math.round(e.price*+s*100)/100;t<0&&(t=0),p(t)}),[s,e]);var b=function(t){t.preventDefault(),+s>0&&(n.addToCart({itemId:e.id,amount:+s}),a())};return Object(m.jsxs)(m.Fragment,{children:[o.a.createPortal(Object(m.jsx)(nt,{onClick:a}),document.getElementById("backdrop-root")),o.a.createPortal(Object(m.jsxs)(ct,{className:tt.a.modal,children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsxs)("form",{className:tt.a.form,onSubmit:b,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"number",placeholder:"amount",value:s,onChange:function(t){var e=t.target.value;l(e)}})," ","x $",e.price," = ",Object(m.jsxs)("strong",{children:["$",j]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:tt.a.button,onClick:b,onSubmit:b,disabled:+s<=0,type:"submit",children:"Add to cart"})})]})]}),document.getElementById("overlay-root"))]})},st=function(t){var e=t.meal,a=Object(r.useState)(!1),n=Object(F.a)(a,2),i=n[0],c=n[1],o=Object(r.useRef)(),s=Object(r.useRef)(),l=function(){s.current.style.transition="0.5s",s.current.style.transform=["rotateY(0deg)","rotateX(0deg)"].join(" ")};return Object(m.jsxs)("div",{ref:o,className:K.a.container,onMouseMove:function(t){var e=o.current.getBoundingClientRect(),a=t.nativeEvent.x,n=(t.nativeEvent.y-e.height/2)*(20/e.height),r=["rotateY("+-(a-e.width/2)*(20/e.width)+"deg)","rotateX("+n+"deg)"];s.current.style.transition="0s",s.current.style.transform=r.join(" ")},onMouseOut:l,children:[i&&Object(m.jsx)(ot,{item:e.id,meal:e,onClose:function(){l(),c(!1)}}),Object(m.jsx)("div",{ref:s,className:K.a.animation,children:Object(m.jsxs)(f,{className:K.a.card,children:[Object(m.jsxs)("div",{className:K.a.content,children:[Object(m.jsx)("div",{className:K.a.imageContainer,children:Object(m.jsx)("img",{className:K.a.image,src:e.img,alt:e.title})}),Object(m.jsx)("h3",{className:K.a.h3,children:e.title}),Object(m.jsx)("div",{className:K.a.description,children:e.description}),Object(m.jsxs)("span",{className:K.a.price,children:["$",e.price]})]}),Object(m.jsxs)("div",{className:K.a.addToCartContainer,children:[Object(m.jsxs)("div",{onClick:function(){c(!0),l()},className:K.a.addToCart,children:[Object(m.jsx)("span",{children:"+"}),Object(m.jsx)("span",{children:"Add to Cart"})]}),Object(m.jsx)("div",{className:K.a.addToCartBG})]})]})})]})},lt=function(t){var e=t.meals;return Object(m.jsx)("div",{className:Q.a.meals,children:e.map((function(t){return Object(m.jsx)(st,{meal:t},t.id)}))})},dt=[{id:1,title:"Burger with pork",price:5.4,img:"images/burger.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:2,title:"Fruit Salad Alanta",price:2,img:"images/salad.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:3,title:"Soup",price:3.1,img:"images/soup.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:4,title:"Sushi",price:3.7,img:"images/sushi.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}];var ut=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{}),Object(m.jsxs)("div",{className:l.a.container,children:[Object(m.jsx)(lt,{meals:dt}),Object(m.jsx)(V,{meals:dt})]})]})},mt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Z,{children:Object(m.jsx)(ut,{})})}),document.getElementById("root")),mt()}],[[24,1,2]]]);
//# sourceMappingURL=main.abb8004d.chunk.js.map