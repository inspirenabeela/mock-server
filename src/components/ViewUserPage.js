import axios from 'axios';
import { useEffect, useState } from 'react';
import {Table,Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


 export  function ViewUserPage(){
 const {userid} = useParams();

 const [user, setUser] = useState(undefined);
 const fetchUser = async ()=>{
  const response = await axios.get("http://localhost:8000/users/"+ userid);
  setUser(response.data);
 }
 
   useEffect(()=>{fetchUser()},[userid]);
   if(user === undefined)
      return <div>loading</div>;
   
   
return(<Card>
  <Table>
    <tbody>
      <tr>
        <td>ID</td>
        <td>{userid}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{user.email}</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>{user.age}</td>
      </tr>
      <tr>
        <td>Premium User</td>
        <td>{user.premiumMember ? "yes" : "no"}</td>
      </tr>
    </tbody>
  </Table>
</Card>
    
);
}
