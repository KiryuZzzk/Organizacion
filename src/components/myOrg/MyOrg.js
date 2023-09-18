import "./MyOrg.css"

function MyOrg(props){
    
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow}/>
    </section>
}

export default MyOrg