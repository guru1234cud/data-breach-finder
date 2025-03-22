import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [email,setemail] = useState("")
  const options = {
    method: 'GET',
    url: 'https://breachdirectory.p.rapidapi.com/',
    params: {
      func: 'auto',
      term: {email}
    },
    headers: {
      'x-rapidapi-key': '1b3198c948msh1eb53f01277c3f2p18bdf1jsnb81ed0e8e4c1',
      'x-rapidapi-host': 'breachdirectory.p.rapidapi.com'
    }
  };
  
  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="main">
      <input className='inp' onChange={(e)=>setemail(e.target.value)} value={email}></input>
      <button onClick={fetchData}></button>
    </div>
  )
}

export default App