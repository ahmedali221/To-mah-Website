import React from "react";

function About() {
  const values = [
    {
      title: "Quality",
      icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c1.277 0 2.555.439 3.5 1.318",
      description: "We source only the finest ingredients to ensure exceptional quality in every dish."
    },
    {
      title: "Passion",
      icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
      description: "Our team's passion for culinary excellence drives everything we do."
    },
    {
      title: "Service",
      icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
      description: "We're committed to providing exceptional service to every guest."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      {/* Hero Section */}
      <div className="relative bg-primary/10 py-24 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-32 bg-primary/20 rounded-lg transform rotate-12"></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl font-bold text-center mb-8 text-primary animate-fade-in">
            About To'mah
          </h1>
          <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed animate-slide-up">
            Welcome to To'mah, where culinary excellence meets warm hospitality.
            Our restaurant brings together traditional flavors and modern techniques
            to create an unforgettable dining experience.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-base-content/80 leading-relaxed">
                Founded in 2020, To'mah has quickly become a cornerstone of the local
                culinary scene. Our commitment to quality ingredients and exceptional
                service has earned us a reputation as one of the city's premier dining
                destinations.
              </p>
              <p className="text-base-content/80 leading-relaxed">
                Our team of passionate chefs draws inspiration from global cuisines
                while maintaining a strong connection to local flavors and traditions.
                Every dish is carefully crafted to provide our guests with a memorable
                dining experience.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300">
              <img
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800"
                alt="Restaurant interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-base-200/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body items-center text-center p-8">
                  <div className="bg-primary text-primary-content rounded-full w-20 h-20 flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="card-title text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-base-content/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card bg-base-100 shadow-xl p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Location</h3>
                <div className="space-y-2 text-base-content/70">
                  <p>123 Restaurant Street</p>
                  <p>City, State 12345</p>
                  <p>United States</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Hours</h3>
                <div className="space-y-2 text-base-content/70">
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday: 10:00 AM - 11:00 PM</p>
                  <p>Sunday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Contact</h3>
                <div className="space-y-2 text-base-content/70">
                  <p>Phone: (123) 456-7890</p>
                  <p>Email: info@tomah.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Static Map Image or Placeholder */}
          <div className="card bg-base-100 shadow-xl overflow-hidden h-[500px] flex items-center justify-center">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=51.505,-0.09&zoom=13&size=600x400&markers=color:red%7C51.505,-0.09&key=YOUR_API_KEY"
              alt="Map location"
              className="w-full h-full object-cover"
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;