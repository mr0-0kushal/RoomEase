import {useEffect , useState} from "react";
import RoomCard from "./RoomCard"; // Path to your RoomCard component
// import roomcarddata from "../../assets/data/roomcard.json"; // Path to roomcard.json
import axios from 'axios';

const RoomCardList = () => {
  const [rooms, setRooms] = useState([]);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/api/admin/rooms');
        setRooms(response.data.rooms); // Save room data to state
        // setLoading(false);
      } catch (err) {
        // setError('Failed to load rooms');
        // setLoading(false);
        console.log(err)
      }
    };

    fetchRooms();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;



  return (
    <div className="flex flex-row flex-wrap gap-6 w-[100%] justify-start">
  {rooms.map((room) => (
    // eslint-disable-next-line react/jsx-key
    <div className="w-full mx-10">
    <RoomCard
      key={room.id}
      roomType={room.roomType}
      price={room.price}
      specifications={room.specifications}
      availabilityStatus={room.availabilityStatus}
      description={room.description}
      features={room.features}
      image={room.image}
    />
    </div>
  ))}
</div>

  );
};

export default RoomCardList;
