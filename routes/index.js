var express = require('express');
var router = express.Router();

var auth = require('./auth.js'); // Authentication 
var products = require('./tasksnew.js'); // Tasks Api
var contact = require('./contact.js'); // Tasks Api

// Landing page for application
router.get('/', function (req, res, next) {
    res.render('index.html');

});




//var user = require('./users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/tasks', products.getAllTasks);
//router.get('/api/tasks/:id', products.getOne);
router.post('/api/tasks/', products.addTask);
router.put('/api/tasks/:id', products.updateTask);
router.delete('/api/tasks/:id', products.deleteTask);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/contacts', contact.getAllContact);
router.post('/contacts', contact.addContact);
router.put('/contacts/:id', contact.updateContact);


module.exports = router;