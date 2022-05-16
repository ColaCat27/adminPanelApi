import express from 'express'

import { createUser, getUserById, getUsers, deleteUser } from '../controllers/user.js'
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/check', verifyToken, (req, res, next) => {
    res.send('Hi you are logged in')
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send('Hi user you can delete you account')
})

router.get('/checkadmin', verifyAdmin, (req, res, next) => {
    res.send('Hi admin you can delete all accounts')
})

router.post('/', createUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUserById)
router.get('/', getUsers)

export default router