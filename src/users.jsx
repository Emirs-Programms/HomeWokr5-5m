import React from 'react';
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState(null);
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUserdata(data)
                setLoading(false);})

            .catch(error => console.error('Error fetching data:', error)); 
    }, []); 
    if(loading){
        return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    }
    return (
       
        <div>
            <button onClick={()=>{
                navigate('/')
            }}>GO HOME</button>
          {userdata && (
            <div className='userdata'>
                
                <p>Name: {userdata.name}</p>
                
                <p>EmaiL: {userdata.email}</p>
                <p>Phone: {userdata.phone}</p>
                <p>WebSite: {userdata.website}</p>
                
                </div>
          )}
          
        </div>

    );
}

export default Users;
