
import { Button, Card, Image } from 'semantic-ui-react'
import{Link}from 'react-router-dom'
import{useDispatch,useSelector} from'react-redux'
import { deleteContact, getOneContact, toggleTrue } from './../Js/Actions/Contacts';
import React, { useState } from 'react'



function Contact({contact}) {
  const dispatch = useDispatch()
  
    return (
        <div>
             <Card >
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{contact.name}</Card.Header>
        
        <Card.Description>
          {contact.email}
        </Card.Description>

        <Card.Description>
          {contact.phone}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        
        <Button inverted  color='green'>
           <Link to={`/contact/edit/${contact._id}`}  onClick={()=>{dispatch(toggleTrue());dispatch(getOneContact(contact._id))}}>
          
            Edit
            </Link>
          </Button> 
         
          <Button inverted  color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}

export default Contact
