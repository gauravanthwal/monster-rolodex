 const mongoose = require('mongoose')
const bycrypt = require('bcrypt')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bycrypt.hash(this.password, 6);
    }
    next();
})

userSchema.methods.validPassword = function(password){
    return bycrypt.compareSync(password, this.password)
}



const User = mongoose.model('User', userSchema)

module.exports = User;