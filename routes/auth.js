const auth = require('../controller/auth')
const express = require('express');
const route = express.Router();
const errorWrap = require('../utils/errorWrap'); 
const { userValidation } = require('../validation/user');
const validationError = require('../middleware/validationError');
const checkAuth = require('../middleware/checkAuth');


route.post('/sign-in',userValidation,validationError,errorWrap.wrapper(auth.signIn));

route.post('/sign-out',checkAuth,errorWrap.wrapper(auth.signOut));


module.exports = route;
/**
 * @swagger
* /api/auth/sign-in:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *         description: Logged in successfull
 *       404:
 *         description: User not found
 */
/**
 *    /api/auth/sign-out:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *         description: Logged out successfull
 *       404:
 *         description: User not found
 */

