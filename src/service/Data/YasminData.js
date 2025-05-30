import img1 from "../../assets/Menu/pages1-6/DSC00924.JPG";
import img2 from "../../assets/Menu/pages1-6/DSC00970.JPG";
import img3 from "../../assets/Menu/pages1-6/DSC00965.JPG";
import img4 from "../../assets/Menu/pages1-6/DSC00962.JPG";
import img6 from "../../assets/Menu/pages1-6/DSC00840.JPG";
import img7 from "../../assets/Menu/pages1-6/DSC00973.JPG";
import img8 from "../../assets/Menu/pages1-6/DSC01527.JPG";
import img9 from "../../assets/Menu/pages1-6/DSC00794.JPG";
import img10 from "../../assets/Menu/pages1-6/DSC00764.JPG";
import img11 from "../../assets/Menu/pages1-6/DSC00829.JPG";
import img12 from "../../assets/Menu/pages1-6/DSC00840.JPG";
import img13 from "../../assets/Menu/pages1-6/DSC00865.JPG";
import img14 from "../../assets/Menu/pages1-6/DSC00875.JPG";
import img15 from "../../assets/Menu/pages1-6/DSC00993.JPG";
import img16 from "../../assets/Menu/pages1-6/DSC01010.JPG";
import img17 from "../../assets/Menu/pages1-6/DSC01012.JPG";
import img18 from "../../assets/Menu/pages1-6/DSC01035.JPG";
import img19 from "../../assets/Menu/pages1-6/DSC01024.JPG";
import img20 from "../../assets/Menu/pages1-6/DSC01115.JPG";
import img21 from "../../assets/Menu/pages1-6/DSC01102.JPG";
import img22 from "../../assets/Menu/pages1-6/DSC01083.JPG";
import img23 from "../../assets/Menu/pages1-6/DSC01144.JPG";
import img24 from "../../assets/Menu/pages1-6/DSC01134.JPG";

import img27 from "../../assets/Menu/pages1-6/DSC01141.JPG";

import img30 from "../../assets/Menu/pages1-6/DSC01281.JPG";
import img31 from "../../assets/Menu/pages1-6/DSC01292.JPG";
import img32 from "../../assets/Menu/pages1-6/DSC01289.JPG";
import img33 from "../../assets/Menu/pages1-6/DSC01286.JPG";
import img34 from "../../assets/Menu/pages1-6/DSC01283.JPG";
import img35 from "../../assets/Menu/pages1-6/DSC01296.JPG";
import img36 from "../../assets/Menu/pages1-6/DSC01276.JPG";

const productsData = [
  {
    id: "1",
    image: img1,
    meal_name_en: "Sahlouli Cheese with Peppers",
    description_en:
      "A mashed cheese mix with tomatoes, Moroccan mint, and chili, served with whole grain bread.",
    price: "15 ريال",
    meal_name_ar: "جبنة سحلولي بالفلافلة",
    description_ar:
      "خلطة جبن مهروسة بالطماطم، النعناع المغربي، الفلفل الحار، وتقدم مع خبز الحبوب الكاملة",
    calories: "417 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "2",
    image: img2,
    meal_name_en: "White Cheese in Clay Pot",
    description_en:
      "White cheese cooked in a way you've never experienced before.",
    price: "15 ريال",
    meal_name_ar: "الجبنة البيضاء في الفخار",
    description_ar: "جبنة بيضاء مطبوخة بطريقة لم تجربها من قبل.",
    calories: "357 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "3",
    image: img3,
    meal_name_en: "Labneh",
    description_en: "Plain labneh for our loved ones.",
    price: "15 ريال",
    meal_name_ar: "لبنة",
    description_ar: "لبنة بسيطة لأحبابنا",
    calories: "332 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "4",
    image: img4,
    meal_name_en: "Baladi Cheese with Mint",
    description_en: "Traditional cheese with mint from Medina and olive oil.",
    price: "15 ريال",
    meal_name_ar: "الجبنة البلدى بالنعناع",
    description_ar: "جبنة بلدي تقليدية بالنعناع وزيت الزيتون من المدينة",
    calories: "262 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "5",
    image: null,
    meal_name_en: "Madini Rusk",
    description_en: "Madini rusk served with red tea.",
    price: "17 ريال",
    meal_name_ar: "وجبة شابورة المدينة الشهيرة",
    description_ar: "شابورة المدينة الحمراء تقدم مع الشاي الأحمر",
    calories: "141 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "6",
    image: img6,
    meal_name_en: "Olives",
    description_en:
      "A selection of green and black olives pickled in To'mah jars.",
    price: "9 ريال",
    meal_name_ar: "زيتون مشكلة",
    description_ar: "تشكيلة من الزيتون الأخضر والأسود المخلل في برطمانات طعمة",
    calories: "141 ",
    category_en: "Appetizers",
    category_ar: "مقبلات",
    available: true,
    trendy: false,
  },
  {
    id: "7",
    image: img7,
    meal_name_en: "Yellow Cheese with Eggplant",
    description_en:
      "A blend of cheddar cheese and fried eggplant with irresistible sauce.",
    price: "20 ريال",
    meal_name_ar: "جبنة صفراء بالباذنجان",
    description_ar: "خليط من جبنة الشيدر والباذنجان المقلي مع صوص لا يقاوم",
    calories: "110 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "8",
    image: img8,
    meal_name_en: "To'mah Combo (Feast for 3)",
    description_en:
      "A dish consisting of 6 assorted plates + Ta'ma eggs + chicken maqlouqi + foul.",
    price: "100 ريال",
    meal_name_ar: "كومبو طعمة (يخدم 3 أشخاص)",
    description_ar: "طبق مكوّن من ٦ أطباق مشكلة + بيض طعمة + مقلقل دجاج + فول",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "9",
    image: img9,
    meal_name_en: "Mesh",
    description_en: "Mesh like you've never imagined.",
    price: "15 ريال",
    meal_name_ar: "مشر",
    description_ar: "مشر ولا في الخيال",
    calories: "306 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "10",
    image: img10,
    meal_name_en: "Salty Halawa",
    description_en: "Halawa mixed with cheese and oil.",
    price: "15 ريال",
    meal_name_ar: "حلاوة طحينية مالحة",
    description_ar: "حلاوة طحينية ممزوجة بالجبنة والزيت",
    calories: "136 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "11",
    image: img11,
    meal_name_en: "White Cheese with To'mah Mix",
    description_en: "White cheese mixed with Medina tomatoes and mint.",
    price: "15 ريال",
    meal_name_ar: "جبنة بيضاء بخلطة طعمة",
    description_ar: "جبنة بيضاء مع طماطم المدينة والنعناع",
    calories: "105 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "12",
    image: img12,
    meal_name_en: "Pickled Olives",
    description_en: "Olives pickled in To'mah kitchen.",
    price: "15 ريال",
    meal_name_ar: "زيتون مخلل",
    description_ar: "زيتون مخلل في مطبخ طعمة",
    calories: "145 ",
    category_en: "Appetizers",
    category_ar: "مقبلات",
    available: true,
    trendy: false,
  },
  {
    id: "13",
    image: img13,
    meal_name_en: "Labneh with Beetroot",
    description_en: "Labneh with a very special beetroot mix.",
    price: "13 ريال",
    meal_name_ar: "لبنة بالبنجر",
    description_ar: "لبنة مع خلطة البنجر المميزة",
    calories: "249 ",
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "14",
    image: img14,
    meal_name_en: "Honey and clotted cream",
    description_en: "Qeshta and honey with mixed with pistachio.",
    price: "17 ريال",
    meal_name_ar: "عسل وقشطة",
    description_ar: "قشطة وعسل ممزوجة بالفستق",
    calories: "328 ",
    category_en: "Desserts",
    category_ar: "حلويات",
    available: true,
    trendy: false,
  },
  {
    id: "15",
    image: img15,
    meal_name_en: "To'mah Shakshuka",
    description_en: "The authentic Hejazi shakshuka.",
    price: "17 ريال",
    meal_name_ar: "شكشوكة طعمة",
    description_ar: "الشكشوكة الحجازية الأصيلة",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "16",
    image: img16,
    meal_name_en: "To'mah Eggs",
    description_en:
      "Eggs with vegetables and melted cheese, prepared in the chef's special way.",
    price: "23 ريال",
    meal_name_ar: "بيض طعمة",
    description_ar: "بيض بالخضار والجبنة الذائبة بطريقة الشيف الخاصة",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "17",
    image: img17,
    meal_name_en: "Butter Eggs",
    description_en:
      "Egg fried with butter, salt, and Madinah's special Dukkah spice mix.",
    price: "20 ريال",
    meal_name_ar: "بيض بالزبدة",
    description_ar: "البيضة مع الزبدة وملح ومديني وبهار الدقة",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "18",
    image: img18,
    meal_name_en: "Eggs with Vegetables",
    description_en: "Boiled eggs with a selection of local vegetables.",
    price: "20 ريال",
    meal_name_ar: "بيض بالخضار",
    description_ar: "البيض المسلوق مع مجموعة من الخضار المحلية",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "19",
    image: img19,
    meal_name_en: "Fried Eggs",
    description_en: "For the good ones.",
    price: "17 ريال",
    meal_name_ar: "بيض مقلي",
    description_ar: "للنفرات الطيبة",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "20",
    image: img20,
    meal_name_en: "Special Ful",
    description_en:
      "Ful prepared with a special blend of ghee or olive oil, served with daggus sauce, tahini, and whole-grain bread.",
    price: "20 ريال",
    meal_name_ar: "فول مخصوص",
    description_ar:
      "طبق فول بالخليط الخاص بالسمن أو الزيت، يقدم مع صلصة الدقوس، الطحينة وخبز الحبوب.",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "21",
    image: img21,
    meal_name_en: "Smoked Ful",
    description_en: "Authentic smoked ful.",
    price: "20 ريال",
    meal_name_ar: "فول مدخن",
    description_ar: "الفول الأصلي المدخن",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "22",
    image: img22,
    meal_name_en: "Ful with Tahini",
    description_en: "Ful medame with a special tahini topping.",
    price: "20 ريال",
    meal_name_ar: "فول بالطحينة",
    description_ar: "فول مدمس بخلطة طحينية مميزة على الوجه",
    calories: null,
    category_en: "Breakfast",
    category_ar: "فطور",
    available: true,
    trendy: false,
  },
  {
    id: "23",
    image: img23,
    meal_name_en: "Cook's Market Liver",
    description_en:
      "Liver fried with vegetables over high heat, served with whole-grain bread, lemon wedges, and tahini.",
    price: "30 ريال",
    meal_name_ar: "كبدة سوق الطباخين",
    description_ar:
      "كبدة مقلية بالخضار على نار عالية مع خبز الحبوب والليمون والطحينة",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "24",
    image: img24,
    meal_name_en: "Lamb Feet",
    description_en:
      "White broth with two pieces of fresh lamb hocks, served with a garlic and vinegar sauce and whole-grain bread.",
    price: "35 ريال",
    meal_name_ar: "مقادم الأكواع",
    description_ar:
      "مرقة بيضاء مع قطعتين من الأكواع الطازجة، يقدم مع صوص الثوم والخل وخبز الحبوب",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "25",
    image: null,
    meal_name_en: "Meat Muqalqal",
    description_en:
      "Tender pieces of meat stir-fried with a special blend of spices, served the traditional way.",
    price: "37 ريال",
    meal_name_ar: "مقلقل اللحم",
    description_ar: "قطع لحم مقلقلة بطريقة تقليدية مع خلطة التوابل الخاصة",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "26",
    image: null,
    meal_name_en: "Chicken Muqalqal",
    description_en:
      "Grilled chicken breasts sautéed with vegetables and special spices.",
    price: "28 ريال",
    meal_name_ar: "مقلقل الدجاج",
    description_ar: "قطع صدور دجاج مشوحة بالخضار والبهارات الخاصة",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "27",
    image: img27,
    meal_name_en: "Hawah Fattah",
    description_en: "Fattah with whole-grain bread in chicken broth.",
    price: "30 ريال",
    meal_name_ar: "فتة هوا",
    description_ar: "فتة خبز حبوب كاملة بمرق الدجاج",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "28",
    image: null,
    meal_name_en: "Head Meat",
    description_en:
      "Tender pieces of meat from the lamb's head, roasted in the oven, served with whole-grain bread and tahini.",
    price: "38 ريال",
    meal_name_ar: "لحمة راس",
    description_ar:
      "قطع لحم محلية من رأس الخروف المشوي بالفرن وتقدم بخبز الحبوب والطحينة",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "29",
    image: null,
    meal_name_en: "To'mah Fattah",
    description_en:
      "Fattah with whole-grain bread layered with offal broth, tahini, and tender pieces of meat.",
    price: "34 ريال",
    meal_name_ar: "فتة طعمة",
    description_ar: "فتة خبز بمرقة المقادم والطحينة وقطع اللحمة الطرية",
    calories: "343 ",
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "30",
    image: img30,
    meal_name_en: "Abu El-Khall Falafel",
    description_en:
      "4 pieces of falafel served with a variety of delicious sauces and bread.",
    price: "15 ريال",
    meal_name_ar: "فلافل ابو الخال",
    description_ar: "٤ قطع فلافل تقدم مع تشكيلة من الصوصات والخبز",
    calories: null,
    category_en: "Appetizers",
    category_ar: "مقبلات",
    available: true,
    trendy: false,
  },
  {
    id: "31",
    image: img31,
    meal_name_en: "Vegetables Muttabak",
    description_en:
      "Colorful peppers with egg balls, tomatoes, hot pepper, and lemon.",
    price: "17 ريال",
    meal_name_ar: "مطبق خضار",
    description_ar: "فلفل الألوان، كرات بيض، طماطم، فلفل حار، ليمون",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "32",
    image: img32,
    meal_name_en: "Savory Muttabak",
    description_en:
      "Crispy, savory dough layers filled with fresh minced meat served with lemon, green chili, and daggus sauce.",
    price: "17 ريال",
    meal_name_ar: "مطبق مالح",
    description_ar:
      "رقاق العجين المالح المقرمش مع لحم العجينة الطازج، يقدم مع الليمون، الفلفل الأخضر وصوص الدقوس",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "33",
    image: img33,
    meal_name_en: "Cheddar Muttabbak",
    description_en:
      "Tomato balls, eggs, cheddar cheese balls, hot pepper, and lemon.",
    price: "17 ريال",
    meal_name_ar: "مطبق جبنة تشيدر",
    description_ar: "كرات طماطم، بيض، كرات جبنة تشيدر، فلفل حار، ليمون",
    calories: null,
    category_en: "Lunch",
    category_ar: "غداء",
    available: true,
    trendy: false,
  },
  {
    id: "34",
    image: img34,
    meal_name_en: "Nutella Muttabbak",
    description_en: "Dough + Nutella",
    price: "17 ريال",
    meal_name_ar: "مطبق نوتيلا",
    description_ar: "عجينة نوتيلا",
    calories: null,
    category_en: "Desserts",
    category_ar: "حلويات",
    available: true,
    trendy: false,
  },
  {
    id: "35",
    image: img35,
    meal_name_en: "Banana Muttabak with Cream",
    description_en:
      "Fattah with whole-grain bread layered with offal broth, tahini, and tender pieces of meat.",
    price: "19 ريال",
    meal_name_ar: "مطبق موز بالقشطة",
    description_ar: "فتة عيش بمرقة المقادم والطحينة وقطع اللحمة الطرية",
    calories: null,
    category_en: "Desserts",
    category_ar: "حلويات",
    available: true,
    trendy: false,
  },
  {
    id: "36",
    image: img36,
    meal_name_en: "Spicy Sea Chips",
    description_en:
      "Freshly fried chips served with garlic sauce, spicy dip, and special red sauce.",
    price: "15 ريال",
    meal_name_ar: "شيبس حارة البحر",
    description_ar: "شيبس مقلية تقدم مع صوص الثوم، وصوص حار، وصوص أحمر خاص",
    calories: null,
    category_en: "Appetizers",
    category_ar: "مقبلات",
    available: true,
    trendy: false,
  },
];

export default productsData;
