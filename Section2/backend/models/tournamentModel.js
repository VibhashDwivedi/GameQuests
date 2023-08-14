const {model, Schema}= require('../connection');

const myschema = new Schema({
    title:String,
    players: String,
    startDate: String,
    startMonth:String,
    startTime: String,
    image: String,
    link: String,
    platform: String
});
module.exports = model('tournaments', myschema);