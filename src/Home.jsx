import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
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
            {
                users.map((item) => (
                    <li  key={item.id}>
                    <Link  to={`/user/${item.id}`}  > {item.name} </Link>
                    </li>

                    
                    
                    
                ))
            }
          
        
   
      </div>
    );
}

export default Home;
