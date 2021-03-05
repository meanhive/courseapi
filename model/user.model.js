const express = require('express');
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
{
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
        sparse: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        max: 10
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 12
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 15,
        select: false
    },
    created: {
        type: Date,
        required: true
    }
}, 
{
    collection: "users"
});

UserSchema.plugin(validator, { message: " is already exists." });
module.exports = mongoose.model("UserSchema", UserSchema);

