const {model, Schema}= require('../connection');

const myschema = new Schema({

  content: String,
username:String,
image:String,
date:String,
time:String,
});
module.exports = model('posts', myschema);