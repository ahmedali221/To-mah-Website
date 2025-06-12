import img7 from "../../assets/Menu/pages13-18/DSC01863.JPG";
import img5 from "../../assets/Menu/breadBasket/8.jpg";

//27
import soup1 from "../../assets/Menu/soup/1.jpg";
import soup2 from "../../assets/Menu/soup/2.jpg";

import salad1 from "../../assets/Menu/salads/1.jpg";
import salad2 from "../../assets/Menu/salads/2.jpg";
import salad3 from "../../assets/Menu/salads/3.jpg";
import salad4 from "../../assets/Menu/salads/4.jpg";
import salad5 from "../../assets/Menu/salads/5.jpg";
import salad6 from "../../assets/Menu/salads/6.jpg";
import salad7 from "../../assets/Menu/salads/7.jpg";
import salad8 from "../../assets/Menu/salads/8.jpg";

import breadBasket1 from "../../assets/Menu/breadBasket/1.jpg";
import breadBasket3 from "../../assets/Menu/breadBasket/3.jpg";
import breadBasket5 from "../../assets/Menu/breadBasket/5.jpg";
import breadBasket6 from "../../assets/Menu/breadBasket/6.jpg";
import breadBasket7 from "../../assets/Menu/breadBasket/7.jpg";
import breadBasket9 from "../../assets/Menu/breadBasket/9.jpg";
import breadBasket10 from "../../assets/Menu/breadBasket/10.jpg";
import breadBasket11 from "../../assets/Menu/breadBasket/11.jpg";
import breadBasket13 from "../../assets/Menu/breadBasket/13.JPG";

import rice1 from "../../assets/Menu/rice/1.jpg";
import rice2 from "../../assets/Menu/rice/2.jpg";
import rice3 from "../../assets/Menu/rice/3.jpg";
import rice4 from "../../assets/Menu/rice/4.jpg";
import rice5 from "../../assets/Menu/rice/5.jpg";
import rice6 from "../../assets/Menu/rice/6.jpg";
import rice7 from "../../assets/Menu/rice/7.jpg";
import rice8 from "../../assets/Menu/rice/8.jpg";
import rice9 from "../../assets/Menu/rice/9.jpg";

const productsData = [
  // الشوربة
  {
    meal_name_en: "Grain Soup",
    description_en: "Cooked with tender beef chunks on Madini style",
    price: "23 ريال",
    meal_name_ar: "شوربة الحب",
    description_ar: "مطبوخة بلحم العجل الطري، على الطريقة المدينية الخاصة",
    calories: null,

    category_en: "Soup",
    category_ar: "الشوربة",
    available: true,
    trendy: false,
    image: soup1,
  },
  {
    meal_name_en: "shkamba soup",
    description_en:
      "Beef chunks soup served with whole grain bread and lemon wedges",
    price: "23 ريال",
    meal_name_ar: "شكمبا",
    description_ar: "شوربة مطبوخة باللحم الطازج، تقدم مع خبز الحب والليمون",
    calories: null,
    category_en: "Soup",
    category_ar: "الشوربة",
    available: true,
    trendy: false,
    image: soup2,
  },
  ////////////////////////////////////////////////////////

  // السلطات

  {
    meal_name_en: "Al-Oula Salad",
    description_en:
      "Fresh arugula with Al-Oula organic pieces with sweet and sour sauce",
    price: "19 ريال",
    meal_name_ar: "سلطة العلا",
    description_ar:
      "أوراق الجرجير الطازجة مع قطع طازجة من برتقال العلا مع صوص الحامض الحلو الخاص ",
    calories: null,

    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad1,
  },
  {
    meal_name_en: "To'mah Salad",
    description_en:
      "Baladi black seeds cheese pieces with roasted almonds and dried figs",
    price: "19 ريال",
    meal_name_ar: "سلطة طعمة",
    description_ar:
      "قطع جبن بلدي بالحبة السوداء مع السلطة الخضراء مزينة باللوز البجلي المحمص والتين المجفف",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad2,
  },
  {
    meal_name_en: "Madini Okra Fattah",
    description_en: "Traditional fattah with crispy okra.",
    price: "27 ريال",
    meal_name_ar: "فتة البامية المدنية",
    description_ar: "فتة على الأصول مزينة بالبامية المدنية المقرمشة ",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad3,
  },
  {
    meal_name_en: "Mint Hummus",
    description_en: "Chickpeas mixed with Moroccan mint",
    price: "11 ريال",
    meal_name_ar: "حمص نعناع",
    description_ar: "حمص مخلوط بالنعناع المغربي",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad4,
  },
  {
    meal_name_en: "Plain Hummus",
    description_en: "Special chickpeas with olive oil",
    price: "11 ريال",
    meal_name_ar: "حمص سادة",
    description_ar: "حمص مميز برشة زيت الزيتون",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad5,
  },

  {
    meal_name_en: "Tahini with Veggies and Eggplant",
    description_en:
      "Assortment of Madini veggies served with tahini vinaigrette",
    price: "14 ريال",
    meal_name_ar: "طحنية بالباذنجان والخضار",
    description_ar: "خضار المدينة المختارة بالطحينة والخل ",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad6,
  },

  //
  {
    meal_name_en: "Madini Veggies with Pomegranate Molasses and Spicy Pepper",
    description_en: "Veggie salad flavored with spicy pepper",
    price: "17 ريال",
    meal_name_ar: "خضار المدينة بدبس الرمان والفلفل الحار",
    description_ar: "سلطة مشكلة من الخضار ومطعمة بالفلفل الحار ",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: null,
  },

  {
    meal_name_en: "Mantu Fattah",
    description_en:
      "Beef mantu with yogurt served with tomato sauce and coriander",
    price: "20 ريال",
    meal_name_ar: "فتة منتو",
    description_ar:
      "قطع منتو باللحم مع لبن الزبادي مرشوشة بصوص الطماطم والكزبرة ",
    calories: "377",
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
    image: salad7,
  },
  {
    id: "82",
    image: salad8,
    meal_name_en: "Grandma's Salad",
    description_en: "Traditional salad with parsley and lemon dressing",
    price: null,
    meal_name_ar: "سلطة ستيتة",
    description_ar: "سلطة الجدات المزينة بالبقدونس و الليمون",
    calories: null,
    category_en: "Salads & Cold Appetizers",
    category_ar: "السلطات و المقبلات الباردة",
    available: true,
    trendy: false,
  },

  //////////////////////////////////////

  // مشهونات طعمة
  //
  {
    meal_name_en: "Yogurt Salad",
    description_en: "Yogurt mix with fresh cucumber and Madini mint",
    price: "7 ريال",
    meal_name_ar: "سلطة اللبن",
    description_ar: "اللبن و الخيار الطازج ونعناع المدينة",
    calories: null,

    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  //
  {
    meal_name_en: "Carrot Achard",
    description_en: "The traditional Madini pickles made of carrots",
    price: "7 ريال",
    meal_name_ar: "أشار الجزر",
    description_ar: "المخلل الأشهر في المدينة المصنوع من الجزر",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  {
    meal_name_en: "Homr Tammarind Sauce",
    description_en: "Tamarind sour sauce",
    price: "7 ريال",
    meal_name_ar: "صوص الحمر",
    description_ar: "صوص الحمر الحامض",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  {
    id: "90",
    image: null,
    meal_name_en: "Pickled Lemons",
    description_en: "Traditional preserved lemons with authentic spices",
    price: null,
    meal_name_ar: "مخلل ليمون",
    description_ar: "",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
  },
  {
    meal_name_en: "Plain Tahini Salad",
    description_en:
      "Fresh arugula with Al-Oula organic pieces with sweet and sour sauce",
    price: "7 ريال",
    meal_name_ar: "سلطة طحينة سادة",
    description_ar:
      "أوراق الجرجير الطازجة مع قطع طازجة من برتقال العلا مع صوص الحامض الحلو الخاص ",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  {
    meal_name_en: "Garlic Sauce",
    description_en: "To'mah’s delicious garlic sauce",
    price: "7 ريال",
    meal_name_ar: "الثومية",
    description_ar: "ثومية طُعمة اللذيذة",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  {
    meal_name_en: "Tahini Salad with Roasted Tomatoes",
    description_en: null,
    price: "7 ريال",
    meal_name_ar: "سلطة طحينة بالطماطم المشوي",
    description_ar: null,
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },

  {
    meal_name_en: "Spicy Dakos",
    description_en: "Tomatoes mixed with parsley and spicy pepper",
    price: "7 ريال",
    meal_name_ar: "دقس حار",
    description_ar: "خلطة طمامط بالبقدونس والفلفل الحار",
    calories: "343",
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  {
    meal_name_en: "Mild Dakos",
    description_en: "Tomatoes and parsley mix",
    price: "7 ريال",
    meal_name_ar: "دقس بارد",
    description_ar: "خلطة الطماطم بالبقدونس",
    calories: "343",
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },
  {
    meal_name_en: "To'mah Fresh Peppers",
    description_en: "Fresh peppers with lemon, olive oil, and parsley",
    price: "7 ريال",
    meal_name_ar: "فلفل طعمة طازج",
    description_ar: "فلفل طازج والليمون وزيت زيتون، وبقدونس",
    calories: "343",
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
    image: null,
  },

  {
    id: "95",
    image: null,
    meal_name_en: "Cooked Stuffed Peppers",
    description_en: "Peppers cooked with olive oil and garlic",
    price: null,
    meal_name_ar: "فلفل طعمة مطبوخ",
    description_ar: "فلفل مطبوخ بزيت الزيتون و الثوم",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
  },
  {
    id: "97",
    image: null,
    meal_name_en: "Beetroot Pickle Mix",
    description_en: "Assorted pickled vegetables with beetroot",
    price: null,
    meal_name_ar: "مخلل مشكل  البنجر",
    description_ar: "",
    calories: null,
    category_en: "To'mah Pickles & Preserves",
    category_ar: "مشهونات طعمة (المخلالات و الطرشي)",
    available: true,
    trendy: false,
  },

  ///////////////////////////////////////////////////////
  /// جدول أنواع الرز اليومي

  {
    id: "132",
    image: null,
    meal_name_en: "Sunday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Kabuli Rice (Lamb + Chicken)",
    price: null,
    meal_name_ar: "الأحد",
    description_ar: "رز مديني (لحم +دجاج) - الرز الكابلي (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },
  {
    id: "133",
    image: null,
    meal_name_en: "Monday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Kabuli Rice (Lamb + Chicken)",
    price: null,
    meal_name_ar: "الاثنين",
    description_ar: "رز مديني (لحم +دجاج) - الرز الكابلي (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },
  {
    id: "134",
    image: null,
    meal_name_en: "Tuesday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Bukhari Rice (Lamb + Chicken) - Saleeg (Lamb + Chicken)",
    price: null,
    meal_name_ar: "الثلاثاء",
    description_ar:
      "رز مديني (لحم +دجاج) - الرز البخاري (لحم + دجاج) - سليق (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },
  {
    id: "135",
    image: null,
    meal_name_en: "Wednesday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Bukhari Rice (Lamb + Chicken) - Saleeg (Lamb + Chicken)",
    price: null,
    meal_name_ar: "الأربعاء",
    description_ar:
      "رز مديني (لحم +دجاج) - الرز البخاري (لحم + دجاج) -  سليق (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },
  {
    id: "136",
    image: null,
    meal_name_en: "Thursday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Bukhari Rice (Lamb + Chicken) - Saleeg (Lamb + Chicken)",
    price: null,
    meal_name_ar: "الخميس",
    description_ar:
      "رز مديني (لحم +دجاج) - الرز البخاري (لحم + دجاج) - سليق (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },
  {
    id: "137",
    image: null,
    meal_name_en: "Friday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Chickpea Rice (Lamb) - Saleeg (Lamb + Chicken)",
    price: null,
    meal_name_ar: "الجمعة",
    description_ar:
      "رز مديني (لحم +دجاج) - رز بالحمص  (لحم) - سليق (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },
  {
    id: "138",
    image: null,
    meal_name_en: "Saturday Rice Selection",
    description_en:
      "Madini Rice (Lamb + Chicken) - Kabuli Rice (Lamb + Chicken)",
    price: null,
    meal_name_ar: "السبت",
    description_ar: "رز مديني (لحم +دجاج) - الرز الكابلي (لحم + دجاج)",
    calories: null,
    category_en: "Daily Rice Varieties",
    category_ar: "جدول أنواع الرز اليومي",
    available: true,
    trendy: false,
  },

  /////////////////////////////////////////////////////////
  // سلة معجنات
  {
    meal_name_en: "Madini Borek Pan",
    description_en: "Fresh borek filled with minced beef right from the oven",
    price: "20 ريال",
    meal_name_ar: "طاوة بريك مدني",
    description_ar: "طاوة بريك باللحم المفروم الطازج من فرن طُعمة",
    calories: "535",

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    available: true,
    trendy: false,
    image: breadBasket1,
  },

  //
  {
    meal_name_en: "Triangular Meat Samosa",
    description_en:
      "3 triangular pieces of meat stuffed with madini eggs in the traditional way",
    price: "15 ريال",
    meal_name_ar: "سمبوسة مثلث اللحم",
    description_ar: "4 قطع مثلث اللحم محشوة باللحم والبيض بالخلطة المدينية ",
    calories: "355",

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    available: true,
    trendy: false,
    image: null,
  },
  {
    meal_name_en: "White Cheese Rolls",
    description_en: "4 pieces of rolls filled with baladi cheese",
    price: "15 ريال",
    meal_name_ar: "سمبوسك اصابع الجبنة البيضاء ",
    description_ar: "٤ قطع عجين رول محشوة بالجبنة البلدي",
    calories: "332",

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    available: true,
    trendy: false,
    image: breadBasket3,
  },
  //
  {
    id: "37",
    meal_name_en: "Sea Spicy Chips",
    meal_name_ar: "شيبسي حارة البحر",
    description_en:
      "Enjoy fresh potato fries served with a distinctive selection of sauces: creamy garlic sauce, rich sesame tahini, spicy green dakos, and refreshing homr salad. A perfect side dish for lovers of hot and diverse flavors.",
    description_ar:
      "استمتع بأصابع البطاطس الطازجة المقلية والمقدمة مع تشكيلة مميزة من الصوصات: صوص الثوم الكريمي، طحينة السمسم الغنية، دقوس الأخضر الحار، وسلطة الحمر المنعشة. وجبة جانبية مثالية لعشاق النكهات الحارة والمتنوعة.",
    image: img5,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "0",

    price: "12 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "44",
    meal_name_en: "Rolled Borek",
    meal_name_ar: "بريك ملفوف",
    description_en:
      "A traditional pastry from Madinah, featuring flaky dough layers filled with a savory mixture, rolled and baked to perfection.",
    description_ar:
      "معجنات تقليدية من المدينة، تتكون من طبقات عجين هشة محشوة بخليط لذيذ، ملفوفة ومخبوزة حتى الكمال.",
    image: breadBasket5,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "265",
    price: "20 ريال",
    available: true,
    trendy: false,
  },
  //
  {
    id: "6",
    meal_name_en: "Baked Mantu",
    meal_name_ar: "منتو فرنّي",
    description_en:
      "Enjoy two pieces of fresh oven-baked Mantu, filled with fresh and carefully seasoned beef. A light and healthy dish with a distinctive flavor, perfect as a light meal or a delicious appetizer.",
    description_ar:
      "استمتع بقطعتين من المنتو الطازج المخبوز في الفرن، محشو باللحم الطازج والمتبل بعناية. طبق خفيف وصحي بنكهة مميزة، مثالي كوجبة خفيفة أو مقبل شهي.",
    image: "img3",

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "222",
    price: "15 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "32",
    meal_name_en: "Beef Puffs",
    meal_name_ar: "بف باللحم",
    description_en:
      "Two delicious pieces of puffs filled with fresh and carefully seasoned beef, encased in a golden, crispy, and flaky pastry. A delightful light meal or a distinctive appetizer that satisfies all tastes.",
    description_ar:
      "استمتع بقطعتين شهيتين من البف المحشو باللحم الطازج والمتبل بعناية، داخل عجينة ذهبية هشة ومقرمشة. وجبة خفيفة لذيذة أو مقبل مميز يرضي جميع الأذواق.",
    image: breadBasket7,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "322",
    price: "9 ريال",
    available: true,
    trendy: false,
  },
  //
  {
    id: "33",
    meal_name_en: "Qadi al Qudah",
    meal_name_ar: "قاضي قاضي",
    description_en:
      "Enjoy the most famous and popular meatballs in the dishes of the city's locals! These delicious balls are prepared with a special and distinctive recipe to give you an unforgettable taste. An irresistible dish favored by everyone.",
    description_ar:
      "استمتع بكرات اللحم الأشهر والأكثر شعبية في أطباق أهل المدينة! هذه الكرات اللذيذة محضرة بوصفة خاصة ومميزة لتمنحك طعماً لا يُنسى. طبق لا يقاوم يفضله الجميع.",
    image: breadBasket6,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "271",
    price: "15 ريال",
    available: true,
    trendy: true,
  },

  {
    id: "36",
    meal_name_en: "Samosa Mix Cheese",
    meal_name_ar: "سمبوسك طعمة",
    description_en:
      "Enjoy a unique taste with Samosa Mix Cheese, crispy dough filled with a delicious blend of cheeses in the Madini style. A tasty light meal or a distinctive appetizer that satisfies all tastes.",
    description_ar:
      "استمتع بمذاق فريد مع سمبوسك طعمة، رقائق مقرمشة محشوة بخليط من الأجبان اللذيذة على طريقة أهل المدينة. وجبة خفيفة شهية أو مقبل مميز يرضي جميع الأذواق.",
    image: img7,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "342",
    price: "17 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "20",
    meal_name_en: "Lahmacun",
    meal_name_ar: "عيش باللحم",
    description_en:
      "Enjoy a piece of thin dough filled with fresh minced beef seasoned with a special and distinctive tahini mix. This dish is served soft and hot to give you an unforgettable dining experience.",
    description_ar:
      "استمتع بقطعة من العجين الرقيق المحشو باللحم المفروم الطازج والمتبل بخلطة طحينة خاصة ومميزة. يقدم هذا الطبق ساخناً وطرياً ليمنحك تجربة طعام لا تُنسى.",
    image: breadBasket9,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "310",
    price: "20 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "7",
    meal_name_en: "Beef Yaghmash",
    meal_name_ar: "يغمش لحم",
    description_en:
      "Indulge in four pieces of delicious Yaghmash, filled with beef seasoned with a special and distinctive blend. A tasty and flavorful dish, perfect as a light meal or an appetizer that adds an authentic Eastern touch to your table.",
    description_ar:
      "استمتع بأربع قطع من اليغمش اللذيذ، محشوة باللحم المتبل بخلطة خاصة ومميزة. طبق شهي وغني بالنكهات، مثالي كوجبة خفيفة أو مقبل يضيف لمسة شرقية أصيلة إلى مائدتك.",
    image: breadBasket10,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "202",
    price: "12 ريال",
    available: true,
  },
  {
    id: "29",
    meal_name_en: "Mantu Futo",
    meal_name_ar: "منتو فتو",
    description_en:
      "Indulge in four pieces of delicious Mantu, filled with a savory stuffing and topped with a sprinkle of aromatic cumin and spicy black pepper. An authentic traditional dish with a distinctive flavor that takes you on a journey to the world of Eastern tastes.",
    description_ar:
      "استمتع بأربع قطع من المنتو الشهي، محشوة بحشوة لذيذة ومغطاة برشة من الكمون العطري والفلفل الأسود الحار. طبق تقليدي أصيل بنكهة مميزة تأخذك في رحلة إلى عالم من المذاقات الشرقية.",
    image: breadBasket11,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "268",
    price: "15 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "1",
    meal_name_en: "Zainab Fermoza (Meat)",
    meal_name_ar: "فرموزة زينب (لحم)",
    description_en:
      "Layers of thin, crispy dough filled with a special meat mixture and served with Laza.",
    description_ar:
      "طبقات من العجين الرقيق الهش محشوة بخلطة اللحم الخاصة وتقدم مع اللازا.",
    image: breadBasket13,

    category_en: "Bread Basket",
    category_ar: "سلة معجنات",
    calories: "454",
    price: "15 ريال",
    available: true,
    trendy: false,
  },
  //////////////////////////////////////////////////////////////////////

  // أرزاز طعمة
  {
    id: "26",
    meal_name_en: "Madini Rice with Beef",
    meal_name_ar: "رز مديني باللحم",
    description_en:
      "Indulge in a plate of premium white rice with a piece of roasted lamb flavored with TO'MAH's special blend of lamb ghee, saffron, and barberry. This delicious dish is served with dakos and yogurt salad to give you a complete and flavorful authentic meal.",
    description_ar:
      "استمتع بطبق من الأرز الأبيض الفاخر مع قطعة من لحم الضأن المحمر والمنكه بخلطة طعمة الخاصة من السمن الغنمي والزعفران والزرشك الأحمر. يقدم هذا الطبق الشهي مع سلطة الدقس وسلطة اللبن ليمنحك وجبة متكاملة وغنية بالنكهات الأصيلة.",
    image: rice1,

    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1720",
    price: "97 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "27",
    meal_name_en: "Madini Rice with Chicken",
    meal_name_ar: "رز مديني بالدجاج",
    description_en:
      "Indulge in a plate of premium white rice with a piece of roasted chicken flavored with TO'MAH's special blend of lamb ghee, saffron, and barberry. This delicious dish is served with dakos and yogurt salad to give you a complete and flavorful authentic meal.",
    description_ar:
      "استمتع بطبق من الأرز الأبيض الفاخر مع قطعة من الدجاج المحمر والمنكه بخلطة طعمة الخاصة من السمن الغنمي والزعفران والزرشك الأحمر. يقدم هذا الطبق الشهي مع سلطة الدقس وسلطة اللبن ليمنحك وجبة متكاملة وغنية بالنكهات الأصيلة.",
    image: rice2,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1310",
    price: "38 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "10",
    meal_name_en: "Bukhari Rice Jawazat",
    meal_name_ar: "رز بخاري الزواجات",
    description_en:
      "Indulge in a plate of Bukhari rice prepared in the Jawazat Ahl Awal style, with a piece of slow-cooked meat seasoned with a special blend of spices. This delicious dish is garnished with a mixture of raisins, balila, and almonds, and served with dakos and a refreshing green salad for an authentic dining experience and an unforgettable taste.",
    description_ar:
      "استمتع بطبق من الرز البخاري المعد على طريقة جوازات أهل أول، مع قطعة من اللحم المطهو ببطء والمتبل بخلطة بهارات خاصة. يزين هذا الطبق الشهي بمزيج من الزبيب والبليلة واللوز، ويقدم مع سلطة الدقس وسلطة خضراء منعشة لتجربة طعام أصيلة ومذاق لا يُنسى.",
    image: rice3,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1755",
    price: "97 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "11",
    code: "BUKHARI-SIT-ALBEIT",
    meal_name_en: "Bukhari Rice Sit Al-Beit",
    meal_name_ar: "رز بخاري ست البيت",
    description_en:
      "Indulge in a plate of Bukhari rice prepared with chicken in the Sit Al-Beit style, a distinctive recipe from Jawazat Ahl Awal. This dish features a unique blend of spices and a delicious mix of raisins, balila, and almonds. Served with dakos and a refreshing green salad for an authentic homemade dining experience and an unforgettable taste.",
    description_ar:
      "استمتع بطبق من الرز البخاري المعد بالدجاج على طريقة ست البيت، وهي وصفة مميزة من جوازات أهل أول. يتميز هذا الطبق بخلطة بهارات فريدة ومزيج شهي من الزبيب والبليلة واللوز. يقدم مع سلطة الدقس وسلطة خضراء منعشة لتجربة طعام منزلية أصيلة ومذاق لا يُنسى.",
    image: rice4,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "146",
    price: "38 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "22",
    meal_name_en: "Kabuli Madini Rice",
    meal_name_ar: "رز المدينة الكابلي المشهور",
    description_en:
      "Indulge in a plate of meat rice flavored with orange zest and saffron, served with a special sour potato kashneh. This famous dish is accompanied by yogurt salad and spicy salad to give you a unique dining experience rich in diverse flavors.",
    description_ar:
      "استمتع بطبق من الرز باللحم المنكه بقشر البرتقال والزعفران مع كشنة البطاطس الحامض الخاصة. يقدم هذا الطبق الشهير مع سلطة اللبن وسلطة حارة ليمنحك تجربة طعام فريدة وغنية بالنكهات المتنوعة.",
    image: rice5,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1876",
    price: "97 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "21",
    meal_name_en: "Kabuli Rice Sit Al-Beit",
    meal_name_ar: "الرز الكابلي ل ست البيت",
    description_en:
      "Indulge in a plate of chicken rice flavored with orange zest and saffron, served with a special sour potato kashneh. This delicious dish is accompanied by yogurt salad and spicy salad to give you a unique homemade dining experience rich in diverse flavors.",
    description_ar:
      "استمتع بطبق من رز الدجاج المنكه بقشر البرتقال والزعفران مع كشنة البطاطس الحامض الخاصة. يقدم هذا الطبق الشهي مع سلطة اللبن وسلطة حارة ليمنحك تجربة طعام منزلية مميزة وغنية بالنكهات المتنوعة.",
    image: rice6,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "149",
    price: "38 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "34",
    meal_name_en: "Beef Saleeq",
    meal_name_ar: "سليق باللحم",
    description_en:
      "Indulge in a plate of milk-boiled rice prepared with special flavors, served with a piece of meat roasted in sheep ghee and spicy dakos sauce. This delicious dish is accompanied by dakos and spicy salad to give you a traditional dining experience rich in flavors.",
    description_ar:
      "استمتع بطبق من الرز المسلوق بالحليب والمحضر بنكهة خاصة، ويقدم مع قطعة من اللحم المحمر بالسمن الغنمي وصوص الدقس الحار. يقدم هذا الطبق الشهي مع الدقس وسلطة حارة ليمنحك تجربة طعام تقليدية غنية بالنكهات.",
    image: rice7,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1622",
    price: "97 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "35",
    meal_name_en: "Chicken Saleeq",
    meal_name_ar: "سليق بالدجاج",
    description_en:
      "Indulge in a plate of milk-boiled rice prepared with special flavors, served with a piece of chicken roasted in sheep ghee and spicy dakos sauce. This delicious dish is accompanied by dakos and spicy salad to give you a traditional dining experience rich in flavors.",
    description_ar:
      "استمتع بطبق من الرز المسلوق بالحليب والمحضر بنكهة خاصة، ويقدم مع قطعة من الدجاج المحمر بالسمن الغنمي وصوص الدقس الحار. يقدم هذا الطبق الشهي مع الدقس وسلطة حارة ليمنحك تجربة طعام تقليدية غنية بالنكهات.",
    image: rice8,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1190",
    price: "38 ريال",
    available: true,
    trendy: false,
  },
  //
  {
    id: "4",
    code: "ARABIAN-RICE-CHICKEN",
    meal_name_en: "Arabian Rice & To'mah's Chicken",
    meal_name_ar: "رز عربي ودجاج طعمة",
    description_en:
      "Indulge in a plate of premium white rice with chicken marinated in To'mah's special blend of yogurt, saffron, and potatoes. This delicious dish is served with yogurt and spicy salad to give you an authentic Arabian dining experience rich in flavors.",
    description_ar:
      "استمتع بطبق من الرز الأبيض الفاخر مع الدجاج المتبل بطريقة طعمة الخاصة باللبن والزعفران والبطاطس. يقدم هذا الطبق الشهي مع سلطة اللبن وسلطة حارة ليمنحك تجربة طعام عربية أصيلة وغنية بالنكهات.",
    image: "img11",
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "1788",
    price: "40 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "15",
    meal_name_en: "Gama'h Rice",
    meal_name_ar: "رز الجمعه",
    description_en:
      "Indulge in a plate of rice cooked with meat or chicken, chickpeas, and Linda's special ghee blend with an authentic ghee flavor. This delicious dish is served with sliced carrots, tahini sauce with cucumber, and pickled ahwaz carrots to give you a warm family meal rich in diverse flavors.",
    description_ar:
      "استمتع بطبق من الرز المطبوخ باللحم أو الدجاج مع الحمص وخلطة ليندا الخاصة بطعم السمن الأصيل. يقدم هذا الطبق الشهي مع قطع من الجزر الشرائح وصوص الطحينة بالخيار والمخلل الأهواز ليمنحك وجبة عائلية دافئة وغنية بالنكهات المتنوعة.",
    image: rice9,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    calories: "138",
    price: "97 ريال",
    available: true,
  },

  //
  {
    id: "127",
    image: null,
    meal_name_en: "Chicken Fatayer",
    description_en: "Traditional bread soaked in spiced chicken broth",
    price: null,
    meal_name_ar: "فطير بالدجاج",
    description_ar: "فطير مسقي بمرقة الدجاج المسبكه",
    calories: null,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "128",
    image: null,
    meal_name_en: "Meat Fatayer",
    description_en: "Traditional bread soaked in spiced meat broth",
    price: null,
    meal_name_ar: "فطير باللحم",
    description_ar: "فطير مسقي بمرقة اللحم المسبكة",
    calories: null,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "129",
    image: null,
    meal_name_en: "Chicken Kozi",
    description_en: "Rice and pasta mix with chicken",
    price: null,
    meal_name_ar: "كوزي دجاج طعمة",
    description_ar: "خليط الرز و المكرونة بالدجاج",
    calories: null,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    available: true,
    trendy: false,
  },
  {
    id: "130",
    image: null,
    meal_name_en: "Meat Kozi",
    description_en: "Rice and pasta mix with meat",
    price: null,
    meal_name_ar: "كوزي لحم طعمة",
    description_ar: "خليط الرز و المكرونة باللحم",
    calories: null,
    category_en: "To'mah Rice Dishes",
    category_ar: "أرزاز طعمة",
    available: true,
    trendy: false,
  },

  ////////////////////////////////////
];

export default productsData;
