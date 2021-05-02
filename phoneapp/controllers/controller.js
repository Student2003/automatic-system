const db = require("../models");
const Contact = db.contacts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
      res.status(400).send({
        message: "Please "
      });
      return;
    }
  
    // Create a Contact
    const contact = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      number: req.body.number,
    };
  
    // Save Contact in the database
    Contact.create(contact)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Contact."
        });
      });
  };

  
exports.update = (req, res) => {
    Contact.update(req.body, {where : {id : req.params.id}})
      .then(data =>{
        if (data == 1){
          res.send(data)
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Contact."
        });
      });
  }