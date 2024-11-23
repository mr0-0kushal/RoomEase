import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'user1.jpg',
      testimonial: 'This hotel is amazing! The staff is friendly and the rooms are clean and comfortable.',
      rating: 5,
    },
    // ... other testimonials
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa fa-star text-yellow-500"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;