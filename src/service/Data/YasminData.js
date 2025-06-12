//31
import img1 from "../../assets/Menu/مختارات البيض/1.jpg";
import img2 from "../../assets/Menu/مختارات البيض/2.jpg";
import img3 from "../../assets/Menu/مختارات البيض/3.jpg";
import img4 from "../../assets/Menu/مختارات البيض/4.jpg";
import img5 from "../../assets/Menu/مختارات البيض/5.jpg";

import beans1 from "../../assets/Menu/beans/1.jpg";
import beans2 from "../../assets/Menu/beans/2.jpg";
import beans3 from "../../assets/Menu/beans/3.jpg";

import breakfastCook1 from "../../assets/Menu/breakfastCook/1.jpg";
import breakfastCook2 from "../../assets/Menu/breakfastCook/2.jpg";
import breakfastCook3 from "../../assets/Menu/breakfastCook/3.jpg";
import breakfastCook4 from "../../assets/Menu/breakfastCook/4.jpg";
import breakfastCook5 from "../../assets/Menu/breakfastCook/5.jpg";

import appetizer1 from "../../assets/Menu/appetizers/1.jpg";
import appetizer2 from "../../assets/Menu/appetizers/2.jpg";
import appetizer3 from "../../assets/Menu/appetizers/3.jpg";
import appetizer4 from "../../assets/Menu/appetizers/4.jpg";
import appetizer5 from "../../assets/Menu/appetizers/5.jpg";

import breakfastDesert1 from "../../assets/Menu/breakfastDeserts/1.jpg";
import breakfastDesert2 from "../../assets/Menu/breakfastDeserts/2.jpg";

import cheese1 from "../../assets/Menu/cheese/1.jpg";
import cheese2 from "../../assets/Menu/cheese/2.jpg";
import cheese3 from "../../assets/Menu/cheese/3.jpg";
import cheese4 from "../../assets/Menu/cheese/4.jpg";
import cheese5 from "../../assets/Menu/cheese/5.jpg";
import cheese6 from "../../assets/Menu/cheese/6.jpg";
import cheese7 from "../../assets/Menu/cheese/7.jpg";
import cheese8 from "../../assets/Menu/cheese/8.jpg";
import cheese9 from "../../assets/Menu/cheese/9.jpg";
import cheese10 from "../../assets/Menu/cheese/10.jpg";
import cheese11 from "../../assets/Menu/cheese/11.jpg";

const productsData = [
  // مجموعة نواشف
  {
    id: "1",
    image: cheese1,
    meal_name_en: "Sahlouli Cheese with Peppers",
    description_en:
      "A mashed cheese mix with tomatoes, Moroccan mint, and chili, served with whole grain bread.",
    price: "15 ريال",
    meal_name_ar: "جبنة سحلولي بالفلافلة",
    description_ar:
      "خلطة جبن مهروسة بالطماطم، النعناع المغربي، الفلفل الحار، وتقدم مع خبز الحبوب الكاملة",
    calories: "417 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",

    available: true,
    trendy: false,
  },
  {
    id: "2",
    image: cheese2,
    meal_name_en: "White Cheese in Clay Pot",
    description_en:
      "White cheese cooked in a way you've never experienced before.",
    price: "15 ريال",
    meal_name_ar: "الجبنة البيضاء في الفخار",
    description_ar: "جبنة بيضاء مطبوخة بطريقة لم تجربها من قبل.",
    calories: "357 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "3",
    image: cheese3,
    meal_name_en: "Labneh",
    description_en: "Plain labneh for our loved ones.",
    price: "15 ريال",
    meal_name_ar: "لبنة",
    description_ar: "لبنة بسيطة لأحبابنا",
    calories: "332 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },

  //
  {
    id: "4",
    image: img4,
    meal_name_en: "Baladi Cheese with Mint",
    description_en: "Traditional cheese with mint from Medina and olive oil.",
    price: "15 ريال",
    meal_name_ar: "الجبنة البلدى بالنعناع",
    description_ar: "جبنة بلدي تقليدية بالنعناع وزيت الزيتون من المدينة",
    calories: "262 ",

    available: true,
    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    trendy: false,
  },
  //
  {
    id: "5",
    image: null,
    meal_name_en: "Madini Rusk",
    description_en: "Madini rusk served with red tea.",
    price: "17 ريال",
    meal_name_ar: "وجبة شابورة المدينة الشهيرة",
    description_ar: "شابورة المدينة الحمراء تقدم مع الشاي الأحمر",
    calories: "141 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "6",
    image: cheese4,
    meal_name_en: "Olives",
    description_en:
      "A selection of green and black olives pickled in To'mah jars.",
    price: "9 ريال",
    meal_name_ar: "زيتون مشكلة",
    description_ar: "تشكيلة من الزيتون الأخضر والأسود المخلل في برطمانات طعمة",
    calories: "141 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "7",
    image: cheese5,
    meal_name_en: "Yellow Cheese with Eggplant",
    description_en:
      "A blend of cheddar cheese and fried eggplant with irresistible sauce.",
    price: "20 ريال",
    meal_name_ar: "جبنة صفراء بالباذنجان",
    description_ar: "خليط من جبنة الشيدر والباذنجان المقلي مع صوص لا يقاوم",
    calories: "110 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  //2
  {
    id: "8",
    image: cheese6,
    meal_name_en: "To'mah Combo (Feast for 3)",
    description_en:
      "A dish consisting of 6 assorted plates + Ta'ma eggs + chicken maqlouqi + foul.",
    price: "100 ريال",
    meal_name_ar: "كومبو طعمة (يخدم 3 أشخاص)",
    description_ar: "طبق مكوّن من ٦ أطباق مشكلة + بيض طعمة + مقلقل دجاج + فول",
    calories: null,

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "9",
    image: cheese7,
    meal_name_en: "Mesh",
    description_en: "Mesh like you've never imagined.",
    price: "15 ريال",
    meal_name_ar: "مش",
    description_ar: "مش ولا في الخيال",
    calories: "306 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "10",
    image: cheese8,
    meal_name_en: "Salty Halawa",
    description_en: "Halawa mixed with cheese and oil.",
    price: "15 ريال",
    meal_name_ar: "حلاوة طحينية مالحة",
    description_ar: "حلاوة طحينية ممزوجة بالجبنة والزيت",
    calories: "136 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "11",
    image: cheese9,
    meal_name_en: "White Cheese with To'mah Mix",
    description_en: "White cheese mixed with Medina tomatoes and mint.",
    price: "15 ريال",
    meal_name_ar: "جبنة بيضاء بخلطة طعمة",
    description_ar: "جبنة بيضاء مع طماطم المدينة والنعناع",
    calories: "105 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },

  //
  {
    id: "12",
    image: null,
    meal_name_en: "Pickled Olives",
    description_en: "Olives pickled in To'mah kitchen.",
    price: "15 ريال",
    meal_name_ar: "زيتون مخلل",
    description_ar: "زيتون مخلل في مطبخ طعمة",
    calories: "145 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "13",
    image: cheese10,
    meal_name_en: "Labneh with Beetroot",
    description_en: "Labneh with a very special beetroot mix.",
    price: "13 ريال",
    meal_name_ar: "لبنة بالبنجر",
    description_ar: "لبنة مع خلطة البنجر المميزة",
    calories: "249 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "14",
    image: cheese11,
    meal_name_en: "Honey and clotted cream",
    description_en: "Qeshta and honey with mixed with pistachio.",
    price: "17 ريال",
    meal_name_ar: "عسل وقشطة",
    description_ar: "قشطة وعسل ممزوجة بالفستق",
    calories: "328 ",

    category_en: "Ta'mah Dry Goods Collection",
    category_ar: "مجموعة نواشف طعمة",
    available: true,
    trendy: false,
  },

  // مختارات البيض
  {
    id: "15",
    image: img1,
    meal_name_en: "To'mah Shakshuka",
    description_en: "The authentic Hejazi shakshuka.",
    price: "17 ريال",
    meal_name_ar: "شكشوكة طعمة",
    description_ar: "الشكشوكة الحجازية الأصيلة",
    calories: null,

    category_en: "Egg Selections",
    category_ar: "مختارات البيض",
    available: true,
    trendy: false,
  },
  {
    id: "16",
    image: img3,
    meal_name_en: "To'mah Eggs",
    description_en:
      "Eggs with vegetables and melted cheese, prepared in the chef's special way.",
    price: "23 ريال",
    meal_name_ar: "بيض طعمة",
    description_ar: "بيض بالخضار والجبنة الذائبة بطريقة الشيف الخاصة",
    calories: null,

    category_en: "Egg Selections",
    category_ar: "مختارات البيض",
    available: true,
    trendy: false,
  },
  {
    id: "17",
    image: img4,
    meal_name_en: "Butter Eggs",
    description_en:
      "Egg fried with butter, salt, and Madinah's special Dukkah spice mix.",
    price: "20 ريال",
    meal_name_ar: "بيض بالزبدة",
    description_ar: "البيضة مع الزبدة وملح ومديني وبهار الدقة",
    calories: null,

    category_en: "Egg Selections",
    category_ar: "مختارات البيض",
    available: true,
    trendy: false,
  },
  {
    id: "18",
    image: img2,
    meal_name_en: "Eggs with Vegetables",
    description_en: "Boiled eggs with a selection of local vegetables.",
    price: "20 ريال",
    meal_name_ar: "بيض بالخضار",
    description_ar: "البيض المسلوق مع مجموعة من الخضار المحلية",
    calories: null,

    category_en: "Egg Selections",
    category_ar: "مختارات البيض",
    available: true,
    trendy: false,
  },
  {
    id: "19",
    image: img5,
    meal_name_en: "Fried Eggs",
    description_en: "For the good ones.",
    price: "17 ريال",
    meal_name_ar: "بيض الطيبين",
    description_ar: "للنفرات الطيبة",
    calories: null,

    category_en: "Egg Selections",
    category_ar: "مختارات البيض",
    available: true,
    trendy: false,
  },

  // فول على الأصول
  {
    id: "20",
    image: beans1,
    meal_name_en: "Special Ful",
    description_en:
      "Ful prepared with a special blend of ghee or olive oil, served with daggus sauce, tahini, and whole-grain bread.",
    price: "20 ريال",
    meal_name_ar: "فول مخصوص",
    description_ar:
      "طبق فول بالخليط الخاص بالسمن أو الزيت، يقدم مع صلصة الدقوس، الطحينة وخبز الحبوب.",
    calories: null,

    category_en: "Traditional Fava Beans",
    category_ar: "فول علي الأًصول",
    available: true,
    trendy: false,
  },
  {
    id: "21",
    image: beans2,
    meal_name_en: "Smoked Ful",
    description_en: "Authentic smoked ful.",
    price: "20 ريال",
    meal_name_ar: "فول مدخن",
    description_ar: "الفول الأصلي المدخن",
    calories: null,

    category_en: "Traditional Fava Beans",
    category_ar: "فول علي الأًصول",
    available: true,
    trendy: false,
  },
  {
    id: "22",
    image: beans3,
    meal_name_en: "Ful with Tahini",
    description_en: "Ful medame with a special tahini topping.",
    price: "20 ريال",
    meal_name_ar: "فول بالطحينة",
    description_ar: "فول مدمس بخلطة طحينية مميزة على الوجه",
    calories: null,

    category_en: "Traditional Fava Beans",
    category_ar: "فول علي الأًصول",
    available: true,
    trendy: false,
  },

  // فطور الطباخة
  {
    id: "23",
    image: breakfastCook1,
    meal_name_en: "Cook's Market Liver",
    description_en:
      "Liver fried with vegetables over high heat, served with whole-grain bread, lemon wedges, and tahini.",
    price: "30 ريال",
    meal_name_ar: "كبدة سوق الطباخين",
    description_ar:
      "كبدة مقلية بالخضار على نار عالية مع خبز الحبوب والليمون والطحينة",
    calories: null,

    category_en: "The Chef's Breakfast",
    category_ar: "فطور الطباخة",
    available: true,
    trendy: false,
  },
  {
    id: "24",
    image: breakfastCook2,
    meal_name_en: "Lamb Feet",
    description_en:
      "White broth with two pieces of fresh lamb hocks, served with a garlic and vinegar sauce and whole-grain bread.",
    price: "35 ريال",
    meal_name_ar: "مقادم الأكتع",
    description_ar:
      "مرقة بيضاء مع قطعتين من الأكواع الطازجة، يقدم مع صوص الثوم والخل وخبز الحبوب",
    calories: null,

    category_en: "The Chef's Breakfast",
    category_ar: "فطور الطباخة",
    available: true,
    trendy: false,
  },
  {
    id: "25",
    image: breakfastCook3,
    meal_name_en: "Meat Muqalqal",
    description_en:
      "Tender pieces of meat stir-fried with a special blend of spices, served the traditional way.",
    price: "37 ريال",
    meal_name_ar: "مقلقل اللحم",
    description_ar: "قطع لحم مقلقلة بطريقة تقليدية مع خلطة التوابل الخاصة",
    calories: null,

    category_en: "The Chef's Breakfast",
    category_ar: "فطور الطباخة",
    available: true,
    trendy: false,
  },
  {
    id: "26",
    image: breakfastCook4,
    meal_name_en: "Chicken Muqalqal",
    description_en:
      "Grilled chicken breasts sautéed with vegetables and special spices.",
    price: "28 ريال",
    meal_name_ar: "مقلقل الدجاج",
    description_ar: "قطع صدور دجاج مشوحة بالخضار والبهارات الخاصة",
    calories: null,

    category_en: "The Chef's Breakfast",
    category_ar: "فطور الطباخة",
    available: true,
    trendy: false,
  },
  {
    id: "28",
    image: breakfastCook5,
    meal_name_en: "Head Meat",
    description_en:
      "Tender pieces of meat from the lamb's head, roasted in the oven, served with whole-grain bread and tahini.",
    price: "38 ريال",
    meal_name_ar: "لحمة راس",
    description_ar:
      "قطع لحم محلية من رأس الخروف المشوي بالفرن وتقدم بخبز الحبوب والطحينة",
    calories: null,

    category_en: "The Chef's Breakfast",
    category_ar: "فطور الطباخة",
    available: true,
    trendy: false,
  },

  // تصبيرة

  {
    id: "30",
    image: appetizer1,
    meal_name_en: "Abu El-Khall Falafel",
    description_en:
      "4 pieces of falafel served with a variety of delicious sauces and bread.",
    price: "15 ريال",
    meal_name_ar: "فلافل ابو الخل",
    description_ar: "٤ قطع فلافل تقدم مع تشكيلة من الصوصات والخبز",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",

    available: true,
    trendy: false,
  },
  {
    id: "31",
    image: appetizer2,
    meal_name_en: "Vegetables Muttabak",
    description_en:
      "Colorful peppers with egg balls, tomatoes, hot pepper, and lemon.",
    price: "17 ريال",
    meal_name_ar: "مطبق خضار",
    description_ar: "فلفل الألوان، كرات بيض، طماطم، فلفل حار، ليمون",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
  },
  //
  {
    id: "32",
    image: null,
    meal_name_en: "Savory Muttabak",
    description_en:
      "Crispy, savory dough layers filled with fresh minced meat served with lemon, green chili, and daggus sauce.",
    price: "17 ريال",
    meal_name_ar: "مطبق مالح",
    description_ar:
      "رقاق العجين المالح المقرمش مع لحم العجينة الطازج، يقدم مع الليمون، الفلفل الأخضر وصوص الدقوس",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
  },
  //
  {
    id: "33",
    image: null,
    meal_name_en: "Cheddar Muttabbak",
    description_en:
      "Tomato balls, eggs, cheddar cheese balls, hot pepper, and lemon.",
    price: "17 ريال",
    meal_name_ar: "مطبق جبنة تشيدر",
    description_ar: "كرات طماطم، بيض، كرات جبنة تشيدر، فلفل حار، ليمون",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
  },
  {
    id: "34",
    image: appetizer3,
    meal_name_en: "Nutella Muttabbak",
    description_en: "Dough + Nutella",
    price: "17 ريال",
    meal_name_ar: "مطبق نوتيلا",
    description_ar: "عجينة نوتيلا",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
  },
  {
    id: "35",
    image: appetizer4,
    meal_name_en: "Banana Muttabak with Cream",
    description_en:
      "Fattah with whole-grain bread layered with offal broth, tahini, and tender pieces of meat.",
    price: "19 ريال",
    meal_name_ar: "مطبق موز بالقشطة",
    description_ar: "فتة عيش بمرقة المقادم والطحينة وقطع اللحمة الطرية",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
  },
  {
    id: "36",
    image: appetizer5,
    meal_name_en: "Spicy Sea Chips",
    description_en:
      "Freshly fried chips served with garlic sauce, spicy dip, and special red sauce.",
    price: "15 ريال",
    meal_name_ar: "شيبس حارة البحر",
    description_ar: "شيبس مقلية تقدم مع صوص الثوم، وصوص حار، وصوص أحمر خاص",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",

    available: true,
    trendy: false,
  },

  //
  {
    meal_name_en: "Vegetable Plate",
    description_en:
      "A selection of fresh organic vegetables from local farms, served chopped.",
    price: "11 ريال",
    meal_name_ar: "صحن خضار",
    description_ar:
      "تشكيلة من الخضروات العضوية المحلية من المزارع المحلية، تقدم مقطعة.",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
    image: null,
  },
  //
  {
    meal_name_en: "Bread Basket",
    description_en: "Tamees / Fatoot / Surek / hab.",
    price: "5 ريال",
    meal_name_ar: "سلة عيش",
    description_ar: "تميس / فتوت / شورك /  حب",
    calories: null,

    category_en: "Light Bites",
    category_ar: "تصبيرة",
    available: true,
    trendy: false,
    image: null,
  },

  // حلا الفطور
  {
    meal_name_en: "Areeka Al-Sih",
    description_en:
      "Bri style bread sliced and sautéed in ghee and served with cream, honey and cheese.",
    price: "30 ريال",
    meal_name_ar: "عريكة السيح",
    description_ar:
      "خبز على طريقة السيح مقطع ومقلي بالسمن ويقدم مع القشطة، والعسل والجبن.",
    calories: null,

    category_en: "Breakfast Sweets",
    category_ar: "حلا الفطور حلي وعلى النبي صلي",

    available: true,
    trendy: false,
    image: breakfastDesert1,
  },

  {
    meal_name_en: "Ma'soub Bakr",
    description_en:
      "Banana and cream ma’soub on Bakr’s special style served with caramel sauce or honey.",
    price: "30 ريال",
    meal_name_ar: "معصوب بكر",
    description_ar:
      "موز وقشطة على طريقة بكر الخاصة، يقدم مع صوص الكراميل أو العسل.",
    calories: null,

    category_en: "Breakfast Sweets",
    category_ar: "حلا الفطور حلي وعلى النبي صلي",
    available: true,
    trendy: false,
    image: breakfastDesert2,
  },

  ///
  {
    id: "68",
    image: null,
    meal_name_en: "Meat Harissa",
    description_en:
      "Traditional wheat and meat porridge garnished with ghee and sugar",
    price: null,
    meal_name_ar: "هريسة اللحم",
    description_ar: "خليط الحب و اللحم المزينة بالسمن و السكر",
    calories: null,
    category_en: "Breakfast_Sweets",
    category_ar: "حلا الفطور حلي وعلى النبي صلي",
    available: true,
    trendy: false,
  },
];

export default productsData;
