import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Replace these with your actual EmailJS service details
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      console.log(error.text);
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif italic text-4xl font-light mb-4">Get in Touch</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-700">Name</span>
              </label>
              <input 
                type="text" 
                name="user_name" 
                required
                placeholder="Your name" 
                className="input input-bordered w-full bg-gray-50 focus:bg-white border-gray-300" 
              />
            </div>
            
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input 
                type="email" 
                name="user_email" 
                required
                placeholder="Your email" 
                className="input input-bordered w-full bg-gray-50 focus:bg-white border-gray-300" 
              />
            </div>
          </div>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-700">Phone</span>
            </label>
            <input 
              type="tel" 
              name="user_phone" 
              placeholder="Your phone number" 
              className="input input-bordered w-full bg-gray-50 focus:bg-white border-gray-300" 
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-700">Message</span>
            </label>
            <textarea 
              name="message" 
              required
              placeholder="Your message" 
              className="textarea textarea-bordered w-full h-40 bg-gray-50 focus:bg-white border-gray-300"
            ></textarea>
          </div>
          
          <div className="form-control mt-8">
            <button 
              type="submit" 
              className={`btn w-full md:w-auto px-8 ${loading ? 'loading' : ''}`}
              disabled={loading}
              style={{ 
                backgroundColor: '#D4AF37', 
                color: 'white',
                borderRadius: '2rem',
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        
        {success && (
          <div className="alert alert-success mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your message has been sent successfully!</span>
          </div>
        )}
        
        {error && (
          <div className="alert alert-error mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>There was an error sending your message. Please try again later.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;