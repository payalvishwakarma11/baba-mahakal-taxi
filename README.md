# Baba Mahakal Taxi Service — Website

**Premium taxi booking website for Bhopal, Madhya Pradesh**

---

## 📁 Project Structure

```
baba-mahakal-taxi/
├── index.html          ← Main website file (open this in browser)
├── css/
│   └── style.css       ← All styles (dark luxury theme)
├── js/
│   └── script.js       ← All data, logic, animations
├── assets/
│   └── images/
│       ├── cars/       ← Replace car images here
│       ├── destinations/ ← Replace tour/destination images here
│       ├── hero/       ← Replace hero background here
│       └── logo/       ← Add your logo here
└── README.md
```

---

## 🚀 How to Use

1. Open `index.html` in any web browser — the website works immediately
2. No server required, no build step, no npm
3. To host: upload all files to any web hosting (Hostinger, cPanel, Netlify, etc.)

---

## 📞 How to Change Phone / WhatsApp Number

Open `js/script.js` and update **lines 10–18** (the CONFIG block):

```js
const CONFIG = {
  BUSINESS_NAME: "Baba Mahakal Taxi Service",
  PHONE:         "919826498328",        // ← Change this (with country code, no +)
  PHONE_DISPLAY: "+91 98264 98328",     // ← Change this (display version)
  EMAIL:         "booking@babamahakaltaxi.in", // ← Change this
  ...
};
```

> Every call button and WhatsApp link on the site will update automatically.

---

## 💰 How to Change Vehicle Prices

Open `js/script.js` and find the **VEHICLES array** (around line 30).

Change the `price` value for any vehicle:

```js
{
  name:  "WagonR",
  price: 10,        // ← Change price per km here
  ...
},
{
  name:  "Innova Crysta",
  price: 18,        // ← Change price per km here
  ...
},
```

> The price badge on each vehicle card updates automatically.

---

## 🚗 How to Change Vehicle Names / Passengers / Luggage

Same VEHICLES array in `js/script.js`:

```js
{
  name:       "Swift Dzire",      // ← Vehicle name shown on card
  passengers: "4+1",             // ← Shown in specs
  luggage:    "2–3 Bags",        // ← Shown in specs
  comfort:    "Comfortable & Economical",  // ← Tagline on card
  ...
},
```

---

## 🖼️ How to Replace Car Images

**Option A — Use online images (current setup):**
The website already uses high-quality Unsplash images. No action needed.

**Option B — Use your own photos:**

1. Add your car photos to `assets/images/cars/`
   - Recommended names: `wagonr.jpg`, `swift-dzire.jpg`, `innova-crysta.jpg`, etc.
   - Recommended size: 500×300px minimum, JPG format

2. In `js/script.js`, update the `image` field for each vehicle:

```js
{
  name:  "WagonR",
  image: "assets/images/cars/wagonr.jpg",   // ← Change to local path
  ...
},
```

---

## 🗺️ How to Replace Tour / Destination Images

Same process — update the `image` field in the **TOURS array** in `js/script.js`.

Add your photos to `assets/images/destinations/`.

---

## 🗺️ How to Replace the Google Map

In `index.html`, find the `<iframe>` inside the contact section (search for `maps/embed`).

Replace the `src` URL with your actual Google Maps embed URL:

1. Go to Google Maps → find your business location
2. Click **Share** → **Embed a map** → Copy the iframe src URL
3. Paste it as the `src` attribute

---

## 🌐 How to Add Social Media Links

In `index.html`, search for:
```html
<!-- Replace # with your real social profile URLs -->
```

Replace each `href="#"` with your actual profile URLs:

```html
<a href="https://www.facebook.com/yourpage" ...>
<a href="https://www.instagram.com/yourprofile" ...>
<a href="https://www.youtube.com/@yourchannel" ...>
```

---

## ✏️ How to Add / Edit Tour Destinations

In `js/script.js`, find the **TOURS array** and add or edit entries:

```js
{
  name:     "Your Place Name",
  desc:     "Short description of the place.",
  distance: "XX km from City Centre",
  image:    "https://... or assets/images/destinations/place.jpg",
  alt:      "Place name Bhopal",
  waMsg:    "Hello, I want to book a taxi to Your Place from Bhopal.",
},
```

---

## ✏️ How to Add / Edit Outstation Routes

In `js/script.js`, find the **OUTSTATION array** and add or edit:

```js
{
  from:  "Bhopal", to: "Your City",
  dist:  "XXX km",
  desc:  "Short route description.",
  image: "https://... or assets/images/destinations/city.jpg",
  alt:   "Bhopal to Your City taxi",
  waMsg: "Hello, I need a taxi from Bhopal to Your City. Please confirm.",
},
```

---

## 🌐 Deployment Instructions

### Option 1 — Netlify (Free, fastest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `baba-mahakal-taxi` folder
3. Your site is live instantly with a free URL

### Option 2 — cPanel Hosting (Hostinger, GoDaddy, etc.)
1. Log in to cPanel → File Manager
2. Open `public_html`
3. Upload all files from `baba-mahakal-taxi/` folder
4. Your site is live at your domain

### Option 3 — GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages → Select `main` branch
4. Site is live at `yourusername.github.io/repo-name`

---

## 🔍 SEO Notes

The website already includes:
- `<title>` and `<meta description>` optimised for Bhopal taxi keywords
- JSON-LD structured data (LocalBusiness schema)
- Semantic heading structure (H1, H2, H3)
- SEO keyword footer paragraph
- `alt` text on all images
- Mobile-first responsive design

To improve SEO further:
- Replace the canonical URL in `index.html` with your actual domain
- Add your actual Google My Business location to the map
- Add your real customer reviews to the REVIEWS array in `js/script.js`

---

## 📱 Features Included

- ✅ Premium dark luxury design
- ✅ Fully responsive (320px to 1920px)
- ✅ Sticky scroll-aware navbar
- ✅ Mobile hamburger menu
- ✅ Mobile bottom navigation bar
- ✅ Floating WhatsApp + Call buttons
- ✅ Page loader animation
- ✅ Hero section with trust badges
- ✅ WhatsApp booking form with validation
- ✅ Dynamic WhatsApp message builder
- ✅ Services grid (12 services)
- ✅ Vehicle fleet with filter (10 vehicles)
- ✅ Vehicle cards with Book + WhatsApp buttons
- ✅ How It Works section
- ✅ Airport & Railway transfer section
- ✅ Bhopal Tour Packages (9 places) — Swiper slider
- ✅ Bhopal Darshan special package
- ✅ Outstation trips (9 destinations)
- ✅ Popular routes grid (12 routes)
- ✅ Customer reviews slider
- ✅ FAQ accordion
- ✅ Contact section with map
- ✅ Counter animations
- ✅ AOS scroll animations
- ✅ SEO structured data
- ✅ Accessible (ARIA labels, keyboard nav)
- ✅ Image lazy loading
- ✅ Image error fallbacks
- ✅ Back to top button
- ✅ Smooth scroll
- ✅ Data-driven architecture (easy to edit)

---

## 📝 Placeholder Notes

These items need real information before going live:

| Item | Location | Note |
|------|----------|-------|
| Google Map | `index.html` contact section | Replace iframe src with real business location |
| Social media links | `index.html` footer & contact | Replace `#` with real profile URLs |
| Customer reviews | `js/script.js` REVIEWS array | Replace with real customer feedback |
| Car photos | `js/script.js` VEHICLES array | Replace Unsplash URLs with real photos |
| Logo | None yet | Add logo to `assets/images/logo/` and insert in navbar |

---

© 2026 Baba Mahakal Taxi Service, Bhopal, Madhya Pradesh
