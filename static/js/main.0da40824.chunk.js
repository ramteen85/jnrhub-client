(this["webpackJsonpjnrhub-client"]=this["webpackJsonpjnrhub-client"]||[]).push([[0],{1:function(e,t,a){e.exports={error:"Register_error__3iNrZ",normal:"Register_normal__NsiiA",container:"Register_container__XWZSX",registerform:"Register_registerform__3_6fP",subtitle:"Register_subtitle__1fPGk",employer:"Register_employer__3s608",jobseeker:"Register_jobseeker__ZDtKg",regForm:"Register_regForm__1dj3R",button:"Register_button__1QxNe",errorMsg:"Register_errorMsg__1BQ8z",hidden:"Register_hidden__31VlX"}},11:function(e,t,a){e.exports={edit:"Profile_edit__1XuA8",profileItem:"Profile_profileItem__3tf2l",profileStyle:"Profile_profileStyle__165-z"}},17:function(e,t,a){e.exports={container:"Lobbyemp_container__38x5n",mainheader:"Lobbyemp_mainheader__jcTZ_",jobboard:"Lobbyemp_jobboard__2Eoik",jobcolumn:"Lobbyemp_jobcolumn__3kQZ-",job:"Lobbyemp_job__2xuOf",button:"Lobbyemp_button__LlJQD"}},18:function(e,t,a){e.exports={container:"Jobboard_container__3fMoF",mainheader:"Jobboard_mainheader__UH6bs",jobboard:"Jobboard_jobboard__38Cl-",jobcolumn:"Jobboard_jobcolumn__3I2O4",job:"Jobboard_job__2KBXq",btnwrap:"Jobboard_btnwrap__3yPuT",button:"Jobboard_button__1sZnx"}},19:function(e,t,a){e.exports={applicants:"Applications_applicants__GYvSP",heading:"Applications_heading__2-YQ3",displaynone:"Applications_displaynone__-RocP"}},23:function(e,t,a){e.exports={mainnav:"Navbar_mainnav__x2RPw",brand:"Navbar_brand__3RPLy",inline:"Navbar_inline__1C7gR",oddOneOut:"Navbar_oddOneOut__2jqd_"}},24:function(e,t,a){e.exports={container:"Login_container__1Oz4Y",invalidLogin:"Login_invalidLogin__3A8k2",loginform:"Login_loginform__pbWFT",loginregisterbutton:"Login_loginregisterbutton__2gCwq"}},29:function(e,t,a){e.exports={container:"Job_container__3KANX",apply:"Job_apply__XIGY-"}},30:function(e,t,a){e.exports={container:"Empjob_container__3cKp0",apply:"Empjob_apply__3Xv5d"}},31:function(e,t,a){e.exports={container:"CreateJob_container__3E3iH",botton:"CreateJob_botton__3usY0"}},45:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(42),o=a.n(l),s=(a(50),a(2)),i=a(3),c=a(5),m=a(4),u=a(6),p=(a(51),a(23)),h=a.n(p),d=a(10),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedin:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:h.a.navwrapper},r.a.createElement("nav",{className:h.a.mainnav},r.a.createElement("p",{className:h.a.brand},"<Jnr/Hub>"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")),this.props.loggedin?r.a.createElement("div",{className:h.a.inline},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/jobboard"},"Job Board")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:h.a.oddOneOut,to:"/logout",onClick:function(){return e.props.onLogout()}},"Logout"))):r.a.createElement("li",null," ",r.a.createElement(d.b,{to:"/register"},"Register")))))}}]),t}(n.Component),g=a(9),E=a(15),f=a(24),j=a.n(f),v=a(7),_=a.n(v),y=a(20),w=a.n(y),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",invalidLogin:!1},a.loginHandler=function(e){e.preventDefault(),_.a.post("https://whispering-chamber-55079.herokuapp.com/tokens",{email:a.state.username,password:a.state.password}).then((function(e){console.log(e),localStorage.setItem("jwt",e.data.jwt);var t=w()(localStorage.getItem("jwt"));localStorage.setItem("usrType",t.userType),a.props.onLogin(!0),"jobseeker"===t.userType?a.props.history.push("/jobseeker"):"employer"===t.userType&&a.props.history.push("/employer")})).catch((function(e){a.setState({invalidLogin:!0})}))},a.inputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.setState(Object(E.a)({},a.state,Object(g.a)({},e.target.name,t)))},a.props.loggedin&&(console.log(a.props),console.log(a.props.usrType),a.props.history.push("/"+localStorage.getItem("usrType"))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:j.a.container},r.a.createElement("div",{className:j.a.loginform},r.a.createElement("h2",null,"Log In"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.loginHandler},r.a.createElement("input",{type:"text",name:"username",onChange:this.inputChangeHandler,placeholder:"Username.."}),r.a.createElement("input",{type:"password",name:"password",onChange:this.inputChangeHandler,placeholder:"Password.."}),r.a.createElement("button",{className:j.a.loginregisterbutton,type:"submit"},"Login"),r.a.createElement("br",null),r.a.createElement("button",{className:j.a.button},r.a.createElement("a",{href:"/jnrhub-client/#/register"},"Register"))),this.state.invalidLogin?r.a.createElement("div",{className:j.a.invalidLogin},"Invalid Login"):""))}}]),t}(n.Component),O=a(21),I=a(1),S=a.n(I),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={submitted:!1,emailError:S.a.errorMsg,emailInvalid:"",fullnameInvalid:"",phoneInvalid:"",suburbInvalid:"",stateInvalid:"",countryInvalid:"",aboutInvalid:"",passwordInvalid:""},a.memberHandler=function(e,t){_.a.post("https://whispering-chamber-55079.herokuapp.com/users",{user:{email:a.state.email,full_name:a.state.fullname,phone_no:a.state.phone,suburb:a.state.suburb,state:a.state.state,country:a.state.country,website:a.state.website,about:a.state.about,user_type:t,admin:!1,password:a.state.password,password_confirmation:a.state.confirm_password}}).then((function(e){console.log(e.data.jwt),localStorage.setItem("jwt",e.data.jwt),a.props.onLogin(!0);var t=w()(localStorage.getItem("jwt"));console.log(t),localStorage.setItem("usrType",t.userType),a.props.history.push("/".concat(localStorage.getItem("usrType")))})).catch((function(e){console.log(e)}))},a.inputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.setState(Object(E.a)({},a.state,Object(g.a)({},e.target.name,t)));var n=!0;n=a.validateLive(n,e)},a.validateLive=function(e,t){return""===t.target.value?(a.setState(Object(g.a)({},t.target.name+"Invalid",S.a.error)),e=!1):a.setState(Object(g.a)({},t.target.name+"Invalid",S.a.normal)),e},a.validate=function(e,t){return""===t.target.email.value?(a.setState({emailInvalid:S.a.error}),a.setState({emailError:S.a.errorMsg}),e=!1):(a.setState({emailInvalid:S.a.normal}),a.setState({emailError:S.a.hidden})),""===t.target.fullname.value?(a.setState({fullnameInvalid:S.a.error}),a.setState({fullnameError:S.a.errorMsg}),e=!1):(a.setState({fullnameInvalid:S.a.normal}),a.setState({fullnameError:S.a.hidden})),""===t.target.phone.value?(a.setState({phoneInvalid:S.a.error}),e=!1):a.setState({phoneInvalid:S.a.normal}),""===t.target.suburb.value?(a.setState({suburbInvalid:S.a.error}),e=!1):a.setState({suburbInvalid:S.a.normal}),""===t.target.state.value?(a.setState({stateInvalid:S.a.error}),e=!1):a.setState({stateInvalid:S.a.normal}),""===t.target.country.value?(a.setState({countryInvalid:S.a.error}),e=!1):a.setState({countryInvalid:S.a.normal}),""===t.target.about.value?(a.setState({aboutInvalid:S.a.error}),e=!1):a.setState({aboutInvalid:S.a.normal}),""===t.target.password.value||t.target.password.value!==t.target.confirm_password.value?(a.setState({passwordInvalid:S.a.error}),e=!1):a.setState({passwordInvalid:S.a.normal}),""===t.target.confirm_password.value||t.target.password.value!==t.target.confirm_password.value?(a.setState({confirmPasswordInvalid:S.a.error}),e=!1):a.setState({confirmPasswordInvalid:S.a.normal}),e},a.handleSubmit=function(e){e.preventDefault();var t=!0;(t=a.validate(t,e))&&a.setState({submitted:!0})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:S.a.container},!1===this.state.submitted?r.a.createElement("div",{className:S.a.registerform},r.a.createElement("div",{className:S.a.regForm},r.a.createElement("h2",null,"Register Now"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.inputChangeHandler,type:"email",placeholder:"Your Email",name:"email",id:"email",className:this.state.emailInvalid}),this.state.emailInvalid.startsWith("Register_error")?r.a.createElement("label",{className:this.state.emailError},"Please enter your email"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Your Full Name",name:"fullname",id:"fullname",className:this.state.fullnameInvalid}),this.state.fullnameInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter your name"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Phone Number",name:"phone",id:"phone",className:this.state.phoneInvalid}),this.state.phoneInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter your number"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Suburb",name:"suburb",id:"suburb",className:this.state.suburbInvalid}),this.state.suburbInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter your suburb"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"State",name:"state",id:"state",className:this.state.stateInvalid}),this.state.stateInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter your state"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Country",name:"country",id:"country",className:this.state.countryInvalid}),this.state.countryInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter your Country"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"text",placeholder:"Website URL (optional)",name:"website",id:"website"}),r.a.createElement("textarea",{onChange:this.inputChangeHandler,cols:"30",rows:"5",placeholder:"Please tell us about yourself...",name:"about",id:"about",className:this.state.aboutInvalid}),this.state.aboutInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter your about information!"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"password",placeholder:"Your Password",name:"password",id:"password",className:this.state.passwordInvalid}),this.state.passwordInvalid.startsWith("Register_error")?r.a.createElement("label",{className:S.a.errorMsg},"Please enter a valid password"):"",r.a.createElement("input",{onChange:this.inputChangeHandler,type:"password",placeholder:"Confirm Password",name:"confirm_password",id:"confirm_password",className:this.state.confirmPasswordInvalid}),this.state.password!==this.state.confirm_password&&this.state.password&&this.state.confirm_password?r.a.createElement("label",{className:S.a.errorMsg},"Passwords must match!"):"",r.a.createElement("button",{type:"submit",className:S.a.loginregisterbutton},"Create Account")))):r.a.createElement("div",null,r.a.createElement("h2",{className:S.a.subtitle},"Are you:"),r.a.createElement("div",{className:S.a.container},r.a.createElement("div",{className:S.a.employer,onClick:function(t){return e.memberHandler(t,"employer")}},r.a.createElement("label",null,"An Employer"),r.a.createElement("img",{src:"/assets/img/boss.jpeg",alt:"Big Boss"})),r.a.createElement("div",{className:S.a.jobseeker,onClick:function(t){return e.memberHandler(t,"jobseeker")}},r.a.createElement("label",null,"A Job Seeker"),r.a.createElement("img",{src:"/assets/img/bludger.jpg",alt:"Bludging Job Seeker"})))))}}]),t}(n.Component),C=Object(O.f)(k),x=a(17),L=a.n(x),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={jobs:[]},!1===a.props.loggedIn&&a.props.history.push("/"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.post("https://whispering-chamber-55079.herokuapp.com/myjobs",{token:localStorage.getItem("jwt")}).then((function(t){console.log(t.data),e.setState({token:localStorage.getItem("jwt"),jobs:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:L.a.container},r.a.createElement("div",{className:L.a.mainheader},r.a.createElement("h1",null,"Jobs Posted")),r.a.createElement("table",{className:L.a.jobboard},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Role"),r.a.createElement("th",null,"Applications"))),r.a.createElement("tbody",null,this.state.jobs.slice(0).map((function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:L.a.jobcolumn},e.company_name),r.a.createElement("td",{className:L.a.jobcolumn},e.location),r.a.createElement("td",{className:L.a.jobcolumn},e.role),r.a.createElement("td",{className:L.a.jobcolumn},e.applicants),r.a.createElement("td",{className:L.a.jobcolumn},r.a.createElement(d.b,{to:"/empjob/".concat(e.id)},"Details")))})))),"jobseeker"!==localStorage.getItem("usrType")?r.a.createElement("button",{className:L.a.button},r.a.createElement(d.b,{to:"/job/create"},"Create  Job")):"")}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={profile:{jobs:[]}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.post("https://whispering-chamber-55079.herokuapp.com/users/profile",{token:localStorage.getItem("jwt")}).then((function(t){e.setState({profile:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome, ",this.state.profile.full_name))}}]),t}(n.Component),R=a(18),A=a.n(R),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={jobs:[]},!1===a.props.loggedIn&&a.props.history.push("/"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("https://whispering-chamber-55079.herokuapp.com/jobs").then((function(t){console.log(t.data),e.setState({jobs:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:A.a.container},r.a.createElement("div",{className:A.a.mainheader},r.a.createElement("h1",null,"Available Jobs")),r.a.createElement("table",{className:A.a.jobboard},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Role"))),r.a.createElement("tbody",null,this.state.jobs.map((function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:A.a.jobcolumn},e.company_name),r.a.createElement("td",{className:A.a.jobcolumn},e.location),r.a.createElement("td",{className:A.a.jobcolumn},e.role),"jobseeker"===localStorage.getItem("usrType")?r.a.createElement("td",{className:A.a.jobcolumn},r.a.createElement(d.b,{to:"/job/".concat(e.id)},"Details")):r.a.createElement("td",{className:A.a.jobcolumn},r.a.createElement(d.b,{to:"/empjob/".concat(e.id)},"Details")))})))))}}]),t}(n.Component),J=a(29),M=a.n(J),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={profileId:-1,job:""},a.applyForJob=function(){_.a.post("https://whispering-chamber-55079.herokuapp.com/applications",{token:localStorage.getItem("jwt"),job_id:a.props.match.params.id}).then((function(e){console.log(e.data),alert("Application sent to ".concat(a.state.job.company_name)),a.props.history.push("/")})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id?_.a.get("https://whispering-chamber-55079.herokuapp.com/jobs/".concat(this.props.match.params.id)).then((function(t){console.log(t),e.setState({profileId:e.props.match.params.id,job:t.data})})).catch((function(e){return console.log(e)})):this.props.history.push("/jobboard")}},{key:"render",value:function(){return r.a.createElement("div",{className:M.a.container},r.a.createElement("h1",null,this.state.job.role),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Company:"),r.a.createElement("br",null),r.a.createElement("br",null),this.state.job.company_name),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Location:"),r.a.createElement("br",null),r.a.createElement("br",null)," ",this.state.job.location),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Salary:"),r.a.createElement("br",null),r.a.createElement("br",null)," $",this.state.job.salary),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Job Description:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),this.state.job.description),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{className:M.a.apply},r.a.createElement("a",{onClick:this.applyForJob},"Apply Now!")))}}]),t}(n.Component),T=a(11),W=a.n(T),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={editing:{full_name:!1,full_nameError:[],phone_no:!1,phone_noError:[],suburb:!1,suburb_error:[],state:!1,state_error:[],website:!1,website_error:[]},profile:{jobs:[]}},a.editField=function(e){console.log("editing!",e.target.name),a.setState({editing:Object(g.a)({},e.target.name,!0)})},a.updateField=function(e){console.log(e.target.value);var t=e.target.name;if("Enter"===e.key){var n=localStorage.getItem("jwt");_.a.post("http://localhost:3000/users/update",{user:Object(g.a)({},t,e.target.value),token:n}).then((function(e){var n;(console.log(e.data),e.data.error)?a.setState({editing:Object(E.a)({},a.state.editing,(n={},Object(g.a)(n,t,!1),Object(g.a)(n,t+"Error",e.data.error),n))}):a.setState({profile:Object(E.a)({},a.state.profile,Object(g.a)({},t,e.data.user[t])),editing:Object(g.a)({},t,!1)})})).catch((function(e){console.log("error",e)})),console.log("SUBMIT!",a.state.profile.id)}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("token"),console.log(localStorage.getItem("jwt")),_.a.post("http://localhost:3000/users/profile",{token:localStorage.getItem("jwt")}).then((function(t){console.log(t.data),e.setState({profile:t.data})})).catch((function(e){console.log("error",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile"),r.a.createElement("div",{className:W.a.profileStyle},r.a.createElement("p",{className:W.a.profileItem},"Full name:\xa0",this.state.editing.full_name?r.a.createElement("input",{type:"text",name:"full_name",defaultValue:this.state.profile.full_name,onKeyDown:this.updateField}):r.a.createElement("span",null,this.state.profile.full_name,r.a.createElement("img",{onClick:this.editField,name:"full_name",src:"/jnrhub-client/assets/img/edit-icon.png",className:W.a.edit}))),r.a.createElement("p",{className:W.a.profileItem},"Phone Number:\xa0",this.state.editing.phone_no?r.a.createElement("input",{type:"text",name:"phone_no",defaultValue:this.state.profile.phone_no,onKeyDown:this.updateField}):r.a.createElement("span",null,this.state.profile.phone_no,r.a.createElement("img",{onClick:this.editField,name:"phone_no",src:"/jnrhub-client/assets/img/edit-icon.png",className:W.a.edit}))),r.a.createElement("p",{className:W.a.profileItem},"Email: ",this.state.profile.email," "),r.a.createElement("p",{className:W.a.profileItem},this.state.editing.suburb?r.a.createElement("input",{type:"text",name:"suburb",defaultValue:this.state.profile.suburb,onKeyDown:this.updateField}):r.a.createElement("span",null,this.state.profile.suburb,r.a.createElement("img",{onClick:this.editField,name:"suburb",src:"/jnrhub-client/assets/img/edit-icon.png",className:W.a.edit}))),r.a.createElement("p",{className:W.a.profileItem},this.state.editing.state?r.a.createElement("input",{type:"text",name:"state",defaultValue:this.state.profile.state,onKeyDown:this.updateField}):r.a.createElement("span",null,this.state.profile.state,r.a.createElement("img",{onClick:this.editField,name:"state",src:"/jnrhub-client/assets/img/edit-icon.png",className:W.a.edit}))),r.a.createElement("p",{className:W.a.profileItem},this.state.editing.website?r.a.createElement("input",{type:"text",name:"website",defaultValue:this.state.profile.website,onKeyDown:this.updateField}):r.a.createElement("span",null,this.state.profile.website,r.a.createElement("img",{onClick:this.editField,name:"website",src:"/jnrhub-client/assets/img/edit-icon.png",className:W.a.edit}))),r.a.createElement("p",{className:W.a.profileItem},"Account Type: ",this.state.profile.user_type," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),B=a(30),K=a.n(B),X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={role:"",job:-1,result:""},a.deletePostHandler=function(){_.a.delete("https://whispering-chamber-55079.herokuapp.com/jobs/".concat(a.props.match.params.id)).then((function(e){a.props.history.push("/")}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({result:w()(localStorage.getItem("jwt"))}),_.a.get("https://whispering-chamber-55079.herokuapp.com/jobs/".concat(this.props.match.params.id)).then((function(t){e.setState(Object(E.a)({},e.state,{job:t.data})),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:K.a.container},r.a.createElement("h1",null,this.state.job.role),r.a.createElement("p",null,r.a.createElement("strong",null,"Company:"),this.state.job.company_name),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Role:")," ",this.state.job.role),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Location:")," ",this.state.job.location),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Salary:")," $",this.state.job.salary),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Job Description:"),this.state.job.description),r.a.createElement("hr",null),r.a.createElement("hr",null),this.state.job.user_id===this.state.result.id?r.a.createElement("div",{className:K.a.apply},r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement(d.b,{to:"/applications/".concat(this.state.job.id)},"View Applicants")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.deletePostHandler,className:"Delete"},"Mark Position as Filled")):"")}}]),t}(n.Component),V=a(19),Z=a.n(V),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={users:[]},!1===a.props.loggedIn&&a.props.history.push("/"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.post("https://whispering-chamber-55079.herokuapp.com/job-applicants",{token:localStorage.getItem("jwt"),job_id:this.props.match.params.id}).then((function(t){console.log(t.data),e.setState({users:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:Z.a.heading},"Users Applied")),r.a.createElement("div",{className:Z.a.applicants},0!==this.state.users.length?r.a.createElement("table",{className:Z.a.applicants},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Phone Number"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,r.a.createElement("tr",null," ",r.a.createElement("td",null,r.a.createElement("span",{className:Z.a.displaynone},"invisible"))," "),this.state.users.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:Z.a.applicantcolumn},e.name),r.a.createElement("td",{className:Z.a.applicantcolumn},e.phone_no),r.a.createElement("td",{className:Z.a.applicantcolumn},e.email))})))):r.a.createElement("table",{className:Z.a.applicants},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"No Applicants Yet"))))))}}]),t}(n.Component),U=a(31),q=a.n(U),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={company_name:"",role:"",location:"",salary:"",description:""},a.submitHandler=function(e){e.preventDefault(),_.a.post("https://whispering-chamber-55079.herokuapp.com/jobs",{token:localStorage.getItem("jwt"),job:{company_name:a.state.company_name,role:a.state.role,location:a.state.location,salary:a.state.salary,description:a.state.description}}).then((function(e){console.log(e),a.props.history.push("/jobboard")})).catch((function(e){console.log(e)}))},a.inputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.setState(Object(E.a)({},a.state,Object(g.a)({},e.target.name,t)))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:q.a.container},r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{type:"text",placeholder:"Your Company Name...",name:"company_name",onChange:this.inputChangeHandler}),r.a.createElement("input",{type:"text",placeholder:"Role...",name:"role",onChange:this.inputChangeHandler}),r.a.createElement("input",{type:"text",placeholder:"Location...",name:"location",onChange:this.inputChangeHandler}),r.a.createElement("input",{type:"text",placeholder:"Salary...",name:"salary",onChange:this.inputChangeHandler}),r.a.createElement("textarea",{type:"text",placeholder:"Description...",name:"description",onChange:this.inputChangeHandler}),r.a.createElement("button",{type:"submit"},"Create Job ")," ",r.a.createElement("div",{className:q.a.button}," ")))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedin:!1,userType:""},a.setLoginStatus=function(e){a.setState({loggedin:e})},a.performLogout=function(){a.setState({loggedin:!1}),localStorage.removeItem("jwt"),localStorage.removeItem("usrType"),window.location.replace("/jnrhub-client")},a.setType=function(e){a.setState({userType:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("jwt")&&this.setState({loggedin:!0})}},{key:"render",value:function(){var e=this;return(r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{path:"/",render:function(t){return r.a.createElement(b,Object.assign({},t,{loggedin:e.state.loggedin,onLogout:e.performLogout}))}}),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(N,Object.assign({},t,{loggedin:e.state.loggedin,onLogin:e.setLoginStatus}))}}),r.a.createElement(O.a,{path:"/jobboard",exact:!0,render:function(t){return r.a.createElement(D,Object.assign({loggedIn:e.state.loggedin},t))}}),r.a.createElement(O.a,{path:"/job/create",exact:!0,render:function(e){return r.a.createElement(z,e)}}),r.a.createElement(O.a,{path:"/job/:id",exact:!0,render:function(e){return r.a.createElement(F,e)}}),r.a.createElement(O.a,{path:"/applications/:id",exact:!0,component:Q}),r.a.createElement(O.a,{path:"/empjob/:id",exact:!0,component:X}),r.a.createElement(O.a,{path:"/register",exact:!0,render:function(t){return r.a.createElement(C,Object.assign({},t,{onLogin:e.setLoginStatus}))}}),r.a.createElement(O.a,{path:"/jobseeker",exact:!0,render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(O.a,{path:"/employer",exact:!0,render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(O.a,{path:"/profile",exact:!0,component:Y})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0da40824.chunk.js.map