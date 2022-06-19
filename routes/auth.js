const auth = require('../controller/auth')
const express = require('express');
const route = express.Router();
const errorWrap = require('../utils/errorWrap'); 
const { userValidation } = require('../validation/user');
const validationError = require('../middleware/validationError')

// route.get('/',errorWrap.wrapper(developer.getDev));

route.post('/sign-in',userValidation,validationError,errorWrap.wrapper(auth.signIn));

// route.get('/',errorWrap.wrapper(user.getUsers));


module.exports = route;