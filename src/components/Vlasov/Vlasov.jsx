import s from './Vlasov.module.css';





let CATALOG = [];
// fetch("https://bymykel.github.io/CSGO-API/api/skins.json")
 //fetch("https://bymykel.github.io/CSGO-API/api/agents.json")
 fetch("https://api.tvmaze.com/people")
    .then((data) => data.json())
    .then(body=>{CATALOG=body})

//let cat = CATALOG.filter(e=>e.id<10)

const Vlasov = () => {

   
    

    return (
        <>
            <span>Vla</span>
            
            

            <ul className={s.list__container}>




          {
          
          
          CATALOG.filter(e=>e.id<100&&e.name&&e.image).map(({ id, name, image:{medium} }) =>

          
            <li  key={id} className={s.list__item}>
                
              <img className={s.person__photo}  src= {medium} alt={name} />
              <p>{name}</p>
             
            </li>



            
          )
}





        </ul>
            
            

            
        </>
    )
}

export default Vlasov;
