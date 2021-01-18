const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// login to create token for every user

const ConfirmationTokenSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  token: String,
});

// save token to database
const ConfirmationTokenModel = mongoose.model(
  'ConfirmationToken',
  ConfirmationTokenSchema
);

module.exports = ConfirmationTokenModel;
