'use strict';

/** Module dependencies **/
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/** Article Schema */
var CardSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  rfid: {
    type: String,
    required: true,
    trim: true
  },
  fnamn: {
    type: String,
    required: true,
    trim: true
  },
   enamn: {
    type: String,
    required: true,
    trim: true
  },
    email: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

// Validations
/*
CardSchema.path('title').validate(function(title) {
  return !!title;
}, 'RFID cannot be blank');

CardSchema.path('fnamn').validate(function(content) {
  return !!content;
}, 'fnamn cannot be blank');

/** Statics **/

CardSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Card', CardSchema);