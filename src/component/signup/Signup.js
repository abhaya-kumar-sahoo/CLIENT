import React,{useState} from 'react'
import './signup.css'
import {useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
  const history=useHistory()
const [state, setState] = useState({
name:"",
email:"",
phone:"",
work:"",
password:"",
cpassword:""

})
let Name,Value;

const handleChange=(e)=>{
Name= e.target.name;
Value=e.target.value;
setState({...state,[Name]:Value})
}


const handleClick= async(e)=>{
  e.preventDefault();
 const {name,email,phone, work,password,cpassword}=state
  const res= await fetch('/register',{
      method:"POST",
      headers:{
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
         name,email,phone, work,password,cpassword
      })
  })
  const data= await res.json();
  if(data.status===422 || !data ){
      window.alert("Invalid Registration")
      console.log("Invalid Registration");
  }else{
     window.alert("Sucessesful Registration")
     console.log("Sucessesful Registration")
    history.push("/login")
  }
 
 } 
 

  return (
    <div className="page">
    <div className="container box">
    <h3>Registartion Form</h3>
    <form method="POST">

<div className="input">
<input type="text" placeholder="Full Name" name="name" onChange={handleChange} value={state.name} />
</div>
<div class="input">
<input type="text" placeholder="Email" name="email" onChange={handleChange} value={state.email}/>
</div>

<div className="input">
<input type="tel" placeholder="Phone" name="phone" onChange={handleChange} value={state.phone}/>
</div>

<div class="input">
<input type="text" placeholder="Work" name="work" onChange={handleChange} value={state.work}/>
</div>


<div className="input">
<input type="password"  placeholder="Password" name="password" onChange={handleChange} value={state.password}/>
</div>

<div className="input">
<input type="password" placeholder="Conform Password" name="cpassword" onChange={handleChange} value={state.cpassword}/>
</div>


  <button className="button" type="submit" onClick={handleClick}>Signup</button>

</form>
    </div>
    </div>
  )
}

export default Signup
