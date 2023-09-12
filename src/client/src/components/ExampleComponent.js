import React, { useState, useEffect } from "react";

// for connecting the frontend and backend 
function ExampleComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:7000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))}, []);
  
   return (
     <div className="ExampleComponent">
       { <h1>{message}</h1> }
      
     </div>
  );
}

export default ExampleComponent
//task 1-- to check if the frontend seperately
// import React from 'react'

// const ExampleComponent = () => {
//   return (
//     <div>welocme to my pager</div>
//   )
// }

//export default ExampleComponent