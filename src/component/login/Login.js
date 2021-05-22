import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Login.css'
function Login() {
  const history=useHistory()

  const [state, setState] = useState({
    email:"",
    password:""
    })
    let Name,Value;
    
    const handleChange=(e)=>{
    Name= e.target.name;
    Value=e.target.value;
    setState({...state,[Name]:Value})
    }
    const handleClick=async(e)=>{
      const {email,password}=state
      e.preventDefault();  
  const res= await fetch('/signin',{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email:email,password:password
       })
  })
  const data= res.json();
  if(res.status===400 || !data){
      window.alert("Invalid Login");
  }else{
      window.alert("Login Successful ");
      history.push('/')
  }} 
  return (
    <div>
        <div className="page">
        <div className="container box1">
        <h3>Sign In</h3>
    <form method="POST">

<div className="input">
<input type="text" placeholder="Email" name="email" onChange={handleChange} value={state.email}/>
</div> 

<div className="input">
<input type="password"  placeholder="Password" name="password" onChange={handleChange} value={state.password}/>
</div>

  <button className="button" type="submit" onClick={handleClick}><h4>Sign In</h4></button>
</form>
    </div>
    </div>
    </div>
  )
}
export default Login
