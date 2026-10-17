# KMA redesign concept

Route: /kma. This demo has its own component and scoped CSS; it does not use a master business template.

## Sources reviewed October 17, 2026

- https://kmahvacandconstruction.com/ — service scope, family-operated business, contractor license as published by KMA.
- https://kmahvacandconstruction.com/portfolio/ — Fallbrook and San Jacinto project scopes; 62 package-unit replacements at Temecula Valley Unified School District.
- https://kmahvacandconstruction.com/contact/ — office/mobile numbers, email, hours, service area.

Business details reflect KMA's published website, not an independent licensing or insurance verification. No invented reviews, offers, performance statistics, or emergency-response promises are included.

Project images are linked from KMA's original WordPress uploads. They are external dependencies and need permission and local copies before production handoff. The demo includes no third-party stock imagery or invented project photography.

Contact buttons open the phone dialer or the new inline inquiry form. The form reviews requests on-page and defaults to an email draft. No backend has been connected and no successful delivery is simulated.

The page is an independent redesign concept. KMA's live website is unchanged.

## Homepage interactions and original destinations

The homepage now includes a hand-drawn SVG HVAC schematic, entrance and viewport reveals, an audience selector, and a project viewer. Tab groups support arrow keys, Home, and End. The pause-motion control stops animations, and prefers-reduced-motion disables motion while keeping content visible.

Original homepage DOM inspected October 17, 2026:
- Facebook: https://www.facebook.com/kmahvac/
- Instagram: https://www.instagram.com/kmahvac/
- Twitter/X: https://twitter.com/kmahvac
- Google Maps: original iframe embed retained, including KMA's business identifier. The embed is lazy-loaded and has a titled iframe; a direct Maps link is available outside it.

Social destinations match links published by KMA; account activity and ownership have not been independently audited. The map depends on Google Maps availability.

Scope: homepage only. Dedicated service and other pages remain future work.

Validation: local npm ci, npm run lint, npm run build. Manual desktop and mobile browser checks covered audience selection, keyboard tab selection, project switching, motion pause, mobile navigation, social destinations, rendered Google Maps marker, and horizontal overflow. No browser console errors were observed.

## Services, quotes, and recognition

The six service categories match the supplied navigation screenshot and the original site: air conditioning; heating; commercial tenant space renovation and turnover; construction wiring; home additions; whole home air purification.

https://kmahvacandconstruction.com/air-conditioning/ explicitly states that a free written quote is supplied for new AC installation. The hero says “Free written quotes on new AC installations”; it does not promise free diagnostics, guaranteed scheduling, or free estimates across every trade.

Badge images were visually inspected on October 17, 2026:
- BBB Accredited Business.
- Original recognition panel: EPA Lead-Safe Certified Firm, HomeAdvisor Screened & Approved, Expertise.com 2021 HVAC recognition, and RCCD logo.
- Best of Moreno Valley HVAC Contractor award, 2023.

These are presented as recognition featured on KMA's website, not independently verified current certification. Award dates are retained. California Highway Patrol and County of San Diego logos are not presented as certifications.

## Inline inquiry form

Residential repair, seasonal maintenance, replacement, commercial/public works RFP, and construction request types are supported. Commercial mode adds agency/organization and an optional bid due date. Service links preselect the requested service. Native validation and a review/edit step preserve entered details.

With no delivery configuration, the form prepares a mailto draft and explicitly says nothing has been sent. Copy Request is available as a fallback. No entries are saved to browser storage or a server. Actual email sending stays with the visitor's email application.

To connect direct delivery, set VITE_KMA_INQUIRY_ENDPOINT to an approved relative endpoint or HTTPS endpoint before building. It must accept a JSON POST and respond with a successful HTTP status and JSON containing { "accepted": true } only after accepting the request. This repository does not include that server. The client handles failures/timeouts without claiming success; the server must provide its own validation, spam controls, and appropriate CORS configuration. Never put private credentials in VITE_ variables.

No real inquiries were sent during testing. Synthetic data was used for browser checks.

## Icon attribution

Social logos: Font Awesome Free Brands, by Fonticons, Inc. https://fontawesome.com/
SVG icons licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
Package code is MIT licensed. Only the Facebook, Instagram, and X brand SVGs are imported; no icon font or remote icon script is loaded.

## Checks

npm test runs the inquiry transport tests, including failed requests and HTML fallback responses that must not be treated as accepted inquiries. GitHub Actions runs these tests alongside lint and production build.
