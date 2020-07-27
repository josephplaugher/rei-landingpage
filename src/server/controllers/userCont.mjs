import express from 'express'
import user from '../model/users/login'
import newAccount from '../model/users/newUser'
import session from 'express-session'

const routes = express.Router()
const login = user.login
const newUser = newAccount.newUser
const addUser = newAccount.newUser
/*const routes = require('express').Router();
const user = require('./../model/users/login');
const newAccount = require('./../model/users/newUser');
const login = user.login;
const logout = user.logout;
const newUser = newAccount.newUser;
const addUser = newAccount.newUser;

const session = require('express-session');
*/
routes.post('/users/login', login)
routes.get('/users/checkLoginState', (req, res) => {
	//console.log('user session:', req.session.userData);
	res.status(200).json({ userData: req.session.userData })
	/*
    if(typeof req.session !== 'undefined') {
        if(typeof req.session.userData !== 'undefined') {
            res.status(200).json({ userData: req.session.userData });
        } else {
            res.status(200).json({ isLoggedIn: false});
        }
    } else {
        res.status(200).json({ isLoggedIn: false});
    }
    */
})
/*
routes.post('/user/logout', logout);
routes.post('/user/newUser', newUser);
routes.post('/user/addUser', addUser);
*/
export default routes
