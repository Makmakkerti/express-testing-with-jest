const mongoose = require('mongoose');
const uri = "mongodb+srv://makmakkerti:mak7874507@testdb.9dah3.mongodb.net/test";

const connect = async () => {
    try {
        await mongoose.connect(uri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
    } catch (err) {
        console.log('Unable to connect DB: ', err);
    }
}

module.exports = { connect };