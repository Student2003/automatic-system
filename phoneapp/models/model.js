module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
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
  
    return Tutorial;
  };