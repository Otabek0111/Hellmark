const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require("email-validator");

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

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Compare password for login
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = model('user', userSchema);

module.exports = User;
