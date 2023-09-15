
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
function Square({value}) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
export default function Board() {
  return <>
  <div className="board-row">
        <Square value={1}/>
        <Square value={1}/>
        <Square value={1}/>
      </div>
      <div className="board-row">
        <Square value={1}/>
        <Square value={1}/>
        <Square value={1}/>
      </div>
      <div className="board-row">
        <Square value={1}/>
        <Square value={1}/>
        <Square value={1}/>
      </div>
</>
}
