import React from 'react'

export default function Recipe(props) {
    const { name, servings, cookTime, sampleLink, image, instructions} = props;
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{ name }</h5>
                <div>
                    <button type="button" className="btn btn-secondary">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
            <div className="card-body">
                <div className="col-md-4">
                    <img src={ image } className="img-fluid rounded-start" alt={ name } />
                </div>
                <div className="col-md-8">
                    <div><span className="card-text">Cook time: </span><span>{ cookTime }</span></div>
                    <div><span className="card-text">Servings: </span><span>{ servings }</span></div>
                    <span className="card-text">Instructions: </span>
                    <div>
                        { instructions }
                    </div>
                    <a href={ sampleLink }>More...</a>
                </div>
            </div>
        </div>
    )
}
