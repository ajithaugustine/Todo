import {useState} from 'react'
import './App.css';

function App() {
  const [list, setlist] = useState('')
  const [store, setstore] = useState([])
  const submitdata= (event)=>{
    event.preventDefault()
    setstore([...store,list]) 
    setlist('')
  }
  const itemdelete = (key)=>{
       const data = store.filter((value,index)=>index !==key)
       setstore(data)  
  }

return(
  <div className="container">
     <div className="head">

     <h1 className="name">Todo List</h1>
     <form onSubmit={submitdata}>
     <input type="text" name='item' value={list} onChange={(event)=>setlist(event.target.value)} placeholder="Enter item" />
     </form>
     </div>
     <ul>
       {store.map((item,index)=>{
         return(

           <li key={index}><span>{item}</span><i className="fas fa-trash" onClick={()=>itemdelete(index)}></i></li>
         )
       })}
    
 
     </ul>
   </div>
 )
}

export default App;
