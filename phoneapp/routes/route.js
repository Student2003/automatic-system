const { contacts } = require("../models/index.js");

module.exports = app => {
    const tutorials = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Contact
    router.post("/", contacts.create);

    // Update a Contacts with id
    router.put("/:id", contacts.update);
  
    app.use('/api/contacts', router);
  };