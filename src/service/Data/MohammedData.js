//10
import tabee51 from "../../assets/Menu/tabee5/1.jpg";
import tabee52 from "../../assets/Menu/tabee5/2.jpg";
import tabee53 from "../../assets/Menu/tabee5/3.jpg";
import tabee54 from "../../assets/Menu/tabee5/4.jpg";
import tabee56 from "../../assets/Menu/tabee5/6.jpg";

import sandwich1 from "../../assets/Menu/sandwich/1.jpg";
import sandwich2 from "../../assets/Menu/sandwich/2.jpg";
import sandwich3 from "../../assets/Menu/sandwich/3.jpg";

import awsalDajaj from "../../assets/replacment images/awsal.JPG";

import leftMabshoorLahm from "../../assets/Menu/Left/مبشور لحم ( محلي ).JPG";
import leftAwsalLahm from "../../assets/Menu/Left/اوصال لحم ( محلي ).JPG";
import leftKebabHijazi from "../../assets/Menu/Left/كباب حجازي ( محلي ).JPG";
import leftKebabDajaj from "../../assets/Menu/Left/كباب دجاج ( محلي ).JPG";
import leftKebabTaama from "../../assets/Menu/Left/كباب طعمة ( محلي ).JPG";
import مبشور_دجاج from "../../assets/Menu/Left3/21.jpg";
import كباب_الطحينة from "../../assets/replacment images/كباب الطحينة.JPG";
import مشكل_مشويات from "../../assets/replacment images/مشكل مشويات.JPG";
import makadm from "../../assets/replacment images/makadm.JPG";

import manzala from "../../assets/replacment images/manzala.JPG";
import mokalklDajaj from "../../assets/replacment images/mokalklDajaj.jpg";
import mokalklLahm from "../../assets/replacment images/mokalklLahm.JPG";
import salat from "../../assets/replacment images/salat.JPG";
import lahmtRas from "../../assets/replacment images/lahmtRas.JPG";


const productsData = [
  ////////////////////////////////////////////////
  //أطباق طعمة المدينة
  {
    id: "9",
    meal_name_en: "Beef Muqalqal",
    meal_name_ar: "مقلقل لحم",
    description_en:
      "Indulge in beef muqalqal pieces with the special blend, served in the Ahl Awl style. A delicious meal rich in traditional and distinctive flavors.",
    description_ar:
      "استمتع بقطع لحم مقلقل بالخلطة وتقدم بطريقة أهل أول. وجبة شهية وغنية بالنكهات التقليدية والمميزة.",
    image: mokalklLahm,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Ta'mah City Dishes",
    subcategory_ar: "أطباق طعمة المدينة",
    calories_en: "607 calories",
    calories_ar: "607 سعرة حرارية",
    burn_time_en: "101 minutes",
    burn_time_ar: "101 دقيقة",
    price: "40 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "13",
    meal_name_en: "Chicken Muqalqal",
    meal_name_ar: "مقلقل الدجاج",
    description_en:
      "Indulge in chicken breast sautéed with fresh vegetables and special spices. A delicious and light meal rich in distinctive flavors.",
    description_ar:
      "استمتع بقطع صدور دجاج مشوحة بالخضار الطازجة والبهارات الخاصة. وجبة شهية وخفيفة وغنية بالنكهات المميزة.",
    image: mokalklDajaj,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Ta'mah City Dishes",
    subcategory_ar: "أطباق طعمة المدينة",
    calories_en: "479 calories",
    calories_ar: "479 سعرة حرارية",
    burn_time_en: "80 minutes",
    burn_time_ar: "80 دقيقة",
    price: "30 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "18",
    meal_name_en: "Head Meat",
    meal_name_ar: "لحمة راس",
    description_en:
      "Indulge in boneless pieces of mutton head beef baked in the oven and served with grain bread and tahini. A delicious meal rich in traditional and distinctive flavors.",
    description_ar:
      "استمتع بقطع لحم مخلية من رأس الخروف المشوي بالفرن وتقدم مع خبز الحب والطحينة. وجبة شهية وغنية بالنكهات التقليدية والمميزة.",
    image: lahmtRas,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Ta'mah City Dishes",
    subcategory_ar: "أطباق طعمة المدينة",
    calories_en: "297 calories",
    calories_ar: "297 سعرة حرارية",
    burn_time_en: "34 minutes",
    burn_time_ar: "34 دقيقة",
    price: "38 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "41",
    meal_name_en: "Traditional Manzlah",
    meal_name_ar: "منزلة على الأصول",
    description_en:
      "Indulge in tender beef chunks with rich and flavorful tahini gravy. A traditional meal rich in authentic flavors.",
    description_ar:
      "استمتع بقطع اللحم الطرية مع مرقة الطحينة المسبكة. وجبة تقليدية وغنية بالنكهات الأصيلة.",
    image: manzala,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Ta'mah City Dishes",
    subcategory_ar: "أطباق طعمة المدينة",
    calories_en: "290 calories",
    calories_ar: "290 سعرة حرارية",
    burn_time_en: "48 minutes",
    burn_time_ar: "48 دقيقة",
    price: "45 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "28",
    meal_name_en: "Madini Salat",
    meal_name_ar: "سلات أهل المدينة",
    description_en:
      "Indulge in tender beef chunks slow-cooked with onion and garlic, served with grain bread and Madini rice. A delicious meal rich in the traditional and distinctive flavors of the city's locals.",
    description_ar:
      "استمتع بقطع لحم طرية مطبوخة بالبصل والثوم على نار هادئة، وتقدم مع خبز الحب والرز المديني. وجبة شهية وغنية بالنكهات التقليدية والمميزة لأهل المدينة.",
    image: salat,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Ta'mah City Dishes",
    subcategory_ar: "أطباق طعمة المدينة",
    calories_en: "266 calories",
    calories_ar: "266 سعرة حرارية",
    burn_time_en: "44 minutes",
    burn_time_ar: "44 دقيقة",
    price: "45 ريال",
    available: true,
    trendy: true,
  },
  //////////////////////////

  /////////////////////////////////////////////////////

  // منقل طعمة
  {
    id: "23",
    image: leftMabshoorLahm,
    meal_name_en: 'Mabshoor "Minced" Beef',
    meal_name_ar: "مبشور اللحم",
    description_en:
      "Indulge in minced beef grilled on skewers with a selection of fresh grilled vegetables, served with a refreshing salad. A delicious meal rich in grilled flavors, perfect for meat and vegetable lovers.",
    description_ar:
      "استمتع بلحم مفروم مشوي على السيخ مع تشكيلة من الخضار المشوية الطازجة، ويقدم مع سلطة منعشة. وجبة شهية وغنية بالنكهات المشوية، مثالية لمحبي اللحوم والخضروات.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "288 calories",
    calories_ar: "288 سعرة حرارية",
    burn_time_en: "52 minutes",
    burn_time_ar: "52 دقيقة",
    price: "75 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "24",
    image: مبشور_دجاج,
    meal_name_en: "Mabshoor Minced Chicken",
    meal_name_ar: "مبشور دجاج",
    description_en:
      "Indulge in minced chicken pieces grilled on skewers and served with a selection of fresh grilled vegetables and a refreshing salad. A light and delicious meal rich in protein and grilled flavors.",
    description_ar:
      "استمتع بقطع دجاج مفروم مشوية على السيخ وتقدم مع تشكيلة من الخضار المشوية الطازجة وسلطة منعشة. وجبة خفيفة ولذيذة وغنية بالبروتين والنكهات المشوية.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "249 calories",
    calories_ar: "249 سعرة حرارية",
    burn_time_en: "45 minutes",
    burn_time_ar: "45 دقيقة",
    price: "55 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "5",
    meal_name_en: "Awsal Chicken",
    meal_name_ar: "أوصال دجاج",
    description_en:
      "Indulge in grilled chicken breast pieces served with creamy garlic sauce. A delicious and light meal rich in protein and delightful grilled flavors.",
    description_ar:
      "استمتع بقطع صدور دجاج مشوية على السيخ وتقدم مع صوص الثوم الكريمي. وجبة شهية وخفيفة وغنية بالبروتين والنكهات المشوية اللذيذة.",
    image: awsalDajaj,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "309 calories",
    calories_ar: "309 سعرة حرارية",
    burn_time_en: "56 minutes",
    burn_time_ar: "56 دقيقة",
    price: "55 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "8",
    image: leftAwsalLahm,
    meal_name_en: "Beef Joints",
    meal_name_ar: "أوصال لحم",
    description_en:
      "Indulge in grilled beef joints served with rich tahini sauce. A delicious meal rich in protein and authentic grilled flavors.",
    description_ar:
      "استمتع بقطع أوصال لحم مشوية على السيخ وتقدم مع صوص الطحينة الغني. وجبة شهية وغنية بالبروتين والنكهات المشوية الأصيلة.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "422 calories",
    calories_ar: "422 سعرة حرارية",
    burn_time_en: "76 minutes",
    burn_time_ar: "76 دقيقة",
    price: "75 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "19",
    image: leftKebabHijazi,
    meal_name_en: "Hijazi Kebab",
    meal_name_ar: "كباب حجازي",
    description_en:
      "Indulge in traditional Hijazi kebab grilled over charcoal, served with fresh green salad and rich tahini sauce. A delicious meal rich in the traditional flavors that distinguish Hijazi cuisine.",
    description_ar:
      "استمتع بالكباب الحجازي الأصيل المشوي على الفحم، ويقدم مع السلطة الخضراء الطازجة وصوص الطحينة الغني. وجبة شهية وغنية بالنكهات التقليدية التي تميز المطبخ الحجازي.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "376 calories",
    calories_ar: "376 سعرة حرارية",
    burn_time_en: "68 minutes",
    burn_time_ar: "68 دقيقة",
    price: "65 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "12",
    image: leftKebabDajaj,
    meal_name_en: "Grilled Chicken Kebab",
    meal_name_ar: "كباب دجاج",
    description_en:
      "Indulge in special chicken kebab grilled over charcoal, served with fresh green salad and rich tahini sauce. A delicious and light meal rich in protein and authentic grilled flavors.",
    description_ar:
      "استمتع بكباب الدجاج المميز المشوي على الفحم، ويقدم مع السلطة الخضراء الطازجة وصوص الطحينة الغني. وجبة شهية وخفيفة وغنية بالبروتين والنكهات المشوية الأصيلة.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "303 calories",
    calories_ar: "303 سعرة حرارية",
    burn_time_en: "55 minutes",
    burn_time_ar: "55 دقيقة",
    price: "65 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "42",
    image: كباب_الطحينة,
    meal_name_en: "Tahini Kebab",
    meal_name_ar: "كباب الطحينة",
    description_en:
      "Indulge in special kebab grilled over charcoal and topped with rich and delicious tahini sauce. A delicious meal rich in grilled flavors and distinctive tahini.",
    description_ar:
      "استمتع بالكباب المميز المشوي على الفحم والمغطى بصوص الطحينة الغني واللذيذ. وجبة شهية وغنية بالنكهات المشوية والطحينة المميزة.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "340 calories",
    calories_ar: "340 سعرة حرارية",
    burn_time_en: "60 minutes",
    burn_time_ar: "60 دقيقة",
    price: "65 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "43",
    image: leftKebabTaama,
    meal_name_en: "To'mah Kebab",
    meal_name_ar: "كباب طعمة",
    description_en:
      "Indulge in premium special kebab served with delicious nuts and rich tahini sauce. A royal meal rich in luxurious flavors and fresh ingredients.",
    description_ar:
      "استمتع بالكباب الفاخر والمميز المقدم مع المكسرات الشهية وصوص الطحينة الغني. وجبة ملكية غنية بالنكهات الفاخرة والمكونات الطازجة.",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill_Section",
    subcategory_ar: "منقل طعمة",
    calories_en: "328 calories",
    calories_ar: "328 سعرة حرارية",
    burn_time_en: "59 minutes",
    burn_time_ar: "59 دقيقة",
    price: "65 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "148",
    image: مشكل_مشويات,
    meal_name_en: "Tajouri Mixed Grill Platter",
    description_en:
      "Premium mixed grill for 3 persons - selection of grilled meats and chicken served with Madini rice on a special platter (12 skewers)",
      price: "175 ريال",
      meal_name_ar: "مشكل مشويات التاجوري",
    description_ar:
      "تكفي عدد 3 أشخاص\nتشكيلة فاخرة من اللحوم والدجاج المشوية والرز المديني تقدم على طبق فاخر\nعدد 12 سيخ",
    calories_en: null,
    calories_ar: null,
    burn_time_en: null,
    burn_time_ar: null,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill Section",
    subcategory_ar: "منقل طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "149",
    image: مشكل_مشويات,
    meal_name_en: "Mixed Grill Platter",
    description_en: "For 1 person - 3 assorted skewers",
    price: "75 ريال",
    meal_name_ar: "مشكل مشويات طعمة",
    description_ar: '"تكفي عدد 1 شخص \nعدد 3 أسياخ مشكلة',
    calories_en: "1800 calories",
    calories_ar: "1800 سعرة حرارية",
    burn_time_en: "330 minutes",
    burn_time_ar: "330 دقيقة",
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Grill Section",
    subcategory_ar: "منقل طعمة",
    available: true,
    trendy: false,
  },

  //////////////////////////////////////////////////////////////

  //////////////////////////////////////
  /// طبيخ طعمة
  {
    id: "30",
    meal_name_en: "Okra",
    meal_name_ar: "مختوم بامية",
    description_en:
      "Indulge in Madini okra cooked with tender beef chunks, served with grain bread and Madini rice. A delicious meal rich in the traditional and distinctive flavors of the city's locals.",
    description_ar:
      "استمتع ببامية مدينية مطبوخة بقطع اللحم الطرية، وتقدم بخبز الحب والرز المديني. وجبة شهية وغنية بالنكهات التقليدية والمميزة لأهل المدينة.",
    image: tabee51,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "To'mah Stews & Curries",
    subcategory_ar: "طبيخ طعمة / الإيدامات",
    calories_en: "234 calories",
    calories_ar: "234 سعرة حرارية",
    burn_time_en: "40 minutes",
    burn_time_ar: "40 دقيقة",
    price: "20 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "31",
    meal_name_en: "Potato Kebab Tray",
    meal_name_ar: "صينية الكباب بالبطاطس",
    description_en:
      "Indulge in a special tray of potatoes and kebab grilled in the oven, served with delicious Madini rice and spicy dakos sauce. A delicious family meal rich in diverse flavors.",
    description_ar:
      "استمتع بصينية مخصوصة من البطاطس والكباب المشوي بالفرن، وتقدم مع الرز المديني الشهي وصوص الدقس الحار. وجبة عائلية شهية وغنية بالنكهات المتنوعة.",
    image: tabee52,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "To'mah Stews & Curries",
    subcategory_ar: "طبيخ طعمة / الإيدامات",
    calories_en: "289 calories",
    calories_ar: "289 سعرة حرارية",
    burn_time_en: "48 minutes",
    burn_time_ar: "48 دقيقة",
    price: "27 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "14",
    meal_name_en: "Dried Molokhia",
    meal_name_ar: "ملوخية ناشفة",
    description_en:
      "Choose from dried molokhia leaves cooked in the Ahl Awl style, with pieces of beef or roasted chicken, and served with grain bread and Madini rice. A delicious meal rich in the traditional and distinctive flavors of the city's locals.",
    description_ar:
      "اختار من أوراق الملوخية الناشفة المطبوخة على طريقة أهل أول، مع قطع اللحم أو الدجاج المحمر، وتقدم بخبز الحب والرز المديني. وجبة شهية وغنية بالنكهات التقليدية والمميزة لأهل المدينة.",
    image: tabee53,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "To'mah Stews & Curries",
    subcategory_ar: "طبيخ طعمة / الإيدامات",
    calories_en: "329 calories",
    calories_ar: "329 سعرة حرارية",
    burn_time_en: "54 minutes",
    burn_time_ar: "54 دقيقة",
    price: "20 ريال",
    available: true,
    trendy: true,
  },

  {
    id: "16",
    meal_name_en: "Green Molokhia",
    meal_name_ar: "ملوخية خضراء",
    description_en:
      "Choose from green molokhia leaves cooked in the Ahl Awl style, with pieces of beef or roasted chicken, and served with grain bread and Madini rice. A delicious meal rich in the traditional and distinctive flavors of the city's locals.",
    description_ar:
      "اختار من أوراق الملوخية الخضرا المطبوخة على طريقة أهل أول، مع قطع اللحم أو الدجاج المحمر، وتقدم بخبز الحب والرز المديني. وجبة شهية وغنية بالنكهات التقليدية والمميزة لأهل المدينة.",
    image: tabee54,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "To'mah Stews & Curries",
    subcategory_ar: "طبيخ طعمة / الإيدامات",
    calories_en: "351 calories",
    calories_ar: "351 سعرة حرارية",
    burn_time_en: "58 minutes",
    burn_time_ar: "58 دقيقة",
    price: "20 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "25",
    meal_name_en: "Madini Collagen",
    meal_name_ar: "مقادم (كولاجين المدينة)",
    description_en:
      "Indulge in two pieces of boiled lamb feet, served with grain bread and a lemon-garlic mix. A delicious meal rich in collagen and the traditional and distinctive flavors of the city's locals.",
    description_ar:
      "استمتع بقطعتين من كوارع الغنم المسلوقة، وتقدم مع خبز الحب وخلطة الليمون بالثوم. وجبة شهية وغنية بالكولاجين والنكهات التقليدية والمميزة لأهل المدينة.",
    image: makadm,

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "To'mah Stews & Curries",
    subcategory_ar: "طبيخ طعمة / الإيدامات",
    calories_en: "810 calories",
    calories_ar: "810 سعرة حرارية",
    burn_time_en: "120 minutes",
    burn_time_ar: "120 دقيقة",
    price: "27 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "163",
    image: tabee56,
    meal_name_en: "Eggplant Masaqua'a",
    description_en:
      "Fried eggplant pieces with minced meat, served with traditional bread and lemon",
    price: "27 ريال",
    meal_name_ar: "مصقعة خدوج",
    description_ar:
      "قطع باذنجان مقلية ومسبكة بلحم المفروم الطازج وتقدم بخبز الحب والليمون",
    calories_en: "340 calories",
    calories_ar: "340 سعرة حرارية",
    burn_time_en: "56 minutes",
    burn_time_ar: "56 دقيقة",

    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "To'mah Stews & Curries",
    subcategory_ar: "طبيخ طعمة / الإيدامات",
    available: true,
    trendy: false,
  },

  //////////////////////////////

  ////// صفايح و ساندوتشات
  {
    id: "38",
    meal_name_en: "Sfiah Cheese Moussaka",
    meal_name_ar: "صفيحة مسفعة بالجبن",
    description_en:
      "Enjoy a Khadua pie with delicious mozzarella cheese. Fresh and tasty pastries, perfect as a light meal or a delicious appetizer.",
    description_ar:
      "استمتع بصفيحة خدوة بالجبنة الموزاريلا اللذيذة. معجنات طازجة وشهية، مثالية كوجبة خفيفة أو مقبل لذيذ.",
    image: sandwich1,
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Flatbreads & Sandwiches",
    subcategory_ar: "صفايح وساندوتشات",
    calories_en: "802 calories",
    calories_ar: "802 سعرة حرارية",
    burn_time_en: "134 minutes",
    burn_time_ar: "134 دقيقة",
    price: "12 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "39",
    meal_name_en: "Sfiah Salat with Tahini",
    meal_name_ar: "صفايح سلات بالطحينة",
    description_en:
      "Enjoy Madini Salat with Tahini, a seriously amazing combination! Fresh and tasty pastries filled with a special filling and topped with delicious tahini.",
    description_ar:
      "استمتع بسلات المدينة والطحينة كلام خطير! معجنات طازجة وشهية محشوة بحشوة مميزة ومغطاة بالطحينة اللذيذة.",
    image: sandwich2,
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Flatbreads & Sandwiches",
    subcategory_ar: "صفايح وساندوتشات",
    calories_en: "722 calories",
    calories_ar: "722 سعرة حرارية",
    burn_time_en: "120 minutes",
    burn_time_ar: "120 دقيقة",
    price: "15 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "40",
    meal_name_en: "Sfiah White Cheese with Halva",
    meal_name_ar: "صفايح جبنة بيضاء بالحلاوة الطحينية",
    description_en:
      "Indulge in a special mix of white cheese and halva tahini, topped with delicious pistachios. Fresh pastries that combine sweet and savory flavors in a unique and tasty way.",
    description_ar:
      "استمتع بخليط الجبنة البيضاء والحلاوة الطحينية المميزة، والمزينة بالفستق الحلبي الشهي. معجنات طازجة تجمع بين المذاق الحلو والمالح بطريقة فريدة ولذيذة.",
    image: sandwich3,
    category_en: "Lunch & Dinner",
    category_ar: "الغداء و العشاء",
    subcategory_en: "Flatbreads & Sandwiches",
    subcategory_ar: "صفايح وساندوتشات",
    calories_en: null,
    calories_ar: null,
    burn_time_en: null,
    burn_time_ar: null,
    price: "12 ريال",
    available: true,
    trendy: false,
  },
  ////////////////////////////////////////////////////////////

  // Unsorted
];

export default productsData;
