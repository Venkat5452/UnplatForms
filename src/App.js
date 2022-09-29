import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoIosNotifications} from 'react-icons/io';

import { Routes , Route } from 'react-router-dom';
import {Pathused} from './components/pathss';
//import { HiStar } from 'react-icons/hi';
function App() {
  return (
    <div className="container-fluid ">
      <div className='border'>
      <Navbar collapseOnSelect expand="lg" bg="" variant="" className='py-3 '>
      <Container>
        <Navbar.Brand href="Home" className='font-weight-bold text-primary d-flex flex-row' style={{fontWeight:'700'}}><div className='bg-primary text-white rounded-2 font-weight-bold'>Time</div><div className='inline-flex text-danger font-weight-bold' style={{fontWeight:'800'}}>.</div><div className='inline-flex font-weight-bold'>Dev</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto font-weight-bold" style={{fontWeight:'500'}}>
            <Nav.Link href="Home" style={{fontWeight:'500'}} className='mx-4 font-weight-normal'>Home</Nav.Link>
            <Nav.Link href="calender" className='mx-4 font-weight-normal'>My Calender</Nav.Link>
            <NavDropdown title="Apps" className='mx-4' id="collasible-nav-dropdown">
              <NavDropdown.Item href="app1" >App1</NavDropdown.Item>
              <NavDropdown.Item href="app2" >App2</NavDropdown.Item>
              <NavDropdown.Item href="app3" >App3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="otherapp" >Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{fontWeight:'500'}} >
            <Nav.Link href="/" className='mx-4 font-weight-bold'>My Path</Nav.Link>
            <Nav.Link href="mygoals" className='mx-4 font-weight-normal'>My Goals</Nav.Link>
            <Nav.Link href="notification" className='mx-4'><IoIosNotifications/></Nav.Link>
            <Nav.Link href="profile" className='mx-4'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KQqJNGqBc_TWy4wXpnA-xuPFaiwLCWSxww&usqp=CAU' className='rounded-circle' width={"25"} height={"25"} alt=''></img></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <Routes>
       <Route path="/" element={<Pathused/>} />
    </Routes>
    </div>
  );
}

export default App;
