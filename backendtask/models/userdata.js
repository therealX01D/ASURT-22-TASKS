const mongoose     = require('mongoose');  
const Schema       = mongoose.Schema;

const UserSchema   = new Schema({  
    Name: {type: String, required: true},
    Email: {type: String, required: true}, 
    Phone: {type: String, required: true},
    Age: Number,
    Gender: Number,
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('User', UserSchema);  
