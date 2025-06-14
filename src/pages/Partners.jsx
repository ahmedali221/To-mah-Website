import { useState } from 'react';
import { useTranslation } from "react-i18next";

function Partners() {
  const { t, i18n } = useTranslation();
  const [partners] = useState([
    {
      id: 1,
      name_key: "partners.partners.0.name",
      role_key: "partners.partners.0.role",
      image: 'https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc',
      testimonial_key: "partners.partners.0.testimonial"
    },
    {
      id: 2,
      name_key: "partners.partners.1.name",
      role_key: "partners.partners.1.role",
      image: 'https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc',
      testimonial_key: "partners.partners.1.testimonial"
    },
    {
      id: 3,
      name_key: "partners.partners.2.name",
      role_key: "partners.partners.2.role",
      image: 'https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc',
      testimonial_key: "partners.partners.2.testimonial"
    }
  ]);

  const [suppliers] = useState([
    {
      id: 1,
      name_key: "partners.suppliers.0.name",
      type_key: "partners.suppliers.0.type",
      image: 'https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc',
      description_key: "partners.suppliers.0.description"
    },
    {
      id: 2,
      name_key: "partners.suppliers.1.name",
      type_key: "partners.suppliers.1.type",
      image: 'https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc',
      description_key: "partners.suppliers.1.description"
    },
    {
      id: 3,
      name_key: "partners.suppliers.2.name",
      type_key: "partners.suppliers.2.type",
      image: 'https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc',
      description_key: "partners.suppliers.2.description"
    }
  ]);

  return (
    <div className="min-h-screen" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">{t("partners.hero.title")}</h1>
          <p className="text-center max-w-3xl mx-auto text-lg">{t("partners.hero.description")}</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t("partners.testimonials.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={partner.image}
                  alt={t(partner.name_key)}
                  className="rounded-full w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">{t(partner.name_key)}</h3>
                <p className="text-sm text-primary">{t(partner.role_key)}</p>
                <p className="mt-4 text-base">{t(partner.testimonial_key)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t("partners.suppliers.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={supplier.image}
                    alt={t(supplier.name_key)}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl">{t(supplier.name_key)}</h3>
                  <p className="text-sm text-primary">{t(supplier.type_key)}</p>
                  <p className="mt-4 text-base">{t(supplier.description_key)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t("partners.cta.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">{t("partners.cta.description")}</p>
          <button className="btn btn-primary text-lg">{t("partners.cta.button")}</button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
