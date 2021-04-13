import {React, useEffect, useState} from 'react'
import {Image} from 'antd'
import './css/UserDetail.css'

export default function UserDetail(props){
    const [detailUser, setDetailUser] = useState([]);
    useEffect(() => {
        getDataDetail()
    },[])
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
                        <p>Name : {detailUser.fullName}</p>
                        <p>Age : {detailUser.age}</p>
                        <p>Gender : {detailUser.gender}</p>
                        <p>Address : {detailUser.fullLocation} </p>
                        <p>Email : {detailUser.email} </p>
                        <p>Phone : {detailUser.phone} </p>
                </div>
            </div>
        </div>
    );
}