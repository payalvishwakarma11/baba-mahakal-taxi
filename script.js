/* ============================================================
   BABA MAHAKAL TAXI SERVICE — script.js
   All data, logic, animations, and interactivity
   ============================================================ */

/* ============================================================
   SECTION 1 — BUSINESS CONFIGURATION
   Change these values to update the entire website at once
   ============================================================ */
const CONFIG = {
  BUSINESS_NAME:    "Baba Mahakal Taxi Service",
  PHONE:            "+9190391 21625",        // with country code, no +
  PHONE_DISPLAY:    "+91 90391 21625",
  EMAIL:            "auracab@gmail.com",
  CITY:             "Bhopal",
  STATE:            "Madhya Pradesh",
  WHATSAPP_BASE:    "https://wa.me/9190391 21625",
  DEFAULT_WA_MSG:   "Hello Baba Mahakal Taxi Service, I want to book a taxi in Bhopal.",
};

/* ============================================================
   SECTION 2 — VEHICLE DATA
   Edit price, passengers, luggage, comfort here only
   ============================================================ */
const VEHICLES = [
  {
    name:       "WagonR",
    category:   "hatchback",
    label:      "Hatchback",
    price:      10,
    passengers: "4+1",
    luggage:    "2–3 Bags",
    ac:         true,
    comfort:    "Best for City Travel",
    image:      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R-tour/9442/1675922710720/front-left-side-47.jpg",
    alt:        "WagonR taxi in Bhopal",
  },
  {
    name:       "Swift Dzire",
    category:   "sedan",
    label:      "Sedan",
    price:      11,
    passengers: "4+1",
    luggage:    "2–3 Bags",
    ac:         true,
    comfort:    "Comfortable & Economical",
    image:      "https://tse3.mm.bing.net/th/id/OIP.huE6jWXPZv1fvYzZvb2lNwHaET?r=0&pid=Api&h=220&P=0",
    alt:        "Swift Dzire taxi Bhopal",
  },
  {
    name:       "Hyundai Aura",
    category:   "sedan",
    label:      "Sedan",
    price:      11,
    passengers: "4+1",
    luggage:    "2–3 Bags",
    ac:         true,
    comfort:    "Stylish & Fuel Efficient",
    image:      "https://tse4.mm.bing.net/th/id/OIP.abCebVA9JtPSUeKgAKsTXgHaEK?r=0&pid=Api&h=220&P=0",
    alt:        "Hyundai Aura cab Bhopal",
  },
  {
    name:       "Sedan",
    category:   "sedan",
    label:      "Sedan",
    price:      11,
    passengers: "4+1",
    luggage:    "2–3 Bags",
    ac:         true,
    comfort:    "Smooth Outstation Rides",
    image:      "https://tse2.mm.bing.net/th/id/OIP.lba_QuO3XpE2FkjLGKF8VwHaE8?r=0&pid=Api&h=220&P=0",
    alt:        "Sedan taxi service Bhopal",
  },
  {
    name:       "Ertiga",
    category:   "suv",
    label:      "MUV",
    price:      14,
    passengers: "6+1",
    luggage:    "3–4 Bags",
    ac:         true,
    comfort:    "Ideal for Families",
    image:      "https://tse1.mm.bing.net/th/id/OIP.0aoIVG8fm76zSJbQKT5xHQHaEc?r=0&pid=Api&h=220&P=0",
    alt:        "Ertiga cab Bhopal",
  },
  {
    name:       "Innova",
    category:   "innova",
    label:      "MUV",
    price:      22,
    passengers: "7+1",
    luggage:    "4–5 Bags",
    ac:         true,
    comfort:    "Spacious Family Trips",
    image:      "https://tse2.mm.bing.net/th/id/OIP.AxOoNztWGuZnJf2rmE4MDAHaEK?r=0&pid=Api&h=220&P=0",
    alt:        "Innova taxi Bhopal",
  },
  {
    name:       "Innova Crysta",
    category:   "innova",
    label:      "Premium MUV",
    price:      22,
    passengers: "7+1",
    luggage:    "4–5 Bags",
    ac:         true,
    comfort:    "Best for Long Distance",
    image:      "https://motoroctane.com/wp-content/uploads/2020/04/innova-crysta-1.jpg",
    alt:        "Innova Crysta on rent Bhopal",
  },
  {
    name:       "SUV",
    category:   "suv",
    label:      "SUV",
    price:      25,
    passengers: "6+1",
    luggage:    "3–4 Bags",
    ac:         true,
    comfort:    "Comfortable on Any Road",
    image:      "https://tse1.mm.bing.net/th/id/OIP.1I428opD_S_TQO12Ups0fAHaEJ?r=0&pid=Api&h=220&P=0",
    alt:        "SUV taxi service Bhopal",
  },
  {
    name:       "Premium SUV",
    category:   "premium",
    label:      "Premium",
    price:      25,
    passengers: "6+1",
    luggage:    "4–5 Bags",
    ac:         true,
    comfort:    "Luxury Corporate Travel",
    image:      "https://tse1.mm.bing.net/th/id/OIP.20tCtgiVvdG-vvxM250LeQHaEK?r=0&pid=Api&h=220&P=0",
    alt:        "Premium SUV taxi Bhopal",
  },
  {
    name:       "Tempo Traveller",
    category:   "tempo",
    label:      "Tempo",
    price:      22,
    passengers: "12+1",
    luggage:    "8–10 Bags",
    ac:         true,
    comfort:    "Group & Pilgrimage Tours",
    image:      "https://tse1.mm.bing.net/th/id/OIP.YLpZs6ShhLXeOzovhs7P1wHaF7?r=0&pid=Api&h=220&P=0",
    alt:        "Tempo Traveller Bhopal",
  },
];

/* ============================================================
   SECTION 3 — SERVICES DATA
   ============================================================ */
const SERVICES = [
  { icon: "fas fa-city",           title: "Local Taxi Service",        desc: "Affordable local cab rides within Bhopal city — to market, hospital, school or anywhere you need.", },
  { icon: "fas fa-road",           title: "Outstation Taxi",           desc: "Comfortable outstation taxis from Bhopal to Indore, Ujjain, Pachmarhi, Jabalpur and more.", },
  { icon: "fas fa-plane",          title: "Airport Taxi",              desc: "On-time pickup and drop at Raja Bhoj Airport. We track your flight for seamless transfers.", },
  { icon: "fas fa-train",          title: "Railway Station Pickup",    desc: "Pickup and drop at Bhopal Junction and Rani Kamlapati Railway Station — 24×7.", },
  { icon: "fas fa-arrow-right-from-bracket", title: "One Way Taxi",   desc: "Pay only for one-way travel. No return fare. Best rates for one-way trips from Bhopal.", },
  { icon: "fas fa-rotate",         title: "Round Trip Taxi",           desc: "Book a round-trip cab and explore at your own pace. Driver waits during your visit.", },
  { icon: "fas fa-landmark",       title: "Bhopal Sightseeing",        desc: "Explore Upper Lake, Taj-ul-Masjid, Sanchi and all major attractions in one comfortable trip.", },
  { icon: "fas fa-briefcase",      title: "Corporate Travel",          desc: "Reliable, punctual cab service for corporate professionals. Clean cars, suited drivers.", },
  { icon: "fas fa-champagne-glasses", title: "Wedding / Event Taxi",  desc: "Decorated or standard taxis for weddings, functions and events in and around Bhopal.", },
  { icon: "fas fa-bus",            title: "Tempo Traveller",           desc: "AC Tempo Traveller for group travel, pilgrimages, school trips and family tours.", },
  { icon: "fas fa-users",          title: "Family Trip",               desc: "Family-friendly spacious taxis for vacations, weekend getaways and long distance travel.", },
  { icon: "fas fa-people-group",   title: "Group Transportation",      desc: "Large group travel made easy with our fleet of Tempo Travellers and multi-vehicle bookings.", },
];

/* ============================================================
   SECTION 4 — TOUR DESTINATIONS
   ============================================================ */
const TOURS = [
  {
    name:     "Upper Lake (Bada Talab)",
    desc:     "Asia's oldest man-made lake — enjoy serene boat rides and stunning sunset views at Bhopal's most iconic landmark.",
    distance: "5 km from City Centre",
    image:    "https://tse4.mm.bing.net/th/id/OIP.2p0wmYbDRbpsWSHsE_0D0AHaE7?r=0&pid=Api&h=220&P=0",
    alt:      "Upper Lake Bhopal",
    waMsg:    "Hello, I want to book a taxi to Upper Lake from Bhopal.",
  },
  {
    name:     "Van Vihar National Park",
    desc:     "A scenic national park on the shores of Upper Lake with tigers, leopards, bears and crocodiles in natural habitat.",
    distance: "7 km from City Centre",
    image:    "https://tse1.mm.bing.net/th/id/OIP.RgSgeIKuidvwXVCd5FWQWgHaEE?r=0&pid=Api&h=220&P=0",
    alt:      "Van Vihar National Park Bhopal",
    waMsg:    "Hello, I want to book a taxi to Van Vihar National Park Bhopal.",
  },
  {
    name:     "Tribal Museum",
    desc:     "Award-winning museum showcasing the vibrant art, crafts and culture of Madhya Pradesh's tribal communities.",
    distance: "3 km from City Centre",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89M3hKBVscam3zQA33QYY2DpnasZfLmlwSotXplAMcg&s=10",
    alt:      "Tribal Museum Bhopal",
    waMsg:    "Hello, I want to book a taxi to Tribal Museum Bhopal.",
  },
  {
    name:     "Birla Mandir",
    desc:     "A beautiful white marble temple atop a hill offering panoramic views of Bhopal's twin lakes — a must-visit.",
    distance: "4 km from City Centre",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBFPWygb-dh-4pngKX-1XH-KQPggvCIpYLvOPVmVSkA&s=10",
    alt:      "Birla Mandir Bhopal",
    waMsg:    "Hello, I want to book a taxi to Birla Mandir Bhopal.",
  },
  {
    name:     "Taj-ul-Masajid",
    desc:     "One of Asia's largest mosques — a magnificent example of Mughal architecture with massive domes and minarets.",
    distance: "2 km from City Centre",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzKymkZzX68E9e-JNFoIvfYoxKPkK1HVHuTmzOS6PYg&s=10",
    alt:      "Taj-ul-Masajid Bhopal",
    waMsg:    "Hello, I want to book a taxi to Taj-ul-Masajid Bhopal.",
  },
  {
    name:     "Shaukat Mahal",
    desc:     "A unique Indo-Islamic palace blending European and Indian architectural styles in the heart of the old city.",
    distance: "2.5 km from City Centre",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzvbzNsRIlQnkWv0T08OEyGtGUlpBoXQzcARCDY7LLw&s=10",
    alt:      "Shaukat Mahal Bhopal",
    waMsg:    "Hello, I want to book a taxi to Shaukat Mahal Bhopal.",
  },
  {
    name:     "Bhojpur Temple",
    desc:     "An ancient Shiva temple with a massive 2.3-metre Shivlinga — a stunning architectural gem of the Paramara dynasty.",
    distance: "28 km from Bhopal",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz8cs0O3U3hVD_TquK7ZEAyrm9QjHXU4x2mZopv7QZQ&s=10",
    alt:      "Bhojpur Temple Bhopal",
    waMsg:    "Hello, I want to book a taxi to Bhojpur Temple from Bhopal.",
  },
  {
    name:     "Bhimbetka Rock Shelters",
    desc:     "UNESCO World Heritage Site with prehistoric cave paintings over 30,000 years old — a window into early human life.",
    distance: "45 km from Bhopal",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zTuRnY0JQYwVlGuCeoNKD2teVZx2Z-s4vC49L_JjVA&s=10",
    alt:      "Bhimbetka Bhopal",
    waMsg:    "Hello, I want to book a taxi to Bhimbetka from Bhopal.",
  },
  {
    name:     "Sanchi Stupa",
    desc:     "UNESCO site — Emperor Ashoka's 3rd-century BC Buddhist stupa, one of the oldest stone structures in India.",
    distance: "46 km from Bhopal",
    image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBX-LeXjv0rFWfQgehM332SoeW1hTqYQ7lFs8aKPmew&s=10",
    alt:      "Sanchi Stupa Bhopal",
    waMsg:    "Hello, I want to book a taxi to Sanchi Stupa from Bhopal.",
  },
];

/* ============================================================
   SECTION 5 — OUTSTATION ROUTES
   ============================================================ */
const OUTSTATION = [
  {
    from:  "Bhopal", to: "Indore",
    dist:  "195 km",
    desc:  "Bhopal to Indore — the commercial capital of Madhya Pradesh. Popular for business and leisure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DKYSa4rlecRO1pHW_TGdQ2bJojtSj_OavQaHWcpXpA&s=10",
    alt:   "Bhopal to Indore taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Indore. Please share the best fare and availability.",
  },
  {
    from:  "Bhopal", to: "Ujjain",
    dist:  "185 km",
    desc:  "Bhopal to Ujjain — the sacred city of Mahakal Jyotirlinga. Pilgrimage taxi at best rates.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJhIPmSR7_Hl3veqtRaQIpCiv7eDeOxcdVMfUKJgbyg&s=10",
    alt:   "Bhopal to Ujjain taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Ujjain. Please share the best fare and availability.",
  },
  {
    from:  "Bhopal", to: "Omkareshwar",
    dist:  "280 km",
    desc:  "Bhopal to Omkareshwar — island pilgrim city with the sacred Omkareshwar Jyotirlinga temple.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtaS_48mKexxFCamv3bNrm0eZzRTIVWjY9HXDMmouUQ&s=10",
    alt:   "Bhopal to Omkareshwar taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Omkareshwar. Please share the best fare.",
  },
  {
    from:  "Bhopal", to: "Maheshwar",
    dist:  "285 km",
    desc:  "Bhopal to Maheshwar — historic river fort city on the banks of the Narmada, famous for Maheshwari sarees.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsKkowO8L7L3Urhv1bt-oYDS1fO9S2Ve2nB7Wak7F2g&s=10",
    alt:   "Bhopal to Maheshwar taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Maheshwar. Please share the best fare.",
  },
  {
    from:  "Bhopal", to: "Pachmarhi",
    dist:  "205 km",
    desc:  "Bhopal to Pachmarhi — the only hill station in Madhya Pradesh, known for waterfalls and lush forests.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvCjpPsFqtBtRtxlvjsBSZ6kus0K7OjPd2kRRYAe_zQ&s=10",
    alt:   "Bhopal to Pachmarhi taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Pachmarhi. Please share the best fare and availability.",
  },
  {
    from:  "Bhopal", to: "Jabalpur",
    dist:  "330 km",
    desc:  "Bhopal to Jabalpur — home to the spectacular Marble Rocks and Dhuandhar Falls on the Narmada river.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9-HRZ6nJG50IA2l-cPQkH773Pb428UN9TIgpruT2vA&s=10",
    alt:   "Bhopal to Jabalpur taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Jabalpur. Please share the best fare and availability.",
  },
  {
    from:  "Bhopal", to: "Sanchi",
    dist:  "46 km",
    desc:  "Bhopal to Sanchi — UNESCO World Heritage site with the famous ancient Buddhist Stupa.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7ue3sLAS7z1t0b0F7lZjKiZfp9DjuA3JN4Feh3S9TA&s=10",
    alt:   "Bhopal to Sanchi taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Sanchi. Please share the best fare.",
  },
  {
    from:  "Bhopal", to: "Khajuraho",
    dist:  "385 km",
    desc:  "Bhopal to Khajuraho — UNESCO site world-famous for its stunning medieval Hindu and Jain temple carvings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqoz9h_NrLgSYV0WZbSc1lJBDikMSDoeJ_soS1djnSA&s=10",
    alt:   "Bhopal to Khajuraho taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Khajuraho. Please share the best fare and availability.",
  },
  {
    from:  "Bhopal", to: "Sagar",
    dist:  "175 km",
    desc:  "Bhopal to Sagar — a major city in Madhya Pradesh with a scenic lake and historical landmarks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecwm7sGHdaQ6vulpjiUH12SHO-wMeLalk6HFhZiLJAg&s=10",
    alt:   "Bhopal to Sagar taxi",
    waMsg: "Hello, I need a taxi from Bhopal to Sagar. Please share the best fare.",
  },
];

/* ============================================================
   SECTION 6 — POPULAR ROUTES
   ============================================================ */
const ROUTES = [
  { route: "Bhopal → Indore",       type: "Sedan / Innova / SUV",    waMsg: "Hello, I need a taxi from Bhopal to Indore. Please confirm availability." },
  { route: "Bhopal → Ujjain",       type: "Sedan / Innova / SUV",    waMsg: "Hello, I need a taxi from Bhopal to Ujjain. Please confirm availability." },
  { route: "Bhopal → Pachmarhi",    type: "Innova / SUV / Tempo",    waMsg: "Hello, I need a taxi from Bhopal to Pachmarhi. Please confirm availability." },
  { route: "Bhopal → Jabalpur",     type: "Innova / SUV",            waMsg: "Hello, I need a taxi from Bhopal to Jabalpur. Please confirm availability." },
  { route: "Bhopal → Sanchi",       type: "Any Vehicle",             waMsg: "Hello, I need a taxi from Bhopal to Sanchi. Please confirm availability." },
  { route: "Bhopal → Khajuraho",    type: "Innova / Tempo / SUV",    waMsg: "Hello, I need a taxi from Bhopal to Khajuraho. Please confirm availability." },
  { route: "Bhopal → Omkareshwar",  type: "Innova / SUV",            waMsg: "Hello, I need a taxi from Bhopal to Omkareshwar. Please confirm availability." },
  { route: "Bhopal → Maheshwar",    type: "Sedan / Innova",          waMsg: "Hello, I need a taxi from Bhopal to Maheshwar. Please confirm availability." },
  { route: "Bhopal → Airport",      type: "Any Vehicle",             waMsg: "Hello, I need an airport taxi at Raja Bhoj Airport Bhopal. Please confirm availability." },
  { route: "Bhopal → Rani Kamlapati", type: "Any Vehicle",           waMsg: "Hello, I need a taxi at Rani Kamlapati Railway Station Bhopal. Please confirm." },
  { route: "Bhopal → Bhopal Jn.",   type: "Any Vehicle",             waMsg: "Hello, I need a taxi at Bhopal Junction Railway Station. Please confirm." },
  { route: "Bhopal → Sagar",        type: "Sedan / Innova",          waMsg: "Hello, I need a taxi from Bhopal to Sagar. Please confirm availability." },
];

/* ============================================================
   SECTION 7 — REVIEWS DATA
   ============================================================ */
const REVIEWS = [
  {
    name:   "Rahul Kumar",
    init:   "RK",
    trip:   "Bhopal → Ujjain",
    stars:  5,
    text:   "Excellent service! Booked an Innova Crysta for our Ujjain pilgrimage. The driver was very professional, car was spotlessly clean and we reached on time. Highly recommended!",
  },
  {
    name:   "Priya Sharma",
    init:   "PS",
    trip:   "Airport Transfer",
    stars:  5,
    text:   "Best airport taxi in Bhopal! The driver was waiting at arrivals even before I came out. Very affordable pricing and a smooth, comfortable ride to my hotel. 5 stars!",
  },
  {
    name:   "Ajay Mishra",
    init:   "AM",
    trip:   "Bhopal → Pachmarhi",
    stars:  5,
    text:   "Booked a Tempo Traveller for our 12-member family trip to Pachmarhi. The vehicle was spacious and clean, driver was very helpful and patient. Perfect experience!",
  },
  {
    name:   "Sneha Verma",
    init:   "SV",
    trip:   "Rani Kamlapati Pickup",
    stars:  5,
    text:   "Late night train, booked via WhatsApp. Driver arrived at Rani Kamlapati station in 20 minutes. Safe and comfortable ride back home. Great 24×7 service!",
  },
  {
    name:   "Vikram Patel",
    init:   "VP",
    trip:   "Bhopal Darshan Tour",
    stars:  5,
    text:   "The Bhopal Darshan tour was amazing! Our driver knew every spot and gave us great information about each place. AC car, very affordable. Will definitely book again.",
  },
  {
    name:   "Meena Joshi",
    init:   "MJ",
    trip:   "Bhopal → Indore",
    stars:  5,
    text:   "Comfortable Swift Dzire for Bhopal to Indore. The driver was polite, drove carefully and we reached safely. Transparent pricing — exactly what was quoted. No hidden charges.",
  },
];

/* ============================================================
   SECTION 8 — FAQ DATA
   ============================================================ */
const FAQS = [
  {
    q: "Do you provide airport pickup and drop in Bhopal?",
    a: "Yes! We provide 24×7 pickup and drop service at Raja Bhoj Airport, Bhopal. We monitor your flight to ensure on-time arrival. Book via call or WhatsApp.",
  },
  {
    q: "Do you provide railway station pickup in Bhopal?",
    a: "Absolutely. We offer round-the-clock taxi service at Bhopal Junction Railway Station and Rani Kamlapati Railway Station. Just share your train details and we'll be ready.",
  },
  {
    q: "Can I book a taxi through WhatsApp?",
    a: "Yes — WhatsApp booking is our easiest option. Send us your pickup, drop, date and name on +91 90391 21625 and we'll confirm instantly.",
  },
  {
    q: "Do you provide outstation taxis from Bhopal?",
    a: "Yes, we provide outstation taxis from Bhopal to Indore, Ujjain, Pachmarhi, Jabalpur, Omkareshwar, Maheshwar, Sanchi, Khajuraho, Sagar and other destinations.",
  },
  {
    q: "Do you provide one-way taxi service from Bhopal?",
    a: "Yes, we offer one-way taxi service. You pay only for the distance you travel — no return charges. Great for single-trip outstation travel.",
  },
  {
    q: "Is Innova Crysta available for outstation trips?",
    a: "Yes! Innova Crysta is available for outstation trips at ₹18/km. It is our most popular vehicle for families and long-distance journeys — spacious, comfortable and reliable.",
  },
  {
    q: "Do you provide Tempo Traveller in Bhopal?",
    a: "Yes, we have AC Tempo Travellers for up to 12+1 passengers at ₹22/km. Ideal for group trips, family tours, school picnics and pilgrimages.",
  },
  {
    q: "How can I get the fare for my trip?",
    a: "Contact us on +91 90391 21625 or WhatsApp with your pickup, drop and vehicle preference. We'll give you the exact fare with no hidden charges.",
  },
  {
    q: "Are taxis available 24 hours a day, 7 days a week?",
    a: "Yes. Baba Mahakal Taxi Service operates 24×7, including weekends and public holidays. You can book at any time via call or WhatsApp.",
  },
  {
    q: "Can I book Bhopal city sightseeing with your taxi?",
    a: "Yes! Our Bhopal Darshan Tour covers Upper Lake, Van Vihar, Taj-ul-Masajid, Birla Mandir, Tribal Museum and more. Ask us for a custom itinerary.",
  },
];

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - Plain text message
 */
function openWhatsApp(message) {
  const encoded = encodeURIComponent(message || CONFIG.DEFAULT_WA_MSG);
  window.open(`${CONFIG.WHATSAPP_BASE}?text=${encoded}`, "_blank", "noopener,noreferrer");
}

/**
 * Smooth scroll to an element by selector
 * @param {string} selector - CSS selector
 */
function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 74;
  const top = el.getBoundingClientRect().top + window.scrollY - offset - 20;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Select a vehicle in the booking form and scroll to it
 * @param {string} vehicleName - Name to select in the dropdown
 */
function selectVehicleAndScroll(vehicleName) {
  const select = document.getElementById("f-vehicle");
  if (select && vehicleName) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === vehicleName) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  scrollToSection("#booking");
}

/* ============================================================
   RENDER: VEHICLE SELECT OPTIONS
   ============================================================ */
function buildVehicleSelect() {
  const select = document.getElementById("f-vehicle");
  if (!select) return;
  VEHICLES.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.name;
    opt.textContent = `${v.name} — ₹${v.price}/km (${v.passengers} Passengers)`;
    select.appendChild(opt);
  });
}

/* ============================================================
   RENDER: SERVICES GRID
   ============================================================ */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="srv-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="srv-icon"><i class="${s.icon}" aria-hidden="true"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#booking" onclick="scrollToSection('#booking');return false;" aria-label="Book ${s.title}">
        Book Now <i class="fas fa-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  `).join("");
}

/* ============================================================
   RENDER: FLEET GRID
   ============================================================ */
function renderFleet() {
  const grid = document.getElementById("fleetGrid");
  if (!grid) return;
  grid.innerHTML = VEHICLES.map((v, i) => `
    <div class="vehicle-card" data-category="${v.category}" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="vc-img-wrap">
        <img src="${v.image}" alt="${v.alt}" loading="lazy" />
        <div class="vc-price-badge">₹${v.price}/km</div>
        <div class="vc-cat-badge">${v.label}</div>
      </div>
      <div class="vc-body">
        <div class="vc-name">${v.name}</div>
        <div class="vc-specs">
          <span class="vc-spec"><i class="fas fa-users" aria-hidden="true"></i> ${v.passengers} Passengers</span>
          <span class="vc-spec"><i class="fas fa-suitcase" aria-hidden="true"></i> ${v.luggage}</span>
          ${v.ac ? `<span class="vc-spec"><i class="fas fa-snowflake" aria-hidden="true"></i> AC</span>` : ""}
        </div>
        <div class="vc-comfort">${v.comfort}</div>
        <div class="vc-actions">
          <button class="vc-book" onclick="selectVehicleAndScroll('${v.name}')" aria-label="Book ${v.name}">
            <i class="fas fa-taxi" aria-hidden="true"></i> Book Now
          </button>
          <button class="vc-wa" onclick="openWhatsApp('Hello Baba Mahakal Taxi Service, I want to book a ${v.name} (₹${v.price}/km). Please confirm availability.')" aria-label="WhatsApp for ${v.name}">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ============================================================
   FLEET FILTER LOGIC
   ============================================================ */
function initFleetFilter() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll(".vehicle-card");
      cards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.classList.remove("hidden");
          card.style.animation = "none";
          requestAnimationFrame(() => {
            card.style.animation = "";
          });
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

/* ============================================================
   RENDER: TOURS SWIPER
   ============================================================ */
function renderTours() {
  const wrapper = document.getElementById("toursSwiper");
  if (!wrapper) return;
  wrapper.innerHTML = TOURS.map(t => `
    <div class="swiper-slide">
      <div class="tour-card">
        <div class="tc-img">
          <img src="${t.image}" alt="${t.alt}" loading="lazy" />
          <div class="tc-dist"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${t.distance}</div>
        </div>
        <div class="tc-body">
          <h3>${t.name}</h3>
          <p>${t.desc}</p>
          <button class="tc-btn" onclick="openWhatsApp('${t.waMsg}')" aria-label="Book taxi to ${t.name}">
            <i class="fab fa-whatsapp" aria-hidden="true"></i> Book Taxi Here
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ============================================================
   RENDER: OUTSTATION GRID
   ============================================================ */
function renderOutstation() {
  const grid = document.getElementById("outstationGrid");
  if (!grid) return;
  grid.innerHTML = OUTSTATION.map((o, i) => `
    <div class="out-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="out-img">
        <img src="${o.image}" alt="${o.alt}" loading="lazy" />
        <div class="out-overlay"></div>
      </div>
      <div class="out-body">
        <div class="out-route">
          <i class="fas fa-location-dot" aria-hidden="true"></i>
          ${o.from} → ${o.to}
        </div>
        <p class="out-desc">${o.desc}</p>
        <div class="out-tags">
          <span class="active">One Way</span>
          <span>Round Trip</span>
        </div>
        <div class="out-fare">
          <i class="fas fa-tag" aria-hidden="true"></i> Get Best Fare — Contact Us
        </div>
        <div class="out-btns">
          <button class="btn btn-gold btn-sm" onclick="selectVehicleAndScroll('')" aria-label="Book ${o.from} to ${o.to} taxi">
            Book Now
          </button>
          <button class="btn btn-wa-sm btn-sm" onclick="openWhatsApp('${o.waMsg}')" aria-label="WhatsApp for ${o.from} to ${o.to}">
            <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ============================================================
   RENDER: POPULAR ROUTES
   ============================================================ */
function renderRoutes() {
  const grid = document.getElementById("routesGrid");
  if (!grid) return;
  grid.innerHTML = ROUTES.map((r, i) => `
    <div class="route-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 60}">
      <div class="route-icon"><i class="fas fa-route" aria-hidden="true"></i></div>
      <div class="route-info">
        <div class="route-title">${r.route}</div>
        <div class="route-type">${r.type}</div>
      </div>
      <button class="route-book" onclick="openWhatsApp('${r.waMsg}')" aria-label="Book ${r.route}">
        Book
      </button>
    </div>
  `).join("");
}

/* ============================================================
   RENDER: REVIEWS SWIPER
   ============================================================ */
function renderReviews() {
  const wrapper = document.getElementById("reviewsSwiper");
  if (!wrapper) return;
  wrapper.innerHTML = REVIEWS.map(r => `
    <div class="swiper-slide">
      <div class="review-card">
        <div class="rv-stars">
          ${"<i class='fas fa-star' aria-hidden='true'></i>".repeat(r.stars)}
        </div>
        <p class="rv-text">${r.text}</p>
        <div class="rv-author">
          <div class="rv-avatar" aria-hidden="true">${r.init}</div>
          <div>
            <div class="rv-name">${r.name}</div>
            <div class="rv-trip"><i class="fas fa-route" aria-hidden="true"></i> ${r.trip}</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ============================================================
   RENDER: FAQ ACCORDION
   ============================================================ */
function renderFAQ() {
  const list = document.getElementById("faqList");
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
        ${f.q}
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
        ${f.a}
      </div>
    </div>
  `).join("");

  // Accordion interaction
  list.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const isOpen = btn.classList.contains("open");
      // Close all
      list.querySelectorAll(".faq-q").forEach(b => {
        b.classList.remove("open");
        b.setAttribute("aria-expanded", "false");
        b.nextElementSibling.classList.remove("open");
      });
      // Open clicked if it was closed
      if (!isOpen) {
        btn.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        btn.nextElementSibling.classList.add("open");
      }
    });
  });
}

/* ============================================================
   BOOKING FORM — VALIDATION & WHATSAPP SUBMISSION
   ============================================================ */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById("f-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm()) return;

    const name        = document.getElementById("f-name").value.trim();
    const phone       = document.getElementById("f-phone").value.trim();
    const pickup      = document.getElementById("f-pickup").value.trim();
    const drop        = document.getElementById("f-drop").value.trim();
    const date        = document.getElementById("f-date").value;
    const time        = document.getElementById("f-time").value;
    const passengers  = document.getElementById("f-passengers").value;
    const vehicle     = document.getElementById("f-vehicle").value;
    const note        = document.getElementById("f-note").value.trim();

    // Format date nicely
    let dateFormatted = date;
    if (date) {
      const d = new Date(date + "T00:00:00");
      dateFormatted = d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    }

    // Format time nicely
    let timeFormatted = time || "Not specified";
    if (time) {
      const [h, m] = time.split(":");
      const hour = parseInt(h);
      const ampm = hour >= 12 ? "PM" : "AM";
      const h12  = hour % 12 || 12;
      timeFormatted = `${h12}:${m} ${ampm}`;
    }

    const message = `Hello ${CONFIG.BUSINESS_NAME},

I want to book a taxi. Here are my details:

👤 Name: ${name}
📞 Phone: ${phone}
📍 Pickup: ${pickup}
📍 Drop: ${drop}
📅 Date: ${dateFormatted}
⏰ Time: ${timeFormatted}
🚗 Vehicle: ${vehicle || "Not selected"}
👥 Passengers: ${passengers}
📝 Requirement: ${note || "None"}

Please confirm availability and fare. Thank you!`;

    openWhatsApp(message);

    // Show brief success indicator on the button
    const btn = document.getElementById("formSubmitBtn");
    const original = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check"></i> Sending to WhatsApp…`;
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
    }, 3000);
  });
}

function validateForm() {
  let valid = true;

  const fields = [
    { id: "f-name",   errId: "err-name",   label: "Name",           type: "text" },
    { id: "f-phone",  errId: "err-phone",  label: "Mobile number",  type: "phone" },
    { id: "f-pickup", errId: "err-pickup", label: "Pickup location", type: "text" },
    { id: "f-drop",   errId: "err-drop",   label: "Drop location",   type: "text" },
    { id: "f-date",   errId: "err-date",   label: "Travel date",     type: "date" },
  ];

  fields.forEach(f => {
    const input   = document.getElementById(f.id);
    const err     = document.getElementById(f.errId);
    const group   = input ? input.closest(".form-group") : null;
    const val     = input ? input.value.trim() : "";

    // Reset
    if (err)   err.textContent = "";
    if (group) group.classList.remove("has-error");

    if (!val) {
      if (err)   err.textContent = `${f.label} is required.`;
      if (group) group.classList.add("has-error");
      if (valid) input && input.focus();
      valid = false;
    } else if (f.type === "phone") {
      // Indian mobile: 10 digits, optionally starting with +91 or 0
      const cleaned = val.replace(/[\s\-\+]/g, "");
      const digits  = cleaned.replace(/^(91|0)/, "");
      if (!/^[6-9]\d{9}$/.test(digits)) {
        if (err)   err.textContent = "Enter a valid 10-digit Indian mobile number.";
        if (group) group.classList.add("has-error");
        if (valid) input && input.focus();
        valid = false;
      }
    }
  });

  return valid;
}

/* ============================================================
   NAVBAR — SCROLL SHRINK & ACTIVE LINK
   ============================================================ */
function initNavbar() {
  const navbar  = document.getElementById("navbar");
  const links   = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    // Shrink navbar
    if (window.scrollY > 60) {
      navbar && navbar.classList.add("scrolled");
    } else {
      navbar && navbar.classList.remove("scrolled");
    }

    // Back to top button
    const backTop = document.getElementById("backTop");
    if (backTop) {
      if (window.scrollY > 400) backTop.classList.add("visible");
      else backTop.classList.remove("visible");
    }

    // Active link highlighting
    let current = "";
    const offset = 100;
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - offset) {
        current = sec.id;
      }
    });
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    // Mobile bottom nav active
    const mbnItems = document.querySelectorAll(".mbn-item[href]");
    mbnItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("navMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  // Close on link click
  menu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // Close on outside click
  document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
function initBackTop() {
  const btn = document.getElementById("backTop");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   PAGE LOADER
   ============================================================ */
function initLoader() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;
  // Hide after page loads + animation completes
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1800);
  });
  // Fallback: always hide after 3s
  setTimeout(() => {
    loader && loader.classList.add("hidden");
  }, 3000);
}

/* ============================================================
   COUNTER ANIMATION (about stats)
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll(".astat-num[data-target]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      let start    = 0;
      const step   = Math.ceil(target / 50);
      const timer  = setInterval(() => {
        start += step;
        if (start >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = start + suffix;
        }
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ============================================================
   SWIPER INITIALIZATION
   ============================================================ */
function initSwipers() {
  // Tours swiper
  new Swiper(".toursSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: ".tours-pagination", clickable: true },
    navigation: { nextEl: ".tours-next", prevEl: ".tours-prev" },
    breakpoints: {
      480:  { slidesPerView: 1.5 },
      640:  { slidesPerView: 2 },
      900:  { slidesPerView: 2.5 },
      1100: { slidesPerView: 3 },
    },
  });

  // Reviews swiper
  new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: ".reviews-pagination", clickable: true },
    breakpoints: {
      640:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

/* ============================================================
   AOS ANIMATION INIT
   ============================================================ */
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }
}

/* ============================================================
   KEYBOARD NAVIGATION (focus-visible)
   ============================================================ */
function initKeyboardNav() {
  document.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-nav");
    }
  });
  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-nav");
  });
}

/* ============================================================
   MOBILE BOTTOM NAV — active tracking
   ============================================================ */
function initMobileBottomNav() {
  const items = document.querySelectorAll(".mbn-item[href^='#']");
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

/* ============================================================
   SMOOTH SCROLL for all internal anchor links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 74;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      // Use native browser scrollTo (not overridden)
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
}

/* ============================================================
   LAZY IMAGE FALLBACK
   ============================================================ */
function initImageFallbacks() {
  document.querySelectorAll("img[loading='lazy']").forEach(img => {
    img.addEventListener("error", function () {
      this.src = `https://placehold.co/500x300/111827/F5B800?text=${encodeURIComponent(this.alt || "Image")}`;
      this.alt = this.alt + " (placeholder)";
    });
  });
}

/* ============================================================
   BOOT — Run everything when DOM is ready
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Loader
  initLoader();

  // 2. Build select options from data
  buildVehicleSelect();

  // 3. Render all dynamic sections
  renderServices();
  renderFleet();
  renderTours();
  renderOutstation();
  renderRoutes();
  renderReviews();
  renderFAQ();

  // 4. Init interactions
  initFleetFilter();
  initBookingForm();
  initNavbar();
  initHamburger();
  initBackTop();
  initCounters();
  initKeyboardNav();
  initMobileBottomNav();
  initSmoothScroll();
  initImageFallbacks();

  // 5. Swipers (after DOM renders)
  initSwipers();

  // 6. AOS animations (after DOM renders)
  initAOS();
});

/* ============================================================
   EXPOSE openWhatsApp globally (used in HTML onclick attributes)
   ============================================================ */
window.openWhatsApp = openWhatsApp;
window.scrollToSection = scrollToSection;
window.selectVehicleAndScroll  = selectVehicleAndScroll;
// NOTE: window.scrollTo is intentionally NOT overridden —
// doing so would break all anchor link smooth scrolling.