(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{293:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(128),l=a(129),c=a(70),s=a(46),i=Object(c.a)(10),m=Object(l.a)({form:"post"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(r.a,{name:"post",placeholder:e.placeholder,type:"text",component:s.b,validate:[c.b,i]})),o.a.createElement("div",null,o.a.createElement("button",null,e.namebutton)))}));t.a=function(e){return o.a.createElement(m,{onSubmit:function(t){e.addMessage(t.post)},namebutton:e.namebutton,placeholder:e.placeholder})}},295:function(e,t,a){e.exports={description:"ProfileItem_description__2rSH4",mainPhoto:"ProfileItem_mainPhoto__2g3Fw",profile:"ProfileItem_profile__3u_AK",input_file:"ProfileItem_input_file__31q7E",name:"ProfileItem_name__2mrw3",status:"ProfileItem_status__1pCea",contacts:"ProfileItem_contacts__mMzMG",button__file:"ProfileItem_button__file__1GT1c",title:"ProfileItem_title__3YTYw"}},296:function(e,t,a){e.exports={form:"ProfileDataForm_form__1aDbJ",form__item:"ProfileDataForm_form__item__25To_",form__input:"ProfileDataForm_form__input__vZX6c",form__contact:"ProfileDataForm_form__contact__93jln",form__button:"ProfileDataForm_form__button__1N8Du",errorsome:"ProfileDataForm_errorsome__3vRDU"}},297:function(e,t,a){e.exports={item:"MyPost_item__1LQ4I",content:"MyPost_content__3ZSGB"}},298:function(e,t,a){e.exports={item:"Post_item__1Hshl",avatar:"Post_avatar__27ZwP",block:"Post_block___0v4o"}},299:function(e,t,a){"use strict";a.r(t);var n=a(27),o=a(28),r=a(30),l=a(29),c=a(0),s=a.n(c),i=a(96),m=a(295),u=a.n(m),f=a(54),p=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(e.status),l=Object(i.a)(r,2),m=l[0],u=l[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return s.a.createElement("div",null,!n&&s.a.createElement("div",null,s.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"++++++++")),n&&s.a.createElement("div",null,s.a.createElement("input",{autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(m)},value:m})))},_=a(93),d=a.n(_),E=a(85),b=a(128),v=a(129),h=a(46),P=a(296),g=a.n(P),N=Object(v.a)({form:"profile"})((function(e){var t=e.profile,a=Object(E.a)(e,["profile"]);return s.a.createElement("form",{className:g.a.form,onSubmit:a.handleSubmit},s.a.createElement("div",null,s.a.createElement("button",{className:g.a.form__button},"Save")),a.error&&s.a.createElement("div",{className:g.a.errorsome},a.error),s.a.createElement("div",{className:g.a.form__item},s.a.createElement("b",null,"FullName:"),s.a.createElement("div",{className:g.a.form__input},s.a.createElement(b.a,{name:"fullName",placeholder:"FullName",component:h.a,type:"text"}))),s.a.createElement("div",{className:g.a.form__item},s.a.createElement("b",null,"About me:"),s.a.createElement("div",{className:g.a.form__input},s.a.createElement(b.a,{name:"aboutMe",placeholder:"AboutMe",component:h.b,type:"textarea"}))),s.a.createElement("div",{className:g.a.form__item},s.a.createElement("b",null,"lookingForAJob:"),s.a.createElement("div",{className:g.a.form__input},s.a.createElement(b.a,{name:"lookingForAJob",component:h.a,type:"checkbox"}))),s.a.createElement("div",{className:g.a.form__item},s.a.createElement("b",null,"My professional skills:  "),s.a.createElement("div",{className:g.a.form__input},s.a.createElement(b.a,{name:"lookingForAJobDescription",placeholder:"LookingForAJobDescription",component:h.b,type:"textarea"}))),s.a.createElement("div",null,s.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return s.a.createElement("div",{key:e,className:g.a.form__item&&g.a.form__contact},s.a.createElement("b",null,e,": "),s.a.createElement("div",{className:g.a.form__input},s.a.createElement(b.a,{name:"contacts."+e,placeholder:e,component:h.a,type:"text"})))}))))})),O=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditForm;return s.a.createElement("div",{className:u.a.description},a&&s.a.createElement("div",null,s.a.createElement("button",{onClick:n},"Edit")),s.a.createElement("div",{className:u.a.name},t.fullName),s.a.createElement("div",null,s.a.createElement("b",null,"About me:")," ",t.aboutMe),s.a.createElement("div",null,s.a.createElement("b",null,"lookingForAJob:"),"    ",t.lookingForAJob?"yes":"no"),s.a.createElement("div",null,s.a.createElement("b",null,"My professional skills:  "),"  ",t.lookingForAJobDescription),s.a.createElement("div",null,s.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return s.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},k=function(e){var t=e.contactTitle,a=e.contactValue;return s.a.createElement("div",{className:u.a.contacts},s.a.createElement("b",null,t)," : ",a)},y=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1];if(!e.profile)return s.a.createElement(f.a,null);return s.a.createElement("div",{className:u.a.profile},s.a.createElement("img",{className:u.a.mainPhoto,src:e.profile.photos.large||d.a,alt:"PhotoUser"}),e.isOwner&&s.a.createElement("div",{className:"s.button__file"},s.a.createElement("button",{className:u.a.input_file},"Edit photo",s.a.createElement("input",{type:"file",onChange:function(t){e.setPhoto(t.target.files[0])}}))),s.a.createElement("div",{className:u.a.title},"Status"),s.a.createElement("div",{className:u.a.status},s.a.createElement(p,{status:e.status,updateStatus:e.updateStatus})),n?s.a.createElement(N,{onSubmit:function(t){e.saveProfile(t).then((function(){o(!1)}))},initialValues:e.profile,profile:e.profile}):s.a.createElement(O,{goToEditForm:function(){return o(!0)},isOwner:e.isOwner,profile:e.profile}))},j=a(95),S=a(297),F=a.n(S),I=a(298),D=a.n(I),w=function(e){return e.profile?(console.log("MyPost"),console.log(e.profile.photos),s.a.createElement("div",{className:D.a.item},s.a.createElement("img",{className:D.a.avatar,src:null!==e.profile.photos.large?e.profile.photos.large:d.a,alt:""}),s.a.createElement("div",null,e.message,s.a.createElement("span",null,"like ",e.count)))):s.a.createElement(f.a,null)},A=a(293),M=s.a.memo((function(e){var t=e.posts.map((function(t){return s.a.createElement(w,{key:t.id,profile:e.profile,message:t.message,count:t.count})}));return s.a.createElement("div",{className:F.a.content},s.a.createElement("div",{className:F.a.item}," My posts "),s.a.createElement(A.a,{addMessage:function(t){e.addPost(t)},namebutton:"Add",placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434"}),t)})),x=a(11),J=Object(x.b)((function(e){return{posts:e.profilePage.postData,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(Object(j.a)(t))}}}))(M),T=function(e){return s.a.createElement("div",null,s.a.createElement(y,{saveProfile:e.saveProfile,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,setPhoto:e.setPhoto}),s.a.createElement(J,{store:e.store}))},C=a(10),U=a(94),z=a(9),G=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.a.createElement(T,Object.assign({},this.props,{status:this.props.status,isOwner:!this.props.match.params.userId,setPhoto:this.props.setPhoto,saveProfile:this.props.saveProfile}))}}]),a}(s.a.Component);t.default=Object(z.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{setUserProfile:j.g,getProfile:j.c,getStatus:j.d,updateStatus:j.h,setPhoto:j.f,saveProfile:j.e}),U.a,C.f)(G)}}]);
//# sourceMappingURL=3.c2768d1b.chunk.js.map