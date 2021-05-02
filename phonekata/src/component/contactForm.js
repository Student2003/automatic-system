import React from 'react';

let ContactForm = (props)=>{
    return <div className={"Form"}>
        <label className={"First_Name"}>First Name :</label>
        <input type={"text"} name={"first_name"} value={props.first_name}/>
        <label className={"Last_Name"}>Last Name :</label>
        <input type={"text"} name={"last_name"} value={props.last_name}/>
        <label className={"Number"}>Number :</label>
        <input type={"text"} name={"number"} value={props.number}/>
        <button onClick={()=>{console.log("send")}}>Send</button>
    </div>
}

export default ContactForm;