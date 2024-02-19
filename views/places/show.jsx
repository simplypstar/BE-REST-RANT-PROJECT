const React = require('react')
const Def = require('../default')

function show (data) {
    // let placesFormatted = data.places.map((place))
    return (
        <Def>
          <main>
            <div  className="row" >
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name}/>
                    <h2>Comments</h2>
                    <h5>No comments yet!</h5>
                </div>
                <div className="col-sm-6">
                    <h1>{ data.place.name }</h1>
                    <h2>Rating</h2>
                    <h5>Not Rated Yet!</h5>
                    <h2>Description</h2>
                    <h5>Located in {data.place.city}, {data.place.state}</h5>
                    <h5>Serving {data.place.cuisines}</h5>
                    <h5>Founded {data.place.founded}</h5>
                </div>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                <i className="bi bi-pencil-square"></i>
                    Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                     Delete
                </button>
            </form>     
          </main>
        </Def>
    )
}

module.exports = show
