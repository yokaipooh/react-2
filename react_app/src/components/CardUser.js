import React from 'react';



export default function CardUser(data){
    <div className="container"> 
            <div className="card" style={{"width: 18rem;"}}>
                <img src={data.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.age}</p>
                    <p className="card-text">{data.location}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
}


