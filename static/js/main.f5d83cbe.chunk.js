(this["webpackJsonpjnrhub-client"]=this["webpackJsonpjnrhub-client"]||[]).push([[0],{1:function(e,t,a){e.exports={error:"Register_error__3iNrZ",normal:"Register_normal__NsiiA",container:"Register_container__XWZSX",registerform:"Register_registerform__3_6fP",subtitle:"Register_subtitle__1fPGk",employer:"Register_employer__3s608",jobseeker:"Register_jobseeker__ZDtKg",regForm:"Register_regForm__1dj3R",button:"Register_button__1QxNe",errorMsg:"Register_errorMsg__1BQ8z",hidden:"Register_hidden__31VlX"}},14:function(e,t,a){e.exports={edit:"Profile_edit__1XuA8",profileItem:"Profile_profileItem__3tf2l",profileStyle:"Profile_profileStyle__165-z"}},17:function(e,t,a){e.exports={container:"Lobbyemp_container__38x5n",mainheader:"Lobbyemp_mainheader__jcTZ_",jobboard:"Lobbyemp_jobboard__2Eoik",jobcolumn:"Lobbyemp_jobcolumn__3kQZ-",job:"Lobbyemp_job__2xuOf"}},19:function(e,t,a){e.exports={container:"Jobboard_container__3fMoF",mainheader:"Jobboard_mainheader__UH6bs",jobboard:"Jobboard_jobboard__38Cl-",jobcolumn:"Jobboard_jobcolumn__3I2O4",job:"Jobboard_job__2KBXq"}},21:function(e,t,a){e.exports={mainnav:"Navbar_mainnav__x2RPw",brand:"Navbar_brand__3RPLy",inline:"Navbar_inline__1C7gR",oddOneOut:"Navbar_oddOneOut__2jqd_"}},22:function(e,t,a){e.exports={container:"Login_container__1Oz4Y",invalidLogin:"Login_invalidLogin__3A8k2",loginform:"Login_loginform__pbWFT",loginregisterbutton:"Login_loginregisterbutton__2gCwq"}},23:function(e,t,a){e.exports={applicants:"Applications_applicants__GYvSP"}},29:function(e,t,a){e.exports={container:"Job_container__3KANX",apply:"Job_apply__XIGY-"}},30:function(e,t,a){e.exports={container:"Empjob_container__3cKp0",apply:"Empjob_apply__3Xv5d"}},44:function(e,t,a){},45:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(41),o=a.n(r),s=(a(50),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),p=(a(51),a(21)),d=a.n(p),b=a(12),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loggedin:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:d.a.navwrapper},l.a.createElement("nav",{className:d.a.mainnav},l.a.createElement("p",{className:d.a.brand},"<Jnr/Hub>"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.b,{to:"/"},"Home")),this.props.loggedin?l.a.createElement("div",{className:d.a.inline},l.a.createElement("li",null,l.a.createElement(b.b,{to:"/jobboard"},"Job Board")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/profile"},"Profile")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:d.a.oddOneOut,to:"/logout",onClick:function(){return e.props.onLogout()}},"Logout"))):l.a.createElement("li",null,l.a.createElement(b.b,{to:"/register"},"Register")))))}}]),t}(n.Component),g=a(9),E=a(16),f=a(22),v=a.n(f),j=a(7),_=a.n(j),y=a(25),O=a.n(y),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",invalidLogin:!1},a.loginHandler=function(e){e.preventDefault(),_.a.post("http://localhost:3000/tokens",{email:a.state.username,password:a.state.password}).then((function(e){console.log(e),localStorage.setItem("jwt",e.data.jwt);var t=O()(localStorage.getItem("jwt"));localStorage.setItem("usrType",t.userType),a.props.onLogin(!0),"jobseeker"===t.userType?a.props.history.push("/jobseeker"):"employer"===t.userType&&a.props.history.push("/employer")})).catch((function(e){a.setState({invalidLogin:!0})}))},a.inputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.setState(Object(E.a)({},a.state,Object(g.a)({},e.target.name,t)))},a.props.loggedin&&(console.log(a.props),console.log(a.props.usrType),a.props.history.push("/"+localStorage.getItem("usrType"))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:v.a.container},l.a.createElement("div",{className:v.a.loginform},l.a.createElement("h2",null,"Log In"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.loginHandler},l.a.createElement("input",{type:"text",name:"username",onChange:this.inputChangeHandler,placeholder:"Username.."}),l.a.createElement("input",{type:"password",name:"password",onChange:this.inputChangeHandler,placeholder:"Password.."}),l.a.createElement("button",{className:v.a.loginregisterbutton,type:"submit"},"Login"),l.a.createElement("br",null),l.a.createElement("button",{className:v.a.button},l.a.createElement("a",{href:"/#/register"},"Register"))),this.state.invalidLogin?l.a.createElement("div",{className:v.a.invalidLogin},"Invalid Login"):""))}}]),t}(n.Component),w=a(18),I=a(1),S=a.n(I),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={submitted:!1,emailError:S.a.errorMsg,emailInvalid:"",fullnameInvalid:"",phoneInvalid:"",suburbInvalid:"",stateInvalid:"",countryInvalid:"",aboutInvalid:"",passwordInvalid:""},a.memberHandler=function(e,t){_.a.post("http://localhost:3000/users",{user:{email:a.state.email,full_name:a.state.fullname,phone_no:a.state.phone,suburb:a.state.suburb,state:a.state.state,country:a.state.country,website:a.state.website,about:a.state.about,user_type:t,admin:!1,password:a.state.password,password_confirmation:a.state.confirm_password}}).then((function(e){console.log(e.data.jwt),localStorage.setItem("jwt",e.data.jwt),a.props.onLogin(!0);var t=O()(localStorage.getItem("jwt"));console.log(t),localStorage.setItem("usrType",t.userType),a.props.history.push("/".concat(localStorage.getItem("usrType")))})).catch((function(e){console.log(e)}))},a.inputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.setState(Object(E.a)({},a.state,Object(g.a)({},e.target.name,t)));var n=!0;n=a.validateLive(n,e)},a.validateLive=function(e,t){return""===t.target.value?(a.setState(Object(g.a)({},t.target.name+"Invalid",S.a.error)),e=!1):a.setState(Object(g.a)({},t.target.name+"Invalid",S.a.normal)),e},a.validate=function(e,t){return""===t.target.email.value?(a.setState({emailInvalid:S.a.error}),a.setState({emailError:S.a.errorMsg}),e=!1):(a.setState({emailInvalid:S.a.normal}),a.setState({emailError:S.a.hidden})),""===t.target.fullname.value?(a.setState({fullnameInvalid:S.a.error}),a.setState({fullnameError:S.a.errorMsg}),e=!1):(a.setState({fullnameInvalid:S.a.normal}),a.setState({fullnameError:S.a.hidden})),""===t.target.phone.value?(a.setState({phoneInvalid:S.a.error}),e=!1):a.setState({phoneInvalid:S.a.normal}),""===t.target.suburb.value?(a.setState({suburbInvalid:S.a.error}),e=!1):a.setState({suburbInvalid:S.a.normal}),""===t.target.state.value?(a.setState({stateInvalid:S.a.error}),e=!1):a.setState({stateInvalid:S.a.normal}),""===t.target.country.value?(a.setState({countryInvalid:S.a.error}),e=!1):a.setState({countryInvalid:S.a.normal}),""===t.target.about.value?(a.setState({aboutInvalid:S.a.error}),e=!1):a.setState({aboutInvalid:S.a.normal}),""===t.target.password.value||t.target.password.value!==t.target.confirm_password.value?(a.setState({passwordInvalid:S.a.error}),e=!1):a.setState({passwordInvalid:S.a.normal}),""===t.target.confirm_password.value||t.target.password.value!==t.target.confirm_password.value?(a.setState({confirmPasswordInvalid:S.a.error}),e=!1):a.setState({confirmPasswordInvalid:S.a.normal}),e},a.handleSubmit=function(e){e.preventDefault();var t=!0;(t=a.validate(t,e))&&a.setState({submitted:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:S.a.container},!1===this.state.submitted?l.a.createElement("div",{className:S.a.registerform},l.a.createElement("div",{className:S.a.regForm},l.a.createElement("h2",null,"Register Now"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{onChange:this.inputChangeHandler,type:"email",placeholder:"Your Email",name:"email",id:"email",className:this.state.emailInvalid}),this.state.emailInvalid.startsWith("Register_error")?l.a.createElement("label",{className:this.state.emailError},"Please enter your email"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Your Full Name",name:"fullname",id:"fullname",className:this.state.fullnameInvalid}),this.state.fullnameInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter your name"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Phone Number",name:"phone",id:"phone",className:this.state.phoneInvalid}),this.state.phoneInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter your number"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Suburb",name:"suburb",id:"suburb",className:this.state.suburbInvalid}),this.state.suburbInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter your suburb"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"State",name:"state",id:"state",className:this.state.stateInvalid}),this.state.stateInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter your state"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Country",name:"country",id:"country",className:this.state.countryInvalid}),this.state.countryInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter your Country"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Website URL (optional)",name:"website",id:"website"}),l.a.createElement("textarea",{onChange:this.inputChangeHandler,cols:"30",rows:"5",placeholder:"Please tell us about yourself...",name:"about",id:"about",className:this.state.aboutInvalid}),this.state.aboutInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter your about information!"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"password",placeholder:"Your Password",name:"password",id:"password",className:this.state.passwordInvalid}),this.state.passwordInvalid.startsWith("Register_error")?l.a.createElement("label",{className:S.a.errorMsg},"Please enter a valid password"):"",l.a.createElement("input",{onChange:this.inputChangeHandler,type:"password",placeholder:"Confirm Password",name:"confirm_password",id:"confirm_password",className:this.state.confirmPasswordInvalid}),this.state.password!==this.state.confirm_password&&this.state.password&&this.state.confirm_password?l.a.createElement("label",{className:S.a.errorMsg},"Passwords must match!"):"",l.a.createElement("button",{type:"submit",className:S.a.loginregisterbutton},"Create Account")))):l.a.createElement("div",null,l.a.createElement("h2",{className:S.a.subtitle},"Are you:"),l.a.createElement("div",{className:S.a.container},l.a.createElement("div",{className:S.a.employer,onClick:function(t){return e.memberHandler(t,"employer")}},l.a.createElement("label",null,"An Employer"),l.a.createElement("img",{src:"/assets/img/boss.jpeg",alt:"Big Boss"})),l.a.createElement("div",{className:S.a.jobseeker,onClick:function(t){return e.memberHandler(t,"jobseeker")}},l.a.createElement("label",null,"A Job Seeker"),l.a.createElement("img",{src:"/assets/img/bludger.jpg",alt:"Bludging Job Seeker"})))))}}]),t}(n.Component),k=Object(w.f)(C),x=a(17),L=a.n(x),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={jobs:[]},!1===a.props.loggedIn&&a.props.history.push("/"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("http://localhost:3000/jobs").then((function(t){console.log(t.data),e.setState({jobs:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:L.a.container},l.a.createElement("div",{className:L.a.mainheader},l.a.createElement("h1",null,"Jobs Posted")),l.a.createElement("table",{className:L.a.jobboard},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Company"),l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Role"),l.a.createElement("th",null,"Applications"))),l.a.createElement("tbody",null,this.state.jobs.slice(0,2).map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{className:L.a.jobcolumn},e.company_name),l.a.createElement("td",{className:L.a.jobcolumn},e.location),l.a.createElement("td",{className:L.a.jobcolumn},e.role),l.a.createElement("td",{className:L.a.jobcolumn},e.applicants),l.a.createElement("td",{className:L.a.jobcolumn},l.a.createElement(b.b,{to:"/empjob/".concat(e.id)},"Details")))})))))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={profile:{jobs:[]}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.post("http://localhost:3000/users/profile",{token:localStorage.getItem("jwt")}).then((function(t){e.setState({profile:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome, ",this.state.profile.full_name))}}]),t}(n.Component),R=a(19),A=a.n(R),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={jobs:[]},!1===a.props.loggedIn&&a.props.history.push("/"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("http://localhost:3000/jobs").then((function(t){console.log(t.data),e.setState({jobs:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:A.a.container},l.a.createElement("div",{className:A.a.mainheader},l.a.createElement("h1",null,"Available jobs")),l.a.createElement("table",{className:A.a.jobboard},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Company"),l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Role"))),l.a.createElement("tbody",null,this.state.jobs.map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{className:A.a.jobcolumn},e.company_name),l.a.createElement("td",{className:A.a.jobcolumn},e.location),l.a.createElement("td",{className:A.a.jobcolumn},e.role),l.a.createElement("td",{className:A.a.jobcolumn},l.a.createElement(b.b,{to:"/job/".concat(e.id)},"Details")))})))))}}]),t}(n.Component),M=a(29),J=a.n(M),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={profileId:-1,job:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id?_.a.get("http://localhost:3000/jobs/".concat(this.props.match.params.id)).then((function(t){console.log(t),e.setState({profileId:e.props.match.params.id,job:t.data})})).catch((function(e){return console.log(e)})):this.props.history.push("/jobboard")}},{key:"render",value:function(){return l.a.createElement("div",{className:J.a.container},l.a.createElement("h1",null,this.state.job.role),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Company:"),l.a.createElement("br",null),l.a.createElement("br",null),this.state.job.company_name),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Role:")," ",l.a.createElement("br",null),l.a.createElement("br",null),"Junior Front End Developer"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Location:"),l.a.createElement("br",null),l.a.createElement("br",null)," ",this.state.job.location),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Salary:"),l.a.createElement("br",null),l.a.createElement("br",null)," $",this.state.job.salary),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Job Description:"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),this.state.job.description),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("div",{className:J.a.apply},l.a.createElement("a",{href:"#/job/LINKGOESHERE"},"Apply Now!")))}}]),t}(n.Component),F=a(14),W=a.n(F),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={editing:{full_name:!1,full_nameError:[],phone_no:!1,phone_noError:[]},profile:{jobs:[]}},a.editField=function(e){console.log("editing!",e.target.name),a.setState({editing:Object(g.a)({},e.target.name,!0)})},a.updateField=function(e){console.log(e.target.value);var t=e.target.name;if("Enter"===e.key){var n=localStorage.getItem("jwt");_.a.post("http://localhost:3000/users",{user:Object(g.a)({},t,e.target.value),token:n}).then((function(e){var n;(console.log(e.data),e.data.error)?a.setState({editing:Object(E.a)({},a.state.editing,(n={},Object(g.a)(n,t,!1),Object(g.a)(n,t+"Error",e.data.error),n))}):a.setState({profile:Object(E.a)({},a.state.profile,Object(g.a)({},t,e.data.user[t])),editing:Object(g.a)({},t,!1)})})).catch((function(e){console.log("error",e)})),console.log("SUBMIT!",a.state.profile.id)}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("token"),console.log(localStorage.getItem("jwt")),_.a.post("http://localhost:3000/users/profile",{token:localStorage.getItem("jwt")}).then((function(t){console.log(t.data),e.setState({profile:t.data})})).catch((function(e){console.log("error",e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Profile"),l.a.createElement("div",{className:W.a.profileStyle},l.a.createElement("p",{className:W.a.profileItem},"Full name:\xa0",this.state.editing.full_name?l.a.createElement("input",{type:"text",name:"full_name",defaultValue:this.state.profile.full_name,onKeyDown:this.updateField}):l.a.createElement("span",null,this.state.profile.full_name,l.a.createElement("img",{onClick:this.editField,name:"full_name",src:"/assets/img/edit-icon.png",className:W.a.edit}))),l.a.createElement("p",{className:W.a.profileItem},"Phone Number:\xa0",this.state.editing.phone_no?l.a.createElement("input",{type:"text",name:"phone_no",defaultValue:this.state.profile.phone_no,onKeyDown:this.updateField}):l.a.createElement("span",null,this.state.profile.phone_no,l.a.createElement("img",{onClick:this.editField,name:"phone_no",src:"/assets/img/edit-icon.png",className:W.a.edit}))),l.a.createElement("p",{className:W.a.profileItem},"Email: ",this.state.profile.email," "),l.a.createElement("p",{className:W.a.profileItem},"Suburb: ",this.state.profile.suburb," "),l.a.createElement("p",{className:W.a.profileItem},"State: ",this.state.profile.state," "),l.a.createElement("p",{className:W.a.profileItem},"Website: ",this.state.profile.website," "),l.a.createElement("p",{className:W.a.profileItem},"Account Type: ",this.state.profile.user_type," "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),X=a(30),K=a.n(X),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={role:"",job:-1},a.deletePostHandler=function(){_.a.delete("http://localhost:3000/jobs/".concat(a.props.match.params.id)).then((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("http://localhost:3000/jobs/".concat(this.props.match.params.id)).then((function(t){e.setState({job:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:K.a.container},l.a.createElement("h1",null,this.state.job.role),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Company:"),l.a.createElement("br",null),l.a.createElement("br",null),this.state.job.company_name),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Role:")," ",l.a.createElement("br",null),l.a.createElement("br",null),this.state.job.role),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Location:"),l.a.createElement("br",null),l.a.createElement("br",null)," ",this.state.job.location),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Salary:"),l.a.createElement("br",null),l.a.createElement("br",null)," $",this.state.job.salary),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Job Description:"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),this.state.job.description),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,"Current Applicants: ",l.a.createElement("span",null,this.state.job.applicants)),l.a.createElement("div",{className:K.a.apply},l.a.createElement("button",{onClick:this.deletePostHandler,className:"Delete"},"Mark Position as Filled")))}}]),t}(n.Component),U=a(23),Z=a.n(U),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={users:[]},!1===a.props.loggedIn&&a.props.history.push("/"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("http://localhost:3000/users").then((function(t){console.log(t.data),e.setState({users:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Users Applied")),l.a.createElement("div",{className:Z.a.applicants},l.a.createElement("table",{className:Z.a.applicants},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,this.state.users.map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{className:Z.a.applicantcolumn},e.full_name),l.a.createElement("td",{className:Z.a.applicantcolumn},e.phone_no),l.a.createElement("td",{className:Z.a.applicantcolumn},e.email))}))))))}}]),t}(n.Component),q=a(44),z=a.n(q),Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={company_name:"",role:"",location:"",salary:"",description:""},a.submitHandler=function(e){e.preventDefault(),_.a.post("http://localhost:3000/jobs",{token:localStorage.getItem("jwt"),job:{company_name:a.state.company_name,role:a.state.role,location:a.state.location,salary:a.state.salary,description:a.state.description}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.inputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.setState(Object(E.a)({},a.state,Object(g.a)({},e.target.name,t)))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:z.a.container},l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("input",{type:"text",placeholder:"Your Company Name...",name:"company_name",onChange:this.inputChangeHandler}),l.a.createElement("input",{type:"text",placeholder:"Role...",name:"role",onChange:this.inputChangeHandler}),l.a.createElement("input",{type:"text",placeholder:"Location...",name:"location",onChange:this.inputChangeHandler}),l.a.createElement("input",{type:"text",placeholder:"Salary...",name:"salary",onChange:this.inputChangeHandler}),l.a.createElement("textarea",{type:"text",placeholder:"Description...",name:"description",onChange:this.inputChangeHandler}),l.a.createElement("button",{type:"submit"},"Create Job")))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loggedin:!1,userType:""},a.setLoginStatus=function(e){a.setState({loggedin:e})},a.performLogout=function(){a.setState({loggedin:!1}),localStorage.removeItem("jwt"),localStorage.removeItem("usrType"),window.location.replace("/")},a.setType=function(e){a.setState({userType:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("jwt")&&this.setState({loggedin:!0})}},{key:"render",value:function(){var e=this;return(l.a.createElement(b.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(w.a,{path:"/",render:function(t){return l.a.createElement(h,Object.assign({},t,{loggedin:e.state.loggedin,onLogout:e.performLogout}))}}),l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/",exact:!0,render:function(t){return l.a.createElement(N,Object.assign({},t,{loggedin:e.state.loggedin,onLogin:e.setLoginStatus}))}}),l.a.createElement(w.a,{path:"/jobboard",exact:!0,render:function(t){return l.a.createElement(D,Object.assign({loggedIn:e.state.loggedin},t))}}),l.a.createElement(w.a,{path:"/job/create",exact:!0,render:function(e){return l.a.createElement(Q,e)}}),l.a.createElement(w.a,{path:"/job/:id",exact:!0,render:function(e){return l.a.createElement(T,e)}}),l.a.createElement(w.a,{path:"/applications",exact:!0,component:G}),l.a.createElement(w.a,{path:"/empjob/:id",exact:!0,component:Y}),l.a.createElement(w.a,{path:"/register",exact:!0,render:function(t){return l.a.createElement(k,Object.assign({},t,{onLogin:e.setLoginStatus}))}}),l.a.createElement(w.a,{path:"/jobseeker",exact:!0,render:function(e){return l.a.createElement(P,e)}}),l.a.createElement(w.a,{path:"/employer",exact:!0,render:function(e){return l.a.createElement(H,e)}}),l.a.createElement(w.a,{path:"/profile",exact:!0,component:B})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f5d83cbe.chunk.js.map