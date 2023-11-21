import { useState } from "react";
import api from "../../services/api";

export default function Form(){
    
    const [filme, setFilme] = useState({});

    function handleSend(){
        api.post('/movies',{
            title: filme.title,
            category: filme.category,
            release: filme.release
        })
    }

    return(
        <div className="filme-info">
            <input type="text" value={filme.title} onChange={(e)=>setFilme({...filme, title:e.target.value})}/>
            <input type="text" value={filme.category} onChange={(e)=>setFilme({...filme, category:e.target.value})}/>
            <input type="date" value={filme.release} onChange={(e)=>setFilme({...filme, release:e.target.value})}/>
            <button onClick={handleSend}>Enviar</button>
        </div>
    )
}