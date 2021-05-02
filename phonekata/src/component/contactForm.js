import React from 'react';

function request(identifiant){
    var body = {};
    body.first_name = getValue("first_name");
    body.last_name = getValue("last_name");
    body.number = getValue("number");
    var direction = "create"
    if (identifiant != 0){
        direction = "edit";
        body.identifiant = identifiant;
    }
    console.log(JSON.stringify(body));
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/"+direction);
    request.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    request.setRequestHeader("Content-type", "application/json");
    request.body = body
    request.send(JSON.stringify(body));
    console.log(request);
    console.log("send");
    console.log("response:"+request.responseText);
}

function getValue(string){
    return document.getElementsByName(string)[0].value;
}

let ContactForm = (props)=>{
    return <div className={"Form"}>
        <label className={"First_Name"}>First Name :</label>
        <input type={"text"} name={"first_name"} />
        <label className={"Last_Name"}>Last Name :</label>
        <input type={"text"} name={"last_name"}/>
        <label className={"Number"}>Number :</label>
        <input type={"text"} name={"number"}/>
        <button onClick={()=>{request(props.identifiant)}}>Send</button>
    </div>;
}

export default ContactForm;