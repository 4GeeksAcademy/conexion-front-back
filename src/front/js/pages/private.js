import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem('token');
    console.log(token)

    useEffect(()=>{
        actions.isAuthenticated(token)
        
    }, [])
    //const { store, actions } = useContext(Context);
    // const options = {
    //     method: 'POST',
    //     headers:{
    //         "Content-Type": "application/json",
    //         "Authorization": 'Bearer '+token
    //     },
    //     body: JSON.stringify({})
    // }
    
    // console.log(options.headers.Authorization)    

    // fetch(process.env.BACKEND_URL + "/api/private", options)
    // .then(response => response.text())
    // .then(response => console.log(response))
    // .catch(error => console.log('error', error));
    
    return <h1>hola</h1>
    
}