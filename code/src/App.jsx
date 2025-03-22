import React, { useState } from 'react'
import './App.css'
import axios from 'axios'


const App = () => {
  const [email, setemail] = useState("")
  const [apiresponse, setapiresponse] = useState([])
  const options = {
    method: 'GET',
    url: `https://breachsearch.p.rapidapi.com/${email}`,
    headers: {
      'x-rapidapi-key': '1b3198c948msh1eb53f01277c3f2p18bdf1jsnb81ed0e8e4c1',
      'x-rapidapi-host': 'breachsearch.p.rapidapi.com'
    }
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      fcheck(response.data)
    } catch (error) {
      setapiresponse([error.message])
      console.log(apiresponse);
      console.error(error);
    }
  }
  function fcheck(obj) {
    setapiresponse(["domain:"+obj.BreachesSummary.domain,"site:"+obj.BreachesSummary.site])
    console.log(apiresponse)
  }
  return (
    <div className="main">
      <h1>Check For Data Breaches</h1>
      <input className='inp' onChange={(e) => setemail(e.target.value)} value={email}></input>
      <button onClick={fetchData} className='btn'>PRESS</button>
      <div className="res">
        <ul className='keys'>{apiresponse.map((val,index) => {
          return <li key={index}>{val}</li>
        })}
        </ul>
      </div>
    </div>

  )
}

export default App