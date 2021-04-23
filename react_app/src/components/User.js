import {React, useState ,useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import _ from 'lodash';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { getListUser } from '../redux/actions/usersAction';

import './css/Todo.css';


export default function HomePage(){
    const API ='https://randomuser.me/api?page=2&results=';
    
    // set dataUser
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.listUser)
    console.log('users', users)
    const [result, setResult] = useState(10);
    const [dataUser, setDataUser] = useState([]);

    // create saga - store
    // const sagaMiddleware = createSagaMiddleware();

    


    // call api to get data
    // const getDataApi = async () => {
    //     let response = await axios.get(`${API}${result}`)
    //     let data = _.get(response, "data.results", [])
    //     for(let i=0;i<data.length;i++){
    //         data[i].index = i
    //         data[i].lastName = data[i].name.last
    //         data[i].fullName =  data[i].name.title+'.'+data[i].name.first + ' ' + data[i].name.last
    //         data[i].locationStreet = data[i].location.street.name
    //         data[i].fullLocation = data[i].location.city +', '+ data[i].location.state+', '+data[i].location.country
    //         data[i].phone = data[i].phone +' or '+ data[i].cell
    //         data[i].age = data[i].dob.age
    //         data[i].avatar = data[i].picture.large
    //     }
    //     setDataUser(data)
    //     console.log(data)
    // }


    // function handle the load 5 more user data
    const handleLoadMore = async () => {
        setResult(result + 5)
        let response = await axios.get(`${API}${result}`)
        let data = _.get(response, "data.results", [])
        for (let i = 0; i < data.length; i++) {
            data[i].index = i
            data[i].name = data[i].name.last
            data[i].location = data[i].location.street.name
            data[i].age = data[i].dob.age
            data[i].avatar = data[i].picture.large
        }
        setDataUser(data)
        // console.log(data)
    }


    useEffect(() => {
        // getDataApi()
        dispatch(getListUser())
    },[dispatch]);

    console.log(users)
    // transport data user to users' detail page
    let history = useHistory();
    // console.log(history)
    function handleDetail(data){
        console.log('data props',data)
        history.push({
            pathname:`/UserDetail/${data.index}`,
            state: data,
        })
    }
    //end of transport

    return(
        <div>
            <div className="container" > 
            {dataUser.map((data) => (
                <div className="card" >
                    <Popup trigger={<img src={data.avatar} className="card-img-top" alt="..." />} position="right center">
                    <p className="card-title">{data.name}</p>
                    <p className="card-text">{data.age}</p>
                    <p className="card-text">{data.location}</p>
                    <p className="card-text">{data.phone}</p>
                    <button type="primary" shape="round"  className="button" onClick={()=>handleDetail(data)}> More Information </button>
                    </Popup>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.age}</p>
                    <p className="card-text">{data.location}</p>
                </div>
                
            </div>
            ))}
            </div>
            <button type="primary" shape="round" className="button" onClick={handleLoadMore}> Load More </button>
        </div>
    )
}
