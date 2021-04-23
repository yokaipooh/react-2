import {React, useEffect, useState} from 'react'
import './css/UserDetail.css'

export default function UserDetail(props){

    //  hook function for user's data
    const [detailUser, setDetailUser] = useState([]);


    useEffect(() => {
        getDataDetail()
    },[])

    // set user's detail with the data get from the user list
    const getDataDetail =  () => {
       let data = props.location.state
       setDetailUser(data)
       console.log(data)
    }
    return(
        <div> 
            <h1 style={{textAlign: 'center', padding: 50, fontFamily: 'sans-serif'}}>Detail User</h1> 
            <div className="box-detail">
            <img src={detailUser.avatar} className="card-img-top" alt="..." />
                <div className="user_detail">
                        <p>Name : {detailUser.name}</p>
                        <p>Age : {detailUser.age}</p>
                        <p>Gender : {detailUser.gender}</p>
                        <p>Address : {detailUser.location} </p>
                        <p>Email : {detailUser.email} </p>
                        <p>Phone : {detailUser.phone} </p>
                </div>
            </div>
        </div>
    );
}