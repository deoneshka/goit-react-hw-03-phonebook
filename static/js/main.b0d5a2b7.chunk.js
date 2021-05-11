(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"FilterContacts_label__13H0c",input:"FilterContacts_input__3TNr_"}},13:function(t,e,n){t.exports={container:"Container_container__2g0RF"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1hfuF",field:"ContactForm_field__1Agu0",input:"ContactForm_input__3lnsB",button:"ContactForm_button__3s7Ik"}},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(14),s=n(4),u=n(5),l=n(7),m=n(6),b=n(12),d=n.n(b),h=n(13),f=n.n(h),j=n(0),p=function(t){var e=t.children;return Object(j.jsx)("div",{className:f.a.container,children:e})},C=n(2),O=n.n(C),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t.handleChangeName=function(e){t.setState({name:e.currentTarget.value})},t.handleChangeNumber=function(e){t.setState({number:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:O.a.field,children:"Name"}),Object(j.jsx)("input",{className:O.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChangeName}),Object(j.jsx)("label",{className:O.a.field,children:"Number"}),Object(j.jsx)("input",{className:O.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChangeNumber}),Object(j.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(8),g=n.n(_),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:g.a.item,children:[a,": ",c,Object(j.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},N=n(10),S=n.n(N),y=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:S.a.input,type:"text",value:e,onChange:n})]})},k=(n(28),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts."));else{var a={id:d.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter;return Object(j.jsxs)(p,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(v,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(y,{value:t,onChange:this.changeFilter}),Object(j.jsx)(x,{contacts:this.getVisibleContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={item:"ContactList_item__26tKk",list:"ContactList_list__U8x2O",button:"ContactList_button__3Cr-V"}}},[[29,1,2]]]);
//# sourceMappingURL=main.b0d5a2b7.chunk.js.map