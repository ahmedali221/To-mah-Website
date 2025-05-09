import { useState } from 'react';

function Partners() {
  const [partners] = useState([
    {
      id: 1,
      name: 'Cindy',
      role: 'Food Influencer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      testimonial: 'Commodo duis dolor proin luctus elit vehicula. Posuere leo venenatis mollis hac platea porta dis consequat ullamcorper.'
    },
    {
      id: 2,
      name: 'Lillie Gilman',
      role: 'Photographer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sunt in culpa qui officia.'
    },
    {
      id: 3,
      name: 'Neil Rosas',
      role: 'Vlogger',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      testimonial: 'Pharetra amet eget dolor facilisis morbi molestie? Venenatis semper ornare feugiat consectetur elit cubilia sit velit.'
    }
  ]);

  const [suppliers] = useState([
    {
      id: 1,
      name: 'Fresh Farms Co.',
      type: 'Organic Produce',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400',
      description: 'Providing fresh, organic vegetables and fruits directly from local farms.'
    },
    {
      id: 2,
      name: 'Premium Meats',
      type: 'Quality Meats',
      image: 'https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=400',
      description: 'Supplying high-quality, ethically sourced meats for our signature dishes.'
    },
    {
      id: 3,
      name: 'Ocean Fresh',
      type: 'Seafood',
      image: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=400',
      description: 'Delivering the freshest seafood from sustainable sources daily.'
    }
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Partners</h1>
          <p className="text-center max-w-3xl mx-auto">
            We collaborate with the finest suppliers and work alongside talented individuals
            to bring you an exceptional dining experience.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="rounded-full w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{partner.name}</h3>
                <p className="text-sm text-primary">{partner.role}</p>
                <p className="mt-4">{partner.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={supplier.image}
                    alt={supplier.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{supplier.name}</h3>
                  <p className="text-sm text-primary">{supplier.type}</p>
                  <p className="mt-4">{supplier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're always looking to collaborate with quality suppliers and influential
            personalities who share our passion for exceptional food and service.
          </p>
          <button className="btn btn-primary">
            Contact Us for Partnership
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partners;