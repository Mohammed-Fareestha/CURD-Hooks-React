import React,{useEffect, useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

function Edit(){
    const [name,setName] = useState('');
    const [age,setAge] =useState('');
    const [status,setStatus] =useState('');
    const [id,setId] =useState('');

    let histroy = useNavigate()

    var index = Employee.map(function(e){
        return e.id
    }).indexOf(id)

    var handleSubmit =(e)=>{
        e.preventDefault()

        let a = Employee[index];
        a.Name = name;
        a.Age = age;
        a.Status = status

        histroy("/")
    }

    useEffect=(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setStatus(localStorage.getItem('Status'))
        setId(localStorage.getItem('Id'))
    },[])

    return(
        <div>
              <Form className='d-grid gap-2' style={{margin:"15rem"}} >
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Fullname' value={name}  onChange={(e)=>setName(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formAge'  >
                    <Form.Control type='number' placeholder='Enter your age' value={age}   onChange={(e)=>setAge(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formStatus'  >
                    <Form.Select  placeholder='Enter your age' value={status}  onChange={(e)=>setStatus(e.target.value)} >
                        <option>True</option>
                        <option>False</option>
                        <option>Other</option>
                    </Form.Select>
                </Form.Group>

                <Button type='submit' onClick={(e)=> handleSubmit(e)} >Update</Button>
            </Form>
        </div>
    )
}

export default Edit