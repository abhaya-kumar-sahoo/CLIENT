import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Contact() {

  const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});

  const userHome= async()=>{
   
    try{  

      const res= await fetch('/getdata',{
        
        method: 'GET',
        headers:{
          "Content-Type":"application/json"
        }
      })
      const datas=await res.json();
      setUserData({...userData, name: userData.name,email:userData.email, phone:userData.phone})
      if(!res.status===200){
        const error= new Error(res.error);
        throw error;
      }
    }catch(err){
console.log(err)

    }
  }
  useEffect(() => {
    userHome(); 
  }, [])
/////storingindata
const handleInputs=(e)=>{ 
  const name=e.target.name;
  const value=e.target.value;
  setUserData({...userData, [name]:value})
}
///////////////////////SEWND DATA TO BACKEND///////////////////

const handleForm=async(e)=>{
  
  e.preventDefault()
  const{name,email,phone,message}= userData;
  const res= await fetch('/contact',{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
       name,email,phone,message
    })
})
const data=await res.json();
if(!data){
  console.log("Message Not Sent")
  
}else{
  alert("Message Send Successfully")
  setUserData({...userData,message:""})
}
}

  return (
    <div>
<div className="container-fluid">
<div className='row'>
  <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
    <div className="contact_info_item d-flex justify-content-start align-items-center">
<img src="" alt="Phone"/>
<div className="contact_info_content">
  Phone
</div>
<div className="contact_info_content">
  9348557381
</div>
    </div>
  
    <div className="contact_info_item d-flex justify-content-start align-items-center">
<img src="" alt="Phone"/>
<div className="contact_info_content">
  Email
</div>
<div className="contact_info_content">
  abhayasahooab1234@gmail.com
</div>
    </div>
    <div className="contact_info_item d-flex justify-content-start align-items-center">
<img src="" alt="Phone"/>
<div className="contact_info_content">
  Address
</div>
<div className="contact_info_content">
  Bhadrak
</div>
    </div>
  
  
  </div>
</div>
      </div>

<div className="contact_form">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="contact_form_title">
          Get In Touch
          <form method="POST" id="contact_form">
            <div className="contact_form_name d-flex justify-content-between align-item-center">
              <input id="contact_form_name" type ="text" className="contact_fprm_name input_feild" name="name" onChange={handleInputs} value={userData.name} placeholder="Your Name" required="true" />
              <input id="contact_form_email" type ="email" className="contact_fprm_email input_feild" name="email" onChange={handleInputs} value={userData.email} placeholder="Your Email" required="true" />
              <input id="contact_form_phone" type ="tel" className="contact_fprm_phone input_feild" name="phone" onChange={handleInputs} value={userData.phone} placeholder="Your Phone Number" required="true" />
            </div>
            <div className="contact_form_text mt-5">
              <textarea className="text_feild contact_form_message" name="message" onChange={handleInputs} value={userData.message} placeholder="Type Your Message" id="" col="50" rows="10"/>
            </div>
            <div className="contact_form_button">
              <button type="submit" onClick={handleForm} className="button contact_submit_button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact
