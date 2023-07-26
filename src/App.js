import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {AddUserPage} from './components/AddUserPage';
import {EditUserPage} from './components/EditUserPage';
import {ListUserPage} from './components/ListUserPage';
import {ViewUserPage} from './components/ViewUserPage';


 function App() {
  return (
   <BrowserRouter>
      <div>
        <Navbar className='navbar navbar-expand-sm bg-primary navbar-dark' variant='dark'>
         <Container>
           <Navbar.Brand href="/">API Application</Navbar.Brand>
            <Nav className='float-right'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/add'>Add New</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Container className='pt-5'>
      <Routes>
        <Route index element={<ListUserPage/>}/>
        <Route path="add" element={<AddUserPage/>}/>
        <Route path="users/:userid/edit" element={<EditUserPage/>}/>
        <Route path="users/:userid" element={<ViewUserPage/>}/>
      </Routes>
      </Container>
    </div>
    </BrowserRouter>
  );
}
export default App;
