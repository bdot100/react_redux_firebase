(this.webpackJsonpmarioplantest=this.webpackJsonpmarioplantest||[]).push([[0],{220:function(e,t,c){},408:function(e,t,c){"use strict";c.r(t);var n=c(17),a=c(1),r=c(2),i=c.n(r),s=c(93),l=c.n(s),o=(c(220),c(20)),j=c(21),d=c(23),h=c(22),u=c(9),b=c(7),p=c(10),O=Object(p.b)(null,(function(e){return{signOut:function(){return e((function(e,t,c){(0,c.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/create",children:"New Project"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{onClick:e.signOut,children:"Log Out"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})})]})})),m=function(){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/signup",children:"Sign Up"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/signin",children:"Log In"})})]})},f=Object(p.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,c=e.profile,n=t.uid?Object(a.jsx)(O,{profile:c}):Object(a.jsx)(m,{});return Object(a.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(u.b,{to:"/",className:"brand-logo left",children:"MarioPlan"}),n]})})})),x=c(54),g=c.n(x),N=function(e){var t=e.notifications;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"card z-depth-0",children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title",children:"Notifications"}),Object(a.jsx)("ul",{className:"notifications",children:t&&t.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(a.jsx)("span",{children:e.content}),Object(a.jsx)("div",{className:"grey-text note-date",children:g()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})},v=function(e){var t=e.project;return Object(a.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(a.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(a.jsx)("span",{className:"card-title",children:t.title}),Object(a.jsxs)("p",{children:["Posted By ",t.authorFirstName," ",t.authorLastName]}),Object(a.jsx)("p",{className:"grey-text",children:g()(t.createdAt.toDate()).calendar()})]})})},y=function(e){var t=e.projects;return Object(a.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(a.jsx)(u.b,{to:"/project/"+e.id,children:Object(a.jsx)(v,{project:e})},e.id)}))})},C=c(31),S=c(24),E=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props,t=e.projects,c=e.auth,n=e.notifications;return c.uid?Object(a.jsx)("div",{className:"dashboard container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col s12 m6",children:Object(a.jsx)(y,{projects:t})}),Object(a.jsx)("div",{className:"col s12 m5 offser-m1",children:Object(a.jsx)(N,{notifications:n})})]})}):Object(a.jsx)(b.a,{to:"/signin"})}}]),c}(r.Component),w=Object(S.d)(Object(p.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(E),F=Object(S.d)(Object(p.b)((function(e,t){var c=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[c]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(a.jsx)("div",{className:"container section project-details",children:Object(a.jsxs)("div",{className:"card z-depth-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title",children:t.title}),Object(a.jsx)("p",{children:t.content})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["Posted By ",t.authorFirstName," ",t.authorLastName]}),Object(a.jsx)("div",{children:g()(t.createdAt.toDate()).calendar()})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading project..."})}):Object(a.jsx)(b.a,{to:"/signin"})})),R=c(35),I=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink light-1 z-depth-0",children:"Login"}),Object(a.jsx)("div",{className:"red-text center",children:t?Object(a.jsx)("p",{children:t}):null})]})]})})}}]),c}(r.Component),P=Object(p.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((c=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(c.email,c.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var c}}}))(I),k=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props,t=e.auth,c=e.authError;return t.uid?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink light-1 z-depth-0",children:"Sign UP"})}),Object(a.jsx)("div",{className:"red-text center",children:c?Object(a.jsx)("p",{children:c}):null})]})})}}]),c}(r.Component),A=Object(p.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,c,n){var a=n.getFirebase,r=n.getFirestore,i=a(),s=r();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),U=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(j.a)(c,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:"Create New Project"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:"Project Content"}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink light-1 z-depth-0",children:"Create"})})]})}):Object(a.jsx)(b.a,{to:"/signin"})}}]),c}(r.Component),_=Object(p.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,c,a){a.getFirebase;var r=(0,a.getFirestore)(),i=c().firebase.profile,s=c().firebase.auth.uid;r.collection("projects").add(Object(n.a)(Object(n.a)({},e),{},{authorFirstName:i.firstName,authorLastName:i.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(U),L=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/",component:w}),Object(a.jsx)(b.b,{path:"/project/:id",component:F}),Object(a.jsx)(b.b,{path:"/signin",component:P}),Object(a.jsx)(b.b,{path:"/signup",component:A}),Object(a.jsx)(b.b,{path:"/create",component:_})]})]})})}}]),c}(r.Component),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,409)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},G={authError:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(n.a)(Object(n.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(n.a)(Object(n.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(n.a)(Object(n.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),{authError:t.err.message};default:return e}},z={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},J=c(55),M=Object(S.c)({auth:B,project:D,firestore:J.firestoreReducer,firebase:C.firebaseReducer}),V=c(214),W=c(56);c(404),c(406);W.a.initializeApp({apiKey:"AIzaSyBSghSghTd89r_SSyNfyV51rpeFlgr6c_8",authDomain:"marioplantest-58c51.firebaseapp.com",databaseURL:"https://marioplantest-58c51.firebaseio.com",projectId:"marioplantest-58c51",storageBucket:"marioplantest-58c51.appspot.com",messagingSenderId:"557490755428",appId:"1:557490755428:web:55323801210b5c721f4c71",measurementId:"G-6BP43BVMMT"}),W.a.firestore().settings({timestampsInSnapshots:!0});var K=W.a,q=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("center",{children:Object(a.jsx)("div",{className:"preloader-wrapper big active",children:Object(a.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(a.jsx)("div",{className:"circle-clipper left",children:Object(a.jsx)("div",{classNameName:"circle"})}),Object(a.jsx)("div",{className:"gap-patch",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"circle-clipper right",children:Object(a.jsx)("div",{className:"circle"})})]})})})}}]),c}(r.Component),H=Object(S.e)(M,Object(S.d)(Object(S.a)(V.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:J.getFirestore})),Object(J.reduxFirestore)(K,{attachAuthIsReady:!0}))),Q={firebase:W.a,config:{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0},dispatch:H.dispatch,createFirestoreInstance:J.createFirestoreInstance};function X(e){var t=e.children,c=Object(p.c)((function(e){return e.firebase.auth}));return Object(C.isLoaded)(c)?t:Object(a.jsx)(q,{})}l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p.a,{store:H,children:Object(a.jsx)(C.ReactReduxFirebaseProvider,Object(n.a)(Object(n.a)({},Q),{},{children:Object(a.jsx)(X,{children:Object(a.jsx)(L,{})})}))})}),document.getElementById("root")),T()}},[[408,1,2]]]);
//# sourceMappingURL=main.a07076db.chunk.js.map