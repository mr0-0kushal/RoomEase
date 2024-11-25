import React from 'react';
import Testi from '../../assets/images/Testimonial.jpg'

function Testimonials() {
  const testimonials = [
    {
      name: 'Kushal Kant Sharma',
      image: '',
      testimonial: "This hotel exceeded all my expectations! From the moment I arrived, the staff made me feel like royalty. The rooms were spotless, the beds incredibly comfortable, and the little touches—like fresh flowers and chocolates—made my stay unforgettable. I can't wait to come back!",
      rating: 5,
    },
    {
      name: 'Harish Singh',
      image: 'user1.jpg',
      testimonial: "An absolute gem! The infinity pool overlooking the ocean was breathtaking, and the spa treatments were heavenly. Dining at the rooftop restaurant with a panoramic view of the city was the highlight of my trip. If you're looking for a luxurious escape, this is the place to be.",
      rating: 5,
    },
    {
      name: 'Gaurav Sharma',
      image: 'user1.jpg',
      testimonial: "Our family vacation here was incredible! The kids loved the activities at the kids' club, and we appreciated the spacious suites with thoughtful amenities. The staff went above and beyond to ensure our trip was stress-free. This hotel truly feels like a home away from home.",
      rating: 5,

    },
    {
      name: 'Abha Sharma',
      image: 'user1.jpg',
      testimonial: "Our family vacation here was incredible! The kids loved the activities at the kids' club, and we appreciated the spacious suites with thoughtful amenities. The staff went above and beyond to ensure our trip was stress-free. This hotel truly feels like a home away from home.",
      rating: 5,
      
    },
  ];

  return (
    <section className="relative flex flex-col items-center gap-8 px-8 py-10 w-full h-[80vh] text-white overflow-hidden testi">
      <img src={Testi} className='background' />
      <div className='tint'/>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-10 font-bold text-3xl text-center">What Our Guests Say</h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial,index) => (
            <div key={index} className="bg-[#618a449a] hover:shadow-lg rounded-xl hover:scale-105 p-6 transition-all duration-500">
              <div className="flex flex-col justify-center items-center gap-4 mb-4">
                <div className="flex flex-col justify-center items-center gap-6">
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <div className="flex justify-center items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="text-yellow-400 fa fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-thin text-center"><i>{testimonial.testimonial}</i></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;