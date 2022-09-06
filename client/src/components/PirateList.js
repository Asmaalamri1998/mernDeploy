import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
    
const AuthorList = (props) => {
    

    const { removeFromDom } = props;
    
    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8000/api/pirates/' + pirateId)
            .then(res => {
                removeFromDom(pirateId)
            })
            .catch(err => console.error(err));
    }


    
    return (
        <div className='wrapper'>
        <div className='parent1'>
            <div className='formheader'>
                <h1> PirateCrew </h1>
            <button className='crewbtn'><Link className='link' to={'pirates/new'}>
                Add Pirate
            </Link> </button>
            </div>
            <div >
                {
                    
                    props.pirate.sort().map((pirate, index)=>(
                        <div className='form1'>
                        <div key={index}>
                             <img src={pirate.image} height="100" width="100"/>

                             {pirate.name} <br/>

                            <div className='btns'>
                            <button className='crewbtn'><Link className='link' to={'pirate/'+ pirate._id}>
                                View Pirate
                            </Link> </button>

                            <button className='dele' onClick={(e)=>{deletePirate(pirate._id)}}>
                                Walk the Plank
                            </button>
                            </div>

                        </div>
                        </div>
                        

                        
                       
                    )
                    )
                }
                </div> <br/> 
                

            
        </div>
        </div>
    )
}
    
export default AuthorList;

