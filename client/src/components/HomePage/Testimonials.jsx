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
  ];

  return (
    <section className="py-10 px-8 w-full h-[110vh] testi relative overflow-hidden flex flex-col gap-8 items-center text-white">
      <img src={Testi} className='background' />
      <div className='tint'/>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial,index) => (
            <div key={index} className="bg-[#618a449a] rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-500 p-6">
              <div className="flex flex-col items-center mb-4 gap-4 justify-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-[200px] h-[200px] rounded-full items-center" />
                <div className="flex flex-col items-center justify-center gap-6">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <div className="flex items-center justify-center ">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa fa-star text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-center font-thin"><i>{testimonial.testimonial}</i></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;