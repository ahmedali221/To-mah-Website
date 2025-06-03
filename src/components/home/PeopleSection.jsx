import { useTranslation } from "react-i18next";
import owner from "../../assets/people.jpg";
import cheif from "../../assets/team.jpg";

export default function PeopleSection() {
  const { t } = useTranslation();
  function formatDescription(text) {
    return text
      .replace(/\.\s*$/gm, ".")
      .replace(/\.(\s|\n|$)/g, '.<br />')
      .replace(/<br \/>$/, '');
  }

  const cards = [
    {
      image: owner,
      title: t("people_section.owner_title"),
      description: t("people_section.owner_desc"),
    },
    {
      image: cheif,
      title: t("people_section.chef_title"),
      description: t("people_section.chef_desc"),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t("people_section.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 **lg:grid-cols-2** gap-8 **max-w-screen-lg mx-auto**">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative transform transition duration-500 hover:scale-105"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl transform transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    {card.title}
                  </h3>
                  <p
                    className="text-black text-lg md:text-xl leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatDescription(card.description) }}
                  ></p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}