import {React, useState ,useEffect } from 'react';
// import TableForm from './Table'
import axios from 'axios';
import _ from 'lodash';
//import {slice, concat} from 'lodash';
import './Todo.css';


export default function HomePage(){
    const API ='https://randomuser.me/api?page=2&results=';
    
    const [result, setResult] = useState(10);
    const [dataUser, setDataUser] = useState([]);

    const getDataApi = async () => {
        let response = await axios.get(`${API}${result}`)
        let data = _.get(response, "data.results", [])
        for(let i=0;i<data.length;i++){
            data[i].name = data[i].name.last
            data[i].location = data[i].location.street.name
            data[i].age = data[i].dob.age
            data[i].avatar = data[i].picture.large
        }
        setDataUser(data)
        console.log(data)
    }

    const handleLoadMore = async () => {
        setResult(result + 5)
        let response = await axios.get(`${API}${result}`)
        let data = _.get(response, "data.results", [])
        for (let i = 0; i < data.length; i++) {
            data[i].name = data[i].name.last
            data[i].location = data[i].location.street.name
            data[i].age = data[i].dob.age
            data[i].avatar = data[i].picture.large
        }
        setDataUser(data)
    }


    useEffect(() => {
        getDataApi()
    },[]);
    
    return(
        <div>
            <div className="container" > 
            {dataUser.map((data) => (
                <div className="card" >
                <img src={data.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.age}</p>
                    <p className="card-text">{data.location}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            ))}
            </div>
            <button type="primary" shape="round" className="button" onClick={handleLoadMore}> Load More </button>
        </div>
    )
}
