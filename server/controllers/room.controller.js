import Room from '../models/rooms.model.js';



const createRoom = async (req, res) => {
  try {
    const { roomType, price, availabilityStatus, description, images, features } = req.body;
    console.log('Request images:', req.files );

    const imageArray = req.files.map((obj) => {
        return obj.path
    })
    console.log("--------> ",imageArray)

// Split the string by commas and store them in an array
const featuresArray = features.split(',').map(item => item.trim());

console.log(featuresArray);

    if (!roomType || !price || !availabilityStatus || !description || !featuresArray) {
        return res.status(400).json({ error: "All fields are required" });
      }

    // Creating a new room document
    const newRoom = new Room({
      roomType,
      price,
      availabilityStatus,
      description,
      images : arrayOfImages, // Assuming images are uploaded and URLs are passed here
      features : featuresArray
    });
    console.log('2')

    try {
        await newRoom.save();
        console.log('3');
      } catch (dbError) {
        console.error('Database error:', dbError);
        return res.status(500).json({ error: "Failed to save room to the database" });
      }

    console.log('3')
    res.status(201).json({ message: "Room created successfully", room: newRoom });
    console.log('4')
  } catch (error) {
    res.status(500).json({ error: "Failed to create room" });
  }
};



const getRooms = async (req, res) => {
  try {
    // Fetch all rooms from the database
    const rooms = await Room.find();

    if (!rooms || rooms.length === 0) {
      return res.status(404).json({ message: "No rooms available" });
    }

    // Return rooms data to the frontend
    res.status(200).json({ rooms });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ error: "Failed to fetch rooms" });
  }
};

// Example: Route for fetching rooms



export { createRoom , getRooms};
