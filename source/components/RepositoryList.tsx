import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";
import { RepositorySearchBar } from "./RepositorySearchBar";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/bruna93/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <div className="header">
                <h1>Lista de repositórios</h1>
            </div>
            

            <div className="search">
                <RepositorySearchBar />
            </div>
            
            <div className="container">
            <div className="label-row">
                <strong className="name">Nome</strong>
                <strong className="description">Descrição</strong>
                <strong className="url">Link</strong>
            </div>
            
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}    
                
            </ul>
            </div>
            
        </section>
    );
}