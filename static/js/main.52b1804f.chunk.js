(this.webpackJsonpfinalproject=this.webpackJsonpfinalproject||[]).push([[0],{107:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(29),i=c.n(s),r=(c(63),c(52)),o=c(9),l=(c(64),c(65),c(53)),j=c.n(l),d=c(54),u=c.n(d),b=c(16),h=c(2),A=Object(n.createContext)(),m=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(h.jsx)(A.Provider,{value:Object(n.useReducer)(t,c),children:a})},O=function(){return Object(n.useContext)(A)},p=c(38),x=p.a.initializeApp({apiKey:"AIzaSyDGsm2n4Lq7h8xrE7WFfs7jw8eSf1L10Ac",authDomain:"e-commerce-862000.firebaseapp.com",databaseURL:"https://e-commerce-862000-default-rtdb.firebaseio.com",projectId:"e-commerce-862000",storageBucket:"e-commerce-862000.appspot.com",messagingSenderId:"652528758185",appId:"1:652528758185:web:0cde9813ea2e8ffe44e8b8"}).firestore(),f=p.a.auth();var v=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:"https://logos.textgiraffe.com/logos/logo-name/Shivani-designstyle-candy-m.png"})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{className:"header__searchInput",type:"text"}),Object(h.jsx)(j.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(b.b,{to:!a&&"/login",children:Object(h.jsxs)("div",{onClick:function(){a&&f.signOut()},className:"header__option",children:[Object(h.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(h.jsx)(b.b,{to:"/orders",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(h.jsx)(b.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(77),c(78);var g=function(e){var t=e.id,c=e.title,n=e.image,a=e.price,s=e.rating,i=O(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(h.jsx)("img",{src:n,alt:""}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:s}})},children:"Add to Basket"})]})};function S(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home_container",children:[Object(h.jsx)("img",{className:"home_image",src:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/amazon-prime-video-1593003461.jpg"}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(g,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(h.jsx)(g,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})]}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(g,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(h.jsx)(g,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}),Object(h.jsx)(g,{id:"5456386",title:"the leaklsdjfasd fonasdjf",price:12.4,rating:4,image:"data:image/jpeg;base64,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"})]}),Object(h.jsx)("div",{className:"home_row",children:Object(h.jsx)(g,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})}var N=c(11),_=(c(79),c(80),c(25)),k=c.n(_),y=c(39),T=c(20),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(y.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(T.a)(Object(T.a)({},e),{},{basket:n});case"SET_USER":return Object(T.a)(Object(T.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[]});default:return e}};var B=function(){var e=Object(N.f)(),t=O(),c=Object(o.a)(t,2),n=c[0].basket;return c[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",n.length," items): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:C(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(82);var P=function(e){var t=e.id,c=e.image,n=e.title,a=e.price,s=e.rating,i=e.hideButton,r=O(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))}),!i&&Object(h.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var w=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello, ",null===a||void 0===a?void 0:a.email]}),Object(h.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),n.map((function(e){return Object(h.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(B,{})})]})},L=(c(83),c(84),c(55)),U=c.n(L);var K=function(e){var t,c=e.order;return Object(h.jsxs)("div",{className:"order",children:[Object(h.jsx)("h2",{children:"Order"}),Object(h.jsx)("p",{children:U.a.unix(c.data.created).format("MMMM Do YYYY ,h:mma")}),Object(h.jsx)("p",{className:".order__id",children:Object(h.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(P,{item:c.id,title:c.title,image:c.image,price:c.price,rating:c.rating})})),Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h3",{className:"order__total",children:["Order Total:",e]})})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var X=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],a=(c.basket,c.user),s=(t[1],Object(n.useState)([])),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){a?x.collection("users").doc(null===a||void 0===a?void 0:a.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[a]),Object(h.jsxs)("div",{className:"orders",children:[Object(h.jsx)("h1",{children:"You Orders"}),Object(h.jsx)("div",{className:"orders__order",children:null===r||void 0===r?void 0:r.map((function(e){return Object(h.jsx)(K,{order:e})}))})]})};c(86);var I=function(){var e=Object(N.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign-in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(a,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(a,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},R=c(27),F=c.n(R),D=c(37),q=(c(88),c(24)),z=c(56),J=c.n(z);var M=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user,i=t[1],r=Object(N.f)(),l=Object(n.useState)(null),j=Object(o.a)(l,2),d=j[0],u=j[1],A=Object(n.useState)(!0),m=Object(o.a)(A,2),p=m[0],f=m[1],v=Object(n.useState)(!0),g=Object(o.a)(v,2),S=g[0],_=g[1];Object(n.useEffect)((function(){(function(){var e=Object(D.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J()({method:"post",url:"/payments/create?total=".concat(100*C(a))});case 2:t=e.sent,_(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var y=function(){var e=Object(D.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),X(!0),e.next=4,I.confirmCardPayment(S,{payment_method:{card:R.getElement(q.CardElement)}}).then((function(e){var t=e.paymentIntent;x.collection("users").doc(null===s||void 0===s?void 0:s.id).collection("orders").doc(t.uid).set({basket:a,amount:t.amount,created:t.created}),w(!0),u(null),X(!1),i({type:"EMPTY_BASKET"})}));case 4:e.sent,r.replace("/orders");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=Object(n.useState)(!1),E=Object(o.a)(T,2),B=E[0],w=E[1],L=Object(n.useState)(""),U=Object(o.a)(L,2),K=U[0],X=U[1],I=Object(q.useStripe)(),R=Object(q.useElements)();return Object(h.jsx)("div",{className:"payment",children:Object(h.jsxs)("div",{className:"payment__container",children:[Object(h.jsxs)("h1",{children:["Checkout (",Object(h.jsxs)(b.b,{to:"/checkout",children:[null===a||void 0===a?void 0:a.length,"items"]}),")"]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__titile",children:Object(h.jsx)("h3",{children:"Delivery Address"})}),Object(h.jsxs)("div",{className:"payment__address",children:[Object(h.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(h.jsx)("p",{children:"sjdkfh ksjdf"}),Object(h.jsx)("p",{children:"54654 4"})]})]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Review items and delivery"})}),Object(h.jsx)("div",{className:"payment__items",children:a.map((function(e){return Object(h.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Payment Method"})}),Object(h.jsxs)("div",{className:"payment__details",children:[Object(h.jsx)("form",{onClick:y,children:Object(h.jsx)(q.CardElement,{onChange:function(e){f(e.empty),u(e.error?e.error.message:"")}})}),Object(h.jsxs)("div",{className:"payment__priceContainer",children:[Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h3",{children:["Order Total:",e]})})},decimalScale:2,value:C(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{disabled:K||p||B,children:Object(h.jsx)("span",{children:K?Object(h.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),d&&Object(h.jsx)("div",{children:d})]})]})]})})},G=c(57);var H=function(){var e=Object(G.a)("pk_test_51JSkwcSFjVjUGeUBubvRPqKNpSPVvxJHg75YnCm57QoSc3vruhjGaUTji7XR4OoSfZQFfnnE6WFrvWM1Ejjif1G8002EaoPo0F"),t=O(),c=Object(o.a)(t,2);Object(r.a)(c[0]);var a=c[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(v,{}),Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{exact:!0,path:"/checkout",children:Object(h.jsx)(w,{})}),Object(h.jsx)(N.a,{exact:!0,path:"/payment",children:Object(h.jsx)(q.Elements,{stripe:e,children:Object(h.jsx)(M,{})})}),Object(h.jsx)(N.a,{exact:!0,path:"/login",children:Object(h.jsx)(I,{})}),Object(h.jsx)(N.a,{exact:!0,path:"/orders",children:Object(h.jsx)(X,{})}),Object(h.jsx)(N.a,{exact:!0,path:"/",children:Object(h.jsx)(S,{})})]})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(m,{initialState:{basket:[],user:null},reducer:E,children:Object(h.jsx)(H,{})}),","]}),document.getElementById("root")),Q()},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.52b1804f.chunk.js.map