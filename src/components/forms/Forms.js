import "./Forms.css"
import TextField from "../textField/TextField"
import OptionList from "../optionList/OptionList"
import Button from "../button/Button"
import { useState } from "react"
import {v4 as uuid} from "uuid";

function Forms(props){

    
    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");

    const [titulo,setTitulo] = useState("");
    const [color,setColor] = useState("");



    const manageSend=(evento)=>{
        evento.preventDefault();
        let entryData = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo,
            fav:false
        }
        props.registerCollabs(entryData);
    }


    const manageNewTeam=(evento)=>{
        evento.preventDefault();
        let entryData = {
            id: uuid(),
            titulo: titulo,
            colorPrimario: color
        }
        props.createTeam(entryData);
    }

    return <section className="forms">
        <form onSubmit={manageSend}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            
            <TextField titulo="Nombre" 
            placeHolder="Ingresar el nombre" 
            required 
            valor={nombre} 
            actualizarValor={setNombre}/>

            <TextField titulo="Puesto" 
            placeHolder="Ingresar el puesto"  
            required
            valor={puesto} 
            actualizarValor={setPuesto} />

            <TextField titulo="Foto" 
            placeHolder="Ingresar el enlace de la foto" 
            required
            valor={foto} 
            actualizarValor={setFoto}/>

            <OptionList valor={equipo}
            actualizarValor={setEquipo}
            teams={props.teams}
            />
            <Button>Crear colaborador</Button>
        </form>
        <form onSubmit={manageNewTeam}>
            <h2>Rellena el formulario para crear el equipo</h2>
            
            <TextField titulo="Título" 
            placeHolder="Ingresar el título" 
            required 
            valor={titulo} 
            actualizarValor={setTitulo}/>

            <TextField titulo="Color" 
            placeHolder="Ingresar el color en hexadecimal"  
            required
            valor={color} 
            actualizarValor={setColor} 
            type="color"/>
            
            <Button>Crear equipo</Button>
        </form>
        </section>
    
}

export default Forms