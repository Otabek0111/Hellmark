const { Schema, model } = require ('mongoose');
var validator = require ("email-validator");

const userSchema = new Schema({
    
            email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: validator.validate,
                message: "Invalid email address",
            },
        },
            password: {
            type: String,
            required: true,
            trim: true,
        },

    });


const User = model ('user', userSchema);

module.exports = User;