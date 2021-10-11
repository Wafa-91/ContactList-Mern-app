import React,{useEffect} from 'react'
import { getAllContact } from './../Js/Actions/Contacts';
import {useDispatch,useSelector}from 'react-redux'
import Contact from './Contact';


function ContactList() {
    const dispatch = useDispatch()
    
    const contacts = useSelector(state => state.ContactReducer.contacts)
    const loadContacts= useSelector(state => state.ContactReducer.loadContacts)
    
 
    useEffect(() => {
        dispatch(getAllContact())
    }, []);

console.log(contacts,loadContacts)


    return (
        <div>
            {loadContacts?<h1>loading</h1>:

           
             <div className="contactlist"> {contacts.map(el=><Contact key={el._id} contact={el}/>)}</div> }
        </div>
    )
}

export default ContactList
