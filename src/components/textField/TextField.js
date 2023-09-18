import "./TextField.css"

function TextField(props){
    const {type = "text"} = props
    function manageChange(event){
        props.actualizarValor(event.target.value);
    }
    return <div className={`field-${type}` }>
           <label>{props.titulo}</label>
           <input placeholder={props.placeHolder + "..."} 
           required={props.required} 
           value={props.valor}
           onChange={manageChange}
           type={type}/>
        </div>
    
}

export default TextField