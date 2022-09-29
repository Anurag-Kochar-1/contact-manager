import React, {useState, useEffect , useRef} from 'react'
import axios from 'axios'
import {  Link , useLocation , useNavigate } from "react-router-dom"
import { BASE_URL } from '../BaseURL'



function UpdateContact(props) {


    


    const location = useLocation()
    const navigate_updateContact = useNavigate()



    


  const updatedNameInputRef = useRef(null)
  const updatedEmailInputRef = useRef(null)

  const [updatedName, setUpdateName] = useState("")
  const [updatedEmail, setUpdateEmail] = useState("")
    

  const updateContactReqToApi = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/${location.state}` , {
        name: updatedName,
        email : updatedEmail
    })

    updatedNameInputRef.current.value = ""
    updatedEmailInputRef.current.value = ""
    setTimeout(() => {
        setUpdateName('')
        setUpdateEmail('')
    },1000);

    setTimeout(() => {
        props.forceUpdate(props.reducerValue+1)
    }, 600); 

  }
  

  return (
    <div className='update-container'>
        <form>
           
            <div className="mb-6 margin">
                <label htmlFor="exampleInputEmail1" className="form-label"> Name </label>
                <input type="text" className="form-control width" id="exampleInputEmail1" 
                onChange={(e) => setUpdateName(e.target.value) }
                ref={updatedNameInputRef}
                />
            </div>

            <div className="mb-6 margin">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control width" id="exampleInputPassword1" 
                onChange={(e) => setUpdateEmail(e.target.value) }
                ref={updatedEmailInputRef}
                
                />
            </div>

  

            <div className='add-btns'>
                <button  className="btn btn-primary" onClick={(e) => {
                    if(updatedNameInputRef.current.value.length !== 0 &&  updatedEmailInputRef.current.value.length !== 0) {
                        updateContactReqToApi(e)
                        setTimeout(() => {
                            navigate_updateContact ('/') 
                        }, 1000);
                    } else  {
                        alert("Fill the required fields")
                    }
                }} 
                onKeyUp={(e) => {
                    if(e.key == 'Enter' && updatedNameInputRef.current.value.length !== 0 &&  updatedEmailInputRef.current.value.length !== 0  ) {
                        updateContactReqToApi(e)
                        setTimeout(() => {
                            navigate_updateContact ('/') 
                        }, 500);
                    }
                }}
                
                
                > Update </button>
                    
                
                <Link to={'/'} className="btn btn-danger">Cancel</Link>
            </div>


                {/* <h1> location ID : {location.state} </h1> */}

            
        </form>
    </div>
  )
}

export default UpdateContact