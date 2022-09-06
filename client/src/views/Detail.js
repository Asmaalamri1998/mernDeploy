import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

    
const Detail = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' +id)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>name: {pirate.name}</p>
            <img src={pirate.image} height='200' width='200'/>
            <p>number of treasure: {pirate.treasure}</p>
            <p>phrase: {pirate.phrases}</p>
            <p>position: {pirate.position}</p>
            <p>peg leg: {pirate.pegleg}</p>
            <p>Eye patch: {pirate.eyepatch}</p>
            <p>Hand hook: {pirate.handhook}</p>

        </div>
    )
}
    
export default Detail;