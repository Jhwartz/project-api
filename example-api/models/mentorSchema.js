const mongoose = require('mongoose')

const mentorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      profession: {
        type: String,
        required: true,
      },
      yearsOfExperience: {
        type: Number,
        required: true,
      },
      skills: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      profile: {
        type: String,
        required: true,
      }
}, {
    timestamp: true
}
  )

const Mentor = mongoose.model('mentor', mentorSchema)
module.exports = Mentor