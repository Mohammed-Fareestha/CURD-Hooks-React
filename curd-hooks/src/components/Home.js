import React, { Fragment } from 'react'
import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom'
import './Home.css'


export default function Home(){


//useNavigate-histroy
const histroy = useNavigate()

//handleEdit Edit
const handleEdit= (id,name,age,status)=>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Status',status)
    localStorage.setItem('Id',id)
}

//DeleteHandeler    
    const handleDelete = (id) => {
        var index = Employee.map(function(e){
            return e.id
        }).indexOf(id)
        Employee.splice(index,1)
        histroy('/')
    }

     

    return(
        <Fragment>
            <div style={{margain:'10rem'}} >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                status
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Employee && Employee.length >0
                            ?
                            Employee.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            {item.Status}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button className='edit' onClick={()=> handleEdit(item.id, item.Name, item.Age, item.Status)} >Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button className='delete'  onClick={()=> handleDelete(item.id)} >Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Employee Record Avalabile"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='' to={'/create'}> 
                    <Button className='create' size='lg' >Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}




// create ---> d-grid gap-2