
import { useEffect, useState } from 'react';
import './App.css';



function App() {
  function send(){
  
    const requestOptions  = {
    
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: data })
    };
    fetch('https://dleatkaruga.vercel.app/', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }
  


  const [data, setdata] = useState("");
  return (
    <div className="App">
      <h1>ram</h1>
      <input type="email"  onChange={(e)=>setdata(e.target.value)}/>
    <button onClick={send}>click</button>
    </div>
  );
}




export default App;
