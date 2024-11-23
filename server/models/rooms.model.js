import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    required: true, // e.g., Single, Double, Suite
  },
  price: {
    type: Number,
    required: true, // Cost per night
  },
  availabilityStatus: {
    type: Boolean,
    default: true, // Available by default
  },
  description: {
    type: String, // Optional: Provide additional details about the room
  },
  images: [
    {
      url: {
        type: String,
        required: false, // Optional image URLs
      },
    },
  ],
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;
