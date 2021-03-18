import React, { Component } from 'react';
import Input from './input';

class Form extends Component {
   state = {
    data : {},
    errors : {}
   }
 validate =()=> {
  const errors = {};
  const {username, password, email} = this.state.data;
  if(username.length < 8) errors.username = "Kamida 8 ta belgidan iborat bolishi kerak";
  if(username.trim() === "") errors.username = "Username kiritilmagan";
  if(email.trim() === "") errors.email = "Email kiritilmagan oka";
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) errors.email = "Siz emailni xato kiritayapsiz !";
  if(password.length < 8 ) errors.password = "Kamida 8 ta belgidan iborat bolishi kerak"; 
  if(password.length > 16 ) errors.password = "Kopida 16 ta belgidan iborat bolishi kerak"; 
  if(password === "") errors.password = "Password kiritilmagan";
  return Object.keys(errors).length > 0 ? errors : null;
 } 
 validateProparty=(name,value)=>{
  const errors = {};
  if(value.length < 8 && name === "username") errors[name] = "kamida 8 ta belgi kiritishingiz kerak !";
  if(value.trim() === "" && name === "username") errors[name] = "Username kiritilmagan !";
  if(value.length < 8 && name === "password") errors[name] = "Kamida 8 ta belgi kiritishingiz kerak !";
  if(value === "" && name === "password") errors[name] = "Password kiritilmagan !";
  return Object.keys(errors).length > 0 ? errors : null ;
 }
 handleSubmit=(e)=>{
  e.preventDefault();
  const errors = this.validate();
  this.setState({ errors : errors || {} });
  if(errors) return;
  console.log(errors);
  this.doSubmit();
 }
 handleChange=({currentTarget : {name, value}})=>{
  const {data,errors : currentErrors} = this.state;
  const errors = this.validateProparty(name,value);
  this.setState({data : {...data , [name] :value}, 
  errors : errors ? {...currentErrors, ...errors} : {} });
 }
 renderInput =({name, label, ...args}) => {
  const {errors,data} = this.state;
  return(
   <Input
    name={name}
    label={label}
    value={data[name]}
    onChange={this.handleChange}
    errors ={errors[name]}
    {...args}
 />
  );
 }
 renderSubmit =({label})=>{
  return(
   <button className={`btn float-right btn-md  ${label==="Login" ? " btn-danger" : " btn-primary"}`}>
     {label}
   </button>
  )
 }
}

export default Form;