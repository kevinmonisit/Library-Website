var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: {
    type: Schema.Types.String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
});

GenreSchema.virtual('url').get(function () {
  return '/genre/' + this.name;
});

module.exports = mongoose.model('Genre', GenreSchema);
