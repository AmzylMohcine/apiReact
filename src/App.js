import logo from './logo.svg';  
import './App.css';
import { useEffect , useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => { 

    //get api informations 
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url , { 
      headers : { 
        companyId :'442166'
      }
    })
    
    .then(response => response.json()).then(json=> 
      { 
        console.log("json" , json)
        setData(json);
      }

    ).catch(e=> { console.log("e" , e)})  
  
  } , [])

  
  //post and put api implement 
  const postPutEvent = () => { 
    const data = { 
      id:'501',
      name :'Mohcine' , 
      email :'mohcine@gmail.com',
      body:'body'
    }

const url = data.id ? "https://jsonplaceholder.typicode.com/comments/"+data.id  :  "https://jsonplaceholder.typicode.com/comments" ;
    fetch(url , {
      //Method post pour saisir dans l api
      method: data.id ? 'PUT' : 'POST',
      //headers pour definir le format de data
      headers : { 
        'Content-Type' : 'application/json', 
        'Access-Control-Allow-Origin': '*'
      },
      //lire la data en format string 
      body : JSON.stringify(data), 

    })
    
    .then(response => { 

      console.log("response" , response);

      if(response.state == 200) { 

        alert("Succes") ; 

      }

    })

    .catch(e=> { console.log("e" , e)})  
      

  }
  return (
    <div className="App">
    <h1>Comments </h1>
    { data.map(item => { 
    return (
    <div>
{item.email}
    </div> 
    

)
    

    })
    }
    <button onClick={postPutEvent}> Submit</button>
    </div>
  );
}

export default App;
