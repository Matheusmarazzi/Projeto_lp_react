import { useState, useEffect } from "react"
import api from "../../services/api"
import { Link, useParams, useNavigate } from "react-router-dom"

export default function Edit(){
    
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function handleSend(){
        api.put(`/movies/${id}`,{
            title: filme.title,
            category: filme.category,
            release: filme.release
        })
    }
    function handleDelete(){
        api.delete(`/movies/${id}`)
    }

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movies/${id}`)
            .then((response)=>{
                setFilme(response.data.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", {replace: true});
                return;
            })
        }
        loadFilme();
    },[navigate, id])

    if(loading){
        return(
            <div className="filme-info">
                <h1>carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <input type="text" value={filme.title} onChange={(e)=>setFilme({...filme, title:e.target.value})}/>
            <input type="text" value={filme.category} onChange={(e)=>setFilme({...filme, category:e.target.value})}/>
            <input type="date" value={filme.release} onChange={(e)=>setFilme({...filme, release:e.target.value})}/>
            <button onClick={handleSend}>Enviar</button>
            <button onClick={handleDelete}>Deletar</button>
        </div>
    )
}