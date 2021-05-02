import React from 'react';

function request(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/test");
    request.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
    console.log(request)
    console.log("send")
    console.log("response:"+request.responseText)
}

let ContactForm = (props)=>{
    return <div className={"Form"}>
        <label className={"First_Name"}>First Name :</label>
        <input type={"text"} name={"first_name"} value={props.first_name}/>
        <label className={"Last_Name"}>Last Name :</label>
        <input type={"text"} name={"last_name"} value={props.last_name}/>
        <label className={"Number"}>Number :</label>
        <input type={"text"} name={"number"} value={props.number}/>
        <button onClick={request}>Send</button>
    </div>;
}

export default ContactForm;