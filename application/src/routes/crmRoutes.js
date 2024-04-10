import {
    addNewContact,
    deleteContact,
    getContacts,
    getContactWithID,
    updateContact
} from '../controllers/crmController.js';
import {
    login,
    loginRequired,
    register
} from '../controllers/userController.js';

const routes = (app) => {
    app.route('/contact')
    
    // get all contacts
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();  
    }, loginRequired, getContacts)

    // post a new contact
    .post(loginRequired, addNewContact);

    app.route('/contact/:contactId')
    
    // get specific contact
    .get(loginRequired, getContactWithID)
    
    // put request
    .put(loginRequired, updateContact)
    
    // delete request
    .delete(loginRequired, deleteContact)

    // registration route
    app.route('/auth/register')
        .post(register);

    // login route
    app.route('/login')
        .post(login);
}

export default routes;
