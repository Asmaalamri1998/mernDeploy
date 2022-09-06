import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PirateList from '../components/PirateList';

    
const Show = (props) => {
    const [pirate, setPirate] = useState([]);

    const strAscending = [...pirate].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );

    
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirate(res.data);
            })
            .catch(err => console.error(err));
    },[pirate]);
    const removeFromDom = pirateId => {
        setPirate(pirate.filter(pirate => pirate._id != pirateId));
    }
    return (
        <div>
           
           { <PirateList pirate={strAscending} removeFromDom={removeFromDom} />}
        </div>
    )
}
    
export default Show;

