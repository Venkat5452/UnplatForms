import React ,{ useState } from "react";
import { Nav,Navbar ,Container, Button} from "react-bootstrap";
import {BiErrorCircle} from 'react-icons/bi';
// import { Route,Routes } from "react-router-dom";
// import Settings1 from "./Settings";
import Myimg from './Images/img1.jpeg';
import './paths.css';
export const Pathused = () => {
    const [show,setshow]=useState(false);
    const set=()=>{
        setshow(true);
    }

  return (
    <div className="container-fluid p-5 py-1 " style={{background:"#F5F5F5"}}>
    <div className="d-flex flex-row text-primary p-3" style={{fontWeight:'600'}} >
        <h2 className="me-auto " style={{fontSize:'130%'}}>PATH 1</h2>
        <h2 className="ms-auto" style={{fontSize:'130%'}}><a  href="#path">Back to Lists</a></h2>
    </div>
    <div className="border px-3 bg-white">
    <div className="px-3" style={{position:'sticky'}}>
    <Navbar collapseOnSelect expand="lg" bg="" variant="" position="sticky" >
      <Container>
           <Nav className="font-weight-bold" style={{fontSize:'120%'}}>
           <Nav.Link href="#" style={{color:'black'}} className='mx-4 font-weight-normal'>
            {
                !show &&
            <p onClick={set}>Settings</p>
            }
            {
            show &&
            <div>
            <p onClick={set}>Settings</p>
            <p className="ul2"></p>
            </div>
            }
            </Nav.Link>
           <Nav.Link href="/" style={{color:'black'}} className='mx-4 font-weight-normal'>My Progress</Nav.Link>
          </Nav>
      </Container>
     </Navbar>
     
    { 
    show &&
     <div className="p-3 ">
        <div className="font-weight-bold px-4 mx-auto" style={{fontSize:'120%'}}>
           <p  style={{color:'black'}} className="px-5">Select Apps</p>
           <div className=" d-flex flex-column mx-5 gap-3">
             <div className="d-flex flex-row gap-5" style={{fontSize:"100%"}}>
                <div className="mx-auto" >
                <p >Apps</p>
                <p className="ul"></p>
                </div>
                <div className="mx-auto">
                <p >Performance</p>
                <p className="uli"></p>
                </div>
                <p className="mx-auto">      </p>
             </div>
             <div className="adjust">
             <div className="d-flex flex-row gap-4" style={{fontSize:"90%"}}>
                <p className="mx-auto"><img src={Myimg} alt=""></img> App1 <BiErrorCircle/></p>
                <p className="mx-auto">20 Minutes <BiErrorCircle/></p>
                <p className="mx-auto"><Button className="rounded-pill">Added</Button></p>
             </div>
             <div className="d-flex flex-row gap-4" style={{fontSize:"90%"}}>
                <p className="mx-auto"><img src={Myimg} alt=""></img>  App2 <BiErrorCircle/></p>
                <p className="mx-auto">35 Minutes <BiErrorCircle/></p>
                <p className="mx-auto"><Button className="rounded-pill bg-white text-dark w-300">Add</Button></p>
             </div>
             <div className="d-flex flex-row gap-4" style={{fontSize:"90%"}}>
                <p className="mx-auto"> <img src={Myimg} alt=""></img> App3 <BiErrorCircle/></p>
                <p className="mx-auto">25 Minutes <BiErrorCircle/></p>
                <p className="mx-auto"><Button className="rounded-pill bg-white text-dark w-300">Add</Button></p>
             </div>
             <div className="d-flex flex-row gap-4" style={{fontSize:"90%"}}>
                <p className="mx-auto"><img src={Myimg} alt=""></img>  App4 <BiErrorCircle/></p>
                <p className="mx-auto">20 Minutes <BiErrorCircle/></p>
                <p className="mx-auto"><Button className="rounded-pill bg-white text-dark w-300">Add</Button></p>
             </div>
             <div className="d-flex flex-row gap-4" style={{fontSize:"90%"}}>
                <p className="mx-auto"><img src={Myimg} alt=""></img>  App5 <BiErrorCircle/></p>
                <p className="mx-auto">20 Minutes <BiErrorCircle/></p>
                <p className="mx-auto"><Button className="rounded-pill bg-white text-dark w-300">Add</Button></p>
             </div>
             <div className="d-flex flex-row gap-4" style={{fontSize:"90%"}}>
                <p className="mx-auto"> <img src={Myimg} alt=""></img> App6 <BiErrorCircle/></p>
                <p className="mx-auto"> 20 Minutes <BiErrorCircle/></p>
                <p className="mx-auto"><Button className="rounded-pill bg-white text-dark w-300">Add</Button></p>
             </div>
             </div>
           </div>
        </div>
        <div className="d-flex flex-row gap-4 px-5 pt-4">
                <p className="mx-auto"><b>Total</b> </p>
                <p className="mx-auto">60 Minutes</p>
                <p className="mx-auto"> </p>
        </div>
 
     </div>
     }
     
     <div className="d-flex flex-row p-5">
                <a href="#apps" className="me-auto" style={{fontSize:"120%"}}>See More Apps </a>
                <div classname="px-5">
                     <Button className="bg-white  text-dark me-5">Back</Button>
                     <Button>Close</Button>
                </div>
                     
        </div>
    </div>
    </div>
    {/* <Routes>
        <Route path="Settings" element={<Settings1/>}/>
    </Routes> */}
</div>
  )
}

