import React from 'react'
import "../App.css"
import axios from 'axios'
import {BASE_URL} from "../BaseURL"
import {  Link , useNavigate } from "react-router-dom"


const placeholderImage = `https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`

function Contact(props) {

    


    const navigate = useNavigate()

    const deleteContact = (id) => {
        console.log(id);
        axios.delete(`${BASE_URL}/${id} `)

        setTimeout(() => {
            // window.location.reload(true)
            props.forceUpdate(props.reducerValue+1)
        }, 900);

        
            
        
    }



  return (
    <div className={ props.id ? 'contact-container' : "blocked" }>
        <div className='first-box'>
            
            <div className='img-container'>
                <img src={placeholderImage} alt="display-picture" className='display-picture' />
            </div>

            <div className='details-container'>
                <p className='contant-name'> {props.name}</p>
                <p className='contant-email' > 📧 : {props.email}</p>
            </div>

        </div>


        <div className='button-container'>
            {/* BACKUP */}
            <Link to={'/updatecontact'}  state={ props.id}  > <i className="fa-solid fa-pen-to-square update-icon"></i>  </Link>




            {/* <i className="fa-solid fa-pen-to-square update-icon"  onClick={() => navigate("/updatecontact", {state : props.id } ) } ></i>   */}
            <i className="fa-solid fa-trash delete-icon" onClick={() => deleteContact(props.id)} ></i>


            {/* <button onClick={() => console.log(props)} > LOG FULL PROP </button> */}
        </div>
    </div>
  )
}

export default Contact


// BACKUP
{/* <Link to={'/updatecontact'}  state={ props.id}  > <i className="fa-solid fa-pen-to-square update-icon"  ></i>  </Link> */}