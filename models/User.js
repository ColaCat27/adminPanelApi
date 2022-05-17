import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false},
        email: {type: String, default: ""},
        age: {type: Number, default: 0},
        status: {type: String, default: "active"},

    },
    {timestamps: true}
)


export default mongoose.model('User', User)