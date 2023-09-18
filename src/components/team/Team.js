import "./Team.css"
import Collabs from "../collabs/Collabs"
import hexToRgba from 'hex-to-rgba';


function Team(props){

    const{collabs,deleteCollab,updateColor,like}=props

    props.data.colorSecundario = hexToRgba(props.data.colorPrimario,0.5);

    return<>
        {collabs.length>0 &&
    
    <section className="team" style={{backgroundColor: props.data.colorSecundario} }>
        <input
        onChange={(evento)=>{
            updateColor(evento.target.value,props.data.id);
        }

        }
        type="color"
        className="input-color"
        value={props.data.colorSecundario}
        />
        <h3 style={{borderColor: props.data.colorPrimario}}>{props.data.titulo}</h3>
        <div className="collabsTeam">
            {
            collabs.map((colabs,index) =><Collabs 
            data={colabs} 
            key={index} 
            colorPrimario={props.data.colorPrimario} 
            deleteCollab={deleteCollab}
            like={like}
            />)
            }
        </div>

    </section>}</>
}

export default Team