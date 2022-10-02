/*const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
      },
      booking: {
        name: { type: String, required: true },
        image: { type: String, required: true },
        time: { type: String, required: true },
        date: { type: String, required: true },
        mentor: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "mentor",
        },
      },
      status: { type: String, required: true, default: "pending" },
    },
    {
      timestamps: true,
    }
)

const Book = mongoose.model('book', bookSchema)
module.exports = Book*/