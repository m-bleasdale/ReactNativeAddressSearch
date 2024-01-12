const mapping = require('./mapping.js');

console.log('mounting routes...');

//Endpoint categories are listed as routes
//Below use statement is list of endpoints
const mountRoutes = (app) => {

    console.log('routes mounted');
    
    app.use('/mapping', mapping);
    // - GET address autocomplete

}
   
module.exports = {mountRoutes};
  
