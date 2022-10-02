const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        interest: {
            type:Array,
            required: true,
        },
        profile: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
    isAdmin: {
        type:Boolean,
        default:false
    }
}, {
    timestamp: true
})

const User = mongoose.model('user', userSchema)
module.exports = User