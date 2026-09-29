# Mission: Send the Doctor to Georgia ✈️🇬🇪

A complete, polished, personal interactive packing website for a 4th-year medical student flying to Georgia. 
Built as a custom mini web experience with vanilla web technologies.

## Features
- Fully responsive, mobile-first design
- Custom interactive checklist
- Live dynamic countdown timer
- Sticky packing progress bar
- Confetti completion animation
- Multi-step verification modals
- Hidden surprise element
- Local storage saving mechanism
- Email checklist generation using `mailto:`
- Scroll-triggered animations and glassmorphism effects

## Tech Stack
- HTML5
- CSS3 (Custom animations & utilities)
- Vanilla JavaScript (DOM manipulation, state management, LocalStorage)
- Tailwind CSS (via CDN)
- canvas-confetti (via CDN)

## Project Structure
```
/
├── index.html
├── css/
│ └── style.css
├── js/
│ └── app.js
└── README.md
```

## How to Run
This is a static website. You do not need any build tools or local servers.
Simply double-click `index.html` to open it in your browser, or serve it using any basic static file server (like VS Code Live Server).

## Customization
All personal data is located at the top of `js/app.js` in the `SITE_CONFIG` object:

```javascript
const SITE_CONFIG = { 
    girlfriendName: "Doctor", 
    boyfriendName: "Ashfaque", 
    destination: "Georgia", 
    flightDate: "2026-10-04T00:00:00", 
    medicalYear: "4th Year MBBS", 
    email: "ashfaque3392@gmail.com", 
    personalMessage: "One last thing... don't forget the person who made this entire checklist for you ❤️" 
};
```
Change these values to instantly update the website's copy, countdown, and email behavior.
