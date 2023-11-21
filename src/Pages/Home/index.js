import { useState, useEffect } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"

export default function Home(){
    
    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get("movies/")
            setData(response.data.data)
            console.log(data)
            setLoad(false)  
        }
        loadMovies();


    },[])



    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);




    if(load){
        return(
            <div className="loading">
                <h1>carregando filme...</h1>
            </div>
        )
    }
    return(
        <div className="container">
            
            <div className="lista-filmes">
                {data.map((filme)=>{
                    return(
                        <article className="filmes" key={filme.id}>
                            <strong className="titulo">Titulo: {filme.title}</strong>
                            <Link className="link" to={`/edit/${filme.id}`}>Ver detalhes</Link>
                        </article>
                    )
                })}
                <Link to='/add'>Adicionar</Link>
            </div>
        </div>
    )
}