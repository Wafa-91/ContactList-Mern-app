//import types
 import{GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES,GET_CONTACTS_FAIL,TOGGLE_TRUE,TOGGLE_FALSE,GET_ONE_CONTACT_SUCC,GET_ONE_CONTACT_FAIL,POST_CONTACT_FAIL,EDIT_MSG}from '../Constants/ContactTypes'



 //initialisation state
const initialState={
    contacts:[],
    errors:null,
    loadContacts:false,
    edit:false,
    user:{},
    editMSG:null
}

//pure function
 export const ContactReducer=(state=initialState,{type,payload})=>
 {
switch (type) {
    case GET_CONTACTS_LOAD: return{...state,loadContacts:true}
    case GET_CONTACTS_SUCCES: return {...state,contacts:payload,loadContacts:false}  
    case GET_CONTACTS_FAIL :return {...state,loadContacts:false,errors:payload}
    case TOGGLE_TRUE :return {...state,edit:true}  
    case TOGGLE_FALSE :return {...state,edit:false}   
    case GET_ONE_CONTACT_SUCC:return {...state,user:payload}
    case GET_ONE_CONTACT_FAIL:return {...state,errors:payload}
    case POST_CONTACT_FAIL:return {...state,errors:payload}
    case EDIT_MSG:return {...state,editMSG:payload}
    default: return state
}
 }