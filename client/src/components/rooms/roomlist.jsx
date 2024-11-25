import React from "react";
import RoomCard from "./RoomCard"; // Path to your RoomCard component
import roomcarddata from "../../assets/data/roomcard.json"; // Path to roomcard.json

const RoomCardList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-6 w-[100%]">
  {roomcarddata.map((room ,index) => (
    <div className="mx-10 w-full">
    <RoomCard
      key={index}
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
