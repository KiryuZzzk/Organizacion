import "./OptionList.css"

function OptionList(props){

    function manageChange(event){
        props.actualizarValor(event.target.value);
    }

    return <div className="optionList">
           <label>Equipo</label>
           <select value={props.valor}
        onChange={manageChange}> 
            <option value="" disabled defaultValue="" hidden>Seleccionar el equipo</option>
            { props.teams.map((team,index)=>{
                return <option key={index} value={team}>{team}</option>
            } ) }
           </select>
        </div>
    
}

export default OptionList