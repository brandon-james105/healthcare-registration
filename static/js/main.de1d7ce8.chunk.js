(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(86)},19:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(12),r=t.n(s),i=(t(19),t(5)),m=t(6),o=t(8),c=t(7),u=t(4),h=t(9),d=t(3),f=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(c.a)(a).call(this))).props={animating:!1},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("svg",{className:this.props.animating?"checkmark animating":"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},l.a.createElement("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),l.a.createElement("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}))}}]),a}(l.a.Component),b=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(c.a)(a).call(this))).state={fields:{},errors:{},submissionSuccessful:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.submitHealthRegistrationForm=e.submitHealthRegistrationForm.bind(Object(u.a)(e)),e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(window.sessionStorage.getItem("formContent"));e&&this.setState(e)}},{key:"luhnValidate",value:function(e){var a,t,n,l;if(15===(n=e.length)&&0===e.indexOf("80840",0,5))t=0;else{if(10!==n)return!1;t=24}for(l=0;0!==n;)a=e.charCodeAt(n-1)-"0".charCodeAt(0),l++%2!==0&&(a<<=1)>9&&(a-=10,a++),t+=a,n--;return t%10===0}},{key:"handleChange",value:function(e){var a=this.state.fields;a[e.target.name]=e.target.value,this.setState({fields:a});var t={fields:a};window.sessionStorage.setItem("formContent",JSON.stringify(t))}},{key:"submitHealthRegistrationForm",value:function(e){if(e.preventDefault(),this.validateForm()){this.setState({submissionSuccessful:!0,fields:{fullName:"",npiNumber:"",businessAddress:"",phoneNumber:"",email:"",emailConfirm:""}})}}},{key:"validateForm",value:function(){var e=this.state.fields,a={},t=!0;if(e.fullName||(t=!1,a.fullName="Please enter your full name."),e.email||(t=!1,a.email="Please enter your email address."),e.businessAddress||(t=!1,a.businessAddress="Please enter your business address."),"undefined"!==typeof e.email){var n=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);n.test(e.email)||(t=!1,a.email="Please enter a valid email."),n.test(e.emailConfirm)||(t=!1,a.emailConfirm="Please enter a valid email."),e.email!==e.emailConfirm&&(a.emailConfirm="This email does not match.")}return e.npiNumber||(t=!1,a.npiNumber="Please enter your NPI Number."),"undefined"!==typeof e.npiNumber&&(this.luhnValidate(e.npiNumber)||(t=!1,a.npiNumber="Please enter a valid NPI number.")),e.phoneNumber||(t=!1,a.phoneNumber="Please enter your phone number."),"undefined"!==typeof e.phoneNumber&&(e.phoneNumber.match(/^[0-9]{10}$/)||(t=!1,a.phoneNumber="Please enter a valid phone number.")),this.setState({errors:a}),window.sessionStorage.setItem("formContent","{}"),t}},{key:"render",value:function(){return l.a.createElement(d.Section,null,l.a.createElement(d.Container,{id:"register"},l.a.createElement("div",{className:this.state.submissionSuccessful?"submission-overlay is-overlay":"is-hidden"},l.a.createElement(f,{animating:this.state.submissionSuccessful}),l.a.createElement("p",{className:"has-text-centered"},"Your information was successfully submitted. You will receive an email shortly with confirmation.")),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-third is-fullheight"},l.a.createElement("div",{className:"form-accent is-fullheight"})),l.a.createElement("div",{className:"column is-two-thirds"},l.a.createElement("div",{className:"columns"},l.a.createElement("form",{className:"column is-half is-offset-one-quarter",method:"post",onSubmit:this.submitHealthRegistrationForm},l.a.createElement(d.Section,null,l.a.createElement(d.Field,null,l.a.createElement("label",{className:"label has-text-left",htmlFor:"email"},"Email"),l.a.createElement(d.Control,null,l.a.createElement(d.Input,{id:"email",name:"email",type:"email",placeholder:"Email",value:this.state.fields.email||"",onChange:this.handleChange}),l.a.createElement("p",{className:"has-text-danger",hidden:!this.state.errors.email},this.state.errors.email))),l.a.createElement(d.Field,null,l.a.createElement("label",{className:"label has-text-left",htmlFor:"email-confirm"},"Email (confirm)"),l.a.createElement(d.Control,null,l.a.createElement(d.Input,{id:"email-confirm",name:"emailConfirm",type:"email",placeholder:"Email (confirm)",value:this.state.fields.emailConfirm||"",onChange:this.handleChange}),l.a.createElement("p",{className:"has-text-danger",hidden:!this.state.errors.emailConfirm},this.state.errors.emailConfirm))),l.a.createElement(d.Field,null,l.a.createElement("label",{className:"label has-text-left",htmlFor:"full-name"},"Full Name"),l.a.createElement(d.Control,null,l.a.createElement(d.Input,{id:"full-name",name:"fullName",placeholder:"Full Name",value:this.state.fields.fullName||"",onChange:this.handleChange}),l.a.createElement("p",{className:"has-text-danger",hidden:!this.state.errors.fullName},this.state.errors.fullName))),l.a.createElement(d.Field,null,l.a.createElement("label",{className:"label has-text-left",htmlFor:"npi-number"},"NPI Number"),l.a.createElement(d.Control,null,l.a.createElement(d.Input,{id:"npi-number",name:"npiNumber",placeholder:"NPI Number",value:this.state.fields.npiNumber||"",onChange:this.handleChange}),l.a.createElement("p",{className:"has-text-danger",hidden:!this.state.errors.npiNumber},this.state.errors.npiNumber))),l.a.createElement(d.Field,null,l.a.createElement("label",{className:"label has-text-left",htmlFor:"business-address"},"Business Address"),l.a.createElement(d.Control,null,l.a.createElement(d.Input,{id:"business-address",name:"businessAddress",placeholder:"Business Address",value:this.state.fields.businessAddress||"",onChange:this.handleChange}),l.a.createElement("p",{className:"has-text-danger",hidden:!this.state.errors.businessAddress},this.state.errors.businessAddress))),l.a.createElement(d.Field,null,l.a.createElement("label",{className:"label has-text-left",htmlFor:"telephone-number"},"Telephone Number"),l.a.createElement(d.Control,null,l.a.createElement(d.Input,{id:"telephone-number",name:"phoneNumber",placeholder:"Telephone Number",value:this.state.fields.phoneNumber||"",onChange:this.handleChange}),l.a.createElement("p",{className:"has-text-danger",hidden:!this.state.errors.phoneNumber},this.state.errors.phoneNumber))),l.a.createElement(d.Control,null,l.a.createElement(d.Button,{type:"submit",className:"bg-orange has-text-white"},"Submit")))))))))}}]),a}(l.a.Component);t(85);var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.Section,null,l.a.createElement(d.Hero,null,l.a.createElement(d.Hero.Body,{className:"is-paddingless"},l.a.createElement(d.Container,null,l.a.createElement(d.Title,{className:"is-bolder"},"Register your healthcare provider"),l.a.createElement(d.SubTitle,null,"Please complete this form with accurate information"))))),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.de1d7ce8.chunk.js.map