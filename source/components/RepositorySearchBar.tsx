import '../styles/repositorySearchBar.scss'

export function RepositorySearchBar(){
    return (
        <form id="form"> 
            <input 
            type="search" 
            id="query" 
            name="q" 
            placeholder="Pesquisar..."
            aria-label="Search through site content"
            />
            <button>
                <img src="https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1616083014~hmac=9f603c7876f4d1ef3fe67bcf55017a22" title="Flaticon" alt="search-icon"/>
            </button>
        </form>
    );
}