import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const [visible, setVisible] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Trigger animations after component mounts
    setVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveForm(true);
    // Simulating form submission
    setTimeout(() => {
      setActiveForm(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  // Check if current language is RTL (Arabic)
  const isRTL = i18n.language === 'ar';

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Title with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">{t("contact.title")}</h1>
          <div className="w-24 h-1 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            {isRTL ? 'يسعدنا سماع منك. قم بزيارة مطعمنا، أو احجز، أو أرسل لنا رسالة.' : "We'd love to hear from you. Visit our restaurant, make a reservation, or send us a message."}
          </p>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 relative max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">

          {/* First Column */}
          <div
            className={`flex flex-col items-center w-full transform transition-all duration-1000 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
          >
            {/* Image */}
            <div className="flex items-center justify-center rounded-t-full overflow-hidden shadow-2xl group transform transition-transform duration-500 hover:shadow-3xl">
              <img
                src="https://tomah.sa/uploads/products/8.jpg"
                alt={t("contact.location_image_alt")}
                className="h-96 w-auto object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                style={{ borderRadius: "50em 50em 0 0" }}
              />
            </div>

            {/* Location Info */}
            <div className="w-4/5 text-center mt-10 px-4">
              <h3 className="text-4xl font-semibold italic mb-6 transform transition-transform duration-500 hover:translate-y-1">
                {t("contact.location_title")}
              </h3>
              <div className="text-gray-700 font-light tracking-wide leading-relaxed">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors duration-300 block mb-4">
                  <span className="text-black text-lg block mb-3">
                    {t("contact.address_line1")}
                  </span>
                  <span className="text-black text-lg block mb-2">
                    {t("contact.address_line2")}
                  </span>
                  <span className="text-black text-base block">
                    {t("contact.address_line3")}
                  </span>
                </a>
                <a
                  href="https://wa.me/966583250000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black block mt-4 transform hover:scale-105 hover:text-amber-600 transition-all duration-500">
                  {t("contact.phone")}
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-[20%] bottom-[20%] w-px bg-gray-300 transform -translate-x-1/2 rounded-full shadow-md" />

          {/* Second Column */}
          <div
            className={`flex flex-col items-center w-full transform transition-all duration-1000 delay-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
          >
            {/* Image */}
            <div className="flex items-center justify-center rounded-full overflow-hidden shadow-2xl group transform transition-transform duration-500 hover:shadow-3xl">
              <img
                src="https://tomah.sa/uploads/products/9.jpg"
                alt={t("contact.restaurant_image_alt")}
                className="h-96 w-auto object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110 rounded-full"
              />
            </div>

            {/* Hours Info */}
            <div className="text-center font-light tracking-wide leading-relaxed mt-10 px-4">
              {/* List of hours by day */}
              <ul className="space-y-4">
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.saturday")}</span> — {t("contact.hours.saturday_time")}
                </li>
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.sunday")}</span> — {t("contact.hours.sunday_time")}
                </li>
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.monday")}</span> — {t("contact.hours.monday_time")}
                </li>
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.tuesday")}</span> — {t("contact.hours.tuesday_time")}
                </li>
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.wednesday")}</span> — {t("contact.hours.wednesday_time")}
                </li>
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.thursday")}</span> — {t("contact.hours.thursday_time")}
                </li>
                <li className="hover:text-gray-900 transition-all duration-500">
                  <span className="text-gray-800 font-semibold">{t("contact.hours.friday")}</span> — {t("contact.hours.friday_time")}
                </li>
              </ul>
            </div>

          </div>
        </div>


        {/* Contact Form */}
        <div className={`max-w-2xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 delay-900 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h3 className="text-3xl font-serif italic font-light mb-8 text-center">{t("contact.form_title")}</h3>

          {activeForm ? (
            <div className="text-center py-12 text-green-600 text-xl animate-pulse">
              {t("contact.form_success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-amber-600 transition-all duration-300 bg-transparent"
                  />
                  <label className={`absolute ${isRTL ? 'right-2' : 'left-2'} transition-all duration-300 ${formData.name ? 'text-xs -top-6 text-amber-600' : 'top-2'} group-focus-within:text-xs group-focus-within:-top-6 group-focus-within:text-amber-600`}>
                    {t("contact.form_name")}
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-amber-600 transition-all duration-300 bg-transparent"
                  />
                  <label className={`absolute ${isRTL ? 'right-2' : 'left-2'} transition-all duration-300 ${formData.email ? 'text-xs -top-6 text-amber-600' : 'top-2'} group-focus-within:text-xs group-focus-within:-top-6 group-focus-within:text-amber-600`}>
                    {t("contact.form_email")}
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-amber-600 transition-all duration-300 bg-transparent"
                />
                <label className={`absolute ${isRTL ? 'right-2' : 'left-2'} transition-all duration-300 ${formData.phone ? 'text-xs -top-6 text-amber-600' : 'top-2'} group-focus-within:text-xs group-focus-within:-top-6 group-focus-within:text-amber-600`}>
                  {t("contact.form_phone")}
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-amber-600 transition-all duration-300 bg-transparent resize-none"
                ></textarea>
                <label className={`absolute ${isRTL ? 'right-2' : 'left-2'} transition-all duration-300 ${formData.message ? 'text-xs -top-6 text-amber-600' : 'top-2'} group-focus-within:text-xs group-focus-within:-top-6 group-focus-within:text-amber-600`}>
                  {t("contact.form_message")}
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 text-lg"
                >
                  {t("contact.form_button")}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Google Map */}
        <div className={`w-full relative mb-8 transition-all duration-1000 delay-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.8191101387397!2d39.66079837538592!3d24.440296477707634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95535e8cfba3%3A0x6c20f3e111d4579b!2z2LfZjdi52YXYqQ!5e0!3m2!1sar!2ssa!4v1704899987654!5m2!1sar!2ssa"
            className="w-full h-96 md:h-128 rounded-3xl overflow-hidden shadow-lg"
            style={{ border: 0, margin: 0, padding: 0 }}
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'} bg-white p-4 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105`}>
            <h4 className="font-bold text-lg mb-1">{isRTL ? 'موقعنا' : 'Our Location'}</h4>
            <p className="text-sm text-gray-600">{t("contact.address_line1")}, {t("contact.address_line2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;