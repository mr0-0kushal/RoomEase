export const roomsData = [
    {
        title: "Room 1",
        "roomType": "Standard",
        "price": 120,
        "availabilityStatus": true,
        icon: "fa fa-bed",
        "description": "A cozy standard room with all the basic amenities like Wi-Fi, TV, and comfortable bedding.",
        "images": [
            "uploads/images/room1_image1.jpg",
            "uploads/images/room1_image2.jpg"
        ]
        ,
        "features": [
            "Wi-Fi",
            "TV",
            "Air Conditioning"
        ]
    },
    {
        title: "Room 2",
        "roomType": "Family",
        "price": 250,
        "availabilityStatus": true,
        icon: "fa fa-bed",
        "description": "Spacious family room with multiple beds and extra space for families with kids. Includes additional features like a mini-fridge and a luxury bath.",
        "images": [
            "uploads/images/room2_image1.jpg",
            "uploads/images/room2_image2.jpg"
        ],
        "features": [
            "Wi-Fi",
            "Air Conditioning",
            "Mini Fridge",
            "Luxury Bath",
            "Balcony"
        ]
    },
    {
        title: "Room 3",
        "roomType": "Luxury",
        "price": 500,
        "availabilityStatus": false,
        icon: "fa fa-bed",
        "description": "An opulent luxury suite with king-sized bed, private jacuzzi, and a stunning view. Ideal for honeymooners or VIP guests.",
        "images": [
            "uploads/images/room3_image1.jpg",
            "uploads/images/room3_image2.jpg"
        ],
        "features": [
            "Wi-Fi",
            "Air Conditioning",
            "TV",
            "Mini Fridge",
            "Luxury Bath",
            "Balcony",
            "Extra Bed"
        ]
    },
    {
        title: "Room 4",
        "roomType": "Luxury",
        "price": 500,
        "availabilityStatus": false,
        icon: "fa fa-bed",
        "description": "An opulent luxury suite with king-sized bed, private jacuzzi, and a stunning view. Ideal for honeymooners or VIP guests.",
        "images": [
            "uploads/images/room3_image1.jpg",
            "uploads/images/room3_image2.jpg"
        ],
        "features": [
            "Wi-Fi",
            "Air Conditioning",
            "TV",
            "Mini Fridge",
            "Luxury Bath",
            "Balcony",
            "Extra Bed"
        ]
    }
]



import Wifi from '../images/Wifi.png';
import AC from '../images/AC.png';
import TV from '../images/TV.png';
import Fridge from '../images/Fridge.png';

export const amenitiesData = [
    {
        "id": 1,
        "name": "Wi-Fi",
        "icon": "fa fa-wifi",
        "description": "Stay connected with complimentary high-speed Wi-Fi, available seamlessly throughout the hotel for all your browsing, streaming, and work needs.",
        "images": Wifi
    },
    {
        "id": 2,
        "name": "Air Conditioning",
        "icon": "fa fa-sun-o",
        "description": "Enjoy a comfortable stay with individually controlled air conditioning in every room, ensuring the perfect temperature for relaxation.",
        "images": AC
    },
    {
        "id": 3,
        "name": "TV",
        "icon": "fa fa-tv",
        "description": "Unwind with your favorite shows on a flat-screen TV featuring satellite channels, offering a wide range of entertainment options.",
        "images": TV
    },
    {
        "id": 4,
        "name": "Mini Fridge",
        "icon": "fa fa-refrigerator",
        "description": "Convenience at your fingertips with a mini fridge in every room, ideal for keeping your beverages and snacks fresh and accessible.",
        "images": Fridge
    }
]