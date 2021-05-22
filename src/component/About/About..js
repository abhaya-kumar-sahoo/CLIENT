import React,{useEffect,useState} from 'react'
import './About..css'
import {useHistory} from 'react-router-dom'
import {Image,Tab,Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import abhaya from '../home/images/abhaya.png'
console.log("PROFILE DATA COMMING");

const About=()=> {
  const history=useHistory()
  const [userData, setUserData] = useState("");

  const callAboutPage= async()=>{
   console.log("Heelooo abhaya")
    try{  
      console.log("PROFILE DATA COMMING");
      const res= await fetch('/about',{
        
        method: 'GET',
        credentials: 'include', 
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        }
      })
      const datas=await res.json();
      setUserData(datas)
      if(!res.status===200){
        const error= new Error(res.error);
        throw error;
      }
    }catch(err){
console.log(err)
history.push("/login")
    }
  }
  useEffect(() => {
    callAboutPage(); 
  }, [])

  return (
    <div>
      <div className="container emp-profile">
<form method="GET">
  <div className="row header">
    <div className="col-md-4">
    {/* <div className="profile-img"> */}
    <Image className="profile-img" src={abhaya} alt="Abhaya" thumbnail  roundedCircle />

    {/* </div> */} 
    </div>
    <div className="col-md-6">
      <div className="profile-head">
        <h5>{userData.name}</h5> 
        <h6>{userData.work}</h6>
        <p className="profile-ratting mt-1 mb-5">RANKING<span>1/10</span></p>

           {/* <ul className="nav nav-tabs" role="tablist">
           <li className="nav-items">
             <a className="nav-link active" id="home-tab" data-toggle='tab' aria-controls="home" href="#home" aria-selected="true" role="tab">About</a>
           </li>
           <li className="nav-items">
             <a className="nav-link active" id="profile-tab" aria-controls="profile" aria-selected="true"  data-toggle='tab' href="#profile" role="tab">Timeline</a>
           </li>
           </ul>    */}

  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
  <div className="row mt-1">
          <div className="col-md-6">
             <lable>User Id</lable>
          </div>
          <div className="col-md-6">
               <p>{userData._id}</p>
            </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
             <lable >Name</lable>
          </div>
          <div className="col-md-6">
               <p>{userData.name}</p>
            </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
             <lable >Email</lable>
          </div>
          <div className="col-md-6">
               <p>{userData.email}</p>
            </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
             <lable >Phone</lable>
          </div>
          <div className="col-md-6">
               <p>{userData.phone}</p>
            </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
             <lable >Profession</lable>
          </div>
          <div className="col-md-6 ">
               <p>{userData.work}</p>
            </div>
        </div> 

  </Tab>
  <Tab eventKey="profile" title="Profile">
  <div className="row mt-1">
          <div className="col-md-6">
             <lable>User Id</lable>
          </div>
          <div className="col-md-6">
               <p>1234</p>
            </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
             <lable >Name</lable>
          </div>
          <div className="col-md-6">
               <p>Barsa Rani Sahoo</p>
            </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
             <lable >Email</lable>
          </div>
          <div className="col-md-6">
               <p>abhayasahoolk@gmail.com</p>
            </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
             <lable >Phone</lable>
          </div>
          <div className="col-md-6">
               <p>9148557181</p>
            </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6">
             <lable >Profession</lable>
          </div>
          <div className="col-md-6 ">
               <p>Student</p>
            </div>
        </div> 

  </Tab>

</Tabs>

      </div>
      
    </div>
    <div className="col-md-2">
  <input type="submit" name="btnAddmore" className="profile-edit-btn" value="Edit Profile"/>
  </div>
  </div>
<div className="row header1">
  <div className="col-md-4">
    <div className="profile-work">
      <h5>WORK LINK</h5>

      <a href="https://github.com/abhaya-kumar-sahoo" target="_abhaya">Github</a><br></br>
      <a href="https://www.facebook.com/abhaya.lk/" target="_abhaya">Facebook</a><br></br>
      <a href="https://www.instagram.com/abhaya540/?hl=en" target="_abhaya">Instagram</a>

    </div>
  </div>
</div>
</form>
      </div>
    </div>
  )
}

export default About
  

/////////
// try{
//   const token= req.cookies.jwtoken ;
//   if(!token){return res.send("TOKEN NOT FOUND")};
//   console.log("ABHAYA KUMAR SAHOO"+ token);
  
//   const verifyToken= jwt.verify(token, process.env.SECRET_KEY);
//   const rootUser= await User.findOne({_id:verifyToken._id,"tokens.token":token})
//   if(!rootUser){throw new Error('User Not Found')}
//   req.token=token;
//   req.rootUser=rootUser;
//   req.userID=rootUser._id;
//   next()
//   }catch(err){
//     res.status(401).send('Unauthorized:Hello Bhai No token provided')
//     console.log(err)
//   }
  