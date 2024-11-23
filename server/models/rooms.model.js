import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    enum: ['Standard', 'Family', 'Luxury'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availabilityStatus: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String, // URLs of images or paths stored in your server
  }],
  features: [{
    type: String,
    enum: ['Wi-Fi', 'Air Conditioning', 'TV', 'Mini Fridge', 'Luxury Bath', 'Balcony', 'Extra Bed'],
  }]
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
