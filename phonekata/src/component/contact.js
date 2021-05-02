import React from 'react';
import '../css/contact.css';

let Contact = (props)=>{
    return <div className={"row"}>
        <div className={"first_Name"}>{props.first_Name}</div>
        <div className={"last_Name"}>{props.last_Name}</div>
        <div className={"number"}>{props.number}</div>
        <button onClick={()=>{console.log("edit " + props.identifiant)}}/>
    </div>
}

export default Contact;