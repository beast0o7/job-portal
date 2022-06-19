const job = require('../controller/job')
const express = require('express');
const route = express.Router();
const errorWrap = require('../utils/errorWrap'); 
const { userValidation } = require('../validation/user');
const validationError = require('../middleware/validationError')
const checkAuth = require('../middleware/checkAuth');
const checkPermission = require('../middleware/checkPermission');


route.get('/', checkAuth,errorWrap.wrapper(job.getJobs))

route.get('/applied-jobs', checkAuth,errorWrap.wrapper(job.getJobsAppliedByUser)) //for user

route.get('/job-applicants', checkAuth,errorWrap.wrapper(job.getAllApplicantForJob)) //for recruiter

route.get('/candidates-job', checkAuth,checkPermission(1),errorWrap.wrapper(job.getAllCandidatesWithJobs)) //for admin

route.post('/',checkAuth,checkPermission(2),errorWrap.wrapper(job.createJob))

route.post('/apply-job/:jobId',checkPermission(3),checkAuth,errorWrap.wrapper(job.applyJob))

route.delete('/delete/:id',checkAuth,checkPermission(1),errorWrap.wrapper(job.deleteJob))



// route.post('/forgot-password',errorWrap.wrapper(user.forgotPassword));

// route.put('/reset-password',errorWrap.wrapper(user.resetPassword));

// route.get('/',checkAuth,errorWrap.wrapper(user.getUsers));


module.exports = route;