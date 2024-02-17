import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    isActive: {
        type: Boolean
    }
}, {
    timestamps: true
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)

