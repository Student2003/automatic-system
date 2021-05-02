module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      }
    });
  
    return Contact;
  };