import './App.css';
import { useState, useEffect, useReducer } from "react"
import Contact from './components/Contact';
import UpdateContact from './pages/UpdateContact';
import AddContact from './pages/AddContact';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "./BaseURL"


function App() {

  const [reducerValue, forceUpdate] = useReducer(x => x + 1 , 0 )

  const [contactList, setContactList] = useState([])

  const getContactList = () => {
    axios.get(BASE_URL)
    .then((response) => {
      setContactList(response.data)
    })
  }

  useEffect(() => {
    getContactList()
  },[reducerValue])



  return (
    <BrowserRouter>
      <div className="App">
        <h1> Contact Manager 💼 </h1>

        <div className='nav-bar'> 
          <h3>😀 Your Contact List</h3>
          <Link to={'/addcontact'} className='btn btn-primary'> Add Contact  </Link>
        </div>

    
        {/* { contactList.map((contact) => {
          return  (
            <div key={contact.id}>
               <Contact 
                id = {contact.id}
                name = {contact.name}
                email = {contact.email}
                avatar = {contact.avatar}
                />
            </div>
          ) 
        })} */}


        <Routes> 
          {/* <Route exact path= '/' element={<Contact />} /> */}
          <Route exact path= '/' element={ <div className='all-contact-container'>
                { contactList.length != 0 ? contactList.map((contact) => {
                  
                    return  (
                      <div key={contact.id}>
                        <Contact 
                          id = {contact.id}
                          name = {contact.name}
                          email = {contact.email}
                          avatar = {contact.avatar}
                          reducerValue={reducerValue}
                          forceUpdate={() => forceUpdate()} 
                          
                          />
                      </div> 
                    ) 
            }  ) : <div className='EMPTY'>

              <h2> EMPTY LIST 🐥 </h2>
            </div> }
          </div> } />

          
          <Route exact path= '/addcontact' element={<AddContact forceUpdate={forceUpdate} reducerValue={reducerValue} />} />
          <Route exact path='/updatecontact' element={<UpdateContact forceUpdate={forceUpdate} reducerValue={reducerValue}  />}  />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
