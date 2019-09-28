const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema(
    {
        value: Number,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

module.exports = mongoose.model("Result", resultSchema)