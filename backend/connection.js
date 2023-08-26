const mongoose = require('mongoose');

const url = "mongodb+srv://vibhashdwivedi:myroot@cluster0.telfkjl.mongodb.net/mydatabase?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
