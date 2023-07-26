import {Card,Form,Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

 export function EditUserPage(){
  const {userid} = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [premiumMember, setPremiumMember] = useState(false);
  
  const fetchUser = async ()=>{
   const response = await axios.get("http://localhost:8000/users/"+ userid);
  //  setUser(response.data);
   const user = response.data;
   setName(user.name);
   setEmail(user.email);
   setAge(user.age);
   setPremiumMember(user.premiumMember);
  }
  
    useEffect(()=>{fetchUser()},[userid]);
    // if(user === undefined)
    //    return <div>loading</div>;
    const updateuser = async (event)=>{
     event.preventDefault();
      await axios.patch("http://localhost:8000/users/"+userid,
      {
      name: name,
      email: email,
      age: parseInt(age),
      premiumMember: premiumMember
     }
     );


    }
    
    return(<div className='row justify-content-center'>
    <div className='col-md-4'>
          <Card className='p-4'>

         <Form onSubmit={updateuser}>
           <Form.Group className="mb-3" >
             <Form.Label>Name</Form.Label>
             <Form.Control type="name" required placeholder="Enter name" value={name} onChange={(event)=>setName(event.target.value)}/>
           </Form.Group>


          <Form.Group className="mb-3" >
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" required placeholder="example@gmail.com" value={email} onChange={(event)=>setEmail(event.target.value)}/>
           </Form.Group>

           <Form.Group className="mb-3" >
             <Form.Label>Age</Form.Label>
             <Form.Control type="number" required placeholder="age" value={age} onChange={(event)=>setAge(event.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Check type="checkbox" label="premium user" checked={premiumMember} onChange={()=>setPremiumMember(!premiumMember)}/>
           </Form.Group>
           <Button variant="primary" type="submit">
             save
           </Button>
         </Form>
         </Card>
         </div>
         </div>
   );


}
