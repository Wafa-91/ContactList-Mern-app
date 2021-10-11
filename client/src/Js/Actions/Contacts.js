import { GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES,GET_CONTACTS_FAIL,TOGGLE_TRUE,TOGGLE_FALSE,GET_ONE_CONTACT_SUCC,GET_ONE_CONTACT_FAIL, POST_CONTACT_FAIL,EDIT_CONTACT_FAIL,EDIT_MSG } from './../Constants/ContactTypes';

import axios from 'axios'

export const getAllContact=()=>async(dispatch)=>{
  dispatch({type:GET_CONTACTS_LOAD})
  try {
   let result= await axios.get('/api/contact/')
      dispatch({type:GET_CONTACTS_SUCCES,payload:result.data.result})
  } catch (error) {
      dispatch({type:GET_CONTACTS_FAIL,payload:error})
  }

}



// export const deleteContact=(id)=>dispatch=>
// {
//  axios.delete(`api/contact/${id}`).then(res=>dispatch(getAllContact())).catch(err=>console.log(err))
// }

export const deleteContact = (id)=>async(dispatch)=>
{
  
  try {
    const result=await axios.delete(`api/contact/${id}`)
     dispatch(getAllContact())
    
  } catch (error) {
    console.log(error)
  }
}

export const toggleTrue= () =>
{
  return {type:TOGGLE_TRUE}
}

export const toggleFalse= () =>
{
  return {type:TOGGLE_FALSE}
}


export const getOneContact=(id)=>async(dispatch)=>
{
 try {
  const result=await axios.get(`api/contact/${id}`)
  dispatch({type:GET_ONE_CONTACT_SUCC,payload:result.data.result})
   
 } catch (error) {
   dispatch({type:GET_ONE_CONTACT_FAIL,payload:error})
   
   console.log(error)
 }

}

//postcontact
export const postContact=(newContact)=>async(dispatch)=>
{
  try {
    const result=await axios.post('/api/contact',newContact)
    dispatch(getAllContact())
  } catch (error) {
    dispatch({type:POST_CONTACT_FAIL,payload:error})
  }
}

//edit contact

export const editContact=(id,EditContact)=>async(dispatch)=>
{
  try {
    const result=await axios.put(`/api/contact/${id}`,EditContact)
    dispatch(getAllContact())
    dispatch({type:EDIT_MSG,payload:result.data.message})

  } catch (error) {
    dispatch({type:EDIT_CONTACT_FAIL,payload:error})
  }
}