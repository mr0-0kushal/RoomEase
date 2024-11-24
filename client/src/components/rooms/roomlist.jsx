import React from "react";
import RoomCard from "./RoomCard"; // Path to your RoomCard component
import roomcarddata from "../../assets/data/roomcard.json"; // Path to roomcard.json

const RoomCardList = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 w-[100%] justify-start">
  {roomcarddata.map((room) => (
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
