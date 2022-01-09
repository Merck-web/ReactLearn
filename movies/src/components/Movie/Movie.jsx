import './index.scss'
function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return <div id={id} className="movie">
        <div className='flexCard'>
            <div className="card">
                <div className="card-image">
                    {
                        poster === 'N/A' ? <img src={`https://via.placeholder.com/468x60?text=${title}`} /> : <img src={poster} />
                    }
                    <span className="card-title">{title}</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                    <p>{year} <span>{type}</span> </p>
                </div>
            </div>
        </div>
    </div>
}
export { Movie }