import { React } from 'react'
import { Image } from 'antd';
import MaterialTable from 'material-table';


const Columns = [
    { title: 'Avatar', field: 'avatar', type: "String", render: rowData => <Image src={rowData.avatar} /> },
    { title: 'Name', field: 'name', type: "String" },
    { title: 'Address', field: 'location', type: "String" },
]

export default function TableFrom(props) {
    console.log('data Table', props.data)
    return (
        <div>
            <MaterialTable
                title="Danh sách các User "
                columns={Columns}
                data={props.data}
                editable={{
                    onRowUpdate: ((newData, oldData) => {
                        console.log('Update user')
                    }),
                    onRowDelete: ((oldData) => {
                        console.log('delete')
                    }),
                }}
                    actions={
                        [
                        {
                            icon: 'save',
                            tooltip: 'Detail',
                            onClick: (event, rowData) => {
                                console.log('data', rowData)
                            }
                        }
                        ]}
                    />
        </div>
    )
}