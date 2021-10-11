
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import{useSelector,useDispatch} from'react-redux'
import React, { useState,useEffect } from 'react'
import { editContact, postContact } from './../Js/Actions/Contacts';

function Add() {
  const edit = useSelector(state => state.ContactReducer.edit)
  const userReducer = useSelector(state => state.ContactReducer.user)
const dispatch = useDispatch()

const [user, setuser] = useState({name:"",email:"",phone:""});

 useEffect(() => {
   
edit?setuser(userReducer):setuser({name:"",email:"",phone:""})

 }, [edit,userReducer])

const handleContact=() => {
  edit?dispatch(editContact(userReducer._id,user)):dispatch(postContact(user))
}

const handlechange=(e) => {
  setuser({...user,[e.target.name]:e.target.value})
}
    return (
        <div>
           <Form style={{width:"500px",marginLeft:"400px"}}>
    <Form.Field>
      <label>Name</label>
      <input name="name" value={user.name}  onChange={handlechange}/>
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input  name="email" value={user.email} onChange={handlechange}/>
    </Form.Field>

    <Form.Field>
      <label>Phone</label>
      <input placeholder='Enter phone' name="phone" value={user.phone} onChange={handlechange}/>
    </Form.Field>
    
    <Button type='submit' onClick={handleContact} >{edit?"Edit":"Add"}</Button>
    <Link to="/"> <Button type='submit'>Close</Button></Link>
  </Form>
        </div>
    )
}

export default Add
