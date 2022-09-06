import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default () => {
    
    const [name, setName] = useState(""); 
    const [nameError, setNameError] = useState("");
    const [image, setImage] = useState(""); 
    const [imageError, setImageError] = useState("");
    const [treasure, setTreasure] = useState(""); 
    const [treasureError, setTreasureError] = useState("");
    const [phrases, setPhrases] = useState(""); 
    const [phrasesError, setPhrasesError] = useState("");
    const [position, setPosition] = useState("");
    const [positionError, setPositionError] = useState("");
    const [pegleg, setPegleg] = useState(true);
    const [peglegError, setPeglegError] = useState("");
    const [eyepatch, setEyepatch] = useState(true);
    const [eyepatchError, setEyepatchError] = useState("");
    const [hookhand, setHookhand] = useState(true);
    const [hookhandError, setHookhandError] = useState("");
    const [error, setError] = useState([]); 
    const history = useHistory();
    

    const onSubmitHandler = e => {
        
        e.preventDefault();

        axios.post('http://localhost:8000/api/pirates/new', {
            name,
            image,
            treasure,
            phrases,
            position,
            pegleg,
            eyepatch,
            hookhand

        })
            .then(res=>history.push('/pirates'))
            .catch(err=> {
                console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
          
    }

    const handleName = (e) =>{
        if(e.target.value.length < 1){
            setNameError("name is required")
        }
        else{
            setNameError("")
        }
        setName(e.target.value)
    }

    const handleImage = (e) =>{
        if(e.target.value.length < 1){
            setImageError("image is required")
        }
        else{
            setImageError("")
        }
        setImage(e.target.value)
    }

    const handleTreasure = (e) =>{
        if(e.target.value.length < 1){
            setTreasureError("treasure is required")
        }
        else{
            setTreasureError("")
        }
        setTreasure(e.target.value)
    }

    const handlePhrases = (e) =>{
        if(e.target.value.length < 1){
            setPhrasesError("phrases is required")
        }
        else{
            setPhrasesError("")
        }
        setPhrases(e.target.value)
    }

    const handlePosition = (e) =>{
        if(e.target.value.length < 1){
            setPositionError("position is required")
        }
        else{
            setPositionError("")
        }
        setPosition(e.target.value)
    }

    const handlePegleg = (e) =>{
        if(e.target.value.length < 1){
            setPeglegError("peg leg is required")
        }
        else{
            setPeglegError("")
        }
        setPegleg(e.target.checked)
    }

    const handleEyepatch = (e) =>{
        if(e.target.value.length < 1){
            setEyepatchError("Eey Patch is required")
        }
        else{
            setEyepatchError("")
        }
        setEyepatch(e.target.checked)
    }

    const handleHookhand = (e) =>{
        if(e.target.value.length < 1){
            setHookhandError("Hook hand is required")
        }
        else{
            setHookhandError("")
        }
        setHookhand(e.target.checked)
    }

    

    return(
        <div className=" wrapper">
        <div className='parent'>
        <div className='formheader'>
        <h1> Add Pirate </h1>
       <button className='crewbtn'> <Link className='link' to={'/pirates'}> Crew Board</Link> </button>
        
        </div>
        <div className='form'>
        <form onSubmit={onSubmitHandler}>
        {error.map((error,i) => <p key={i}>{error}</p>)}
        
            <p>
                <label>
                   Name: 
                </label> <br/>
                <input type=" text" onChange={handleName} value={name}/>
                {nameError}
            </p>

            <p>
                <label>
                   Image Url: 
                </label> <br/>
                <input type=" text" onChange={handleImage} value={image}/>
                {imageError}
            </p>

            <p>
                <label>
                  # of treasures Chests: 
                </label> <br/>
                <input type="number" onChange={handleTreasure} value={treasure}/>
                {treasureError}
            </p>

            <p>
                <label>
                   Pirate Catch Phrases: 
                </label> <br/>
                <input type=" text" onChange={handlePhrases} value={phrases}/>
                {phrasesError}
            </p>
          
            

            <p>
                <label>
                   Pirate Catch Phrases: 
                </label> <br/>
                <select  onChange={handlePosition} value={position}>
                    <option value="select"> Select one</option>
                    <option value="Captin"> Captin</option>
                    <option value="First Mate"> First Mate</option>
                    <option value="Quarter Master"> Quarter Master</option>
                    <option value="Boatswain"> Boatswain</option>
                    <option value="Powder Monkey"> Powder Monkey</option>
                </select>
                {positionError}
            </p>
            <p>
                <label> pegleg </label>
                <input type="checkbox" onChange={handlePegleg} checked={pegleg}  />
                {peglegError}
            </p>
            <p>
            <label> Eye patch </label>
                <input type="checkbox" onChange={handleEyepatch} checked={eyepatch}  />
                {eyepatchError}
            </p>
            <p>
            <label> hook hand </label>
                <input type="checkbox" onChange={handleHookhand} checked={hookhand}   />
                {hookhandError}
            </p>
           

           <button type='submit' className='crewbtn'> Add Pirate</button>
           
           



        </form>
        </div>
        </div>
        </div>
    )



}


