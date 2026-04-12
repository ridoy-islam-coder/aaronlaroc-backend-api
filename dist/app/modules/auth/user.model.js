"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_interface_1 = require("./user.interface");
// import bcrypt from 'bcrypt';
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
    },
    dateOfBirth: {
        type: Date,
        default: null,
    },
    city: {
        type: String,
        default: '',
    },
    state: {
        type: String,
    },
    company: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // You can adjust the minimum password length as needed
    },
    phoneNumber: {
        type: String,
        default: '',
        // match: /^\+[1-9]\d{1,14}$/,
    },
    otp: { type: String },
    imgUrl: {
        type: String,
        default: 'https://i.ibb.co/z5YHLV9/profile.png',
    },
    //  proxysetId: [{ type: Types.ObjectId, ref: "User" } ],
    proxysetId: [
        {
            index: {
                type: Number,
            },
            proxy: {
                type: mongoose_1.Types.ObjectId,
                ref: "User",
                default: null,
            },
        },
    ],
    stripeCustomerId: {
        type: String,
        default: '',
    },
    userPercentage: { type: Number },
    role: {
        type: String,
        enum: Object.values(user_interface_1.Role),
        default: user_interface_1.Role.USER
    },
}, {
    timestamps: true, versionKey: false
});
// // Pre-save middleware to hash password
// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next(); // Only hash if password changed
//   try {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });
exports.User = (0, mongoose_1.model)("User", userSchema);
