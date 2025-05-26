import { useTranslation } from "react-i18next";
import owner from "../../assets/owner.jpg";
import owner2 from "../../assets/owner2.jpg";
import cheif from "../../assets/team.jpg";

export default function PeopleSection() {
  const { t } = useTranslation();

  const cards = [
    {
      image: owner2,
      title: t("people_section.owner2_title"),
      description: t("people_section.owner2_desc"),
    },
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
    <>
      <h2 className="text-4xl font-bold text-center my-6">
        {t("people_section.title")}
      </h2>
      <div className="border border-black overflow-hidden mx-0.5">
        <div className="flex flex-col md:flex-row">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-1 flex flex-col items-center p-15 relative ${index !== cards.length - 1
                ? "md:border-r md:border-gray-300"
                : ""
                }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-60 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 border-2 border-white"
              />
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-gray-500 text-xl mt-2 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
