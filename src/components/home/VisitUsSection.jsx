// components/VisitUsSection.jsx
import menu from "../../assets/ourMenu.jpg";
import to3 from "../../assets/to3ma.jpg";

export default function VisitUsSection() {
  return (
    <>
      <section className="bg-transaprent py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-4">
          VISIT US NOW
        </h2>
        <div className="text-3xl text-yellow-500 mb-2">***</div>
        <div className="text-3xl text-gray-500">Address</div>
      </section>
      <section className="bg-transaprent py-12 px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="flex flex-col items-center px-4">
            <img
              src={menu}
              alt="Our Menu"
              className="w-60 h-60 object-cover rounded-full shadow-lg mb-4"
            />
            <span className="text-xl font-semibold text-gray-800">OUR MENU</span>
          </div>
          <div className="justify-self-end">
            <img
              src={to3}
              alt="Another"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
