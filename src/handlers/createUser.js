const mongoose = require('mongoose');
const connectDatabase = require('../db/db');
const User = require('../models/User');

module.exports.handler = async (event, context) => {
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        await connectDatabase();

        //get event and turn into json object
        const { name, email, password } = JSON.parse(event.body);
    
        let userObj = {
            name,
            email,
            password
        };

        userObj = await User.create(userObj);

        return {
            statusCode: 201,
            body: JSON.stringify({
                message: 'Create user query successful',
                data: userObj
            })
        }
    
    } catch (error) {
        console.error(error);
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({
                message: 'Create user query failed',
                error: error.message
            })
        }
    }
}