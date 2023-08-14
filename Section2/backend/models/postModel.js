const {model, Schema}= require('../connection');

const myschema = new Schema({

  content: String,
username:String,
});
module.exports = model('posts', myschema);