(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/2.7bfd5266.png"},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Logo.ac5e4a14.png"},,function(e,t,a){e.exports=a.p+"static/media/2.729f7124.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.66de6cac.jpg"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Adverts.5315c584.jpg"},function(e,t,a){e.exports=a.p+"static/media/Adverts2.68c975ae.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.bcff8131.jpg"},,,function(e,t,a){e.exports=a(112)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),i=(a(59),a(5)),o=a.n(i),s=a(11),m=a(13),u=a(12),p=a(14),d=a(15),E=a(4),h=a(17),g=a(30),v=a(2),f=a.n(v);a(61),a(62),a(63);f.a.initializeApp({apiKey:"AIzaSyA6tvXiZk2Fr8QVJlv2SsT2GgcWxNKte-Q",authDomain:"geetico-529e9.firebaseapp.com",databaseURL:"https://geetico-529e9.firebaseio.com",projectId:"geetico-529e9",storageBucket:"geetico-529e9.appspot.com",messagingSenderId:"417014414716",appId:"1:417014414716:web:8c5668633c9409d0f3f8f9",measurementId:"G-8KB4MLXN7N"});f.a.storage();var b=f.a.auth(),y=f.a.firestore(),N=new f.a.auth.GoogleAuthProvider;N.setCustomParameters({prompt:"select_account"});var C=function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,r,c,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=y.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,l=t.photoURL,i=new Date,e.prev=9,e.next=12,n.set(Object(g.a)({displayName:r,email:c,createdAt:i,photoURL:l},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y.doc("products/TopSellers"),e.prev=1,e.next=4,a.set({ProductItems:t});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error creating user",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),O=a(19),j=Object(n.createContext)();function k(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(O.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)([]),p=Object(O.a)(u,2),d=p[0],E=p[1],h=Object(n.useState)(""),g=Object(O.a)(h,2),v={user:{get:c,set:l},products:{get:s,set:m},cart:{get:d,set:E},total:{get:g[0],set:g[1]}};return r.a.createElement(j.Provider,{value:v},e.children)}a(65),a(66);var w=a(9),x=a.n(w),P=a(49),B=a.n(P),I=a(50),L=a.n(I);a(67);function D(){return r.a.createElement("div",{className:"advertBanner"},r.a.createElement("img",{src:B.a,alt:"advert"}),r.a.createElement("img",{src:L.a,alt:"advert"}))}var F=a(33),T=a.n(F),A=(a(83),a(46),a(47),a(51)),G=a.n(A),W=a(37),q=a.n(W),R=a(38),U=a.n(R);function M(){var e={dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3};return r.a.createElement("div",{className:"heroWrapper"},r.a.createElement("div",null,r.a.createElement(T.a,e,r.a.createElement("img",{src:G.a,alt:"slider"}),r.a.createElement("img",{src:q.a,alt:"slider"}),r.a.createElement("img",{src:U.a,alt:"slider"}),r.a.createElement("img",{src:q.a,alt:"slider"}),r.a.createElement("img",{src:U.a,alt:"slider"}))))}a(84),a(85);function H(e){var t=e.image,a=e.price,n=e.item;return r.a.createElement("div",null,r.a.createElement("div",{className:"publicItem"},r.a.createElement("img",{src:t,alt:"single item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("h4",null,n),r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("p",null,"Buy")))))}function V(e){var t=e.pepsi,a=e.category,n={dots:!1,infinite:!0,speed:500,slidesToShow:7,slidesToScroll:1};return r.a.createElement("div",{className:"categorySlider"},r.a.createElement("div",{className:"sliderContainer"},r.a.createElement("h2",null,a),r.a.createElement(T.a,n,r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(H,{image:t,price:200,item:"Pepsi"}),r.a.createElement("div",{className:"spacer"}))),r.a.createElement("div",{className:"hspacer"}))}var Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"promotions"},r.a.createElement("p",null,"Welcome to Geetico some lorem ipsum generic text")),r.a.createElement(M,null),r.a.createElement("div",{className:"categories"},r.a.createElement("div",null,r.a.createElement(E.b,{to:"/Shop/TopSellers"},r.a.createElement("h4",null,"Top Sellers")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"New Arrivals")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Essentials")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Home"))),r.a.createElement("div",null,r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Office")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Ingredients")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Everyday Lifestyle")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Tools & Equipments"))),r.a.createElement("div",null,r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Designed ")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Crafted")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Fashion ")),r.a.createElement(E.b,{to:"/Shop"},r.a.createElement("h4",null,"Wellness"))))),r.a.createElement("div",null,r.a.createElement(V,{pepsi:x.a,category:"Top Sellers"}),r.a.createElement(V,{pepsi:x.a,category:"New Arrivals"}),r.a.createElement(V,{pepsi:x.a,category:"Office"}),r.a.createElement(V,{pepsi:x.a,category:"Fashion"}),r.a.createElement("div",{className:"hiddenSlider"},"categories like in Current Geetico")),r.a.createElement(D,null))}}]),a}(n.Component),z=a(34);a(97),a(98);function J(e){var t=e.content,a=e.type,n=e.onClick;switch(e.Buttontype){case"primary":return r.a.createElement("button",{type:a,className:" btn primary",onClick:n},t);case"auth":return r.a.createElement("button",{className:"btn auth",type:a,onClick:n},t);case"action":return r.a.createElement("button",{className:"btn action",type:a,onClick:n},t);default:return r.a.createElement("button",{type:a,onClick:n},t)}}a(99),a(100);function K(e){var t=e.cartItems;return r.a.createElement("div",null,t.map((function(e){var t=e.Name,a=e.quantity,n=e.Price;e.id,e.photoURL;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:x.a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"price"},a," X ",n)))})))}function Q(e){e.toggleCart;var t=Object(n.useContext)(j).cart,a=t.get.length,c=Object(h.f)();return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},a?r.a.createElement(K,{cartItems:t.get}):r.a.createElement("p",null,"empty Cart")),r.a.createElement(J,{content:"GO TO CHECKOUT",onClick:function(){c.push("/Checkout")}}))}a(101);var X=a(35),Z=a.n(X);function $(){return r.a.createElement("div",{className:"logoContainer"},r.a.createElement("img",{src:Z.a,alt:"Geetico Logo",className:"logo-Img"}),r.a.createElement("span",{className:"logo-text"},"Geetico"))}a(102);var _=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.handleChange,n=e.value;return r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{type:"search",placeholder:"Search Product",value:n,onChange:a}),r.a.createElement("button",{type:"submit"},"Search")))}}]),a}(n.Component);function ee(e){var t=e.toggle,a=e.Cart,c=Object(n.useContext)(j),l=c.user,i=c.cart,m=Object(h.f)(),u=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(z.auth)().signOut(),l.set(""),l.get||m.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo",onClick:function(){return m.push("/")}},r.a.createElement($,null)),r.a.createElement("div",{className:"actions"},a,r.a.createElement("span",{className:"cartCounter"},i.get.length?i.get.length:null),t?null:r.a.createElement(Q,null),r.a.createElement("div",{className:"buttonWrapper"},l.get?r.a.createElement(J,{Buttontype:"primary",content:"SignOut",onClick:u}):r.a.createElement(J,{Buttontype:"primary",content:"Login",onClick:function(){return m.push("/Login")}}))))}a(103);function te(){var e=Object(n.useContext)(j).user,t=Object(h.f)(),a=Object(n.useState)(""),c=Object(O.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(""),u=Object(O.a)(m,2),p=u[0],d=u[1],E=function(){var a=Object(s.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,Object(z.auth)().signInWithEmailAndPassword(l,p);case 3:e.get&&t.push("/Dashboard");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"loginContainer"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"first"},r.a.createElement("h2",null,"Login")),r.a.createElement("div",{className:"second"},r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{type:"email",placeholder:"Enter your Email",onChange:function(e){i(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}}))),r.a.createElement("div",{className:"third"},r.a.createElement(J,{Buttontype:"auth",type:"submit",content:"Login"}),r.a.createElement(J,{Buttontype:"auth",content:"Login with Google ",onClick:function(){b.signInWithPopup(N)}}),r.a.createElement("br",null))),r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:"first"},r.a.createElement("h2",null,"Create your Geetico Account")),r.a.createElement("div",{className:"second"},r.a.createElement("p",null,"You can register either using your e-mail address",r.a.createElement("br",null),"You can register either using your e-mail address",r.a.createElement("br",null),"You can register either using your e-mail address",r.a.createElement("br",null),"or through your Google account.")),r.a.createElement("div",{className:"third"},r.a.createElement(J,{Buttontype:"auth",content:"Register",onClick:function(){return t.push("/Register")}}),r.a.createElement(J,{Buttontype:"auth",content:"Register with Google "})))))}a(104),a(105);function ae(){return r.a.createElement("div",{className:"mailingList"},r.a.createElement("img",{src:Z.a,alt:"",className:"Logo"}),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("p",null,"NEW TO GEETICO?"),r.a.createElement("p",null,"Subscribe to our newsletter to get updates on our latest offers!")),r.a.createElement("form",null,r.a.createElement("input",{type:"email",name:"email",placeholder:"email address",required:!0}),r.a.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe"}))))}function ne(){return r.a.createElement("div",{className:"footer"},r.a.createElement(ae,null),r.a.createElement("div",{className:"footerBar"},r.a.createElement("div",null,r.a.createElement("h2",null,"Geetico"),r.a.createElement("p",null,"Your Online Superstore for grocery, packaged food items and every of your household shopping. We help you save the stress from the whole Lagos traffic, also save you the time to shop and most importantly save money by giving you the best deal because all of our products are offered to you at wholesale price. You can even make custom orders because our mission is to go the extra mile for you!!! Shop Geetico\ud83d\udecd !!!")),r.a.createElement("div",null,r.a.createElement("h2",null,"Category"),"Beer, Wine and Spirit",r.a.createElement("br",null),"Beverages",r.a.createElement("br",null),"Drinks",r.a.createElement("br",null),"Cooking, Spices and Baking Ingredients",r.a.createElement("br",null),"Food Cupboard and Breakfast Food",r.a.createElement("br",null),"Biscuits, Candy and Chocolate",r.a.createElement("br",null),"Jams, Canned and Packaged Condiments",r.a.createElement("br",null),"Household Supplies"),r.a.createElement("div",null,r.a.createElement("h2",null,"Social"),"Instagram",r.a.createElement("br",null),"Facebook",r.a.createElement("br",null),"Twitter"),r.a.createElement("div",null,r.a.createElement("h2",null,"Legal"),"Terms & Conditions",r.a.createElement("br",null),"Privacy")))}function re(){var e=Object(n.useContext)(j).user;return console.log(e.get),r.a.createElement("div",null,e.get.emailVerified?r.a.createElement("h1",null,"Hi ",e.get.email,"Welcome to Geetico"):r.a.createElement("p",null,"Please Verify your email"))}var ce=a(31),le=(a(106),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(ce.a)({},n,r))},e.handleSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,r,c,l,i,s,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,l=n.password,i=n.confirmPassword,n.url,l===i){t.next=5;break}return alert("Password Mismatch"),t.abrupt("return");case 5:return t.prev=5,t.next=8,b.createUserWithEmailAndPassword(c,l);case 8:s=t.sent,(m=s.user).updateProfile({displayName:r}),console.log(m),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),console.log("the error in profile doc creation is",t.t0);case 17:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}(),e.state={displayName:"",email:"",password:"",confirmPassword:"",url:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"signUpWrapper"},r.a.createElement("div",{className:"signUp"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"displayName",placeholder:"Name",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:c,onChange:this.handleChange}),r.a.createElement(J,{Buttontype:"auth",type:"submit",content:"Sign Up"}))))}}]),a}(n.Component)),ie=[{Name:"Cheese",Price:2.5,id:1,Description:"Ricotta Cheese",image:""},{Name:"Crisps",Price:3,id:2,Description:"Pringles",image:""},{Name:"Pizza",Price:4,id:3,Description:"Dominoes",image:""},{Name:"Chocolate",Price:1.5,id:4,Description:"Bounty",image:""},{Name:"Self-raising flour",Price:1.5,id:5,Description:"Bread Flout",image:""},{Name:"Ground almonds",Price:3,id:6,Description:"Roasted Almonds",image:""}];function oe(){var e=Object(n.useContext)(j).products;return console.log(e.get),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.set(ie),console.log(e.get)}},"UPLOAD PRODUCTS"),r.a.createElement("button",{onClick:function(){S(e.get)}},"Firebase Product"))}var se=a(23);a(107);function me(e){var t=e.item,a=t.Name,c=t.Price,l=Object(n.useContext)(j),i=l.cart,o=l.total;return r.a.createElement("div",null,r.a.createElement("div",{className:"publicItem"},r.a.createElement("img",{src:x.a,alt:"single item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("h4",null,a),r.a.createElement("div",null,r.a.createElement("h3",null,"N",c),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){var e=i.get.find((function(e){return e.id===t.id}));if(console.log(i.get),!e)return i.set((function(e){return[].concat(Object(se.a)(e),[Object(g.a)({},t,{quantity:1})])}));i.get.map((function(e){e.id===t.id&&(e.quantity++,i.set((function(e){return Object(se.a)(e)})))}));var a=0;i.get.map((function(e){var t=e.quantity,n=e.Price;a+=t*n})),o.set(a),console.log(o)}},"Add to Cart"))))))}a(108);var ue=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({SubmitField:""}),e.setState({SearchField:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({SubmitField:e.state.SearchField}),e.setState({SearchField:""}),console.log(e.state.SearchField)},e.state={product:[],url:[],SearchField:"",SubmitField:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.category;y.doc("products/".concat(t)).get().then((function(t){e.setState({product:t.data().ProductItems})}))}},{key:"render",value:function(){var e=this.props.match.params.category,t=this.state,a=t.SearchField,n=t.SubmitField,c=t.product.filter((function(e){return e.Name.toLowerCase().includes(a.toLowerCase()||n.toLowerCase())}));return console.log(c),r.a.createElement("div",{className:"shop"},r.a.createElement("div",{className:"categoryHeader"},r.a.createElement("h2",null,e)),r.a.createElement(_,{value:this.state.SearchField,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),r.a.createElement("div",{className:"shopItems"},c.map((function(e){return r.a.createElement(me,{key:e.id,item:e})}))))}}]),a}(n.Component);ue.contextType=j;a(109);function pe(){return r.a.createElement("div",null,"egss")}a(110),a(111);function de(e){var t=e.cartItem,a=Object(n.useContext)(j),c=a.cart,l=a.total,i=t.Name,o=(t.imageUrl,t.Price),s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:x.a,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("span",{className:"cartModifier",onClick:function(){c.get.map((function(e){e.id===t.id&&(e.quantity++,c.set((function(e){return Object(se.a)(e)})))}));var e=0;c.get.map((function(t){var a=t.quantity,n=t.Price;e+=a*n})),l.set(e),console.log(l)}},"+"),s,r.a.createElement("span",{className:"cartModifier",onClick:function(){c.get.map((function(e){e.id===t.id&&e.quantity>1&&(e.quantity--,c.set((function(e){return Object(se.a)(e)})))}));var e=0;c.get.map((function(t){var a=t.quantity,n=t.Price;e+=a*n})),l.set(e),console.log(l)}},"-")),r.a.createElement("span",{className:"price"},o))}function Ee(){var e=Object(n.useContext)(j),t=e.cart,a=e.total,c=t.get.length;return r.a.createElement("div",{className:"Checkout"},r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.get.map((function(e){return r.a.createElement(de,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: ",c?r.a.createElement("p",null,"N",a.get):0)))}var he=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).unsubscribeFromAuth=null,e.handletoggle=function(){e.setState({toggle:!e.state.toggle})},e.state={toggle:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.context,t=e.user;e.cart;this.unsubscribeFromAuth=b.onAuthStateChanged(function(){var e=Object(s.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(a),a&&(a.emailVerified||a.sendEmailVerification(),t.set(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),Object(u.a)(a,[{key:"render",value:function(){var e=this.context.cart;return r.a.createElement(E.a,{basename:"/Geetico"},r.a.createElement("div",{className:"App"},r.a.createElement(ee,{handletoggle:this.handletoggle,toggle:this.state.toggle,Cart:r.a.createElement("p",{className:"nav-links",onClick:this.handletoggle},"Cart  ",e.get.length)}),r.a.createElement("div",{className:"main"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:Y}),r.a.createElement(h.a,{exact:!0,path:"/login",component:te}),r.a.createElement(h.a,{exact:!0,path:"/Dashboard",component:re}),r.a.createElement(h.a,{exact:!0,path:"/Register",component:le}),r.a.createElement(h.a,{exact:!0,path:"/Categories",component:oe}),r.a.createElement(h.a,{exact:!0,path:"/Shop/:category",component:ue}),r.a.createElement(h.a,{exact:!0,path:"/Checkout",component:Ee}),r.a.createElement(h.a,{exact:!0,path:"/display",component:pe})),r.a.createElement(ne,null))))}}]),a}(n.Component);he.contextType=j;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[54,1,2]]]);
//# sourceMappingURL=main.9c9e0692.chunk.js.map