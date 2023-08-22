const mongoose = require('mongoose');
const connectDatabase = require('../db/db');
const User = require('../models/User');

module.exports.handler = async (event, context) => {
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        await connectDatabase();

        const users = await User.find();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Get all users query successful',
                data: users
            })
        }
    
    } catch (error) {
        console.error(error);
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({
                message: 'Get all users query failed',
                error: error.message
            })
        }
    }
}