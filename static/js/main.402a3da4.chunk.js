(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{104:function(e,t,n){"use strict";t.a=n.p+"static/media/user.ab7efdc7.png"},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,c=n(129),s=n.n(c).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"797821ca-5e62-4458-9aa9-8c6476b8b275"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(40),a=n(3),c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is are your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s={sendMessageCreator:function(e){return{type:"SN/DIALOGS/SEND-MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:12,message:n}])});default:return e}}},130:function(e,t,n){e.exports={userPhoto:"user_userPhoto__sqLFn",selectedPage:"user_selectedPage__5J-Pq",paginationWrapper:"user_paginationWrapper__1Q_Pl"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3orgJ",item:"Navbar_item__30L5Y",activeLink:"Navbar_activeLink__3HkE3",disabled:"Navbar_disabled__1RYZ9"}},162:function(e,t,n){},163:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(64),s=n.n(c),i=(n(162),n(35)),o=n(36),u=n(38),l=n(37),d=(n(163),n(16)),f=n.n(d),j=n(22),p=n(1),b=function(){return Object(p.jsxs)("nav",{className:f.a.nav,children:[Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(j.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(j.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(j.b,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)("a",{className:f.a.disabled,children:"News"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)("a",{className:f.a.disabled,children:"Music"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)("a",{className:f.a.disabled,children:"Settings"})})]})},h=n(18),O=n(9),g=n.n(O),S=n(15),m=n(40),v=n(3),x=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(v.a)(Object(v.a)({},e),r):e}))},E=n(12),P={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return E.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return E.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return E.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},w={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},_=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},N=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},C=function(e){return{type:"SN/USERS/SET_USERS",users:e}},U=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},y=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},I=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},T=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},L=function(){var e=Object(S.a)(g.a.mark((function e(t,n,r,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:x(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:x(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(v.a)(Object(v.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(v.a)(Object(v.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=n(55),A=n(93),F=n(89),z=n.n(F),G=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),f=Object(r.useState)(1),j=Object(A.a)(f,2),b=j[0],h=j[1],O=(b-1)*i+1,g=b*i;return Object(p.jsxs)("div",{className:z.a.paginator,children:[b>1&&Object(p.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:a===e?z.a.selectedPage:"",onClick:function(t){c(e)},children:e},e)})),b<d&&Object(p.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},D=n(130),M=n.n(D),H=n(104),q=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:H.a,className:M.a.userPhoto,alt:"userPhoto"})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"user.location.city"}),Object(p.jsx)("div",{children:"user.location.country"})]})]})]})},W=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],B=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,s=Object(R.a)(e,W);return Object(p.jsxs)("div",{children:[Object(p.jsx)(G,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(q,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))})]})},V=n(67),J=n(10),Y=function(e){return e.usersPage.users},Z=function(e){return e.usersPage.pageSize},X=function(e){return e.usersPage.totalUsersCount},K=function(e){return e.usersPage.currentPage},Q=function(e){return e.usersPage.isFetching},$=function(e){return e.usersPage.followingInProgress},ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:this.props.pageTitle}),this.props.isFetching?Object(p.jsx)(V.a,{}):null,Object(p.jsx)(B,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),te=Object(J.d)(Object(h.b)((function(e){return{users:Y(e),pageSize:Z(e),totalUsersCount:X(e),currentPage:K(e),isFetching:Q(e),followingInProgress:$(e)}}),{follow:function(e){return function(t){L(t,e,P.follow.bind(P),_)}},unfollow:function(e){return function(t){L(t,e,P.unfollow.bind(P),N)}},requestUsers:function(e,t){return function(){var n=Object(S.a)(g.a.mark((function n(r,a){var c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),r(U(e)),n.next=4,P.getUsers(e,t);case 4:c=n.sent,r(I(!1)),r(C(c.items)),r(y(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(ee),ne=n(11),re=n(90),ae=n.n(re),ce=function(e){return Object(p.jsxs)("header",{className:ae.a.header,children:[Object(p.jsx)("img",{src:"http://pngimg.com/uploads/car_logo/car_logo_PNG1640.png"}),Object(p.jsx)("div",{className:ae.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(p.jsx)(j.b,{to:"/login",children:"Login"})})]})},se=n(33),ie=function(){return E.c.get("auth/me").then((function(e){return e.data}))},oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return E.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},ue=function(){return E.c.delete("auth/login").then((function(e){return e.data}))},le=function(){return E.c.get("security/get-captcha-url").then((function(e){return e.data}))},de={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},fe=function(e,t,n,r){return{type:"SN/AUTH/SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},je=function(e){return{type:"SN/AUTH/GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},pe=function(){return function(){var e=Object(S.a)(g.a.mark((function e(t){var n,r,a,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:(n=e.sent).resultCode===E.b.Success&&(r=n.data,a=r.id,c=r.login,s=r.email,t(fe(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){return function(){var e=Object(S.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:n=e.sent,r=n.url,t(je(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET-USER-DATA":case"SN/AUTH/GET-CAPTCHA-URL-SUCCESS":return Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},Oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ce,Object(v.a)({},this.props))}}]),n}(a.a.Component),ge=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(S.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:e.sent.resultCode===E.b.Success&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),Se=n(126),me=n(127),ve=n(46),xe=n(65),Ee=n(48),Pe=n.n(Ee),we=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(Se.a,{name:"email",component:ve.a,type:"text",placeholder:"Email",validate:[xe.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(Se.a,{name:"password",component:ve.a,type:"password",placeholder:"Password",validate:[xe.b]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Se.a,{name:"rememberMe",component:ve.a,type:"checkbox"})," remember me"]}),r&&Object(p.jsx)("img",{src:r,alt:"captcha"}),r&&Object(p.jsx)("div",{children:Object(p.jsx)(Se.a,{name:"captcha",component:ve.a,placeholder:"Symbols from image",validate:[xe.b]})}),n&&Object(p.jsxs)("div",{className:Pe.a.formSummaryError,children:[" ",n," "]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),_e=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(S.a)(g.a.mark((function a(c){var s,i;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,oe(e,t,n,r);case 2:(s=a.sent).resultCode===E.b.Success?c(pe()):(s.resultCode===E.a.CaptchaIsRequired&&c(be()),i=s.messages.length>0?s.messages[0]:"Some error",c(Object(se.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(ne.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 email \u0438 password:"})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"login:"})," free@samuraijs.com"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"password:"})," free"]}),Object(p.jsx)(we,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Ne=n(94),Ce=n(125),Ue={},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},Ie={initialized:!1},Te=function(){return{type:"SN/APP/INITIALIZED-SUCCESS"}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED-SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},ke=n(132),Re=n(128),Ae=Object(J.c)({profilePage:Ne.b,dialogsPage:Ce.b,sidebar:ye,usersPage:k,auth:he,app:Le,form:Re.a}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,ze=Object(J.e)(Ae,Fe(Object(J.a)(ke.a)));window.__store__=ze;var Ge=ze,De=a.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),Me=a.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),He=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(ge,{}),Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(ne.a,{from:"/",to:"/profile"}),Object(p.jsx)(ne.b,{path:"/profile/:userId?",render:(e=Me,function(t){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsx)(e,Object(v.a)({},t))})})}),Object(p.jsx)(ne.b,{path:"/dialogs",render:function(){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsx)(De,{})})}}),Object(p.jsx)(ne.b,{path:"/users",render:function(){return Object(p.jsx)(te,{pageTitle:"Users"})}}),Object(p.jsx)(ne.b,{path:"/login",render:function(){return Object(p.jsx)(_e,{})}})]})]}):Object(p.jsx)(V.a,{});var e}}]),n}(a.a.Component),qe=Object(J.d)(ne.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e(Te())}))}}}))(He),We=function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(h.a,{store:Ge,children:Object(p.jsx)(qe,{})})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(We,{})}),document.getElementById("root"))},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(3),a=n(55),c=(n(0),n(48)),s=n.n(c),i=n(1),o=["input","meta"],u=["input","meta"],l=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},d=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,o));return Object(i.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(i.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},48:function(e,t,n){e.exports={formControl:"FormControls_formControl__256RD",error:"FormControls_error__w4shk",formSummaryError:"FormControls_formSummaryError__1gb9J"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.4046923e.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,style:{backgroundColor:"white"}})})}},89:function(e,t,n){e.exports={paginator:"Paginator_paginator__mNApB",pageNumber:"Paginator_pageNumber__3wrV8",selectedPage:"Paginator_selectedPage__1IWls"}},90:function(e,t,n){e.exports={header:"Header_header__1iftm",loginBlock:"Header_loginBlock__1EZJe"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return S})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return v}));var r=n(9),a=n.n(r),c=n(15),s=n(40),i=n(3),o=n(33),u=n(12),l=function(e){return u.c.get("profile/".concat(e)).then((function(e){return e.data}))},d=function(e){return u.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},f=function(e){return u.c.put("profile/status",{status:e}).then((function(e){return e.data}))},j=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return u.c.put("profile",e).then((function(e){return e.data}))},b={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11}],profile:null,status:""},h={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET-USER-PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET-STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE-POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE-PHOTO-SUCCESS",photos:e}}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:r=t.sent,n(h.setStatus(r)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===t.sent.resultCode&&n(h.setStatus(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,p(e);case 3:if(0!==(s=t.sent).resultCode){t.next=12;break}if(null===c){t.next=9;break}n(O(c)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(o.a)("edit-profile",{contacts:{facebook:s.messages[0]}})),t.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case"SN/PROFILE/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE-PHOTO-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[287,1,2]]]);
//# sourceMappingURL=main.402a3da4.chunk.js.map