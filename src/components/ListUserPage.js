import { Button } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Link} from'react-router-dom' ;
import { useState,useEffect } from 'react';
import axios from 'axios';

 export function ListUserPage(){
  const [data, setData] = useState([]);
 const fetchUsers = async ()=>{ 
   const response = await axios.get("http://localhost:8000/users");
       setData(response.data);
       console.log(response.data);
  }
  useEffect(()=>{
    fetchUsers();
  },[])
  const deleteuser =  (user)=>{
  axios.delete("http://localhost:8000/users/"+user.id).then(()=>{
    alert(user.name+"deleted!");
    fetchUsers();

  });

  }
      return(
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Actions</th>
           
            </tr>
          </thead>
          <tbody>
            {
              data.map(
                (user,index)=><tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <Link to={"/users/"+ user.id}>
                    <Button variant='primary' size='sm'>View</Button>
                  </Link>
                   {' '}
                   <Link to={`/users/${user.id}/edit`}>
                    <Button variant='info' size='sm'>Edit</Button>
                  </Link>
                   {' '}
                    <Button variant='danger' size='sm'onClick={()=>deleteuser(user)}>Delete</Button>
                  
                </td>
              </tr>
              )
            }
          </tbody>
        </Table>
      );
  }
