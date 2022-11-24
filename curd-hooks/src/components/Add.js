import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

function Add(){

    const [name,setName] = useState('');
    const [age,setAge] =useState('');
    const [status,setStatus] =useState('');

    let histroy = useNavigate()

    var handleSubmit =(e)=>{
        e.preventDefault()

        const ids = uuid()
        let uniqId = ids.slice(0,8)

        let a = name,
        b = age,
        c = status

        Employee.push({id:uniqId, Name:a, Age: b, Status: c} )
        
        histroy("/")

    }


    return(
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}} >
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Fullname' required  onChange={(e)=>setName(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formAge'  >
                    <Form.Control type='number' placeholder='Enter your age' required   onChange={(e)=>setAge(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formStatus'  >
                    <Form.Select  placeholder='Enter your age' required  onChange={(e)=>setStatus(e.target.value)} >
                        <option>True</option>
                        <option>False</option>
                        <option>Other</option>
                    </Form.Select>
                </Form.Group>

                <Button type='submit' onClick={(e)=> handleSubmit(e)} >Submit</Button>
            </Form>
        </div>
    )
}

export default Add


