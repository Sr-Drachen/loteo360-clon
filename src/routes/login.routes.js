const { Router } = require('express');
const { check } = require('express-validator');

const { getJWT } = require('../controllers/login.controller');

const router = Router();

router.post(
  '/',
  [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email not valid').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  getJWT
);

module.exports = router;
