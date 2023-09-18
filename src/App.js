
import './App.css';
import Header from "./components/header/Header";
import MyOrg from './components/myOrg/MyOrg';
import Team from './components/team/Team';
import Forms from './components/forms/Forms';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import {v4 as uuid} from "uuid";

function App() {

  const [showForms,updateStateForms] = useState(false)
  const [colabs,setColabs]=useState([
    {
          id:uuid(),
          nombre: "Kiryu",
          puesto: "Programación Front End",
          foto: "https://avatars.githubusercontent.com/u/121646210?v=4",
          equipo: "Front End",
          fav: true
    }
  ]);
  const [teams,setTeams]=useState([
      {
        id:uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id:uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id:uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id:uuid(),
        titulo: "DevOps",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id:uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id:uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id:uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
  ]);

  function changeShow(){
    updateStateForms(!showForms)
  }

  function registerCollabs (colab){
    setColabs([...colabs,colab]);
  }

  function deleteCollab(id){
    const newCollabs = colabs.filter((collab)=> 
    {
      return collab.id !== id});
    setColabs(newCollabs);
  }

  function updateColor(color,id){
    const updatedTeams=teams.map((team) =>{
      if (team.id===id){
        team.colorPrimario=color;
      }
      return team;
    })
    setTeams(updatedTeams);
  }


  function createTeam(newTeam){
    setTeams([...teams,{...newTeam, id:uuid()}])

  }

function like(id){
  const updatedCollabs = colabs.map((collab)=>{
    if (collab.id ===id){
      collab.fav = !collab.fav;
    }
    return collab;
  })
    setColabs(updatedCollabs);
  }

  return (
    <div>
      <Header/>
      {
        showForms && <Forms teams={teams.map((team)=> team.titulo)}
        registerCollabs={registerCollabs}
        createTeam={createTeam}
        />
      }
      <MyOrg changeShow={changeShow}/>

      {
        teams.map( (teams)=>{
          return <Team data={teams} key={teams.titulo}
          collabs={colabs.filter(colaborador=> colaborador.equipo === teams.titulo)}
          deleteCollab={deleteCollab}
          updateColor={updateColor}
          like={like}
          />
        } )
      }

      <Footer/>
    </div>
  );
}

export default App;
