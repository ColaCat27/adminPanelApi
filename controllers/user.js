import User from '../models/User.js'

export const createUser = async (req, res) => {
    const body = req.body;

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie'
        })
    }

    
    const user = await new User(body)

    if(!user) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created'
            })
        })
}

export const deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id}, (err, user) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if(!user) {
            return res.status(404).json({success: false, error: 'User not found'})
        }

        return res.status(200).json({success: true, data: user})
    }).catch(err => console.log(err))
}

export const getUserById = async(req, res) => {
    await User.findById({id: req._id}, (err, user) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if(!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            })
        }
        return res.status(200).json({success: true, data: user})
    }).catch(err => console.log(err))
}

export const getUsers = async(req, res) => {
    await User.find({}, (err, users) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        if(!users.length) {
            return res.status(404).json({success: false, error: 'User not found'})
        }
        return res.status(200).json({ success: true, data: users})
    }).clone().catch(err => console.log(err))
}
