import React, { useState, useEffect , useRef } from "react"
import {  Link , Navigate, useNavigate } from "react-router-dom"
import "../App.css"
import axios from 'axios'
import {BASE_URL} from "../BaseURL"


function AddContact(props) {

    const navigate = useNavigate()

    // const[redirect, setRedirect] = useState(false)
    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const addContactRequest = (e) => {
        e.preventDefault()
        axios.post(BASE_URL, {
            name : name,
            email : email
        })
        nameInputRef.current.value = ""
        emailInputRef.current.value = ""
        setName('')
        setEmail('')

        setTimeout(() => {
            props.forceUpdate(props.reducerValue+1)
        }, 1000);
        
    }

  return (
    <div>
        <form>
           {/* { redirect && <Navigate to={'/'} />} */}
            <div className="mb-6 margin">
                <label htmlFor="exampleInputEmail1" className="form-label"> Name </label>
                <input type="text" className="form-control width" id="exampleInputEmail1" 
                ref={nameInputRef}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-6 margin">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control width" id="exampleInputPassword1" 
                ref={emailInputRef}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

  

            <div className='add-btns'>
                <button  className="btn btn-primary" onClick={(e) => {
                    e.preventDefault()
                    if( nameInputRef.current.value.length != 0 && emailInputRef.current.value.length != 0  ) {
                        addContactRequest(e)
                        setTimeout(() => {
                            navigate('/') 
                        }, 500);
                    } else {
                        alert("Empty contact is not allowed")
                    }
                }}>Add</button>
                <Link to={'/'} className="btn btn-danger">Cancel</Link>
            </div>
        </form>


        {/* {name} : {email} */}
    </div>
  )
}

export default AddContact