

function FirstComponent(props){
    

return <div className="modal">
        <h1>React App</h1>
        <h2>By {props.owner}</h2>
        <p>It is a {props.reason} application created by {props.owner}</p>
        <button onClick={props.closeModal}>Close</button>
    </div>

}

export default FirstComponent;