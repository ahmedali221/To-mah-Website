import img1 from "../../assets/Menu/pages13-18/DSC01782.JPG";
import img2 from "../../assets/Menu/pages13-18/DSC02159.JPG";
import img3 from "../../assets/Menu/pages13-18/DSC02166.JPG";

import img4 from "../../assets/Menu/pages13-18/DSC01791.JPG";
import img5 from "../../assets/Menu/pages13-18/DSC01232.JPG";
import img6 from "../../assets/Menu/pages13-18/DSC01866.JPG";
import img7 from "../../assets/Menu/pages13-18/DSC01863.JPG";
import img8 from "../../assets/Menu/pages13-18/DSC01937.JPG";
import img9 from "../../assets/Menu/pages13-18/DSC01902.JPG";
import img10 from "../../assets/Menu/pages13-18/DSC01929.JPG";
import img11 from "../../assets/Menu/pages13-18/DSC01885.JPG";
import img12 from "../../assets/Menu/pages13-18/DSC01921.JPG";
import img13 from "../../assets/Menu/pages13-18/DSC01954.JPG";
import img14 from "../../assets/Menu/pages13-18/DSC01946.JPG";
import img15 from "../../assets/Menu/pages13-18/DSC01852.JPG";

const productsData = [
  {
    id: "1",
    meal_name_en: "Zainab Fermoza (Meat)",
    meal_name_ar: "فرموزة زينب (لحم)",
    description_en:
      "Layers of thin, crispy dough filled with a special meat mixture and served with Laza.",
    description_ar:
      "طبقات من العجين الرقيق الهش محشوة بخلطة اللحم الخاصة وتقدم مع اللازا.",
    image: img1,
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "454",
    price: "15 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "2",
    meal_name_en: "Fries Samoli Sandwich",
    meal_name_ar: "ساندوتش صامولي بالبطاطس المقلية",
    description_en:
      "Long samoli bread sandwich filled with french fries, served with three types of sauce.",
    description_ar:
      "ساندوتش صامولي طويل محشو بالبطاطس المقلية، يقدم مع ثلاثة أنواع من الصوص.",
    image: img3,
    category_en: "sandwiches",
    category_ar: "ساندوتشات",
    calories: "0",
    price: "10 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "3",
    meal_name_en: "Grilled Samoli",
    meal_name_ar: "صامولي شواية",
    description_en:
      "Grilled chicken fillet in samoli bread served with tahini sauce.",
    description_ar:
      "قطع من الدجاج الشواية المخلية محشية داخل خبز الصامولي الشهي وتقدم بصوص الطحينة والدقس.",
    image: img2,
    category_en: "sandwiches",
    category_ar: "ساندوتشات",
    calories: "0",
    price: "10 ريال",
    available: true,
    trendy: true,
  },
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
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "1788",
    price: "40 ريال",
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
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "55 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "6",
    meal_name_en: "Baked Mantu",
    meal_name_ar: "منتو فرنّي",
    description_en:
      "Enjoy two pieces of fresh oven-baked Mantu, filled with fresh and carefully seasoned beef. A light and healthy dish with a distinctive flavor, perfect as a light meal or a delicious appetizer.",
    description_ar:
      "استمتع بقطعتين من المنتو الطازج المخبوز في الفرن، محشو باللحم الطازج والمتبل بعناية. طبق خفيف وصحي بنكهة مميزة، مثالي كوجبة خفيفة أو مقبل شهي.",
    image: "img3",
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "222",
    price: "15 ريال",
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
    image: "img4",
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "202",
    price: "12 ريال",
    available: true,
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
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "0",
    price: "75 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "9",
    meal_name_en: "Beef Muqalqal",
    meal_name_ar: "مقلقل لحم",
    description_en:
      "Indulge in beef muqalqal pieces with the special blend, served in the Ahl Awl style. A delicious meal rich in traditional and distinctive flavors.",
    description_ar:
      "استمتع بقطع لحم مقلقل بالخلطة وتقدم بطريقة أهل أول. وجبة شهية وغنية بالنكهات التقليدية والمميزة.",
    image: "img20",
    category_en: "Breakfast/Chef's Breakfast",
    category_ar: "فطور/فطور الطباخة",
    calories: "607",
    price: "40 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "10",
    meal_name_en: "Bukhari Rice Jawazat",
    meal_name_ar: "رز بخاري جوازات",
    description_en:
      "Indulge in a plate of Bukhari rice prepared in the Jawazat Ahl Awal style, with a piece of slow-cooked meat seasoned with a special blend of spices. This delicious dish is garnished with a mixture of raisins, balila, and almonds, and served with dakos and a refreshing green salad for an authentic dining experience and an unforgettable taste.",
    description_ar:
      "استمتع بطبق من الرز البخاري المعد على طريقة جوازات أهل أول، مع قطعة من اللحم المطهو ببطء والمتبل بخلطة بهارات خاصة. يزين هذا الطبق الشهي بمزيج من الزبيب والبليلة واللوز، ويقدم مع سلطة الدقس وسلطة خضراء منعشة لتجربة طعام أصيلة ومذاق لا يُنسى.",
    image: "img7",
    category_en: "Rices Te'ama",
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
    image: "img8",
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "146",
    price: "38 ريال",
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
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
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
    category_en: "Breakfast/Chef's Breakfast",
    category_ar: "فطور/فطور الطباخة",
    calories: "479",
    price: "30 ريال",
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
    category_en: "Ta'meh cooking/casseroles",
    category_ar: "طبيخ طعمة/الإيدامات",
    calories: 329,
    price: "20 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "15",
    meal_name_en: "Gama'h Rice",
    meal_name_ar: "رز الجمعه",
    description_en:
      "Indulge in a plate of rice cooked with meat or chicken, chickpeas, and Linda's special ghee blend with an authentic ghee flavor. This delicious dish is served with sliced carrots, tahini sauce with cucumber, and pickled ahwaz carrots to give you a warm family meal rich in diverse flavors.",
    description_ar:
      "استمتع بطبق من الرز المطبوخ باللحم أو الدجاج مع الحمص وخلطة ليندا الخاصة بطعم السمن الأصيل. يقدم هذا الطبق الشهي مع قطع من الجزر الشرائح وصوص الطحينة بالخيار والمخلل الأهواز ليمنحك وجبة عائلية دافئة وغنية بالنكهات المتنوعة.",
    image: "img9",
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "138",
    price: "97 ريال",
    available: true,
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
    category_en: "Ta'meh cooking/casseroles",
    category_ar: "طبيخ طعمة/الإيدامات",
    calories: "351",
    price: "20 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "17",
    meal_name_en: "Grilled Chicken",
    meal_name_ar: "دجاج شواية",
    description_en:
      "Indulge in a delicious meal consisting of Bukhari rice prepared in a special way and a piece of grilled chicken seasoned with TO'MAH's signature spices. This dish is served with a variety of side dishes for a complete and tasty dining experience.",
    description_ar:
      "استمتع بوجبة شهية تتكون من رز بخاري معد بطريقة مميزة وقطعة من الدجاج المشوي والمتبل ببهارات طعمة الخاصة. يقدم هذا الطبق مع أطباق جانبية متنوعة لتجربة طعام متكاملة ولذيذة.",
    image: img10,
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "465",
    price: "38 ريال",
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
    category_en: "Breakfast/Chef's Breakfast",
    category_ar: "فطور/فطور الطباخة",
    calories: "297",
    price: "30 ريال",
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
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
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
    image: "img19",
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "310",
    price: "20 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "21",
    meal_name_en: "Kabuli Rice Sit Al-Beit",
    meal_name_ar: "الرز الكابلي ل ست البيت",
    description_en:
      "Indulge in a plate of chicken rice flavored with orange zest and saffron, served with a special sour potato kashneh. This delicious dish is accompanied by yogurt salad and spicy salad to give you a unique homemade dining experience rich in diverse flavors.",
    description_ar:
      "استمتع بطبق من رز الدجاج المنكه بقشر البرتقال والزعفران مع كشنة البطاطس الحامض الخاصة. يقدم هذا الطبق الشهي مع سلطة اللبن وسلطة حارة ليمنحك تجربة طعام منزلية مميزة وغنية بالنكهات المتنوعة.",
    image: "img6",
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "149",
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
    image: "img5",
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "1876",
    price: "97 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "23",
    meal_name_en: 'Mabshoor "Minced" Beef',
    meal_name_ar: "مبشور اللحم",
    description_en:
      "Indulge in minced beef grilled on skewers with a selection of fresh grilled vegetables, served with a refreshing salad. A delicious meal rich in grilled flavors, perfect for meat and vegetable lovers.",
    description_ar:
      "استمتع بلحم مفروم مشوي على السيخ مع تشكيلة من الخضار المشوية الطازجة، ويقدم مع سلطة منعشة. وجبة شهية وغنية بالنكهات المشوية، مثالية لمحبي اللحوم والخضروات.",
    image: img8,
    category_en: "Grilled Te'ama",
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
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "0",
    price: "75 ريال",
    available: true,
    trendy: false,
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
    category_en: "Ta'meh cooking/casseroles",
    category_ar: "طبيخ طعمة/الإيدامات",
    calories: "0",
    price: "27 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "26",
    meal_name_en: "Madini Rice with Beef",
    meal_name_ar: "رز مديني باللحم",
    description_en:
      "Indulge in a plate of premium white rice with a piece of roasted lamb flavored with TO'MAH's special blend of lamb ghee, saffron, and barberry. This delicious dish is served with dakos and yogurt salad to give you a complete and flavorful authentic meal.",
    description_ar:
      "استمتع بطبق من الأرز الأبيض الفاخر مع قطعة من لحم الضأن المحمر والمنكه بخلطة طعمة الخاصة من السمن الغنمي والزعفران والزرشك الأحمر. يقدم هذا الطبق الشهي مع سلطة الدقس وسلطة اللبن ليمنحك وجبة متكاملة وغنية بالنكهات الأصيلة.",
    image: "img1",
    category_en: "Rices Te'ama",
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
    image: "img2",
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "1310",
    price: "38 ريال",
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
    category_en: "Ta'mat Al-Madinah dishes",
    category_ar: "أطباق  طعمة  المدينة",
    calories: "0",
    price: "45 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "29",
    meal_name_en: "Mantu Futo",
    meal_name_ar: "منتو فتو",
    description_en:
      "Indulge in four pieces of delicious Mantu, filled with a savory stuffing and topped with a sprinkle of aromatic cumin and spicy black pepper. An authentic traditional dish with a distinctive flavor that takes you on a journey to the world of Eastern tastes.",
    description_ar:
      "استمتع بأربع قطع من المنتو الشهي، محشوة بحشوة لذيذة ومغطاة برشة من الكمون العطري والفلفل الأسود الحار. طبق تقليدي أصيل بنكهة مميزة تأخذك في رحلة إلى عالم من المذاقات الشرقية.",
    image: img4,
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "268",
    price: "15 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "30",
    meal_name_en: "Okra",
    meal_name_ar: "مختوم بامية",
    description_en:
      "Indulge in Madini okra cooked with tender beef chunks, served with grain bread and Madini rice. A delicious meal rich in the traditional and distinctive flavors of the city's locals.",
    description_ar:
      "استمتع ببامية مدينية مطبوخة بقطع اللحم الطرية، وتقدم بخبز الحب والرز المديني. وجبة شهية وغنية بالنكهات التقليدية والمميزة لأهل المدينة.",
    image: "img24",
    category_en: "Ta'meh cooking/casseroles",
    category_ar: "طبيخ طعمة/الإيدامات",
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
    category_en: "Ta'meh cooking/casseroles",
    category_ar: "طبيخ طعمة/الإيدامات",
    calories: "289",
    price: "27 ريال",
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
    image: "img18",
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "322",
    price: "9 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "33",
    meal_name_en: "Qadi al Qudah",
    meal_name_ar: "قاضي قاضي",
    description_en:
      "Enjoy the most famous and popular meatballs in the dishes of the city's locals! These delicious balls are prepared with a special and distinctive recipe to give you an unforgettable taste. An irresistible dish favored by everyone.",
    description_ar:
      "استمتع بكرات اللحم الأشهر والأكثر شعبية في أطباق أهل المدينة! هذه الكرات اللذيذة محضرة بوصفة خاصة ومميزة لتمنحك طعماً لا يُنسى. طبق لا يقاوم يفضله الجميع.",
    image: img6,
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "271",
    price: "15 ريال",
    available: true,
    trendy: true,
  },
  {
    id: "34",
    meal_name_en: "Beef Saleeq",
    meal_name_ar: "سليق باللحم",
    description_en:
      "Indulge in a plate of milk-boiled rice prepared with special flavors, served with a piece of meat roasted in sheep ghee and spicy dakos sauce. This delicious dish is accompanied by dakos and spicy salad to give you a traditional dining experience rich in flavors.",
    description_ar:
      "استمتع بطبق من الرز المسلوق بالحليب والمحضر بنكهة خاصة، ويقدم مع قطعة من اللحم المحمر بالسمن الغنمي وصوص الدقس الحار. يقدم هذا الطبق الشهي مع الدقس وسلطة حارة ليمنحك تجربة طعام تقليدية غنية بالنكهات.",
    image: "img11",
    category_en: "Rices Te'ama",
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
    image: "img17",
    category_en: "Rices Te'ama",
    category_ar: "أرزاز طعمة",
    calories: "1190",
    price: "38 ريال",
    available: true,
    trendy: false,
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
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "342",
    price: "17 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "37",
    meal_name_en: "Sea Spicy Chips",
    meal_name_ar: "شيبسي حارة البحر",
    description_en:
      "Enjoy fresh potato fries served with a distinctive selection of sauces: creamy garlic sauce, rich sesame tahini, spicy green dakos, and refreshing homr salad. A perfect side dish for lovers of hot and diverse flavors.",
    description_ar:
      "استمتع بأصابع البطاطس الطازجة المقلية والمقدمة مع تشكيلة مميزة من الصوصات: صوص الثوم الكريمي، طحينة السمسم الغنية، دقوس الأخضر الحار، وسلطة الحمر المنعشة. وجبة جانبية مثالية لعشاق النكهات الحارة والمتنوعة.",
    image: img5,
    category_en: "Breakfast/Snack",
    category_ar: "فطور/تصبيرة",
    calories: "0",
    price: "12 ريال",
    available: true,
    trendy: false,
  },
  {
    id: "38",
    meal_name_en: "Sfiah Cheese Moussaka",
    meal_name_ar: "صفيحة مسفعة بالجبن",
    description_en:
      "Enjoy a Khadua pie with delicious mozzarella cheese. Fresh and tasty pastries, perfect as a light meal or a delicious appetizer.",
    description_ar:
      "استمتع بصفيحة خدوة بالجبنة الموزاريلا اللذيذة. معجنات طازجة وشهية، مثالية كوجبة خفيفة أو مقبل لذيذ.",
    image: "img20",
    category_en: "Plates and sandwiches",
    category_ar: "صفايح وساندوتش",
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
    category_en: "Plates and sandwiches",
    category_ar: "صفايح وساندوتش",
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
    category_en: "Plates and sandwiches",
    category_ar: "صفايح وساندوتش",
    calories: "0",
    price: "12 ريال",
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
    category_en: "Ta'mat Al-Madinah dishes",
    category_ar: "أطباق  طعمة  المدينة",
    calories: "0",
    price: "45 ريال",
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
    category_en: "Grilled Te'ama",
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
    category_en: "Grilled Te'ama",
    category_ar: "منقل طعمة",
    calories: "343",
    price: "73 ريال",
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
    image: img15,
    category_en: "pastry basket",
    category_ar: "سلة معجنات",
    calories: "265",
    price: "20 ريال",
    available: true,
    trendy: false,
  },
  //the end of pages from 13 to 18 "40 ريال"s
];

export default productsData;
