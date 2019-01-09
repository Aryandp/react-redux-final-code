import React, { Component } from 'react';
import  './css/contact.css';
class ContactForm extends Component{
constructor() {
     super();
     this.state = {
       fields: {},
       errors: {}
     }

    // this.handleChange = this.handleChange.bind(this);
    // this.submitForm = this.submitForm.bind(this);

   };

   handleChange=(e)=> {
     let fields = this.state.fields;
     fields[e.target.name] = e.target.value;
     this.setState({
       fields
     });

   }

   submitForm=(e)=> {
     e.preventDefault();
     if (this.validateForm()) {
         let fields = {};
         fields["name"] = "";
         fields["email"] = "";
         fields["phone"] = "";
         fields["msg"] = "";

         this.setState({fields:fields});
         console.log(this.state.fields);
     }

   }

   validateForm() {

     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

     if (!fields["name"]) {
       formIsValid = false;
       errors["name"] = "*Please Enter your name.";
     }



     if (!fields["email"]) {
       formIsValid = false;
       errors["email"] = "*Please Enter your email-ID.";
     }

     if (typeof fields["email"] !== "undefined") {
       //regular expression for email validation
       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       if (!pattern.test(fields["email"])) {
         formIsValid = false;
         errors["email"] = "*Please enter valid email-ID.";
       }
     }

     if (!fields["phone"]) {
       formIsValid = false;
       errors["phone"] = "*Please enter your phone no.";
     }

     if (typeof fields["phone"] !== "undefined") {
       if (!fields["phone"].match(/^[0-9]{10}$/)) {
         formIsValid = false;
         errors["phone"] = "*Please enter valid phone no.";
       }
     }




     this.setState({
       errors: errors
     });
     return formIsValid;


   }



 render() {

   return (
     <div>

     <div className="container" >
    <div id="register">
       <h2>Contact Form</h2>
       <form method="post"  name="myForm"  onSubmit= {this.submitForm} >
       <label>Name<p className="req">*</p></label>
       <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
       <div className="errorMsg">{this.state.errors.name}</div>
       <label>Email<p className="req">*</p> </label>
       <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
       <div className="errorMsg">{this.state.errors.email}</div>
       <label>Mobile No<p className="req">*</p></label>
       <input type="text" name="phone" value={this.state.fields.phone} onChange={this.handleChange}   />
       <div className="errorMsg">{this.state.errors.phone}</div>
       <label>Message</label>
         <textarea type="text" name="msg" placeholder="Write something.." style={{height:'200px'}} value={this.state.fields.msg} onChange={this.handleChange}></textarea>
       <input type="submit" className="button"  value="submit"/>
       </form>
   </div>

</div>
</div>
     );
 }


}


export default ContactForm;
