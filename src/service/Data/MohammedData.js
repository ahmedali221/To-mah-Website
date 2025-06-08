import img8 from "../../assets/Menu/pages13-18/DSC01937.JPG";
import img9 from "../../assets/Menu/pages13-18/DSC01902.JPG";
import img10 from "../../assets/Menu/pages13-18/DSC01929.JPG";
import img11 from "../../assets/Menu/pages13-18/DSC01885.JPG";
import img12 from "../../assets/Menu/pages13-18/DSC01921.JPG";
import img13 from "../../assets/Menu/pages13-18/DSC01954.JPG";
import img14 from "../../assets/Menu/pages13-18/DSC01946.JPG";

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
    image: "img20",
    category_en: "Ta'mah City Dishes",
    category_ar: "أطباق طعمة المدينة",
    calories: "607",
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
    image: "img21",
    category_en: "Ta'mah City Dishes",
    category_ar: "أطباق طعمة المدينة",
    calories: "479",
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
    image: "img22",
    category_en: "Ta'mah City Dishes",
    category_ar: "أطباق طعمة المدينة",
    calories: "297",
    price: "30 ريال",
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
    image: "img22",
    category_en: "Ta'mah City Dishes",
    category_ar: "أطباق طعمة المدينة",
    calories: "0",
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
    image: "img25",
    category_en: "Ta'mah City Dishes",
    category_ar: "أطباق طعمة المدينة",
    calories: "0",
    price: "45 ريال",
    available: true,
    trendy: true,
  },
  //////////////////////////

  /////////////////////////////////////////////////////

  // منقل طعمة
  {
    id: "23",
    meal_name_en: 'Mabshoor "Minced" Beef',
    meal_name_ar: "مبشور اللحم",
    description_en:
      "Indulge in minced beef grilled on skewers with a selection of fresh grilled vegetables, served with a refreshing salad. A delicious meal rich in grilled flavors, perfect for meat and vegetable lovers.",
    description_ar:
      "استمتع بلحم مفروم مشوي على السيخ مع تشكيلة من الخضار المشوية الطازجة، ويقدم مع سلطة منعشة. وجبة شهية وغنية بالنكهات المشوية، مثالية لمحبي اللحوم والخضروات.",
    image: img8,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "0",
    price: "73 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "24",
    meal_name_en: "Mabshoor Minced Chicken",
    meal_name_ar: "مبشور دجاج",
    description_en:
      "Indulge in minced chicken pieces grilled on skewers and served with a selection of fresh grilled vegetables and a refreshing salad. A light and delicious meal rich in protein and grilled flavors.",
    description_ar:
      "استمتع بقطع دجاج مفروم مشوية على السيخ وتقدم مع تشكيلة من الخضار المشوية الطازجة وسلطة منعشة. وجبة خفيفة ولذيذة وغنية بالبروتين والنكهات المشوية.",
    image: img9,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "0",
    price: "75 ريال",
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
    image: "img17",
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "55 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "8",
    meal_name_en: "Beef Joints",
    meal_name_ar: "أوصال لحم",
    description_en:
      "Indulge in grilled beef joints served with rich tahini sauce. A delicious meal rich in protein and authentic grilled flavors.",
    description_ar:
      "استمتع بقطع أوصال لحم مشوية على السيخ وتقدم مع صوص الطحينة الغني. وجبة شهية وغنية بالبروتين والنكهات المشوية الأصيلة.",
    image: img10,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "0",
    price: "75 ريال",
    available: true,
    trendy: false,
  },

  {
    id: "19",
    meal_name_en: "Hijazi Kebab",
    meal_name_ar: "كباب حجازي",
    description_en:
      "Indulge in traditional Hijazi kebab grilled over charcoal, served with fresh green salad and rich tahini sauce. A delicious meal rich in the traditional flavors that distinguish Hijazi cuisine.",
    description_ar:
      "استمتع بالكباب الحجازي الأصيل المشوي على الفحم، ويقدم مع السلطة الخضراء الطازجة وصوص الطحينة الغني. وجبة شهية وغنية بالنكهات التقليدية التي تميز المطبخ الحجازي.",
    image: img11,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "12",
    meal_name_en: "Grilled Chicken Kebab",
    meal_name_ar: "كباب دجاج",
    description_en:
      "Indulge in special chicken kebab grilled over charcoal, served with fresh green salad and rich tahini sauce. A delicious and light meal rich in protein and authentic grilled flavors.",
    description_ar:
      "استمتع بكباب الدجاج المميز المشوي على الفحم، ويقدم مع السلطة الخضراء الطازجة وصوص الطحينة الغني. وجبة شهية وخفيفة وغنية بالبروتين والنكهات المشوية الأصيلة.",
    image: img12,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "42",
    meal_name_en: "Tahini Kebab",
    meal_name_ar: "كباب الطحينة",
    description_en:
      "Indulge in special kebab grilled over charcoal and topped with rich and delicious tahini sauce. A delicious meal rich in grilled flavors and distinctive tahini.",
    description_ar:
      "استمتع بالكباب المميز المشوي على الفحم والمغطى بصوص الطحينة الغني واللذيذ. وجبة شهية وغنية بالنكهات المشوية والطحينة المميزة.",
    image: img14,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "43",
    meal_name_en: "To'mah Kebab",
    meal_name_ar: "كباب طعمة",
    description_en:
      "Indulge in premium special kebab served with delicious nuts and rich tahini sauce. A royal meal rich in luxurious flavors and fresh ingredients.",
    description_ar:
      "استمتع بالكباب الفاخر والمميز المقدم مع المكسرات الشهية وصوص الطحينة الغني. وجبة ملكية غنية بالنكهات الفاخرة والمكونات الطازجة.",
    image: img13,
    category_en: "Grill_Section",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "148",
    image: null,
    meal_name_en: "Tajouri Mixed Grill Platter",
    description_en:
      "Premium mixed grill for 3 persons - selection of grilled meats and chicken served with Madini rice on a special platter (12 skewers)",
    price: null,
    meal_name_ar: "مشكل مشويات التاجوري",
    description_ar:
      "تكفي عدد 3 أشخاص\nتشكيلة فاخرة من اللحوم والدجاج المشوية والرز المديني تقدم على طبق فاخر\nعدد 12 سيخ",
    calories: null,
    category_en: "Grill Section",
    category_ar: "منقل طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "149",
    image: null,
    meal_name_en: "Mixed Grill Platter",
    description_en: "For 1 person - 3 assorted skewers",
    price: null,
    meal_name_ar: "مشكل مشويات طعمة",
    description_ar: '"تكفي عدد 1 شخص \nعدد 3 أسياخ مشكلة',
    calories: null,
    category_en: "Grill Section",
    category_ar: "منقل طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "150",
    image: null,
    meal_name_en: "French Fries",
    description_en: "Crispy fried potatoes",
    price: null,
    meal_name_ar: "بطاطس مقلية",
    description_ar: "",
    calories: null,
    category_en: "Grill Section",
    category_ar: "منقل طعمة",
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
    image: "img24",
    category_en: "To'mah Stews & Curries",
    category_ar: "طبيخ طعمة / الإيدامات",
    calories: "243",
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
    image: "img23",
    category_en: "To'mah Stews & Curries",
    category_ar: "طبيخ طعمة / الإيدامات",
    calories: "289",
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
    image: "img3",
    category_en: "To'mah Stews & Curries",
    category_ar: "طبيخ طعمة / الإيدامات",
    calories: 329,
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
    image: "img26",
    category_en: "To'mah Stews & Curries",
    category_ar: "طبيخ طعمة / الإيدامات",
    calories: "351",
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
    image: "img28",
    category_en: "To'mah Stews & Curries",
    category_ar: "طبيخ طعمة / الإيدامات",
    calories: "0",
    price: "27 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "163",
    image: null,
    meal_name_en: "Eggplant Masaqua'a",
    description_en:
      "Fried eggplant pieces with minced meat, served with traditional bread and lemon",
    price: null,
    meal_name_ar: "مصقعة خدوج",
    description_ar:
      "قطع باذنجان مقلية ومسبكة بلحم المفروم الطازج وتقدم بخبز الحب والليمون",
    calories: null,
    category_en: "To'mah Stews & Curries",
    category_ar: "طبيخ طعمة / الإيدامات",
    available: true,
    trendy: false,
    availability_details: {
      local: true,
      travel: true,
      buffet: true,
    },
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
    image: "img20",
    category_en: "Flatbreads & Sandwiches",
    category_ar: "صفايح وساندوتشات",
    calories: "0",
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
    image: "img6",
    category_en: "Flatbreads & Sandwiches",
    category_ar: "صفايح وساندوتشات",
    calories: "0",
    price: "12 ريال",
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
    image: "img7",
    category_en: "Flatbreads & Sandwiches",
    category_ar: "صفايح وساندوتشات",
    calories: "0",
    price: "12 ريال",
    available: true,
    trendy: false,
  },
  ////////////////////////////////////////////////////////////

  // Unsorted
];

export default productsData;
