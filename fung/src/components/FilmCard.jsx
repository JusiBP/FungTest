import "../App.css";

function FilmCard({film}){

    return(
        
        <div className="container divAllB filmCard">
        <h3>{film.title}</h3>
        <img className="filmImage" src={film.image} alt={film.title}/>
        <p>year: {film.year}</p>
        </div>   
       
    );
}

export default FilmCard;