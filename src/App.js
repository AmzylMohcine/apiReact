import logo from './logo.svg';  
import './App.css';
import { useEffect , useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => { 

    //get api informations 
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
    
    .then(response => response.json()).then(json=> 
      { 
        console.log("json" , json)
        setData(json);
      }

    ).catch(e=> { console.log("e" , e)})  
  
  } , [])
  return (
    <div className="App">
    <h1>Welcome </h1>
     { data.map(item => { 
     return (
    <div>
 {item.email}
    </div> 

       )
       

     })
     }
    </div>
  );
}

export default App;
