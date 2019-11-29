const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
	name: String,
	description: String,
	specialty: String
});


module.exports = mongoose.model("Artist", ArtistSchema);


