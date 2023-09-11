import {useState} from 'react';

import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";

function App() {
  const [modal, setModal]= useState(true);

  const modalCloseHandler=()=>{
    setModal(false)
  }
  const modalOpenHandler=()=>{
    setModal(true)
  }

  return (
    <div className="App">
      <h1>Hey! Its my Application</h1>
      {modal? <FirstComponent owner="Shweta" reason="demo" closeModal={modalCloseHandler}/>: null}
      {modal? <Backdrop/>:null}
      <button onClick={modalOpenHandler}>Open Modal</button>
      
    </div>
  );
}

export default App;
