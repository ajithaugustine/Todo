import {useState} from 'react'
import './App.css';
import Popup from './Components/Popup/Popup';

function App() {
  const [list, setlist] = useState('')
  const [store, setstore] = useState([])
  const [popup, setpopup] = useState(false)
  const [data, setdata] = useState([])
  const [index, setindex] = useState()
  const submitdata= (event)=>{
    event.preventDefault()
    setstore([...store,list]) 
    setlist('')
  }
  const itemdelete = (key)=>{
       const data = store.filter((value,index)=>index !==key)
       setstore(data)  
  }
  const itemedit =(value,index)=>{
    setindex(index)
    setdata(value)
    setpopup(true)

  }
  const confirmedit=(value)=>{
     store.splice(index,1,value)
     setpopup(false)
  }
  const canceledit=()=>{
    setpopup(false)
  }

return(
  <div>

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
           
           <li key={index}><span>{item}</span><i className="fas fa-edit"  onClick={()=>itemedit(item,index)}></i><i className="fas fa-trash" onClick={()=>itemdelete(index)}></i></li>
           )
          })}
     </ul>
   </div>
   { popup? <Popup  itemdata={data} canceledit={()=>canceledit()} confirmedit={(datanew)=>confirmedit(datanew)}/>:''}
   </div>
 )
}

export default App;
