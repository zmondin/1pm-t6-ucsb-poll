import React, { Component } from 'react';
import useSWR from "swr";

<script src="https://www.w3schools.com/lib/w3.js"></script>

const initialList = [];
function checkbut(num){
  if(num=="(open)")
  {return (<button class="w3-button w3-pale-green w3-round-large w3-opacity">go to vote</button>)
  }
  if(num=="(close)"){
  return(
    <button class="w3-button w3-pale-green w3-round-large w3-opacity">view result</button>)}

}

function Poppoll(){
  const [qlist, setqList] = React.useState(initialList);
  const [alist, setaList] = React.useState(initialList);
  const [dlist, setdList] = React.useState(initialList);

  const fetcher = url => fetch(url)
    .then(res => (res.json()))
    .then(data => {
      //console.log("data: ", data);
      setqList(data[0]);
      setaList(data[1]);
      setdList(data[2]);
    });
  const { data } = useSWR(
    '/api/getPopularPollInformation',
    fetcher
  );


  return (
    <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
     
    <div class="w3-container " >
      
    <header class="w3-container">
    <h1 class=" w3-extralarge"></h1>
    <h1 class="w3-threequarter w3-extralarge w3-opacity ">Popular polls</h1>
    <button class="w3-large w3-quarter w3-round-large w3-opacity">view all</button>
    </header>
   
          
    
    <div class="card-columns">   
    <div class="w3-card-4 " > 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[0]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[0])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[0]} days ago{alist[0]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1> 
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[1]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[1])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[1]} days ago{alist[1]}</h5>
    </footer>
    </div>  
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[2]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[2])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[2]} days ago{alist[2]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[3]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[3])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[3]} days ago{alist[3]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[4]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[4])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[4]} days ago{alist[4]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[5]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[5])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[5]} days ago{alist[5]}</h5>
    </footer>
    </div>
    
    </div>
    <h1 class=" w3-extralarge"></h1>
    </div>
    <h1 class=" w3-extralarge"></h1>
    </div>
    
   
        
  );
}

function Repoll(){
  const [qlist, setqList] = React.useState(initialList);
  const [alist, setaList] = React.useState(initialList);
  const [dlist, setdList] = React.useState(initialList);
  const fetcher = url => fetch(url)
  .then(res => (res.json()))
  .then(data => {
    //console.log("data: ", data);
    setqList(data[0]);
    setaList(data[1]);
    setdList(data[2]);
  });
  const { data } = useSWR(
    '/api/getRecentPollInformation',
    fetcher
  );


  return (
    <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
     
    <div class="w3-container " >
      
    <header class="w3-container">
    <h1 class=" w3-extralarge"></h1>
    <h1 class="w3-threequarter w3-extralarge w3-opacity ">Recent polls</h1>
    <button class="w3-large w3-quarter w3-round-large w3-opacity">view all</button>
    </header>
   
          
    
    <div class="card-columns">   
    <div class="w3-card-4 " > 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[0]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[0])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[0]} days ago{alist[0]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1> 
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[1]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[1])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[1]} days ago{alist[1]}</h5>
    </footer>
    </div>  
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[2]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[2])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[2]} days ago{alist[2]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[3]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[3])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[3]} days ago{alist[3]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[4]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[4])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[4]} days ago{alist[4]}</h5>
    </footer>
    </div>
    <h1 class=" w3-extralarge"></h1>
    <div class="w3-card-4 "> 
    <header class="w3-container w3-light-gray">
    <h1 class="w3-large">{qlist[5]}</h1>
    </header>
    <div class="w3-container w3-light-gray">
    <p >result</p>
    {checkbut(alist[5])}
    </div>
    <footer class="w3-container w3-light-gray">
    <h5 class="w3-medium">{dlist[5]} days ago{alist[5]}</h5>
    </footer>
    </div>
    
    </div>
    <h1 class=" w3-extralarge"></h1>
    </div>
    <h1 class=" w3-extralarge"></h1>
    </div>
    
  );
}

function Apoll(){
  return(<div>{Poppoll()}
                                              
  {Repoll()}</div>)
}

export default Apoll;
