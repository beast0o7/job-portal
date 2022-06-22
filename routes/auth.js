const auth = require('../controller/auth')
const express = require('express');
const route = express.Router();
const errorWrap = require('../utils/errorWrap');
const { userValidation } = require('../validation/user');
const validationError = require('../middleware/validationError');
const checkAuth = require('../middleware/checkAuth');


route.post('/sign-in', userValidation, validationError, errorWrap.wrapper(auth.signIn));

route.post('/sign-out', checkAuth, errorWrap.wrapper(auth.signOut));



module.exports = route;
/**
* @swagger
* /auth/sign-in:
*   post:
*     tags:
*       - sign-in
*     summary: To sign in
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             email:
*               type: STRING
*             password:
*               type: STRING
*         required:
*           - email
*           - password

*     responses:
*       200:
*         description: Authenticate Successfully
*       404:
*         description: User not found
* /auth/sign-out:
*   post:
*     security:          
*       - bearerAuth: []
*     tags:
*       - sign-out
*     summary: To sign out
*     consumes:
*       - application/json

*     responses:
*       200:
*         description: Successfully logged out
*       500:
*         description: Internal server error
 */
