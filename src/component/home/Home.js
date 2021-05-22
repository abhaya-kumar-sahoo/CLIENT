import React,{useState,useEffect} from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import abhaya from './images/abhaya.png'


import {Badge } from "react-bootstrap";
function Home() {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false)

  const userContact= async()=>{
   
    try{  

      const res= await fetch('/getdata',{
        
        method: 'GET',
        headers:{
          "Content-Type":"application/json"
        }
      })
      const datas=await res.json();
      setUserName(datas.name)
      setShow(true)
      if(!res.status===200){
        const error= new Error(res.error);
        throw error;
      }
    }catch(err){
console.log(err)

    }
  }
  useEffect(() => {
    userContact(); 
  }, [])
    return (
 <div className="container-fluid img-fluid abs">
 <div className="heading">
 <div className="h1">
 <h1>
   <Badge variant="secondary">Welcome <br></br><span>{userName}</span></Badge>
  </h1>
  <h2>{show ? "Happy to See You":"I am a Web Devloper"}</h2>
 </div>
<div className="img">
<img src={abhaya} alt="abhaya" className="image" />
</div>

 </div>
<div className="center">
  
<button>Let's Go--</button>
<h2>I am a Engineere and A Web Devloper</h2>

<p>I am studing at Collecge of Engineering and Technology , Bhubaneswar</p>
<h3>Web development is quickly becoming one of the most attractive and best-paid career choices in the modern world. But what is a web developer and what exactly does one do?</h3>
</div>


</div>
    );
  }

export default Home
