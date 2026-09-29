// Configuration
const SITE_CONFIG = { 
    girlfriendName: "Doctor", 
    boyfriendName: "Ashfaque", 
    destination: "Georgia", 
    flightDate: "2026-10-04T00:00:00", 
    medicalYear: "4th Year MBBS", 
    email: "ashfaque3392@gmail.com", 
    personalMessage: "One last thing... don't forget the person who made this entire checklist for you ❤️" 
};

// Checklist Data Structure
const checklistSections = [
    { 
        id: "winter", 
        title: "GEORGIA IS NOT KERALA.", 
        subtitle: "Please respect the cold.",
        emoji: "🧥", 
        description: "Future doctor, surviving 4th year is difficult enough. Don't add hypothermia to the syllabus.", 
        items: [ 
            { id: "winter-jacket", label: "Winter jacket" }, 
            { id: "hoodies", label: "Hoodies" },
            { id: "sweaters", label: "Sweaters" },
            { id: "thermal", label: "Thermal innerwear" },
            { id: "warm-leggings", label: "Warm leggings" },
            { id: "jeans", label: "Jeans" },
            { id: "socks", label: "Socks" },
            { id: "gloves", label: "Gloves" },
            { id: "scarf", label: "Scarf" },
            { id: "beanie", label: "Beanie / woollen cap" },
            { id: "warm-nightwear", label: "Warm nightwear" },
            { id: "waterproof-shoes", label: "Waterproof shoes" },
            { id: "walking-shoes", label: "Comfortable walking shoes" },
            { id: "slippers", label: "Slippers" },
            { id: "umbrella", label: "Umbrella" },
            { id: "lip-balm", label: "Lip balm" },
            { id: "moisturizer", label: "Moisturizer" },
            { id: "sunscreen", label: "Sunscreen" }
        ],
        specialCard: {
            type: 'warning',
            title: "⚠️ WARNING",
            text: "'I'm cold' is not an acceptable excuse after forgetting your jacket."
        }
    },
    {
        id: "girl-things",
        title: "THINGS THAT SOMEHOW OCCUPY 40% OF THE LUGGAGE",
        subtitle: "",
        emoji: "👗",
        description: "",
        items: [
            { id: "dresses", label: "Dresses" },
            { id: "tops", label: "Tops" },
            { id: "t-shirts", label: "T-shirts" },
            { id: "jeans-2", label: "Jeans" },
            { id: "innerwear", label: "Innerwear" },
            { id: "sleepwear", label: "Sleepwear" },
            { id: "workout-clothes", label: "Workout clothes" },
            { id: "hair-acc", label: "Hair accessories" },
            { id: "hair-ties", label: "Hair ties" },
            { id: "hair-clips", label: "Hair clips" },
            { id: "makeup", label: "Makeup" },
            { id: "skincare", label: "Skincare" },
            { id: "perfume", label: "Perfume" },
            { id: "sanitary", label: "Sanitary products" },
            { id: "mirror", label: "Small mirror" },
            { id: "nail-care", label: "Nail-care items" },
            { id: "personal-care", label: "Personal-care products" }
        ],
        specialCard: {
            type: 'funny',
            title: "Yes, you need all of it.",
            text: "No, the suitcase does not agree.",
            illustration: "suitcase"
        }
    },
    {
        id: "food",
        title: "GEORGIA HAS FOOD...",
        subtitle: "...BUT DOES GEORGIA HAVE AMMA'S FOOD?",
        emoji: "🍜",
        description: "",
        items: [
            { id: "pickles", label: "Pickles" },
            { id: "homemade-snacks", label: "Homemade snacks" },
            { id: "biscuits", label: "Biscuits" },
            { id: "chips", label: "Chips" },
            { id: "chocolates", label: "Chocolates" },
            { id: "instant-noodles", label: "Instant noodles" },
            { id: "tea", label: "Tea" },
            { id: "coffee", label: "Coffee" },
            { id: "masala", label: "Favourite masala/spices" },
            { id: "fav-snacks", label: "Favourite snacks" },
            { id: "dry-food", label: "Travel-friendly dry food" },
            { id: "emergency-food", label: "Emergency food" }
        ],
        specialCard: {
            type: 'interactive-food',
            title: "🚨 EMERGENCY FOOD BOX"
        }
    },
    {
        id: "medical",
        title: "CONGRATULATIONS.",
        subtitle: "SOMEHOW YOU SURVIVED 3 YEARS.",
        emoji: "🩺",
        description: "Badge: 4TH YEAR UNLOCKED 🔓",
        items: [
            { id: "stethoscope", label: "Stethoscope" },
            { id: "white-coat", label: "White coat" },
            { id: "scrubs", label: "Scrubs / medical clothes" },
            { id: "med-shoes", label: "Comfortable medical shoes" },
            { id: "penlight", label: "Penlight" },
            { id: "pens", label: "Pens" },
            { id: "notebooks", label: "Notebooks" },
            { id: "study-materials", label: "Study materials" },
            { id: "laptop-study", label: "Laptop" },
            { id: "tablet", label: "Tablet" },
            { id: "backpack", label: "Backpack" },
            { id: "id-cards", label: "ID cards" },
            { id: "chargers", label: "Chargers" },
            { id: "usb-cables", label: "USB cables" },
            { id: "power-bank", label: "Power bank" },
            { id: "earphones", label: "Earphones" }
        ],
        specialCard: {
            type: 'meter',
            title: "4TH YEAR DIFFICULTY",
            value: "90%",
            subtext: "Why did I choose medicine?"
        }
    },
    {
        id: "personal-health",
        title: "FUTURE DOCTOR'S PERSONAL KIT",
        subtitle: "",
        emoji: "💊",
        description: "Keep essential personal medicines and important documents accessible during travel.",
        items: [
            { id: "reg-meds", label: "Regular personal medicines" },
            { id: "prescription", label: "Prescription copies" },
            { id: "first-aid", label: "First-aid basics" },
            { id: "thermometer", label: "Thermometer" },
            { id: "health-items", label: "Personal health items" },
            { id: "med-docs", label: "Important medical documents" },
            { id: "emerg-contacts-med", label: "Emergency contacts" }
        ]
    },
    {
        id: "electronics",
        title: "BECAUSE APPARENTLY MEDICAL STUDENTS CANNOT SURVIVE WITHOUT WI-FI.",
        subtitle: "",
        emoji: "📱",
        description: "",
        items: [
            { id: "phone", label: "Phone" },
            { id: "laptop-2", label: "Laptop" },
            { id: "tablet-2", label: "Tablet" },
            { id: "phone-charger", label: "Phone charger" },
            { id: "laptop-charger", label: "Laptop charger" },
            { id: "power-bank-2", label: "Power bank" },
            { id: "headphones", label: "Earbuds / headphones" },
            { id: "usb-cables-2", label: "USB cables" },
            { id: "extension", label: "Extension board" },
            { id: "adapter", label: "Travel adapter" },
            { id: "hdd", label: "Hard drive / USB drive" },
            { id: "sim", label: "SIM / eSIM setup" }
        ],
        specialCard: {
            type: 'battery',
            title: "Battery: 2%",
            text: "Her: WHERE IS MY CHARGER?! 😭"
        }
    },
    {
        id: "documents",
        title: "DOCUMENTS.",
        subtitle: "DON'T EVEN THINK ABOUT FORGETTING THESE.",
        emoji: "📄",
        description: "",
        items: [
            { id: "passport", label: "Passport" },
            { id: "visa", label: "Visa / residence documents" },
            { id: "ticket", label: "Flight ticket" },
            { id: "uni-id", label: "University ID" },
            { id: "student-docs", label: "Student documents" },
            { id: "accom", label: "Accommodation details" },
            { id: "insurance", label: "Insurance documents" },
            { id: "academic-docs", label: "Academic documents" },
            { id: "photos", label: "Passport-size photos" },
            { id: "emerg-contacts-doc", label: "Emergency contacts" },
            { id: "digital-copies", label: "Digital copies of important documents" }
        ],
        specialCard: {
            type: 'interactive-passport',
            title: "PASSPORT?"
        }
    },
    {
        id: "money",
        title: "MONEY, CARDS & TRAVEL STUFF",
        subtitle: "",
        emoji: "💳",
        description: "Keep backup copies of important travel information.",
        items: [
            { id: "cash", label: "Georgian currency / travel cash" },
            { id: "card", label: "International debit/credit card" },
            { id: "backup-card", label: "Backup card" },
            { id: "wallet", label: "Wallet" },
            { id: "emerg-cash", label: "Emergency cash" },
            { id: "banking", label: "Banking apps" },
            { id: "travel-ins", label: "Travel insurance" },
            { id: "transport", label: "Airport transport plan" },
            { id: "address", label: "Accommodation address saved offline" },
            { id: "contacts", label: "Important travel contacts" }
        ]
    },
    {
        id: "suitcases",
        title: "SUITCASE ORGANIZER 🧳",
        subtitle: "Always check your airline's current baggage rules before packing.",
        emoji: "🧳",
        description: "",
        items: [],
        specialCard: {
            type: 'suitcases'
        }
    },
    {
        id: "heart",
        title: "OKAY... ENOUGH PRACTICAL STUFF.",
        subtitle: "",
        emoji: "❤️",
        description: "",
        items: [
            { id: "take-care", label: "Take care of yourself" },
            { id: "eat", label: "Eat properly" },
            { id: "sleep", label: "Sleep sometimes" },
            { id: "skip-meals", label: "Don't skip meals" },
            { id: "stay-warm", label: "Stay warm" },
            { id: "call-home", label: "Call home" },
            { id: "dont-stress", label: "Don't stress too much" },
            { id: "enjoy", label: "Enjoy 4th year" },
            { id: "photos", label: "Take lots of photos" },
            { id: "memories", label: "Make good memories" },
            { id: "safe", label: "Stay safe" },
            { id: "remember-love", label: "Remember the people who love you" }
        ],
        specialCard: {
            type: 'romantic',
            text: "And don't forget the person who made this unnecessarily complicated checklist for you. ❤️"
        }
    }
];

// App State
let appState = {
    checkedItems: {},
    totalItems: 0,
    completedItems: 0,
    isComplete: false
};

// DOM Elements
const els = {
    container: document.getElementById('checklist-container'),
    stickyProgress: document.getElementById('sticky-progress'),
    stickyText: document.getElementById('sticky-progress-text'),
    stickyBar: document.getElementById('sticky-progress-bar-fill'),
    stickyPct: document.getElementById('sticky-progress-pct'),
    
    finalTotal: document.getElementById('final-total'),
    finalCompleted: document.getElementById('final-completed'),
    finalRemaining: document.getElementById('final-remaining'),
    finalPct: document.getElementById('final-pct'),
    finalCircleFill: document.getElementById('final-circle-fill'),
    finalCircleText: document.getElementById('final-circle-text'),
    
    toast: document.getElementById('toast'),
    toastMsg: document.getElementById('toast-msg'),
    
    modals: {
        passport: document.getElementById('passport-modal'),
        food: document.getElementById('food-modal'),
        reset: document.getElementById('reset-modal'),
        verify: document.getElementById('verify-modal'),
        secret: document.getElementById('secret-modal')
    }
};

// Initialization
function initializeApp() {
    // Set config values
    document.getElementById('hero-destination').textContent = SITE_CONFIG.destination;
    document.getElementById('hero-date').textContent = new Date(SITE_CONFIG.flightDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('hero-year').textContent = SITE_CONFIG.medicalYear;
    document.getElementById('cd-name').textContent = SITE_CONFIG.girlfriendName;
    document.getElementById('secret-message').textContent = SITE_CONFIG.personalMessage;

    // Calculate total items
    appState.totalItems = checklistSections.reduce((total, section) => total + section.items.length, 0);

    loadProgress();
    renderChecklist();
    initializeCountdown();
    setupEventListeners();
    setupScrollAnimations();
    
    // Check if showing toast is needed
    if (Object.keys(appState.checkedItems).length > 0) {
        showToast("Your packing progress is saved locally.");
    }
    
    updateProgressUI();
}

// Render Checklist
function renderChecklist() {
    els.container.innerHTML = '';
    
    checklistSections.forEach((section, index) => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'section-enter';
        sectionEl.id = `section-${section.id}`;
        
        let headerHtml = `
            <div class="mb-8">
                <div class="flex items-center gap-4 mb-2">
                    <span class="text-4xl">${section.emoji}</span>
                    <h2 class="font-display font-bold text-2xl md:text-3xl text-medical-dark">${section.title}</h2>
                </div>
                ${section.subtitle ? `<h3 class="font-display font-semibold text-xl text-slate-600 mb-2">${section.subtitle}</h3>` : ''}
                ${section.description ? `<p class="text-slate-500">${section.description}</p>` : ''}
            </div>
        `;

        let itemsHtml = '';
        if (section.items.length > 0) {
            itemsHtml = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">`;
            section.items.forEach(item => {
                const isChecked = appState.checkedItems[item.id] ? 'checked' : '';
                const cardClass = isChecked ? 'card-checked' : 'bg-white';
                
                itemsHtml += `
                    <label class="custom-checkbox-wrapper flex items-center p-4 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 ${cardClass}" data-id="${item.id}">
                        <input type="checkbox" class="custom-checkbox mr-4" ${isChecked}>
                        <span class="item-label font-medium text-slate-700 text-lg select-none">${item.label}</span>
                    </label>
                `;
            });
            itemsHtml += `</div>`;
        }

        let specialHtml = renderSpecialCard(section.specialCard);

        sectionEl.innerHTML = `
            <div class="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-white/50">
                ${headerHtml}
                ${itemsHtml}
                ${specialHtml}
            </div>
        `;
        
        els.container.appendChild(sectionEl);
    });
}

function renderSpecialCard(card) {
    if (!card) return '';
    
    switch (card.type) {
        case 'warning':
            return `
                <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl rounded-l-sm mt-6">
                    <p class="font-bold text-amber-800 mb-1">${card.title}</p>
                    <p class="text-amber-700">${card.text}</p>
                </div>
            `;
        case 'funny':
            return `
                <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl mt-6 flex items-center justify-between overflow-hidden relative">
                    <div class="relative z-10">
                        <p class="font-bold text-slate-800 text-lg">${card.title}</p>
                        <p class="text-slate-500">${card.text}</p>
                    </div>
                    <div class="text-6xl suitcase-icon transition-transform duration-500 transform hover:scale-110">🧳</div>
                </div>
            `;
        case 'interactive-food':
            return `
                <div class="mt-8 cursor-pointer transform hover:scale-105 transition-transform" onclick="openModal('food')">
                    <div class="bg-gradient-to-r from-amber-400 to-amber-600 text-white p-6 rounded-2xl shadow-lg text-center font-display font-bold text-xl relative overflow-hidden">
                        <span class="relative z-10">${card.title}</span>
                        <div class="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            `;
        case 'meter':
            return `
                <div class="bg-slate-800 text-white p-6 rounded-2xl mt-8">
                    <div class="flex justify-between items-end mb-2">
                        <p class="font-bold text-sm text-slate-300">${card.title}</p>
                        <p class="font-display font-bold text-accent-red text-xl">${card.value}</p>
                    </div>
                    <div class="w-full bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                        <div class="bg-gradient-to-r from-yellow-400 to-red-500 h-3 rounded-full loading-bar w-[90%]"></div>
                    </div>
                    <p class="text-xs text-slate-400 text-right italic">"${card.subtext}"</p>
                </div>
            `;
        case 'battery':
            return `
                <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl mt-6">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-16 h-8 border-2 border-slate-800 rounded flex items-center p-1 relative">
                            <div class="h-full bg-accent-red w-[10%] rounded-sm animate-pulse"></div>
                            <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-3 bg-slate-800 rounded-r"></div>
                        </div>
                        <p class="font-bold text-accent-red font-display">${card.title}</p>
                    </div>
                    <p class="text-slate-600 italic font-medium">${card.text}</p>
                </div>
            `;
        case 'interactive-passport':
            return `
                <div class="mt-8 cursor-pointer transform hover:scale-105 transition-transform" onclick="openModal('passport')">
                    <div class="bg-medical-dark text-white p-6 rounded-2xl shadow-lg text-center font-display font-bold text-xl flex items-center justify-center gap-3">
                        <span>🛂</span> ${card.title}
                    </div>
                </div>
            `;
        case 'suitcases':
            return `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="text-4xl mb-4">🧳</div>
                        <h4 class="font-display font-bold text-lg mb-4 text-slate-800">CHECK-IN BAG</h4>
                        <ul class="text-slate-600 space-y-2 text-sm font-medium">
                            <li>• Clothes</li>
                            <li>• Winter wear</li>
                            <li>• Shoes</li>
                            <li>• Food</li>
                            <li>• Personal items</li>
                        </ul>
                    </div>
                    <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="text-4xl mb-4">💼</div>
                        <h4 class="font-display font-bold text-lg mb-4 text-slate-800">SECOND BAG</h4>
                        <ul class="text-slate-600 space-y-2 text-sm font-medium">
                            <li>• Extra clothes</li>
                            <li>• Personal items</li>
                            <li>• Food</li>
                            <li>• Other allowed belongings</li>
                        </ul>
                    </div>
                    <div class="bg-medical-light border border-medical-blue/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="text-4xl mb-4">🎒</div>
                        <h4 class="font-display font-bold text-lg mb-4 text-medical-dark">HAND CARRY</h4>
                        <ul class="text-medical-dark/80 space-y-2 text-sm font-medium">
                            <li>• Passport & Documents</li>
                            <li>• Phone & Laptop</li>
                            <li>• Wallet</li>
                            <li>• Essential medicines</li>
                            <li>• Chargers & Power bank</li>
                            <li>• Travel essentials</li>
                        </ul>
                    </div>
                </div>
            `;
        case 'romantic':
            return `
                <div class="bg-pink-50 border border-pink-100 p-6 rounded-2xl mt-6 text-center">
                    <p class="font-display font-medium text-pink-600 text-lg leading-relaxed">${card.text}</p>
                </div>
            `;
        default:
            return '';
    }
}

// Interactions
function toggleItem(id, element) {
    const isChecked = !appState.checkedItems[id];
    
    if (isChecked) {
        appState.checkedItems[id] = true;
        element.classList.add('card-checked');
        element.classList.remove('bg-white');
    } else {
        delete appState.checkedItems[id];
        element.classList.remove('card-checked');
        element.classList.add('bg-white');
    }
    
    saveProgress();
    updateProgressUI();
}

function updateProgressUI() {
    appState.completedItems = Object.keys(appState.checkedItems).length;
    const pct = appState.totalItems === 0 ? 0 : Math.round((appState.completedItems / appState.totalItems) * 100);
    
    // Sticky bar
    els.stickyText.textContent = `${appState.completedItems} / ${appState.totalItems} ITEMS`;
    els.stickyBar.style.width = `${pct}%`;
    els.stickyPct.textContent = `${pct}%`;
    
    // Final section
    els.finalTotal.textContent = appState.totalItems;
    els.finalCompleted.textContent = appState.completedItems;
    els.finalRemaining.textContent = appState.totalItems - appState.completedItems;
    els.finalPct.textContent = `${pct}%`;
    
    // Circular progress
    const circumference = 251.2; // 2 * pi * r (r=40)
    const offset = circumference - (pct / 100) * circumference;
    els.finalCircleFill.style.strokeDashoffset = offset;
    els.finalCircleText.textContent = `${pct}%`;

    // Visual suitcase fill logic (Girl things section)
    const girlThingsSection = checklistSections.find(s => s.id === 'girl-things');
    if (girlThingsSection) {
        const girlItems = girlThingsSection.items.map(i => i.id);
        const checkedGirlItems = girlItems.filter(id => appState.checkedItems[id]).length;
        const fillPct = girlItems.length === 0 ? 0 : checkedGirlItems / girlItems.length;
        const suitcaseEl = document.querySelector('.suitcase-icon');
        if (suitcaseEl) {
            suitcaseEl.style.transform = `scale(${1 + (fillPct * 0.3)})`;
        }
    }

    // Completion Check
    if (pct === 100 && !appState.isComplete) {
        appState.isComplete = true;
        triggerCompletionAnimation();
    } else if (pct < 100) {
        appState.isComplete = false;
    }
}

function saveProgress() {
    localStorage.setItem('georgiaMissionProgress', JSON.stringify(appState.checkedItems));
}

function loadProgress() {
    const saved = localStorage.getItem('georgiaMissionProgress');
    if (saved) {
        try {
            appState.checkedItems = JSON.parse(saved);
        } catch (e) {
            appState.checkedItems = {};
        }
    }
}

function resetProgress() {
    appState.checkedItems = {};
    saveProgress();
    renderChecklist();
    updateProgressUI();
    closeModal('reset');
    showToast("Mission reset.");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Countdown
function initializeCountdown() {
    const targetDate = new Date(SITE_CONFIG.flightDate).getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown-timer').style.display = 'none';
            document.getElementById('countdown-finished').style.display = 'block';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('cd-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('cd-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('cd-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('cd-seconds').textContent = seconds.toString().padStart(2, '0');
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Email Feature
function generateEmailBody() {
    let body = `GEORGIA MISSION ✈️🇬🇪\n`;
    body += `Departure: ${new Date(SITE_CONFIG.flightDate).toLocaleDateString('en-US')}\n`;
    body += `Medical Year: ${SITE_CONFIG.medicalYear}\n`;
    body += `Packing Progress: ${appState.completedItems} / ${appState.totalItems} items\n`;
    body += `Status: ${appState.totalItems === 0 ? 0 : Math.round((appState.completedItems / appState.totalItems) * 100)}% READY\n\n`;
    body += `=========================\n\n`;

    checklistSections.forEach(section => {
        if (section.items.length > 0) {
            body += `${section.title.toUpperCase()} ${section.emoji}\n`;
            section.items.forEach(item => {
                const checked = appState.checkedItems[item.id] ? '☑' : '☐';
                body += `${checked} ${item.label}\n`;
            });
            body += `\n`;
        }
    });

    body += `=========================\n`;
    body += `Sent from the Georgia Mission Packing Website ❤️\n`;
    body += `Good luck, ${SITE_CONFIG.girlfriendName}!`;

    return encodeURIComponent(body);
}

function openEmailClient() {
    const subject = encodeURIComponent(`✈️ Georgia Mission — My October 4 Packing Checklist`);
    const body = generateEmailBody();
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
}

// PDF Generation
function downloadPDF() {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert("Please allow popups to generate the PDF.");
        return;
    }
    
    let html = `
    <html>
    <head>
        <title>Georgia Mission - Packing Checklist</title>
        <style>
            body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #334155; padding: 40px; max-width: 800px; margin: 0 auto; }
            h1 { color: #1e3a8a; border-bottom: 2px solid #eff6ff; padding-bottom: 10px; font-size: 24px; }
            h2 { color: #3b82f6; margin-top: 30px; font-size: 18px; display: flex; align-items: center; gap: 8px; }
            .meta { background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #e2e8f0; }
            .meta p { margin: 5px 0; font-size: 14px; }
            .item { margin-bottom: 8px; font-size: 15px; display: flex; align-items: center; }
            .checked { color: #16a34a; font-weight: bold; margin-right: 10px; font-size: 18px; }
            .unchecked { color: #94a3b8; margin-right: 10px; font-size: 18px; }
            .footer { margin-top: 50px; font-size: 13px; color: #64748b; text-align: center; font-style: italic; border-top: 1px solid #f1f5f9; padding-top: 20px; }
            @media print {
                body { padding: 0; }
                .meta { border: none; background: transparent; padding: 0; margin-bottom: 20px; }
            }
        </style>
    </head>
    <body>
        <h1>GEORGIA MISSION ✈️🇬🇪</h1>
        <div class="meta">
            <p><strong>Departure:</strong> ${new Date(SITE_CONFIG.flightDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p><strong>Medical Year:</strong> ${SITE_CONFIG.medicalYear}</p>
            <p><strong>Progress:</strong> ${appState.completedItems} / ${appState.totalItems} items (${appState.totalItems === 0 ? 0 : Math.round((appState.completedItems / appState.totalItems) * 100)}% READY)</p>
        </div>
    `;

    checklistSections.forEach(section => {
        if (section.items.length > 0) {
            html += `<h2>${section.emoji} ${section.title}</h2>`;
            section.items.forEach(item => {
                const isChecked = appState.checkedItems[item.id];
                const mark = isChecked ? '<span class="checked">☑</span>' : '<span class="unchecked">☐</span>';
                html += `<div class="item">${mark} <span style="text-decoration: ${isChecked ? 'line-through; color: #94a3b8' : 'none'}">${item.label}</span></div>`;
            });
        }
    });

    html += `
        <div class="footer">
            <p>Sent from the Georgia Mission Packing Website ❤️</p>
            <p>Good luck, ${SITE_CONFIG.girlfriendName}!</p>
        </div>
    </body>
    </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    
    // Wait for styles/content to load then trigger print dialog
    setTimeout(() => {
        printWindow.focus();
        printWindow.print();
    }, 250);
}

// Scroll Animations & Intersection Observer
function setupScrollAnimations() {
    // Sticky Progress Visibility
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                els.stickyProgress.classList.remove('-translate-y-full');
            } else {
                els.stickyProgress.classList.add('-translate-y-full');
            }
        });
    }, { threshold: 0.1 });
    
    const hero = document.querySelector('header');
    if (hero) heroObserver.observe(hero);

    // Section Fade-ins
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.section-enter').forEach(sec => {
        sectionObserver.observe(sec);
    });
}

// Modals
function openModal(id) {
    const modal = els.modals[id];
    if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.querySelector('div').classList.remove('scale-95');
        
        // Specific modal reset logic
        if (id === 'passport') {
            document.getElementById('passport-buttons').style.display = 'block';
            document.getElementById('passport-response').style.display = 'none';
        }
        if (id === 'verify') {
            document.getElementById('verify-step-1').style.display = 'block';
            document.getElementById('verify-step-2').style.display = 'none';
            document.getElementById('verify-step-3').style.display = 'none';
        }
    }
}

function closeModal(id) {
    const modal = els.modals[id];
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.querySelector('div').classList.add('scale-95');
    }
}

function setupEventListeners() {
    // Checkbox Delegation
    els.container.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const wrapper = e.target.closest('.custom-checkbox-wrapper');
            const id = wrapper.dataset.id;
            toggleItem(id, wrapper);
        }
    });

    // Start Button
    document.getElementById('start-mission-btn').addEventListener('click', () => {
        const firstSection = document.querySelector('.section-enter');
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Reset Flow
    document.getElementById('reset-btn').addEventListener('click', () => openModal('reset'));
    document.getElementById('confirm-reset-btn').addEventListener('click', resetProgress);
    
    // Final Verification Flow
    document.getElementById('verify-btn-1').addEventListener('click', () => {
        document.getElementById('verify-step-1').style.display = 'none';
        document.getElementById('verify-step-2').style.display = 'block';
    });
    document.getElementById('verify-btn-2').addEventListener('click', () => {
        document.getElementById('verify-step-2').style.display = 'none';
        document.getElementById('verify-step-3').style.display = 'block';
    });

    // Passport Interactions
    document.getElementById('passport-yes').addEventListener('click', () => {
        document.getElementById('passport-buttons').style.display = 'none';
        const res = document.getElementById('passport-response');
        res.innerHTML = `<p class="font-display font-bold text-xl text-medical-dark">GOOD.<br>WE CAN CONTINUE. 😌</p>`;
        res.style.display = 'block';
        setTimeout(() => closeModal('passport'), 2000);
    });
    
    document.getElementById('passport-no').addEventListener('click', () => {
        document.getElementById('passport-buttons').style.display = 'none';
        const res = document.getElementById('passport-response');
        res.innerHTML = `<p class="font-display font-bold text-xl text-accent-red">GO CHECK IT RIGHT NOW. 🏃‍♀️</p>`;
        res.style.display = 'block';
        // Add a visual shake
        const modalContent = els.modals.passport.querySelector('div');
        modalContent.style.animation = 'shake 0.5s';
        setTimeout(() => modalContent.style.animation = '', 500);
    });

    // Secret Button
    document.getElementById('secret-btn').addEventListener('click', () => openModal('secret'));

    // Export Buttons
    const emailBtn = document.getElementById('send-email-btn');
    if (emailBtn) emailBtn.addEventListener('click', openEmailClient);
    
    const pdfBtn = document.getElementById('download-pdf-btn');
    if (pdfBtn) pdfBtn.addEventListener('click', downloadPDF);

    // Close Modals
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.fixed.inset-0');
            const id = Object.keys(els.modals).find(key => els.modals[key] === modal);
            if (id) closeModal(id);
        });
    });

    // Close modal on click outside
    Object.values(els.modals).forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                const id = Object.keys(els.modals).find(key => els.modals[key] === modal);
                if (id) closeModal(id);
            }
        });
    });

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            Object.keys(els.modals).forEach(id => closeModal(id));
        }
    });
}

function showToast(message) {
    els.toastMsg.textContent = message;
    els.toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        els.toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

function triggerCompletionAnimation() {
    // Confetti
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#3b82f6', '#f472b6', '#fdfbf7']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#3b82f6', '#f472b6', '#fdfbf7']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Show Final Verification Modal after a short delay
    setTimeout(() => {
        openModal('verify');
    }, 1500);
}

// Run App
document.addEventListener('DOMContentLoaded', initializeApp);
