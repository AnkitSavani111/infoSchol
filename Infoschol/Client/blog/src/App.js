import './App.css';
import { useState, useEffect } from "react";


const apiUrl = "http://localhost:4000/scholarships";

function App() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  const formatedData = data.map((item) => {
    return (
      <>
        <h1>{item.name}</h1>
        <img src={item.image}/>
      </>
    )
  })

  return (
    <>
      <h1>App</h1>
        {formatedData}
    </>
  )
}

export default App;
