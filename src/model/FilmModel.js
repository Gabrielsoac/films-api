const mongoose = require('mongoose');

const Film = mongoose
	.model(
		'Film',
		{
            title: String,
            description: String,
            image_url: String,
            trailer_url: String
        }
	)

module.exports = {
    Film,

}

