import "../App.css";

function FilmCard({film}){

    return(
        
        <div className="container divAllB">
        <h2>{film.title}</h2>
        <img className="filmImage" src={film.image} alt={film.title}/>
        <p>year: {film.year}</p>
        </div>   
       
    );
}

export default FilmCard;