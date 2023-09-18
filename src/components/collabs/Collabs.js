import "./Collabs.css"
import {AiFillCloseCircle,AiFillHeart,AiOutlineHeart} from "react-icons/ai"


function Collabs(props){

    const {deleteCollab} = props;

    return <div className="collabs">
        <AiFillCloseCircle onClick={()=>deleteCollab(props.data.id)} className="delete"/>
        <div className="header" style={{backgroundColor:props.colorPrimario}}>
            <img src={props.data.foto} alt={props.data.nombre} />
        </div>
        <div className="info">
            <h4>{props.data.nombre}</h4>
            <h5>{props.data.puesto}</h5>

            {props.data.fav===true ? <AiFillHeart color="red" onClick={()=>props.like(props.data.id)}/> : <AiOutlineHeart onClick={()=>props.like(props.data.id)}/>}


        </div>
    </div>
}

export default Collabs