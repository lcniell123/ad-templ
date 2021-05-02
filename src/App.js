import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';





function App() {
const [logo, setLogo] = useState("https://digitalmarkgroup.com/wp-content/uploads/2021/03/DMG-Logo-2021-Vertical.svg");
const [image, setImage] = useState("https://digitalmarkgroup.com/wp-content/uploads/2020/03/search-engine-optimization.jpg");

const [header1, setHeader1] = useState("Add Header 1");
const [header2, setHeader2] = useState("Add Header 2");
const [message, setMessage] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices efficitur nibh, in vulputate elit viverra eget. Aenean accumsan velit ut augue fermentum,");
const [cta, setCta] = useState("Display CTA Here! ");






  return (
    <div className="App">


  


<div style={{textAlign: "left", marginLeft: "20px"}} > 
  <div style={{width: "20%",height: "100%",  float:"left"}}>
    <p>Logo </p>
    <input type="text" onChange={e => setLogo(e.target.value)} Placeholder="Add a Logo"/>
    <p>Image </p>
    <input type="text"  onChange={e => setImage(e.target.value)} Placeholder="Add Image" />
    <p>Header 1</p>
    <input type="text" onChange={e => setHeader1(e.target.value)}Placeholder="Add Header1"  />
    <p>Header 2</p>
    <input type="text" onChange={e => setHeader2(e.target.value)} Placeholder="Add Header2"/>
     <p>Message</p>
     <textarea onChange={e => setMessage(e.target.value)} Placeholder="Add  Description"></textarea>
     <p>CTA</p>
     <input type="text" onChange={e => setCta(e.target.value)} Placeholder="Add CTA Button Text"/>
  </div>
  <div style={{width: "76%",height: "100%", paddingLeft:"20px", border: "solid 2px black", float:"right"}}>

<h2>Banner Ads</h2>
 <p  >ad-250x300</p>
   <div style={{width: "300px",height: "250px", padding:"20px", backgroundImage: `url(${image})` ,backgroundSize: 'cover', margin: "20px", color:"white"}}>
   
        <div><img width="50px" src={logo}/></div>
        <div><h1>{header1}</h1> </div>
        <div><h2>{header2}</h2> </div>
        <button>{cta}</button>
      </div>
      ad-729x90
      <div style={{width: "728px",height: "90px", padding:"20px", backgroundImage: `url(${image})`,backgroundSize: 'cover', margin: "20px", color:"white"}}>
      <div><img width="50px" src={logo}/></div>
      <div  style={{position:"relative", top:"-20px" }}  ><h1>{header1}</h1> </div>
        
        <button style={{float:"right", position:"relative", top:"-65px"}}>{cta}</button>
      </div>
      ad3-300x600
      <div style={{width: "300px",height: "600px",padding:"20px",  backgroundImage: `url(${image})`,backgroundSize: 'cover', margin: "20px", color:"white"}}>
      <div><img width="50px" src={logo}/></div>
      <div><h1 style={{fontSize: "4em"}}>{header1}</h1> </div>
        <div><h2>{header2} </h2></div>
        <div>{message} </div>
        <button >{cta}</button>
        </div>
        ad4-50x250
      <div style={{width: "300px",height: "50px", padding:"5px",  backgroundImage: `url(${image})`,backgroundSize: 'cover', margin: "20px", color:"white"}}>
      <div><img width="50px" src={logo}/></div>
       <div><h1 style={{fontSize: "16px"}}>{header1}</h1> </div>
        <div>{header2} </div>
        <button>{cta}</button>
        </div>
    </div>
</div>
</div>
  );
}

export default App;
