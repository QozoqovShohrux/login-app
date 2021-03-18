import Form from "./form";
 export default class Login extends Form {

         state  = {
          data : {
           username : "",
           password : "",
           email : "",
           phone  : ""
          },
          errors : {}
         }
         doSubmit =() => {
           console.log("Success Operation Login .....");
         }
   render() {

     return (
       <div>
         <div className="container">
           <div className="row  ">
             <div className="col">
               <form onSubmit={this.handleSubmit}>
                 <this.renderInput name="username" label="Username" />
                 <this.renderInput name="email" label="Email" />
                 <this.renderInput name="password" label="Password" />
                 <this.renderSubmit label="Login"/>
               </form>
             </div>
           </div>
         </div>
       </div>
     );
   }
 }
