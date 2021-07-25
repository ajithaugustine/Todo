import React,{useState} from "react";
import "./Popup.css";
function Popup(props) {
    const data =props.itemdata
 const [newdata, setnewdata] = useState(data)

  return (
    <div>
      <div className="backcolor" onClick={() => props.canceledit()}></div>
      <div className="popup">
        <input type="text" value={newdata} onChange={(e)=>setnewdata(e.target.value)}/>
        <div className="btn">
          <button onClick={() => props.canceledit()}>cancel</button>
          <button id="ok"onClick={() => props.confirmedit(newdata)}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
