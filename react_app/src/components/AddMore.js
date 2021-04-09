import {React, useState ,useEffect } from 'react';
// import TableForm from './Table'
import axios from 'axios';
import _ from 'lodash';
import {slice, concat} from 'lodash';

const loadMore = () => {
    const [newData,setNewData] = useState([]);

    const getMoreDataApi = async () => {
        let response = await axios.get('https://randomuser.me/api?page=2&results=10')
        let dataNew = _.get(response, "data.results", [])
        for(let i=0;i<dataNew.length;i++){
            dataNew[i].name = dataNew[i].name.last
            dataNew[i].location = dataNew[i].location.street.name
            dataNew[i].age = dataNew[i].dob.age
            dataNew[i].avatar = dataNew[i].picture.large
        }
        setNewData(dataNew)
        console.log(dataNew)
        console.log(newData)
        useEffect(()=>{
            getMoreDataApi()
        },[])
    }
    return (
        <button onClick={loadMore}> Load More </button>
    );
}
export default loadMore;