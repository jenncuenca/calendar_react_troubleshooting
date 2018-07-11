var mongoose = require("mongoose");
// This allows new schema objects to be created
var Schema = mongoose.Schema;
// this creates the database
var profileSchema = new Schema({
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    propertyValue: String,
    loanAmount: String,
    phone: String,
    email: String
});
// this allows interaction with the database
var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;