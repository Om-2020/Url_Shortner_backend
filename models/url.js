import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  
  shortCode: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clickCount: {
    type: Number,
    default: 0,
  },
});

export const Url = mongoose.model('Url', urlSchema);
