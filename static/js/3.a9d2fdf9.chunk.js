(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{290:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1frk3"}},291:function(t,e,s){},292:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__MfjTq",posts:"MyPosts_posts__3EET9"}},293:function(t,e,s){t.exports={item:"Post_item__3ui-P"}},294:function(t,e,s){"use strict";s.r(e);var c=s(5),n=s(34),a=s(35),i=s(37),o=s(36),r=s(0),u=s.n(r),p=(s(291),s(290)),j=s.n(p),d=s(66),b=s(126),l=s(1),f=function(t){var e=Object(r.useState)(!1),s=Object(b.a)(e,2),c=s[0],n=s[1],a=Object(r.useState)(t.status),i=Object(b.a)(a,2),o=i[0],u=i[1];return Object(r.useEffect)((function(){u(t.status)}),[t.status]),Object(l.jsxs)("div",{children:[!c&&Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"--------"})}),c&&Object(l.jsx)("div",{children:Object(l.jsx)("input",{onBlur:function(){n(!1),t.updateStatus(o)},onChange:function(t){u(t.currentTarget.value)},value:o,autoFocus:!0})})]})},h=function(t){var e=t.profile,s=t.status,c=t.updateStatus;return e?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(l.jsx)("img",{src:e.photos.large}),Object(l.jsx)(f,{status:s,updateStatus:c})]})}):Object(l.jsx)(d.a,{})},O=s(93),x=s(39),m=s(292),v=s.n(m),g=s(293),k=s.n(g),S=function(t){return Object(l.jsxs)("div",{className:k.a.item,children:[Object(l.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU",alt:"ava"}),t.message,Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["like ",t.likesCount]})})]})},P=s(124),_=s(125),N=s(72),y=s(64),C=Object(N.a)(10),w=u.a.memo((function(t){var e=Object(x.a)(t.posts).reverse().map((function(t){return Object(l.jsx)(S,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(l.jsxs)("div",{className:v.a.postsBlock,children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(l.jsx)("div",{className:v.a.posts,children:e})]})})),A=Object(_.a)({form:"profile"})((function(t){return Object(l.jsxs)("form",{onSubmit:t.handleSubmit,children:["New post",Object(l.jsx)("div",{children:Object(l.jsx)(P.a,{component:y.b,name:"newPostText",validate:[N.b,C],placeholder:"Post message"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Add post"})})]})})),B=w,T=s(16),U=Object(T.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(O.a)(e))}}}))(B),I=function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(l.jsx)(U,{})]})},M=s(10),z=s(9),E=function(t){Object(i.a)(s,t);var e=Object(o.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(l.jsx)(I,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(z.d)(Object(T.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,authorizedUserId:t.auth.userId}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.e}),M.f)(E)}}]);
//# sourceMappingURL=3.a9d2fdf9.chunk.js.map