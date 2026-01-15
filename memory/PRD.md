# Computer Repair Pros - Hills District Sydney

## Original Problem Statement
Build a clone of labiome.com.au but adapted for a computer repair business named "Computer Repair Pros" located in the Hills district of Sydney. The website must be:
- Built with plain HTML, CSS, and JavaScript (NO React)
- Lightning fast and SEO-friendly (aligned with Google's font sizing, RankBrain, SpamBrain)
- Super helpful and address customer pain points
- Include homepage, about page, contact page, and multiple service pages and area pages for all suburbs of the Hills district

## User Preferences
- Blue hues theme color
- Impactful and eye-catching logo
- Every page must have a hero section with an appropriate image
- Same fonts as labiome (DM Sans + Cormorant Garamond)

## What's Been Implemented

### Dec 2025 - Core Build
- **Architecture Fixed**: Switched from React dev server hack to proper static file server (`serve`)
- **Homepage** (`index.html`): Complete with hero section, services grid, trust badges, testimonials, areas section, CTA, footer
- **About Page** (`about.html`): Updated with hero image, our story section, why choose us, community section
- **Contact Page** (`contact.html`): Hero section, contact info cards, contact form, FAQ accordion, map section
- **8 Service Pages**: Laptop repair, desktop repair, virus removal, data recovery, screen replacement, hardware upgrades, network setup, mac repair
- **16 Area Pages**: Castle Hill, Baulkham Hills, Kellyville, Rouse Hill, Bella Vista, Cherrybrook, West Pennant Hills, Dural, Glenhaven, North Rocks, Winston Hills, Kenthurst, Norwest, Beaumont Hills, Box Hill, Galston
- **CSS Styles** (`styles.css`): Blue theme with CSS variables, responsive design, all component styles
- **JavaScript** (`main.js`): Mobile menu toggle, header scroll effect, FAQ accordion, form handling

## Tech Stack
- **Frontend**: Plain HTML5, CSS3, Vanilla JavaScript
- **Serving**: `serve` package (static file server) on port 3000
- **No Backend Required**: Static site only

## File Structure
```
/app/frontend/public/
├── index.html           # Homepage
├── about.html           # About page
├── contact.html         # Contact page
├── css/
│   └── styles.css       # All styles (blue theme)
├── js/
│   └── main.js          # JavaScript functionality
├── services/
│   ├── laptop-repair.html
│   ├── desktop-repair.html
│   ├── virus-removal.html
│   ├── data-recovery.html
│   ├── screen-replacement.html
│   ├── hardware-upgrades.html
│   ├── network-setup.html
│   └── mac-repair.html
└── areas/
    ├── castle-hill.html
    ├── baulkham-hills.html
    ├── kellyville.html
    ├── rouse-hill.html
    ├── bella-vista.html
    ├── cherrybrook.html
    ├── west-pennant-hills.html
    ├── dural.html
    ├── glenhaven.html
    ├── north-rocks.html
    ├── winston-hills.html
    ├── kenthurst.html
    ├── norwest.html
    ├── beaumont-hills.html
    ├── box-hill.html
    └── galston.html
```

## Prioritized Backlog

### P0 - High Priority
- [ ] Update remaining service pages with hero images and consistent design
- [ ] Update remaining area pages with hero images and consistent design
- [ ] Test mobile responsiveness across all pages

### P1 - Medium Priority
- [ ] Add favicon
- [ ] Add Open Graph images for social sharing
- [ ] Optimize images (compression, lazy loading)
- [ ] Add Google Analytics integration

### P2 - Low Priority / Future
- [ ] Add a blog section for SEO content
- [ ] Add a testimonials/reviews page
- [ ] Add schema markup for services
- [ ] Create sitemap.xml
- [ ] Add contact form backend (could use Formspree or similar service)

## Known Constraints
- This is a static site - no server-side processing
- Contact form currently has no backend (needs third-party service for submissions)
- Images are from Unsplash (may need to be replaced with client's own photos)
