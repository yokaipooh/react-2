import { React, useState, useEffect } from 'react'
import TableForm from '../components/Table'
import { Button, Tooltip } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios'
import _ from 'lodash'
import '../App.css'

export default function HomePage() {
    const [dataUser, setDataUser] = useState([]);
    const [result, setResult] = useState(10);
    const url = "https://randomuser.me/api?page=2&results=";
    useEffect(() => {
        getDataApi()
    }, [])
    const getDataApi = async () => {
        let response = await axios.get(`${url}${result}`)
        let data = _.get(response, "data.results", [])
        for (let i = 0; i < data.length; i++) {
            data[i].name = data[i].name.last
            data[i].location = data[i].location.street.name
            data[i].age = data[i].dob.age
            data[i].avatar = data[i].picture.large
        }
        setDataUser(data)
    }
    const handleLoadMore = async () => {
        setResult(result + 5)
        let response = await axios.get(`${url}${result}`)
        let data = _.get(response, "data.results", [])
        for (let i = 0; i < data.length; i++) {
            data[i].name = data[i].name.last
            data[i].location = data[i].location.street.name
            data[i].age = data[i].dob.age
            data[i].avatar = data[i].picture.large
        }
        setDataUser(data)
    }
    return (
        <div className="container">
            <h1>List User</h1>
            <TableForm data={dataUser} />
            <div className="button-load-more" style={{marginTop: 50}}>
                <Tooltip title="load more">
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large" onClick={handleLoadMore}>
                        LOAD MORE
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}