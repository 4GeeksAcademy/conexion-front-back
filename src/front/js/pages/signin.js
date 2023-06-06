import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const SignIn = () => {
    const [data, setData] = useState({});
    const { store, actions } = useContext(Context);
    console.log(store.token)
    return <h1>login</h1>
}